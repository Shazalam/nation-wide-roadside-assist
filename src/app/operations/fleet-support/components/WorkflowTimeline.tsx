'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AlertTriangle, ShieldCheck, UserCheck, MapPin, Wrench, FileText } from 'lucide-react';

const steps = [
  {
    title: "Fleet Incident Detected",
    description: "Incident captured via API, telemetry or driver app.",
    icon: AlertTriangle,
    id: "01"
  },
  {
    title: "Dispatch Validation",
    description: "Incident verified and priority level assigned.",
    icon: ShieldCheck,
    id: "02"
  },
  {
    title: "Vendor Assignment",
    description: "Best-suited vendor assigned in real-time.",
    icon: UserCheck,
    id: "03"
  },
  {
    title: "Live GPS Tracking",
    description: "Track vendor ETA and real-time progress.",
    icon: MapPin,
    id: "04"
  },
  {
    title: "Roadside Resolution",
    description: "Issue resolved on-site and documented.",
    icon: Wrench,
    id: "05"
  },
  {
    title: "Fleet Recovery & Reporting",
    description: "Digital reporting and analytics updated.",
    icon: FileText,
    id: "06"
  }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Operational Pipeline</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Fleet Support <span className="text-[#2F80FF]">Workflow</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
             {steps.map((step, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col items-center text-center group"
               >
                 <div className="relative mb-8">
                    <div className="h-20 w-20 rounded-full bg-card/60 backdrop-blur-xl border border-brand-border flex items-center justify-center group-hover:border-[#2F80FF]/50 group-hover:shadow-[0_0_30px_rgba(47,128,255,0.2)] transition-all duration-500 relative z-10">
                       <step.icon className="h-8 w-8 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-8 w-8 rounded-full bg-brand-navy border border-brand-border flex items-center justify-center text-[10px] font-black text-brand-blue group-hover:border-[#2F80FF]/50 transition-colors z-20">
                       {step.id}
                    </div>
                 </div>
                 
                 <h3 className="text-sm font-black text-foreground dark:text-white mb-2 uppercase tracking-widest">{step.title}</h3>
                 <p className="text-[11px] text-brand-slate font-medium leading-relaxed px-4">
                    {step.description}
                 </p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};
