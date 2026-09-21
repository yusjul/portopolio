"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode6Props {
  id?: string;
}

export const Episode6: React.FC<Episode6Props> = ({ id }) => {
  return (
    <section id={id} className="snap-section flex flex-col justify-center items-center px-safe-margin bg-transparent relative overflow-hidden py-16">
      <div className="text-center space-y-8 z-10 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase"
        >
          06 — Identitas
        </motion.div>

        <div className="space-y-3">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-headline-lg md:text-display-lg font-black tracking-tight text-on-surface uppercase"
          >
            Muhammad Yusuf Julian
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-label-mono text-xs md:text-sm text-primary-fixed-dim tracking-[0.25em] uppercase"
          >
            Yusjul · Mahasiswa Sistem Informasi
          </motion.p>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-body-md text-on-surface-variant font-light leading-relaxed max-w-lg mx-auto"
        >
          Tertarik pada eksplorasi antarmuka digital yang intuitif, arsitektur data yang efisien, dan penerapan teknologi yang berdampak langsung pada produktivitas.
        </motion.p>
      </div>
    </section>
  );
};

export default Episode6;
