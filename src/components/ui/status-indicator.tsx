'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'busy' | 'away' | 'alert';
  label?: string;
  pulse?: boolean;
}

export const StatusIndicator = ({
  status,
  label,
  pulse = true,
}: StatusIndicatorProps) => {
  const configs = {
    online: { color: 'bg-emerald-500', shadow: 'shadow-[0_0_10px_rgba(16,185,129,0.6)]', text: 'Online' },
    offline: { color: 'bg-brand-slate', shadow: 'shadow-none', text: 'Offline' },
    busy: { color: 'bg-rose-500', shadow: 'shadow-[0_0_10px_rgba(244,63,94,0.6)]', text: 'Busy' },
    away: { color: 'bg-amber-500', shadow: 'shadow-[0_0_10px_rgba(245,158,11,0.6)]', text: 'Away' },
    alert: { color: 'bg-brand-orange', shadow: 'shadow-[0_0_10px_rgba(255,122,26,0.6)]', text: 'Action Required' },
  };

  const current = configs[status];

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative flex items-center justify-center">
        {pulse && status !== 'offline' && (
          <motion.div
            animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className={cn("absolute h-2 w-2 rounded-full", current.color)}
          />
        )}
        <div className={cn("h-2 w-2 rounded-full z-10", current.color, current.shadow)} />
      </div>
      {label && (
        <span className="text-xs font-semibold text-white tracking-wide">
          {label || current.text}
        </span>
      )}
    </div>
  );
};
