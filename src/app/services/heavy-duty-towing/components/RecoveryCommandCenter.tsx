'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Truck, Globe, BarChart3, 
  MapPin, Clock, Search, Filter, Activity,
  ChevronRight, CheckCircle, AlertTriangle
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'live', label: 'Live Dispatch', icon: LayoutDashboard },
  { id: 'fleet', label: 'Fleet Telemetry', icon: Truck },
  { id: 'analytics', label: 'Recovery Analytics', icon: Activity },
  { id: 'sla', label: 'SLA Intelligence', icon: BarChart3 },
];

const activeIncidents = [
  { id: 'INC-7849', type: 'Heavy-Duty Towing', location: 'I-10, Texas', vehicle: 'Freightliner Cascadia', eta: '12 min', status: 'En Route', vendor: 'Quick Recovery Towing' },
  { id: 'INC-6321', type: 'Trailer Recovery', location: 'I-75, Ohio', vehicle: 'Kenworth T680', eta: '15 min', status: 'Dispatched', vendor: 'EcoTowing' },
  { id: 'INC-5210', type: 'Winch-Out', location: 'I-88, Illinois', vehicle: 'Peterbilt 389', eta: '20 min', status: 'En Route', vendor: 'HeavyHaul' },
];

export const RecoveryCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="max-w-3xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Command & Control</p>
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-none">Live Recovery <br /><span className="text-brand-blue italic">Command Center</span></h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Nationwide heavy-duty recovery orchestration with real-time tracking, incident density mapping, and enterprise dispatch forecasting.
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
                     ? 'bg-brand-blue text-white shadow-[0_0_30px_rgba(47,128,255,0.3)]' 
                     : 'bg-white/[0.02] text-brand-slate hover:bg-white/[0.05] border border-white/5'
                 }`}
               >
                 <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-white' : 'text-brand-blue group-hover:scale-110 transition-transform'}`} />
                 <span className="text-sm font-bold tracking-tight">{tab.label}</span>
                 {activeTab === tab.id && (
                   <motion.div layoutId="ccRecoveryTabActive" className="absolute left-0 top-0 w-1 h-full bg-white" />
                 )}
               </button>
             ))}

             <GlassPanel className="mt-8 p-8 border-brand-orange/20 bg-brand-orange/5">
                <div className="flex items-center gap-3 mb-6">
                   <AlertTriangle className="h-5 w-5 text-brand-orange" />
                   <span className="text-[11px] font-black text-brand-orange uppercase tracking-widest">Active Escalations</span>
                </div>
                <p className="text-4xl font-black text-white">08</p>
                <p className="text-[10px] text-[#94A3B8] uppercase tracking-widest mt-2">Critical Recovery Events</p>
                <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-bold text-white uppercase">Average Escalation Time</span>
                   <span className="text-[9px] font-mono text-brand-orange font-black">14.2m</span>
                </div>
             </GlassPanel>
          </div>

          {/* Dashboard Container */}
          <div className="lg:col-span-9">
             <GlassPanel className="border-white/10 bg-[#0A192F]/60 p-0 overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="px-10 py-6 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-white/[0.01]">
                   <div className="flex items-center gap-8">
                      <div className="flex items-center gap-3">
                         <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-sm font-bold text-white tracking-tight uppercase tracking-widest">Dispatch Node: US-EAST-01</span>
                      </div>
                      <div className="h-8 w-[1px] bg-white/10" />
                      <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">Active Requests: 1,248</p>
                   </div>
                   <div className="flex items-center gap-4">
                      <div className="relative">
                         <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-slate" />
                         <input type="text" placeholder="Search Incidents..." suppressHydrationWarning className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-[10px] font-bold text-white focus:outline-none focus:border-brand-blue/50 w-48" />
                      </div>
                      <button className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                         <Filter className="h-4 w-4 text-brand-slate" />
                      </button>
                   </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[650px]">
                   {/* Incident List */}
                   <div className="xl:col-span-4 border-r border-white/5 bg-[#081120]/30 overflow-auto no-scrollbar">
                      <div className="divide-y divide-white/5">
                         {activeIncidents.map((inc) => (
                           <div key={inc.id} className="p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group relative">
                              <div className="flex justify-between items-start mb-4">
                                 <p className="text-sm font-black text-white group-hover:text-brand-blue transition-colors tracking-tight">{inc.id}</p>
                                 <Badge variant="outline" className="text-[9px] border-brand-orange/30 text-brand-orange uppercase font-black">{inc.status}</Badge>
                              </div>
                              <div className="space-y-2 mb-6">
                                 <p className="text-[11px] font-bold text-white opacity-90">{inc.type}</p>
                                 <div className="flex items-center gap-2">
                                    <MapPin className="h-3 w-3 text-brand-blue" />
                                    <p className="text-[10px] text-[#94A3B8] font-medium">{inc.location}</p>
                                 </div>
                              </div>
                              <div className="flex items-center justify-between text-[10px] font-bold text-[#94A3B8]">
                                 <div className="flex items-center gap-2">
                                    <Clock className="h-3 w-3" />
                                    <span>ETA: {inc.eta}</span>
                                 </div>
                                 <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Map & Detail Panel */}
                   <div className="xl:col-span-8 relative bg-brand-bg/50">
                      {/* Grid Overlay */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                      
                      <div className="absolute inset-0 p-10 flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                            <GlassPanel className="p-6 bg-brand-navy/95 border-brand-blue/30 w-64 shadow-2xl">
                               <div className="flex justify-between items-center mb-6">
                                  <span className="text-[11px] font-black text-white uppercase tracking-widest">Active Incident</span>
                                  <Badge className="bg-brand-orange/10 border-brand-orange/30 text-brand-orange text-[9px] uppercase font-black">En Route</Badge>
                               </div>
                               <h3 className="text-2xl font-black text-white mb-6">INC-7849</h3>
                               <div className="space-y-4">
                                  {[
                                    { label: 'Type', val: 'Heavy-Duty Towing' },
                                    { label: 'Vehicle', val: 'Freightliner Cascadia' },
                                    { label: 'Location', val: 'I-10, Texas' },
                                    { label: 'ETA', val: '12 min' },
                                    { label: 'Provider', val: 'Quick Recovery Towing' }
                                  ].map((item, i) => (
                                    <div key={i} className="flex justify-between text-[10px]">
                                       <span className="text-[#94A3B8] uppercase font-bold tracking-widest">{item.label}</span>
                                       <span className="text-white font-black">{item.val}</span>
                                    </div>
                                  ))}
                               </div>
                               <Button className="w-full mt-8 bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-12 text-[10px] uppercase tracking-widest rounded-xl">View Full Details</Button>
                            </GlassPanel>

                            <GlassPanel className="p-8 bg-brand-navy/95 border-white/10 w-64 shadow-2xl">
                               <p className="text-[11px] font-black text-white uppercase tracking-widest mb-8 text-center border-b border-white/5 pb-4">Incident Progress</p>
                               <div className="space-y-8">
                                  {[
                                    { label: 'Request Received', time: '09:12 AM', status: 'done' },
                                    { label: 'Vendor Assigned', time: '09:14 AM', status: 'done' },
                                    { label: 'En Route', time: '09:18 AM', status: 'done' },
                                    { label: 'On Scene', time: '09:32 AM', status: 'current' },
                                    { label: 'Recovery In Progress', time: '--:--', status: 'pending' },
                                    { label: 'Completed', time: '--:--', status: 'pending' }
                                  ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 relative">
                                       <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 z-10 ${
                                          step.status === 'done' ? 'bg-emerald-500 border-emerald-500' : 
                                          step.status === 'current' ? 'bg-brand-blue border-brand-blue' : 'border-white/20 bg-brand-navy'
                                       }`}>
                                          {step.status === 'done' && <CheckCircle className="h-3 w-3 text-white" />}
                                          {step.status === 'current' && <div className="h-2 w-2 rounded-full bg-white animate-pulse" />}
                                       </div>
                                       {i < 5 && <div className={`absolute top-5 left-2.5 w-[2px] h-8 -translate-x-1/2 ${step.status === 'done' ? 'bg-emerald-500' : 'bg-white/10'}`} />}
                                       <div className="flex justify-between items-center w-full">
                                          <span className={`text-[10px] font-bold ${step.status === 'pending' ? 'text-[#94A3B8]' : 'text-white'}`}>{step.label}</span>
                                          <span className="text-[9px] font-mono text-[#94A3B8]">{step.time}</span>
                                       </div>
                                    </div>
                                  ))}
                               </div>
                            </GlassPanel>
                         </div>

                         {/* Bottom Stats Overlay */}
                         <div className="grid grid-cols-5 gap-8 mt-12 bg-white/[0.02] p-8 rounded-3xl border border-white/5 backdrop-blur-xl">
                            {[
                              { label: 'Avg Response', val: '38 min', trend: '↑ 9.2%', color: 'text-emerald-400' },
                              { label: 'Requests Today', val: '1,248', trend: '↑ 8.2%', color: 'text-emerald-400' },
                              { label: 'Completed Today', val: '2,381', trend: '↑ 12.4%', color: 'text-emerald-400' },
                              { label: 'Vendor Avail', val: '85%', trend: '↑ 6.3%', color: 'text-emerald-400' },
                              { label: 'SLA Compl', val: '97.6%', trend: '↑ 5.3%', color: 'text-emerald-400' }
                            ].map((stat, i) => (
                              <div key={i} className="space-y-3">
                                 <p className="text-[9px] font-black text-[#94A3B8] uppercase tracking-widest">{stat.label}</p>
                                 <p className="text-2xl font-black text-white">{stat.val}</p>
                                 <p className={`text-[9px] font-bold ${stat.color} flex items-center gap-1`}>
                                    <Activity className="h-3 w-3" /> {stat.trend}
                                 </p>
                              </div>
                            ))}
                         </div>
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
