'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FilePlus, Wrench, UserCheck, Route, 
  MapPin, CheckCircle2, FileText, Activity 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { id: 1, title: 'Service Request Created', desc: 'Customer or fleet system submits a request via API or Portal.', icon: FilePlus },
  { id: 2, title: 'Vehicle Diagnostics', desc: 'Issue is identified, categorized, and severity is assessed.', icon: Activity },
  { id: 3, title: 'Technician Assigned', desc: 'Best-fit certified technician is selected by our dispatch engine.', icon: UserCheck },
  { id: 4, title: 'Route Optimization', desc: 'AI finds the fastest and most efficient route to the location.', icon: Route },
  { id: 5, title: 'Live Dispatch Tracking', desc: 'Real-time GPS tracking and ETA updates for all stakeholders.', icon: MapPin },
  { id: 6, title: 'On-Site Repair', desc: 'Technician arrives and completes the mechanical repair.', icon: Wrench },
  { id: 7, title: 'Reporting & Billing', desc: 'Automated reporting and digital billing processed instantly.', icon: FileText }
];

export const RepairWorkflow = () => {
  return (
    <section className="py-32 relative z-10 bg-brand-bg overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Operational Lifecycle</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Our Mobile Repair <br />Workflow
           </h2>
        </div>

        <div className="relative">
           {/* Connecting Line */}
           <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent -translate-y-1/2 hidden lg:block" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center"
                >
                   <div className="relative mb-8">
                      <div className="h-16 w-16 rounded-2xl bg-[#081120] border border-white/5 flex items-center justify-center relative z-10 group hover:border-brand-blue/40 transition-colors shadow-2xl">
                         <step.icon className="h-6 w-6 text-[#94A3B8] group-hover:text-brand-blue transition-colors" />
                      </div>
                      {/* Pulse Ring */}
                      <motion.div 
                         animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0, 0.1] }}
                         transition={{ duration: 3, repeat: Infinity }}
                         className="absolute inset-0 bg-brand-blue rounded-2xl" 
                      />
                      {/* Step Number */}
                      <div className="absolute -left-3 -top-3 h-7 w-7 rounded-full bg-brand-blue flex items-center justify-center text-[10px] font-black text-white border-4 border-brand-bg z-20">
                         {step.id}
                      </div>
                   </div>

                   <h3 className="text-sm font-black text-white mb-3 uppercase tracking-widest leading-snug h-10 flex items-center justify-center">
                      {step.title}
                   </h3>
                   <p className="text-[11px] text-[#94A3B8] font-medium leading-relaxed">
                      {step.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Animated Telemetry Overlay */}
        <div className="mt-20 opacity-20 hidden lg:block">
           <div className="flex justify-between items-center px-20">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                <motion.div 
                  key={i}
                  animate={{ height: [2, 10, 2], opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  className="w-0.5 bg-brand-blue rounded-full"
                />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
