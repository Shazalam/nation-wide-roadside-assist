'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, ShieldAlert, Users } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const SupportSystems = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-5">
              <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-8">
                 Enterprise Support & <br />
                 <span className="text-[#94A3B8]">Response Systems</span>
              </h2>
              <div className="space-y-6 text-[#94A3B8] font-medium leading-relaxed text-sm md:text-base mb-10">
                 <p>
                    We do not rely on standard ticketing systems. Enterprise support at Nationwide Trans Inc. involves direct communication with our operational command layers.
                 </p>
                 <p>
                    Incident escalation workflows are entirely automated, routing high-priority commercial fleet recoveries and API anomalies directly to specialized infrastructure response teams.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                 {[
                   { label: 'Avg Dispatch Response', val: '< 2m' },
                   { label: 'SLA Compliance Rate', val: '98.9%' },
                   { label: 'Coordination Uptime', val: '99.99%' },
                   { label: 'Support Availability', val: '24/7' }
                 ].map((stat, i) => (
                   <div key={i} className="border-l border-[#2F80FF] pl-4 py-1">
                      <p className="text-xl font-black text-white">{stat.val}</p>
                      <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mt-1">{stat.label}</p>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 {[
                   { title: 'Account Coordination', desc: 'Dedicated operational managers for strategic fleet accounts.', icon: Users },
                   { title: 'Escalation Infrastructure', desc: 'Multi-tiered routing for critical recovery operations.', icon: ShieldAlert },
                   { title: 'Real-Time Sync', desc: 'Direct WebSocket integration for live incident collaboration.', icon: Network },
                   { title: 'API Support Desk', desc: 'Engineering-level support for platform integrations.', icon: Database }
                 ].map((card, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.1 }}
                     viewport={{ once: true }}
                     className={i % 2 === 1 ? 'sm:mt-12' : ''}
                   >
                      <GlassPanel className="p-8 border-white/5 bg-[#081120]/80 hover:bg-white/[0.02] transition-colors group">
                         <div className="h-12 w-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#2F80FF]/50 transition-colors">
                            <card.icon className="h-5 w-5 text-[#2F80FF]" />
                         </div>
                         <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3">{card.title}</h3>
                         <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
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
