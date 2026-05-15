'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Users, BarChart3, AlertCircle, MapPin, Clock, Search, Filter } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { useDispatchStats } from '../hooks/use-dispatch-stats';

const tabs = [
  { id: 'live', label: 'Live Dispatch', icon: LayoutDashboard },
  { id: 'vendors', label: 'Vendor Intelligence', icon: Users },
  { id: 'sla', label: 'SLA Analytics', icon: BarChart3 },
  { id: 'escalations', label: 'Escalation Monitoring', icon: AlertCircle },
];

const incidents = [
  { id: 'INC-4821', type: 'Towing', priority: 'High', status: 'En Route', vendor: 'Elite Recovery', eta: '12m' },
  { id: 'INC-4822', type: 'Battery', priority: 'Medium', status: 'On Site', vendor: 'Quick Assist', eta: '0m' },
  { id: 'INC-4823', type: 'Tire Change', priority: 'Low', status: 'Dispatched', vendor: 'Metro Tow', eta: '24m' },
  { id: 'INC-4824', type: 'Winch-out', priority: 'High', status: 'En Route', vendor: 'Heavy Lift', eta: '18m' },
];

export const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('live');
  const { stats } = useDispatchStats();

  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Command & Control</p>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white mb-8 tracking-tight">Dispatch Command Center</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Real-time roadside incident management with AI-powered routing, GPS vendor tracking, and live SLA monitoring.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-3 space-y-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all relative overflow-hidden group ${
                  activeTab === tab.id 
                    ? 'bg-brand-blue text-foreground dark:text-white shadow-[0_0_30px_rgba(47,128,255,0.3)]' 
                    : 'bg-white/[0.02] text-brand-slate hover:bg-white/[0.05] border border-brand-border'
                }`}
              >
                <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-foreground dark:text-white' : 'text-brand-blue group-hover:scale-110 transition-transform'}`} />
                <span className="text-sm font-bold tracking-tight">{tab.label}</span>
                {activeTab === tab.id && (
                  <motion.div layoutId="tabActive" className="absolute left-0 top-0 w-1 h-full bg-white" />
                )}
              </button>
            ))}

            <GlassPanel className="mt-8 p-6 border-brand-border bg-brand-blue/[0.03]">
               <div className="flex items-center gap-3 mb-4">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Mesh Live</span>
               </div>
               <p className="text-2xl font-black text-foreground dark:text-white">99.98%</p>
               <p className="text-[10px] text-brand-slate uppercase tracking-widest mt-1">Operational Uptime</p>
            </GlassPanel>
          </div>

          {/* Main Dashboard Panel */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <GlassPanel className="border-brand-border bg-card/60 p-0 overflow-hidden shadow-2xl">
                   {/* Dashboard Header */}
                   <div className="px-8 py-6 border-b border-brand-border flex flex-wrap items-center justify-between gap-4 bg-white/[0.01]">
                      <div className="flex items-center gap-4">
                         <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-8 w-8 rounded-full border-2 border-brand-navy bg-brand-blue/20 flex items-center justify-center text-[10px] font-bold text-brand-blue">
                                OP{i}
                              </div>
                            ))}
                         </div>
                         <div className="h-8 w-[1px] bg-white/10" />
                         <p className="text-sm font-bold text-foreground dark:text-white tracking-tight">Active Dispatches: {stats?.activeIncidents?.toLocaleString() || '1,424'}</p>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-slate" />
                            <input className="bg-white/5 border border-brand-border rounded-lg py-2 pl-9 pr-4 text-[11px] text-foreground dark:text-white focus:outline-none focus:border-brand-blue transition-colors w-48" placeholder="Search incidents..." />
                         </div>
                         <button className="p-2 bg-white/5 border border-brand-border rounded-lg text-brand-slate hover:text-foreground dark:text-white transition-colors">
                            <Filter className="h-4 w-4" />
                         </button>
                      </div>
                   </div>

                   {/* Dashboard Body */}
                   <div className="grid grid-cols-1 xl:grid-cols-12">
                      {/* Left: Incident Queue */}
                      <div className="xl:col-span-5 border-r border-brand-border bg-white/[0.01]">
                         <div className="p-4 border-b border-brand-border flex justify-between items-center bg-white/[0.02]">
                            <span className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Active Queue</span>
                            <Badge variant="outline" className="text-[9px] border-brand-border">Priority: High</Badge>
                         </div>
                         <div className="divide-y divide-white/5 h-[500px] overflow-auto">
                            {incidents.map((inc) => (
                              <div key={inc.id} className="p-5 hover:bg-white/[0.03] transition-colors cursor-pointer group">
                                 <div className="flex justify-between items-start mb-3">
                                    <div className="flex items-center gap-3">
                                       <p className="text-xs font-black text-foreground dark:text-white">{inc.id}</p>
                                       <span className={`text-[9px] font-bold px-2 py-0.5 rounded ${
                                          inc.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'
                                       }`}>
                                          {inc.priority}
                                       </span>
                                    </div>
                                    <p className="text-[10px] text-brand-slate font-mono">{inc.eta}</p>
                                 </div>
                                 <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold text-foreground dark:text-white/90">{inc.type}</span>
                                    <span className="text-[10px] text-brand-slate">•</span>
                                    <span className="text-[10px] text-brand-slate">{inc.status}</span>
                                 </div>
                                 <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                       <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                       <span className="text-[10px] text-brand-slate">{inc.vendor}</span>
                                    </div>
                                    <button className="text-[10px] font-bold text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity">Details</button>
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>

                      {/* Right: Live Map Preview */}
                      <div className="xl:col-span-7 relative h-[500px] xl:h-auto bg-brand-bg/50">
                         {/* Simulation of a map */}
                         <div className="absolute inset-0 bg-[url('/map-dark.png')] bg-cover opacity-30" />
                         <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent" />
                         
                         {/* Map UI Layers */}
                         <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                            <GlassPanel className="p-4 bg-brand-navy/90 border-brand-blue/30 w-48 shadow-2xl">
                               <div className="flex items-center gap-2 mb-2">
                                  <MapPin className="h-3.5 w-3.5 text-brand-blue" />
                                  <span className="text-[9px] font-bold text-foreground dark:text-white uppercase tracking-widest">Incident Focus</span>
                               </div>
                               <p className="text-[11px] font-bold text-foreground dark:text-white mb-1">Dallas-Fort Worth Node</p>
                               <div className="flex items-center justify-between">
                                  <span className="text-[9px] text-brand-slate">Active Vendors</span>
                                  <span className="text-[10px] font-black text-emerald-400">42</span>
                               </div>
                            </GlassPanel>

                            <GlassPanel className="p-3 bg-brand-navy/90 border-brand-border flex flex-col items-center">
                               <Clock className="h-4 w-4 text-brand-blue mb-1" />
                               <span className="text-xs font-black text-foreground dark:text-white">12:44</span>
                               <span className="text-[7px] text-brand-slate uppercase">Node Time</span>
                            </GlassPanel>
                         </div>

                         {/* Animated Telemetry Dots */}
                         {[
                           { x: 30, y: 40 }, { x: 70, y: 20 }, { x: 55, y: 65 }, { x: 85, y: 50 }, { x: 20, y: 75 }
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

                         <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                            <motion.path 
                              d="M 30% 40% Q 50% 50% 70% 20%" 
                              stroke="rgba(47, 128, 255, 0.2)" 
                              strokeWidth="1.5" 
                              fill="none" 
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, repeat: Infinity }}
                            />
                         </svg>

                         {/* Bottom Map Controls */}
                         <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                            <div className="flex gap-2">
                               {['Satellite', 'Mesh', 'Traffic'].map(m => (
                                 <button key={m} className={`px-4 py-1.5 rounded-lg text-[9px] font-bold uppercase tracking-widest border transition-all ${
                                   m === 'Mesh' ? 'bg-brand-blue text-foreground dark:text-white border-brand-blue' : 'bg-brand-navy border-brand-border text-brand-slate'
                                 }`}>
                                    {m}
                                 </button>
                               ))}
                            </div>
                            <GlassPanel className="p-2 px-4 bg-brand-navy/90 border-brand-border flex items-center gap-4">
                               <div className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                                  <span className="text-[9px] text-brand-slate uppercase font-bold">428 Connected Vendors</span>
                               </div>
                               <div className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                                  <span className="text-[9px] text-brand-slate uppercase font-bold">12 Escalations</span>
                               </div>
                            </GlassPanel>
                         </div>
                      </div>
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
