'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { ClipboardList, ShieldCheck, UserCheck, MapPin, Truck, FileCheck } from 'lucide-react';

const steps = [
  {
    title: "Assistance Request Received",
    description: "Request captured via phone, app or API.",
    icon: ClipboardList,
    id: "01"
  },
  {
    title: "Dispatch Validation",
    description: "Eligibility, location and service validation.",
    icon: ShieldCheck,
    id: "02"
  },
  {
    title: "Technician Assignment",
    description: "Nearest available technician assigned.",
    icon: UserCheck,
    id: "03"
  },
  {
    title: "Live GPS Tracking",
    description: "Real-time tracking and ETA updates.",
    icon: MapPin,
    id: "04"
  },
  {
    title: "Tire Replacement Service",
    description: "On-site tire change and assistance.",
    icon: Truck,
    id: "05"
  },
  {
    title: "Case Resolution & Reporting",
    description: "Job completion and digital reporting.",
    icon: FileCheck,
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
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Operational Flow</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Service <span className="text-[#2F80FF]">Workflow</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
             {steps.map((step, i) => {
               const Icon = step.icon;
               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1, duration: 0.5 }}
                   className="flex flex-col items-center text-center group relative"
                 >
                   {/* Node Container */}
                   <div className="relative mb-8">
                      
                      {/* Floating Premium Dashboard Hover Preview Panel (Visible on Hover) */}
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 -translate-y-full w-64 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-30 scale-95 group-hover:scale-100">
                         <div className="relative p-4 bg-[#0a192f]/95 backdrop-blur-2xl border border-[#2F80FF]/40 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_20px_rgba(47,128,255,0.2)] overflow-hidden">
                            
                            {/* Ambient background glow inside hover card */}
                            <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-[#2F80FF]/15 blur-[20px] pointer-events-none" />
                            
                            {/* Description text - Centrally aligned */}
                            <div className="text-center relative z-10">
                               <p className="text-[13px] text-white/90 leading-relaxed font-medium">{step.description}</p>
                            </div>

                         </div>
                         {/* Anchor Arrow pointing directly to the node bubble */}
                         <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2F80FF]/40 mx-auto" />
                      </div>

                      {/* Connection Indicator (To next) */}
                      {i < steps.length - 1 && (
                        <div className="absolute top-1/2 left-full w-full h-px bg-[#2F80FF]/20 hidden lg:block overflow-hidden -translate-y-1/2">
                           <motion.div 
                              animate={{ x: ['-100%', '200%'] }}
                              transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                              className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#2F80FF] to-transparent"
                           />
                        </div>
                      )}

                      {/* The Node Bubble */}
                      <div className="relative h-20 w-20 bg-[#0a192f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#2F80FF]/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.25)] group-hover:-translate-y-2 transition-all duration-300 z-10 cursor-default select-none">
                         <Icon className="h-7 w-7 text-brand-slate group-hover:text-[#2F80FF] transition-colors duration-300" />
                         
                         {/* Step Number Tag */}
                         <div className="absolute -top-3 -right-3 h-7 w-7 rounded-lg bg-[#2F80FF] text-white flex items-center justify-center text-[10px] font-black border border-[#081120] shadow-lg shadow-[#2F80FF]/25">
                            {step.id}
                         </div>

                         {/* Inner Glow Effect */}
                         <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Active Telemetry Dot */}
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#2F80FF]/50"
                      />
                   </div>

                   {/* Content */}
                   <div className="px-2 w-full flex flex-col items-center">
                      <h3 className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-[#2F80FF] transition-colors min-h-[32px] flex items-center justify-center">
                         {step.title}
                      </h3>
                   </div>
                 </motion.div>
               );
             })}
          </div>
        </div>
      </div>

      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};
