'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Terminal, Layout, Activity, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Nationwide Technician Network',
    desc: 'Access our vetted network of certified mobile mechanics and roadside technicians available 24/7 across every major US region.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80',
    metrics: { label: 'Dispatch Success', val: '99.4%', trend: '+2.1%' }
  },
  {
    title: 'Real-Time Repair Dispatch',
    desc: 'Advanced automated dispatch engine that matches the closest qualified technician to the specific mechanical needs of the vehicle.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
    metrics: { label: 'Avg. Match Time', val: '< 120s', trend: '-14%' }
  },
  {
    title: 'API-Driven Repair Operations',
    desc: 'Programmatic infrastructure to trigger repairs, track telemetry, and automate billing within your enterprise mobility stack.',
    icon: Terminal,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    metrics: { label: 'API Uptime', val: '99.99%', trend: 'Stable' }
  }
];

export const RepairCapabilities = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Enterprise Infrastructure</span>
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Mission-Critical <span className="text-[#2F80FF]">Field Intelligence</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             Comprehensive mobile field solutions engineered for rapid mechanical resolution and deep-stack enterprise integration.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {capabilities.map((c, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.08, y: -24 }}
               className="relative group cursor-pointer"
             >
                {/* 50/50 Overlapping Icon */}
                <div className="absolute -top-6 left-12 h-14 w-14 bg-[#2F80FF] rounded-2xl flex items-center justify-center z-30 shadow-[0_10px_30px_rgba(47,128,255,0.4)] group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500">
                   <c.icon className="h-6 w-6 text-foreground dark:text-white" />
                </div>

                {/* Main Card */}
                <div className="h-full bg-card/60 backdrop-blur-2xl border border-brand-border rounded-[32px] p-10 flex flex-col relative overflow-hidden group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 transition-all duration-500 shadow-2xl">
                   {/* Background Visual Asset */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                      <div className="absolute inset-0 bg-cover bg-center mix-blend-luminosity" 
                           style={{ backgroundImage: `url(${c.image})` }} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
                   </div>

                   <div className="relative z-10 flex-1 mt-6">
                      <div className="flex items-start justify-between mb-8">
                         <h3 className="text-2xl font-black text-foreground dark:text-white leading-tight max-w-[200px] group-hover:text-[#2F80FF] transition-colors">
                            {c.title}
                         </h3>
                         <div className="h-10 w-10 bg-white/5 border border-brand-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2 group-hover:-translate-y-2">
                            <ArrowUpRight className="h-5 w-5 text-[#2F80FF]" />
                         </div>
                      </div>
                      
                      <p className="text-brand-slate font-medium leading-relaxed mb-12">
                         {c.desc}
                      </p>
                   </div>

                   {/* Live Telemetry Hub */}
                   <div className="relative z-10 pt-10 border-t border-brand-border flex items-end justify-between">
                      <div className="space-y-2">
                         <span className="text-[9px] font-black text-brand-slate uppercase tracking-[0.3em] block">
                            {c.metrics.label}
                         </span>
                         <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-black text-foreground dark:text-white font-mono tracking-tighter">
                               {c.metrics.val}
                            </span>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full ${
                               c.metrics.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-500' : 
                               c.metrics.trend.startsWith('-') ? 'bg-rose-500/10 text-rose-500' : 'bg-blue-500/10 text-blue-500'
                            }`}>
                               {c.metrics.trend}
                            </span>
                         </div>
                      </div>

                      {/* Micro-Telemetry Pulse */}
                      <div className="flex gap-1 h-6 items-end">
                         {[1, 2, 3, 4, 5].map((bar) => (
                           <motion.div
                             key={bar}
                             animate={{ height: ['40%', '100%', '40%'] }}
                             transition={{ duration: 1 + Math.random(), repeat: Infinity, delay: bar * 0.2 }}
                             className="w-1 bg-[#2F80FF]/30 rounded-full"
                           />
                         ))}
                      </div>
                   </div>

                   {/* Hover Gradient Edge */}
                   <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#2F80FF]/10 rounded-[32px] pointer-events-none transition-all duration-500" />
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
