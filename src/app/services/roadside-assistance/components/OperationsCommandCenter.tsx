'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Users, Globe, BarChart3, 
  MapPin, Clock, Search, Filter, Activity,
  ChevronRight, AlertTriangle, CheckCircle
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'live', label: 'Live Dispatch', icon: LayoutDashboard },
  { id: 'vendors', label: 'Vendor Intelligence', icon: Users },
  { id: 'coverage', label: 'Fleet Coverage', icon: Globe },
  { id: 'sla', label: 'SLA Analytics', icon: BarChart3 },
];

const activeIncidents = [
  { id: 'INC-7849', type: 'Flat Tire Assistance', location: 'I-95, Miami, FL', customer: 'John D.', vehicle: 'Honda Accord', eta: '18 min', status: 'En Route', vendor: 'QuickRescue Towing' },
  { id: 'INC-7850', type: 'Fuel Delivery', location: 'I-75, Tampa, FL', customer: 'Sarah M.', vehicle: 'Toyota RAV4', eta: '12 min', status: 'Dispatched', vendor: 'EcoFuel Assist' },
  { id: 'INC-7851', type: 'Battery Jump', location: 'I-4, Orlando, FL', customer: 'Michael R.', vehicle: 'Ford F-150', eta: '24 min', status: 'En Route', vendor: 'PowerVolt Mobile' },
];

