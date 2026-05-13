'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Map, Zap, Target } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const OperationsMap = () => {
  return (
    <section className="py-24 bg-[#081120] relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           
           <div className="lg:col-span-5 space-y-8">
              <div>
                 <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
                    Nationwide Operations <br />Coverage
                 </h2>
                 <p className="text-[#94A3B8] font-medium text-sm leading-relaxed max-w-md">
                    Connect with regional dispatch hubs. Our platform orchestrates a deeply integrated network of recovery assets across North America, ensuring immediate commercial fleet support.
                 </p>
              </div>

              <div className="space-y-4">
                 {[
                   { title: 'Dispatch Regions', val: '48 Contiguous States', icon: Map },
                   { title: 'Vendor Coverage', val: '10,000+ Certified Partners', icon: Target },
                   { title: 'Heavy-Duty Operational Coverage', val: 'Class 8 Ready', icon: Zap }
                 ].map((stat, i) => (
                   <div key={i} className="flex items-center gap-4 bg-[#0A192F]/50 p-4 rounded-xl border border-white/5">
                      <div className="h-10 w-10 shrink-0 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                         <stat.icon className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{stat.title}</p>
                         <p className="text-sm font-black text-white">{stat.val}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-7 h-[500px] relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-[#0A192F] opacity-90 mix-blend-multiply" />
              {/* Simulated Map Visual */}
              <div className="absolute inset-0 flex items-center justify-center opacity-60">
                 <svg viewBox="0 0 800 500" className="w-full h-full stroke-white/10 fill-none" strokeWidth="0.5">
                    <path d="M100,100 Q400,50 700,150 T800,400 Q400,450 100,300 Z" />
                    {/* Activity nodes representing hubs */}
                    <circle cx="200" cy="200" r="4" className="fill-[#2F80FF]" />
                    <circle cx="200" cy="200" r="12" className="fill-[#2F80FF] opacity-20 animate-ping" />
                    
                    <circle cx="500" cy="250" r="3" className="fill-[#FF7A1A]" />
                    <circle cx="500" cy="250" r="10" className="fill-[#FF7A1A] opacity-20 animate-ping" />
                    
                    <circle cx="650" cy="180" r="4" className="fill-emerald-400" />
                    <circle cx="650" cy="180" r="12" className="fill-emerald-400 opacity-20 animate-ping" />
                 </svg>
              </div>

              {/* Data Overlay */}
              <div className="absolute top-6 right-6">
                 <GlassPanel className="p-4 bg-[#081120]/80 border-white/10">
                    <p className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                       <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                       Routing Network Active
                    </p>
                    <div className="space-y-2">
                       <div className="flex justify-between gap-8">
                          <span className="text-[10px] text-[#94A3B8]">Fleet Support Infra</span>
                          <span className="text-[10px] font-black text-white">Online</span>
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
