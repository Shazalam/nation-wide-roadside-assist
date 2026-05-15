'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Map, ShieldCheck, Activity, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CompanyHero = () => {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-bg z-0" />
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#2F80FF]/10 blur-[200px] rounded-full -mr-[400px] -mt-[400px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-[200px] -mb-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <div className="h-4 w-4 rounded-full border border-brand-blue/30 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
              </div>
              <span>Nationwide Recovery Infrastructure</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight mb-6 text-foreground dark:text-white">
                Enterprise Recovery <br />
                Intelligence For <br />
                <span className="text-[#2F80FF]">Modern Mobility</span>
              </h1>
              <p className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl font-medium">
                Mission-critical recovery operations platform supporting fleets, logistics providers, insurers, OEM mobility networks, and nationwide roadside ecosystems.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Explore Operations <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" suppressHydrationWarning className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl group font-mono text-[11px] uppercase tracking-widest">
                Contact Enterprise Team
              </Button>
            </motion.div>

            {/* Metric Cards Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            >
              {[
                { label: 'Nationwide Coverage', val: '99.1%', icon: Globe, color: 'text-[#2F80FF]' },
                { label: 'Annual Recovery Events', val: '3.2M+', icon: Activity, color: 'text-[#FF7A1A]' },
                { label: 'Operational Coordination', val: '24/7', icon: ShieldCheck, color: 'text-purple-400' },
                { label: 'Enterprise Dispatch', val: 'Live', icon: Map, color: 'text-emerald-400' }
              ].map((m, i) => (
                <div key={i} className="space-y-2 border-l border-brand-border pl-4">
                  <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${m.color}`}>
                    <m.icon className="h-4 w-4" />
                  </div>
                  <p className="text-xl font-black text-foreground dark:text-white tracking-tight">{m.val}</p>
                  <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-tight pr-4">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Massive Enterprise Dashboard */}
          <div className="lg:col-span-6 relative h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <GlassPanel className="w-full h-full p-0 border-brand-border bg-card/80 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
                 
                 {/* Header */}
                 <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between shrink-0 relative z-10">
                    <div className="flex items-center gap-3">
                       <div className="flex gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                       </div>
                       <span className="text-[10px] font-mono font-bold text-foreground dark:text-white uppercase tracking-widest ml-4">Command Center <span className="text-[#2F80FF] ml-2 font-black">NTI-OS</span></span>
                    </div>
                 </div>

                 {/* Simulated Dispatch UI */}
                 <div className="flex-1 p-6 flex flex-col justify-end relative z-10">
                    <div className="bg-brand-bg/90 border border-brand-border rounded-2xl p-6 backdrop-blur-md shadow-2xl space-y-6 transform translate-y-8 hover:translate-y-4 transition-transform duration-500">
                       <div className="flex justify-between items-center mb-4 border-b border-brand-border pb-4">
                          <div>
                             <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Active Heavy-Duty Recovery</p>
                             <p className="text-xs text-brand-slate font-bold">Class 8 Commercial Tow</p>
                          </div>
                          <span className="px-3 py-1 bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 rounded text-[10px] font-bold uppercase tracking-widest">In Progress</span>
                       </div>
                       
                       <div className="space-y-4">
                          <div className="flex items-center justify-between">
                             <div className="flex items-center gap-3">
                                <Activity className="h-4 w-4 text-[#2F80FF]" />
                                <span className="text-sm font-bold text-foreground dark:text-white">Live Telemetry</span>
                             </div>
                             <span className="text-xs font-mono text-brand-slate">Connected</span>
                          </div>
                          
                          {/* Progress Bar */}
                          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: "0%" }}
                               animate={{ width: "65%" }}
                               transition={{ duration: 2, delay: 0.5 }}
                               className="h-full bg-gradient-to-r from-[#2F80FF] to-purple-500 rounded-full" 
                             />
                          </div>

                          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-brand-border">
                             <div>
                                <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">ETA</p>
                                <p className="text-foreground dark:text-white font-black text-lg">14 Min</p>
                             </div>
                             <div>
                                <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">Vendor</p>
                                <p className="text-foreground dark:text-white font-black text-lg">Unit 84</p>
                             </div>
                             <div>
                                <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">SLA Status</p>
                                <p className="text-emerald-400 font-black text-lg">On Track</p>
                             </div>
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
