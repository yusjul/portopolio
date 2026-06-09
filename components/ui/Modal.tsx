"use client";

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  image?: string;
  techStack?: string[];
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  image,
  techStack,
  children,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-safe-margin">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-surface-dim/90 backdrop-blur-xl"
          />

          {/* Modal Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="glass-panel max-w-4xl w-full max-h-[85vh] overflow-y-auto relative z-10 rounded-xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-on-surface hover:text-primary-fixed-dim transition-colors z-20 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Content Container */}
            <div className="p-8 md:p-12 space-y-6">
              {image && (
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden border border-outline-variant/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="space-y-2">
                {subtitle && (
                  <span className="font-label-mono text-primary-fixed-dim text-xs tracking-wider block">
                    {subtitle}
                  </span>
                )}
                <h3 className="font-headline-lg text-headline-lg text-on-surface">
                  {title}
                </h3>
              </div>

              <div className="text-body-lg text-on-surface-variant leading-relaxed">
                {children}
              </div>

              {techStack && techStack.length > 0 && (
                <div className="space-y-2 pt-2">
                  <span className="font-label-mono text-xs text-outline tracking-wider block">
                    TECHNOLOGY_STACK
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-surface-container-low border border-outline-variant/30 text-outline font-label-mono text-[11px] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
