'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, Activity, MapPin, Truck, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

export const RecoveryHero = () => {
  return (
    <section className="relative pt-32 lg:pt-44 pb-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-[0.3em]"
            >
              <span className="opacity-50">Services</span>
              <ChevronRight className="h-3 w-3 opacity-30" />
              <span>Recovery & Winch-Outs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tight"
            >
              Enterprise <br />
              <span className="text-[#2F80FF] italic">Recovery</span> <br />
              Intelligence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-[#94A3B8] leading-relaxed max-w-xl"
            >
              Real-time recovery dispatch coordination, nationwide heavy-duty response infrastructure, and API-first incident management systems engineered for the enterprise.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] group">
                Schedule Recovery Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-16 px-10 rounded-2xl group">
                Explore Recovery APIs <span className="ml-2 opacity-30 group-hover:opacity-100 font-mono">/&gt;</span>
              </Button>
            </motion.div>

            {/* Metric Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pt-10"
            >
              {[
                { label: 'Recovery Coverage', val: '99.1%', icon: Shield },
                { label: 'Annual Events', val: '3.2M+', icon: Activity },
                { label: 'Heavy-Duty Network', val: 'Nationwide', icon: Globe },
                { label: 'Operations', val: '24/7', icon: Clock }
              ].map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-2">
                  <m.icon className="h-4 w-4 text-[#2F80FF] opacity-50" />
                  <p className="text-2xl font-black text-white">{m.val}</p>
                  <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{m.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Command Dashboard */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/90 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden">
                {/* Dashboard Header */}
                <div className="px-10 py-8 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-black text-white uppercase tracking-widest">Live Recovery Operations</span>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">System Live</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">Active Rotators</p>
                      <p className="text-xl font-black text-white">142</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">SLA Compliance</p>
                      <p className="text-xl font-black text-emerald-400">99.1%</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[600px]">
                   {/* Left Stats Rail */}
                   <div className="xl:col-span-4 border-r border-white/5 p-8 space-y-8 bg-[#081120]/40">
                      {[
                        { label: 'Active Incidents', val: '1,248', trend: '+8.3%' },
                        { label: 'En Route', val: '642', trend: '+6.1%' },
                        { label: 'On Scene', val: '426', trend: '+4.7%' },
                        { label: 'Completed Today', val: '2,381', trend: '+12.4%' }
                      ].map((stat, i) => (
                        <div key={i} className="space-y-2">
                           <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{stat.label}</span>
                              <span className="text-[9px] font-bold text-emerald-400">{stat.trend}</span>
                           </div>
                           <p className="text-3xl font-black text-white">{stat.val}</p>
                           <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }} 
                                animate={{ width: '70%' }} 
                                transition={{ delay: i * 0.1 }}
                                className="h-full bg-[#2F80FF]" 
                              />
                           </div>
                        </div>
                      ))}
                   </div>

                   {/* Main Visualization Area */}
                   <div className="xl:col-span-8 relative bg-[#081120]/60 overflow-hidden">
                      {/* Map Mesh Overlay */}
                      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                      
                      {/* Animated Map Points */}
                      {[
                        { x: 20, y: 30, color: '#2F80FF', id: 'INC-7821' },
                        { x: 60, y: 45, color: '#FF7A1A', id: 'INC-7822' },
                        { x: 45, y: 70, color: '#2F80FF', id: 'INC-7823' },
                        { x: 80, y: 20, color: '#2F80FF', id: 'INC-7824' }
                      ].map((p, i) => (
                        <div key={i} className="absolute" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                           <motion.div
                             animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                             transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                             className="h-3 w-3 rounded-full shadow-[0_0_15px_rgba(47,128,255,0.6)]"
                             style={{ backgroundColor: p.color }}
                           />
                           <div className="absolute top-4 left-0 whitespace-nowrap">
                              <span className="text-[9px] font-black text-white bg-[#0A192F] px-2 py-1 rounded border border-white/10 uppercase tracking-widest">{p.id}</span>
                           </div>
                        </div>
                      ))}

                      {/* Bottom Quick Analytics Bar */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-4 gap-6 bg-gradient-to-t from-brand-bg to-transparent">
                         {[
                           { label: 'Avg. Response', val: '32 min' },
                           { label: 'SLA Compliance', val: '99.1%' },
                           { label: 'Rotator Avail.', val: '85%' },
                           { label: 'Satisfaction', val: '4.9 / 5' }
                         ].map((m, i) => (
                           <div key={i} className="space-y-1">
                              <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{m.label}</p>
                              <p className="text-sm font-black text-white">{m.val}</p>
                              <div className="flex gap-1 h-0.5 mt-2">
                                 {[1,2,3,4,5].map(b => (
                                   <div key={b} className={`flex-1 ${b < 4 ? 'bg-[#2F80FF]' : 'bg-white/10'}`} />
                                 ))}
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Floating Incident Card Decoration */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-12 top-1/4 z-20"
            >
               <GlassPanel className="p-6 bg-brand-navy border-[#2F80FF]/30 w-72 shadow-2xl">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest">Active Incident</span>
                    <Zap className="h-3 w-3 text-[#FF7A1A]" />
                  </div>
                  <div className="flex items-center gap-5 mb-8">
                     <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Truck className="h-8 w-8 text-white" />
                     </div>
                     <div>
                        <p className="text-xs font-black text-white">INC-88219</p>
                        <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">Class 8 Rollover</p>
                     </div>
                  </div>
                  <div className="space-y-4 mb-8">
                     <div className="flex justify-between text-[11px]">
                        <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Location</span>
                        <span className="text-white font-black">I-95 South • MP 142</span>
                     </div>
                     <div className="flex justify-between text-[11px]">
                        <span className="text-[#94A3B8] font-bold uppercase tracking-widest">ETA Rotator</span>
                        <span className="text-white font-black">14 Minutes</span>
                     </div>
                  </div>
                  <Button className="w-full bg-[#2F80FF] text-white font-black text-[10px] uppercase tracking-widest h-12 rounded-xl">
                     Track Incident Live
                  </Button>
               </GlassPanel>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Nighttime Roadway Decoration (Overlay) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1542362567-b05260f89d41?auto=format&fit=crop&q=80&w=2000" 
          alt="Nighttime Roadway" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-transparent to-brand-bg" />
      </div>
    </section>
  );
};
