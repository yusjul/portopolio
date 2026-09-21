"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onScrollToEpisode: (index: number) => void;
  currentEpisode: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onScrollToEpisode, currentEpisode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'BERANDA', index: 0 },
    { label: 'TENTANG', index: 1 },
    { label: 'PERJALANAN', index: 2 },
    { label: 'KEAHLIAN', index: 3 },
    { label: 'KARYA', index: 4 },
    { label: 'PRINSIP', index: 5 },
    { label: 'IDENTITAS', index: 6 },
    { label: 'FOKUS', index: 7 },
    { label: 'KONTAK', index: 8 },
  ];

  const desktopVisibleIndices = [0, 1, 3, 4, 7, 8];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent backdrop-blur-md bg-gradient-to-b from-surface-dim/80 to-transparent flex justify-between items-center px-safe-margin py-4">
      <div 
        onClick={() => onScrollToEpisode(0)}
        className="font-label-mono text-xs font-bold tracking-[0.2em] text-primary-fixed-dim hover:text-white transition-colors cursor-pointer select-none"
      >
        YUSJUL
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        {navLinks.filter(link => desktopVisibleIndices.includes(link.index)).map((link) => {
          const isActive = currentEpisode === link.index;
          return (
            <button
              key={link.index}
              onClick={() => onScrollToEpisode(link.index)}
              className={`font-label-mono text-[11px] tracking-wider transition-colors duration-300 cursor-pointer ${
                isActive 
                  ? 'text-primary-fixed-dim border-b border-primary-fixed-dim pb-0.5 font-medium' 
                  : 'text-on-surface-variant hover:text-primary-fixed-dim'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation Menu"
        className="lg:hidden text-primary-fixed-dim hover:text-white transition-colors cursor-pointer p-1"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-dim/95 backdrop-blur-xl border-b border-outline-variant/20 flex flex-col p-6 space-y-3 lg:hidden">
          {navLinks.map((link) => {
            const isActive = currentEpisode === link.index;
            return (
              <button
                key={link.index}
                onClick={() => {
                  onScrollToEpisode(link.index);
                  setIsOpen(false);
                }}
                className={`font-label-mono text-left text-xs tracking-wider transition-colors py-2 border-b border-outline-variant/10 flex items-center justify-between ${
                  isActive ? 'text-primary-fixed-dim font-bold' : 'text-on-surface-variant'
                }`}
              >
                <span>{`0${link.index} — ${link.label}`}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed-dim" />}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
