'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AlertTriangle, Clock, MapPin, Users, Navigation, ShieldAlert, Cpu, UserCheck, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'active', label: 'Active Escalations', icon: AlertTriangle },
  { id: 'sla', label: 'SLA Breaches', icon: Clock },
  { id: 'vendor', label: 'Vendor Failures', icon: Users },
  { id: 'supervisor', label: 'Supervisor Queue', icon: UserCheck },
  { id: 'fleet', label: 'Fleet Recovery', icon: Navigation },
  { id: 'heatmaps', label: 'Incident Heatmaps', icon: MapPin }
];

export const LiveCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('active');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black text-white">Live Escalation Command Center</h2>
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
                    : 'bg-[#0A192F]/40 text-[#94A3B8] border border-transparent hover:bg-white/5 hover:text-white'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Center/Right Content */}
          <GlassPanel className="flex-1 p-0 overflow-hidden border-white/10 bg-[#0A192F]/20 relative min-h-[500px]">
            <div className="flex flex-col lg:flex-row h-full">
               
               {/* Incidents Table */}
               <div className="lg:w-1/2 p-6 border-r border-white/5 bg-[#081120]/40 flex flex-col">
                  
                  <div className="w-full overflow-x-auto custom-scrollbar">
                     <table className="w-full text-left border-collapse">
                        <thead>
                           <tr className="border-b border-white/10">
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Incident ID</th>
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Type</th>
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Severity</th>
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Location</th>
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Age</th>
                              <th className="pb-3 text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">Status</th>
                           </tr>
                        </thead>
                        <tbody className="text-sm">
                           {[
                              { id: "ESC-78291", type: "SLA Breach", sev: "Critical", loc: "Dallas, TX", age: "8 min", stat: "In Progress" },
                              { id: "ESC-78292", type: "Vendor Failure", sev: "High", loc: "Houston, TX", age: "12 min", stat: "Escalated" },
                              { id: "ESC-78293", type: "Dispatch Delay", sev: "High", loc: "Atlanta, GA", age: "15 min", stat: "In Progress" },
                              { id: "ESC-78294", type: "Fleet Downtime", sev: "Medium", loc: "Phoenix, AZ", age: "20 min", stat: "Monitoring" },
                              { id: "ESC-78295", type: "Customer Risk", sev: "Medium", loc: "Chicago, IL", age: "28 min", stat: "Monitoring" }
                           ].map((item, i) => (
                              <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group cursor-pointer">
                                 <td className="py-4 text-[11px] font-mono text-[#2F80FF]">{item.id}</td>
                                 <td className="py-4 text-white text-xs">{item.type}</td>
                                 <td className={`py-4 text-[10px] font-bold uppercase tracking-wider ${item.sev === 'Critical' ? 'text-red-500' : item.sev === 'High' ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`}>{item.sev}</td>
                                 <td className="py-4 text-[#94A3B8] text-xs">{item.loc}</td>
                                 <td className="py-4 text-white font-mono text-xs">{item.age}</td>
                                 <td className={`py-4 text-[10px] font-bold uppercase tracking-wider ${item.stat === 'Escalated' ? 'text-red-500' : item.stat === 'In Progress' ? 'text-emerald-400' : 'text-[#94A3B8]'}`}>{item.stat}</td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>

                  <button className="text-[11px] font-bold text-[#2F80FF] hover:text-white transition-colors mt-4 text-left">
                     View All Escalations →
                  </button>
               </div>

               {/* Right Workflow / Telemetry Column */}
               <div className="lg:w-1/2 flex flex-col border-white/5 bg-[#0A192F]/30 p-6">
                  
                  {/* Escalation Flow */}
                  <div className="mb-8">
                     <div className="flex items-center justify-between mb-6">
                        <div className="text-[11px] font-bold text-white uppercase tracking-widest">Escalation Flow</div>
                        <div className="flex items-center gap-1.5"><div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /><span className="text-[10px] font-mono text-emerald-400">Live</span></div>
                     </div>
                     <div className="flex flex-col items-center gap-4 relative">
                        <div className="absolute top-4 bottom-4 left-1/2 w-px bg-white/10 -translate-x-1/2" />
                        
                        <div className="bg-[#081120] border border-white/10 px-4 py-2 rounded-lg text-[10px] text-white z-10 font-bold w-40 text-center">Incident Detected</div>
                        <div className="bg-[#081120] border border-[#2F80FF]/30 px-4 py-2 rounded-lg text-[10px] text-[#2F80FF] z-10 font-bold w-40 text-center flex justify-center gap-2 items-center"><Cpu className="h-3 w-3"/> AI Severity Analysis</div>
                        
                        <div className="flex gap-4 z-10">
                           <div className="bg-[#081120] border border-white/10 px-4 py-2 rounded-lg text-[10px] text-[#94A3B8] font-bold w-28 text-center">Auto Recovery</div>
                           <div className="bg-[#FF7A1A]/10 border border-[#FF7A1A]/30 px-4 py-2 rounded-lg text-[10px] text-[#FF7A1A] font-bold w-36 text-center shadow-[0_0_15px_rgba(255,122,26,0.2)]">Supervisor Intervention</div>
                           <div className="bg-[#081120] border border-white/10 px-4 py-2 rounded-lg text-[10px] text-[#94A3B8] font-bold w-28 text-center">Vendor Escalation</div>
                        </div>

                        <div className="bg-[#081120] border border-emerald-500/30 px-4 py-2 rounded-lg text-[10px] text-emerald-400 z-10 font-bold w-40 text-center">Resolution Monitoring</div>
                     </div>
                  </div>

                  {/* Hotspots Map Area */}
                  <div className="flex-1 flex flex-col">
                     <div className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">Escalation Hotspots</div>
                     <div className="h-32 relative border border-white/5 bg-[#081120] rounded-xl overflow-hidden mb-4">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(red 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(239,68,68,0.5))' }}>
                           <circle cx="20%" cy="60%" r="20" fill="rgba(239,68,68,0.2)" />
                           <circle cx="70%" cy="30%" r="30" fill="rgba(239,68,68,0.3)" />
                        </svg>
                     </div>
                     <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-white">Texas Region</span>
                           <span className="text-red-500 font-bold text-[10px] uppercase">High Risk</span>
                           <span className="text-[#94A3B8] font-mono">24</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-white">Southeast Region</span>
                           <span className="text-red-500 font-bold text-[10px] uppercase">High Risk</span>
                           <span className="text-[#94A3B8] font-mono">19</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                           <span className="text-white">Midwest Region</span>
                           <span className="text-[#FF7A1A] font-bold text-[10px] uppercase">Medium Risk</span>
                           <span className="text-[#94A3B8] font-mono">12</span>
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
