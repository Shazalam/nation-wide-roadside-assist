'use client';

import React from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  BarChart3, 
  Clock, 
  Zap, 
  Users, 
  Activity, 
  Settings, 
  ArrowRight,
  PieChart,
  Headphones
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const slaData = [
  { name: 'NY-HUB', score: 98.2 },
  { name: 'TX-HUB', score: 95.8 },
  { name: 'CA-HUB', score: 99.1 },
  { name: 'FL-HUB', score: 94.2 },
  { name: 'IL-HUB', score: 97.5 },
];

export default function InsuranceSolutionsPage() {
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
              <ShieldCheck className="h-4 w-4 text-brand-blue" />
              <span className="text-xs font-bold text-brand-blue uppercase tracking-widest">InsurTech Core v2.4</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground dark:text-white tracking-tight mb-8">
              Sovereign Roadside <br />
              <span className="bg-gradient-to-r from-brand-blue to-emerald-400 bg-clip-text text-transparent">
                Infrastructure for Insurers
              </span>
            </h1>
            <p className="text-brand-slate text-xl max-w-2xl mx-auto leading-relaxed">
              White-labeled operations, real-time SLA orchestration, and automated claims workflows engineered for the world's leading insurance carriers and motor clubs.
            </p>
          </div>

          {/* Operational Dashboard Overlay (Floating Analytics) */}
          <div className="relative mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Dispatch Intelligence */}
              <div className="lg:col-span-7 space-y-8">
                <GlassPanel className="p-8 bg-brand-navy/60 border-brand-border shadow-2xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Activity className="h-24 w-24 text-brand-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground dark:text-white mb-8 flex items-center gap-3">
                    <Zap className="h-5 w-5 text-brand-blue" /> 
                    Automated Dispatch Mesh
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      { label: 'Policy Verification', status: 'optimal', time: '12ms' },
                      { label: 'Vendor Matching', status: 'optimal', time: '84ms' },
                      { label: 'Dispatch Trigger', status: 'optimal', time: '110ms' },
                    ].map((step) => (
                      <div key={step.label} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-brand-border">
                        <div className="flex items-center gap-4">
                          <StatusIndicator status="online" pulse />
                          <span className="text-sm font-medium text-foreground dark:text-white">{step.label}</span>
                        </div>
                        <span className="text-xs font-mono text-brand-blue">{step.time}</span>
                      </div>
                    ))}
                  </div>
                </GlassPanel>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <KPIWidget title="Avg. Customer NPS" value="4.8/5" change={2} trend="up" icon={Users} />
                  <KPIWidget title="Claims Processed" value="24.8M" change={12} trend="up" icon={BarChart3} />
                </div>
              </div>

              {/* Right Column: SLA Dashboard */}
              <div className="lg:col-span-5 space-y-8">
                <GlassPanel className="p-8 h-full flex flex-col bg-brand-navy/80 border-brand-blue/30 shadow-[0_0_50px_rgba(47,128,255,0.1)]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                      <h4 className="text-xs font-bold text-foreground dark:text-white uppercase tracking-widest">Regional SLA Compliance</h4>
                      <p className="text-[10px] text-brand-slate uppercase tracking-tighter">Live Network Pulse</p>
                    </div>
                    <PieChart className="h-5 w-5 text-brand-blue" />
                  </div>

                  <div className="h-64 w-full mb-8">
                    {isMounted && (
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={slaData}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" />
                          <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} domain={[90, 100]} />
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#060D18', border: '1px solid #1e293b', borderRadius: '12px' }}
                            itemStyle={{ color: '#2F80FF', fontSize: '10px', fontWeight: 'bold' }}
                          />
                          <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                            {slaData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={index === 2 ? '#2F80FF' : '#1e293b'} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    )}
                  </div>

                  <div className="mt-auto space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-brand-slate">Target SLA</span>
                      <span className="text-foreground dark:text-white font-bold">95.0%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '97.2%' }}
                        className="h-full bg-brand-blue shadow-[0_0_10px_#2F80FF]"
                      />
                    </div>
                  </div>
                </GlassPanel>
              </div>
            </div>
          </div>

          {/* Feature Grid: White Label Operations */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {[
              {
                icon: Headphones,
                title: "Concierge White-Label",
                desc: "Every touchpoint is branded to your identity. From IVR to real-time tracking links, we provide a sovereign experience."
              },
              {
                icon: Clock,
                title: "Dynamic ETA Mesh",
                desc: "Proprietary algorithms provide the industry's most accurate arrival predictions, reducing customer anxiety."
              },
              {
                icon: Settings,
                title: "Policy Engine v3",
                desc: "Complex benefit mapping and automated eligibility validation across multiple policy tiers and regions."
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassPanel className="p-8 h-full hover:border-brand-blue/50 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground dark:text-white mb-4">{feature.title}</h4>
                  <p className="text-brand-slate text-sm leading-relaxed">{feature.desc}</p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>

          {/* Final Enterprise CTA */}
          <GlassPanel className="p-12 md:p-20 bg-gradient-to-br from-brand-blue/10 to-brand-navy border-brand-border text-center relative overflow-hidden">
             <div className="relative z-10 space-y-8">
               <h2 className="text-4xl font-bold text-foreground dark:text-white">Elevate Your Membership Core</h2>
               <p className="text-brand-slate max-w-xl mx-auto">
                 Partner with Nationwide Roadside Assist to deliver 15-minute roadside response times and real-time operational transparency.
               </p>
               <div className="flex justify-center gap-4">
                 <Button size="lg" className="bg-brand-blue text-foreground dark:text-white font-bold h-12 px-8 uppercase tracking-widest">
                   Request Partner Access
                 </Button>
               </div>
             </div>
             {/* Decorative Background Icon */}
             <ShieldCheck className="absolute -bottom-10 -right-10 h-64 w-64 text-brand-blue/5 rotate-12" />
          </GlassPanel>
        </div>
      </div>
    </LandingLayout>
  );
}
