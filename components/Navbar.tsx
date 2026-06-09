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
    { label: 'PROLOGUE', index: 0 },
    { label: 'ORIGIN', index: 1 },
    { label: 'CHAOS', index: 2 },
    { label: 'SKILLS', index: 3 },
    { label: 'ARCHIVE', index: 4 },
    { label: 'MANIFESTO', index: 5 },
    { label: 'IDENTITY', index: 6 },
    { label: 'FOCUS', index: 7 },
    { label: 'CONTACT', index: 8 },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-transparent backdrop-blur-md bg-gradient-to-b from-surface-dim/80 to-transparent flex justify-between items-center px-safe-margin py-4">
      <div 
        onClick={() => onScrollToEpisode(0)}
        className="font-label-mono text-xs font-bold tracking-widest text-primary-fixed-dim cursor-pointer select-none"
      >
        EPISODE_CHRONICLES
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6">
        {navLinks.filter(link => [0, 1, 3, 4, 5, 8].includes(link.index)).map((link) => {
          const isActive = currentEpisode === link.index;
          return (
            <button
              key={link.index}
              onClick={() => onScrollToEpisode(link.index)}
              className={`font-label-mono text-[11px] tracking-wider transition-colors duration-500 cursor-pointer ${
                isActive 
                  ? 'text-primary-fixed-dim border-b border-primary-fixed-dim pb-1' 
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
        className="lg:hidden text-primary-fixed-dim hover:text-white transition-colors cursor-pointer"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-dim/95 backdrop-blur-xl border-b border-outline-variant/20 flex flex-col p-6 space-y-4 lg:hidden">
          {navLinks.map((link) => {
            const isActive = currentEpisode === link.index;
            return (
              <button
                key={link.index}
                onClick={() => {
                  onScrollToEpisode(link.index);
                  setIsOpen(false);
                }}
                className={`font-label-mono text-left text-xs tracking-wider transition-colors py-2 border-b border-outline-variant/10 ${
                  isActive ? 'text-primary-fixed-dim' : 'text-on-surface-variant'
                }`}
              >
                EPISODE {link.index} // {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
