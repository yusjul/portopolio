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
      <div className="max-w-4xl space-y-6 z-10">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-label-mono text-[10px] tracking-[0.3em] text-outline uppercase"
        >
          Portfolio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-display-lg bg-gradient-to-b from-white to-on-surface-variant/70 bg-clip-text text-transparent font-black tracking-tight leading-[1.08]"
        >
          Membangun sesuatu<br />dari ide menjadi nyata.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-body-md text-outline tracking-wider font-label-mono"
        >
          Web &nbsp;·&nbsp; Data &nbsp;·&nbsp; Teknologi
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-4"
        >
          <Button variant="primary" onClick={onStart} className="group">
            Lihat Karya
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform text-black" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
