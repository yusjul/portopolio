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
    <section id={id} className="snap-section flex items-center justify-center bg-surface-container-lowest px-safe-margin relative">
      <div className="grid md:grid-cols-2 gap-stack-lg items-center w-full max-w-7xl mx-auto z-10">
        
        {/* Story copy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl order-last md:order-first"
        >
          <span className="font-label-mono text-xs text-error uppercase tracking-wider block">
            Episode 02 // Chaos
          </span>
          <h2 className="text-headline-lg text-on-surface glitch-wrapper">
            <span className="glitch-text" data-text="The Noise of Creation">
              The Noise of Creation
            </span>
          </h2>
          <p className="text-body-lg text-on-surface-variant">
            Compilers screamed. Memory leaked. Async calls hung in the ether. In the frustration of stack overflows and broken dependencies, I learned the hardest lesson: errors aren&apos;t roadblocks—they are map coordinates.
          </p>
          <p className="text-body-md text-outline">
            Before writing perfect structures, you must learn to stand in the storm of logs and trace the failures back to their source.
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
              <span className="text-error font-bold tracking-widest text-[10px]">CRITICAL_SYSTEM_REPORT</span>
            </div>
            <span className="text-outline text-[10px]">ERR_LOG: 504</span>
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
            <span>RETRYING_CONNECTION...</span>
            <span className="animate-pulse">_</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Episode2;
