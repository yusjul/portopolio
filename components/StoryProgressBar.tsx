"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface StoryProgressBarProps {
  currentEpisode: number;
  totalEpisodes: number;
  onScrollToEpisode: (index: number) => void;
}

export const StoryProgressBar: React.FC<StoryProgressBarProps> = ({
  currentEpisode,
  totalEpisodes,
  onScrollToEpisode,
}) => {
  const progressPercent = (currentEpisode / (totalEpisodes - 1)) * 100;

  const episodes = [
    { name: 'BERANDA', index: 0 },
    { name: 'TENTANG', index: 1 },
    { name: 'PERJALANAN', index: 2 },
    { name: 'KEAHLIAN', index: 3 },
    { name: 'KARYA', index: 4 },
    { name: 'PRINSIP', index: 5 },
    { name: 'IDENTITAS', index: 6 },
    { name: 'FOKUS', index: 7 },
    { name: 'KONTAK', index: 8 },
  ];

  return (
    <>
      {/* Top horizontal progress bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-white/5 z-[110] pointer-events-none">
        <motion.div
          className="h-full bg-primary-fixed-dim"
          style={{ width: `${progressPercent}%` }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        />
      </div>

      {/* Right side vertical timeline indicator */}
      <aside className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[90] flex flex-col items-center gap-3 select-none">
        {episodes.map((ep) => {
          const isActive = currentEpisode === ep.index;
          return (
            <button
              key={ep.index}
              onClick={() => onScrollToEpisode(ep.index)}
              className="group flex items-center justify-end gap-3 cursor-pointer outline-none focus:outline-none p-1.5 -mr-1.5 touch-manipulation z-20"
              aria-label={`Scroll ke ${ep.name}`}
            >
              {/* Tooltip on hover */}
              <span
                className={`hidden md:block opacity-0 group-hover:opacity-100 font-label-mono text-[9px] tracking-wider text-primary-fixed-dim transition-opacity duration-200 ${
                  isActive ? 'opacity-100 font-semibold' : ''
                }`}
              >
                {ep.name}
              </span>

              {/* Dot */}
              <div className="relative w-5 h-5 flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="activeDotIndicator"
                    className="absolute inset-0 rounded-full border border-primary-fixed-dim/40 scale-125"
                  />
                )}
                <div
                  className={`rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2 h-2 bg-primary-fixed-dim shadow-[0_0_8px_rgba(0,219,231,0.5)]'
                      : 'w-1.5 h-1.5 bg-outline/30 group-hover:bg-outline group-hover:scale-125'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </aside>
    </>
  );
};

export default StoryProgressBar;
