export const runtime = "nodejs"; // firebase-admin needs Node, not Edge

import { NextResponse } from "next/server";
import { db } from "@/lib/firebaseAdmin";
import { z } from "zod";
import crypto from "crypto";

const Body = z.object({
  email: z.string().email(),
  token: z.string().optional(), // Turnstile token
  hp: z.string().optional(),    // honeypot
});

function getIP(req: Request) {
  const xf = req.headers.get("x-forwarded-for");
  return xf?.split(",")[0].trim() || "0.0.0.0";
}

async function verifyTurnstile(token: string, ip: string) {
  if (!process.env.TURNSTILE_SECRET_KEY) return true; // allow if not configured
  const form = new URLSearchParams();
  form.append("secret", process.env.TURNSTILE_SECRET_KEY!);
  form.append("response", token || "");
  form.append("remoteip", ip);

  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    { method: "POST", body: form }
  );
  const data = await res.json();
  return !!data.success;
}

/** very small Firestore-based rate limiter: 3 requests/min per IP */
async function rateLimit(ip: string) {
  const ref = db.collection("rate_limits").doc(ip.replace(/[^a-z0-9]/gi, "_").slice(0, 120));
  const now = Date.now();
  const windowMs = 60_000;
  const max = 3;
  let allowed = true;

  await db.runTransaction(async (tx) => {
    const snap = await tx.get(ref);
    const data = snap.exists ? (snap.data() as any) : {};
    const ts = data.ts ?? 0;
    let count = data.count ?? 0;

    if (now - ts > windowMs) {
      count = 1;
      tx.set(ref, { count, ts: now }, { merge: true });
    } else {
      count += 1;
      if (count > max) allowed = false;
      tx.set(ref, { count, ts }, { merge: true });
    }
  });

  return allowed;
}

export async function POST(request: Request) {
  const ip = getIP(request);
  const ua = request.headers.get("user-agent") ?? "";

  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, error: "Bad JSON" }, { status: 400 }); }

  const parsed = Body.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  const { email, token, hp } = parsed.data;

  // Honeypot: if bots filled the hidden field, silently accept but do nothing
  if (hp && hp.trim() !== "") return NextResponse.json({ ok: true });

  // Turnstile verification
  const human = await verifyTurnstile(token ?? "", ip);
  if (!human) return NextResponse.json({ ok: false, error: "Challenge failed" }, { status: 400 });

  // Rate limit
  const allowed = await rateLimit(ip);
  if (!allowed) return NextResponse.json({ ok: false, error: "Too many requests" }, { status: 429 });

  // Normalize + dedupe
  const normalized = email.trim().toLowerCase();
  const emailHash = crypto.createHash("sha256").update(normalized).digest("hex");

  const docRef = db.collection("waitlist").doc(emailHash);
  const exists = (await docRef.get()).exists;

  await docRef.set({
    email: normalized,
    emailHash,
    createdAt: new Date(),
    // anonymize IP (first two octets only)
    ip: ip.split(".").slice(0, 2).join(".") + ".0.0",
    ua,
    source: "prelaunch",
    status: exists ? "existing" : "new",
  }, { merge: true });

  return NextResponse.json({ ok: true, duplicate: exists });
}
