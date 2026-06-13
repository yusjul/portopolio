"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverGlow?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, hoverGlow = true }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02, y: -4 } : hoverGlow ? { y: -2 } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-panel p-6 rounded-lg transition-colors duration-500 relative overflow-hidden ${
        onClick ? 'cursor-pointer hover:border-primary-fixed-dim/50' : ''
      } ${className}`}
    >
      {hoverGlow && (
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-fixed-dim/0 via-primary-fixed-dim/0 to-primary-fixed-dim/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
};

export default Card;
