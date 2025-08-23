import Link from "next/link";
import { motion } from "framer-motion";
import "@/app/utils/i18n";
import { useTranslation } from "react-i18next";

export default function ThankYou() {

  const { t } = useTranslation();

  return (
    <main className="min-h-dvh grid place-items-center bg-slate-950 text-white">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-6 max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-glow"
      >
        <h1 className="text-3xl font-bold">{t('thanks.title')}</h1>
        <p className="mt-2 text-white/80">
          {t('thanks.description')}
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-xl bg-gradient-to-br from-violet-400 to-cyan-300 px-5 py-3 font-medium text-slate-900"
        >
          {t('thanks.buttonText')}
        </Link>
      </motion.div>
    </main>
  );
}
