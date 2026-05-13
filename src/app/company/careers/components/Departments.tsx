'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const departments = [
  { name: 'Engineering & Platform Infrastructure', desc: 'Build the API-first systems, real-time routing engines, and highly available architecture powering nationwide mobility.' },
  { name: 'Recovery Operations', desc: 'Lead complex commercial recovery efforts and manage real-time incident responses from our national command center.' },
  { name: 'Dispatch Intelligence', desc: 'Optimize vendor matching, SLA tracking, and coordinate immediate responses for mission-critical events.' },
  { name: 'Vendor Network Operations', desc: 'Scale and manage our nationwide ecosystem of certified heavy-duty and commercial recovery partners.' },
  { name: 'Incident Analytics', desc: 'Leverage operational data to predict recovery challenges and automate dispatch decision-making.' },
  { name: 'Customer Success', desc: 'Ensure enterprise fleets, insurers, and OEMs maximize the value of the Nationwide Trans platform.' }
];

export const Departments = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Enterprise Teams
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {departments.map((dept, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-8 border-white/5 bg-[#081120]/50 hover:bg-white/[0.03] transition-colors group cursor-pointer flex flex-col relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-[#2F80FF]/5 blur-2xl rounded-full group-hover:bg-[#2F80FF]/10 transition-colors" />
                   
                   <h3 className="text-sm font-black text-white leading-snug mb-4 relative z-10 pr-6">{dept.name}</h3>
                   <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed mb-8 relative z-10">
                      {dept.desc}
                   </p>
                   
                   <div className="mt-auto flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest relative z-10 group-hover:translate-x-1 transition-transform">
                      View Roles <ArrowRight className="h-3 w-3" />
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
