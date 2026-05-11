'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  variant?: 'default' | 'blue' | 'orange' | 'navy';
  hover?: boolean;
}

export const GlassPanel = ({ 
  children, 
  className, 
  variant = 'default', 
  hover = false,
  ...props 
}: GlassPanelProps) => {
  const variants = {
    default: 'bg-brand-navy/30 border-brand-border',
    blue: 'bg-brand-blue/5 border-brand-blue/20',
    orange: 'bg-brand-orange/5 border-brand-orange/20',
    navy: 'bg-brand-navy/60 border-brand-border',
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border backdrop-blur-xl transition-all duration-300',
        variants[variant],
        hover && 'hover:border-brand-blue/40 hover:bg-brand-navy/40',
        className
      )}
      {...props}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-px rounded-[15px] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
      {children}
    </motion.div>
  );
};
