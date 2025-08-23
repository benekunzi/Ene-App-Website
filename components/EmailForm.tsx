'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useTranslation } from 'react-i18next';
import { Turnstile } from '@marsidev/react-turnstile';
import "@/app/utils/i18n";

const EmailSchema = z.string().email();
const USE_CAPTCHA = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState<string>(''); // Turnstile token
  const [hp, setHp] = useState('');               // honeypot
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { t } = useTranslation();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const parsed = EmailSchema.safeParse(email.trim());
    if (!parsed.success) {
      setError(t('emailError'));
      return;
    }
    if (USE_CAPTCHA && !token) {
      setError(t('captchaMissing') || 'Please complete the verification.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, token, hp })
      });

      if (!res.ok) {
        // Show specific server errors when possible
        let msg = t('submitError');
        try {
          const data = await res.json();
          if (data?.error === 'Challenge failed') msg = t('captchaError') || 'Verification failed.';
          if (data?.error === 'Too many requests') msg = t('rateLimited') || 'Too many attempts. Try later.';
          if (data?.error === 'Invalid payload') msg = t('invalidEmail');
        } catch { }
        setError(msg);
        return;
      }

      router.push('/thank-you');
    } catch (err) {
      setError(t('submitError'));
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.form
      onSubmit={onSubmit}
      className="w-full max-w-xl mx-auto mb-16 mt-16"
      aria-label="Join the waitlist"
    >
      {/* Honeypot: hidden field bots often fill */}
      <input
        tabIndex={-1}
        autoComplete="off"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex overflow-hidden rounded-2xl shadow-glow ring-1 ring-white/10 focus-within:ring-white/25">
        <input
          type="email"
          required
          aria-label="Email address"
          placeholder={t('emailPlaceholder')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[rgba(239,240,240,255)] px-4 py-3 text-black placeholder-black/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || (USE_CAPTCHA && !token)}
          className="px-5 py-3 font-medium bg-gradient-to-br from-violet-400 to-cyan-300 text-black hover:opacity-95 transition-opacity disabled:opacity-70"
        >
          {loading ? t('joinWaitlist') : t('joinWaitlist')}
        </button>
      </div>

      {/* Turnstile widget (auto-runs on interaction; remove if you don’t want captcha) */}
      {USE_CAPTCHA && (
        <div className="mt-3">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
            options={{ appearance: 'interaction-only' }}
            onSuccess={(tkn) => setToken(tkn)}
            onExpire={() => setToken('')}
            onError={() => setToken('')}
          />
        </div>
      )}

      {error && <p className="mt-2 text-sm text-red-500" aria-live="polite">{error}</p>}
      <p className="mt-2 text-xs text-black/60">{t('emailPrivacy')}</p>
    </motion.form>
  );
}
