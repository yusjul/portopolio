"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode6Props {
  id?: string;
}

export const Episode6: React.FC<Episode6Props> = ({ id }) => {
  return (
    <section id={id} className="snap-section flex flex-col justify-center items-center px-safe-margin bg-transparent relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-primary-fixed-dim/5 rounded-full filter blur-[120px] pointer-events-none z-0" />

      <div className="text-center space-y-6 z-10 select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel px-3 py-1.5 w-fit mx-auto text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]"
        >
          Episode 06 // Identitas
        </motion.div>

        <div className="space-y-2">
          <motion.h2
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-headline-lg md:text-display-lg font-black tracking-tighter bg-gradient-to-r from-white via-on-surface to-on-surface-variant/80 bg-clip-text text-transparent uppercase"
          >
            MUHAMMAD YUSUF JULIAN
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-label-mono text-xs md:text-sm text-primary-fixed-dim tracking-[0.3em] uppercase"
          >
            YUSJUL // SISTEM INFORMASI
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-label-mono text-[10px] text-outline tracking-wider max-w-md mx-auto pt-8 border-t border-outline-variant/10"
        >
          PEKA_PERANGKAT_KERAS // BERPIKIR_TINGKAT_SISTEM
        </motion.p>
      </div>
    </section>
  );
};

export default Episode6;
