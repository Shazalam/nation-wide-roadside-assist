'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GlassPanel } from './glass-panel';

interface EnterpriseAccordionProps {
  items: {
    title: string;
    content: React.ReactNode;
    icon?: React.ReactNode;
  }[];
}

export const EnterpriseAccordion = ({ items }: EnterpriseAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <GlassPanel 
            key={index} 
            className={cn(
              "overflow-hidden transition-all duration-300",
              isOpen ? "border-brand-blue/30 bg-brand-blue/5" : "hover:border-brand-border/80"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
              <div className="flex items-center gap-3">
                {item.icon && <div className={cn("text-brand-slate", isOpen && "text-brand-blue")}>{item.icon}</div>}
                <span className={cn(
                  "text-sm font-bold tracking-tight transition-colors",
                  isOpen ? "text-foreground dark:text-white" : "text-brand-slate"
                )}>
                  {item.title}
                </span>
              </div>
              <ChevronDown className={cn(
                "h-4 w-4 text-brand-slate transition-transform duration-300",
                isOpen && "rotate-180 text-brand-blue"
              )} />
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-sm text-brand-slate leading-relaxed border-t border-brand-border/20 pt-4">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </GlassPanel>
        );
      })}
    </div>
  );
};
