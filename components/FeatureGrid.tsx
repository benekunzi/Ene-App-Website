'use client';

import { useState, useId, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { QrCode, Image as ImageIcon, FileText, AlignLeft, X } from 'lucide-react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';
import "@/app/utils/i18n";

type Card = {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon: React.ReactNode;
  videoUrl: string;
};

export default function FeatureGrid() {

  const { t } = useTranslation();

  const baseCards: Omit<Card, 'id'>[] = [
    {
      title: t('featureCards.0.title'),
      subtitle: t('featureCards.0.subtitle'),
      gradient: 'card-blue',
      icon: <QrCode className="h-10 w-10" />,
      videoUrl: '/videos/Promo-Video-App-QR.mov'
    },
    {
      title: t('featureCards.1.title'),
      subtitle: t('featureCards.1.subtitle'),
      gradient: 'card-purple',
      icon: <ImageIcon className="h-10 w-10" />,
      videoUrl: '/videos/Promo-Video-App-Image.mov'
    },
    {
      title: t('featureCards.2.title'),
      subtitle: t('featureCards.2.subtitle'),
      gradient: 'card-orange',
      icon: <FileText className="h-10 w-10" />,
      videoUrl: '/videos/Promo-Video-App-PDF.mov'
    },
    {
      title: t('featureCards.3.title'),
      subtitle: t('featureCards.3.subtitle'),
      gradient: 'card-green',
      icon: <AlignLeft className="h-10 w-10" />,
      videoUrl: '/videos/Promo-Video-App-Text.mov'
    },
  ];
  const unique = useId();
  const [activeId, setActiveId] = useState<string | null>(null);
  const cards: Card[] = baseCards.map((c, idx) => ({ ...c, id: `${unique}-${idx}` }));
  const activeCard = activeId ? cards.find((card) => card.id === activeId) : null;

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActiveId(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <LayoutGroup>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
        {cards.map((card) => {
          const isActive = card.id === activeId;
          return (
            <motion.button
              key={card.id}
              layoutId={`card-${card.id}`}
              onClick={() => setActiveId(card.id)}
              className={clsx(
                "relative h-44 rounded-3xl p-6 text-left text-slate-900 shadow-glow focus:outline-none focus:ring-4 ring-white/30 transition-transform",
                card.gradient,
                "hover:scale-[1.02]"
              )}
              aria-expanded={isActive}
              aria-controls={`expanded-${card.id}`}
            >
              <div className="absolute right-4 top-4 text-white">
                {card.icon}
              </div>
              <div className="relative z-10">
                <p className="text-2xl font-extrabold drop-shadow-sm text-white">{card.title}</p>
                <p className="text-white mt-2 font-semibold">{card.subtitle}</p>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {activeId && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {activeCard && (
          <motion.div
            id={`expanded-${activeCard.id}`}
            layoutId={`card-${activeCard.id}`}
            className={clsx(
              "fixed inset-4 sm:inset-10 z-50 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10",
              activeCard.gradient
            )}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 180, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveId(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full p-2 bg-white/10 hover:bg-white/20 transition"
            >
              <X className="h-5 w-5 text-white" />
            </button>
            <div className="grid h-full grid-rows-[auto,1fr]">
              <div className="p-5 sm:p-6 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">Preview</h3>
              </div>
              <div className="p-5 sm:p-8 overflow-auto flex items-center justify-center">
                <video
                  className="w-full max-w-3xl rounded-xl shadow-glow"
                  src={activeCard.videoUrl}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
