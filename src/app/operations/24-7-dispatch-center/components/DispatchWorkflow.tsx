'use client';

import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Incident Detected', desc: 'Telemetry or API trigger.' },
  { id: 2, title: 'Dispatch Validation', desc: 'Automated data verification.' },
  { id: 3, title: 'Tow Assignment', desc: 'Algorithmic vendor matching.' },
  { id: 4, title: 'Fleet Coordination', desc: 'Enterprise notifications sent.' },
  { id: 5, title: 'Route Optimization', desc: 'GPS vector routing active.' },
  { id: 6, title: 'Live Tracking', desc: 'Real-time ETA updates.' },
  { id: 7, title: 'Recovery Complete', desc: 'Asset secured.' },
  { id: 8, title: 'Auto Reporting', desc: 'Data synchronized.' }
];

export const DispatchWorkflow = () => {
  return (
    <section className="py-32 bg-[#0A192F]/20 relative z-10 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Automated Dispatch Workflow
           </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block" />
           <div className="absolute top-8 left-[10%] right-[10%] h-0.5 bg-transparent border-t border-dashed border-[#2F80FF]/50 hidden lg:block" />
           
           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group relative"
                >
                   <div className="relative mb-6">
                      <div className="h-16 w-16 rounded-xl border border-white/10 flex items-center justify-center relative z-10 group-hover:border-[#2F80FF] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all bg-[#081120]">
                         <span className="text-lg font-black text-white">{step.id}</span>
                      </div>
                      
                      {/* Pulse Indicator */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#2F80FF]/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>

                   <h3 className="text-[9px] font-black text-white uppercase tracking-widest leading-tight mb-2 h-6">
                      {step.title}
                   </h3>
                   <p className="text-[9px] text-[#94A3B8] font-medium leading-relaxed max-w-[100px] mx-auto">
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
