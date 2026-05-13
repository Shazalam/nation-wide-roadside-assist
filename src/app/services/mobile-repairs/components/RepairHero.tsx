'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Truck, Wrench, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useRepairStats } from '../hooks/use-repair-stats';
import { Badge } from '@/components/ui/badge';

export const RepairHero = () => {
  const { stats } = useRepairStats();

  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#2F80FF]/10 blur-[180px] rounded-full -mr-96 -mt-96 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FF7A1A]/5 blur-[150px] rounded-full -ml-48 -mb-48 pointer-events-none" />

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
              <span className="text-white/60">Mobile Repairs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight"
            >
              Enterprise <br />
              <span className="bg-gradient-to-r from-[#2F80FF] via-[#FF7A1A] to-[#2F80FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                Mobile Repair
              </span>
              <br />
              <span className="text-white italic font-medium opacity-90">Operations</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-xl"
            >
              Real-time mobile repair coordination, nationwide mechanic dispatch infrastructure, and API-first roadside support systems engineered for fleets, insurers, and OEMs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Schedule Enterprise Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-16 px-10 rounded-2xl group">
                Explore Repair APIs <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono">/&gt;</span>
              </Button>
            </motion.div>

            {/* Metric Cards Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10"
            >
              {[
                { label: 'Dispatch Coverage', val: '98.9%', icon: Shield, color: 'text-brand-blue' },
                { label: 'Annual Events', val: '2.8M+', icon: Activity, color: 'text-brand-orange' },
                { label: 'Technician Network', val: 'Nationwide', icon: Users, color: 'text-purple-400' },
                { label: 'Mobile Ops', val: '24/7', icon: Clock, color: 'text-emerald-400' }
              ].map((m, i) => (
                <GlassPanel key={i} className="p-5 border-white/5 bg-white/[0.02] group hover:bg-white/[0.04] transition-all">
                  <m.icon className={`h-5 w-5 ${m.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <p className="text-2xl font-black text-white">{m.val}</p>
                  <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest mt-1.5 leading-tight">{m.label}</p>
                </GlassPanel>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Command Center Dashboard */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/90 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Header */}
                <div className="px-10 py-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                   <div className="flex items-center gap-5">
                      <div className="flex flex-col">
                         <span className="text-[11px] font-black text-white uppercase tracking-widest">Live Operations Overview</span>
                         <div className="flex items-center gap-2 mt-1">
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Live Monitoring Active</span>
                         </div>
                      </div>
                   </div>
                   <div className="flex items-center gap-6">
                      <div className="flex -space-x-3">
                         {[1,2,3,4].map(i => (
                           <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0A192F] bg-brand-bg flex items-center justify-center overflow-hidden">
                              <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Admin" className="h-full w-full object-cover grayscale" />
                           </div>
                         ))}
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[650px]">
                   {/* Sidebar Stats */}
                   <div className="xl:col-span-4 border-r border-white/5 p-8 space-y-8 bg-[#081120]/40">
                      {[
                        { label: 'Active Repairs', val: stats?.activeIncidents || '1,248', trend: '+ 8.2%', color: 'bg-brand-blue/20 text-brand-blue' },
                        { label: 'En Route', val: stats?.enRoute || '642', trend: '+ 6.1%', color: 'bg-brand-orange/10 text-brand-orange' },
                        { label: 'On Scene', val: stats?.onScene || '426', trend: '+ 4.7%', color: 'bg-purple-500/10 text-purple-400' },
                        { label: 'Completed Today', val: stats?.completedToday || '2,381', trend: '+ 12.4%', color: 'bg-emerald-500/10 text-emerald-400' }
                      ].map((item, i) => (
                        <div key={i} className="space-y-3">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{item.label}</span>
                              <span className="text-[9px] font-bold text-emerald-400">{item.trend}</span>
                           </div>
                           <div className="flex items-center gap-4">
                              <div className={`h-10 w-10 rounded-xl ${item.color} flex items-center justify-center`}>
                                 <Truck className="h-5 w-5" />
                              </div>
                              <span className="text-3xl font-black text-white">{item.val.toLocaleString()}</span>
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Main Visualization Area */}
                   <div className="xl:col-span-8 relative bg-[#081120]/50 overflow-hidden">
                      {/* Map Simulation Overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      
                      {/* Radar Animation */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] border border-brand-blue/10 rounded-full">
                         <div className="absolute inset-0 border border-brand-blue/5 rounded-full scale-75" />
                         <div className="absolute inset-0 border border-brand-blue/5 rounded-full scale-50" />
                         <motion.div 
                           animate={{ rotate: 360 }} 
                           transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                           className="absolute top-1/2 left-1/2 w-full h-1 bg-gradient-to-r from-brand-blue/40 to-transparent -translate-y-1/2 origin-left" 
                         />
                      </div>

                      {/* Map Simulation Background (Placeholder for real map) */}
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Globe className="h-[400px] w-[400px] text-brand-blue/5 animate-pulse" />
                      </div>

                      {/* Animated Mechanic Tracking Points */}
                      {[
                        { x: 30, y: 40, id: 'TECH-482', label: 'Battery Swap' },
                        { x: 65, y: 25, id: 'TECH-121', label: 'Fleet Diagnostic' },
                        { x: 55, y: 70, id: 'TECH-902', label: 'Tire Change' }
                      ].map((p, i) => (
                        <div key={i} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                           <motion.div
                             animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                             transition={{ duration: 3, repeat: Infinity, delay: i * 0.7 }}
                             className="h-4 w-4 bg-brand-blue rounded-full shadow-[0_0_20px_#2F80FF]"
                           />
                           <div className="absolute left-6 -top-2 w-32">
                              <p className="text-[10px] font-black text-white leading-none">{p.id}</p>
                              <p className="text-[8px] font-bold text-brand-blue uppercase tracking-widest mt-1">{p.label}</p>
                           </div>
                        </div>
                      ))}

                      {/* Bottom Quick Intelligence Cards */}
                      <div className="absolute bottom-0 left-0 right-0 p-10 grid grid-cols-4 gap-6 bg-gradient-to-t from-brand-bg to-transparent">
                         {[
                           { label: 'Avg. ETA', val: '32 min', trend: '↓ 9.1%', icon: Clock },
                           { label: 'SLA Compliance', val: '98.9%', trend: '↑ 5.7%', icon: Shield },
                           { label: 'Technician Availability', val: '85%', trend: '↑ 6.2%', icon: Users },
                           { label: 'Customer Satisfaction', val: '4.9 / 5', trend: '↑ 0.3', icon: Star }
                         ].map((m, i) => (
                           <div key={i} className="space-y-2">
                              <div className="flex items-center justify-between">
                                 <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{m.label}</p>
                                 <m.icon className="h-3 w-3 text-brand-blue opacity-50" />
                              </div>
                              <p className="text-xl font-black text-white">{m.val}</p>
                              <p className="text-[9px] font-bold text-emerald-400">{m.trend}</p>
                              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mt-2">
                                 <motion.div 
                                   initial={{ width: 0 }} 
                                   animate={{ width: '75%' }} 
                                   className="h-full bg-brand-blue" 
                                 />
                              </div>
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
