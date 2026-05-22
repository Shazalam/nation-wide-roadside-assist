'use client';

import React from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { TelemetryIndicator } from '@/components/ui/telemetry-indicator';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Truck, 
  Settings, 
  MapPin, 
  Activity, 
  ShieldCheck, 
  BarChart2, 
  ArrowRight,
  Cpu,
  Zap,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const costData = [
  { month: 'JAN', cost: 1240, savings: 850 },
  { month: 'FEB', cost: 1100, savings: 920 },
  { month: 'MAR', cost: 1350, savings: 1100 },
  { month: 'APR', cost: 980, savings: 1300 },
  { month: 'MAY', cost: 1050, savings: 1450 },
];

export default function FleetSolutionsPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LandingLayout>
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-8"
            >
              <Truck className="h-4 w-4 text-brand-blue" />
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">Fleet Operations Mesh v1.8</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-white tracking-tight mb-8">
              Intelligence for the <br />
              <span className="bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">
                World's Largest Fleets
              </span>
            </h1>
            <p className="text-brand-slate text-xl max-w-2xl mx-auto leading-relaxed">
              Real-time asset visibility, predictive health diagnostics, and optimized cost-per-mile recovery infrastructure for commercial fleets and rental operators.
            </p>
          </div>

          {/* Operational Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32">
            
            {/* Left: Interactive Asset Dashboard */}
            <div className="lg:col-span-8 space-y-8">
              <GlassPanel className="p-8 bg-brand-navy/60 border-brand-border shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-brand-blue/20 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground dark:text-white">Live Asset Telemetry</h3>
                      <p className="text-[10px] text-brand-slate uppercase tracking-widest">Connected Mesh Node: FLT-NY-182</p>
                    </div>
                  </div>
                  <StatusIndicator status="online" label="Streaming" pulse />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <TelemetryIndicator label="Engine Load" value={74} status="healthy" animate />
                    <TelemetryIndicator label="Battery Voltage" value={98} status="healthy" />
                    <TelemetryIndicator label="Fuel Efficiency" value={82} status="healthy" animate />
                    <TelemetryIndicator label="Coolant Temp" value={184} status="warning" />
                  </div>
                  
                  <div className="h-full min-h-[200px] rounded-2xl bg-white/5 border border-brand-border relative overflow-hidden flex items-center justify-center group">
                    {/* Mock Map View */}
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #2F80FF 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <MapPin className="h-8 w-8 text-brand-blue animate-bounce" />
                    <div className="absolute bottom-4 left-4 right-4 p-2 rounded-lg bg-brand-navy/90 border border-brand-border text-[10px] text-brand-slate font-mono text-center">
                      LAT: 40.7128 | LON: -74.0060
                    </div>
                  </div>
                </div>
              </GlassPanel>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <KPIWidget title="Uptime Rating" value="99.4%" icon={Activity} />
                <KPIWidget title="Avg. Recovery" value="14.2m" icon={Clock} />
                <KPIWidget title="Cost Recovery" value="82%" icon={ShieldCheck} />
              </div>
            </div>

            {/* Right: Cost Analytics Overlay */}
            <div className="lg:col-span-4 space-y-8">
              <GlassPanel className="p-8 h-full flex flex-col bg-brand-navy/80 border-brand-border">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-xs font-bold text-foreground dark:text-white uppercase tracking-widest">Cost vs. Savings Mesh</h4>
                  <BarChart2 className="h-5 w-5 text-brand-orange" />
                </div>

                <div className="h-64 w-full mb-10">
                  {isMounted && (
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={costData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                        <XAxis dataKey="month" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                        <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#060D18', border: '1px solid #1e293b', borderRadius: '12px' }}
                          itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                        />
                        <Line type="monotone" dataKey="savings" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981' }} />
                        <Line type="monotone" dataKey="cost" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  )}
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest mb-1">Total Optimization</p>
                    <p className="text-2xl font-bold text-foreground dark:text-white">$1.2M Saved</p>
                  </div>
                  <Button variant="ghost" className="w-full text-brand-slate hover:text-foreground dark:text-white border border-brand-border text-[10px] font-bold uppercase tracking-widest">
                    Export Audit Log
                  </Button>
                </div>
              </GlassPanel>
            </div>
          </div>

          {/* Technology Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { icon: Zap, title: "15m Dispatch", desc: "Our mesh network ensures the closest qualified vendor is dispatched in seconds." },
              { icon: ShieldCheck, title: "Compliance Hub", desc: "Automated verification of vendor insurance and safety ratings for every job." },
              { icon: Settings, title: "Predictive Maintenance", desc: "Asset health modeling predicts failures before they result in costly downtime." },
              { icon: Cpu, title: "M2M Connectivity", desc: "Direct vehicle-to-infrastructure communication for hands-off operational management." },
            ].map((pillar) => (
              <div key={pillar.title} className="p-8 rounded-3xl bg-white/[0.02] border border-brand-border hover:border-brand-blue/30 transition-all group">
                <pillar.icon className="h-8 w-8 text-brand-blue mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-foreground dark:text-white mb-4">{pillar.title}</h4>
                <p className="text-brand-slate text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="relative rounded-[3rem] overflow-hidden">
            <div className="absolute inset-0 bg-brand-blue/10 blur-3xl" />
            <GlassPanel className="p-12 md:p-20 bg-brand-navy/60 border-brand-border text-center relative z-10">
              <h2 className="text-4xl font-bold text-foreground dark:text-white mb-6">Unify Your Fleet Infrastructure</h2>
              <p className="text-brand-slate max-w-2xl mx-auto mb-10 text-lg">
                Join over 400 global fleet operators using Nationwide Roadside Assist to reduce downtime and optimize operational spend.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button size="lg" className="bg-brand-blue text-foreground dark:text-white font-bold h-14 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)]">
                   Connect Your Fleet
                </Button>
                <Button size="lg" variant="ghost" className="text-brand-slate hover:text-foreground dark:text-white flex items-center gap-2">
                   View Hardware Specs <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
