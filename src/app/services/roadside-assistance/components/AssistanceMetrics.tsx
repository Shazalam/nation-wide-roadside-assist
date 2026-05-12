'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Clock, Users, Shield, 
  BarChart3, Activity, Target, Headphones 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { useRoadsideStats } from '../hooks/use-roadside-stats';

export const AssistanceMetrics = () => {
  const { stats } = useRoadsideStats();

  const metrics = [
    { label: 'Assistance Requests', val: stats?.activeRequests?.toLocaleString() || '1,248', trend: '+ 8.3%', icon: Activity, color: 'text-brand-blue' },
    { label: 'Avg Response Time', val: `${stats?.avgResponseTime || 32}m`, trend: '↓ 9.2%', icon: Clock, color: 'text-brand-orange' },
    { label: 'Vendor Availability', val: '85%', trend: '↑ 6.7%', icon: Users, color: 'text-purple-400' },
    { label: 'SLA Compliance', val: `${stats?.slaCompliance || 97.8}%`, trend: '↑ 5.7%', icon: Shield, color: 'text-emerald-400' },
    { label: 'Fleet Coverage', val: 'Nationwide', trend: 'Live', icon: TrendingUp, color: 'text-brand-blue' },
    { label: 'Dispatch Volume', val: '2.4M+', trend: 'Annual', icon: BarChart3, color: 'text-brand-orange' },
    { label: 'CSAT Score', val: `${stats?.customerSatisfaction || 4.9}/5`, trend: '↑ 0.3', icon: Headphones, color: 'text-purple-400' },
    { label: 'Resolution Rate', val: '99.1%', trend: '↑ 0.2%', icon: Target, color: 'text-emerald-400' }
  ];

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Performance</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight">Enterprise Assistance Metrics</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassPanel className="p-8 border-white/5 bg-[#0A192F]/60 group hover:border-brand-blue/30 transition-all">
                <div className="flex justify-between items-start mb-8">
                   <div className="h-12 w-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <m.icon className={`h-6 w-6 ${m.color}`} />
                   </div>
                   <div className="px-2 py-1 bg-white/5 border border-white/10 rounded-lg text-[8px] font-bold text-emerald-400">
                      {m.trend}
                   </div>
                </div>
                <p className="text-3xl font-black text-white tracking-tight leading-none mb-2">{m.val}</p>
                <p className="text-[10px] font-bold text-brand-slate uppercase tracking-[0.2em]">{m.label}</p>
                
                {/* Micro-sparkline simulation */}
                <div className="mt-8 h-8 w-full flex items-end gap-[2px]">
                   {[20, 40, 30, 50, 40, 60, 45, 70, 55, 80].map((h, j) => (
                     <motion.div 
                       key={j} 
                       initial={{ height: 0 }} 
                       whileInView={{ height: `${h}%` }} 
                       transition={{ delay: i * 0.1 + j * 0.05 }} 
                       className={`flex-1 rounded-full ${m.color.replace('text-', 'bg-')}/20`} 
                     />
                   ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
