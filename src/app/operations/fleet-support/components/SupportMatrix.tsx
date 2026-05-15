'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Truck, Car, Info } from 'lucide-react';

const classes = [
  { id: 1, label: "CLASS 1", weight: "6,000 lbs or less", type: "Light Duty" },
  { id: 2, label: "CLASS 2", weight: "6,001–10,000 lbs", type: "Light Duty" },
  { id: 3, label: "CLASS 3", weight: "10,001–14,000 lbs", type: "Medium Duty" },
  { id: 4, label: "CLASS 4", weight: "14,001–16,000 lbs", type: "Medium Duty" },
  { id: 5, label: "CLASS 5", weight: "16,001–19,500 lbs", type: "Medium Duty" },
  { id: 6, label: "CLASS 6", weight: "19,501–26,000 lbs", type: "Medium Duty" },
  { id: 7, label: "CLASS 7", weight: "26,001–33,000 lbs", type: "Heavy Duty" },
  { id: 8, label: "CLASS 8", weight: "33,001 lbs or above", type: "Super Heavy Duty" }
];

export const SupportMatrix = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Vehicle Infrastructure Support</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Vehicle Class <span className="text-[#2F80FF]">Support Matrix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {classes.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.05 }}
             >
               <GlassPanel className="p-6 group hover:border-[#2F80FF]/30 transition-all duration-500 relative overflow-hidden h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                     <div className="h-10 w-10 rounded-lg bg-white/[0.03] flex items-center justify-center border border-brand-border group-hover:bg-[#2F80FF]/10 transition-all">
                        <Truck className={`h-5 w-5 ${c.id > 6 ? 'text-purple-400' : c.id > 2 ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`} />
                     </div>
                     <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest">{c.type}</span>
                  </div>
                  
                  <h3 className="text-xl font-black text-foreground dark:text-white mb-2 leading-tight">{c.label}</h3>
                  <p className="text-brand-slate text-sm font-bold mb-6">{c.weight}</p>
                  
                  <div className="mt-auto pt-6 border-t border-brand-border flex items-center justify-between">
                     <div className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Full Coverage</span>
                     </div>
                     <button className="h-6 w-6 rounded-md bg-white/5 border border-brand-border flex items-center justify-center hover:bg-[#2F80FF]/10 transition-colors">
                        <Info className="h-3 w-3 text-brand-slate" />
                     </button>
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>

        {/* Support Category Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-12">
           {[
             { label: 'Light Duty', color: 'bg-[#2F80FF]' },
             { label: 'Medium Duty', color: 'bg-[#FF7A1A]' },
             { label: 'Heavy Duty', color: 'bg-purple-400' },
             { label: 'Super Heavy Duty', color: 'bg-indigo-400' }
           ].map((l, i) => (
             <div key={i} className="flex items-center gap-3">
                <div className={`h-2 w-2 rounded-full ${l.color} shadow-[0_0_8px_rgba(47,128,255,0.4)]`} />
                <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest leading-none">{l.label}</span>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
