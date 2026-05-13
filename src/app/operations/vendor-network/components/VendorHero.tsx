'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, BarChart3, Activity, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const VendorHero = () => {
  return (
    <section className="relative pt-8 pb-16 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7A1A]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 text-[11px] font-bold text-[#2F80FF] uppercase tracking-widest mb-6">
                <span>Operations</span>
                <span className="text-white/30">{'>'}</span>
                <span>Vendor Network</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
                Enterprise Vendor Network & <br className="hidden lg:block"/>Dispatch Operations Platform
              </h1>
              
              <p className="text-[15px] text-[#94A3B8] leading-7 max-w-xl">
                Nationwide roadside vendor coordination, SLA-driven dispatch intelligence, and real-time operational visibility engineered for insurers, fleets, OEMs, and enterprise mobility ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-11 px-6 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all">
                Explore Vendor Network <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 h-11 px-6 rounded-xl font-bold bg-[#0A192F]/50 backdrop-blur-md">
                View Dispatch APIs <Code className="ml-2 h-4 w-4 text-[#94A3B8]" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { value: "98.7%", label: "SLA Compliance", trend: "+1.2%" },
                { value: "50-State", label: "Vendor Coverage", trend: "National" },
                { value: "2.8M+", label: "Dispatch Events", trend: "Annual" },
                { value: "24/7", label: "Enterprise Ops", icon: Activity }
              ].map((metric, i) => (
                <div key={i} className="border-l border-white/10 pl-4 relative group">
                  <div className="text-2xl font-black text-white mb-1 group-hover:text-[#2F80FF] transition-colors">{metric.value}</div>
                  <div className="text-[11px] text-[#94A3B8] font-bold uppercase tracking-wider">{metric.label}</div>
                  {metric.trend && (
                     <div className="text-[10px] text-emerald-400 mt-1 font-mono">{metric.trend}</div>
                  )}
                  {metric.icon && (
                     <metric.icon className="h-4 w-4 text-[#2F80FF] mt-1" />
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Operational Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:w-1/2 w-full"
          >
            <GlassPanel className="p-1 rounded-2xl border-white/10 bg-[#0A192F]/40 overflow-hidden relative">
               {/* Header */}
               <div className="flex items-center justify-between p-4 border-b border-white/5 bg-[#081120]/60">
                  <div className="flex items-center gap-2">
                     <Activity className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[11px] font-bold text-white uppercase tracking-widest">Live Network Overview</span>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-emerald-400">Live</span>
                     </div>
                  </div>
               </div>

               {/* Mock Map Area */}
               <div className="h-[300px] relative bg-[#081120] overflow-hidden flex items-center justify-center border-b border-white/5">
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  
                  {/* Simulated US Map Shape (Abstract) */}
                  <div className="relative w-[80%] h-[80%] border border-[#2F80FF]/20 rounded-3xl bg-[#0A192F]/50 shadow-[inset_0_0_50px_rgba(47,128,255,0.1)] flex items-center justify-center">
                     <span className="text-[#2F80FF]/30 font-mono text-xs tracking-widest">MAPBOX TELEMETRY FEED</span>
                     
                     {/* Pulse nodes */}
                     {[...Array(15)].map((_, i) => (
                        <motion.div
                           key={i}
                           className="absolute h-2 w-2 rounded-full bg-[#2F80FF]"
                           style={{
                              top: `${Math.random() * 80 + 10}%`,
                              left: `${Math.random() * 80 + 10}%`,
                           }}
                           animate={{
                              scale: [1, 2, 1],
                              opacity: [0.5, 1, 0.5],
                              boxShadow: ['0 0 0 rgba(47,128,255,0)', '0 0 20px rgba(47,128,255,0.8)', '0 0 0 rgba(47,128,255,0)']
                           }}
                           transition={{
                              duration: 2 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                           }}
                        />
                     ))}
                     {[...Array(5)].map((_, i) => (
                        <motion.div
                           key={`orange-${i}`}
                           className="absolute h-2 w-2 rounded-full bg-[#FF7A1A]"
                           style={{
                              top: `${Math.random() * 80 + 10}%`,
                              left: `${Math.random() * 80 + 10}%`,
                           }}
                           animate={{
                              scale: [1, 1.5, 1],
                              opacity: [0.8, 1, 0.8],
                           }}
                           transition={{
                              duration: 1.5 + Math.random(),
                              repeat: Infinity,
                              ease: "easeInOut"
                           }}
                        />
                     ))}
                  </div>
               </div>

               {/* Bottom Stats Grid */}
               <div className="grid grid-cols-3 gap-px bg-white/5">
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Active Vendors</div>
                     <div className="text-xl font-mono text-white">18,742 <span className="text-[10px] text-emerald-400">↑ 8.2%</span></div>
                  </div>
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Active Dispatches</div>
                     <div className="text-xl font-mono text-white">1,243 <span className="text-[10px] text-emerald-400">↑ 12.5%</span></div>
                  </div>
                  <div className="p-4 bg-[#0A192F]/80">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Avg. ETA</div>
                     <div className="text-xl font-mono text-white">28 <span className="text-[10px] text-[#94A3B8]">min</span></div>
                  </div>
               </div>
            </GlassPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
