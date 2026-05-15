'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Settings, Activity } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const features = [
  { title: 'Nationwide Dispatch Coverage', icon: Map, desc: 'Centralized orchestration across all 48 contiguous states.' },
  { title: 'Vendor Routing Optimization', icon: Zap, desc: 'Algorithmic matching of heavy-duty assets to commercial incidents.' },
  { title: 'Incident Escalation Workflows', icon: Activity, desc: 'Automated tiered routing for complex or hazardous recoveries.' },
  { title: 'Multi-State Coordination', icon: Settings, desc: 'Seamless handover between regional dispatch centers.' }
];

export const DispatchInfrastructure = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                 Nationwide Dispatch <br />
                 <span className="text-brand-slate">Infrastructure</span>
              </h2>
              <div className="space-y-6 text-brand-slate font-medium leading-relaxed text-sm md:text-base mb-10">
                 <p>
                    Nationwide Trans Inc. operates a multi-region dispatch topology designed for extreme availability and low-latency vendor coordination.
                 </p>
                 <p>
                    Our infrastructure ingests telemetry from commercial fleets and automatically routes recovery events to specialized regional operational centers.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: 'Avg Dispatch Time', val: '4.2m' },
                   { label: 'SLA Performance', val: '99.8%' },
                   { label: 'Uptime Improvement', val: '+40%' },
                   { label: 'Active Regions', val: '4' }
                 ].map((stat, i) => (
                   <div key={i} className="border-l-2 border-[#2F80FF]/50 pl-4">
                      <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-xl font-black text-foreground dark:text-white">{stat.val}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {features.map((feature, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                   >
                      <GlassPanel className="p-8 border-brand-border bg-card/40 hover:bg-[#2F80FF]/5 transition-colors group h-full">
                         <div className="h-10 w-10 rounded-xl bg-white/5 border border-brand-border flex items-center justify-center mb-6 group-hover:border-[#2F80FF]/50 transition-colors">
                            <feature.icon className="h-5 w-5 text-[#2F80FF]" />
                         </div>
                         <h3 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest mb-3 leading-snug">{feature.title}</h3>
                         <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                            {feature.desc}
                         </p>
                      </GlassPanel>
                   </motion.div>
                 ))}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
