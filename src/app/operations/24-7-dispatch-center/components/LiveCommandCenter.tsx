'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, ShieldAlert, Truck, Clock, Network } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const tabs = [
  { id: 'active', label: 'Active Dispatches', icon: Activity },
  { id: 'telemetry', label: 'Incident Telemetry', icon: Network },
  { id: 'fleet', label: 'Fleet Coordination', icon: Truck },
  { id: 'escalation', label: 'Escalation Systems', icon: ShieldAlert },
  { id: 'sla', label: 'SLA Monitoring', icon: Clock }
];

export const LiveCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <section className="py-32 bg-card/20 relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
              Live Dispatch Command
           </h2>
           <p className="text-brand-slate font-medium text-sm">
             Palantir-inspired operational interface for real-time recovery coordination.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
           {/* Vertical Tabs */}
           <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
              {tabs.map(tab => (
                 <button
                   key={tab.id}
                   onClick={() => setActiveTab(tab.id)}
                   suppressHydrationWarning
                   className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all shrink-0 ${
                     activeTab === tab.id 
                     ? 'bg-[#2F80FF]/10 border border-[#2F80FF]/30 text-foreground dark:text-white' 
                     : 'bg-transparent border border-transparent text-brand-slate hover:bg-white/5 hover:text-foreground dark:text-white'
                   }`}
                 >
                    <tab.icon className={`h-4 w-4 ${activeTab === tab.id ? 'text-[#2F80FF]' : 'opacity-50'}`} />
                    <span className="text-[11px] font-bold uppercase tracking-widest">{tab.label}</span>
                 </button>
              ))}
           </div>

           {/* Tab Content Dashboard */}
           <div className="lg:col-span-9 h-[500px]">
              <AnimatePresence mode="wait">
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0, y: -10 }}
                   transition={{ duration: 0.2 }}
                   className="h-full"
                 >
                    <GlassPanel className="w-full h-full p-0 border-[#2F80FF]/20 bg-brand-bg/90 relative overflow-hidden flex flex-col">
                       {/* Header */}
                       <div className="px-6 py-4 border-b border-brand-border flex justify-between items-center bg-white/[0.02]">
                          <span className="text-[10px] font-mono text-emerald-400">DATA_STREAM: CONNECTED</span>
                          <span className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">{tabs.find(t => t.id === activeTab)?.label}</span>
                       </div>

                       {/* Body Layout Simulator */}
                       <div className="flex-1 p-6 grid grid-cols-2 gap-6 overflow-y-auto">
                          {activeTab === 'active' && (
                             <>
                                <div className="space-y-4">
                                   {[1, 2, 3].map(i => (
                                      <div key={i} className="p-4 rounded-xl border border-brand-border bg-white/5 relative overflow-hidden group">
                                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2F80FF]" />
                                         <div className="flex justify-between items-start mb-2">
                                            <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">INC-9942-{i}</p>
                                            <span className="text-[9px] font-mono text-[#2F80FF] animate-pulse">EN_ROUTE</span>
                                         </div>
                                         <p className="text-sm text-brand-slate font-medium mb-3">Class 8 Tow • Heavy Duty Winch</p>
                                         <div className="w-full h-1 bg-card rounded-full overflow-hidden">
                                            <motion.div initial={{ width: 0 }} animate={{ width: `${60 + i * 10}%` }} transition={{ duration: 1 }} className="h-full bg-gradient-to-r from-[#2F80FF] to-emerald-400" />
                                         </div>
                                      </div>
                                   ))}
                                </div>
                                <div className="rounded-xl border border-brand-border overflow-hidden relative">
                                   <div className="absolute inset-0 bg-card opacity-80" />
                                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80')] mix-blend-luminosity opacity-40 bg-cover bg-center" />
                                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 border border-[#2F80FF] rounded-full flex items-center justify-center">
                                      <div className="h-2 w-2 rounded-full bg-[#2F80FF] animate-ping" />
                                   </div>
                                </div>
                             </>
                          )}

                          {activeTab !== 'active' && (
                             <div className="col-span-2 h-full flex flex-col items-center justify-center opacity-50">
                                <Activity className="h-12 w-12 text-[#2F80FF] mb-4 opacity-50 animate-pulse" />
                                <p className="text-[10px] font-mono text-foreground dark:text-white uppercase tracking-widest">Loading Telemetry Stream...</p>
                             </div>
                          )}
                       </div>
                    </GlassPanel>
                 </motion.div>
              </AnimatePresence>
           </div>
        </div>
      </div>
    </section>
  );
};
