"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode7Props {
  id?: string;
}

interface FocusArea {
  title: string;
  status: string;
  desc: string;
  tech: string[];
}

export const Episode7: React.FC<Episode7Props> = ({ id }) => {
  const focusAreas: FocusArea[] = [
    {
      title: 'Frontend Engineering',
      status: 'Fokus Utama',
      desc: 'Membangun antarmuka modern yang responsif, cepat diakses, dan nyaman digunakan dengan arsitektur komponen terstruktur.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Backend & Integrasi Data',
      status: 'Pengembangan Aktif',
      desc: 'Merancang alur data, integrasi API, dan pengelolaan database relasional untuk kebutuhan fungsional aplikasi.',
      tech: ['Node.js', 'REST API', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Analisis Sistem Informasi',
      status: 'Akademik & Praktik',
      desc: 'Menganalisis kebutuhan pengguna, memetakan proses bisnis, dan merancang solusi digital yang efisien.',
      tech: ['Business Process', 'System Design', 'Figma', 'UML']
    },
    {
      title: 'Otomasi & Eksplorasi Data',
      status: 'Eksplorasi',
      desc: 'Mengotomatisasi tugas rutin dengan skrip mandiri dan mengeksplorasi pemanfaatan model bahasa untuk produktivitas.',
      tech: ['Python', 'Automation Scripting', 'Data Processing']
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin py-16">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-xl"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            07 — Fokus
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Bidang minat dan pengembangan
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Area teknis yang aktif saya pelajari dan terapkan dalam proyek nyata.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {focusAreas.map((area, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={area.title}
              className="p-6 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-label-mono text-[10px] text-primary-fixed-dim tracking-wider uppercase font-semibold">
                    {area.status}
                  </span>
                  <span className="font-label-mono text-xs text-outline">
                    0{i + 1}
                  </span>
                </div>
                
                <h3 className="text-body-md font-bold text-on-surface">
                  {area.title}
                </h3>
                
                <p className="text-body-sm text-on-surface-variant/80 font-light leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-outline-variant/10 flex flex-wrap gap-1.5">
                {area.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-label-mono bg-surface-container/40 text-outline px-2.5 py-0.5 rounded"
                  >
                    {t}
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

export default Episode7;
