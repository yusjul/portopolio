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
    <section id={id} className="snap-section flex flex-col items-center justify-center text-center px-safe-margin bg-surface">
      <div className="max-w-4xl space-y-6 z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-label-mono text-xs text-primary-fixed-dim tracking-[0.3em] uppercase block"
        >
          Prologue // Episode 00
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display-lg text-on-surface leading-tight font-black"
        >
          Every developer starts as noise <br />
          <span className="text-primary-fixed-dim italic font-light">before becoming signal.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center pt-8"
        >
          <Button variant="primary" onClick={onStart} className="group">
            START EXPERIENCE
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
