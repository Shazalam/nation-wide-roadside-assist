'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { History, CheckCircle2, AlertCircle } from 'lucide-react';

const history = [
  {
    version: "v4.2.0",
    date: "May 14, 2026",
    title: "SLA Infrastructure Update",
    changes: [
      "Updated dispatch latency benchmarks for heavy-duty recovery.",
      "Integrated enhanced encryption standards for API node verification.",
      "Revised vendor coordination clauses for nationwide scaling."
    ]
  },
  {
    version: "v4.1.2",
    date: "February 18, 2026",
    title: "Regional Governance Expansion",
    changes: [
      "Added specific operational guidelines for Northeast regional nodes.",
      "Updated data residency protocols for enterprise insurance partners."
    ]
  },
  {
    version: "v4.0.0",
    date: "November 05, 2025",
    title: "Major Infrastructure Revision",
    changes: [
      "Complete overhaul of enterprise terms for API-first operational mesh.",
      "Launched the Unified Trust Center for mission-critical compliance."
    ]
  }
];

export const VersionTimeline = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Operational Lifecycle</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Agreement <span className="text-[#2F80FF]">Version History</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
           <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2F80FF]/50 via-brand-border to-transparent -translate-x-1/2 hidden lg:block" />
           
           <div className="space-y-12">
              {history.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                   <div className="lg:w-1/2 flex justify-center lg:justify-end">
                      <div className={`text-center lg:text-right ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                         <span className="text-2xl font-black text-[#2F80FF] tracking-tighter">{item.version}</span>
                         <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest mt-1">{item.date}</p>
                      </div>
                   </div>
                   
                   <div className="relative z-10 shrink-0">
                      <div className="h-4 w-4 rounded-full bg-brand-bg border-2 border-[#2F80FF] shadow-[0_0_10px_rgba(47,128,255,0.5)]" />
                   </div>

                   <div className="lg:w-1/2">
                      <GlassPanel className="p-6 border-brand-border bg-card/60">
                         <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest mb-4">{item.title}</h4>
                         <ul className="space-y-3">
                            {item.changes.map((change, ci) => (
                              <li key={ci} className="flex items-start gap-2.5">
                                 <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5 shrink-0" />
                                 <span className="text-[11px] text-brand-slate font-medium leading-relaxed">{change}</span>
                              </li>
                            ))}
                         </ul>
                      </GlassPanel>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
