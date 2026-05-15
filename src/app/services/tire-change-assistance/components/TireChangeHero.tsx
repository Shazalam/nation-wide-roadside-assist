'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, Truck, ChevronRight, BarChart3, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { useTireStats } from '../hooks/use-tire-stats';

export const TireChangeHero = () => {
  const { stats } = useTireStats();

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[90vh] lg:min-h-screen flex items-center">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#2F80FF]/15 blur-[180px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-48 -mb-48 pointer-events-none" />
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-6 space-y-8 flex flex-col">
            {/* Breadcrumb & Badge */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-xs font-medium text-brand-slate uppercase tracking-widest"
              >
                <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Services</span>
                <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
                <span className="text-[#2F80FF]">Tire Change Assistance</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-4 py-1.5 rounded-full flex items-center gap-2 w-fit">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_8px_#2F80FF]" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">24/7 Roadside Tire Response Network</span>
                </Badge>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl lg:text-[4.5rem] font-black tracking-tighter text-foreground dark:text-white leading-[0.95]"
            >
              Enterprise <br />
              <span className="text-[#2F80FF]">Tire Change Assistance</span>
              <br />
              Infrastructure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-[620px] font-medium"
            >
              Nationwide roadside tire assistance operations engineered for insurers, fleets, rental providers, OEMs, and enterprise mobility ecosystems with real-time dispatch intelligence and rapid response coordination.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-14 px-8 rounded-xl shadow-[0_0_25px_rgba(47,128,255,0.4)] transition-all hover:-translate-y-1">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border bg-white/[0.02] text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl font-bold backdrop-blur-sm transition-all hover:border-[#2F80FF]/50 group">
                Explore Dispatch APIs <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono transition-opacity">/&gt;</span>
              </Button>
            </motion.div>

            {/* KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {[
                { label: 'Rapid Response Coverage', val: '98.7%', icon: Activity, color: 'text-[#2F80FF]' },
                { label: 'Annual Tire Assistance Events', val: '1.8M+', icon: Zap, color: 'text-[#FF7A1A]' },
                { label: 'Mobile Technician Coverage', val: 'Nationwide', icon: Globe, color: 'text-emerald-400' },
                { label: 'Dispatch Operations', val: '24/7', icon: Clock, color: 'text-purple-400' }
              ].map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, type: 'spring', stiffness: 100 }}
                  className="bg-card/40 backdrop-blur-xl border border-brand-border rounded-[20px] p-4 group hover:border-[#2F80FF]/40 transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <m.icon className={`h-5 w-5 ${m.color} mb-3 group-hover:scale-110 transition-transform relative z-10`} />
                  <div className="relative z-10">
                    <p className="text-xl font-black text-foreground dark:text-white tracking-tighter">{m.val}</p>
                    <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mt-1 leading-tight">{m.label}</p>
                  </div>
                  {/* Subtle Analytics Graph Mock */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/[0.03]">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ delay: 1 + i * 0.2, duration: 1.5 }}
                      className={`h-full ${m.color.replace('text-', 'bg-')}/30`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Cinematic Image Section */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-[4/3] lg:aspect-square"
            >
              {/* Outer Glows */}
              <div className="absolute -inset-4 bg-[#2F80FF]/10 blur-[80px] rounded-full animate-pulse pointer-events-none" />
              
              <GlassPanel className="p-0 border-brand-border bg-card/90 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden h-full">
                <div className="relative h-full">
                  <img 
                    src="/assets/images/services/tire-change-hero.png" 
                    alt="Enterprise Tire Assistance"
                    className="w-full h-full object-cover"
                  />
                  {/* Cinematic Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#081120]/80 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#081120]/40 via-transparent to-[#081120]/80" />
                  
                  {/* Dashboard HUD Overlay */}
                  <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Top Right Info */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-brand-navy/80 backdrop-blur-md border border-brand-border p-3 rounded-xl flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                          <Activity className="h-4 w-4 text-emerald-400" />
                        </div>
                        <div>
                          <p className="text-[8px] font-black text-brand-slate uppercase tracking-widest">Network Load</p>
                          <p className="text-[10px] font-black text-emerald-400">OPTIMAL / 99.2%</p>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Left Telemetry */}
                    <div className="absolute bottom-6 left-6">
                      <div className="flex flex-col gap-2">
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="h-1 w-6 bg-[#2F80FF]/30 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ x: ['-100%', '100%'] }} 
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                className="h-full w-1/2 bg-[#2F80FF]" 
                              />
                            </div>
                          ))}
                        </div>
                        <p className="text-[9px] font-mono text-brand-blue/60 uppercase tracking-widest">Tracking Active Units: 4,800+</p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Glows */}
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#FF7A1A]/10 blur-[40px] rounded-full pointer-events-none" />
                </div>
              </GlassPanel>

              {/* Floating Status Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-6 bottom-1/4 z-30"
              >
                <GlassPanel className="p-5 border-[#2F80FF]/30 bg-brand-navy/90 shadow-2xl w-60">
                  <div className="flex justify-between items-center mb-4">
                    <Badge className="bg-[#2F80FF]/10 border-[#2F80FF]/30 text-[#2F80FF] text-[8px] uppercase font-black tracking-widest">Dispatch Node 07</Badge>
                    <span className="text-[9px] font-mono text-brand-slate">Active</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-8 w-8 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center border border-[#2F80FF]/20">
                        <Truck className="h-4 w-4 text-[#2F80FF]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-black text-foreground dark:text-white leading-tight">Mobile Service Unit</p>
                        <p className="text-[8px] font-bold text-brand-slate mt-0.5">En route: 11m 42s</p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1 }} className="h-full bg-[#2F80FF]" />
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
