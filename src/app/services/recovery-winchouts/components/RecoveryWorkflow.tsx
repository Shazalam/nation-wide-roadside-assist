'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ShieldCheck, UserCheck, Route, 
  MapPin, Truck, FileText, Activity, Zap
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { id: 1, title: 'Incident Detected', desc: 'Incident reported via API, portal, or automated system sensors.', icon: Search },
  { id: 2, title: 'Dispatch Validation', desc: 'Weight-class verification and recovery equipment specification.', icon: ShieldCheck },
  { id: 3, title: 'Recovery Unit Assigned', desc: 'Selection of the closest qualified heavy-duty or rotator unit.', icon: UserCheck },
  { id: 4, title: 'Route Optimization', desc: 'AI-driven routing for the fastest and safest arrival to the scene.', icon: Route },
  { id: 5, title: 'Live Incident Tracking', desc: 'Real-time GPS telemetry and status updates via dispatch map.', icon: MapPin },
  { id: 6, title: 'On-Site Recovery', desc: 'Professional extraction, winch-out, or multi-unit recovery.', icon: Truck },
  { id: 7, title: 'Reporting & Billing', desc: 'Automated reporting with digital photos and billing processed.', icon: FileText }
];

export const RecoveryWorkflow = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em] mb-4">Operational Pipeline</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
              Our Recovery <br />Lifecycle
           </h2>
        </div>

        <div className="relative">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80FF]/20 to-transparent -translate-y-1/2 hidden lg:block" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group"
                >
                   <div className="relative mb-8">
                      <div className="h-16 w-16 rounded-2xl bg-brand-navy border border-white/5 flex items-center justify-center relative z-10 group-hover:border-[#2F80FF]/40 transition-colors shadow-2xl shadow-black">
                         <step.icon className="h-6 w-6 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-[#2F80FF] text-white flex items-center justify-center text-[10px] font-black border-4 border-brand-bg z-20">
                         {step.id}
                      </div>

                      {/* Pulse Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-[#2F80FF] rounded-2xl z-0"
                      />
                   </div>

                   <h3 className="text-sm font-black text-white mb-3 uppercase tracking-widest leading-snug h-10 flex items-center justify-center">
                      {step.title}
                   </h3>
                   <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed max-w-[150px]">
                      {step.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Bottom Status Info */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-center gap-12 border-t border-white/5 pt-12">
           {[
             { label: 'Avg. Validation Time', val: '45s', icon: Activity },
             { label: 'Route Optimization', val: 'Active', icon: Route },
             { label: 'Reporting Speed', val: 'Instant', icon: Zap }
           ].map((m, i) => (
             <div key={i} className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                   <m.icon className="h-4 w-4 text-[#2F80FF] opacity-50" />
                </div>
                <div>
                   <p className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">{m.label}</p>
                   <p className="text-sm font-black text-white">{m.val}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
