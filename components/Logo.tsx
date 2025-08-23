'use client';
import { motion } from 'framer-motion';

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center gap-3"
      aria-label="App Logo"
    >
      {/* <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-400 to-cyan-300 shadow-glow" /> */}
      <span className="text-2xl text-black font-bold tracking-wide">Ene</span>
    </motion.div>
  );
}
