'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { BarChart3, Activity, Zap, Server, Shield, Globe, Terminal, Cpu } from 'lucide-react';

export const AnalyticsInfrastructure = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Infrastructure Observability</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight">
            Operational Analytics <br />
            <span className="text-[#2F80FF]">& Tracking Infrastructure</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
           {/* Main Telemetry Panel */}
           <div className="lg:col-span-8">
              <GlassPanel className="p-0 border-brand-border bg-brand-navy/60 overflow-hidden h-full flex flex-col">
                 <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <Activity className="h-4 w-4 text-[#2F80FF]" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Global Dispatch Propagation Telemetry</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Live Node Stream</span>
                    </div>
                 </div>
                 
                 <div className="flex-grow p-8 flex flex-col justify-center">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                       <div className="space-y-6">
                          <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-3">
                             <Terminal className="h-4 w-4 text-[#2F80FF]" />
                             API Monitoring Nodes
                          </h4>
                          <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                             Tracking API latency and endpoint throughput via session-anchored observability cookies. This allows NTI to optimize nationwide dispatch engine performance in real-time.
                          </p>
                          <div className="flex gap-2">
                             {[1, 2, 3, 4, 5, 6].map(i => (
                               <motion.div 
                                 key={i} 
                                 animate={{ height: [20, 40, 30, 50, 25] }} 
                                 transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                 className="w-1.5 bg-[#2F80FF]/30 rounded-full" 
                               />
                             ))}
                          </div>
                       </div>
                       <div className="space-y-6">
                          <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-3">
                             <Globe className="h-4 w-4 text-[#2F80FF]" />
                             Geospatial Intelligence
                          </h4>
                          <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                             Utilizing pixel-tag telemetry to visualize regional infrastructure load and vendor coordination density. No personally identifiable location data is stored.
                          </p>
                          <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                             <motion.div 
                               initial={{ width: 0 }}
                               whileInView={{ width: '84%' }}
                               transition={{ duration: 2 }}
                               className="h-full bg-gradient-to-r from-[#2F80FF] to-[#FF7A1A]" 
                             />
                          </div>
                       </div>
                    </div>
                 </div>
                 
                 <div className="px-8 py-4 bg-white/[0.01] border-t border-brand-border flex items-center justify-between">
                    <p className="text-[9px] font-mono text-brand-slate uppercase tracking-widest">Audited by NTI Security Mesh / v4.2</p>
                    <div className="flex items-center gap-4">
                       <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">ISO 27001</span>
                       <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">SOC 2 TYPE II</span>
                    </div>
                 </div>
              </GlassPanel>
           </div>
           
           {/* Sidebar Operational Cards */}
           <div className="lg:col-span-4 space-y-6">
              <GlassPanel className="p-8 border-brand-border bg-card/60 space-y-6">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center">
                       <Cpu className="h-5 w-5 text-[#2F80FF]" />
                    </div>
                    <span className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Performance Mesh</span>
                 </div>
                 <div className="space-y-4">
                    {[
                      { label: 'Latency Tracking', val: 'Active', color: 'text-[#2F80FF]' },
                      { label: 'Uptime Monitoring', val: 'Encrypted', color: 'text-emerald-400' },
                      { label: 'Event Propagation', val: 'Aggregated', color: 'text-[#FF7A1A]' }
                    ].map((m, i) => (
                      <div key={i} className="flex justify-between items-center py-3 border-b border-white/[0.03]">
                         <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest">{m.label}</span>
                         <span className={`text-[10px] font-mono font-bold ${m.color}`}>{m.val}</span>
                      </div>
                    ))}
                 </div>
              </GlassPanel>

              <GlassPanel className="p-8 border-brand-border bg-[#2F80FF]/5 space-y-4">
                 <Shield className="h-6 w-6 text-[#2F80FF] mb-2" />
                 <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Enterprise Privacy Protection</h4>
                 <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
                    All tracking infrastructure is isolated and governed by NTI's unified privacy and consent frameworks.
                 </p>
              </GlassPanel>
           </div>
        </div>
      </div>
    </section>
  );
};
