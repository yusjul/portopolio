"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/portfolio.css'; // design system

interface Episode1Props {
  id?: string;
}

export const Episode1: React.FC<Episode1Props> = ({ id }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number | null = null;
    let width = (canvas.width = canvas.clientWidth);
    let height = (canvas.height = canvas.clientHeight);

    const numParticles = 40;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.clientWidth;
      height = canvas.height = canvas.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(0, 219, 231, 0.3)';
      ctx.strokeStyle = 'rgba(0, 219, 231, 0.04)';

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.lineWidth = (1 - dist / 100) * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section id={id} className="snap-section flex items-center px-safe-margin relative">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 max-w-xl"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            01 — Asal
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Tentang saya
          </h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed font-light">
            Mahasiswa Sistem Informasi yang berfokus pada pengembangan web,
            eksplorasi data, dan membangun antarmuka yang fungsional.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['Sistem Informasi', 'Web Development', 'Data', 'UI/UX'].map((tag) => (
              <span
                key={tag}
                className="font-label-mono text-[10px] text-outline border border-outline-variant/30 px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-8 pt-4 border-t border-outline-variant/15">
            <div>
              <div className="font-label-mono text-[9px] text-outline uppercase tracking-widest mb-1">Mulai belajar</div>
              <div className="font-label-mono text-sm text-primary-fixed-dim font-bold">2018</div>
            </div>
            <div>
              <div className="font-label-mono text-[9px] text-outline uppercase tracking-widest mb-1">Lokasi</div>
              <div className="font-label-mono text-sm text-on-surface font-bold">Indonesia</div>
            </div>
            <div>
              <div className="font-label-mono text-[9px] text-outline uppercase tracking-widest mb-1">Status</div>
              <div className="font-label-mono text-sm text-primary-fixed-dim font-bold">Tersedia</div>
            </div>
          </div>
        </motion.div>

        {/* Right side — subtle decorative element, not gimmick */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex flex-col gap-3 font-label-mono text-[11px] text-outline/30 select-none pointer-events-none"
          aria-hidden="true"
        >
          {['2018', '2020', '2022', '2024', '2026'].map((year, i) => (
            <div key={year} className="flex items-center gap-3">
              <span className="text-primary-fixed-dim/20 text-[9px] tracking-widest w-10">{year}</span>
              <div
                className="h-px bg-outline-variant/20"
                style={{ width: `${(i + 1) * 40}px` }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Episode1;
