'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, ShieldCheck, MapPin, Clock, Truck, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const VendorHero = () => {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-brand-bg z-0" />
      <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#2F80FF]/10 blur-[200px] rounded-full -mr-[400px] -mt-[400px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-[200px] -mb-[200px] pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <div className="h-4 w-4 rounded-full border border-brand-blue/30 flex items-center justify-center">
                 <div className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
              </div>
              <span>Services</span>
              <ArrowRight className="h-3 w-3 opacity-30" />
              <span className="text-foreground dark:text-white/60">Vendor Coordination</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-5xl lg:text-[4.5rem] font-black leading-[0.95] tracking-tight mb-6 text-foreground dark:text-white">
                Enterprise Vendor <br />
                <span className="text-[#2F80FF]">Coordination &</span> <br />
                Dispatch Intelligence
              </h1>
              <p className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl font-medium">
                Real-time roadside vendor orchestration, SLA-driven dispatch systems, and API-first coordination infrastructure engineered for insurers, fleets, OEMs, and enterprise mobility networks.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" suppressHydrationWarning className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl group font-mono text-[11px] uppercase tracking-widest">
                Explore Vendor APIs <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono">/&gt;</span>
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
                { label: 'SLA Compliance', val: '98.9%', icon: ShieldCheck, color: 'text-[#2F80FF]' },
                { label: 'Annual Dispatch Events', val: '2.7M+', icon: Activity, color: 'text-[#FF7A1A]' },
                { label: 'Vendor Coverage', val: 'Nationwide', icon: MapPin, color: 'text-purple-400' },
                { label: 'Enterprise Operations', val: '24/7', icon: Clock, color: 'text-emerald-400' }
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
          <div className="lg:col-span-7 relative h-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <GlassPanel className="w-full h-full p-0 border-brand-border bg-card/80 backdrop-blur-2xl shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between shrink-0">
                   <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                         <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                         <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-foreground dark:text-white uppercase tracking-widest ml-4">Live Vendor Overview <span className="text-emerald-400 ml-2 animate-pulse">• Live</span></span>
                   </div>
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 grid grid-cols-12 gap-px bg-white/5">
                   {/* Left Sidebar Stats */}
                   <div className="col-span-4 bg-brand-bg/80 p-6 space-y-6">
                      {[
                        { label: 'Active Vendors', val: '1,248', trend: '+8.2%', icon: Users },
                        { label: 'On Duty', val: '842', trend: '+6.1%', icon: Clock },
                        { label: 'Busy', val: '406', trend: '+4.7%', icon: Activity },
                        { label: 'Available', val: '436', trend: '+5.3%', icon: MapPin }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl border border-brand-border bg-white/[0.01]">
                           <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2 text-[#2F80FF]">
                                 <item.icon className="h-4 w-4" />
                                 <span className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">{item.label}</span>
                              </div>
                              <span className="text-[10px] font-bold text-emerald-400">{item.trend}</span>
                           </div>
                           <div className="text-3xl font-black text-foreground dark:text-white">{item.val}</div>
                        </div>
                      ))}
                   </div>

                   {/* Main Map / Telemetry Area */}
                   <div className="col-span-8 bg-card/90 relative overflow-hidden flex flex-col">
                      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-transparent" />
                      
                      <div className="relative flex-1 p-6 flex items-center justify-center">
                         {/* Map Simulation - Simplified for hero */}
                         <div className="w-full h-full relative border border-brand-border rounded-xl bg-brand-bg/50 overflow-hidden">
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                            
                            {[
                               { x: '30%', y: '40%', status: 'Available' },
                               { x: '60%', y: '30%', status: 'Busy' },
                               { x: '45%', y: '65%', status: 'En Route' },
                               { x: '75%', y: '50%', status: 'Available' },
                               { x: '25%', y: '70%', status: 'On Scene' }
                            ].map((point, i) => (
                               <div key={i} className="absolute" style={{ left: point.x, top: point.y }}>
                                  <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity, delay: i*0.3 }} className="absolute -inset-2 bg-[#2F80FF]/30 rounded-full blur-sm" />
                                  <div className={`h-3 w-3 rounded-full border-2 border-[#0A192F] relative z-10 ${point.status === 'Available' ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : point.status === 'Busy' ? 'bg-[#FF7A1A]' : 'bg-[#2F80FF]'} `} />
                               </div>
                            ))}
                         </div>
                      </div>

                      {/* Bottom KPI Bar */}
                      <div className="relative h-32 border-t border-brand-border bg-brand-bg/90 grid grid-cols-4 divide-x divide-white/5">
                        {[
                          { label: 'Avg. Response Time', val: '28 min', change: '↓ 9.2%' },
                          { label: 'Dispatch Success', val: '97.8%', change: '↑ 4.2%' },
                          { label: 'ETA Accuracy', val: '95.6%', change: '↑ 5.8%' },
                          { label: 'Customer Satisfaction', val: '4.8 / 5', change: '+ 0.4' }
                        ].map((kpi, i) => (
                          <div key={i} className="p-4 flex flex-col justify-center">
                            <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mb-1">{kpi.label}</span>
                            <div className="text-xl font-black text-foreground dark:text-white mb-1">{kpi.val}</div>
                            <span className="text-[10px] font-bold text-emerald-400">{kpi.change}</span>
                          </div>
                        ))}
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
