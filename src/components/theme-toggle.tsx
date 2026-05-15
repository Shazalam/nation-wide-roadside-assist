'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-9 w-16 bg-white/5 border border-brand-border rounded-full animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        "relative h-9 w-16 rounded-full flex items-center p-1 cursor-pointer transition-all duration-500",
        "bg-card/40 dark:bg-white/5 backdrop-blur-xl border",
        "border-black/[0.08] dark:border-brand-border",
        "hover:border-brand-blue/40 group overflow-hidden"
      )}
      aria-label="Toggle Theme"
    >
      {/* Background Glow */}
      <div className={cn(
        "absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        isDark ? "bg-brand-blue/10" : "bg-brand-blue/5"
      )} />

      {/* Sliding Pill */}
      <motion.div
        animate={{ x: isDark ? 28 : 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className={cn(
          "h-7 w-7 rounded-full flex items-center justify-center relative z-10 shadow-lg transition-all duration-500",
          "bg-white dark:bg-[#2F80FF]",
          isDark ? "shadow-[0_0_15px_rgba(47,128,255,0.4)]" : "shadow-[0_4px_10px_rgba(15,23,42,0.1)]"
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-foreground dark:text-white fill-white" />
        ) : (
          <Sun className="h-4 w-4 text-[#0A192F]" />
        )}
      </motion.div>

      {/* Static Icons (Background) */}
      <div className="absolute inset-0 flex items-center justify-between px-2.5 pointer-events-none opacity-40">
        <Sun className={cn("h-3.5 w-3.5 transition-colors", !isDark ? "text-brand-blue" : "text-foreground dark:text-white/20")} />
        <Moon className={cn("h-3 w-3 transition-colors", isDark ? "text-foreground dark:text-white" : "text-slate-400")} />
      </div>
    </button>
  );
};
