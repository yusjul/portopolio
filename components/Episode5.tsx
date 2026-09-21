"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode5Props {
  id?: string;
}

interface Principle {
  num: string;
  title: string;
  desc: string;
}

const principles: Principle[] = [
  {
    num: "01",
    title: "Sederhana dan Fungsional",
    desc: "Menghindari kompleksitas yang tidak perlu. Solusi terbaik biasanya adalah yang paling jelas dan mudah dipahami."
  },
  {
    num: "02",
    title: "Struktur dan Keterbacaan",
    desc: "Kode ditulis bukan hanya untuk mesin, melainkan untuk dibaca, dirawat, dan dikembangkan kembali oleh manusia."
  },
  {
    num: "03",
    title: "Orientasi Pengguna",
    desc: "Teknologi adalah sarana. Fokus utama selalu pada kenyamanan dan nilai yang dirasakan langsung oleh pengguna."
  }
];

export const Episode5: React.FC<Episode5Props> = ({ id }) => {
  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin py-16 relative">
      <div className="max-w-5xl w-full mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-xl"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            05 — Prinsip
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Pendekatan kerja
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Pedoman sederhana yang saya pegang dalam merancang dan membangun setiap sistem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((p, idx) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-label-mono text-xs font-bold text-primary-fixed-dim tracking-wider">
                  {p.num}
                </span>
                <h3 className="text-body-md font-bold text-on-surface">
                  {p.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant/80 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episode5;
