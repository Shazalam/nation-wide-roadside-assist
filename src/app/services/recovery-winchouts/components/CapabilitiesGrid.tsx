'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Terminal, Activity, Shield, Box } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Nationwide Heavy-Duty Network',
    desc: 'Instant access to over 5,000 certified heavy-duty recovery units and rotators capable of handling any Class 8 incident nationwide.',
    icon: Truck,
    metrics: { label: 'Certified Units', val: '5,000+' }
  },
  {
    title: 'Real-Time Incident Dispatch',
    desc: 'Proprietary dispatch engine that calculates weight-class requirements and matches the most qualified recovery unit within seconds.',
    icon: Zap,
    metrics: { label: 'Dispatch Speed', val: '< 90s' }
  },
  {
    title: 'API-Driven Recovery Intelligence',
    desc: 'Programmable recovery infrastructure allowing fleets and insurers to trigger incident workflows and track telemetry via REST/SDKs.',
    icon: Terminal,
    metrics: { label: 'API Uptime', val: '99.99%' }
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             className="px-4 py-1.5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em] mb-8"
           >
              Enterprise Infrastructure
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
              Mission-Critical Recovery <br />Field Intelligence
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-12 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative">
                   <div className="absolute -right-8 -top-8 h-32 w-32 bg-[#2F80FF]/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="h-16 w-16 rounded-2xl bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20 mb-10 group-hover:scale-110 transition-transform">
                      <cap.icon className="h-8 w-8 text-[#2F80FF]" />
                   </div>

                   <h3 className="text-2xl font-black text-white mb-6 leading-tight">{cap.title}</h3>
                   <p className="text-[#94A3B8] leading-relaxed font-medium mb-10">
                      {cap.desc}
                   </p>

                   <div className="pt-10 border-t border-white/5 flex items-center justify-between">
                      <div>
                         <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{cap.metrics.label}</p>
                         <p className="text-3xl font-black text-white tracking-tighter">{cap.metrics.val}</p>
                      </div>
                      <div className="flex gap-1 h-6">
                         {[1, 2, 3, 4, 5, 6].map(bar => (
                           <div key={bar} className={`w-1 rounded-full bg-[#2F80FF] ${bar > 4 ? 'opacity-20' : 'opacity-60'} self-end`} style={{ height: `${20 + (bar * 12)}%` }} />
                         ))}
                      </div>
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
