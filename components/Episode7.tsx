"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface Episode7Props {
  id?: string;
}

export const Episode7: React.FC<Episode7Props> = ({ id }) => {
  const focusAreas = [
    {
      sector: 'AI & NEURAL MODELS',
      status: 'ACTIVE_RESEARCH',
      desc: 'Integrating vector embeddings, semantic search caches, and localized LLM inference pipelines with backend servers.',
      tech: ['Transformers', 'Pinecone', 'Ollama', 'PyTorch'],
      progress: 75
    },
    {
      sector: 'WEB SYSTEMS & RUNTUNES',
      status: 'PRODUCTION_STABLE',
      desc: 'High-performance interactive web runtimes, edge-first rendering patterns, and socket-based message protocols.',
      tech: ['Next.js App Router', 'WebSockets', 'Tailwind v4', 'Framer Motion'],
      progress: 95
    },
    {
      sector: 'BACKEND SYSTEMS',
      status: 'PRODUCTION_STABLE',
      desc: 'High-throughput stream processing, asynchronous task orchestration, database sharding, and memory caching layers.',
      tech: ['Go', 'Node.js', 'PostgreSQL', 'Redis'],
      progress: 90
    },
    {
      sector: 'CLOUD ARCHITECTURE',
      status: 'ACTIVE_DEVELOPMENT',
      desc: 'Infrastructure as code (IaC), container clusters, edge distribution networks, and automated CI/CD environments.',
      tech: ['Kubernetes', 'Docker', 'Terraform', 'AWS'],
      progress: 80
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center justify-center bg-surface px-safe-margin">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <div className="space-y-4">
          <span className="font-label-mono text-xs text-primary-fixed-dim uppercase tracking-wider block">
            Episode 07 // Direction
          </span>
          <h2 className="text-headline-lg text-on-surface">Current Focus</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focusAreas.map((area, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              key={area.sector}
              className="glass-panel p-6 border border-outline-variant/15 flex flex-col justify-between min-h-[320px] rounded-lg group hover:border-primary-fixed-dim/30 hover:shadow-[0_0_15px_rgba(0,242,255,0.05)] transition-all duration-500"
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
                    <span>SECTOR_FOCUS</span>
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
