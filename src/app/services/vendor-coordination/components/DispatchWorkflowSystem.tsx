'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, UserCheck, Search, Zap, 
  MapPin, CheckCircle2, FileText, ChevronRight
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Incident Reported',
    description: 'Customer or telemetry reports incident via integrated app, call, or API endpoint.',
    icon: ShieldAlert,
  },
  {
    id: 2,
    title: 'Customer Validation',
    description: 'Instantly validates policy coverage limits, active status, and specific requirements.',
    icon: UserCheck,
  },
  {
    id: 3,
    title: 'Vendor Match Engine',
    description: 'AI matches the best vendor based on SLA, real-time location, and correct vehicle class.',
    icon: Search,
  },
  {
    id: 4,
    title: 'Dispatch Assignment',
    description: 'Automatic dispatch to the highest-rated available vendor with guaranteed ETA.',
    icon: Zap,
  },
  {
    id: 5,
    title: 'Live GPS Tracking',
    description: 'Real-time vendor routing, telemetry updates, and live visibility for complete transparency.',
    icon: MapPin,
  },
  {
    id: 6,
    title: 'Recovery Completion',
    description: 'Vendor resolves the issue, logs digital signatures, and provides photographic proof of service.',
    icon: CheckCircle2,
  },
  {
    id: 7,
    title: 'Automated Billing',
    description: 'Immediate invoice generation and structured synchronization to enterprise ERP systems.',
    icon: FileText,
  },
];

export const DispatchWorkflowSystem = () => {
  return (
    <section className="py-12 lg:py-16 bg-brand-bg relative z-10 overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 lg:mb-12">
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Dispatch <span className="text-[#2F80FF]">Workflow</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             Our automated mesh streamlines the entire roadside incident lifecycle, ensuring rapid vendor coordination and SLA compliance.
           </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="relative">
           {/* Primary Pipeline Trace Line (Desktop) */}
           <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="flex flex-col items-center text-center group relative"
                  >
                    {/* Node Container */}
                    <div className="relative mb-8">
                       
                       {/* Floating Premium Dashboard Hover Preview Panel (Visible on Hover) */}
                       <div className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-full w-48 lg:w-56 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-95 group-hover:scale-100">
                          <div className="relative p-4 bg-[#0a192f]/95 backdrop-blur-2xl border border-[#2F80FF]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(47,128,255,0.2)] overflow-hidden">
                             
                             {/* Ambient background glow inside hover card */}
                             <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#2F80FF]/15 blur-[20px] pointer-events-none" />
                             
                             {/* Description text - Centrally aligned */}
                             <div className="text-center relative z-10">
                                <p className="text-xs text-white/90 leading-relaxed font-medium">{step.description}</p>
                             </div>

                          </div>
                          {/* Anchor Arrow pointing directly to the node bubble */}
                          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2F80FF]/40 mx-auto" />
                       </div>

                       {/* Connection Line Indicator between nodes */}
                       {i < steps.length - 1 && (
                         <div className="absolute top-1/2 left-full w-full h-0.5 bg-[#2F80FF]/10 hidden lg:block overflow-hidden">
                            <motion.div 
                               animate={{ x: ['-100%', '200%'] }}
                               transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                               className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#2F80FF]/50 to-transparent"
                            />
                         </div>
                       )}

                       {/* The Node Bubble */}
                       <div className="relative h-16 w-16 lg:h-20 lg:w-20 bg-[#0a192f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#2F80FF]/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.25)] group-hover:-translate-y-2 transition-all duration-300 z-10 cursor-default select-none">
                          <Icon className="h-6 w-6 lg:h-7 lg:w-7 text-brand-slate group-hover:text-[#2F80FF] transition-colors duration-300" />
                          
                          {/* Step Number Tag */}
                          <div className="absolute -top-3 -right-3 h-6 w-6 lg:h-7 lg:w-7 rounded-lg bg-[#2F80FF] text-white flex items-center justify-center text-[10px] font-black border border-[#081120] shadow-lg shadow-[#2F80FF]/25">
                             0{step.id}
                          </div>

                          {/* Inner Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       </div>

                       {/* Active Telemetry Halo indicator below the bubble */}
                       <motion.div
                         animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
                         transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
                         className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#2F80FF]/40"
                       />
                    </div>

                    {/* Content text */}
                    <div className="px-2 w-full flex flex-col items-center">
                       <h3 className="text-[9px] lg:text-[10px] font-black text-white uppercase tracking-[0.15em] mb-3 group-hover:text-[#2F80FF] transition-colors duration-300 min-h-[32px] flex items-center justify-center">
                          {step.title}
                       </h3>
                    </div>

                    {/* Vertical Arrow Indicator on Mobile Layout */}
                    {i < steps.length - 1 && (
                      <div className="mt-8 lg:hidden flex justify-center w-full">
                        <ChevronRight className="h-5 w-5 text-[#2F80FF]/40 rotate-90" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
           </div>
        </div>
      </div>
    </section>
  );
};
