'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Cpu, Zap, Activity, GitMerge, ShieldAlert, ArrowUpRight, Network } from 'lucide-react';

const reasons = [
  { 
    title: 'Nationwide Operational Impact', 
    icon: Map, 
    kpi: '48 States',
    desc: 'Contribute to a platform that manages real-time mobility infrastructure across every major US highway.',
    velocity: '98%',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80' // Highway trucks
  },
  { 
    title: 'Enterprise Infrastructure Ownership', 
    icon: Cpu, 
    kpi: 'Core Systems',
    desc: 'Take direct ownership of mission-critical systems that orchestrate nationwide roadside operations at scale.',
    velocity: '96%',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80' // Data center
  },
  { 
    title: 'Recovery Intelligence Innovation', 
    icon: Zap, 
    kpi: 'AI Driven',
    desc: 'Build AI-assisted dispatch engines and predictive analytics that redefine the future of roadside recovery.',
    velocity: '94%',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80' // AI/Tech
  },
  { 
    title: 'Real-Time Dispatch Systems', 
    icon: Activity, 
    kpi: 'Sub-Second',
    desc: 'Engineer low-latency event processing systems for high-priority emergency response and coordination.',
    velocity: '99%',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80' // Dashboard/Analytics
  },
  { 
    title: 'Fleet Mobility Technology', 
    icon: GitMerge, 
    kpi: 'API First',
    desc: 'Develop API-first architectures that integrate seamlessly with the world’s largest commercial delivery fleets.',
    velocity: '95%',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80' // Coding/API
  },
  { 
    title: 'Large-Scale Coordination', 
    icon: ShieldAlert, 
    kpi: '24/7 Ops',
    desc: 'Join a world-class command center operations team managing thousands of simultaneous recovery events.',
    velocity: '97%',
    image: 'https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80' // Team/Ops
  }
];

export const WhyJoinUs = () => {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Grid Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Network className="h-4 w-4 text-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Career Evolution</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight"
           >
              Why Join <span className="text-[#2F80FF]">Nationwide Roadside Assist</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12">
           {reasons.map((reason, i) => {
             const Icon = reason.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
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
                  <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-16 p-10 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                     {/* Background Image Ghost */}
                     <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                          style={{ backgroundImage: `url(${reason.image})` }} />
                     
                     <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className="px-3 py-1 bg-[#2F80FF]/10 border border-[#2F80FF]/30 rounded-lg text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(47,128,255,0.1)]">
                           {reason.kpi}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-foreground dark:text-white/20 group-hover:text-[#2F80FF] transition-colors" />
                     </div>
                     
                     <div className="relative z-10 mb-8">
                        <h3 className="text-xl font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                           {reason.title}
                        </h3>
                        <p className="text-[14px] text-brand-slate font-medium leading-relaxed">
                           {reason.desc}
                        </p>
                     </div>
                     
                     <div className="mt-auto relative z-10 pt-6 border-t border-brand-border">
                        <div className="flex justify-between items-center mb-3">
                           <span className="text-[9px] font-black text-foreground dark:text-white/40 uppercase tracking-widest">Innovation Index</span>
                           <span className="text-[12px] font-bold text-foreground dark:text-white font-mono">{reason.velocity}</span>
                        </div>
                        {/* Telemetry Progress line */}
                        <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden relative">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: reason.velocity }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                              className="absolute top-0 bottom-0 left-0 bg-[#2F80FF] rounded-full shadow-[0_0_10px_#2F80FF]" 
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
