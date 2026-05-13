'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Activity, TrendingUp, Globe } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const metrics = [
  { value: "1.45bn", label: "Vehicles On the Road", sub: "(2022)", icon: Globe },
  { value: "$817bn", label: "Global Auto Insurance Market", sub: "(2022)", icon: Activity },
  { value: "7.1%", label: "Auto-Insurance Premium Growth", sub: "(CAGR, 2022–2032E)", icon: TrendingUp }
];

export default function MarketIntelligence() {
  return (
    <section className="relative py-24 border-b border-white/5 bg-[#081120] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-16">
          
          {/* Left Side: Enterprise Copy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[55%]"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="h-px w-8 bg-[#2F80FF]" />
               <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Industry Market Intelligence</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Connected Mobility Is Reshaping Insurance Infrastructure
            </h2>
            
            <p className="text-[15px] text-[#94A3B8] leading-relaxed mb-10 max-w-2xl">
              With the rise of connected, electric, and autonomous vehicles, enterprise roadside operations and insurance ecosystems are undergoing massive digital transformation. Nationwide Trans Inc. provides the infrastructure backbone powering next-generation mobility operations.
            </p>
            
            <Button className="group bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-12 px-8 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all overflow-hidden relative">
               <span className="relative z-10 flex items-center">
                 Explore Insurance Solutions <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
               </span>
               <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>
          </motion.div>

          {/* Right Side: Infographic Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-[45%] w-full"
          >
            <GlassPanel className="p-1 rounded-2xl border-white/10 bg-[#0A192F]/40 overflow-hidden relative min-h-[360px] flex flex-col group">
               {/* Cinematic Highway Background Simulation */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#081120] to-[#0A192F] z-0" />
               <div className="absolute inset-0 opacity-40 mix-blend-screen z-0">
                  <div className="absolute top-[20%] left-[-10%] w-[120%] h-1 bg-[#2F80FF] blur-sm rotate-12 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-[30%] left-[-10%] w-[120%] h-2 bg-red-500 blur-md rotate-12 opacity-30 group-hover:opacity-60 transition-opacity duration-700 delay-100" />
                  <div className="absolute top-[50%] left-[-10%] w-[120%] h-0.5 bg-white blur-sm rotate-[15deg] opacity-40 group-hover:opacity-80 transition-opacity duration-700 delay-200" />
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent z-0" />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(8,17,32,0.8)] z-0" />

               <div className="relative z-10 p-8 flex flex-col h-full justify-between flex-1">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Activity className="h-3 w-3" /> Market Outlook
                     </div>
                     <h3 className="text-2xl font-black text-white mb-4 leading-tight">Disrupting the Status Quo<br/>in Auto Insurance</h3>
                     <p className="text-sm text-[#94A3B8] leading-relaxed">
                        With the rise of connected, electric and autonomous vehicles, insurance for mobility represents a significant transformation opportunity projected to surpass a trillion dollars by 2030.
                     </p>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                     <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center">
                           <Globe className="h-4 w-4 text-[#2F80FF]" />
                        </div>
                        <div>
                           <div className="text-[10px] font-bold text-[#94A3B8] uppercase">Global Reach</div>
                           <div className="text-xs font-mono text-white">Trillion Dollar Shift</div>
                        </div>
                     </div>
                  </div>
               </div>
            </GlassPanel>
          </motion.div>

        </div>

        {/* Enterprise Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           {metrics.map((metric, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
              >
                 <GlassPanel className="p-6 h-full border-white/5 hover:border-[#2F80FF]/30 transition-all group relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                       <metric.icon className="w-24 h-24 text-[#2F80FF] -translate-y-4 translate-x-4" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col">
                       <div className="text-4xl font-mono font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94A3B8] group-hover:from-[#2F80FF] group-hover:to-[#2F80FF] transition-all mb-2">
                          {metric.value}
                       </div>
                       <div className="h-px w-12 bg-white/10 my-3 group-hover:bg-[#2F80FF]/50 transition-colors" />
                       <div className="text-[11px] font-bold text-white uppercase tracking-wider mb-1">{metric.label}</div>
                       <div className="text-[10px] font-mono text-[#94A3B8]">{metric.sub}</div>
                    </div>
                 </GlassPanel>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
