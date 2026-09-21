"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, className = '', ...props }, ref) => {
    const baseStyles =
      'px-7 py-3.5 font-label-mono text-label-mono uppercase tracking-widest ' +
      'transition-all duration-300 rounded-full ' +
      // focus-visible ensures keyboard users get a visible focus ring while
      // mouse users don't see the extra ring — accessibility & security best practice
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-fixed-dim focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dim ' +
      'flex items-center justify-center gap-2 select-none border';

    const variants = {
      primary:
        'bg-gradient-to-r from-[#00b4d8] to-[#00f2ff] text-on-primary font-extrabold ' +
        'hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] border-[#00f2ff]/30 text-black',
      secondary:
        'border-primary-fixed-dim/30 text-primary-fixed-dim bg-white/5 ' +
        'hover:bg-primary-fixed-dim/10 hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]',
      ghost:
        'border-transparent text-on-surface-variant hover:text-primary-fixed-dim hover:bg-white/5',
    };

    // Explicitly spread only HTMLButtonAttributes — avoids bypassing TypeScript
    // type checking via 'as any' which could allow unexpected/dangerous props.
    const {
      type = 'button',
      disabled,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      onKeyUp,
      'aria-label': ariaLabel,
      'aria-expanded': ariaExpanded,
      'aria-controls': ariaControls,
      'aria-disabled': ariaDisabled,
      id,
      name,
      value,
      form,
      tabIndex,
      // Remaining props are intentionally discarded to prevent unknown HTML
      // attributes from leaking onto the underlying DOM button element.
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      ...restProps
    } = props;

    return (
      <motion.button
        ref={ref}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        type={type}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        aria-controls={ariaControls}
        aria-disabled={ariaDisabled}
        id={id}
        name={name}
        value={value}
        form={form}
        tabIndex={tabIndex}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
