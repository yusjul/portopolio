"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onStart: () => void;
  id?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onStart, id }) => {
  return (
    <section id={id} className="snap-section flex flex-col items-center justify-center text-center px-safe-margin bg-transparent">
      <div className="max-w-5xl space-y-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-panel px-4 py-1.5 w-fit mx-auto text-[10px] tracking-[0.25em] font-label-mono font-bold uppercase text-primary-fixed-dim/95 rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]"
        >
          Prolog // Episode 00
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display-lg bg-gradient-to-b from-white via-on-surface to-on-surface-variant/80 bg-clip-text text-transparent leading-[1.08] font-black tracking-tight"
        >
          Setiap pencipta bermula dari kebisingan <br />
          <span className="bg-gradient-to-r from-primary-fixed-dim via-[#00f2ff] to-[#a8f8ff] bg-clip-text text-transparent italic font-light">sebelum akhirnya hening dan menjadi sinyal.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center pt-6"
        >
          <Button variant="primary" onClick={onStart} className="group shadow-lg">
            MULAI PERJALANAN
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-black font-extrabold" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
