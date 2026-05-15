'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Search, Star, Truck, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useRecoveryStats } from '../hooks/use-recovery-stats';
import { Badge } from '@/components/ui/badge';

export const RecoveryHero = () => {
  const { stats } = useRecoveryStats();

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[90vh] lg:min-h-screen flex items-center transition-colors duration-500">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-brand-blue/10 blur-[180px] rounded-full -mr-96 -mt-96 pointer-events-none opacity-50 dark:opacity-100" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-orange/5 blur-[150px] rounded-full -ml-48 -mb-48 pointer-events-none opacity-50 dark:opacity-100" />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-8 flex flex-col">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-xs font-medium text-brand-slate mb-2"
            >
              <span className="hover:text-foreground transition-colors cursor-pointer">Services</span>
              <ArrowRight className="h-3 w-3 text-brand-blue" />
              <span className="text-brand-blue">Heavy-Duty Towing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-foreground leading-[1.05] mb-2 drop-shadow-sm dark:drop-shadow-lg"
            >
              Enterprise <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Heavy-Duty
              </span>
              <br />
              <span className="text-foreground italic font-medium opacity-90">Recovery Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg text-brand-slate leading-relaxed max-w-lg font-medium"
            >
              Nationwide heavy-duty towing operations, commercial recovery coordination, and API-first dispatch infrastructure engineered for fleets, insurers, and logistics operators.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_var(--brand-glow)] group">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground hover:bg-foreground/[0.03] h-16 px-10 rounded-2xl group shadow-sm dark:shadow-none">
                Explore Recovery APIs <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono">/&gt;</span>
              </Button>
            </motion.div>

            {/* Quick Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10"
            >
              {[
                { label: 'Dispatch Coverage', val: '99.1%', icon: Shield, color: 'text-brand-blue' },
                { label: 'Annual Events', val: '3.2M+', icon: Activity, color: 'text-brand-orange' },
                { label: 'Fleet Network', val: 'Nationwide', icon: Globe, color: 'text-purple-500' },
                { label: 'Operations', val: '24/7', icon: Clock, color: 'text-emerald-500' }
              ].map((m, i) => (
                <GlassPanel key={i} className="p-5 border-brand-border bg-card/40 group hover:bg-card/60 transition-all shadow-sm dark:shadow-none">
                  <m.icon className={`h-5 w-5 ${m.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-2xl font-black text-foreground">{m.val}</p>
                  <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest mt-1.5 leading-tight">{m.label}</p>
                </GlassPanel>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Command Dashboard */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel className="p-0 border-brand-border bg-card/90 shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500">
                {/* Header */}
                <div className="px-10 py-6 border-b border-brand-border bg-brand-bg/30 flex items-center justify-between">
                   <div className="flex items-center gap-5">
                      <div className="flex flex-col">
                         <span className="text-[11px] font-black text-foreground uppercase tracking-widest">Live Recovery Operations</span>
                         <div className="flex items-center gap-2 mt-1">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Global Command Active</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="px-4 py-1.5 bg-foreground/[0.03] border border-brand-border rounded-xl text-[10px] font-bold text-brand-slate uppercase tracking-widest">
                         All Regions
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[650px]">
                   {/* Stats Sidebar */}
                   <div className="xl:col-span-4 border-r border-brand-border p-8 space-y-8">
                      {[
                        { label: 'Active Recoveries', val: stats?.activeRecoveries || '1,248', trend: '+ 8.2%', color: 'bg-brand-blue/20 text-brand-blue' },
                        { label: 'En Route', val: stats?.enRoute || '642', trend: '+ 6.1%', color: 'bg-brand-orange/10 text-brand-orange' },
                        { label: 'On Scene', val: stats?.onScene || '426', trend: '+ 4.7%', color: 'bg-purple-500/10 text-purple-500' },
                        { label: 'Completed Today', val: stats?.completedToday || '2,381', trend: '+ 12.4%', color: 'bg-emerald-500/10 text-emerald-500' }
                      ].map((item, i) => (
                        <div key={i} className="space-y-3">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">{item.label}</span>
                              <span className="text-[9px] font-bold text-emerald-500">{item.trend}</span>
                           </div>
                           <div className="flex items-center gap-4">
                              <div className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center`}>
                                 <Truck className="h-5 w-5" />
                              </div>
                              <span className="text-3xl font-black text-foreground">{item.val.toLocaleString()}</span>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Main Visualization Area */}
                   <div className="xl:col-span-8 relative bg-brand-bg/50 overflow-hidden">
                      {/* Simulated Map */}
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(var(--brand-blue) 1px, transparent 1px), linear-gradient(90deg, var(--brand-blue) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.05 }} />
                      
                      {/* Radar Animation */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] border border-brand-blue/10 rounded-full">
                         <div className="absolute inset-0 border border-brand-blue/5 rounded-full scale-75" />
                         <div className="absolute inset-0 border border-brand-blue/5 rounded-full scale-50" />
                         <motion.div 
                           animate={{ rotate: 360 }} 
                           transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                           className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-brand-blue/40 to-transparent -translate-y-1/2 origin-left" 
                         />
                      </div>

                      {/* Animated Incident Points */}
                      {[
                        { x: 30, y: 40, id: 'INC-784', label: 'Heavy Towing' },
                        { x: 65, y: 25, id: 'INC-632', label: 'Semi Recovery' },
                        { x: 55, y: 70, id: 'INC-521', label: 'Winch-Out' }
                      ].map((p, i) => (
                        <div key={i} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                           <motion.div
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="h-4 w-4 bg-brand-blue rounded-full shadow-[0_0_20px_var(--brand-blue)]"
                           />
                           <div className="absolute left-6 -top-2 w-32">
                              <p className="text-[10px] font-black text-foreground leading-none">{p.id}</p>
                              <p className="text-[8px] font-bold text-brand-blue uppercase tracking-widest mt-1">{p.label}</p>
                           </div>
                        </div>
                      ))}

                      {/* Active Dispatch Detail Overlay */}
                      <div className="absolute top-10 right-10 z-20">
                         <GlassPanel className="p-5 bg-brand-navy/95 border-brand-blue/30 w-64 shadow-2xl">
                            <div className="flex justify-between items-center mb-5">
                               <Badge className="bg-brand-orange/10 border-brand-orange/30 text-brand-orange text-[9px] uppercase font-bold">En Route</Badge>
                               <span className="text-[10px] font-mono text-brand-slate">ETA 18 min</span>
                            </div>
                            <h3 className="text-xl font-black text-foreground dark:text-white mb-5 leading-tight">INC-7849 <br /><span className="text-sm font-medium text-brand-slate">Semi Truck Recovery</span></h3>
                            <div className="space-y-4 mb-6">
                               <div className="flex justify-between text-[10px]">
                                  <span className="text-brand-slate font-bold uppercase tracking-widest">Location</span>
                                  <span className="text-foreground dark:text-white font-black">I-70, Colorado</span>
                               </div>
                               <div className="flex justify-between text-[10px]">
                                  <span className="text-brand-slate font-bold uppercase tracking-widest">Operator</span>
                                  <span className="text-foreground dark:text-white font-black">Heavy Haul Inc.</span>
                               </div>
                            </div>
                            <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold h-10 text-[10px] uppercase tracking-widest">Track Operator</Button>
                         </GlassPanel>
                      </div>

                      {/* Bottom Intelligence Dashboard */}
                      <div className="absolute bottom-0 left-0 right-0 p-10 grid grid-cols-3 gap-10 bg-gradient-to-t from-brand-bg to-transparent">
                         {[
                           { label: 'Avg ETA', val: '38 min', trend: '↓ 9.2%', icon: Clock },
                           { label: 'SLA Compliance', val: '97.6%', trend: '↑ 5.3%', icon: Shield },
                           { label: 'Vendor Availability', val: '85%', trend: '↑ 6.3%', icon: Users }
                         ].map((m, i) => (
                           <div key={i} className="space-y-3">
                              <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">{m.label}</p>
                              <div className="flex items-end gap-3">
                                 <span className="text-2xl font-black text-foreground">{m.val}</span>
                                 <span className="text-[10px] font-bold text-emerald-500 pb-1">{m.trend}</span>
                              </div>
                              <div className="h-1.5 w-full bg-foreground/[0.05] rounded-full overflow-hidden">
                                 <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} className="h-full bg-brand-blue" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </GlassPanel>

              {/* Floating Requests Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-12 bottom-1/4 z-30 hidden xl:block"
              >
                 <GlassPanel className="p-8 border-brand-border bg-card/95 shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl w-64 transition-all duration-500">
                    <div className="flex justify-between items-center mb-8">
                       <p className="text-[11px] font-black text-foreground uppercase tracking-widest">Requests Hub</p>
                       <Badge variant="outline" className="text-[9px] border-brand-border text-brand-slate">Total 3.2M</Badge>
                    </div>
                    
                    <div className="flex items-center justify-center h-32 relative">
                       <div className="h-32 w-32 rounded-full border-4 border-brand-blue/20 flex items-center justify-center">
                          <div className="text-center">
                             <p className="text-xl font-black text-foreground">2.4M</p>
                             <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest">Total</p>
                          </div>
                       </div>
                       {/* Legend Overlay */}
                       <div className="absolute inset-0 flex flex-col justify-between py-2 text-[9px] font-bold">
                          <div className="flex justify-between">
                             <span className="text-brand-blue">Towing 45%</span>
                             <span className="text-brand-orange">Winch-Out 20%</span>
                          </div>
                          <div className="flex justify-between">
                             <span className="text-purple-500">Road Service 15%</span>
                             <span className="text-emerald-500">Fuel 10%</span>
                          </div>
                       </div>
                    </div>

                    <div className="mt-8 space-y-3">
                       {[
                         { l: 'Towing', v: 45, c: 'bg-brand-blue' },
                         { l: 'Winch-Out', v: 20, c: 'bg-brand-orange' },
                         { l: 'Road Service', v: 15, c: 'bg-purple-500' }
                       ].map((r, i) => (
                         <div key={i} className="flex items-center gap-3">
                            <div className={`h-1.5 w-1.5 rounded-full ${r.c}`} />
                            <span className="text-[10px] font-bold text-brand-slate flex-1">{r.l}</span>
                            <span className="text-[10px] font-black text-foreground">{r.v}%</span>
                         </div>
                       ))}
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
