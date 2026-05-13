'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Activity, Truck, AlertCircle, Clock, Zap, Target, Search } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'dispatch', label: 'Live Dispatch', icon: Zap },
  { id: 'telemetry', label: 'Technician Telemetry', icon: Truck },
  { id: 'analytics', label: 'Repair Analytics', icon: Activity },
  { id: 'fleet', label: 'Fleet Assistance', icon: Target }
];

export const RepairOperationsCenter = () => {
  const [activeTab, setActiveTab] = useState('dispatch');

  return (
    <section className="py-32 relative z-10 bg-brand-bg/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
           
           {/* Sidebar Tabs */}
           <div className="w-full lg:w-80 space-y-4">
              <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-8 px-4">Control Plane</p>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  suppressHydrationWarning
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all border ${
                    activeTab === tab.id 
                    ? 'bg-brand-blue/10 border-brand-blue/20 text-white' 
                    : 'bg-white/[0.01] border-white/5 text-[#94A3B8] hover:bg-white/[0.03]'
                  }`}
                >
                  <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-brand-blue' : 'text-inherit'}`} />
                  <span className="text-[13px] font-bold tracking-wide">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div layoutId="tab-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-blue" />
                  )}
                </button>
              ))}

              <div className="mt-12 p-6 rounded-2xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/10">
                 <div className="flex items-center gap-3 text-[#FF7A1A] mb-3">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">System Alert</span>
                 </div>
                 <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                    High demand in Southeast Region. Automated technician rerouting enabled to maintain SLA targets.
                 </p>
              </div>
           </div>

           {/* Main Dashboard Panel */}
           <div className="flex-1">
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/80 shadow-[0_40px_80px_rgba(0,0,0,0.6)] min-h-[700px] overflow-hidden flex flex-col">
                 {/* Panel Header */}
                 <div className="px-10 py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <div className="flex items-center gap-4">
                       <h3 className="text-xl font-black text-white tracking-tight">
                          {tabs.find(t => t.id === activeTab)?.label}
                       </h3>
                       <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[9px] uppercase font-black px-3">Live Feed</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#94A3B8]" />
                          <input 
                             placeholder="Search Incident ID, Tech..." 
                             suppressHydrationWarning
                             className="bg-brand-bg/50 border border-white/5 rounded-xl h-10 pl-10 pr-6 text-[11px] text-white w-64 focus:outline-none focus:border-brand-blue/30 transition-all"
                          />
                       </div>
                       <Button size="sm" className="bg-brand-blue text-white font-bold px-6 rounded-xl h-10 text-[10px] uppercase tracking-widest">
                          Global View
                       </Button>
                    </div>
                 </div>

                 {/* Panel Content */}
                 <div className="flex-1 grid grid-cols-1 xl:grid-cols-12">
                    {/* Left List (Active Items) */}
                    <div className="xl:col-span-4 border-r border-white/5 overflow-y-auto max-h-[600px] no-scrollbar">
                       <div className="p-2 space-y-1">
                          {[
                            { id: 'INC-7821', type: 'Battery Replacement', status: 'En Route', time: '18 min', tech: 'Marcus R.' },
                            { id: 'INC-7822', type: 'Fleet Diagnostic', status: 'On Scene', time: '24 min', tech: 'Sarah L.' },
                            { id: 'INC-7823', type: 'Flat Tire Repair', status: 'Dispatching', time: '12 min', tech: 'Pending' },
                            { id: 'INC-7824', type: 'Lockout Assist', status: 'En Route', time: '32 min', tech: 'John D.' },
                            { id: 'INC-7825', type: 'Fuel Delivery', status: 'Completed', time: '8 min', tech: 'David K.' }
                          ].map((item, i) => (
                            <div key={i} className="p-6 hover:bg-white/[0.02] transition-all group border-b border-white/[0.02] last:border-0 cursor-pointer">
                               <div className="flex justify-between items-start mb-3">
                                  <span className="text-[11px] font-black text-white tracking-widest uppercase">{item.id}</span>
                                  <Badge className={`text-[8px] uppercase font-black ${
                                    item.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' :
                                    item.status === 'On Scene' ? 'bg-purple-500/10 text-purple-400' :
                                    'bg-brand-orange/10 text-brand-orange'
                                  }`}>
                                     {item.status}
                                  </Badge>
                               </div>
                               <p className="text-[13px] font-bold text-white mb-2">{item.type}</p>
                               <div className="flex items-center justify-between text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">
                                  <div className="flex items-center gap-2">
                                     <Clock className="h-3 w-3" />
                                     <span>{item.time}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                     <Truck className="h-3 w-3" />
                                     <span>{item.tech}</span>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* Right Visualization (Map/Detail) */}
                    <div className="xl:col-span-8 relative bg-[#081120]/50">
                       {/* Mock Map Background */}
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="relative h-[400px] w-[400px]">
                             <div className="absolute inset-0 border border-brand-blue/10 rounded-full animate-ping" />
                             <div className="absolute inset-0 border border-brand-blue/5 rounded-full scale-150" />
                          </div>
                       </div>

                       {/* Interactive Detail Overlay */}
                       <div className="absolute top-10 right-10 z-20">
                          <GlassPanel className="p-6 bg-brand-navy border-brand-blue/30 w-72 shadow-2xl">
                             <div className="flex justify-between items-center mb-6">
                                <Badge className="bg-brand-blue/10 border-brand-blue/30 text-brand-blue text-[9px] uppercase font-black">Tracking TECH-247</Badge>
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                             </div>
                             <div className="flex items-center gap-5 mb-8">
                                <div className="h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                   <Truck className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                   <p className="text-xs font-black text-white">Sarah Jenkins</p>
                                   <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Master Tech • Lvl 4</p>
                                </div>
                             </div>
                             <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-[11px]">
                                   <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Location</span>
                                   <span className="text-white font-black">I-95 North</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                   <span className="text-[#94A3B8] font-bold uppercase tracking-widest">ETA Incident</span>
                                   <span className="text-white font-black">12 min</span>
                                </div>
                                <div className="flex justify-between text-[11px]">
                                   <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Vehicle</span>
                                   <span className="text-white font-black">F-350 Repair Unit</span>
                                </div>
                             </div>
                             <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-12 text-[10px] uppercase tracking-widest">
                                Open Comm Channel
                             </Button>
                          </GlassPanel>
                       </div>

                       {/* Bottom Pulse Stats */}
                       <div className="absolute bottom-10 left-10 right-10 flex gap-8">
                          {[
                            { label: 'Active Technicians', val: '642', trend: '+ 12' },
                            { label: 'On-Site Repairs', val: '426', trend: '↑ 4.3%' },
                            { label: 'Avg. Response Time', val: '32 min', trend: '↓ 8.4%' }
                          ].map((s, i) => (
                            <div key={i} className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                               <p className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest mb-3">{s.label}</p>
                               <div className="flex items-end gap-3">
                                  <span className="text-2xl font-black text-white">{s.val}</span>
                                  <span className="text-[10px] font-bold text-emerald-400 pb-1">{s.trend}</span>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                 </div>
              </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
