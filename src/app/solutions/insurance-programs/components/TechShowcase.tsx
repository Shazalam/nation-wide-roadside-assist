'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
   BarChart3, Activity, Radio, Target,
   ChevronRight, ArrowUpRight, Zap, Globe,
   Shield, Database, PieChart, Clock, TrendingUp,
   CheckCircle
} from 'lucide-react';

const tabs = [
   { id: 'claims', label: 'Claims Telemetry', icon: Activity },
   { id: 'dispatch', label: 'Dispatch Intelligence', icon: Zap },
   { id: 'analytics', label: 'Predictive SLA Analytics', icon: Target },
];

export default function TechShowcase() {
   const [activeTab, setActiveTab] = useState('claims');

   return (
      <section className="py-32 bg-[#081120] relative overflow-hidden">
         <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

               {/* Left Side: Tabs & Controls */}
               <div className="lg:col-span-4 space-y-12">
                  <div>
                     <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
                        <Globe className="w-3.5 h-3.5 text-[#2F80FF]" />
                        <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Insurance Tech Stack</span>
                     </div>
                     <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
                        Operational Visibility. <br />
                        <span className="text-[#2F80FF]">Real-Time Control.</span>
                     </h2>
                     <p className="text-[#94A3B8] text-lg leading-relaxed">
                        Experience the next generation of roadside claims management. Real-time telemetry gives you total visibility across every incident, every dispatch, and every customer.
                     </p>
                  </div>

                  <div className="space-y-4">
                     {tabs.map((tab) => {
                        const Icon = tab.icon;
                        return (
                           <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`w-full flex items-center gap-5 p-6 rounded-3xl border transition-all duration-500 text-left group relative overflow-hidden ${activeTab === tab.id
                                    ? 'bg-[#0A192F] border-blue-500/40 shadow-2xl'
                                    : 'bg-transparent border-white/5 hover:border-white/10 hover:bg-white/5'
                                 }`}
                           >
                              <div className={`p-4 rounded-2xl transition-all duration-500 ${activeTab === tab.id ? 'bg-[#2F80FF] text-white' : 'bg-white/5 text-[#94A3B8] group-hover:text-white'
                                 }`}>
                                 <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                 <div className={`text-sm font-black uppercase tracking-widest ${activeTab === tab.id ? 'text-white' : 'text-[#94A3B8]'
                                    }`}>{tab.label}</div>
                                 <div className="text-[10px] font-mono text-[#94A3B8] mt-1">Enterprise Active Node</div>
                              </div>
                              <ChevronRight className={`w-5 h-5 transition-all duration-500 ${activeTab === tab.id ? 'text-[#2F80FF] translate-x-0' : 'text-white/10 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                                 }`} />
                           </button>
                        );
                     })}
                  </div>

                  <div className="bg-[#0A192F]/80 p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Database className="w-12 h-12 text-white" />
                     </div>
                     <div className="relative z-10">
                        <h4 className="text-white font-black uppercase tracking-wider mb-2">Live Cloud Sync</h4>
                        <p className="text-[10px] text-[#94A3B8] leading-relaxed mb-6">
                           Data is synchronized across all policy management platforms in under 150ms.
                        </p>
                        <div className="flex items-center gap-3">
                           <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                           <span className="text-[9px] font-mono text-emerald-500 uppercase font-bold tracking-widest">Connection: Secure (AES-256)</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Massive Operational Dashboard Overlay */}
               <div className="lg:col-span-8">
                  <div className="relative">
                     {/* Dashboard Backdrop Glow */}
                     <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] pointer-events-none" />

                     <div className="relative bg-[#0A192F]/90 backdrop-blur-3xl border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl min-h-[650px]">
                        {/* Header Bar */}
                        <div className="bg-[#081120] px-10 py-6 border-b border-white/5 flex items-center justify-between">
                           <div className="flex items-center gap-4">
                              <Activity className="w-6 h-6 text-[#2F80FF]" />
                              <div>
                                 <span className="text-[12px] font-black text-white uppercase tracking-[0.2em]">Operational Command v8.0</span>
                                 <div className="text-[9px] font-mono text-[#94A3B8] mt-1">NODE: GLOBAL_NORTH_INSURE // STATUS: OPTIMAL</div>
                              </div>
                           </div>
                           <div className="flex items-center gap-6">
                              <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                                 <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                 <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Live Operations</span>
                              </div>
                              <span className="text-[11px] font-mono text-[#94A3B8]">12:44:02 UTC</span>
                           </div>
                        </div>

                        <div className="p-10">
                           <AnimatePresence mode="wait">
                              {activeTab === 'claims' && (
                                 <motion.div
                                    key="claims"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    className="space-y-8"
                                 >
                                    {/* Map Visualization */}
                                    <div className="h-[450px] bg-[#081120] rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                                       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(47,128,255,0.08)_0%,transparent_70%)]" />
                                       <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />

                                       {/* Animated SVG Map Logic */}
                                       <svg className="w-full h-full p-20 overflow-visible">
                                          {[
                                             { x: 100, y: 150 }, { x: 300, y: 100 }, { x: 500, y: 250 },
                                             { x: 200, y: 300 }, { x: 600, y: 150 }, { x: 400, y: 350 }
                                          ].map((pt, i) => (
                                             <motion.g key={i}>
                                                <motion.circle
                                                   cx={pt.x} cy={pt.y} r="15" fill="#2F80FF" opacity="0.15"
                                                   animate={{ r: [15, 25, 15] }} transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                                                />
                                                <circle cx={pt.x} cy={pt.y} r="4" fill="#2F80FF" />
                                                {i % 2 === 0 && (
                                                   <motion.path
                                                      d={`M${pt.x},${pt.y} L${pt.x + 40},${pt.y - 40}`}
                                                      stroke="#2F80FF" strokeWidth="1" strokeDasharray="4 4"
                                                      animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, repeat: Infinity }}
                                                   />
                                                )}
                                             </motion.g>
                                          ))}
                                       </svg>

                                       <div className="absolute top-8 left-8 p-6 bg-[#0A192F]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl w-72">
                                          <div className="text-[10px] font-black text-white uppercase tracking-widest mb-4">Live Incident Matrix</div>
                                          <div className="space-y-3">
                                             {[
                                                { id: 'INC-784512', loc: 'I-75, Georgia', status: 'Tow' },
                                                { id: 'INC-784513', loc: 'I-10, Texas', status: 'Roadside Assist' },
                                                { id: 'INC-784514', loc: 'I-95, Florida', status: 'Tire Service' },
                                             ].map((inc, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                                   <div>
                                                      <div className="text-[11px] font-bold text-white">{inc.id}</div>
                                                      <div className="text-[9px] text-[#94A3B8]">{inc.loc} • {inc.status}</div>
                                                   </div>
                                                </div>
                                             ))}
                                          </div>
                                       </div>

                                       <div className="absolute bottom-8 right-8 flex gap-4">
                                          <div className="bg-[#0A192F]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-center">
                                             <div className="text-[9px] text-[#94A3B8] uppercase mb-1">Total Claims</div>
                                             <div className="text-xl font-black text-white font-mono">2,847</div>
                                          </div>
                                          <div className="bg-[#0A192F]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl text-center">
                                             <div className="text-[9px] text-[#94A3B8] uppercase mb-1">Efficiency</div>
                                             <div className="text-xl font-black text-emerald-400 font-mono">94.2%</div>
                                          </div>
                                       </div>
                                    </div>

                                    {/* Bottom Metrics Bar */}
                                    <div className="grid grid-cols-4 gap-6">
                                       {[
                                          { label: 'Active GPS', val: '12.4k', icon: Radio },
                                          { label: 'Resolution', val: '98.1%', icon: CheckCircle },
                                          { label: 'Latency', val: '14ms', icon: Clock },
                                          { label: 'Encryption', val: 'TLS 1.3', icon: Shield }
                                       ].map((m, i) => (
                                          <div key={i} className="bg-[#081120] rounded-2xl p-5 border border-white/5">
                                             <div className="flex items-center gap-2 mb-2">
                                                <m.icon className="w-3.5 h-3.5 text-[#2F80FF]" />
                                                <span className="text-[9px] text-[#94A3B8] uppercase tracking-widest">{m.label}</span>
                                             </div>
                                             <div className="text-2xl font-black text-white font-mono">{m.val}</div>
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
                                    className="grid grid-cols-2 gap-8"
                                 >
                                    <div className="bg-[#081120] rounded-[2.5rem] p-10 border border-white/5 space-y-8">
                                       <div className="text-xl font-black text-white uppercase tracking-wider">Dispatch Intelligence Queue</div>
                                       <div className="space-y-4">
                                          {[1, 2, 3, 4, 5].map(i => (
                                             <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center justify-between group hover:border-[#2F80FF]/30 transition-all">
                                                <div className="flex items-center gap-4">
                                                   <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                                      <Zap className="w-5 h-5 text-[#2F80FF]" />
                                                   </div>
                                                   <div>
                                                      <div className="text-xs font-black text-white">DISPATCH-NODE-0{i}</div>
                                                      <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest">Allocating Optimal Vendor...</div>
                                                   </div>
                                                </div>
                                                <div className="text-right">
                                                   <div className="text-[10px] font-mono text-emerald-400">SYNCED</div>
                                                   <div className="text-[9px] text-white/40">14:22:0{i}</div>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>

                                    <div className="bg-[#081120] rounded-[2.5rem] p-10 border border-white/5 flex flex-col justify-between">
                                       <div>
                                          <div className="text-xl font-black text-white uppercase tracking-wider mb-2">Vendor Availability</div>
                                          <p className="text-[11px] text-[#94A3B8] uppercase tracking-widest">Real-time Network Capacity</p>
                                       </div>
                                       <div className="flex-1 flex items-center justify-center py-12">
                                          {/* Circular Progress Visual */}
                                          <div className="relative w-48 h-48">
                                             <svg className="w-full h-full -rotate-90">
                                                <circle cx="96" cy="96" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16" />
                                                <circle cx="96" cy="96" r="80" fill="none" stroke="#2F80FF" strokeWidth="16" strokeDasharray="502" strokeDashoffset="75" strokeLinecap="round" />
                                             </svg>
                                             <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                <div className="text-4xl font-black text-white font-mono">85%</div>
                                                <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mt-1">Network Capacity</div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="grid grid-cols-2 gap-4">
                                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                             <div className="text-[10px] text-emerald-400 font-mono mb-1">AVAILABLE</div>
                                             <div className="text-xl font-black text-white">4,892</div>
                                          </div>
                                          <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-center">
                                             <div className="text-[10px] text-blue-400 font-mono mb-1">BUSY</div>
                                             <div className="text-xl font-black text-white">1,244</div>
                                          </div>
                                       </div>
                                    </div>
                                 </motion.div>
                              )}

                              {activeTab === 'analytics' && (
                                 <motion.div
                                    key="analytics"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.02 }}
                                    className="space-y-8"
                                 >
                                    <div className="bg-[#081120] rounded-[2.5rem] p-10 border border-white/5 h-[400px] flex flex-col">
                                       <div className="flex justify-between items-center mb-10">
                                          <div>
                                             <h3 className="text-xl font-black text-white uppercase tracking-wider">Predictive SLA Forecasting</h3>
                                             <p className="text-[11px] text-[#94A3B8] mt-1 font-mono uppercase tracking-widest">Horizon: 24h Ops Intelligence</p>
                                          </div>
                                          <div className="flex gap-4">
                                             <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#2F80FF]" />
                                                <span className="text-[10px] text-[#94A3B8] uppercase">Target SLA</span>
                                             </div>
                                             <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full bg-[#FF7A1A]" />
                                                <span className="text-[10px] text-[#94A3B8] uppercase">Actual Perf</span>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="flex-1 flex items-end gap-3 px-4">
                                          {[40, 55, 45, 70, 60, 85, 95, 80, 75, 65, 50, 45].map((h, i) => (
                                             <div key={i} className="flex-1 bg-[#2F80FF]/10 rounded-t-lg relative group">
                                                <motion.div
                                                   initial={{ height: 0 }}
                                                   animate={{ height: `${h}%` }}
                                                   className="absolute bottom-0 left-0 w-full bg-blue-500/30 rounded-t-lg group-hover:bg-blue-500/50 transition-all"
                                                />
                                                <motion.div
                                                   initial={{ height: 0 }}
                                                   animate={{ height: `${h - (i % 3 * 5)}%` }}
                                                   className="absolute bottom-0 left-1/4 w-1/2 bg-orange-500 rounded-t-lg group-hover:bg-orange-400 transition-all"
                                                />
                                             </div>
                                          ))}
                                       </div>
                                       <div className="flex justify-between mt-4 px-4 text-[9px] font-mono text-[#94A3B8] uppercase tracking-[0.2em]">
                                          <span>00:00</span>
                                          <span>06:00</span>
                                          <span>12:00</span>
                                          <span>18:00</span>
                                          <span>23:59</span>
                                       </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-8">
                                       <div className="bg-[#081120] rounded-3xl border border-white/5 p-8 flex items-center gap-6">
                                          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                             <PieChart className="w-7 h-7 text-[#2F80FF]" />
                                          </div>
                                          <div>
                                             <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">Fraud Risk Mesh</div>
                                             <div className="text-2xl font-black text-white font-mono">0.004%</div>
                                          </div>
                                       </div>
                                       <div className="bg-[#081120] rounded-3xl border border-white/5 p-8 flex items-center gap-6">
                                          <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                                             <Clock className="w-7 h-7 text-orange-500" />
                                          </div>
                                          <div>
                                             <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">Time To Assign</div>
                                             <div className="text-2xl font-black text-white font-mono">1.2m</div>
                                          </div>
                                       </div>
                                       <div className="bg-[#081120] rounded-3xl border border-white/5 p-8 flex items-center gap-6">
                                          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                                             <TrendingUp className="w-7 h-7 text-blue-400" />
                                          </div>
                                          <div>
                                             <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">Cost Efficiency</div>
                                             <div className="text-2xl font-black text-emerald-400 font-mono">+18.4%</div>
                                          </div>
                                       </div>
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
