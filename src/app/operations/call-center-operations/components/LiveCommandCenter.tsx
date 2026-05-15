'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Phone, List, AlertTriangle, Users, Navigation, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'incoming', label: 'Incoming Calls', icon: Phone },
  { id: 'queue', label: 'Dispatch Queue', icon: List },
  { id: 'escalations', label: 'Escalations', icon: AlertTriangle },
  { id: 'vendor', label: 'Vendor Coordination', icon: Users },
  { id: 'fleet', label: 'Fleet Telemetry', icon: Navigation }
];

export const LiveCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('incoming');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black text-foreground dark:text-white">Call Center Operations Command Center</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* Left Tabs */}
          <div className="lg:w-64 shrink-0 flex flex-col gap-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left w-full text-sm font-bold ${
                  activeTab === tab.id 
                    ? 'bg-[#2F80FF]/10 text-[#2F80FF] border border-[#2F80FF]/20' 
                    : 'bg-card/40 text-brand-slate border border-transparent hover:bg-white/5 hover:text-foreground dark:text-white'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center Content */}
          <GlassPanel className="flex-1 p-0 overflow-hidden border-brand-border bg-card/20 relative min-h-[500px]">
            <div className="flex flex-col lg:flex-row h-full">
               
               {/* Incidents List */}
               <div className="lg:w-1/2 p-6 border-r border-brand-border bg-brand-bg/40 flex flex-col">
                  <div className="text-[11px] font-bold text-foreground dark:text-white uppercase tracking-widest mb-6 flex items-center justify-between">
                     Active Roadside Incidents
                     <span className="text-emerald-400 font-mono text-[10px]">↑ 8.2%</span>
                  </div>
                  <div className="space-y-3 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                     {[
                        { id: "#INC-78291", type: "Breakdown", loc: "Dallas, TX", time: "2 min ago", priority: "High" },
                        { id: "#INC-78292", type: "Flat Tire", loc: "Houston, TX", time: "4 min ago", priority: "Medium" },
                        { id: "#INC-78293", type: "Battery Jump", loc: "Austin, TX", time: "5 min ago", priority: "Low" },
                        { id: "#INC-78294", type: "Accident", loc: "San Antonio, TX", time: "7 min ago", priority: "High" }
                     ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-brand-border hover:border-[#2F80FF]/30 transition-colors cursor-pointer group">
                           <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center gap-2">
                                 <div className={`h-2 w-2 rounded-full ${item.priority === 'High' ? 'bg-red-500' : item.priority === 'Medium' ? 'bg-[#FF7A1A]' : 'bg-[#2F80FF]'}`} />
                                 <span className="text-[10px] font-mono text-[#2F80FF]">{item.id}</span>
                              </div>
                              <div className="text-[10px] text-brand-slate font-mono">{item.time}</div>
                           </div>
                           <div className="text-sm font-bold text-foreground dark:text-white">{item.type}</div>
                           <div className="flex justify-between items-end mt-1">
                              <div className="text-xs text-brand-slate">{item.loc}</div>
                              <div className={`text-[10px] font-bold uppercase tracking-wider ${item.priority === 'High' ? 'text-red-500' : item.priority === 'Medium' ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`}>{item.priority}</div>
                           </div>
                        </div>
                     ))}
                  </div>
                  <button className="text-[11px] font-bold text-[#2F80FF] hover:text-foreground dark:text-white transition-colors mt-4 w-full text-left">
                     View All Incidents
                  </button>
               </div>

               {/* Right Telemetry Column */}
               <div className="lg:w-1/2 flex flex-col">
                  {/* Mini Map */}
                  <div className="h-48 relative border-b border-brand-border bg-brand-bg">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                     <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(47,128,255,0.5))' }}>
                        <path d="M 50,150 C 100,50 200,180 300,100" fill="none" stroke="#2F80FF" strokeWidth="2" strokeDasharray="4,4" />
                     </svg>
                     <motion.div className="absolute top-[80px] left-[150px] h-6 w-6 rounded-full bg-[#FF7A1A]/20 border border-[#FF7A1A] flex items-center justify-center shadow-[0_0_15px_rgba(255,122,26,0.5)]">
                        <AlertTriangle className="h-3 w-3 text-[#FF7A1A]" />
                     </motion.div>
                     <motion.div className="absolute top-[50px] left-[250px] h-8 w-8 rounded-full bg-[#2F80FF]/20 border border-[#2F80FF] flex items-center justify-center shadow-[0_0_15px_rgba(47,128,255,0.5)]">
                        <Phone className="h-4 w-4 text-[#2F80FF]" />
                     </motion.div>
                  </div>

                  {/* Dispatch Assignment & Monitoring */}
                  <div className="p-6 flex-1 flex flex-col gap-6">
                     <div>
                        <div className="flex items-center justify-between mb-4">
                           <div className="text-[11px] font-bold text-foreground dark:text-white uppercase tracking-widest">Dispatch Assignment</div>
                           <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-mono text-emerald-400">Live</span></div>
                        </div>
                        <div className="p-4 bg-white/[0.02] border border-brand-border rounded-xl">
                           <div className="flex justify-between items-start mb-4">
                              <div className="flex items-center gap-3">
                                 <div className="h-8 w-8 rounded-lg bg-[#2F80FF]/20 flex items-center justify-center"><Navigation className="h-4 w-4 text-[#2F80FF]" /></div>
                                 <div>
                                    <div className="text-xs font-bold text-[#2F80FF]">Heavy-Duty Tow</div>
                                    <div className="text-[10px] text-brand-slate">Assigned to Prime Towing</div>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <div className="text-[10px] text-brand-slate uppercase">ETA</div>
                                 <div className="text-sm font-mono text-emerald-400">24 min</div>
                              </div>
                           </div>
                           <Button className="w-full bg-white/5 hover:bg-white/10 text-foreground dark:text-white text-xs h-8 border border-brand-border">Track Live</Button>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white/[0.02] border border-brand-border rounded-xl">
                           <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Service Level</div>
                           <div className="text-xl font-mono text-foreground dark:text-white">90 <span className="text-[12px] text-brand-slate">sec</span></div>
                        </div>
                        <div className="p-4 bg-white/[0.02] border border-brand-border rounded-xl">
                           <div className="text-[10px] text-brand-slate font-bold uppercase tracking-wider mb-1">Abandonment</div>
                           <div className="text-xl font-mono text-red-400">2.1%</div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
          </GlassPanel>

        </div>
      </div>
    </section>
  );
};
