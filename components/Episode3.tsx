"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, FileCode, Database, Terminal, Binary } from 'lucide-react';

interface Episode3Props {
  id?: string;
}

interface SkillItem {
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const Episode3: React.FC<Episode3Props> = ({ id }) => {
  const skills: SkillItem[] = [
    { name: 'JavaScript', category: 'Language', icon: FileCode },
    { name: 'TypeScript', category: 'Language', icon: Code },
    { name: 'React / Next.js', category: 'Frontend', icon: Layers },
    { name: 'PHP', category: 'Backend', icon: Database },
    { name: 'Python', category: 'Data & Scripting', icon: Binary },
    { name: 'SQL / Database', category: 'Data Storage', icon: Terminal }
  ];

  return (
    <section id={id} className="snap-section flex flex-col justify-center px-safe-margin bg-transparent py-16">
      <div className="max-w-7xl w-full mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 max-w-xl"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            03 — Keahlian
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Keahlian teknis
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
            Teknologi dan perangkat yang rutin digunakan dalam pengembangan antarmuka dan sistem aplikasi.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill, i) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-6 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors flex flex-col items-center text-center group"
              >
                <div className="text-primary-fixed-dim mb-4 p-3 rounded-lg bg-surface-container/30 group-hover:text-primary transition-colors">
                  <IconComponent className="w-8 h-8 stroke-[1.75]" />
                </div>

                <h3 className="font-label-mono text-sm font-semibold text-on-surface tracking-wide">
                  {skill.name}
                </h3>
                <span className="font-label-mono text-[10px] text-outline mt-1">
                  {skill.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Episode3;
