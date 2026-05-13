'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Cpu, Zap, Activity, GitMerge, ShieldAlert } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  { title: 'Nationwide Operational Impact', icon: Map, kpi: '48 States' },
  { title: 'Enterprise Infrastructure Ownership', icon: Cpu, kpi: 'Core Systems' },
  { title: 'Recovery Intelligence Innovation', icon: Zap, kpi: 'AI Driven' },
  { title: 'Real-Time Dispatch Systems', icon: Activity, kpi: 'Sub-Second' },
  { title: 'Fleet Mobility Technology', icon: GitMerge, kpi: 'API First' },
  { title: 'Large-Scale Incident Coordination', icon: ShieldAlert, kpi: '24/7 Operations' }
];

export const WhyJoinUs = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Why Join Nationwide Trans Inc.
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {capabilities.map((cap, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-6 border-white/5 bg-[#0A192F]/40 hover:bg-[#2F80FF]/10 hover:border-[#2F80FF]/30 transition-all group relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-0 group-hover:opacity-10 mix-blend-luminosity transition-opacity duration-700" />
                   
                   <div className="flex justify-between items-start mb-12 relative z-10">
                      <div className="h-12 w-12 rounded-xl bg-[#081120] border border-white/10 flex items-center justify-center group-hover:border-[#2F80FF]/50 transition-colors shadow-[0_0_15px_rgba(0,0,0,0.3)]">
                         <cap.icon className="h-5 w-5 text-[#2F80FF]" />
                      </div>
                      <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-emerald-400 uppercase tracking-widest">
                         {cap.kpi}
                      </span>
                   </div>
                   
                   <div className="relative z-10">
                      <h3 className="text-[11px] font-black text-white uppercase tracking-wider leading-snug">
                         {cap.title}
                      </h3>
                      
                      {/* Telemetry Abstraction line */}
                      <div className="h-0.5 w-full bg-white/5 mt-4 overflow-hidden relative">
                         <div className="absolute top-0 bottom-0 left-0 bg-[#2F80FF] w-1/4 group-hover:w-full transition-all duration-700 ease-out" />
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
