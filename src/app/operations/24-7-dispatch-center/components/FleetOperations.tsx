'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Box, Shield, Settings, Zap, Map } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const industries = [
  { title: 'Commercial Trucking', icon: Truck },
  { title: 'Logistics Fleets', icon: Box },
  { title: 'Insurance Operations', icon: Shield },
  { title: 'Fleet Management', icon: Settings },
  { title: 'OEM Mobility', icon: Zap },
  { title: 'Emergency Networks', icon: Map }
];

export const FleetOperations = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              Enterprise Fleet Coordination
           </h2>
           <p className="text-brand-slate font-medium text-sm">
             We integrate directly with commercial fleet systems to automate recovery events, reducing total downtime and optimizing SLA performance across nationwide networks.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {industries.map((ind, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="p-6 border-brand-border bg-white/[0.02] flex flex-col items-center text-center gap-4 group hover:bg-[#2F80FF]/5 hover:border-[#2F80FF]/30 transition-all">
                   <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-brand-border group-hover:bg-[#2F80FF]/10 group-hover:border-[#2F80FF]/30 transition-all">
                      <ind.icon className="h-4 w-4 text-brand-slate group-hover:text-[#2F80FF]" />
                   </div>
                   <span className="text-[9px] font-black text-foreground dark:text-white uppercase tracking-widest leading-tight">{ind.title}</span>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
