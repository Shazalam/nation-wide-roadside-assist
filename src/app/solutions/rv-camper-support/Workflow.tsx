'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Users, Radio, Wrench, FileText, ChevronRight, Activity, Zap } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'RV Incident Reported',
    description: 'Incident submitted via mobile app, voice agent, or connected system.',
    icon: AlertTriangle,
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    title: 'Diagnostics Validation',
    description: 'Remote or on-site diagnostics validate issue, vehicle type and service requirements.',
    icon: Search,
    image: 'https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    title: 'Vendor Assignment',
    description: 'AI matches the best vendor based on location, capacity & expertise.',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  {
    id: 4,
    title: 'Dispatch Coordination',
    description: 'Live coordination with vendor based on location and ETA tracking.',
    icon: Radio,
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80'
  },
  {
    id: 5,
    title: 'Roadside Resolution',
    description: 'Onsite repair, towing, or recovery with real-time status updates.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1566860299613-76e627747acf?auto=format&fit=crop&q=80'
  },
  {
    id: 6,
    title: 'Automated Reporting',
    description: 'Reports, billing, and analytics reports automatically generated.',
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80'
  },
];

export default function Workflow() {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1536px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Operational Sequence</span>
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              RV Roadside <span className="text-[#2F80FF]">Operations</span> Workflow
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             A mission-critical orchestration layer designed specifically for the complex requirements of RV and camper support.
           </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="relative">
           {/* Primary Pipeline Trace (Desktop) */}
           <div className="absolute top-[40px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F80FF]/20 to-transparent hidden lg:block z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-4 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center text-center group"
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
                         <div className="absolute top-1/2 left-full w-full h-px bg-[#2F80FF]/20 hidden lg:block overflow-hidden">
                            <motion.div 
                               animate={{ x: ['-100%', '200%'] }}
                               transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                               className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#2F80FF] to-transparent"
                            />
                         </div>
                       )}

                       {/* The Node Bubble */}
                       <div className="relative h-20 w-20 bg-[#0a192f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#2F80FF]/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.25)] group-hover:-translate-y-2 transition-all duration-500 z-10">
                          <Icon className="h-7 w-7 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
                          
                          {/* Step Number */}
                          <div className="absolute -top-3 -right-3 h-7 w-7 rounded-lg bg-[#2F80FF] text-white flex items-center justify-center text-[10px] font-black border border-[#081120] shadow-lg shadow-[#2F80FF]/20">
                             {step.id}
                          </div>

                          {/* Inner Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
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
                       <h3 className="text-[11px] font-black text-white uppercase tracking-[0.2em] mb-3 group-hover:text-[#2F80FF] transition-colors h-10 flex items-center justify-center">
                          {step.title}
                       </h3>
                    </div>

                    {/* Arrow Indicator for Mobile */}
                    {i < steps.length - 1 && (
                      <div className="mt-8 lg:hidden">
                        <ChevronRight className="h-5 w-5 text-[#2F80FF]/40 rotate-90" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
           </div>
        </div>

        {/* Global Operational Metrics Footer */}
        <div className="mt-32 border-t border-brand-border pt-16 flex flex-wrap justify-center gap-16">
           {[
             { label: 'Dispatch Velocity', val: '< 90s', detail: 'Real-Time' },
             { label: 'Workflow Sync', val: '98.7%', detail: 'Optimized' },
             { label: 'Cust. Satisfaction', val: '4.8★', detail: 'Enterprise' },
             { label: 'Automation Load', val: 'Active', detail: 'Live' }
           ].map((m, i) => (
             <div key={i} className="flex flex-col items-center">
                <span className="text-[9px] font-black text-brand-slate uppercase tracking-[0.4em] mb-2">{m.label}</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-black text-foreground dark:text-white">{m.val}</span>
                   <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-widest">{m.detail}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
