'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { TrendingUp, Clock, Activity, BarChart3, Target, Gauge, ShieldCheck, Headphones } from 'lucide-react';
import { useDispatchStats } from '../hooks/use-dispatch-stats';

export const MetricsDashboard = () => {
  const { stats } = useDispatchStats();

  const mainMetrics = [
    { label: 'Avg Dispatch Time', val: stats?.avgResponseTime ? `${stats.avgResponseTime}m` : '14.2m', trend: '↓ 4.2%', icon: Clock, color: 'text-brand-blue' },
    { label: 'Vendor Response', val: stats?.vendorAvailability ? `${stats.vendorAvailability}%` : '98.8%', trend: '↑ 0.5%', icon: Headphones, color: 'text-emerald-400' },
    { label: 'Active Incidents', val: stats?.activeDispatches?.toLocaleString() || '1,424', trend: 'Live', icon: Activity, color: 'text-brand-orange' },
    { label: 'Resolution Rate', val: stats?.slaCompliance ? `${stats.slaCompliance}%` : '99.1%', trend: '↑ 0.2%', icon: Target, color: 'text-purple-400' }
  ];

  const secondaryMetrics = [
    { label: 'Dispatch Volume', val: '2.4M', desc: 'Annual normalized events', icon: BarChart3 },
    { label: 'SLA Compliance', val: '97.8%', desc: 'Real-time performance', icon: ShieldCheck },
    { label: 'Fleet Utilization', val: '94.2%', desc: 'Asset efficiency index', icon: Gauge },
    { label: 'Coverage Index', val: 'USA & Canada', desc: 'Bi-national network', icon: TrendingUp }
  ];

  return (
    <section className="py-32 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Performance Index</p>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white mb-6">Operational Metrics Dashboard</h2>
        </div>

        <div className="space-y-8">
           {/* Top Row: Primary Metrics */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassPanel className="p-8 border-brand-border bg-card/60 group hover:border-brand-blue/30 transition-all">
                     <div className="flex justify-between items-start mb-6">
                        <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                           <m.icon className={`h-6 w-6 ${m.color}`} />
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${m.trend.includes('↑') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-brand-blue/10 text-brand-blue'}`}>
                           {m.trend}
                        </span>
                     </div>
                     <p className="text-3xl font-black text-foreground dark:text-white tracking-tight">{m.val}</p>
                     <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mt-1">{m.label}</p>
                  </GlassPanel>
                </motion.div>
              ))}
           </div>

           {/* Bottom Row: Secondary Metrics */}
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {secondaryMetrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                >
                  <GlassPanel className="p-6 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all flex items-center gap-6">
                     <div className="h-10 w-10 rounded-xl bg-brand-blue/10 flex items-center justify-center shrink-0">
                        <m.icon className="h-5 w-5 text-brand-blue" />
                     </div>
                     <div>
                        <div className="flex items-center gap-3">
                           <p className="text-xl font-bold text-foreground dark:text-white tracking-tight">{m.val}</p>
                        </div>
                        <p className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{m.label}</p>
                        <p className="text-[8px] text-brand-slate/60 mt-0.5">{m.desc}</p>
                     </div>
                  </GlassPanel>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
