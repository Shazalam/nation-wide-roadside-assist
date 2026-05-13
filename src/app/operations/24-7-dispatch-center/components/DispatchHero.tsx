'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, Cpu, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const DispatchHero = () => {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden min-h-[95vh] flex items-center bg-[#081120]">
      {/* Background Ambient Layers */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#2F80FF]/10 blur-[200px] rounded-full -mr-[300px] -mt-[300px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-[200px] -mb-[200px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80')] opacity-5 mix-blend-luminosity bg-cover bg-center" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <div className="h-4 w-4 rounded-full border border-[#2F80FF]/30 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              </div>
              <span>Operations &gt; 24/7 Dispatch Center</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight mb-6 text-white">
                24/7 Enterprise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F80FF] to-[#0A192F]">Dispatch Command</span> <br />
                Center
              </h1>
              <p className="text-lg text-[#94A3B8] leading-relaxed max-w-xl font-medium">
                Real-time nationwide dispatch coordination infrastructure engineered for fleets, insurers, logistics operators, and OEM mobility networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Schedule Operations Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" suppressHydrationWarning className="border-white/10 text-white hover:bg-white/5 h-14 px-8 rounded-xl group font-mono text-[11px] uppercase tracking-widest">
                Explore Dispatch APIs
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { label: 'Dispatch Uptime', val: '99.98%', icon: Activity, color: 'text-emerald-400' },
                { label: 'Recovery Events', val: '3.2M+', icon: Zap, color: 'text-[#2F80FF]' },
                { label: 'Nationwide Ops', val: '24/7', icon: MapPin, color: 'text-[#FF7A1A]' },
                { label: 'SLA Monitoring', val: 'Active', icon: Cpu, color: 'text-purple-400' }
              ].map((m, i) => (
                <div key={i} className="space-y-2 border-l border-white/10 pl-4">
                  <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${m.color}`}>
                    <m.icon className="h-4 w-4" />
                  </div>
                  <p className="text-xl font-black text-white tracking-tight">{m.val}</p>
                  <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest leading-tight pr-4">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content: Massive Operational Dashboard */}
          <div className="lg:col-span-7 relative h-[700px] flex items-center justify-center">
             <motion.div
               initial={{ opacity: 0, scale: 0.95, x: 20 }}
               animate={{ opacity: 1, scale: 1, x: 0 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="w-full h-full relative"
             >
                <GlassPanel className="absolute inset-0 p-0 border-[#2F80FF]/20 bg-[#0A192F]/80 shadow-[0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-2xl overflow-hidden flex flex-col rounded-3xl">
                   {/* Header */}
                   <div className="h-14 border-b border-white/10 bg-white/[0.02] flex items-center justify-between px-6 shrink-0 relative z-10">
                      <div className="flex gap-4 items-center">
                         <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-red-500/80" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                            <div className="w-3 h-3 rounded-full bg-green-500/80" />
                         </div>
                         <div className="h-4 w-px bg-white/20 mx-2" />
                         <span className="text-[10px] font-mono font-bold text-[#94A3B8] uppercase tracking-widest flex items-center gap-2">
                           NTI-OS <span className="h-1.5 w-1.5 bg-[#2F80FF] rounded-full animate-pulse" /> Live Command
                         </span>
                      </div>
                      <div className="flex items-center gap-3">
                         <span className="text-[10px] font-mono text-emerald-400">SLA NOMINAL</span>
                      </div>
                   </div>

                   {/* Dashboard Body */}
                   <div className="flex-1 flex relative overflow-hidden">
                      {/* Abstract Radar Background */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#2F80FF]/10 rounded-full" />

                      {/* Side Panel */}
                      <div className="w-64 border-r border-white/10 bg-[#081120]/90 p-4 flex flex-col gap-4 relative z-10">
                         <div className="space-y-3">
                            <h3 className="text-[10px] font-black text-white uppercase tracking-widest border-b border-white/10 pb-2">Live Dispatch Queues</h3>
                            {[
                              { region: 'NA-EAST', count: 142, status: 'Active' },
                              { region: 'NA-WEST', count: 89, status: 'Optimizing' },
                              { region: 'NA-CENTRAL', count: 204, status: 'High Load' }
                            ].map((q, i) => (
                              <div key={i} className="p-3 bg-white/5 border border-white/5 rounded-lg flex items-center justify-between">
                                 <div>
                                    <p className="text-[10px] font-mono text-[#94A3B8] mb-1">{q.region}</p>
                                    <p className="text-sm font-black text-white">{q.count} <span className="text-[9px] font-normal text-[#94A3B8] ml-1 uppercase">units</span></p>
                                 </div>
                                 <span className={`text-[9px] font-bold uppercase ${q.status === 'High Load' ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`}>{q.status}</span>
                              </div>
                            ))}
                         </div>
                      </div>

                      {/* Main Map / Telemetry Area */}
                      <div className="flex-1 p-6 relative">
                         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] opacity-20 mix-blend-screen bg-cover bg-center grayscale" />
                         
                         {/* Nodes */}
                         <div className="absolute top-[40%] left-[30%]">
                            <div className="relative">
                               <div className="h-4 w-4 bg-[#FF7A1A] rounded-full z-10 relative" />
                               <div className="absolute inset-0 bg-[#FF7A1A] rounded-full animate-ping opacity-75" />
                               <div className="absolute top-6 left-0 bg-[#081120]/80 backdrop-blur-sm border border-white/10 p-2 rounded w-32">
                                  <p className="text-[9px] font-bold text-[#FF7A1A] uppercase tracking-widest mb-1">Heavy-Duty</p>
                                  <p className="text-[10px] font-mono text-white">ETA: 14m</p>
                               </div>
                            </div>
                         </div>
                         
                         <div className="absolute top-[60%] left-[60%]">
                            <div className="relative">
                               <div className="h-3 w-3 bg-emerald-400 rounded-full z-10 relative" />
                               <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-75" />
                            </div>
                         </div>

                         {/* Floating Action Bar */}
                         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#081120]/90 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex gap-6">
                            <div className="flex items-center gap-2">
                               <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Routing Systems Active</span>
                            </div>
                            <div className="w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-2">
                               <span className="text-[10px] font-mono text-[#2F80FF]">48.1M Nodes Checked</span>
                            </div>
                         </div>
                      </div>
                   </div>
                </GlassPanel>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
