'use client';

import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: 'Phase 1', title: 'Regional Recovery Operations', desc: 'Establishing initial heavy-duty coordination zones.' },
  { year: 'Phase 2', title: 'Nationwide Dispatch Expansion', desc: 'Scaling the vendor network across 48 states.' },
  { year: 'Phase 3', title: 'Fleet Infrastructure Development', desc: 'Specialized enterprise fleet mobility programs.' },
  { year: 'Phase 4', title: 'Recovery Intelligence Platform', desc: 'AI-driven dispatch and SLA automation.' },
  { year: 'Phase 5', title: 'Enterprise API Ecosystem', desc: 'Launch of REST APIs and telemetry webhooks.' },
  { year: 'Phase 6', title: 'Real-Time Command Systems', desc: 'Full NTI-OS deployment for live operational control.' }
];

export const CompanyEvolution = () => {
  return (
    <section className="py-32 bg-[#081120] relative z-10 overflow-hidden border-y border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4">
         <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Company Evolution
           </h2>
        </div>

        <div className="max-w-5xl mx-auto relative">
           {/* Center Line */}
           <div className="absolute top-0 bottom-0 left-[20px] md:left-1/2 w-px bg-gradient-to-b from-transparent via-[#2F80FF]/30 to-transparent -translate-x-1/2" />

           <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                   {/* Timeline Dot */}
                   <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-[#081120] border-2 border-[#2F80FF] -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(47,128,255,0.5)]" />

                   <div className="md:w-1/2 pl-12 md:pl-0" />
                   
                   <div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                      <div className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-md hover:bg-white/[0.04] transition-colors relative group">
                         <div className="absolute inset-0 bg-[#2F80FF]/0 group-hover:bg-[#2F80FF]/5 transition-colors rounded-2xl" />
                         <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest mb-2 block">{item.year}</span>
                         <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2 leading-tight">{item.title}</h3>
                         <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
