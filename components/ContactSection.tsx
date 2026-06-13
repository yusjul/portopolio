"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Mail, RefreshCw, Send } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface ContactSectionProps {
  onRestart: () => void;
  id?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onRestart, id }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Transmisi tersimpan:\nNama: ${name}\nEmail: ${email}\nPesan: ${message}`);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id={id} className="snap-section flex flex-col justify-between bg-transparent px-safe-margin pt-24 pb-8 relative">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 z-10 my-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="glass-panel px-3 py-1.5 w-fit text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)] mb-3">
            Episode 08 // Hubungi Saya
          </div>
          <h2 className="text-headline-lg bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent font-extrabold tracking-tight">Mari Jalin Hubungan</h2>
          <p className="text-body-md text-on-surface-variant max-w-md font-light leading-relaxed">
            Saya selalu merindukan percakapan yang mendalam—tentang ide baru, mimpi yang ingin diwujudkan, atau sekadar bertukar cerita tentang kegagalan dan keberhasilan kita.
          </p>

          <div className="space-y-4 pt-6">
            <a href="mailto:hello@tech_noir_unit.sys" className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 glass-panel flex items-center justify-center rounded group-hover:border-primary-fixed-dim/50 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                <Mail className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline">EMAIL</div>
                <div className="text-body-lg text-[15px] font-bold group-hover:text-primary-fixed-dim transition-colors">hello@tech_address.sys</div>
              </div>
            </a>

            <a href="https://github.com/yusjul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 glass-panel flex items-center justify-center rounded group-hover:border-primary-fixed-dim/50 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                <GithubIcon className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline">GITHUB</div>
                <div className="text-body-lg text-[15px] font-bold group-hover:text-primary-fixed-dim transition-colors">github.com/yusjul</div>
              </div>
            </a>

            <a href="https://linkedin.com/in/yusjul" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="w-12 h-12 glass-panel flex items-center justify-center rounded group-hover:border-primary-fixed-dim/50 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-all">
                <LinkedinIcon className="w-5 h-5 text-primary-fixed-dim" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline">LINKEDIN</div>
                <div className="text-body-lg text-[15px] font-bold group-hover:text-primary-fixed-dim transition-colors">linkedin.com/in/yusjul</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-panel p-8 rounded-lg border border-outline-variant/15 flex flex-col justify-between min-h-[400px]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="font-label-mono text-[9px] text-primary-fixed-dim block uppercase tracking-wider">
                NAMA ANDA (BAGAIMANA SAYA HARUS MEMANGGIL ANDA?)
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tulis nama Anda di sini..."
                className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:border-primary-fixed-dim focus:ring-0 focus:outline-none text-on-surface font-label-mono text-sm placeholder:text-outline/20 py-2 transition-colors duration-300"
              />
            </div>

            <div className="space-y-1">
              <label className="font-label-mono text-[9px] text-primary-fixed-dim block uppercase tracking-wider">
                ALAMAT EMAIL (KE MANA SAYA HARUS MENGIRIM BALASAN?)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:border-primary-fixed-dim focus:ring-0 focus:outline-none text-on-surface font-label-mono text-sm placeholder:text-outline/20 py-2 transition-colors duration-300"
              />
            </div>

            <div className="space-y-1">
              <label className="font-label-mono text-[9px] text-primary-fixed-dim block uppercase tracking-wider">
                ISI PESAN (MARI CERITAKAN MIMPI ANDA...)
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ceritakan apa saja yang sedang Anda kerjakan, atau ide apa yang ingin kita diskusikan bersama..."
                className="w-full bg-transparent border-none border-b border-outline-variant/40 focus:border-primary-fixed-dim focus:ring-0 focus:outline-none text-on-surface font-label-mono text-sm placeholder:text-outline/20 py-2 resize-none transition-colors duration-300"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full mt-4 flex items-center justify-center gap-2">
              Kirimkan Pesan Anda
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </motion.div>
      </div>

      <footer className="w-full border-t border-outline-variant/10 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-4">
        <div className="text-[10px] font-label-mono text-outline font-bold tracking-widest text-center md:text-left">
          © 2026 MUHAMMAD YUSUF JULIAN
        </div>
        
        <Button variant="secondary" onClick={onRestart} className="px-4 py-2 text-[10px] py-1.5 flex items-center gap-2">
          Mulai dari Awal
          <RefreshCw className="w-3 h-3" />
        </Button>

        <div className="flex gap-4 font-label-mono text-[10px] text-outline font-bold">
          <a href="#" className="hover:text-primary-fixed-dim transition-colors">Akses Sistem</a>
          <span className="opacity-30">|</span>
          <a href="#" className="hover:text-primary-fixed-dim transition-colors">Log Terminal</a>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
