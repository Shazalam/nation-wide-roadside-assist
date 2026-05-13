'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Database, Activity, Layout, Terminal } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const capabilities = [
  {
    title: 'Nationwide Technician Network',
    desc: 'Access our vetted network of certified mobile mechanics and roadside technicians available 24/7 across every major US region.',
    icon: Layout,
    metrics: { label: 'Dispatch Success', val: '99.4%' }
  },
  {
    title: 'Real-Time Repair Dispatch',
    desc: 'Advanced automated dispatch engine that matches the closest qualified technician to the specific mechanical needs of the vehicle.',
    icon: Zap,
    metrics: { label: 'Avg. Match Time', val: '< 120s' }
  },
  {
    title: 'API-Driven Repair Operations',
    desc: 'Programmatic infrastructure to trigger repairs, track telemetry, and automate billing within your enterprise mobility stack.',
    icon: Terminal,
    metrics: { label: 'Uptime', val: '99.99%' }
  }
];

export const RepairCapabilities = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Enterprise Infrastructure</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Mission-Critical Mobile <br />Field Intelligence
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {capabilities.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative">
                   <div className="absolute -right-8 -top-8 h-32 w-32 bg-brand-blue/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="h-14 w-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 border border-brand-blue/20 group-hover:scale-110 transition-transform">
                      <c.icon className="h-6 w-6 text-brand-blue" />
                   </div>

                   <h3 className="text-2xl font-black text-white mb-6 leading-tight">{c.title}</h3>
                   <p className="text-[#94A3B8] leading-relaxed font-medium mb-10">{c.desc}</p>

                   <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                      <div className="space-y-1">
                         <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{c.metrics.label}</p>
                         <p className="text-2xl font-black text-white">{c.metrics.val}</p>
                      </div>
                      <div className="h-12 w-24 bg-white/5 rounded-xl border border-white/5 flex items-center justify-center overflow-hidden">
                         {/* Mini visualization */}
                         <div className="flex items-end gap-1 px-3 w-full h-8">
                            {[1, 2, 3, 4, 5, 6].map(bar => (
                              <motion.div 
                                key={bar}
                                animate={{ height: [`${20 + Math.random() * 60}%`, `${20 + Math.random() * 60}%`] }}
                                transition={{ duration: 1 + Math.random(), repeat: Infinity, repeatType: 'reverse' }}
                                className="flex-1 bg-brand-blue/30 rounded-t-sm" 
                              />
                            ))}
                         </div>
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
