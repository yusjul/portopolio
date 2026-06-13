"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode7Props {
  id?: string;
}

export const Episode7: React.FC<Episode7Props> = ({ id }) => {
  const focusAreas = [
    {
      sector: 'MENGHIDUPKAN PIKIRAN MESIN',
      status: 'RISET_AKTIF',
      desc: 'Mencoba menanamkan kepekaan pada kecerdasan buatan, menjembatani logika komputasi dengan intuisi manusia agar teknologi terasa lebih manusiawi.',
      tech: ['Transformers', 'Pinecone', 'Ollama', 'PyTorch'],
      progress: 75
    },
    {
      sector: 'RUANG INTERAKSI MANUSIA',
      status: 'PRODUKSI_STABIL',
      desc: 'Merancang ruang-ruang digital interaktif yang terasa hidup, responsif, dan menyambut setiap sentuhan pengguna dengan kelembutan gerakan.',
      tech: ['Next.js App Router', 'WebSockets', 'Tailwind v4', 'Framer Motion'],
      progress: 95
    },
    {
      sector: 'JANTUNG YANG BERDETAK KENCANG',
      status: 'PRODUKSI_STABIL',
      desc: 'Membangun fondasi kuat di balik layar yang mengalirkan data tanpa kenal lelah, menjaga agar kehidupan digital tidak pernah padam.',
      tech: ['Go', 'Node.js', 'PostgreSQL', 'Redis'],
      progress: 90
    },
    {
      sector: 'SEMESTA DI ATAS AWAN',
      status: 'PENGEMBANGAN_AKTIF',
      desc: 'Merancang ruang penyimpanan tak terbatas di awan yang aman dan tangguh, tempat mimpi-mimpi digital kita dipelihara dan dilindungi.',
      tech: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
      progress: 80
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <div className="glass-panel px-3 py-1.5 w-fit text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]">
            Episode 07 // Fokus
          </div>
          <h2 className="text-headline-lg bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent font-extrabold tracking-tight">Ke mana Jiwa Ini Melangkah</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={area.sector}
              className="glass-panel p-4 md:p-6 border border-outline-variant/15 flex flex-col justify-between min-h-[290px] md:min-h-[320px] rounded-lg group hover:border-primary-fixed-dim/30 hover:shadow-[0_0_15px_rgba(0,242,255,0.05)] transition-all duration-500"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="font-label-mono text-[9px] text-primary-fixed-dim bg-primary-fixed-dim/10 px-2.5 py-1 rounded tracking-widest font-bold">
                    {area.status}
                  </span>
                  <span className="font-label-mono text-xs text-outline font-bold">
                    0{i + 1}
                  </span>
                </div>
                
                <h3 className="font-label-mono text-sm font-bold text-on-surface tracking-wider">
                  {area.sector}
                </h3>
                
                <p className="text-body-md text-on-surface-variant font-sans text-xs leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-outline-variant/10">
                <div className="space-y-1">
                  <div className="flex justify-between text-[9px] font-label-mono text-outline">
                    <span>FOKUS_SEKTOR</span>
                    <span>{area.progress}%</span>
                  </div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${area.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                      className="h-full bg-primary-container"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {area.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-label-mono bg-surface-container-low text-outline px-2 py-0.5 border border-outline-variant/20 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Episode7;
