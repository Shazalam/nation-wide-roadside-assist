'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Shield, Globe, Truck, 
  AppWindow, Activity, BarChart3, Radio, ShieldCheck
} from 'lucide-react';

const ecosystemCards = [
  {
    title: 'Motor Clubs',
    desc: 'Deliver premium roadside experiences at scale with custom white-label solutions, real-time tracking, automated provider routing, and robust API endpoints.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Insurance Carriers',
    desc: 'Streamline claims processing, accelerate incident resolution, and significantly reduce overall loss ratios across your policyholder network.',
    icon: BarChart3,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  {
    title: 'Connected Ecosystems',
    desc: 'Power OEM and connected vehicle platforms with enterprise-grade infrastructure built for massive scale and 99.9% uptime reliability.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80'
  },
  {
    title: 'Fleet Insurance',
    desc: 'Reduce downtime and improve fleet performance with dynamic incident telemetry and automated roadside assistance dispatch.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80'
  },
  {
    title: 'Enterprise Platforms',
    desc: 'API-first infrastructure for modern mobility operations, handling millions of events annually with comprehensive 24/7 support.',
    icon: AppWindow,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  }
];

export default function IndustryEcosystem() {
  return (
    <section className="relative z-10 py-32 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-[1536px]">
        <div className="max-w-3xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
               Built for Every <span className="text-[#2F80FF]">Insurance & Mobility</span> Ecosystem
            </h2>
            <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl mx-auto">
               Specialized operational nodes for every segment of the enterprise transportation landscape.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-16">
          {ecosystemCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group h-full cursor-pointer relative"
              >
                {/* Floating Icon Bubble (50% Overlap) */}
                <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                   <motion.div
                     whileHover={{ scale: 1.2 }}
                     className="h-14 w-14 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                   >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                      <Icon className="h-6 w-6 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                      <div className="absolute inset-0 rounded-xl border-2 border-[#2F80FF]/20 animate-pulse" />
                   </motion.div>
                </div>

                {/* Glassmorphism Card */}
                <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-14 p-8 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                   {/* Background Image Ghost */}
                   <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                        style={{ backgroundImage: `url(${card.image})` }} />
                   
                   <div className="relative z-10 mb-8 pt-4">
                      <h3 className="text-base font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                        {card.desc}
                      </p>
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
}
