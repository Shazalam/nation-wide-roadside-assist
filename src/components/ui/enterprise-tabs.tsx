'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnterpriseTabsProps {
  tabs: {
    id: string;
    label: string;
    icon?: React.ReactNode;
  }[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: 'pills' | 'underline';
  className?: string;
}

export const EnterpriseTabs = ({
  tabs,
  activeTab,
  onChange,
  variant = 'pills',
  className,
}: EnterpriseTabsProps) => {
  return (
    <div className={cn(
      "flex p-1",
      variant === 'pills' ? "bg-white/[0.03] border border-brand-border rounded-xl w-fit" : "border-b border-brand-border w-full gap-8 px-2",
      className
    )}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center gap-2",
              isActive ? "text-white" : "text-brand-slate hover:text-white",
              variant === 'underline' && "px-1 pb-3 pt-2"
            )}
          >
            {tab.icon && <span className={cn("h-4 w-4", isActive ? "text-brand-blue" : "text-brand-slate")}>{tab.icon}</span>}
            {tab.label}
            
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className={cn(
                  "absolute inset-0 z-0",
                  variant === 'pills' ? "bg-brand-blue/10 border border-brand-blue/30 rounded-lg shadow-[0_0_15px_rgba(47,128,255,0.15)]" : "border-b-2 border-brand-blue bottom-[-1px] left-0 right-0 h-[2px]"
                )}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};
