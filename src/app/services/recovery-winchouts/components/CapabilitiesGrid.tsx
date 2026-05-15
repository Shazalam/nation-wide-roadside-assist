'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Zap, Terminal, Activity, Shield, ArrowUpRight } from 'lucide-react';

const capabilities = [
  {
    title: 'Nationwide Heavy-Duty Network',
    desc: 'Instant access to over 5,000 certified heavy-duty recovery units and rotators capable of handling any Class 8 incident nationwide.',
    icon: Truck,
    metrics: { label: 'Certified Units', val: '5,000+', trend: '+12%' },
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  {
    title: 'Real-Time Incident Dispatch',
    desc: 'Proprietary dispatch engine that calculates weight-class requirements and matches the most qualified recovery unit within seconds.',
    icon: Zap,
    metrics: { label: 'Dispatch Speed', val: '< 90s', trend: '-15%' },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  {
    title: 'API-Driven Recovery Intelligence',
    desc: 'Programmable recovery infrastructure allowing fleets and insurers to trigger incident workflows and track telemetry via REST/SDKs.',
    icon: Terminal,
    metrics: { label: 'API Uptime', val: '99.99%', trend: 'Stable' },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80'
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#2F80FF]/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Operational Infrastructure</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight"
           >
              Mission-Critical <br />
              <span className="text-[#2F80FF]">Field Intelligence</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12">
           {capabilities.map((cap, i) => {
             const Icon = cap.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="relative group h-full"
               >
                  {/* Floating Icon Bubble (50% Overlap) */}
                  <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                     <motion.div
                       whileHover={{ scale: 1.2 }}
                       className="h-16 w-16 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                        <Icon className="h-7 w-7 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#2F80FF]/20 animate-pulse" />
                     </motion.div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-16 p-10 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.2)] overflow-hidden">
                     {/* Background Image Ghost */}
                     <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                          style={{ backgroundImage: `url(${cap.image})` }} />

                     <div className="relative z-10 mb-8">
                        <h3 className="text-xl md:text-2xl font-black text-foreground dark:text-white uppercase tracking-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                           {cap.title}
                        </h3>
                        <p className="text-[14px] text-brand-slate font-medium leading-relaxed">
                           {cap.desc}
                        </p>
                     </div>

                     {/* Operational Telemetry */}
                     <div className="mt-auto relative z-10 pt-8 border-t border-brand-border">
                        <div className="flex items-center justify-between mb-3">
                           <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.2em]">{cap.metrics.label}</span>
                           <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-black bg-emerald-400/10 px-2 py-0.5 rounded-full">
                              <ArrowUpRight className="w-3 h-3" />
                              {cap.metrics.trend}
                           </div>
                        </div>
                        
                        <div className="flex items-baseline gap-2">
                           <span className="text-4xl md:text-5xl font-black text-foreground dark:text-white font-mono tracking-tighter group-hover:text-[#2F80FF] transition-colors">
                              {cap.metrics.val}
                           </span>
                           <Activity className="w-4 h-4 text-[#2F80FF] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Small Progress Line */}
                        <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: '100%' }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                              className="h-full bg-gradient-to-r from-[#2F80FF] to-[#2F80FF]/20"
                           />
                        </div>
                     </div>

                     {/* Edge Glow Pulse */}
                     <div className="absolute inset-0 rounded-[28px] border-2 border-[#2F80FF]/0 group-hover:border-[#2F80FF]/10 transition-all duration-500 pointer-events-none" />
                  </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
};
