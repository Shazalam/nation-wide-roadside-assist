'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Activity, Truck, AlertCircle, Clock, Zap, Target, Search } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'active', label: 'Active Recovery', icon: Zap },
  { id: 'telemetry', label: 'Incident Telemetry', icon: Activity },
  { id: 'dispatch', label: 'Dispatch Intelligence', icon: MapPin },
  { id: 'fleet', label: 'Fleet Recovery Analytics', icon: Target }
];

export const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <section className="py-32 bg-brand-bg/50 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
           
           {/* Sidebar Control Panel */}
           <div className="w-full lg:w-80 space-y-4">
              <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em] mb-10 px-4">Operational Plane</p>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  suppressHydrationWarning
                  className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all border ${
                    activeTab === tab.id 
                    ? 'bg-[#2F80FF]/10 border-[#2F80FF]/20 text-white shadow-[0_10px_30px_rgba(47,128,255,0.1)]' 
                    : 'bg-white/[0.01] border-white/5 text-[#94A3B8] hover:bg-white/[0.03]'
                  }`}
                >
                  <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-[#2F80FF]' : 'text-inherit'}`} />
                  <span className="text-[13px] font-bold tracking-wide">{tab.label}</span>
                  {activeTab === tab.id && (
                    <motion.div layoutId="tab-active" className="ml-auto w-1.5 h-1.5 rounded-full bg-[#2F80FF]" />
                  )}
                </button>
              ))}

              <div className="mt-12 p-8 rounded-3xl bg-[#FF7A1A]/5 border border-[#FF7A1A]/10 space-y-4">
                 <div className="flex items-center gap-2 text-[#FF7A1A]">
                    <AlertCircle className="h-4 w-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Escalation Trigger</span>
                 </div>
                 <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                    Class 8 Multi-Vehicle incident on I-10 East requires auxiliary rotator units. Automated escalation in progress.
                 </p>
              </div>
           </div>

           {/* Main Dashboard Interface */}
           <div className="flex-1">
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/80 shadow-[0_40px_80px_rgba(0,0,0,0.6)] min-h-[750px] overflow-hidden flex flex-col">
                 {/* Header Nav */}
                 <div className="px-10 py-6 border-b border-white/5 flex items-center justify-between bg-white/[0.01]">
                    <div className="flex items-center gap-5">
                       <h3 className="text-xl font-black text-white tracking-tight leading-none uppercase tracking-widest">
                          {tabs.find(t => t.id === activeTab)?.label}
                       </h3>
                       <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[9px] uppercase font-black px-3 py-1">Real-Time Data Feed</Badge>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-[#94A3B8]" />
                          <input 
                             placeholder="Search Incident ID, Unit..." 
                             suppressHydrationWarning
                             className="bg-brand-bg/50 border border-white/5 rounded-xl h-11 pl-12 pr-6 text-[12px] text-white w-64 focus:outline-none focus:border-[#2F80FF]/30 transition-all font-medium"
                          />
                       </div>
                    </div>
                 </div>

                 {/* Dashboard Body */}
                 <div className="flex-1 grid grid-cols-1 xl:grid-cols-12">
                    {/* Left List Rail */}
                    <div className="xl:col-span-4 border-r border-white/5 bg-[#081120]/20 overflow-y-auto max-h-[650px] no-scrollbar">
                       <div className="p-2 space-y-1">
                          {[
                            { id: 'INC-7821', type: 'Class 8 Rollover', status: 'En Route', eta: '14 min', loc: 'I-75 North' },
                            { id: 'INC-7822', type: 'Winch-Out (Mud)', status: 'On Scene', eta: '0 min', loc: 'Off-Road Sector 4' },
                            { id: 'INC-7823', type: 'Rotator Recovery', status: 'Dispatched', eta: '28 min', loc: 'US-290 West' },
                            { id: 'INC-7824', type: 'Load Shift Assist', status: 'En Route', eta: '12 min', loc: 'MP 482 Highway' },
                            { id: 'INC-7825', type: 'Accident Recovery', status: 'Reported', eta: 'Pending', loc: 'Regional Arterial' }
                          ].map((incident, i) => (
                            <div key={i} className="p-6 hover:bg-white/[0.03] transition-all group border-b border-white/[0.02] last:border-0 cursor-pointer">
                               <div className="flex justify-between items-center mb-4">
                                  <span className="text-[11px] font-black text-white tracking-widest uppercase">{incident.id}</span>
                                  <Badge className={`text-[8px] uppercase font-black px-2 py-0.5 ${
                                    incident.status === 'On Scene' ? 'bg-emerald-500/10 text-emerald-400' :
                                    incident.status === 'En Route' ? 'bg-[#2F80FF]/10 text-[#2F80FF]' :
                                    'bg-brand-orange/10 text-brand-orange'
                                  }`}>
                                     {incident.status}
                                  </Badge>
                               </div>
                               <h4 className="text-[13px] font-black text-white mb-2">{incident.type}</h4>
                               <div className="flex items-center justify-between text-[10px] text-[#94A3B8] font-bold uppercase tracking-widest">
                                  <div className="flex items-center gap-2">
                                     <MapPin className="h-3 w-3" />
                                     <span>{incident.loc}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                     <Clock className="h-3 w-3" />
                                     <span>{incident.eta}</span>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>

                    {/* Right Visualization Area */}
                    <div className="xl:col-span-8 relative bg-[#081120]/40 overflow-hidden">
                       {/* Map Grid Background Simulation */}
                       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#2F80FF1A 1px, transparent 1px), linear-gradient(90deg, #2F80FF1A 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                       
                       {/* Radar Circle Decoration */}
                       <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="h-[500px] w-[500px] border border-[#2F80FF]/10 rounded-full animate-pulse" />
                          <div className="absolute h-[300px] w-[300px] border border-[#2F80FF]/5 rounded-full" />
                       </div>

                       {/* Interactive Data Card Overlay */}
                       <div className="absolute top-12 right-12 z-20">
                          <GlassPanel className="p-8 bg-brand-navy border-[#2F80FF]/30 w-[320px] shadow-2xl">
                             <div className="flex justify-between items-center mb-8">
                                <Badge className="bg-[#2F80FF]/10 border-[#2F80FF]/30 text-[#2F80FF] text-[9px] uppercase font-black px-3 py-1">Tracking UNIT-421</Badge>
                                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                             </div>
                             
                             <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/5">
                                <div className="h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                   <Truck className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                   <p className="text-sm font-black text-white">Elite Rotator 50</p>
                                   <p className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest mt-1">Status: Active Extraction</p>
                                </div>
                             </div>

                             <div className="space-y-5 mb-10">
                                {[
                                  { label: 'Latitude', val: '40.7128° N' },
                                  { label: 'Longitude', val: '74.0060° W' },
                                  { label: 'Incident ETA', val: '14.2 Minutes' },
                                  { label: 'Speed', val: '42 MPH' }
                                ].map((row, i) => (
                                  <div key={i} className="flex justify-between text-[11px] font-bold">
                                     <span className="text-[#94A3B8] uppercase tracking-widest">{row.label}</span>
                                     <span className="text-white uppercase tracking-widest">{row.val}</span>
                                  </div>
                                ))}
                             </div>

                             <Button className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black h-14 rounded-2xl text-[10px] uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(47,128,255,0.2)]">
                                View Full Telemetry
                             </Button>
                          </GlassPanel>
                       </div>

                       {/* Bottom Pulse Metrics Bar */}
                       <div className="absolute bottom-10 left-10 right-10 flex gap-8">
                          {[
                            { label: 'Tow Units Active', val: '142', trend: '+6.7%' },
                            { label: 'Incidents On Scene', val: '426', trend: '+7.1%' },
                            { label: 'Rotators Available', val: '68', trend: '+8.3%' },
                            { label: 'Completed Today', val: '2,381', trend: '+12.4%' }
                          ].map((s, i) => (
                            <div key={i} className="flex-1 p-6 rounded-2xl bg-white/[0.02] border border-white/5 relative group overflow-hidden">
                               <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                               <p className="text-[9px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-3">{s.label}</p>
                               <div className="flex items-end justify-between relative z-10">
                                  <span className="text-2xl font-black text-white tracking-tighter">{s.val}</span>
                                  <span className="text-[10px] font-black text-emerald-400">{s.trend}</span>
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
