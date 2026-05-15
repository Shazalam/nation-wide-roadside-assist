'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Target } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const NationwideOperations = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           <div className="lg:col-span-5 space-y-8">
              <div>
                 <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
                    Nationwide Operational <br />Scale
                 </h2>
                 <p className="text-brand-slate font-medium text-sm leading-relaxed max-w-md">
                    Our platform orchestrates a deeply integrated network of recovery assets across North America, ensuring that heavy-duty commercial fleets and enterprise partners have immediate support, regardless of the incident's geographic complexity.
                 </p>
              </div>

              <div className="space-y-4">
                 {[
                   { title: 'Dispatch Regions', val: '48 Contiguous States', icon: Map },
                   { title: 'Vendor Coverage', val: '10,000+ Certified Partners', icon: Target },
                   { title: 'Real-Time Monitoring', val: 'Sub-Second Latency', icon: Zap }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-card/50 p-4 rounded-xl border border-brand-border">
                      <div className="h-10 w-10 shrink-0 rounded bg-white/5 border border-brand-border flex items-center justify-center">
                         <stat.icon className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">{stat.title}</p>
                         <p className="text-sm font-black text-foreground dark:text-white">{stat.val}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7 h-[500px] relative rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
              <div className="absolute inset-0 bg-card opacity-90 mix-blend-multiply" />
              {/* Simulated Map Visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                 <svg viewBox="0 0 800 500" className="w-full h-full stroke-white/10 fill-none" strokeWidth="0.5">
                    <path d="M100,100 Q400,50 700,150 T800,400 Q400,450 100,300 Z" />
                    {/* Activity nodes */}
                    <circle cx="200" cy="200" r="4" className="fill-[#2F80FF]" />
                    <circle cx="200" cy="200" r="12" className="fill-[#2F80FF] opacity-20 animate-ping" />
                    
                    <circle cx="500" cy="250" r="3" className="fill-[#FF7A1A]" />
                    <circle cx="500" cy="250" r="10" className="fill-[#FF7A1A] opacity-20 animate-ping" />
                    
                    <circle cx="650" cy="180" r="4" className="fill-emerald-400" />
                    <circle cx="650" cy="180" r="12" className="fill-emerald-400 opacity-20 animate-ping" />
                    
                    <circle cx="350" cy="350" r="3" className="fill-[#2F80FF]" />
                 </svg>
              </div>

              {/* Data Overlay */}
              <div className="absolute top-6 right-6">
                 <GlassPanel className="p-4 bg-brand-bg/80 border-brand-border">
                    <p className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                       Live Telemetry Active
                    </p>
                    <div className="space-y-2">
                       <div className="flex justify-between gap-8">
                          <span className="text-[10px] text-brand-slate">Fleet Support Infra</span>
                          <span className="text-[10px] font-black text-foreground dark:text-white">Online</span>
                       </div>
                       <div className="flex justify-between gap-8">
                          <span className="text-[10px] text-brand-slate">Heavy-Duty Reach</span>
                          <span className="text-[10px] font-black text-foreground dark:text-white">99.1%</span>
                       </div>
                    </div>
                 </GlassPanel>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
