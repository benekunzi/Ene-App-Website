'use client';

import Logo from "@/components/Logo";
import EmailForm from "@/components/EmailForm";
import FeatureGrid from "@/components/FeatureGrid";
import FAQ from "@/components/FAQ";
import LottieAnimation from "@/components/Lottie";
import { motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from 'react-i18next';
import "@/app/utils/i18n";
import Link from "next/link";

export default function HomePage() {

  const { t, i18n } = useTranslation();

  return (
    <main className="hero-gradient relative selection:bg-indigo-400 selection:text-white">
      {/* Decorative grid pattern */}
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:18px_18px] opacity-[0.12]" />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-10">
        <header className="flex items-center justify-between">
          <Logo />
          <LanguageSwitcher
            language={i18n.language}
            setLanguage={(lang: string) => i18n.changeLanguage(lang)}
          />
        </header>

        <section className="mt-16 text-center">
          <LottieAnimation />
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-4xl sm:text-5xl font-extrabold tracking-tight text-black"
          >
            {t('title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mx-auto mt-4 max-w-2xl text-black/70"
          >
            {t('description')}
          </motion.p>

          <motion.div id="waitlist">
            <EmailForm />
          </motion.div>

          <motion.h2
            className="mx-auto mt-20 max-w-3xl text-3xl sm:text-4xl font-extrabold tracking-tight text-black"
          >
            {t('featuresTitle')}
          </motion.h2>
          <FeatureGrid />

          <FAQ />
        </section>

        <footer className="mt-24 text-center text-xs text-black/50">
          © {new Date().getFullYear()} {t('footerText')}
          <div className="flex justify-center space-x-4 mt-2">
            <Link href={"/privacy-policy" as any} className="hover:underline">
              {t('privacyPolicy')}
            </Link>
            <Link href={"/terms-and-conditions" as any} className="hover:underline">
              {t('termsAndConditions')}
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
