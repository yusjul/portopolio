"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Lock, Unlock, Code, Layers, FileCode, Database, Terminal, Binary } from 'lucide-react';

interface Episode3Props {
  id?: string;
}

export const Episode3: React.FC<Episode3Props> = ({ id }) => {
  const skills = [
    { name: 'HTML5', icon: Code, key: 'html' },
    { name: 'CSS3', icon: Layers, key: 'css' },
    { name: 'JS_ES6', icon: FileCode, key: 'js' },
    { name: 'PHP_8', icon: Database, key: 'php' },
    { name: 'JAVA', icon: Terminal, key: 'java' },
    { name: 'PYTHON', icon: Binary, key: 'python' }
  ];

  const containerVariants: Variants = {
    locked: {},
    unlocked: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants: Variants = {
    locked: {
      opacity: 0.3,
      scale: 0.95,
      filter: 'blur(3px)',
    },
    unlocked: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      }
    }
  };

  const lockVariants: Variants = {
    locked: { opacity: 1, rotate: 0 },
    unlocked: { opacity: 0, rotate: 90, scale: 0.5, transition: { duration: 0.3 } }
  };

  const unlockIconVariants: Variants = {
    locked: { opacity: 0, scale: 0.5 },
    unlocked: { opacity: [0, 1, 0], scale: [0.8, 1.2, 1], transition: { delay: 0.3, duration: 0.5 } }
  };

  return (
    <section id={id} className="snap-section flex flex-col justify-center px-safe-margin bg-surface">
      <div className="max-w-7xl w-full mx-auto space-y-12">
        <div className="space-y-4">
          <span className="font-label-mono text-xs text-primary-fixed-dim uppercase tracking-wider block">
            Episode 03 // Tools of Intent
          </span>
          <h2 className="text-headline-lg text-on-surface">Technical Arsenal</h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="locked"
          whileInView="unlocked"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.key}
                variants={cardVariants}
                className="glass-panel p-8 relative flex flex-col items-center justify-center text-center group border border-outline-variant/20 hover:border-primary-fixed-dim/50 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] transition-shadow duration-500 rounded-lg min-h-[180px]"
              >
                <div className="absolute top-4 right-4 text-outline/40 group-hover:text-primary-fixed-dim/80 transition-colors">
                  <div className="relative w-4 h-4">
                    <motion.div variants={lockVariants} className="absolute inset-0">
                      <Lock className="w-4 h-4" />
                    </motion.div>
                    <motion.div variants={unlockIconVariants} className="absolute inset-0 text-primary-fixed-dim">
                      <Unlock className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                <div className="text-primary-fixed-dim mb-4 group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="w-12 h-12 stroke-[1.5]" />
                </div>

                <h3 className="font-label-mono text-xs text-on-surface tracking-wider">
                  {skill.name}
                </h3>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary-fixed-dim group-hover:w-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Episode3;
