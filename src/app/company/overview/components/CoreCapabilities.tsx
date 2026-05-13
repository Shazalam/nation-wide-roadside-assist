'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldAlert, Activity, GitMerge, Settings, HardHat } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  { title: 'Heavy-Duty Recovery', icon: Truck, kpi: 'Class 8 Certified' },
  { title: 'Dispatch Intelligence', icon: Activity, kpi: '< 2min Response' },
  { title: 'Fleet Recovery Coordination', icon: GitMerge, kpi: 'Infinite Scale' },
  { title: 'Incident Management', icon: ShieldAlert, kpi: '24/7 Command' },
  { title: 'Commercial Vehicle Services', icon: Settings, kpi: 'Nationwide' },
  { title: 'Hazard Zone Operations', icon: HardHat, kpi: 'Multi-Agency' }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-24 bg-[#0A192F]/20 relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Core Operational Capabilities
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm">
             Enterprise-grade recovery infrastructure engineered for scale.
           </p>
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
                <GlassPanel className="h-full p-6 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/0 to-[#2F80FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                   
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
                      <div className="h-1 w-full bg-white/5 rounded-full mt-4 overflow-hidden relative">
                         <div className="absolute top-0 bottom-0 left-0 bg-[#2F80FF] rounded-full w-1/3 group-hover:w-full transition-all duration-700 ease-out" />
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
