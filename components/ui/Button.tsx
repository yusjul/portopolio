"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles = 'px-7 py-3.5 font-label-mono text-label-mono uppercase tracking-widest transition-all duration-300 rounded-full focus:outline-none flex items-center justify-center gap-2 select-none border';
    
    const variants = {
      primary: 'bg-gradient-to-r from-[#00b4d8] to-[#00f2ff] text-on-primary font-extrabold hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] border-[#00f2ff]/30 text-black',
      secondary: 'border-primary-fixed-dim/30 text-primary-fixed-dim bg-white/5 hover:bg-primary-fixed-dim/10 hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]',
      ghost: 'border-transparent text-on-surface-variant hover:text-primary-fixed-dim hover:bg-white/5',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
