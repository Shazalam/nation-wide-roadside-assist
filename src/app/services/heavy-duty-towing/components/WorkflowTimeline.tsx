'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Navigation, Search, CheckCircle, UserCheck, Zap, BarChart3 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { id: 1, title: 'Incident Reported', icon: UserCheck, desc: 'Customer or system reports the breakdown or recovery need.' },
  { id: 2, title: 'Vehicle Classification', icon: Search, desc: 'Identify vehicle class, weight, and recovery requirements.' },
  { id: 3, title: 'Vendor Assignment', icon: Zap, desc: 'AI matches best vendor based on proximity and skill.' },
  { id: 4, title: 'Dispatch Coordination', icon: Truck, desc: 'Coordinate route, equipment, and safety requirements.' },
  { id: 5, title: 'Live Tracking', icon: Navigation, desc: 'Real-time GPS tracking and ETA updates.' },
  { id: 6, title: 'Recovery Resolution', icon: CheckCircle, desc: 'Vehicle recovered safely and cleared from roadway.' },
  { id: 7, title: 'Reporting & Billing', icon: BarChart3, desc: 'Automated reports, POD, and billing workflows.' }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Lifecycle</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Our Heavy-Duty Recovery Process</h2>
          <div className="h-1.5 w-24 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="absolute top-[32px] left-0 w-full h-[2px] bg-white/5 hidden lg:block" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
            className="absolute top-[32px] left-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue hidden lg:block z-10 shadow-[0_0_15px_#2F80FF]"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-20 group"
              >
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-full bg-brand-navy border-2 border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-500 bg-white/[0.02] shadow-2xl relative">
                     <step.icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
                     {/* Pulse indicator */}
                     <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                     </div>
                  </div>
                  
                  <div className="text-center px-4">
                    <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-3">Step {step.id}</p>
                    <h4 className="text-[11px] font-black text-white mb-4 group-hover:text-brand-blue transition-colors uppercase tracking-tight leading-tight">{step.title}</h4>
                    <p className="text-[9px] text-[#94A3B8] leading-relaxed font-medium opacity-60 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
