'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Clock, Users, ShieldCheck, Globe, Zap, CheckCircle2, TrendingUp } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const metrics = [
  { label: 'Active Recovery Events', val: '1,248', trend: '↑ 12.4%', icon: Activity },
  { label: 'Avg Dispatch Time', val: '14.2 min', trend: '↓ 8.2%', icon: Clock },
  { label: 'Network Availability', val: '99.9%', trend: '↑ 0.1%', icon: Globe },
  { label: 'SLA Compliance', val: '97.6%', trend: '↑ 5.3%', icon: ShieldCheck },
  { label: 'Tow Response Metric', val: '38.5 min', trend: '↓ 4.1%', icon: Zap },
  { label: 'Recovery Rate', val: '98.2%', trend: '↑ 2.4%', icon: CheckCircle2 },
  { label: 'Vendor Coverage', val: 'Nationwide', trend: 'STABLE', icon: Users },
  { label: 'Operational Efficiency', val: '92%', trend: '↑ 3.8%', icon: TrendingUp }
];

export const RecoveryMetrics = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <GlassPanel className="p-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all group flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                   <m.icon className="h-8 w-8 text-brand-blue" />
                </div>
                <p className="text-[10px] font-black text-[#94A3B8] uppercase tracking-[0.2em] mb-4 leading-tight">{m.label}</p>
                <p className="text-4xl font-black text-white tracking-tighter mb-4">{m.val}</p>
                <div className="flex items-center gap-2">
                   <div className="h-1 w-1 rounded-full bg-emerald-500" />
                   <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">{m.trend}</span>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
