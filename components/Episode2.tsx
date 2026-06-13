"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode2Props {
  id?: string;
}

export const Episode2: React.FC<Episode2Props> = ({ id }) => {
  const mockErrors = [
    { type: 'FATAL_ERROR', code: '0x800F081F', msg: 'Segmentation fault: core dumped.' },
    { type: 'COMPILER_WARN', code: 'C4311', msg: 'Pointer truncation from Type* to uint32_t.' },
    { type: 'STACK_OVERFLOW', code: 'SO-449', msg: 'Maximum call stack size exceeded at recursive_search (index.ts:145).' },
    { type: 'MEMORY_LEAK', code: 'MEM_ALERT', msg: 'Process exited: Heap out of memory (limit 4096MB).' }
  ];

  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin relative">
      <div className="grid md:grid-cols-2 gap-stack-lg items-center w-full max-w-7xl mx-auto z-10">
        
        {/* Story copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl order-last md:order-first"
        >
          <div className="glass-panel px-3 py-1.5 w-fit text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-error rounded-full border border-error/15 bg-white/[0.02] shadow-[0_0_15px_rgba(239,68,68,0.05)]">
            Episode 02 // Kekacauan
          </div>
          <h2 className="text-headline-lg bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent glitch-wrapper font-extrabold tracking-tight">
            <span className="glitch-text" data-text="Kebisingan Awal Penciptaan">
              Kebisingan Awal Penciptaan
            </span>
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Namun, jalan penciptaan tidak pernah ramah. Ada malam-malam panjang penuh keputusasaan ketika compiler terus menolak, memori bocor tanpa ampun, dan sistem hancur berkeping-keping. Rasanya seperti berteriak sendirian di tengah kehampaan malam.
          </p>
          <p className="text-body-md text-outline italic">
            Tapi di titik terendah itulah saya belajar: setiap eror bukanlah akhir, melainkan detak jantung dari proses belajar. Kita harus hancur terlebih dahulu sebelum tahu cara membangun kembali dengan lebih tangguh.
          </p>
        </motion.div>

        {/* Glitch error log simulator UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-6 border border-error/20 rounded-xl space-y-4 font-mono text-xs overflow-hidden max-w-lg w-full shadow-[0_0_20px_rgba(239,68,68,0.05)] bg-[#0d0a0a]/80"
        >
          <div className="flex justify-between items-center border-b border-error/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-error animate-pulse" />
              <span className="text-error font-bold tracking-widest text-[10px]">LAPORAN_SISTEM_KRITIS</span>
            </div>
            <span className="text-outline text-[10px]">LOG_EROR: 504</span>
          </div>

          <div className="space-y-3 pt-2">
            {mockErrors.map((err, i) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                key={err.code}
                className="p-3 bg-red-950/20 border border-error/10 rounded flex flex-col gap-1 animate-[pulse_3s_infinite]"
              >
                <div className="flex justify-between items-center text-[10px]">
                  <span className={`${err.type === 'COMPILER_WARN' ? 'text-yellow-500' : 'text-error'} font-bold`}>
                    [{err.type}]
                  </span>
                  <span className="text-outline">{err.code}</span>
                </div>
                <div className="text-on-surface-variant text-[11px] mt-1 font-mono break-all">{err.msg}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-[10px] text-outline pt-2 flex justify-between">
            <span>MENCOBA_MENGHUBUNGKAN_KEMBALI...</span>
            <span className="animate-pulse">_</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Episode2;
