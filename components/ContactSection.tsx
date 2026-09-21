"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { Mail, RefreshCw, Send, Check } from 'lucide-react';

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
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
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setIsSent(false);
    }, 4000);
  };

  return (
    <section id={id} className="snap-section flex flex-col justify-between bg-transparent px-safe-margin pt-20 pb-8 relative">
      <div className="max-w-5xl w-full mx-auto grid md:grid-cols-2 gap-12 z-10 my-auto">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
            08 — Kontak
          </div>
          <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
            Hubungi saya
          </h2>
          <p className="text-body-lg text-on-surface-variant font-light leading-relaxed max-w-md">
            Terbuka untuk kolaborasi proyek, diskusi teknis, maupun kesempatan magang atau pekerjaan.
          </p>

          <div className="space-y-3 pt-4">
            <a
              href="mailto:muhammadyusufjulian@gmail.com"
              className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors w-fit group"
            >
              <div className="p-2 rounded bg-surface-container/40 text-primary-fixed-dim">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline uppercase tracking-wider">Email</div>
                <div className="font-label-mono text-xs text-on-surface font-medium group-hover:text-primary-fixed-dim transition-colors">muhammadyusufjulian@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/yusjul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors w-fit group"
            >
              <div className="p-2 rounded bg-surface-container/40 text-primary-fixed-dim">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline uppercase tracking-wider">GitHub</div>
                <div className="font-label-mono text-xs text-on-surface font-medium group-hover:text-primary-fixed-dim transition-colors">github.com/yusjul</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/yusjul"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 hover:border-primary-fixed-dim/40 transition-colors w-fit group"
            >
              <div className="p-2 rounded bg-surface-container/40 text-primary-fixed-dim">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="font-label-mono text-[9px] text-outline uppercase tracking-wider">LinkedIn</div>
                <div className="font-label-mono text-xs text-on-surface font-medium group-hover:text-primary-fixed-dim transition-colors">linkedin.com/in/yusjul</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="p-6 md:p-8 rounded-lg border border-outline-variant/20 bg-surface-container-lowest/50 flex flex-col justify-between"
        >
          {isSent ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="text-body-md font-bold text-on-surface">Pesan Terkirim</h3>
              <p className="text-body-sm text-on-surface-variant font-light">
                Terima kasih telah menghubungi. Pesan Anda telah diterima.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-label-mono text-[10px] text-outline block uppercase tracking-wider">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda"
                  className="w-full bg-surface-container-low/40 border border-outline-variant/20 rounded px-3 py-2 text-on-surface font-label-mono text-xs focus:border-primary-fixed-dim/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label-mono text-[10px] text-outline block uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full bg-surface-container-low/40 border border-outline-variant/20 rounded px-3 py-2 text-on-surface font-label-mono text-xs focus:border-primary-fixed-dim/50 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label-mono text-[10px] text-outline block uppercase tracking-wider">
                  Pesan
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                  className="w-full bg-surface-container-low/40 border border-outline-variant/20 rounded px-3 py-2 text-on-surface font-label-mono text-xs focus:border-primary-fixed-dim/50 focus:outline-none resize-none transition-colors"
                />
              </div>

              <Button type="submit" variant="primary" className="w-full mt-2 flex items-center justify-center gap-2">
                Kirim Pesan
                <Send className="w-3.5 h-3.5" />
              </Button>
            </form>
          )}
        </motion.div>
      </div>

      <footer className="w-full border-t border-outline-variant/15 pt-6 mt-12 flex flex-col sm:flex-row justify-between items-center max-w-5xl mx-auto gap-4">
        <div className="text-[10px] font-label-mono text-outline tracking-wider text-center sm:text-left">
          © 2026 Muhammad Yusuf Julian
        </div>

        <button
          onClick={onRestart}
          className="font-label-mono text-[10px] text-outline hover:text-primary-fixed-dim transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Kembali ke Atas</span>
          <RefreshCw className="w-3 h-3" />
        </button>
      </footer>
    </section>
  );
};

export default ContactSection;
