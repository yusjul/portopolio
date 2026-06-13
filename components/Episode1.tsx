"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head'; // SEO helper
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

    const numParticles = 60;
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
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
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
      
      ctx.fillStyle = 'rgba(0, 242, 255, 0.4)';
      ctx.strokeStyle = 'rgba(0, 242, 255, 0.05)';

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
          if (dist < 120) {
            ctx.lineWidth = (1 - dist / 120) * 0.8;
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
  <Head>
      <title>Episode 01 – Asal | Portofolio Saya</title>
      <meta name="description" content="Menelusuri Sinyal – tampilan interaktif perjalanan saya dan eksperimen visual." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
  </Head>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />

      <div className="grid md:grid-cols-2 gap-8 items-center relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-xl"
        >
          <div className="glass-panel px-3 py-1.5 w-fit text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim/90 rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)]">
            Episode 01 // Asal
          </div>
          <h2 className="text-headline-lg bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent heading-animate font-extrabold tracking-tight">Menelusuri Sinyal</h2>
          <p className="text-body-lg text-on-surface-variant leading-relaxed font-light" role="document">
            Perjalanan saya tidak lahir dari ambisi dingin mengejar karier atau materi. Semua berawal di kamar yang gelap, di larut malam yang sunyi, ketika saya hanya ditemani oleh cahaya monitor yang meremang. Di sana, saya menyadari bahwa menulis kode bukan sekadar memberikan perintah kaku ke dalam mesin. Menulis kode adalah cara saya menuangkan jiwa, merajut logika dengan keindahan yang sunyi. Dari titik itu, saya jatuh cinta pada seni menciptakan sesuatu dari ketiadaan.
          </p>
          <div className="flex gap-4 pt-4" aria-label="Project details">
            <div className="glass-panel px-4 py-2 font-label-mono text-[10px] text-primary-fixed-dim">
              EST. 2018
            </div>
            <div className="glass-panel px-4 py-2 font-label-mono text-[10px] text-outline">
              HARD_WIRED
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden md:flex flex-col gap-4 font-mono text-xs text-outline select-none pointer-events-none"
        >
          <div className="text-primary-fixed-dim ml-12 animate-pulse">&lt;init&gt; system_boot.sh</div>
          <div className="ml-4">while(path.exists()) &#123; explore(new Horizon()); &#125;</div>
          <div className="ml-20">process.on(&apos;SIGINT&apos;, () =&gt; &#123; resume(); &#125;);</div>
          <div className="text-primary-fixed-dim ml-8">success: &quot;Neural link established&quot;</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Episode1;
