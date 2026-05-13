'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Activity, ShieldCheck, Map, Truck, Navigation, AlertCircle, PhoneCall, Star, ArrowRight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const activeDispatches = [
  { id: 'INC-7821', loc: 'I-75, Atlanta, GA', eta: '18 min', status: 'En Route', vendor: 'Tow Unit 247', type: 'Heavy Duty / Rotator' },
  { id: 'INC-7822', loc: 'I-10, Houston, TX', eta: '24 min', status: 'On Scene', vendor: 'Unit 401', type: 'Mobile Mechanic' },
  { id: 'INC-7823', loc: 'I-80, Des Moines, IA', eta: '15 min', status: 'En Route', vendor: 'Unit 118', type: 'Light Duty Tow' },
  { id: 'INC-7824', loc: 'I-95, Miami, FL', eta: '21 min', status: 'Dispatched', vendor: 'Unit 892', type: 'Fuel Delivery' },
  { id: 'INC-7825', loc: 'I-40, Nashville, TN', eta: '30 min', status: 'En Route', vendor: 'Unit 334', type: 'Heavy Duty Tow' },
];

export const DispatchCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('Vendor Availability');

  return (
    <section className="py-32 bg-brand-bg relative z-10 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
              Live Dispatch Command Center
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Left Navigation */}
           <div className="lg:col-span-3 space-y-2">
              {[
                { label: 'Vendor Availability', icon: Map },
                { label: 'Dispatch Telemetry', icon: Navigation },
                { label: 'SLA Analytics', icon: Activity },
                { label: 'Fleet Routing', icon: Truck },
                { label: 'Escalations', icon: AlertCircle },
                { label: 'Reports', icon: ShieldCheck }
              ].map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  suppressHydrationWarning
                  className={`w-full text-left px-6 py-5 rounded-2xl transition-all font-bold text-sm flex items-center gap-3 group ${
                    activeTab === tab.label 
                    ? 'bg-[#2F80FF] text-white shadow-[0_0_20px_rgba(47,128,255,0.3)]' 
                    : 'bg-white/[0.02] text-[#94A3B8] hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                   <tab.icon className="h-4 w-4" />
                   {tab.label}
                </button>
              ))}
           </div>

           {/* Main Dashboard Area */}
           <div className="lg:col-span-9">
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/80 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                 
                 <div className="grid grid-cols-1 lg:grid-cols-12 h-[600px]">
                    {/* Map Simulation - 7 cols */}
                    <div className="lg:col-span-7 relative border-r border-white/5 bg-[#081120] overflow-hidden">
                       <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                       
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 mix-blend-luminosity" />

                       {/* Route Lines */}
                       <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <path d="M 150 200 Q 250 300 350 250 T 450 400" fill="none" stroke="rgba(47,128,255,0.4)" strokeWidth="2" />
                         <path d="M 200 400 Q 300 350 400 300 T 500 200" fill="none" stroke="rgba(255,122,26,0.4)" strokeWidth="2" strokeDasharray="4 4" />
                       </svg>

                       {/* Vehicles */}
                       <div className="absolute top-[250px] left-[350px] bg-[#0A192F]/90 p-3 rounded-xl border border-[#2F80FF]/50 backdrop-blur-md shadow-[0_0_20px_rgba(47,128,255,0.2)]">
                          <p className="text-[10px] font-black text-white uppercase tracking-widest mb-0.5">Tow Unit 247</p>
                          <p className="text-[9px] font-bold text-white mb-1">24 min away</p>
                          <p className="text-[8px] text-[#94A3B8] font-bold uppercase mb-1">Heavy Duty / Rotator</p>
                          <span className="text-[8px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-1.5 py-0.5 rounded">En Route</span>
                       </div>

                       <div className="absolute top-[200px] left-[150px] h-3 w-3 bg-[#2F80FF] rounded-full border-2 border-white shadow-[0_0_10px_#2F80FF]" />
                       <div className="absolute top-[400px] left-[450px] h-3 w-3 bg-[#FF7A1A] rounded-full border-2 border-white shadow-[0_0_10px_#FF7A1A]" />
                       <div className="absolute top-[300px] left-[400px] h-3 w-3 bg-emerald-400 rounded-full border-2 border-white shadow-[0_0_10px_#34d399]" />
                       
                       <div className="absolute bottom-4 left-4 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 p-2 flex flex-col gap-2">
                          <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center text-white font-bold text-xs">+</div>
                          <div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center text-white font-bold text-xs">-</div>
                       </div>
                    </div>

                    {/* Active Dispatch List & Vendor Performance - 5 cols */}
                    <div className="lg:col-span-5 bg-[#0A192F]/40 overflow-y-auto flex flex-col">
                       {/* Active Dispatches */}
                       <div className="p-5 border-b border-white/5 sticky top-0 bg-[#0A192F] z-10 flex justify-between items-center">
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">Active Dispatches</span>
                          <button className="text-[9px] font-bold text-[#2F80FF] uppercase hover:underline">View All</button>
                       </div>
                       
                       <div className="divide-y divide-white/5 flex-1 overflow-y-auto">
                          {activeDispatches.map((inc, i) => (
                            <div key={i} className="p-4 hover:bg-white/[0.02] transition-colors cursor-pointer flex items-center justify-between group">
                               <div className="flex items-center gap-3">
                                  <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5">
                                     <Activity className="h-3 w-3 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                                  </div>
                                  <div>
                                     <p className="text-[10px] font-black text-white uppercase tracking-wider">{inc.id}</p>
                                     <p className="text-[9px] font-medium text-[#94A3B8] mt-0.5">{inc.loc}</p>
                                  </div>
                               </div>
                               <div className="text-right">
                                  <span className={`text-[9px] font-bold uppercase tracking-widest ${inc.status === 'En Route' ? 'text-emerald-400' : inc.status === 'On Scene' ? 'text-[#2F80FF]' : 'text-[#FF7A1A]'}`}>
                                     {inc.status}
                                  </span>
                                  <p className="text-[9px] font-medium text-[#94A3B8] mt-0.5">{inc.eta}</p>
                               </div>
                            </div>
                          ))}
                       </div>

                       {/* Vendor Performance Snapshot */}
                       <div className="border-t border-white/5 p-5">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Vendor Performance</span>
                            <span className="text-[9px] font-bold text-[#2F80FF] uppercase">This Month</span>
                          </div>
                          <div className="space-y-3">
                             {[
                               { name: 'Roadside Pro', score: 98.6, rating: 4.9 },
                               { name: 'Metro Towing', score: 97.2, rating: 4.8 },
                               { name: 'Quick Tow', score: 96.1, rating: 4.7 },
                               { name: 'Heavy Rescue Inc.', score: 95.3, rating: 4.6 },
                               { name: 'Fleet Support', score: 94.2, rating: 4.6 }
                             ].map((v, i) => (
                               <div key={i} className="flex items-center justify-between text-[10px] font-bold">
                                  <div className="flex items-center gap-2">
                                     <span className="text-[#94A3B8]">{i+1}</span>
                                     <span className="text-white">{v.name}</span>
                                  </div>
                                  <div className="flex gap-4">
                                     <span className="text-emerald-400">{v.score}%</span>
                                     <span className="text-yellow-400 flex items-center gap-1">{v.rating} <Star className="h-2 w-2 fill-yellow-400" /></span>
                                  </div>
                               </div>
                             ))}
                          </div>
                          <button className="text-[9px] font-bold text-[#2F80FF] uppercase mt-4 hover:underline">View Full Report <ArrowRight className="inline h-3 w-3 ml-1" /></button>
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
