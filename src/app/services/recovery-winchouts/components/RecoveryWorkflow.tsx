'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, ShieldCheck, UserCheck, Route, 
  MapPin, Truck, FileText, Activity, Zap,
  ChevronRight, Maximize2
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';

const steps = [
  { 
    id: 1, 
    title: 'Incident Detected', 
    desc: 'Incident reported via API, portal, or automated system sensors.', 
    icon: Search,
    image: '/assets/3d/step1.png'
  },
  { 
    id: 2, 
    title: 'Dispatch Validation', 
    desc: 'Weight-class verification and recovery equipment specification.', 
    icon: ShieldCheck,
    image: '/assets/3d/step2.png'
  },
  { 
    id: 3, 
    title: 'Unit Assigned', 
    desc: 'Selection of the closest qualified heavy-duty or rotator unit.', 
    icon: UserCheck,
    image: '/assets/3d/step3.png'
  },
  { 
    id: 4, 
    title: 'Route Optimization', 
    desc: 'AI-driven routing for the fastest and safest arrival to the scene.', 
    icon: Route,
    image: '/assets/3d/step4.png'
  },
  { 
    id: 5, 
    title: 'Live Tracking', 
    desc: 'Real-time GPS telemetry and status updates via dispatch map.', 
    icon: Truck,
    image: '/assets/3d/step4.png'
  },
  { 
    id: 6, 
    title: 'On-Site Recovery', 
    desc: 'Professional extraction, winch-out, or multi-unit recovery.', 
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=400'
  },
  { 
    id: 7, 
    title: 'Reporting & Billing', 
    desc: 'Automated reporting with digital photos and billing processed.', 
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=400'
  }
];

export const RecoveryWorkflow = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden border-t border-brand-border">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
           <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              The Recovery <span className="bg-gradient-to-r from-brand-blue to-brand-blue/60 bg-clip-text text-transparent">Lifecycle</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl leading-relaxed">
             A mission-critical orchestration layer designed for rapid, high-stakes commercial recovery deployments.
           </p>
        </div>

        {/* Workflow Pipeline */}
        <div className="relative">
           {/* Connection Lines (Desktop) */}
           <div className="absolute top-[40px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent hidden lg:block z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-12 lg:gap-4 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    viewport={{ once: true }}
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
                                <p className="text-[13px] text-white/90 leading-relaxed font-medium">{step.desc}</p>
                             </div>

                          </div>
                          {/* Anchor Arrow pointing directly to the node bubble */}
                          <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#2F80FF]/40 mx-auto" />
                       </div>

                       {/* Connection Indicator (Desktop) */}
                       {i < steps.length - 1 && (
                         <div className="absolute top-1/2 left-full w-full h-px bg-brand-blue/20 hidden lg:block overflow-hidden -translate-y-1/2">
                            <motion.div 
                               animate={{ x: ['-100%', '200%'] }}
                               transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: i * 0.4 }}
                               className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
                            />
                         </div>
                       )}

                       {/* The Node Bubble */}
                       <div className="relative h-20 w-20 bg-[#0a192f]/80 backdrop-blur-2xl border border-white/[0.08] rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.5)] group-hover:border-[#2F80FF]/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.25)] group-hover:-translate-y-2 transition-all duration-300 z-10 cursor-default select-none">
                          <Icon className="h-7 w-7 text-brand-slate group-hover:text-brand-blue transition-colors duration-300" />
                          
                          {/* Step Number Tag */}
                          <div className="absolute -top-3 -right-3 h-7 w-7 rounded-lg bg-brand-blue text-white flex items-center justify-center text-[10px] font-black border border-[#081120] shadow-lg shadow-brand-blue/25">
                             0{step.id}
                          </div>

                          {/* Inner Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                       </div>

                       {/* Active Telemetry Dot */}
                       <motion.div
                         animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                         transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                         className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-brand-blue/50"
                       />
                    </div>

                    {/* Content */}
                    <div className="px-2 w-full flex flex-col items-center">
                       <h3 className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-[0.2em] mb-3 group-hover:text-brand-blue transition-colors min-h-[32px] flex items-center justify-center">
                          {step.title}
                       </h3>
                    </div>

                    {/* Arrow Indicator for Mobile */}
                    {i < steps.length - 1 && (
                      <div className="mt-8 lg:hidden">
                        <ChevronRight className="h-5 w-5 text-brand-blue/40 rotate-90" />
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
