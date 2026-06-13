"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Episode5Props {
  id?: string;
}

export const Episode5: React.FC<Episode5Props> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    let offset = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const gridSize = 40;
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.04)';
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.strokeStyle = 'rgba(0, 242, 255, 0.02)';
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) * 0.15, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(0, 242, 255, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const scanY = (offset % height);
      ctx.moveTo(0, scanY);
      ctx.lineTo(width, scanY);
      ctx.stroke();

      const gradient = ctx.createLinearGradient(0, scanY - 60, 0, scanY);
      gradient.addColorStop(0, 'rgba(0, 242, 255, 0)');
      gradient.addColorStop(1, 'rgba(0, 242, 255, 0.03)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - 60, width, 60);

      offset += 0.6;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id={id} className="snap-section flex items-center justify-center bg-transparent px-safe-margin relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />

      <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden font-mono text-[10vw] font-bold text-primary-fixed-dim flex justify-center items-center">
        PEMIKIRAN_SISTEMIS
      </div>

      <div className="max-w-4xl text-center relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel px-3 py-1.5 w-fit mx-auto text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]"
        >
          Episode 05 // Wawasan
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-display-lg bg-gradient-to-b from-white via-on-surface to-on-surface-variant/80 bg-clip-text text-transparent font-black tracking-tight leading-[1.08]"
        >
          Saya tidak lagi sekadar menulis baris kode. <br />
          <span className="bg-gradient-to-r from-primary-fixed-dim via-[#00f2ff] to-[#a8f8ff] bg-clip-text text-transparent italic font-light">Saya mulai merancang sebuah ekosistem.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-24 h-px bg-primary-fixed-dim/40 mx-auto"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-body-lg text-outline italic max-w-2xl mx-auto font-light"
        >
          &quot;Karya arsitektur terbaik adalah yang tidak terlihat. Ia terasa dari bagaimana data mengalir tanpa hambatan, logika bekerja dalam sunyi, dan sistem tetap kokoh menghadapi beban terberat.&quot;
        </motion.p>
      </div>
    </section>
  );
};

export default Episode5;
