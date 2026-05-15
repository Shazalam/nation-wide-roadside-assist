'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, MapPin, Database, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CareersHero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden min-h-[90vh] lg:min-h-screen flex items-center bg-brand-bg">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#2F80FF]/10 blur-[200px] rounded-full -mr-[400px] -mt-[400px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-[200px] -mb-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <div className="h-4 w-4 rounded-full border border-brand-blue/30 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              </div>
              <span>Join The Recovery Intelligence Network</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight mb-6 text-foreground dark:text-white">
                Build Mission-Critical <br className="hidden md:block" />
                <span className="text-[#2F80FF]">Infrastructure</span> For <br className="hidden md:block" />
                Enterprise Operations
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl font-medium">
                Power nationwide recovery coordination, enterprise dispatch systems, fleet intelligence platforms, and real-time operational infrastructure.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group w-full sm:w-auto">
                Explore Open Roles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" suppressHydrationWarning className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl group font-mono text-[11px] uppercase tracking-widest w-full sm:w-auto">
                Meet The Team
              </Button>
            </motion.div>

            {/* Metric Cards Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-4 pt-8"
            >
              {[
                { label: 'Nationwide Operations', val: '24/7', icon: Activity, color: 'text-[#2F80FF]' },
                { label: 'Recovery Events', val: '3.2M+', icon: Database, color: 'text-[#FF7A1A]' },
                { label: 'Enterprise Dispatch', val: 'Live', icon: Cpu, color: 'text-purple-400' },
                { label: 'Operational Coverage', val: '99.1%', icon: MapPin, color: 'text-emerald-400' }
              ].map((m, i) => (
                <div key={i} className="space-y-2 border-l border-brand-border pl-4">
                  <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${m.color}`}>
                    <m.icon className="h-4 w-4" />
                  </div>
                  <p className="text-lg md:text-xl font-black text-foreground dark:text-white tracking-tight">{m.val}</p>
                  <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-tight pr-2">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Massive Enterprise Dashboard */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] lg:h-[700px] w-full lg:w-auto mt-12 lg:mt-0">
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
                       <span className="text-[10px] font-mono font-bold text-foreground dark:text-white uppercase tracking-widest ml-2 sm:ml-4 whitespace-nowrap">Dispatch Operations <span className="text-[#2F80FF] ml-2 font-black">LIVE</span></span>
                    </div>
                 </div>

                 {/* Dashboard Structure */}
                 <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-px bg-white/5 relative z-10 overflow-hidden">
                    
                    {/* Left Panel (Hidden on small mobile, shown on md+) */}
                    <div className="hidden md:flex md:col-span-4 bg-brand-bg/80 p-6 flex-col gap-4 overflow-y-auto">
                       <h3 className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest mb-2 border-b border-brand-border pb-2">Active Engineering Deployments</h3>
                       {[1, 2, 3].map(i => (
                         <div key={i} className="p-3 bg-white/5 rounded-lg border border-brand-border relative overflow-hidden group">
                            <div className="absolute inset-0 bg-[#2F80FF]/0 group-hover:bg-[#2F80FF]/10 transition-colors" />
                            <div className="flex items-center justify-between mb-2">
                               <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Platform Sync</span>
                               <span className="text-[9px] font-bold text-emerald-400">Stable</span>
                            </div>
                            <p className="text-[10px] text-foreground dark:text-white font-mono">v{i}.8.42_rc</p>
                            <p className="text-[9px] text-brand-slate mt-1">Routing Matrix Optimization</p>
                         </div>
                       ))}
                       <div className="mt-auto p-4 border border-[#FF7A1A]/30 rounded-lg bg-[#FF7A1A]/5">
                          <p className="text-[10px] font-black text-[#FF7A1A] uppercase tracking-widest mb-1">Infrastructure Load</p>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                             <motion.div animate={{ width: ['40%', '80%', '50%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-[#FF7A1A] rounded-full" />
                          </div>
                       </div>
                    </div>

                    {/* Main Area */}
                    <div className="col-span-full md:col-span-8 bg-card/60 p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                       
                       <div className="relative w-full max-w-sm">
                          <GlassPanel className="p-4 sm:p-6 border-[#2F80FF]/30 bg-brand-bg/90 shadow-[0_0_50px_rgba(47,128,255,0.15)] flex flex-col gap-6">
                             <div className="flex justify-between items-center border-b border-brand-border pb-4">
                                <div>
                                   <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Incident Orchestration</p>
                                   <p className="text-[9px] text-brand-slate font-bold uppercase mt-1">Multi-Node Coordination</p>
                                </div>
                                <Activity className="h-4 w-4 text-[#2F80FF] animate-pulse" />
                             </div>
                             
                             <div className="space-y-4">
                                {[
                                  { label: 'Dispatch Telemetry', status: 'Connected', color: 'text-emerald-400' },
                                  { label: 'Recovery Algorithms', status: 'Active', color: 'text-emerald-400' },
                                  { label: 'Fleet Routing Engine', status: 'Processing', color: 'text-purple-400' }
                                ].map((item, i) => (
                                  <div key={i} className="flex items-center justify-between">
                                     <span className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-wider">{item.label}</span>
                                     <span className={`text-[9px] font-mono uppercase ${item.color}`}>{item.status}</span>
                                  </div>
                                ))}
                             </div>

                             <div className="h-10 sm:h-12 w-full border border-brand-border rounded bg-card relative overflow-hidden flex items-center justify-center">
                                <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-[#2F80FF]/20 to-transparent" />
                                <span className="text-[9px] font-mono text-[#2F80FF]">SYSTEMS_NOMINAL</span>
                             </div>
                          </GlassPanel>
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
