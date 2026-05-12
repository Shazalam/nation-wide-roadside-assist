'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

const metrics = [
  { label: 'Annual Dispatch Events', val: '2.4M+', icon: Zap, color: 'text-brand-blue' },
  { label: 'SLA Compliance', val: '97.8%', icon: Shield, color: 'text-emerald-400' },
  { label: 'Vendor Coverage', val: 'Nationwide', icon: Globe, color: 'text-brand-orange' },
  { label: 'Dispatch Operations', val: '24/7', icon: Clock, color: 'text-purple-400' }
];

export const HeroSection = () => {
  return (
    <section className="relative pt-32 lg:pt-48 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em]"
            >
              <span>Solutions</span>
              <ArrowRight className="h-3 w-3 opacity-30" />
              <span className="text-white/60">Enterprise Dispatch Solutions</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight"
            >
              Enterprise <br />
              <span className="bg-gradient-to-r from-brand-blue via-emerald-400 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Dispatch Intelligence
              </span>
              <br />
              <span className="text-white/40 italic font-medium">Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl"
            >
              AI-assisted dispatch orchestration, nationwide vendor coordination, and real-time roadside operations infrastructure engineered for insurers, fleets, OEMs, and enterprise mobility providers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-10 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)]">
                Schedule Enterprise Demo
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-14 px-10 rounded-xl">
                Explore Dispatch APIs
              </Button>
            </motion.div>

            {/* Metric Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {metrics.map((m, i) => (
                <GlassPanel key={i} className="p-4 border-white/5 bg-white/[0.02]">
                  <m.icon className={`h-4 w-4 ${m.color} mb-3`} />
                  <p className="text-xl font-black text-white">{m.val}</p>
                  <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mt-1">{m.label}</p>
                </GlassPanel>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Dashboard Visual */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Dashboard Outer Frame */}
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/80 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono text-brand-blue uppercase tracking-widest">Global Dispatch Node Active</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-8 bg-white/10 rounded-full" />
                    <div className="h-2 w-4 bg-white/10 rounded-full" />
                  </div>
                </div>

                {/* Map/Telemetry Area */}
                <div className="relative h-[450px] bg-brand-bg/40">
                  {/* Grid overlay */}
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                  
                  {/* Simulated Map Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                     <div className="flex justify-between items-start">
                        <GlassPanel className="p-3 bg-brand-navy/90 border-brand-blue/30 w-48">
                           <p className="text-[8px] font-bold text-brand-slate uppercase mb-2">Active Incident #8291</p>
                           <div className="flex justify-between text-[11px] font-bold text-white mb-1">
                              <span>Towing Required</span>
                              <span className="text-brand-orange">High Priority</span>
                           </div>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 2 }} className="h-full bg-brand-blue" />
                           </div>
                        </GlassPanel>

                        <div className="flex flex-col gap-2">
                           {[1, 2, 3].map(i => (
                             <motion.div 
                               key={i}
                               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                               transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                               className="h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_10px_#2F80FF]"
                             />
                           ))}
                        </div>
                     </div>

                     <div className="flex gap-4">
                        <GlassPanel className="p-4 bg-brand-navy/90 border-white/10 flex-1">
                           <div className="flex items-center gap-2 mb-3">
                              <Activity className="h-3 w-3 text-brand-blue" />
                              <span className="text-[9px] font-bold text-white uppercase tracking-widest">Network Load</span>
                           </div>
                           <div className="h-16 flex items-end gap-1">
                              {[30, 45, 60, 40, 80, 50, 70, 90, 60].map((h, i) => (
                                <motion.div 
                                  key={i}
                                  initial={{ height: 0 }}
                                  animate={{ height: `${h}%` }}
                                  transition={{ duration: 1, delay: i * 0.1 }}
                                  className="flex-1 bg-brand-blue/20 rounded-t-sm"
                                />
                              ))}
                           </div>
                        </GlassPanel>
                        <GlassPanel className="p-4 bg-brand-navy/90 border-white/10 w-40">
                           <p className="text-[8px] font-bold text-brand-slate uppercase mb-1">AI Dispatch ETA</p>
                           <p className="text-2xl font-black text-white">18.2<span className="text-xs font-medium text-brand-blue ml-1">min</span></p>
                           <p className="text-[7px] text-emerald-400 mt-1 font-bold">↓ 4.2% Optimization</p>
                        </GlassPanel>
                     </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-4 divide-x divide-white/5 border-t border-white/5 bg-white/[0.01]">
                   {[
                     { l: 'Incidents', v: '1,424' },
                     { l: 'Vendors', v: '8,921' },
                     { l: 'Mesh Health', v: '99.9%' },
                     { l: 'SLA Status', v: 'Normal' }
                   ].map((s, i) => (
                     <div key={i} className="px-4 py-3 text-center">
                        <p className="text-[10px] font-bold text-white tracking-tight">{s.v}</p>
                        <p className="text-[7px] font-bold text-brand-slate uppercase tracking-widest mt-0.5">{s.l}</p>
                     </div>
                   ))}
                </div>
              </GlassPanel>

              {/* Floating Dashboard Layers */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 z-20"
              >
                 <GlassPanel className="p-3 border-emerald-500/30 bg-brand-navy/95 shadow-2xl">
                    <div className="flex items-center gap-2 mb-1">
                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                       <span className="text-[8px] font-bold text-white uppercase tracking-widest">SLA Verified</span>
                    </div>
                    <p className="text-[10px] text-brand-slate">Response: 14.2m</p>
                 </GlassPanel>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 z-20"
              >
                 <GlassPanel className="p-3 border-brand-orange/30 bg-brand-navy/95 shadow-2xl">
                    <div className="flex items-center gap-2 mb-1">
                       <Zap className="h-3 w-3 text-brand-orange" />
                       <span className="text-[8px] font-bold text-white uppercase tracking-widest">AI Matching</span>
                    </div>
                    <p className="text-[10px] text-brand-slate">Vendor assigned: NY-442</p>
                 </GlassPanel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
