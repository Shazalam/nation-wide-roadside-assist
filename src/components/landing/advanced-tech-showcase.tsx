'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { TelemetryIndicator } from '@/components/ui/telemetry-indicator';
import { 
  Activity, 
  Cpu, 
  Globe, 
  Zap, 
  BarChart3, 
  ShieldCheck, 
  Navigation,
  ArrowRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: '00:00', load: 400, capacity: 240 },
  { name: '04:00', load: 300, capacity: 139 },
  { name: '08:00', load: 200, capacity: 980 },
  { name: '12:00', load: 278, capacity: 390 },
  { name: '16:00', load: 189, capacity: 480 },
  { name: '20:00', load: 239, capacity: 380 },
  { name: '23:59', load: 349, capacity: 430 },
];

const tabs = [
  {
    id: 'telemetry',
    title: 'Live Telemetry',
    desc: 'Real-time asset tracking with sub-millisecond precision.',
    icon: Activity,
    color: 'brand-blue'
  },
  {
    id: 'dispatch',
    title: 'Automated Dispatch',
    desc: 'AI-driven routing mesh for sub-15 minute response times.',
    icon: Zap,
    color: 'emerald-500'
  },
  {
    id: 'predictive',
    title: 'Predictive Analytics',
    desc: 'Demand forecasting and fleet saturation modeling.',
    icon: BarChart3,
    color: 'brand-orange'
  }
];

export const AdvancedTechShowcase = () => {
  const [activeTab, setActiveTab] = useState('telemetry');

  return (
    <section className="py-32 relative overflow-hidden bg-brand-bg transition-colors duration-500">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none opacity-50 dark:opacity-100" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left Side: Interactive Controls */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20"
              >
                <Cpu className="h-4 w-4 text-brand-blue" />
                <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Enterprise Intelligence</span>
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
                Infrastructure for the <span className="text-brand-blue">Next Era</span> of Mobility
              </h2>
            </div>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group relative overflow-hidden ${
                    activeTab === tab.id 
                      ? 'bg-card/40 border-brand-border shadow-lg dark:shadow-2xl dark:bg-white/5 dark:border-brand-border' 
                      : 'bg-transparent border-transparent hover:bg-foreground/[0.02]'
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="active-bg"
                      className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-transparent pointer-events-none"
                    />
                  )}
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-all ${
                      activeTab === tab.id 
                        ? `bg-brand-blue/10 border-brand-blue/30 text-brand-blue` 
                        : 'bg-foreground/[0.03] border-brand-border text-brand-slate'
                    }`}>
                      <tab.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-1 transition-colors ${
                        activeTab === tab.id ? 'text-foreground' : 'text-brand-slate group-hover:text-foreground'
                      }`}>
                        {tab.title}
                      </h3>
                      <p className="text-sm text-brand-slate line-clamp-2">{tab.desc}</p>
                    </div>
                    {activeTab === tab.id && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <ArrowRight className="h-5 w-5 text-brand-blue" />
                      </motion.div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side: Isometric Dashboard Visualization */}
          <div className="lg:col-span-7 relative h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full perspective-[2000px]">
              
              {/* Base Layer: Global Mesh Map */}
              <motion.div
                animate={{ 
                  rotateX: activeTab === 'telemetry' ? 50 : 45,
                  rotateZ: activeTab === 'telemetry' ? -35 : -30,
                  y: activeTab === 'telemetry' ? 0 : 20,
                  opacity: 1
                }}
                className="absolute inset-0 bg-card border border-brand-border rounded-[3rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] dark:bg-card dark:border-brand-border dark:shadow-2xl overflow-hidden transition-colors duration-500"
              >
                <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle, var(--brand-blue) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                
                {/* Animated Map Points */}
                <div className="absolute top-[40%] left-[30%] h-3 w-3 bg-brand-blue rounded-full shadow-[0_0_15px_var(--brand-blue)] animate-pulse" />
                <div className="absolute top-[60%] left-[50%] h-3 w-3 bg-brand-blue rounded-full shadow-[0_0_15px_var(--brand-blue)] animate-pulse delay-700" />
                <div className="absolute top-[30%] left-[70%] h-3 w-3 bg-emerald-500 rounded-full shadow-[0_0_15px_#10B981] animate-pulse delay-300" />
                
                <div className="absolute bottom-12 left-12">
                   <div className="flex items-center gap-2 mb-2">
                     <Globe className="h-4 w-4 text-brand-blue" />
                     <span className="text-[10px] font-bold text-foreground dark:text-foreground dark:text-white uppercase tracking-widest">Live Node Visibility</span>
                   </div>
                   <div className="text-[10px] text-brand-slate font-mono uppercase">Mesh v4.2.1-alpha | Latency 14ms</div>
                </div>
              </motion.div>

              {/* Floating Layer 1: Operational Metrics */}
              <motion.div
                animate={{ 
                  rotateX: 50,
                  rotateZ: -35,
                  y: activeTab === 'dispatch' ? -150 : -100,
                  x: activeTab === 'dispatch' ? 40 : 20,
                  opacity: activeTab === 'predictive' ? 0.3 : 1
                }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute top-1/4 left-1/4 w-[350px] z-20"
              >
                <GlassPanel className="p-6 bg-card/95 border-brand-blue/30 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:bg-brand-navy/90 dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Network Load</h4>
                    <Activity className="h-4 w-4 text-brand-blue" />
                  </div>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Area type="monotone" dataKey="load" stroke="#2F80FF" fillOpacity={1} fill="url(#colorLoad)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Floating Layer 2: Asset Status */}
              <motion.div
                animate={{ 
                  rotateX: 50,
                  rotateZ: -35,
                  y: activeTab === 'telemetry' ? 100 : 80,
                  x: activeTab === 'telemetry' ? -60 : -40,
                  opacity: activeTab === 'dispatch' ? 0.3 : 1
                }}
                className="absolute bottom-1/4 right-1/4 w-[300px] z-30"
              >
                <GlassPanel className="p-6 bg-card/95 border-brand-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:bg-brand-navy/90 dark:border-brand-border dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                  <div className="flex items-center gap-3 mb-6">
                    <Navigation className="h-5 w-5 text-emerald-500" />
                    <span className="text-[10px] font-bold text-foreground dark:text-foreground dark:text-white uppercase tracking-widest">Asset FLT-0092</span>
                  </div>
                  <div className="space-y-4">
                    <TelemetryIndicator label="Fuel Energy" value={92} status="healthy" animate />
                    <TelemetryIndicator label="Tire Pressure" value={98} status="healthy" />
                  </div>
                </GlassPanel>
              </motion.div>

              {/* Floating Layer 3: AI Routing (Only active on Dispatch tab) */}
              <AnimatePresence>
                {activeTab === 'dispatch' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 0 }}
                    animate={{ opacity: 1, scale: 1, y: -250, x: -100 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute z-50 w-72"
                  >
                    <GlassPanel className="p-6 border-emerald-500/30 bg-card/95 shadow-[0_10px_30px_rgba(16,185,129,0.1)] dark:bg-brand-navy/95 dark:shadow-[0_0_50px_rgba(16,185,129,0.2)]">
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="h-4 w-4 text-emerald-500" />
                        <span className="text-[10px] font-bold text-foreground dark:text-foreground dark:text-white uppercase tracking-widest">AI ROUTE OPTIMIZED</span>
                      </div>
                      <p className="text-[10px] text-brand-slate leading-relaxed mb-4">
                        Sub-15m target acquired. Rerouting asset FLT-0092 via Express Node 4.
                      </p>
                      <div className="h-1 w-full bg-foreground/[0.05] rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </GlassPanel>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
