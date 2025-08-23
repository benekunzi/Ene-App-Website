'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, X } from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import "@/app/utils/i18n";

const FaqIcon = ({ expanded }: { expanded: boolean }) => (
  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300 text-white">
    {expanded ? <X size={18} /> : <Plus size={18} />}
  </div>
);

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);
  const QA = [
    { q: t('faqQuestions.0.q'), a: t('faqQuestions.0.a') },
    { q: t('faqQuestions.1.q'), a: t('faqQuestions.1.a') },
    { q: t('faqQuestions.2.q'), a: t('faqQuestions.2.a') },
    { q: t('faqQuestions.3.q'), a: t('faqQuestions.3.a') },
    { q: t('faqQuestions.4.q'), a: t('faqQuestions.4.a') },
  ];
  return (
    <section className="mx-auto mt-16 max-w-3xl">
      <h2 className="text-2xl font-semibold tracking-tight text-black">{t('faqTitle')}</h2>
      <p className="text-black/60">{t('faqDescription')}</p>
      <div className="mt-6 space-y-4">
        {QA.map(({ q, a }, idx) => {
          const expanded = open === idx;
          return (
            <div key={idx} className="bg-[#f2f3f3] rounded-2xl shadow-sm">
              <button
                onClick={() => setOpen(expanded ? null : idx)}
                className="w-full flex items-center justify-between gap-6 p-5 sm:p-6 text-left focus:outline-none"
                aria-expanded={expanded}
              >
                <span className="font-semibold text-black">{q}</span>
                <FaqIcon expanded={expanded} />
              </button>
              <AnimatePresence initial={false}>
                {expanded && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-black/80 font-medium">
                      {a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
