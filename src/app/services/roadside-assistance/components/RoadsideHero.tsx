'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Search, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';
import { useRoadsideStats } from '../hooks/use-roadside-stats';
import { Badge } from '@/components/ui/badge';

export const RoadsideHero = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { stats } = useRoadsideStats();

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7A1A]/5 blur-[120px] rounded-full -ml-48 -mb-48 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <span>Services</span>
              <ArrowRight className="h-3 w-3 opacity-30" />
              <span className="text-foreground dark:text-white/60">Roadside Assistance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tight"
            >
              Enterprise <br />
              <span className="bg-gradient-to-r from-[#2F80FF] via-[#FF7A1A] to-[#2F80FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Roadside Assistance
              </span>
              <br />
              <span className="text-foreground dark:text-white/40 italic font-medium">Infrastructure</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-xl"
            >
              Nationwide roadside dispatch coordination, enterprise-grade support operations, and API-first assistance infrastructure engineered for insurers, fleets, OEMs, and mobility providers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => dispatch(setPartnershipOpen(true))}
                className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-10 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)]"
              >
                Schedule Enterprise Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push('/developer')}
                className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-10 rounded-xl"
              >
                Explore Assistance APIs
              </Button>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-4 pt-8"
            >
              {[
                { label: 'SLA Compliance', val: `${stats?.slaCompliance || 97.8}%`, icon: Shield, color: 'text-brand-blue' },
                { label: 'Annual Assistance', val: '2.4M+', icon: Activity, color: 'text-emerald-400' },
                { label: 'Vendor Coverage', val: 'Nationwide', icon: Globe, color: 'text-brand-orange' },
                { label: 'Dispatch Ops', val: '24/7', icon: Clock, color: 'text-purple-400' }
              ].map((m, i) => (
                <GlassPanel key={i} className="p-4 border-brand-border bg-white/[0.02]">
                  <m.icon className={`h-4 w-4 ${m.color} mb-3`} />
                  <p className="text-xl font-black text-foreground dark:text-white">{m.val}</p>
                  <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mt-1">{m.label}</p>
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
              className="relative"
            >
              <GlassPanel className="p-0 border-brand-border bg-card/80 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Dashboard Header */}
                <div className="px-8 py-5 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Live Operations Overview</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest">Global Stream Live</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <div className="px-3 py-1 bg-white/5 border border-brand-border rounded-lg text-[9px] font-bold text-brand-slate">
                        All Regions
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[550px]">
                   {/* Left Panel: Metrics Sidebar */}
                   <div className="xl:col-span-4 border-r border-brand-border p-6 space-y-6">
                      {[
                        { label: 'Active Requests', val: stats?.activeRequests || '1,248', trend: '+ 8.3%', color: 'bg-brand-blue/20 text-brand-blue' },
                        { label: 'En Route', val: stats?.enRoute || '642', trend: '+ 6.1%', color: 'bg-[#FF7A1A]/10 text-[#FF7A1A]' },
                        { label: 'On Scene', val: stats?.onScene || '426', trend: '+ 4.7%', color: 'bg-purple-500/10 text-purple-400' },
                        { label: 'Completed Today', val: stats?.completedToday || '2,381', trend: '+ 12.4%', color: 'bg-emerald-500/10 text-emerald-400' }
                      ].map((item, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between items-center">
                              <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{item.label}</span>
                              <span className="text-[8px] font-bold text-emerald-400">{item.trend}</span>
                           </div>
                           <div className="flex items-center gap-3">
                              <div className={`h-8 w-8 rounded-lg ${item.color} flex items-center justify-center`}>
                                 <Activity className="h-4 w-4" />
                              </div>
                              <span className="text-2xl font-black text-foreground dark:text-white">{item.val.toLocaleString()}</span>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Right Panel: Visualization */}
                   <div className="xl:col-span-8 relative">
                      {/* Map Simulation */}
                      <div className="absolute inset-0 bg-brand-bg/50 overflow-hidden">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                         
                         {/* Animated Tracking Points */}
                         {[
                           { x: 20, y: 30 }, { x: 70, y: 20 }, { x: 55, y: 65 }, { x: 85, y: 50 }, { x: 20, y: 75 }
                         ].map((pos, i) => (
                           <motion.div
                             key={i}
                             initial={{ opacity: 0 }}
                             animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                             transition={{ duration: 2.5 + i, repeat: Infinity, delay: i * 0.5 }}
                             className="absolute h-3 w-3 rounded-full bg-brand-blue shadow-[0_0_15px_#2F80FF] z-10"
                             style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
                           />
                         ))}

                         {/* Incident Popover Simulation */}
                         <div className="absolute top-[40%] left-[50%] z-20">
                            <GlassPanel className="p-4 bg-brand-navy/90 border-brand-blue/30 w-52 shadow-2xl">
                               <div className="flex justify-between items-start mb-3">
                                  <Badge variant="outline" className="text-[8px] border-brand-blue/50 text-brand-blue">En Route to Incident</Badge>
                                  <span className="text-[8px] font-mono text-brand-slate">ETA 18 min</span>
                               </div>
                               <p className="text-[11px] font-bold text-foreground dark:text-white mb-1">I-95, Orlando, FL</p>
                               <p className="text-[9px] text-brand-slate mb-3">Flat Tire Assistance</p>
                               <div className="h-10 w-full bg-white/5 rounded-lg flex items-center justify-center">
                                  <div className="flex items-center gap-2">
                                     <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                                     <span className="text-[9px] font-mono text-foreground dark:text-white">Truck ID: FL-442</span>
                                  </div>
                               </div>
                            </GlassPanel>
                         </div>
                      </div>

                      {/* Bottom Performance Bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 gap-8 bg-gradient-to-t from-brand-bg to-transparent">
                         {[
                           { label: 'Response Time (Avg)', val: '32 min', sub: '9.2% vs last 30 days', icon: Activity },
                           { label: 'SLA Compliance', val: '97.8%', sub: '5.7% vs last 30 days', icon: Shield },
                           { label: 'Customer Satisfaction', val: '4.9 / 5', sub: '0.3 vs last 30 days', icon: Star }
                         ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{item.label}</p>
                              <p className="text-xl font-black text-foreground dark:text-white">{item.val}</p>
                              <div className="flex items-center gap-2">
                                 <Activity className="h-3 w-3 text-emerald-400" />
                                 <span className="text-[8px] font-bold text-emerald-400">{item.sub}</span>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </GlassPanel>

              {/* Floating KPI Layer */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-12 top-1/4 z-30"
              >
                 <GlassPanel className="p-6 border-brand-border bg-card/90 shadow-2xl w-64">
                    <div className="flex justify-between items-center mb-6">
                       <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Requests by Type</p>
                       <Badge variant="outline" className="text-[9px] border-brand-border text-brand-slate">Total 2.4M</Badge>
                    </div>
                    <div className="space-y-4">
                       {[
                         { l: 'Towing', v: 40, c: 'bg-brand-blue' },
                         { l: 'Tire Service', v: 25, c: 'bg-[#FF7A1A]' },
                         { l: 'Fuel Delivery', v: 15, c: 'bg-purple-500' },
                         { l: 'Battery', v: 10, c: 'bg-emerald-500' },
                         { l: 'Other', v: 10, c: 'bg-slate-500' }
                       ].map((r, i) => (
                         <div key={i} className="space-y-1.5">
                            <div className="flex justify-between text-[9px] font-bold">
                               <span className="text-brand-slate">{r.l}</span>
                               <span className="text-foreground dark:text-white">{r.v}%</span>
                            </div>
                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div initial={{ width: 0 }} animate={{ width: `${r.v}%` }} transition={{ duration: 2, delay: 0.5 }} className={`h-full ${r.c}`} />
                            </div>
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
