'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Button } from './button';
import { GlassPanel } from './glass-panel';

interface GlassModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GlassModal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
}: GlassModalProps) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className={cn("relative w-full z-10", sizes[size])}
          >
            <GlassPanel className="shadow-2xl border-brand-border bg-brand-navy/80">
              <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border">
                <h3 className="text-lg font-bold text-foreground dark:text-white tracking-tight">{title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={onClose}
                  className="h-8 w-8 text-brand-slate hover:text-foreground dark:text-white"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="px-6 py-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {children}
              </div>

              {footer && (
                <div className="px-6 py-4 border-t border-brand-border bg-white/[0.02] flex justify-end gap-3">
                  {footer}
                </div>
              )}
            </GlassPanel>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
