'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Map, Clock, Shield, Zap, TrendingUp, Users } from 'lucide-react';
import { useTireStats } from '../hooks/use-tire-stats';

export const TireDashboard = () => {
  const { stats } = useTireStats();

  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Live Operations Intelligence</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Real-Time <span className="text-[#2F80FF]">Infrastructure Monitor</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Map / Heatmap Block */}
          <div className="lg:col-span-8 space-y-6">
            <GlassPanel className="p-0 border-brand-border bg-card/60 overflow-hidden h-[450px] relative">
               <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 0)', backgroundSize: '30px 30px' }} />
               
               {/* Header */}
               <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between relative z-10">
                  <div className="flex items-center gap-3">
                     <Map className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Global Tire Assistance Heatmap</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-emerald-400 uppercase">Live Telemetry</span>
                     </div>
                  </div>
               </div>

               {/* Mock Heatmap Visualization */}
               <div className="h-full w-full flex items-center justify-center p-12">
                  <div className="relative w-full h-full border border-brand-border rounded-3xl bg-brand-bg/40 flex items-center justify-center overflow-hidden">
                     {/* Abstract Map Lines */}
                     <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(47,128,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(47,128,255,0.1) 1px, transparent 1px)', backgroundSize: '100px 100px' }} />
                     
                     {/* Heatmap Blobs */}
                     {[
                        { x: 30, y: 40, size: 120, color: 'bg-[#2F80FF]' },
                        { x: 60, y: 25, size: 180, color: 'bg-[#FF7A1A]' },
                        { x: 75, y: 60, size: 100, color: 'bg-[#2F80FF]' },
                        { x: 20, y: 70, size: 150, color: 'bg-[#2F80FF]' },
                        { x: 50, y: 55, size: 200, color: 'bg-[#2F80FF]' }
                     ].map((blob, i) => (
                        <motion.div
                           key={i}
                           animate={{ 
                             scale: [1, 1.1, 1],
                             opacity: [0.1, 0.2, 0.1]
                           }}
                           transition={{ duration: 4 + i, repeat: Infinity }}
                           className={`absolute rounded-full blur-[60px] ${blob.color}`}
                           style={{ 
                             left: `${blob.x}%`, 
                             top: `${blob.y}%`, 
                             width: `${blob.size}px`, 
                             height: `${blob.size}px` 
                           }}
                        />
                     ))}

                     <span className="text-[10px] font-mono text-brand-slate uppercase tracking-[0.4em] relative z-10">North America Operations Node</span>
                  </div>
               </div>
            </GlassPanel>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Users className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Active Units</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1">{stats?.techniciansOnDuty}</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">+12.4%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">vs Last 24h</span>
                  </div>
               </GlassPanel>
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Zap className="h-4 w-4 text-[#FF7A1A]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Avg ETA</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1">{stats?.avgResponseTime}m</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">-8.3%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">Response Improvement</span>
                  </div>
               </GlassPanel>
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Shield className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">SLA Compliance</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1">{stats?.slaCompliance}%</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">+2.1%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">Network Stability</span>
                  </div>
               </GlassPanel>
            </div>
          </div>

          {/* Right Sidebar: Dispatch Queue & Metrics */}
          <div className="lg:col-span-4 space-y-6">
            <GlassPanel className="p-0 border-brand-border bg-card/60 overflow-hidden flex flex-col h-[650px]">
               <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Activity className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Dispatch Activity Queue</span>
                  </div>
               </div>
               
               <div className="flex-grow overflow-hidden relative">
                  <div className="p-6 space-y-4">
                     {[
                        { id: 'T-9214', type: 'Fleet Unit #882', status: 'En-Route', eta: '4m', color: 'text-[#2F80FF]' },
                        { id: 'T-9215', type: 'Insurance Claim', status: 'On-Scene', eta: '0m', color: 'text-emerald-400' },
                        { id: 'T-9216', type: 'OEM Connected', status: 'Assigned', eta: '12m', color: 'text-[#FF7A1A]' },
                        { id: 'T-9217', type: 'Rental Ops', status: 'Validating', eta: '--', color: 'text-brand-slate' },
                        { id: 'T-9218', type: 'Fleet Unit #104', status: 'En-Route', eta: '9m', color: 'text-[#2F80FF]' },
                        { id: 'T-9219', type: 'Luxury RSA', status: 'Pending', eta: '--', color: 'text-brand-slate' }
                     ].map((item, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: 20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="p-4 bg-white/[0.02] border border-brand-border rounded-xl flex items-center justify-between group hover:border-[#2F80FF]/30 transition-all"
                        >
                           <div className="flex flex-col">
                              <span className="text-[9px] font-mono text-brand-slate uppercase tracking-widest">{item.id}</span>
                              <span className="text-[11px] font-black text-foreground dark:text-white">{item.type}</span>
                           </div>
                           <div className="text-right">
                              <span className={`text-[9px] font-black uppercase tracking-widest ${item.color}`}>{item.status}</span>
                              <p className="text-[10px] font-mono text-brand-slate">{item.eta}</p>
                           </div>
                        </motion.div>
                     ))}
                  </div>
                  
                  {/* Fade out effect at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent pointer-events-none" />
               </div>

               <div className="p-6 bg-white/[0.02] border-t border-brand-border">
                  <div className="flex items-center justify-between mb-4">
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Throughput Density</span>
                     <TrendingUp className="h-3 w-3 text-emerald-400" />
                  </div>
                  <div className="flex items-end gap-1 h-12">
                     {[30, 45, 60, 40, 80, 55, 70, 90, 65, 50, 75, 40, 60, 45, 30].map((h, i) => (
                        <motion.div
                           key={i}
                           initial={{ height: 0 }}
                           animate={{ height: `${h}%` }}
                           transition={{ delay: i * 0.05 }}
                           className="flex-1 bg-[#2F80FF]/30 rounded-t-[1px]"
                        />
                     ))}
                  </div>
               </div>
            </GlassPanel>
          </div>

        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};
