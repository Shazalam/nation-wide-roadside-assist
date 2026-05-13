'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const leaders = [
  { name: 'Sarah Jenkins', role: 'Chief Executive Officer', desc: 'Enterprise infrastructure architect and former FAANG operations executive.' },
  { name: 'Marcus Chen', role: 'VP of Dispatch Systems', desc: 'Specialist in heavy-duty operational routing and telemetry networks.' },
  { name: 'David Torres', role: 'Head of Fleet Intelligence', desc: 'Pioneer in predictive recovery analytics and SLA automation.' },
  { name: 'Elena Rostova', role: 'Director of Vendor Networks', desc: 'Expert in nationwide vendor compliance and ecosystem scaling.' }
];

export const LeadershipOperations = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Leadership & Operations
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm">
             Guided by recovery operations strategists and infrastructure architects.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
           {leaders.map((leader, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-6 border-white/5 bg-[#0A192F]/40 hover:bg-[#2F80FF]/10 transition-colors group">
                   <div className="w-16 h-16 rounded-2xl bg-[#081120] border border-white/10 mb-6 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081120] to-transparent" />
                   </div>
                   <h3 className="text-sm font-black text-white leading-tight mb-1">{leader.name}</h3>
                   <p className="text-[9px] font-bold text-[#2F80FF] uppercase tracking-widest mb-4">{leader.role}</p>
                   <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                      {leader.desc}
                   </p>
                </GlassPanel>
             </motion.div>
           ))}
        </div>

        {/* Operational Context */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <GlassPanel className="p-8 border-[#2F80FF]/20 bg-[#0A192F] relative overflow-hidden flex flex-col justify-center">
              <div className="absolute inset-0 bg-[#2F80FF]/5" />
              <h4 className="text-2xl font-black text-white mb-4 relative z-10">Operational Command Protocol</h4>
              <p className="text-sm text-[#94A3B8] mb-6 relative z-10 max-w-md leading-relaxed">
                 Our leadership directly oversees the National Dispatch Command Center, ensuring that enterprise growth metrics align flawlessly with on-the-ground recovery execution.
              </p>
              <div className="flex gap-4 relative z-10">
                 <button className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest hover:underline">
                    View Enterprise Strategy <ArrowRight className="h-3 w-3" />
                 </button>
              </div>
           </GlassPanel>
           
           <div className="grid grid-cols-2 gap-4">
              {[
                { val: '4', label: 'Command Centers' },
                { val: '24/7', label: 'Executive Oversight' },
                { val: '15+', label: 'Years Avg Experience' },
                { val: '99.9%', label: 'Uptime SLA' }
              ].map((stat, i) => (
                <div key={i} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center">
                   <p className="text-3xl font-black text-white mb-2">{stat.val}</p>
                   <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};
