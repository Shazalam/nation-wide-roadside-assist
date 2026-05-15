'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Activity, Clock, Shield, Search, Filter, AlertCircle, PhoneCall, Building2, Truck, Plane } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';

const activeIncidents = [
  { id: 'INC-7821', type: 'Rental Vehicle', loc: 'Orlando, FL', eta: '18 min', status: 'En Route', icon: Truck, color: 'text-brand-blue' },
  { id: 'INC-7822', type: 'Hotel Assistance', loc: 'Atlanta, GA', eta: '32 min', status: 'En Route', icon: Building2, color: 'text-brand-orange' },
  { id: 'INC-7823', type: 'Ride-Share', loc: 'Dallas, TX', eta: '14 min', status: 'On The Way', icon: Truck, color: 'text-emerald-400' },
  { id: 'INC-7824', type: 'Flight Assistance', loc: 'Denver, CO', eta: '45 min', status: 'Confirmed', icon: Plane, color: 'text-purple-400' },
];

export const CommandCenter = () => {
  const [activeTab, setActiveTab] = useState('Active Assistance');

  return (
    <section className="py-32 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-6">
              Live Mobility Command Center
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Left Navigation */}
           <div className="lg:col-span-3 space-y-2">
              {['Active Assistance', 'Transportation Telemetry', 'Mobility Analytics', 'Customer Experience'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  suppressHydrationWarning
                  className={`w-full text-left px-6 py-5 rounded-2xl transition-all font-bold text-sm flex items-center justify-between group ${
                    activeTab === tab 
                    ? 'bg-[#2F80FF] text-foreground dark:text-white shadow-[0_0_20px_rgba(47,128,255,0.3)]' 
                    : 'bg-white/[0.02] text-brand-slate hover:bg-white/[0.05] hover:text-foreground dark:text-white'
                  }`}
                >
                   <div className="flex items-center gap-3">
                      {tab === 'Active Assistance' && <Activity className="h-4 w-4" />}
                      {tab === 'Transportation Telemetry' && <MapPin className="h-4 w-4" />}
                      {tab === 'Mobility Analytics' && <Activity className="h-4 w-4" />}
                      {tab === 'Customer Experience' && <PhoneCall className="h-4 w-4" />}
                      {tab}
                   </div>
                </button>
              ))}
           </div>

           {/* Main Dashboard Area */}
           <div className="lg:col-span-9">
              <GlassPanel className="p-0 border-brand-border bg-card/80 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden">
                 
                 {/* Top Bar */}
                 <div className="px-8 py-5 border-b border-brand-border flex items-center justify-between bg-white/[0.02]">
                    <div className="flex items-center gap-4">
                       <div className="relative">
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-slate" />
                          <input type="text" placeholder="Search Incidents..." suppressHydrationWarning className="bg-white/5 border border-brand-border rounded-xl py-2 pl-10 pr-4 text-[10px] font-bold text-foreground dark:text-white focus:outline-none focus:border-brand-blue/50 w-64" />
                       </div>
                       <button suppressHydrationWarning className="p-2 bg-white/5 border border-brand-border rounded-xl hover:bg-white/10 transition-colors">
                          <Filter className="h-4 w-4 text-brand-slate" />
                       </button>
                    </div>
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                       Live Operations
                    </div>
                 </div>

                 {/* Map & List Split */}
                 <div className="grid grid-cols-1 lg:grid-cols-2 h-[500px]">
                    {/* Map Simulation */}
                    <div className="relative border-r border-brand-border bg-brand-bg overflow-hidden">
                       <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                       
                       <motion.div 
                         animate={{ rotate: 360 }} 
                         transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                         className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
                       >
                          <div className="absolute inset-0 border border-brand-blue/20 rounded-full" />
                          <div className="absolute inset-20 border border-brand-blue/20 rounded-full" />
                          <div className="absolute inset-40 border border-brand-blue/20 rounded-full" />
                       </motion.div>

                       {/* Route Line Simulation */}
                       <svg className="absolute inset-0 w-full h-full pointer-events-none">
                         <path d="M 100 300 Q 200 200 300 250 T 500 150" fill="none" stroke="rgba(47,128,255,0.3)" strokeWidth="2" strokeDasharray="5 5" />
                         <circle cx="100" cy="300" r="4" fill="#2F80FF" />
                         <circle cx="500" cy="150" r="4" fill="#FF7A1A" />
                       </svg>

                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-card/90 p-4 rounded-2xl border border-brand-border backdrop-blur-md">
                          <p className="text-[10px] font-black text-foreground dark:text-white tracking-widest uppercase mb-1">TRIP-7824</p>
                          <p className="text-[9px] text-brand-slate font-bold uppercase">En Route</p>
                          <p className="text-xs font-black text-brand-blue mt-1">ETA 24 min</p>
                       </div>
                    </div>

                    {/* Active Incident List */}
                    <div className="bg-card/40 overflow-y-auto">
                       <div className="p-6 flex justify-between items-center border-b border-brand-border sticky top-0 bg-card z-10">
                          <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Active Assistance</span>
                          <button suppressHydrationWarning className="text-[9px] font-bold text-brand-blue uppercase hover:underline">View All</button>
                       </div>
                       
                       <div className="divide-y divide-white/5">
                          {activeIncidents.map((incident, i) => (
                            <div key={i} className="p-6 hover:bg-white/[0.02] transition-colors cursor-pointer group">
                               <div className="flex items-center justify-between mb-3">
                                  <div className="flex items-center gap-3">
                                     <div className={`h-8 w-8 rounded-lg bg-white/5 flex items-center justify-center ${incident.color}`}>
                                        <incident.icon className="h-4 w-4" />
                                     </div>
                                     <div>
                                        <p className="text-xs font-black text-foreground dark:text-white uppercase tracking-wider">{incident.id}</p>
                                        <p className="text-[10px] font-medium text-brand-slate mt-0.5">{incident.type}</p>
                                     </div>
                                  </div>
                                  <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 px-2 py-1 rounded-md">{incident.status}</span>
                               </div>
                               <div className="flex items-center gap-6 ml-11">
                                  <div className="flex items-center gap-1.5 text-[10px] text-brand-slate">
                                     <MapPin className="h-3 w-3" /> {incident.loc}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[10px] text-brand-slate">
                                     <Clock className="h-3 w-3" /> ETA {incident.eta}
                                  </div>
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
