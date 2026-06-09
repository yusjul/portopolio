"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles = 'px-6 py-3 font-label-mono text-label-mono uppercase tracking-wider transition-all duration-300 rounded focus:outline-none flex items-center justify-center gap-2 select-none';
    
    const variants = {
      primary: 'bg-primary-container text-on-primary font-bold hover:shadow-[0_0_20px_rgba(0,242,255,0.5)] border border-primary-container',
      secondary: 'border border-primary-fixed-dim/40 text-primary-fixed-dim bg-transparent hover:bg-primary-fixed-dim/10 hover:border-primary-fixed-dim hover:shadow-[0_0_15px_rgba(0,242,255,0.2)]',
      ghost: 'text-on-surface-variant hover:text-primary-fixed-dim hover:bg-white/5',
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
