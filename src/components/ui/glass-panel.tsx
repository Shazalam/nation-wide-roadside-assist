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
    default: 'bg-card/40 border-brand-border',
    blue: 'bg-brand-blue/5 border-brand-blue/20',
    orange: 'bg-brand-orange/5 border-brand-orange/20',
    navy: 'bg-brand-navy/70 border-brand-border',
  };

  return (
    <motion.div
      className={cn(
        'relative rounded-2xl border backdrop-blur-xl transition-all duration-500',
        variants[variant],
        hover && 'hover:border-brand-blue/40 hover:bg-card/60 dark:hover:bg-brand-navy/40',
        className
      )}
      {...props}
    >
      {/* Subtle Inner Glow */}
      <div className="absolute inset-px rounded-[15px] bg-gradient-to-br from-foreground/[0.03] to-transparent pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
