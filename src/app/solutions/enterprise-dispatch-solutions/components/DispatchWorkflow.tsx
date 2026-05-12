'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe, Clock, ArrowRight, UserCheck, Search, Navigation, CheckCircle } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { id: 1, title: 'Incident Initiated', icon: Zap, desc: 'Omnichannel recovery request received via API/Voice/App.' },
  { id: 2, title: 'Vehicle Verification', icon: Search, desc: 'Automated VIN validation and operational diagnostic check.' },
  { id: 3, title: 'Intelligent Assignment', icon: Shield, desc: 'AI-matching of closest vendor with specialized equipment.' },
  { id: 4, title: 'Dispatch Coordination', icon: Navigation, desc: 'Live data exchange and en-route status synchronization.' },
  { id: 5, title: 'Live Tracking', icon: Globe, desc: 'Real-time telemetry and GPS visibility for all stakeholders.' },
  { id: 6, title: 'Resolution & Billing', icon: CheckCircle, desc: 'Automated reporting, operational review, and billing.' }
];

export const DispatchWorkflow = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Lifecycle</p>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Mission-Critical Workflow</h2>
          <p className="text-brand-slate text-lg leading-relaxed">
            Standardized operational sequences engineered for high-availability enterprise recovery and dispatch.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative group"
              >
                <GlassPanel className="p-6 pt-10 border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all flex flex-col items-center text-center group h-full">
                  {/* Step Number Badge */}
                  <div className="absolute top-4 right-4 text-[10px] font-black text-brand-blue/40 font-mono">
                    0{step.id}
                  </div>

                  {/* Icon Circle */}
                  <div className="h-16 w-16 rounded-full bg-brand-navy border border-white/10 flex items-center justify-center mb-6 relative group-hover:border-brand-blue/50 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 rounded-full bg-brand-blue/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    <step.icon className="h-7 w-7 text-brand-blue relative z-10 group-hover:scale-110 transition-transform" />
                  </div>

                  <h4 className="text-sm font-bold text-white mb-3 tracking-tight">{step.title}</h4>
                  <p className="text-[11px] text-brand-slate leading-relaxed">{step.desc}</p>
                </GlassPanel>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
