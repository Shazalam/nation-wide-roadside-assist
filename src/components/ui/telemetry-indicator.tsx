'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface TelemetryIndicatorProps {
  label: string;
  value: number; // 0 to 100
  status?: 'healthy' | 'warning' | 'critical' | 'idle';
  animate?: boolean;
}

export const TelemetryIndicator = ({
  label,
  value,
  status = 'healthy',
  animate = true,
}: TelemetryIndicatorProps) => {
  const statusColors = {
    healthy: 'bg-emerald-500',
    warning: 'bg-amber-500',
    critical: 'bg-rose-500',
    idle: 'bg-brand-slate',
  };

  const glowColors = {
    healthy: 'shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    warning: 'shadow-[0_0_8px_rgba(245,158,11,0.5)]',
    critical: 'shadow-[0_0_8px_rgba(244,63,94,0.5)]',
    idle: 'shadow-none',
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-brand-slate">
        <span>{label}</span>
        <span className={cn(
          "px-1.5 py-0.5 rounded border border-brand-border",
          status === 'healthy' ? "text-emerald-500 bg-emerald-500/5" :
          status === 'warning' ? "text-amber-500 bg-amber-500/5" :
          "text-rose-500 bg-rose-500/5"
        )}>
          {value}%
        </span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-brand-border">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "circOut" }}
          className={cn(
            "h-full rounded-full transition-colors duration-500",
            statusColors[status],
            glowColors[status]
          )}
        />
      </div>
      {animate && status === 'healthy' && (
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="h-3 w-1 bg-brand-blue/20 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};
