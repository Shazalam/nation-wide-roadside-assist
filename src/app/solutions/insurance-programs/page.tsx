'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Activity, 
  Clock, 
  BarChart3, 
  Globe, 
  ArrowRight, 
  Terminal,
  Layers,
  Cpu,
  Database,
  Lock,
  Headphones,
  FileText,
  PieChart,
  Truck,
  Search,
  Code,
  MapPin,
  CheckCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  Cell
} from 'recharts';

import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { Badge } from '@/components/ui/badge';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { LandingLayout } from '@/components/layout/landing-layout';
import { cn } from '@/lib/utils';

// Mock Data
const slaData = [
  { name: 'NY-HUB', score: 98.2 },
  { name: 'TX-HUB', score: 95.8 },
  { name: 'CA-HUB', score: 99.1 },
  { name: 'FL-HUB', score: 94.2 },
  { name: 'IL-HUB', score: 97.5 },
];

const trafficData = [
  { time: '12:00', req: 420 },
  { time: '12:05', req: 580 },
  { time: '12:10', req: 490 },
  { time: '12:15', req: 720 },
  { time: '12:20', req: 640 },
  { time: '12:25', req: 890 },
  { time: '12:30', req: 950 },
];

export default function InsuranceProgramsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('claims');

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LandingLayout>
      <div className="bg-[#081120] text-white min-h-screen overflow-hidden">
        
        {/* Grid Background Texture */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-20" 
          style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(47, 128, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} 
        />

        {/* Hero Section */}
        <section className="relative pt-32 pb-24 z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]"
                >
                  <span className="opacity-50">Solutions</span>
                  <ArrowRight className="h-3 w-3 opacity-30" />
                  <span>Insurance Programs</span>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]"
                >
                  Enterprise Roadside <br />
                  <span className="bg-gradient-to-r from-brand-blue via-emerald-400 to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">
                    Infrastructure
                  </span> for Insurers
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-brand-slate leading-relaxed max-w-xl"
                >
                  Nationwide dispatch intelligence, SLA-driven roadside operations, and API-first claims workflows engineered for insurers, motor clubs, and enterprise mobility providers.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-14 px-8 rounded-xl shadow-[0_0_30px_rgba(47,128,255,0.4)]">
                    Schedule Enterprise Demo
                  </Button>
                  <Button variant="ghost" size="lg" className="text-white border border-white/10 hover:bg-white/5 font-bold h-14 px-8 rounded-xl">
                    View API Documentation
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4 pt-8"
                >
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    <p className="text-2xl font-black text-white">97.8%</p>
                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">SLA Compliance</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
                    <p className="text-2xl font-black text-white">2.4M+</p>
                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Dispatch Events</p>
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Massive Floating Dashboard */}
              <div className="lg:col-span-6 relative h-[600px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative w-full h-full perspective-1000"
                >
                  <GlassPanel className="absolute inset-0 bg-brand-navy/60 border-white/10 shadow-2xl overflow-hidden p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Operational Intelligence Mesh</span>
                      </div>
                      <div className="flex gap-2">
                         <div className="h-1.5 w-8 rounded-full bg-white/10" />
                         <div className="h-1.5 w-4 rounded-full bg-brand-blue" />
                      </div>
                    </div>

                    <div className="flex-1 rounded-2xl bg-brand-bg/40 border border-white/5 relative overflow-hidden flex items-center justify-center">
                       <div className="absolute inset-0 opacity-10 bg-[url('/grid-dark.png')] bg-repeat" />
                       <Globe className="h-64 w-64 text-brand-blue/20" />
                       
                       {[...Array(12)].map((_, i) => (
                         <motion.div
                           key={i}
                           initial={{ scale: 0, opacity: 0 }}
                           animate={{ 
                             scale: [1, 1.5, 1], 
                             opacity: [0.5, 1, 0.5],
                             x: Math.random() * 400 - 200,
                             y: Math.random() * 300 - 150
                           }}
                           transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                           className="absolute h-2 w-2 rounded-full bg-brand-blue shadow-[0_0_10px_#2F80FF]"
                         />
                       ))}

                       <GlassPanel className="absolute bottom-6 right-6 p-4 w-48 bg-brand-navy/80 border-brand-blue/30 shadow-xl">
                          <p className="text-[8px] font-bold text-brand-slate uppercase tracking-tighter mb-2">SLA Performance</p>
                          <div className="h-24 w-full">
                            {isMounted && (
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={slaData.slice(0, 3)}>
                                  <Bar dataKey="score" fill="#2F80FF" radius={[2, 2, 0, 0]} />
                                </BarChart>
                              </ResponsiveContainer>
                            )}
                          </div>
                       </GlassPanel>

                       <motion.div 
                         animate={{ y: [0, -10, 0] }}
                         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                         className="absolute top-10 left-10"
                       >
                         <GlassPanel className="p-3 bg-white/5 border-white/10 backdrop-blur-xl w-40">
                            <div className="flex justify-between items-start mb-2">
                               <Badge className="bg-amber-500/10 text-amber-500 border-amber-500/20 text-[8px] px-1 h-4">Active</Badge>
                               <span className="text-[8px] text-brand-slate font-mono">INC-291</span>
                            </div>
                            <p className="text-[10px] font-bold text-white mb-1">Towing Request</p>
                            <p className="text-[8px] text-brand-slate truncate">Houston, TX • Node 14B</p>
                         </GlassPanel>
                       </motion.div>
                    </div>

                    <div className="h-20 mt-6 grid grid-cols-3 gap-4">
                       <div className="rounded-xl bg-white/5 border border-white/5 p-3">
                          <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-1">Live RPS</p>
                          <p className="text-lg font-black text-brand-blue">1,284</p>
                       </div>
                       <div className="rounded-xl bg-white/5 border border-white/5 p-3">
                          <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-1">Avg Latency</p>
                          <p className="text-lg font-black text-emerald-400">84ms</p>
                       </div>
                       <div className="rounded-xl bg-white/5 border border-white/5 p-3">
                          <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-1">Nodes Active</p>
                          <p className="text-lg font-black text-amber-500">42</p>
                       </div>
                    </div>
                  </GlassPanel>

                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-blue/20 blur-[100px] rounded-full" />
                  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust & Compliance Bar */}
        <section className="relative z-10 py-12 border-y border-white/5 bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center gap-16 animate-marquee grayscale opacity-40 hover:opacity-100 transition-opacity">
                  {['AAA', 'HONK', 'WEX', 'GEICO', 'Agero', 'Enterprise'].map((partner) => (
                    <span key={partner} className="text-2xl font-black tracking-tighter text-white">{partner}</span>
                  ))}
                  {['AAA', 'HONK', 'WEX', 'GEICO', 'Agero', 'Enterprise'].map((partner) => (
                    <span key={partner + '2'} className="text-2xl font-black tracking-tighter text-white">{partner}</span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6">
                {[
                  { label: 'SOC 2 Type II', icon: ShieldCheck },
                  { label: 'ISO 27001', icon: Lock },
                  { label: 'PCI-DSS', icon: ShieldCheck },
                  { label: 'GDPR Ready', icon: Globe }
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <badge.icon className="h-3 w-3 text-brand-blue" />
                    <span className="text-[10px] font-bold text-brand-slate whitespace-nowrap">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Capabilities Grid */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Built for Operational Resilience</h2>
              <p className="text-brand-slate text-lg">Every node in our mesh is engineered to handle massive roadside event volume with zero-fail redundancy.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "White-Label Roadside Operations",
                  desc: "Sovereign branded experiences from initial request to final resolution, unified across mobile and web.",
                  icon: Headphones,
                  color: "from-brand-blue/20 to-transparent"
                },
                {
                  title: "Claims & Dispatch Intelligence",
                  desc: "AI-driven routing logic that optimizes for cost-per-mile and real-time SLA compliance.",
                  icon: Activity,
                  color: "from-emerald-400/20 to-transparent"
                },
                {
                  title: "API-Driven Integrations",
                  desc: "RESTful architecture designed for deep embedding into existing policy management and core insurance systems.",
                  icon: Cpu,
                  color: "from-amber-400/20 to-transparent"
                }
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassPanel className={cn(
                    "p-8 h-full border-white/5 hover:border-brand-blue/30 transition-all group relative overflow-hidden",
                    "bg-gradient-to-br"
                  )}>
                    <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500", card.color)} />
                    <div className="relative z-10">
                      <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                        <card.icon className="h-7 w-7 text-brand-blue" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                      <p className="text-brand-slate text-sm leading-relaxed mb-8">{card.desc}</p>
                      
                      <div className="mt-auto h-32 rounded-xl bg-black/40 border border-white/5 overflow-hidden flex items-end justify-center p-2">
                         <div className="w-full space-y-2">
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: '80%' }}
                                 transition={{ duration: 1, delay: 0.5 }}
                                 className="h-full bg-brand-blue" 
                               />
                            </div>
                            <div className="h-1.5 w-2/3 bg-white/5 rounded-full overflow-hidden">
                               <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: '60%' }}
                                 transition={{ duration: 1, delay: 0.7 }}
                                 className="h-full bg-emerald-400" 
                               />
                            </div>
                         </div>
                      </div>
                    </div>
                  </GlassPanel>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technology Showcase */}
        <section className="relative z-10 py-32 bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-4 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl lg:text-4xl font-black text-white">Advanced Core Orchestration</h2>
                  <p className="text-brand-slate">Switch between operational modes to see how our mesh handles different event types.</p>
                </div>

                <div className="space-y-4">
                  {[
                    { id: 'claims', label: 'Claims Telemetry', icon: Activity },
                    { id: 'dispatch', label: 'Dispatch Intelligence', icon: Zap },
                    { id: 'sla', label: 'Predictive SLA Analytics', icon: ShieldCheck }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "w-full flex items-center gap-4 p-6 rounded-2xl border transition-all text-left group",
                        activeTab === tab.id 
                          ? "bg-brand-blue/10 border-brand-blue/40 shadow-[0_0_20px_rgba(47,128,255,0.1)]" 
                          : "bg-white/[0.02] border-white/5 hover:border-white/10"
                      )}
                    >
                      <div className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center transition-colors",
                        activeTab === tab.id ? "bg-brand-blue text-white" : "bg-white/5 text-brand-slate"
                      )}>
                        <tab.icon className="h-5 w-5" />
                      </div>
                      <span className={cn(
                        "font-bold transition-colors",
                        activeTab === tab.id ? "text-white" : "text-brand-slate group-hover:text-white"
                      )}>{tab.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8">
                 <AnimatePresence mode="wait">
                   <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                   >
                     <GlassPanel className="p-8 bg-brand-navy/60 border-white/10 min-h-[500px] flex flex-col relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10 bg-[url('/grid-dark.png')] bg-repeat" />

                        <div className="flex justify-between items-center mb-10 relative z-10">
                           <div className="flex items-center gap-4">
                              <h3 className="text-lg font-bold text-white uppercase tracking-widest">
                                {activeTab === 'claims' ? 'Global Claims Mesh' : activeTab === 'dispatch' ? 'Dispatch Routing Node' : 'SLA Performance Grid'}
                              </h3>
                              <StatusIndicator status="online" pulse label="Streaming" />
                           </div>
                           <div className="flex gap-4">
                              <div className="h-1 w-12 rounded-full bg-brand-blue" />
                              <div className="h-1 w-12 rounded-full bg-white/10" />
                           </div>
                        </div>

                        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
                           <div className="lg:col-span-8 space-y-8">
                              <div className="h-64 rounded-2xl bg-white/[0.02] border border-white/5 p-4">
                                 {isMounted && (
                                   <ResponsiveContainer width="100%" height="100%">
                                      {activeTab === 'claims' ? (
                                        <AreaChart data={trafficData}>
                                          <defs>
                                            <linearGradient id="colorReq" x1="0" y1="0" x2="0" y2="1">
                                              <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                                              <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                                            </linearGradient>
                                          </defs>
                                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                          <Tooltip contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)' }} />
                                          <Area type="monotone" dataKey="req" stroke="#2F80FF" fillOpacity={1} fill="url(#colorReq)" />
                                        </AreaChart>
                                      ) : activeTab === 'dispatch' ? (
                                        <LineChart data={trafficData}>
                                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                                          <Line type="step" dataKey="req" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
                                        </LineChart>
                                      ) : (
                                        <BarChart data={slaData}>
                                          <Bar dataKey="score" fill="#2F80FF" radius={[4, 4, 0, 0]}>
                                            {slaData.map((entry, index) => (
                                              <Cell key={`cell-${index}`} fill={index === 2 ? '#2F80FF' : '#1e293b'} />
                                            ))}
                                          </Bar>
                                        </BarChart>
                                      )}
                                   </ResponsiveContainer>
                                 )}
                              </div>

                              <div className="grid grid-cols-2 gap-6">
                                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-2">Network Load</p>
                                    <div className="flex items-end gap-3">
                                       <span className="text-3xl font-black text-white">42%</span>
                                       <span className="text-emerald-400 text-xs font-bold mb-1">Optimal</span>
                                    </div>
                                 </div>
                                 <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                                    <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-2">Active Events</p>
                                    <div className="flex items-end gap-3">
                                       <span className="text-3xl font-black text-white">12.4k</span>
                                       <span className="text-brand-blue text-xs font-bold mb-1">+12%</span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className="lg:col-span-4 space-y-6">
                              {[1, 2, 3].map((i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4">
                                   <div className="h-8 w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center">
                                      <Globe className="h-4 w-4 text-brand-blue" />
                                   </div>
                                   <div className="flex-1">
                                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-1">
                                         <div className="h-full bg-brand-blue w-2/3" />
                                      </div>
                                      <p className="text-[8px] text-brand-slate font-mono">Node ID: OPER-Mesh-{i}</p>
                                   </div>
                                </div>
                              ))}
                              
                              <div className="flex-1 mt-6 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-4 relative overflow-hidden">
                                 <p className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4">SLA Watch</p>
                                 <div className="flex justify-between items-center">
                                    <span className="text-2xl font-black text-white">99.2%</span>
                                    <Activity className="h-8 w-8 text-brand-blue opacity-50" />
                                 </div>
                                 <div className="absolute -bottom-4 -right-4 h-16 w-16 bg-brand-blue/20 blur-xl rounded-full" />
                              </div>
                           </div>

                        </div>
                     </GlassPanel>
                   </motion.div>
                 </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Workflow Timeline */}
        <section className="relative z-10 py-32 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-white mb-4 tracking-tight">The Operational Mesh</h2>
              <p className="text-brand-slate">From request to resolution, every event is tracked across our global infrastructure.</p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-0 hidden lg:block" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
                {[
                  { label: "Request Initiated", icon: Headphones, step: "01" },
                  { label: "Claims Validation", icon: ShieldCheck, step: "02" },
                  { label: "Intelligent Routing", icon: Zap, step: "03" },
                  { label: "Live Tracking", icon: MapPin, step: "04" },
                  { label: "Resolution", icon: CheckCircle, step: "05" },
                  { label: "Auto-Settlement", icon: FileText, step: "06" }
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center group"
                  >
                    <div className="h-16 w-16 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-center mb-6 group-hover:border-brand-blue transition-colors relative">
                       <item.icon className="h-6 w-6 text-brand-blue" />
                       <span className="absolute -top-3 -right-3 text-[10px] font-bold text-brand-blue font-mono bg-brand-bg px-2 py-1 rounded-full border border-brand-blue/30">{item.step}</span>
                    </div>
                    <p className="text-sm font-bold text-white text-center">{item.label}</p>
                    <div className="h-2 w-2 rounded-full bg-brand-blue/30 mt-4 group-hover:bg-brand-blue transition-colors" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. Industry Ecosystem Section */}
        <section className="relative z-10 py-32 bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
               <div className="max-w-2xl">
                  <h2 className="text-4xl font-black text-white mb-4">The Mobility Intelligence Ecosystem</h2>
                  <p className="text-brand-slate text-lg">Specialized infrastructure nodes for every segment of the insurance and mobility landscape.</p>
               </div>
               <Button variant="ghost" className="text-brand-blue font-bold gap-2">
                  Download Ecosystem Report <ArrowRight className="h-4 w-4" />
               </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Motor Clubs", metric: "99.9%", label: "Uptime", icon: Users },
                { title: "Insurance Carriers", metric: "15m", label: "Avg Dispatch", icon: ShieldCheck },
                { title: "Connected Fleet", metric: "84k", label: "Assets", icon: Truck },
                { title: "Enterprise Platforms", metric: "1.2k", label: "RPS Peak", icon: Layers }
              ].map((item, i) => (
                <GlassPanel key={item.title} className="p-8 border-white/5 bg-brand-navy/40 hover:border-brand-blue/30 transition-all group">
                   <div className="h-10 w-10 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6">
                      <item.icon className="h-5 w-5 text-brand-blue" />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-6">{item.title}</h3>
                   <div className="space-y-1">
                      <p className="text-3xl font-black text-white">{item.metric}</p>
                      <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">{item.label}</p>
                   </div>
                   <div className="mt-8 pt-6 border-t border-white/5">
                      <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: '70%' }}
                           className="h-full bg-brand-blue" 
                         />
                      </div>
                   </div>
                </GlassPanel>
              ))}
            </div>
          </div>
        </section>

        {/* 7. API Infrastructure Section */}
        <section className="relative z-10 py-32">
          <div className="container mx-auto px-4">
             <GlassPanel className="bg-[#0A192F]/80 border-white/10 p-8 lg:p-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                   <div className="lg:col-span-5 space-y-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
                         <Terminal className="h-3 w-3 text-brand-blue" />
                         <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Developer Hub</span>
                      </div>
                      <h2 className="text-4xl font-black text-white leading-tight">API-First <br /> Mobility Backbone</h2>
                      <p className="text-brand-slate leading-relaxed">
                        Integrate our nationwide dispatch mesh directly into your core systems with just a few lines of code. Support for REST, Webhooks, and Native SDKs.
                      </p>
                      <div className="space-y-4">
                         {["OAuth 2.0 Secure Authentication", "Real-time Webhook Event Stream", "Idempotent API Operations", "Comprehensive SDK Coverage"].map((feature) => (
                           <div key={feature} className="flex items-center gap-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                              <span className="text-sm text-white font-medium">{feature}</span>
                           </div>
                         ))}
                      </div>
                      <div className="pt-4">
                         <Button className="bg-brand-blue text-white font-bold gap-2 rounded-xl h-12 px-6">
                            Explore Documentation <Code className="h-4 w-4" />
                         </Button>
                      </div>
                   </div>

                   <div className="lg:col-span-7">
                      <div className="rounded-2xl bg-[#030812] border border-white/10 shadow-2xl overflow-hidden">
                         <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/5">
                            <div className="flex gap-1.5">
                               <div className="h-3 w-3 rounded-full bg-rose-500/50" />
                               <div className="h-3 w-3 rounded-full bg-amber-500/50" />
                               <div className="h-3 w-3 rounded-full bg-emerald-500/50" />
                            </div>
                            <span className="text-[10px] font-mono text-brand-slate uppercase">dispatch_request.js</span>
                         </div>
                         <div className="p-8 font-mono text-sm leading-relaxed overflow-x-auto">
                            <pre className="text-brand-blue">
{`const dispatch = await nwt.dispatches.create({
  incident_type: 'towing',
  location: {
    lat: 40.7128,
    lng: -74.0060,
    address: 'Times Square, NY'
  },
  vehicle: {
    vin: '1N4AL3AP5KC...',
    make: 'Tesla',
    model: 'Model 3'
  },
  policy_id: 'POL-8291-02'
});`}
                            </pre>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 blur-[100px] rounded-full -mr-48 -mt-48" />
             </GlassPanel>
          </div>
        </section>

        {/* 8. Final CTA Section */}
        <section className="relative z-10 py-32 overflow-hidden">
          <div className="container mx-auto px-4">
             <div className="relative rounded-[3rem] overflow-hidden bg-brand-blue/5 border border-white/5 p-12 lg:p-24 text-center">
                <div className="absolute inset-0 opacity-10 bg-[url('/grid-dark.png')] bg-repeat" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-bg/80" />
                <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                   <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">Modernize Your Insurance <br /> <span className="text-brand-blue">Infrastructure</span></h2>
                   <p className="text-xl text-brand-slate leading-relaxed">Connect with Nationwide Trans Inc. to streamline roadside dispatch, automate claims workflows, and improve enterprise mobility operations.</p>
                   <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] text-lg">Contact Enterprise Team</Button>
                      <Button variant="ghost" size="lg" className="text-white border border-white/10 hover:bg-white/5 font-bold h-16 px-10 rounded-2xl text-lg">Request Capability Report</Button>
                   </div>
                </div>
             </div>
          </div>
        </section>

      </div>
    </LandingLayout>
  );
}

function Users(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
