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
    { name: 'PROLOG', index: 0 },
    { name: 'ASAL', index: 1 },
    { name: 'KEKACAUAN', index: 2 },
    { name: 'KETERAMPILAN', index: 3 },
    { name: 'ARSIP', index: 4 },
    { name: 'MANIFESTO', index: 5 },
    { name: 'IDENTITAS', index: 6 },
    { name: 'FOKUS', index: 7 },
    { name: 'KONTAK', index: 8 },
  ];

  return (
    <>
      {/* Top horizontal progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-[110] pointer-events-none">
        <motion.div
          className="h-full bg-primary-container shadow-[0_0_8px_#00f2ff]"
          style={{ width: `${progressPercent}%` }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
        />
      </div>

      {/* Right side vertical timeline indicator */}
      <aside className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[90] flex flex-col items-center gap-4 select-none">
        <div className="flex flex-col items-center mb-2">
          <span className="text-primary-fixed-dim font-label-mono text-[9px] tracking-widest opacity-60 mb-2 rotate-90 md:rotate-0">
            CERITA
          </span>
          <div className="hidden md:block w-px h-6 bg-outline-variant/30 my-1" />
        </div>

        {episodes.map((ep) => {
          const isActive = currentEpisode === ep.index;
          return (
            <button
              key={ep.index}
              onClick={() => onScrollToEpisode(ep.index)}
              className="group flex items-center justify-end gap-3 cursor-pointer outline-none focus:outline-none p-2 -mr-2 touch-manipulation z-20"
              aria-label={`Scroll to ${ep.name}`}
            >
              {/* Tooltip on hover */}
              <span
                className={`hidden md:block opacity-0 group-hover:opacity-100 font-label-mono text-[9px] tracking-wider text-primary-fixed-dim transition-opacity duration-300 ${
                  isActive ? 'opacity-100 font-bold' : ''
                }`}
              >
                {ep.name}
              </span>

              {/* Dot */}
              <div className="relative w-6 h-6 flex items-center justify-center">
                {isActive && (
                  <motion.div
                    layoutId="activeDotGlow"
                    className="absolute inset-0 rounded-full bg-primary-fixed-dim/20 scale-150"
                  />
                )}
                <div
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-primary-container scale-125 shadow-[0_0_8px_#00f2ff]'
                      : 'bg-outline opacity-40 group-hover:opacity-100 group-hover:scale-110'
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
