'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, Map as MapIcon, Activity, Radio, 
  ChevronRight, ArrowUp, ArrowDown, Zap, 
  Target, Shield, Globe
} from 'lucide-react';

const tabs = [
  { id: 'telemetry', label: 'Fleet Telemetry', icon: Radio },
  { id: 'dispatch', label: 'Recovery Dispatch', icon: Zap },
  { id: 'predictive', label: 'Predictive Intelligence', icon: Target },
];

export default function TechShowcase() {
  const [activeTab, setActiveTab] = useState('telemetry');

  return (
    <section className="py-32 bg-[#081120] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: Tabs & Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                <Globe className="w-3 h-3 text-[#2F80FF]" />
                <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Technology Showcase</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
                Advanced Recovery Technology
              </h2>
              <p className="text-[#94A3B8] text-lg leading-relaxed">
                Experience the next generation of recovery operations. Our proprietary technology stack provides unparalleled visibility and intelligence for enterprise fleets.
              </p>
            </div>

            <div className="space-y-3">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left group ${
                      activeTab === tab.id 
                      ? 'bg-[#0A192F] border-blue-500/30 shadow-[0_10px_30px_rgba(47,128,255,0.1)]' 
                      : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5'
                    }`}
                  >
                    <div className={`p-3 rounded-xl transition-colors ${
                      activeTab === tab.id ? 'bg-[#2F80FF] text-white' : 'bg-white/5 text-[#94A3B8] group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm font-black uppercase tracking-widest ${
                        activeTab === tab.id ? 'text-white' : 'text-[#94A3B8]'
                      }`}>{tab.label}</div>
                      <div className="text-[10px] font-mono text-[#94A3B8] mt-1">v8.4 Operating Engine</div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${
                      activeTab === tab.id ? 'text-[#2F80FF] translate-x-0' : 'text-white/10 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-8 border-t border-white/5">
               <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-white/5">
                    <Shield className="w-6 h-6 text-[#2F80FF]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Enterprise Security</div>
                    <div className="text-[10px] text-[#94A3B8] font-mono mt-1">End-to-End Encryption Enabled</div>
                  </div>
               </div>
            </div>
          </div>

          {/* Right Side: Massive Operational Dashboard */}
          <div className="lg:col-span-8">
            <div className="relative group">
               {/* Dashboard Glow */}
               <div className="absolute -inset-1 bg-gradient-to-br from-[#2F80FF]/20 via-transparent to-[#FF7A1A]/10 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
               
               <div className="relative bg-[#0A192F]/90 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                 {/* Header */}
                 <div className="bg-[#081120] px-8 py-5 border-b border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-3">
                     <MapIcon className="w-5 h-5 text-[#2F80FF]" />
                     <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">Live Recovery Operations Mesh</span>
                   </div>
                   <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full">
                       <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest">Network Online</span>
                     </div>
                     <span className="text-[10px] font-mono text-[#94A3B8]">Region: Global North</span>
                   </div>
                 </div>

                 <div className="p-8">
                    <AnimatePresence mode="wait">
                      {activeTab === 'telemetry' && (
                        <motion.div
                          key="telemetry"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="space-y-8"
                        >
                          {/* Map Visualization Proxy */}
                          <div className="h-[400px] bg-[#081120] rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 pointer-events-none">
                              {/* Grid lines */}
                              <div className="absolute inset-0 bg-[linear-gradient(rgba(47,128,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(47,128,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
                            </div>
                            
                            {/* Animated Pulse Nodes */}
                            {[
                              { t: '15%', l: '20%' }, { t: '40%', l: '60%' }, { t: '70%', l: '30%' },
                              { t: '25%', l: '75%' }, { t: '60%', l: '15%' }, { t: '80%', l: '85%' }
                            ].map((pos, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                className="absolute w-4 h-4"
                                style={{ top: pos.t, left: pos.l }}
                              >
                                <div className="absolute inset-0 bg-[#2F80FF] rounded-full blur-md opacity-50" />
                                <div className="absolute inset-1 bg-[#2F80FF] rounded-full border border-white/20" />
                              </motion.div>
                            ))}

                            <div className="relative text-center">
                              <Activity className="w-12 h-12 text-[#2F80FF] mx-auto mb-4 animate-pulse" />
                              <div className="text-xl font-black text-white font-mono uppercase tracking-[0.3em]">Telemetry Active</div>
                              <div className="text-[10px] text-[#94A3B8] font-mono mt-2 tracking-widest">Streaming 14,284 nodes in real-time</div>
                            </div>

                            {/* Bottom overlay UI */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                               <div className="space-y-2">
                                  <div className="text-[9px] font-mono text-[#94A3B8] uppercase">Signal Strength</div>
                                  <div className="flex gap-1">
                                    {[1,2,3,4,5].map(j => <div key={j} className="w-1 h-3 bg-[#2F80FF] rounded-full" />)}
                                  </div>
                               </div>
                               <div className="flex gap-4">
                                  <div className="bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
                                     <div className="text-[9px] text-[#94A3B8] uppercase mb-1">Packet Loss</div>
                                     <div className="text-sm font-black text-white font-mono">0.002%</div>
                                  </div>
                                  <div className="bg-[#0A192F]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
                                     <div className="text-[9px] text-[#94A3B8] uppercase mb-1">Latency</div>
                                     <div className="text-sm font-black text-white font-mono">14ms</div>
                                  </div>
                               </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-4">
                             {[
                               { label: 'Active GPS', val: '9,482', icon: Radio },
                               { label: 'Asset Load', val: '64%', icon: Activity },
                               { label: 'Network Res', val: '4K', icon: Globe },
                               { label: 'Encryption', val: 'AES-256', icon: Shield }
                             ].map((m, i) => (
                               <div key={i} className="bg-[#081120] rounded-xl p-4 border border-white/5">
                                 <div className="flex items-center gap-2 mb-2">
                                   <m.icon className="w-3 h-3 text-[#2F80FF]" />
                                   <span className="text-[9px] text-[#94A3B8] uppercase tracking-widest">{m.label}</span>
                                 </div>
                                 <div className="text-xl font-black text-white font-mono">{m.val}</div>
                               </div>
                             ))}
                          </div>
                        </motion.div>
                      )}

                      {activeTab === 'dispatch' && (
                        <motion.div
                          key="dispatch"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="space-y-6"
                        >
                           <div className="grid grid-cols-2 gap-6">
                              <div className="bg-[#081120] rounded-2xl p-6 border border-white/5 space-y-6">
                                 <div className="text-sm font-black text-white uppercase tracking-widest">Active Dispatch Queue</div>
                                 <div className="space-y-4">
                                    {[1,2,3,4].map(k => (
                                      <div key={k} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                                         <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-[#2F80FF]/20 flex items-center justify-center">
                                               <Truck className="w-4 h-4 text-[#2F80FF]" />
                                            </div>
                                            <div>
                                               <div className="text-xs font-bold text-white">ID-REC-{4000+k}</div>
                                               <div className="text-[9px] text-[#94A3B8]">I-95 North Corridor</div>
                                            </div>
                                         </div>
                                         <div className="text-right">
                                            <div className="text-[10px] font-black text-white font-mono">14m ETA</div>
                                            <div className="text-[8px] text-emerald-400 uppercase tracking-widest">Assigned</div>
                                         </div>
                                      </div>
                                    ))}
                                 </div>
                              </div>
                              <div className="bg-[#081120] rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                                 <div className="text-sm font-black text-white uppercase tracking-widest mb-6">Dispatch Efficiency</div>
                                 <div className="flex-1 flex items-center justify-center">
                                    {/* Efficiency Gauge Visual */}
                                    <div className="relative w-48 h-48 flex items-center justify-center">
                                       <svg className="w-full h-full transform -rotate-90">
                                          <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                                          <circle cx="96" cy="96" r="80" fill="none" stroke="#2F80FF" strokeWidth="12" 
                                             strokeDasharray={502.6} strokeDashoffset={50} strokeLinecap="round" />
                                       </svg>
                                       <div className="absolute inset-0 flex flex-col items-center justify-center">
                                          <div className="text-4xl font-black text-white font-mono">92%</div>
                                          <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mt-1">SLA Match</div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="mt-8 grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                       <div className="text-xs font-black text-white font-mono">1.2m</div>
                                       <div className="text-[8px] text-[#94A3B8] uppercase mt-1">Avg Assign Time</div>
                                    </div>
                                    <div className="text-center">
                                       <div className="text-xs font-black text-white font-mono">24/7</div>
                                       <div className="text-[8px] text-[#94A3B8] uppercase mt-1">Operations</div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                      )}

                      {activeTab === 'predictive' && (
                        <motion.div
                          key="predictive"
                          initial={{ opacity: 0, scale: 0.98 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.02 }}
                          className="space-y-6"
                        >
                           <div className="bg-[#081120] rounded-2xl p-8 border border-white/5">
                              <div className="flex justify-between items-center mb-8">
                                 <div>
                                    <div className="text-sm font-black text-white uppercase tracking-widest">Incident Density Forecasting</div>
                                    <div className="text-[10px] text-[#94A3B8] mt-1 font-mono">Predictive Horizon: 24 Hours</div>
                                 </div>
                                 <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                                    <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest">AI Engine Active</span>
                                 </div>
                              </div>
                              
                              <div className="h-64 flex items-end gap-3 px-4">
                                 {[60, 45, 80, 55, 90, 70, 40, 85, 95, 65, 50, 75].map((h, i) => (
                                    <div key={i} className="flex-1 group relative">
                                       <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A192F] px-2 py-1 rounded border border-white/10 text-[9px] font-mono text-white">
                                          {h}%
                                       </div>
                                       <div 
                                          className="w-full bg-gradient-to-t from-[#2F80FF]/20 to-[#2F80FF] rounded-t-lg transition-all duration-500 group-hover:opacity-80"
                                          style={{ height: `${h}%` }}
                                       />
                                    </div>
                                 ))}
                              </div>
                              <div className="flex justify-between mt-4 px-4 text-[9px] font-mono text-[#94A3B8] uppercase tracking-widest">
                                 <span>00:00</span>
                                 <span>06:00</span>
                                 <span>12:00</span>
                                 <span>18:00</span>
                                 <span>23:59</span>
                              </div>
                           </div>

                           <div className="grid grid-cols-3 gap-6">
                              {[
                                { label: 'Risk Score', val: 'Low', color: 'text-emerald-400' },
                                { label: 'Predicted Events', val: '142', color: 'text-white' },
                                { label: 'Confidence', val: '94.2%', color: 'text-[#2F80FF]' }
                              ].map((p, i) => (
                                <div key={i} className="bg-[#081120] rounded-xl p-4 border border-white/5 text-center">
                                   <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-1">{p.label}</div>
                                   <div className={`text-xl font-black font-mono ${p.color}`}>{p.val}</div>
                                </div>
                              ))}
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Truck({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    >
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v10h2" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}
