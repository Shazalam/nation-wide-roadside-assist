'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, UserCheck, Search, Navigation, CheckCircle } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { title: 'Request Initiated', icon: UserCheck, desc: 'Digital or voice assistance request is received.' },
  { title: 'Vehicle Verification', icon: Search, desc: 'VIN and location data are automatically validated.' },
  { title: 'Vendor Assignment', icon: Zap, desc: 'AI matches the best vendor based on proximity and SLA.' },
  { title: 'Dispatch Coordination', icon: Navigation, desc: 'Service vehicle is dispatched with live tracking.' },
  { title: 'Service Resolution', icon: Shield, desc: 'On-site assistance is completed and verified.' },
  { title: 'Automated Reporting', icon: CheckCircle, desc: 'Post-service analytics and billing are finalized.' }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Lifecycle</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Assistance Workflow Infrastructure</h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Connected roadside recovery workflows engineered for transparency, efficiency, and enterprise reporting.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 -translate-y-1/2 hidden lg:block" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: 'easeInOut' }}
            className="absolute top-1/2 left-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue -translate-y-1/2 hidden lg:block z-10 shadow-[0_0_10px_#2F80FF]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-20 group"
              >
                <div className="flex flex-col items-center">
                  <div className="h-16 w-16 rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-brand-blue/50 transition-all duration-500 bg-white/[0.02] shadow-2xl relative">
                     <step.icon className="h-7 w-7 text-brand-blue group-hover:text-white transition-colors" />
                     {/* Pulse indicator */}
                     <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                     </div>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-2">Step 0{i + 1}</p>
                    <h4 className="text-sm font-black text-white mb-3 group-hover:text-brand-blue transition-colors">{step.title}</h4>
                    <p className="text-[10px] text-[#94A3B8] leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">{step.desc}</p>
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
