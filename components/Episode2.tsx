"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode2Props {
  id?: string;
}

interface Milestone {
  year: string;
  title: string;
  desc: string;
  focus: string[];
}

const milestones: Milestone[] = [
  {
    year: "2021",
    title: "Fondasi Pemrograman",
    desc: "Memulai dengan logika pemrograman, algoritma dasar, dan pengembangan web statis.",
    focus: ["HTML & CSS", "JavaScript", "Algoritma Dasar"]
  },
  {
    year: "2022",
    title: "Pengembangan Fullstack Dasar",
    desc: "Mempelajari integrasi backend, perancangan database relasional, dan arsitektur CRUD.",
    focus: ["PHP & MySQL", "REST API", "Database Design"]
  },
  {
    year: "2023",
    title: "Sistem Informasi & Desain Antarmuka",
    desc: "Fokus pada analisis kebutuhan pengguna, alur proses bisnis, dan prototyping antarmuka.",
    focus: ["UI/UX Prototyping", "Analisis Sistem", "Figma"]
  },
  {
    year: "2024 — Sekarang",
    title: "Ekosistem Web Modern & Data",
    desc: "Membangun aplikasi web performan dengan teknologi terkini serta eksplorasi otomasi dan data.",
    focus: ["React & Next.js", "TypeScript", "Tailwind CSS"]
  }
];

export const Episode2: React.FC<Episode2Props> = ({ id }) => {
  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin relative py-16">
      <div className="w-full max-w-5xl mx-auto z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-xl"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            02 — Perjalanan
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Fase dan perkembangan
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Perjalanan belajar yang konsisten melalui eksplorasi praktis, pemecahan masalah, dan pembangunan proyek nyata.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="font-label-mono text-xs font-semibold text-primary-fixed-dim tracking-wide">
                  {item.year}
                </span>
                <h3 className="text-body-md font-bold text-on-surface">
                  {item.title}
                </h3>
                <p className="text-body-sm text-on-surface-variant/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-outline-variant/10 flex flex-wrap gap-1.5">
                {item.focus.map((f) => (
                  <span
                    key={f}
                    className="font-label-mono text-[9px] text-outline px-2 py-0.5 rounded bg-surface-container/40"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episode2;
