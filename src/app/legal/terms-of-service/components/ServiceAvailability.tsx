'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Globe, Zap, Server, Shield } from 'lucide-react';

const regions = [
  { name: 'Northeast Ops', uptime: '99.99%', load: 'Normal' },
  { name: 'Southeast Ops', uptime: '99.98%', load: 'Normal' },
  { name: 'Midwest Ops', uptime: '99.99%', load: 'Nominal' },
  { name: 'Western Ops', uptime: '99.97%', load: 'Normal' }
];

export const ServiceAvailability = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
           <div className="lg:w-2/5 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Infrastructure Availability</span>
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
                Global Service <br />
                <span className="text-[#2F80FF]">Continuity Mesh</span>
              </h2>
              <p className="text-base lg:text-lg text-brand-slate leading-relaxed font-medium">
                Our infrastructure is engineered with regional redundancy and automated failover systems to ensure mission-critical dispatch continuity.
              </p>
              
              <div className="space-y-4 pt-4">
                 {[
                   { label: 'Automated Failover', icon: Zap },
                   { label: 'Regional Redundancy', icon: Server },
                   { label: 'Global Monitoring', icon: Shield }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 p-4 bg-white/[0.02] border border-brand-border rounded-xl">
                      <div className="h-8 w-8 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center">
                         <item.icon className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <span className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</span>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">
              {regions.map((reg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassPanel className="p-8 border-brand-border bg-card/60 group hover:border-[#2F80FF]/30 transition-all">
                     <div className="flex justify-between items-start mb-8">
                        <div>
                           <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest mb-1">{reg.name}</h4>
                           <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Regional Operational Node</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                     </div>
                     
                     <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">Uptime</p>
                           <p className="text-xl font-black text-[#2F80FF] tracking-tighter">{reg.uptime}</p>
                        </div>
                        <div className="space-y-1">
                           <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">Status</p>
                           <p className="text-xl font-black text-foreground dark:text-white tracking-tighter">{reg.load}</p>
                        </div>
                     </div>
                     
                     <div className="mt-8 h-1 w-full bg-white/[0.03] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 2, delay: i * 0.2 }}
                          className="h-full bg-[#2F80FF]" 
                        />
                     </div>
                  </GlassPanel>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
