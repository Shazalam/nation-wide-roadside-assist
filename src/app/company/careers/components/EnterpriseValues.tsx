'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, CheckCircle, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const values = [
  { title: 'Operational Excellence', icon: Target, desc: 'We execute with precision. Errors in our systems cause real-world delays. We build for zero-downtime reliability.' },
  { title: 'Enterprise Accountability', icon: Shield, desc: 'Extreme ownership of infrastructure. When fleets go down, they rely on our systems to coordinate the recovery.' },
  { title: 'Mission-Critical Execution', icon: Zap, desc: 'Fast-moving but highly disciplined. We build high-availability architecture for the enterprise mobility economy.' },
  { title: 'Dispatch Precision', icon: CheckCircle, desc: 'Data-driven decision making. We automate complex coordination workflows to remove human latency.' }
];

export const EnterpriseValues = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Enterprise Values
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
           {values.map((val, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="p-8 border-white/5 bg-white/[0.01] hover:bg-[#2F80FF]/5 hover:border-[#2F80FF]/20 transition-all group flex flex-col h-full">
                   <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 shrink-0 rounded border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-[#2F80FF]/50 transition-colors">
                         <val.icon className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                      <h3 className="text-sm font-black text-white uppercase tracking-widest">{val.title}</h3>
                   </div>
                   <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                      {val.desc}
                   </p>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
