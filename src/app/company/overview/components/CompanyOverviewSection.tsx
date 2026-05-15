'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, ShieldAlert, Cpu } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CompanyOverviewSection = () => {
  return (
    <section className="py-32 bg-card/20 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                 The Infrastructure <br />
                 <span className="text-brand-slate">Behind Mobility</span>
              </h2>
              <div className="space-y-6 text-brand-slate font-medium leading-relaxed text-sm md:text-base">
                 <p>
                    Nationwide Trans Inc. operates the underlying operational architecture that powers the modern mobility and recovery economy. We are not a traditional roadside provider; we are the enterprise dispatch intelligence engine that makes nationwide coordination possible.
                 </p>
                 <p>
                    From heavy-duty commercial fleet recoveries to complex multi-vehicle incident management, our API-first platform orchestrates real-time telemetry, vendor matching, and SLA-driven dispatch protocols to minimize downtime and maximize operational reliability.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                 {[
                   { label: 'Uptime', val: '99.99%' },
                   { label: 'Network Scalability', val: 'Infinite' },
                   { label: 'API Latency', val: '< 50ms' },
                   { label: 'Data Security', val: 'Enterprise-Grade' }
                 ].map((stat, i) => (
                   <div key={i} className="border-l border-[#2F80FF] pl-4 py-1">
                      <p className="text-xl font-black text-foreground dark:text-white">{stat.val}</p>
                      <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mt-1">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[
                   { title: 'Recovery Intelligence', desc: 'AI-driven systems matching complex incident parameters with the precise heavy-duty vendor capabilities required.', icon: Cpu },
                   { title: 'Nationwide Network', desc: 'A deeply integrated, verified ecosystem of recovery specialists and heavy-duty assets spanning North America.', icon: Network },
                   { title: 'Dispatch Infrastructure', desc: 'High-availability routing and coordination systems operating 24/7 with real-time GPS telemetry.', icon: Database },
                   { title: 'Incident Management', desc: 'Enterprise escalation protocols designed for high-severity commercial fleet and insurance operations.', icon: ShieldAlert }
                 ].map((card, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className={i % 2 === 1 ? 'md:mt-12' : ''}
                   >
                      <GlassPanel className="p-8 border-brand-border bg-brand-bg/80 hover:bg-white/[0.02] transition-colors group">
                         <div className="h-12 w-12 rounded-xl bg-white/5 border border-brand-border flex items-center justify-center mb-6 group-hover:border-[#2F80FF]/50 transition-colors">
                            <card.icon className="h-5 w-5 text-[#2F80FF]" />
                         </div>
                         <h3 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest mb-3">{card.title}</h3>
                         <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                            {card.desc}
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
