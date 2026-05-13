'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { MapPin, Truck, AlertTriangle, Crosshair, Navigation, Activity, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'availability', label: 'Vendor Availability', icon: Activity },
  { id: 'coverage', label: 'Regional Coverage', icon: MapPin },
  { id: 'telemetry', label: 'Dispatch Telemetry', icon: Crosshair },
  { id: 'routing', label: 'Fleet Routing', icon: Navigation },
  { id: 'escalation', label: 'Escalation Workflows', icon: AlertTriangle }
];

export const LiveCommandCenter = () => {
  const [activeTab, setActiveTab] = useState('availability');

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center justify-between mb-8">
           <h2 className="text-2xl font-black text-white">Live Network Command Center</h2>
           <div className="flex gap-8">
              <div>
                 <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Active Dispatches</div>
                 <div className="text-lg font-mono text-white">1,243 <span className="text-emerald-400 text-xs">+12.5%</span></div>
              </div>
              <div>
                 <div className="text-[10px] text-[#94A3B8] font-bold uppercase tracking-wider mb-1">Vendors Online</div>
                 <div className="text-lg font-mono text-white">18,742 <span className="text-emerald-400 text-xs">+8.2%</span></div>
              </div>
           </div>
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

          {/* Center Map Area */}
          <GlassPanel className="flex-1 p-0 overflow-hidden border-white/10 bg-[#0A192F]/20 relative min-h-[500px]">
            <div className="absolute inset-0 bg-[#081120]" />
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#2F80FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Mock Map Routing */}
            <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(47,128,255,0.5))' }}>
               <path d="M 200,300 C 300,200 400,400 500,250" fill="none" stroke="#2F80FF" strokeWidth="2" strokeDasharray="5,5" />
               <path d="M 500,250 C 600,100 700,300 800,200" fill="none" stroke="#2F80FF" strokeWidth="2" />
            </svg>

            {/* Map Nodes */}
            <motion.div className="absolute top-[280px] left-[180px] h-6 w-6 rounded-full bg-red-500/20 border border-red-500 flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)]">
               <AlertTriangle className="h-3 w-3 text-red-500" />
            </motion.div>
            <motion.div className="absolute top-[230px] left-[480px] h-8 w-8 rounded-full bg-[#2F80FF]/20 border border-[#2F80FF] flex items-center justify-center shadow-[0_0_15px_rgba(47,128,255,0.5)]">
               <Truck className="h-4 w-4 text-[#2F80FF]" />
            </motion.div>

            {/* Overlay Info Card */}
            <AnimatePresence mode="wait">
               <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bottom-6 left-6 w-72 bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl"
               >
                  <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Nearest Vendor Match</div>
                  <div className="text-white font-bold mb-1">Prime Towing BHM</div>
                  <div className="flex items-center gap-1 text-[#FF7A1A] mb-4">
                     {[...Array(5)].map((_,i)=><svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                     <span className="text-xs ml-1">4.9</span>
                  </div>
                  <div className="flex justify-between mb-4 pb-4 border-b border-white/10">
                     <div>
                        <div className="text-[10px] text-[#94A3B8] uppercase">ETA</div>
                        <div className="text-white font-mono">28 min</div>
                     </div>
                     <div>
                        <div className="text-[10px] text-[#94A3B8] uppercase">Distance</div>
                        <div className="text-white font-mono">12.4 mi</div>
                     </div>
                  </div>
                  <Button className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white text-xs h-8">Assign Vendor</Button>
               </motion.div>
            </AnimatePresence>
          </GlassPanel>

          {/* Right Queue */}
          <div className="lg:w-80 shrink-0">
             <GlassPanel className="p-4 h-full border-white/5 bg-[#0A192F]/30 flex flex-col">
                <div className="text-[11px] font-bold text-white uppercase tracking-widest mb-4 flex items-center justify-between">
                   Dispatch Queue
                   <span className="h-2 w-2 rounded-full bg-emerald-500" />
                </div>
                
                <div className="space-y-2 flex-1">
                   {[
                      { id: "#DP-78391", type: "Accident Recovery", loc: "Birmingham, AL", eta: "24 min" },
                      { id: "#DP-78292", type: "Battery Service", loc: "Atlanta, GA", eta: "32 min" },
                      { id: "#DP-78193", type: "Tire Change", loc: "Nashville, TN", eta: "18 min" }
                   ].map((item, i) => (
                      <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#2F80FF]/30 transition-colors cursor-pointer">
                         <div className="flex justify-between items-start mb-2">
                            <div className="text-[10px] font-mono text-[#2F80FF]">{item.id}</div>
                            <div className="text-[10px] text-emerald-400 font-mono">ETA {item.eta}</div>
                         </div>
                         <div className="text-sm font-bold text-white truncate">{item.type}</div>
                         <div className="text-xs text-[#94A3B8] truncate">{item.loc}</div>
                      </div>
                   ))}
                </div>
                
                <button className="text-[11px] font-bold text-[#2F80FF] hover:text-white transition-colors mt-4 w-full text-center py-2 border border-[#2F80FF]/20 rounded-lg">
                   View All Dispatches
                </button>
             </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
};
