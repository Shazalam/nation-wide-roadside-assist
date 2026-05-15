'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, Shield, MessageSquare, Activity, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "AI-Assisted Call Routing",
    description: "Intelligent call classification, priority scoring, and automated dispatch routing based on live network density.",
    icon: Headphones,
    metric: "96.3%",
    metricLabel: "Routing Accuracy",
    trend: "+2.4%",
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80'
  },
  {
    title: "SLA-Driven Dispatch",
    description: "Real-time SLA tracking, escalation management, and performance monitoring for high-priority emergency events.",
    icon: Shield,
    metric: "97.8%",
    metricLabel: "SLA Achievement",
    trend: "+1.8%",
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  {
    title: "Real-Time Mobility Comms",
    description: "Live ETA updates, proactive driver notifications, and automated multi-channel communication infrastructure.",
    icon: MessageSquare,
    metric: "4.8/5",
    metricLabel: "Customer Satisfaction",
    trend: "+0.5",
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80'
  }
];

export const CapabilitiesGrid = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      
      <div className="max-w-[1600px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group h-full"
              >
                {/* Floating Icon Bubble (50% Overlap) */}
                <div className="absolute top-0 left-12 -translate-y-1/2 z-20">
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
                        style={{ backgroundImage: `url(${feature.image})` }} />

                   {/* Background Large Icon Ghost */}
                   <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                      <Icon className="w-64 h-64 text-[#2F80FF] rotate-12" />
                   </div>

                   <div className="relative z-10 mb-8">
                      <h3 className="text-xl md:text-2xl font-black text-foreground dark:text-white tracking-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-[14px] text-brand-slate font-medium leading-relaxed">
                        {feature.description}
                      </p>
                   </div>

                   {/* Operational Telemetry */}
                   <div className="mt-auto relative z-10 pt-8 border-t border-brand-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.2em]">{feature.metricLabel}</span>
                        <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-black bg-emerald-400/10 px-2 py-0.5 rounded-full">
                           <ArrowUpRight className="w-3 h-3" />
                           {feature.trend}
                        </div>
                      </div>
                      
                      <div className="flex items-baseline gap-2">
                         <span className="text-4xl md:text-5xl font-black text-foreground dark:text-white font-mono tracking-tighter group-hover:text-[#2F80FF] transition-colors">
                            {feature.metric}
                         </span>
                         <Activity className="w-4 h-4 text-[#2F80FF] animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Small Progress Line */}
                      <div className="mt-6 h-1 w-full bg-white/5 rounded-full overflow-hidden">
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
