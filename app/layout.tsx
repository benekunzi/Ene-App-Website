import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My App — Pre‑launch",
  description: "Get notified when we launch",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-slate-950 text-white antialiased selection:bg-white/20 selection:text-white/90">
        {children}
      </body>
    </html>
  );
}
