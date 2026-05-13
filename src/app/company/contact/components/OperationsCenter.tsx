'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Map, Clock } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const OperationsCenter = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Real-Time Operations Center
           </h2>
           <p className="text-[#94A3B8] font-medium text-sm max-w-xl">
             Our command center operates 24/7, monitoring live dispatch telemetry, SLA compliance, and fleet incident coordination across all 48 contiguous states.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[500px]">
           {/* Stats Side */}
           <div className="lg:col-span-4 flex flex-col gap-4">
              {[
                { title: 'Live SLA Monitoring', val: '99.8%', icon: Activity },
                { title: 'Command Availability', val: '24/7/365', icon: Clock },
                { title: 'Escalation Systems', val: 'Automated', icon: ShieldCheck },
                { title: 'Dispatch Routing', val: '< 50ms', icon: Map }
              ].map((stat, i) => (
                <GlassPanel key={i} className="flex-1 p-5 border-white/5 bg-[#0A192F]/40 flex items-center justify-between group hover:bg-[#2F80FF]/5 transition-colors">
                   <div>
                      <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest mb-1">{stat.title}</p>
                      <p className="text-2xl font-black text-white">{stat.val}</p>
                   </div>
                   <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#2F80FF]/10 group-hover:border-[#2F80FF]/30 transition-colors">
                      <stat.icon className="h-5 w-5 text-[#2F80FF]" />
                   </div>
                </GlassPanel>
              ))}
           </div>

           {/* Visual Map / Heatmap Area */}
           <div className="lg:col-span-8 rounded-2xl overflow-hidden relative border border-white/10 bg-[#081120]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#081120] via-[#0A192F]/80 to-transparent" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative w-full h-full max-w-2xl max-h-96">
                    {/* Abstract map lines */}
                    <svg className="absolute inset-0 w-full h-full stroke-[#2F80FF]/20 fill-none" strokeWidth="1">
                       <path d="M50,150 Q200,50 400,200 T700,100" />
                       <path d="M100,250 Q300,350 500,200 T750,300" />
                    </svg>
                    
                    {/* Active nodes */}
                    <div className="absolute top-[30%] left-[25%] h-3 w-3 bg-[#FF7A1A] rounded-full border-2 border-[#081120] shadow-[0_0_15px_#FF7A1A]">
                       <div className="absolute inset-0 bg-[#FF7A1A] rounded-full animate-ping opacity-50" />
                    </div>
                    <div className="absolute top-[60%] left-[45%] h-4 w-4 bg-[#2F80FF] rounded-full border-2 border-[#081120] shadow-[0_0_20px_#2F80FF]">
                       <div className="absolute inset-0 bg-[#2F80FF] rounded-full animate-ping opacity-50" />
                    </div>
                    <div className="absolute top-[40%] left-[70%] h-3 w-3 bg-emerald-400 rounded-full border-2 border-[#081120] shadow-[0_0_15px_#34d399]" />
                 </div>
              </div>

              {/* Overlay UI */}
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                 <div className="bg-[#081120]/80 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1 flex items-center gap-2">
                       <span className="h-1.5 w-1.5 bg-emerald-400 rounded-full animate-pulse" /> Command Active
                    </p>
                    <p className="text-[9px] text-[#94A3B8] font-mono">NODE: NTI-HQ-01</p>
                 </div>
                 
                 <div className="flex gap-2">
                    <div className="h-8 w-8 bg-white/5 rounded flex items-center justify-center border border-white/10 backdrop-blur-md">
                       <Activity className="h-4 w-4 text-[#94A3B8]" />
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
