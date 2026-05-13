'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Zap, MapPin, CheckCircle, Truck, Clock, ShieldCheck, Activity, PhoneCall } from 'lucide-react';

const cards = [
  { title: "Dispatch Speed", metric: "4.1m", icon: Zap, trend: "-12%" },
  { title: "Vendor Arrival Time", metric: "24m", icon: MapPin, trend: "-5%" },
  { title: "Claims Resolution", metric: "99.2%", icon: CheckCircle, trend: "+1.1%" },
  { title: "Recovery Completion", metric: "98.9%", icon: Truck, trend: "+0.8%" },
  { title: "Fleet Downtime Reduction", metric: "14%", icon: Clock, trend: "+2.4%" },
  { title: "Customer Satisfaction", metric: "4.8/5", icon: ShieldCheck, trend: "+0.1" },
  { title: "Emergency Response", metric: "9.2m", icon: Activity, trend: "-8%" },
  { title: "Commercial Intelligence", metric: "96.4%", icon: PhoneCall, trend: "+1.5%" },
];

export const OperationalPerformance = () => {
  return (
    <section className="py-16 border-t border-white/5 bg-[#0A192F]/10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-white mb-10">Operational Performance</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <GlassPanel className="p-5 h-full border-white/5 hover:border-[#2F80FF]/30 hover:bg-[#2F80FF]/5 transition-all group flex flex-col justify-between cursor-default">
                 <div className="flex justify-between items-start mb-4">
                    <card.icon className="h-5 w-5 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                    <div className="text-[10px] font-mono text-emerald-400">{card.trend}</div>
                 </div>
                 <div>
                    <div className="text-2xl font-black text-white mb-1">{card.metric}</div>
                    <div className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-wider">{card.title}</div>
                 </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
