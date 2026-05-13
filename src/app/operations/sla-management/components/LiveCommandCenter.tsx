'use client';

import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { ShieldCheck, Clock, MapPin, Users, Navigation, Star, Activity } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const tabs = [
  { id: 'compliance', label: 'SLA Compliance', icon: ShieldCheck },
  { id: 'vendor', label: 'Vendor Analytics', icon: Users },
  { id: 'dispatch', label: 'Dispatch Performance', icon: Activity },
  { id: 'eta', label: 'ETA Monitoring', icon: Clock },
  { id: 'fleet', label: 'Fleet Intelligence', icon: Navigation },
  { id: 'customer', label: 'Customer Satisfaction', icon: Star }
];

const chartData = [ { v: 92 }, { v: 95 }, { v: 98 }, { v: 94 }, { v: 96 }, { v: 99 } ];

export const LiveCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('compliance');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black text-white">Live SLA Command Center</h2>
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
               
               <div className="lg:w-1/2 p-6 border-r border-white/5 bg-[#081120]/40 flex flex-col">
                  <div className="text-[11px] font-bold text-white uppercase tracking-widest mb-6 flex items-center justify-between">
                     Active SLA Metrics
                     <span className="text-emerald-400 font-mono text-[10px]">Live</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                     <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Global SLA</div>
                        <div className="text-2xl font-mono text-emerald-400">97.8%</div>
                     </div>
                     <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
                        <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Incidents</div>
                        <div className="text-2xl font-mono text-white">14,289</div>
                     </div>
                  </div>

                  <div className="flex-1 min-h-[200px] relative border border-white/5 bg-[#081120] rounded-xl overflow-hidden p-4">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-2">Compliance Trend (24h)</div>
                     <div className="absolute inset-0 top-10 pb-4 px-4">
                        <ResponsiveContainer width="100%" height="100%">
                           <AreaChart data={chartData}>
                              <defs>
                                 <linearGradient id="slaTrend" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                                 </linearGradient>
                              </defs>
                              <Area type="monotone" dataKey="v" stroke="#10B981" fillOpacity={1} fill="url(#slaTrend)" strokeWidth={2} />
                           </AreaChart>
                        </ResponsiveContainer>
                     </div>
                  </div>
               </div>

               <div className="lg:w-1/2 flex flex-col bg-[#0A192F]/30 p-6">
                  <div className="text-[11px] font-bold text-white uppercase tracking-widest mb-4">Regional Response Heatmaps</div>
                  <div className="h-48 relative border border-white/5 bg-[#081120] rounded-xl overflow-hidden mb-6 flex items-center justify-center">
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
                     <span className="text-[#2F80FF]/30 font-mono text-xs tracking-widest relative z-10">LIVE TELEMETRY MAP</span>
                     <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-emerald-500/20 blur-md" />
                     <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full bg-[#2F80FF]/20 blur-md" />
                     <div className="absolute top-1/2 right-1/2 w-6 h-6 rounded-full bg-[#FF7A1A]/20 blur-md" />
                  </div>
                  
                  <div className="space-y-3">
                     <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-2">Regional Compliance</div>
                     {[
                        { region: 'Northeast', score: '98.2%', color: 'text-emerald-400' },
                        { region: 'Midwest', score: '97.5%', color: 'text-emerald-400' },
                        { region: 'South', score: '96.1%', color: 'text-[#FF7A1A]' },
                        { region: 'West', score: '98.8%', color: 'text-emerald-400' }
                     ].map((r, i) => (
                        <div key={i} className="flex justify-between items-center text-xs p-2 rounded-lg bg-white/[0.02] border border-white/5">
                           <span className="text-white">{r.region}</span>
                           <span className={`font-mono font-bold ${r.color}`}>{r.score}</span>
                        </div>
                     ))}
                  </div>
               </div>

            </div>
          </GlassPanel>

        </div>
      </div>
    </section>
  );
};