export const OperationsCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('live');

  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Command & Control</p>
            <h2 className="text-4xl lg:text-6xl font-black text-foreground mb-8 tracking-tight">Roadside Command Center</h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Nationwide roadside incident orchestration with AI-powered matching, real-time telemetry, and enterprise escalation management.
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
                     ? 'bg-brand-blue text-foreground dark:text-white shadow-[0_10px_30px_rgba(47,128,255,0.2)] dark:shadow-[0_0_30px_rgba(47,128,255,0.3)]' 
                     : 'bg-card/40 text-brand-slate hover:bg-card/60 border border-brand-border'
                 }`}
               >
                 <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-foreground dark:text-white' : 'text-brand-blue group-hover:scale-110 transition-transform'}`} />
                 <span className="text-sm font-bold tracking-tight">{tab.label}</span>
                 {activeTab === tab.id && (
                   <motion.div layoutId="ccTabActive" className="absolute left-0 top-0 w-1 h-full bg-white" />
                 )}
               </button>
             ))}

             <GlassPanel className="mt-8 p-6 border-brand-orange/20 bg-brand-orange/5 shadow-sm dark:shadow-none">
                <div className="flex items-center gap-3 mb-4">
                   <AlertTriangle className="h-4 w-4 text-brand-orange" />
                   <span className="text-[10px] font-bold text-brand-orange uppercase tracking-widest">Active Escalations</span>
                </div>
                <p className="text-2xl font-black text-foreground">12</p>
                <p className="text-[10px] text-brand-slate uppercase tracking-widest mt-1">High Priority Events</p>
             </GlassPanel>
          </div>

          {/* Dashboard Container */}
          <div className="lg:col-span-9">
             <GlassPanel className="border-brand-border bg-card/90 p-0 overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:shadow-2xl transition-all duration-500">
                {/* Dashboard Sub-header */}
                <div className="px-8 py-6 border-b border-brand-border flex flex-wrap items-center justify-between gap-4 bg-foreground/[0.01]">
                   <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                         <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-xs font-bold text-foreground tracking-tight">Dispatch Command Center</span>
                      </div>
                      <div className="h-8 w-[1px] bg-brand-border" />
                      <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Active Requests: 1,248</p>
                   </div>
                   <div className="flex items-center gap-3">
                      <Search className="h-4 w-4 text-brand-slate" />
                      <Filter className="h-4 w-4 text-brand-slate" />
                   </div>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 h-[600px]">
                   {/* Left Panel: Incident List */}
                   <div className="xl:col-span-4 border-r border-brand-border bg-brand-bg/30 overflow-auto">
                      <div className="divide-y divide-brand-border">
                         {activeIncidents.map((inc) => (
                           <div key={inc.id} className="p-5 hover:bg-foreground/[0.02] transition-colors cursor-pointer group">
                              <div className="flex justify-between items-start mb-3">
                                 <p className="text-xs font-black text-foreground group-hover:text-brand-blue transition-colors">{inc.id}</p>
                                 <Badge variant="outline" className="text-[8px] border-brand-orange/30 text-brand-orange">{inc.status}</Badge>
                              </div>
                              <div className="space-y-1 mb-4">
                                 <p className="text-[10px] font-bold text-foreground/90">{inc.type}</p>
                                 <div className="flex items-center gap-2">
                                    <MapPin className="h-2.5 w-2.5 text-brand-slate" />
                                    <p className="text-[9px] text-brand-slate">{inc.location}</p>
                                 </div>
                              </div>
                              <div className="flex items-center justify-between text-[9px] font-bold text-brand-slate">
                                 <span>ETA: {inc.eta}</span>
                                 <ChevronRight className="h-3 w-3" />
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>

                   {/* Right Panel: Map & Telemetry */}
                   <div className="xl:col-span-8 relative bg-brand-bg/50">
                      {/* Map Simulation Overlay */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--brand-blue) 1px, transparent 0)', backgroundSize: '40px 40px', opacity: 0.05 }} />
                      
                      {/* Visualization UI Layers */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                         <div className="flex justify-between items-start">
                            <GlassPanel className="p-4 bg-brand-navy/95 border-brand-blue/30 w-56 shadow-2xl">
                               <div className="flex justify-between items-center mb-4">
                                  <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Active Incident</span>
                                  <Badge variant="outline" className="bg-brand-orange/10 border-brand-orange/30 text-brand-orange text-[8px]">En Route</Badge>
                               </div>
                               <h3 className="text-xl font-black text-foreground dark:text-white mb-4">INC-7849</h3>
                               <div className="space-y-3">
                                  {[
                                    { label: 'Type', val: 'Flat Tire Assistance' },
                                    { label: 'Location', val: 'I-95, Miami, FL' },
                                    { label: 'Customer', val: 'John D.' },
                                    { label: 'Vehicle', val: 'Honda Accord' },
                                    { label: 'ETA', val: '18 min' },
                                    { label: 'Provider', val: 'QuickRescue Towing' }
                                  ].map((item, i) => (
                                    <div key={i} className="flex justify-between text-[9px]">
                                       <span className="text-brand-slate uppercase font-bold">{item.label}</span>
                                       <span className="text-foreground dark:text-white font-black">{item.val}</span>
                                    </div>
                                  ))}
                               </div>
                               <Button className="w-full mt-6 bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold h-10 text-[10px] uppercase tracking-widest">View Details</Button>
                            </GlassPanel>

                            <GlassPanel className="p-6 bg-brand-navy/95 border-brand-blue/20 w-56 shadow-2xl">
                               <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest mb-6 text-center">Incident Progress</p>
                               <div className="space-y-6">
                                  {[
                                    { label: 'Request Received', time: '09:41 AM', status: 'done' },
                                    { label: 'Verified', time: '09:42 AM', status: 'done' },
                                    { label: 'Vendor Assigned', time: '09:43 AM', status: 'done' },
                                    { label: 'En Route', time: '09:45 AM', status: 'current' },
                                    { label: 'On Scene', time: '--', status: 'pending' },
                                    { label: 'Completed', time: '--', status: 'pending' }
                                  ].map((step, i) => (
                                    <div key={i} className="flex items-center gap-3 relative">
                                       <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center shrink-0 z-10 ${
                                          step.status === 'done' ? 'bg-emerald-500 border-emerald-500' : 
                                          step.status === 'current' ? 'bg-brand-blue border-brand-blue' : 'border-white/20 bg-brand-navy'
                                       }`}>
                                          {step.status === 'done' && <CheckCircle className="h-3 w-3 text-foreground dark:text-white" />}
                                          {step.status === 'current' && <div className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />}
                                       </div>
                                       {i < 5 && <div className={`absolute top-4 left-2 w-[2px] h-6 -translate-x-1/2 ${step.status === 'done' ? 'bg-emerald-500' : 'bg-white/10'}`} />}
                                       <div className="flex justify-between items-center w-full">
                                          <span className={`text-[9px] font-bold ${step.status === 'pending' ? 'text-brand-slate' : 'text-foreground dark:text-white'}`}>{step.label}</span>
                                          <span className="text-[8px] font-mono text-brand-slate">{step.time}</span>
                                       </div>
                                    </div>
                                  ))}
                               </div>
                            </GlassPanel>
                         </div>

                         {/* Bottom Stats Overlay */}
                         <div className="grid grid-cols-5 gap-6 mt-8">
                            {[
                              { label: 'Avg Response', val: '32 min', trend: '↑ 9.2%', color: 'text-emerald-500' },
                              { label: 'Requests Today', val: '1,248', trend: '↑ 8.3%', color: 'text-emerald-500' },
                              { label: 'Completed Today', val: '2,381', trend: '↑ 12.4%', color: 'text-emerald-500' },
                              { label: 'Vendor Avail', val: '85%', trend: '↑ 6.7%', color: 'text-emerald-500' },
                              { label: 'First Time Fix', val: '91%', trend: '↑ 4.3%', color: 'text-emerald-500' }
                            ].map((stat, i) => (
                              <div key={i} className="space-y-2 border-t border-brand-border pt-4">
                                 <p className="text-[8px] font-black text-brand-slate uppercase tracking-widest">{stat.label}</p>
                                 <p className="text-xl font-black text-foreground">{stat.val}</p>
                                 <p className={`text-[8px] font-bold ${stat.color}`}>{stat.trend}</p>
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
