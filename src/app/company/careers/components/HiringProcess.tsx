'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Application Review', desc: 'Initial baseline assessment.' },
  { id: 2, title: 'Operational Screening', desc: 'Cultural and experience alignment.' },
  { id: 3, title: 'Team Interview', desc: 'Deep dive into technical / operational capabilities.' },
  { id: 4, title: 'Infrastructure Assessment', desc: 'Real-world problem solving.' },
  { id: 5, title: 'Leadership Discussion', desc: 'Enterprise strategy alignment.' },
  { id: 6, title: 'Final Offer', desc: 'Welcome to the platform.' }
];

export const HiringProcess = () => {
  return (
    <section className="py-32 bg-[#0A192F]/20 relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Enterprise Hiring Workflow
           </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block" />
           <div className="absolute top-8 left-[20%] right-[20%] h-0.5 bg-transparent border-t border-dashed border-[#2F80FF]/50 hidden lg:block" />
           
           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group relative"
                >
                   <div className="relative mb-6">
                      <div className={`h-16 w-16 rounded-xl border border-white/10 flex items-center justify-center relative z-10 group-hover:border-[#2F80FF] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all bg-[#081120] ${i === 5 ? 'border-emerald-400/50 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.4)]' : ''}`}>
                         <span className={`text-lg font-black ${i === 5 ? 'text-emerald-400' : 'text-white'}`}>{step.id}</span>
                      </div>
                      
                      {/* Pulse Indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2F80FF]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>

                   <h3 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight mb-2">
                      {step.title}
                   </h3>
                   <p className="text-[9px] text-[#94A3B8] font-medium leading-relaxed max-w-[140px]">
                      {step.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
