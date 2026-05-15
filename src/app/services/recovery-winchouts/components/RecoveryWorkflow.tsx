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
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-[10px] uppercase font-black tracking-[0.4em] px-6 py-1.5">
                Operational Pipeline
              </Badge>
           </motion.div>
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
           <div className="absolute top-[120px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent hidden lg:block z-0" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 relative z-10">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col group"
                  >
                    {/* Main Card */}
                    <GlassPanel className="p-0 border-brand-border bg-card/40 hover:bg-card hover:border-brand-blue/40 transition-all duration-500 overflow-hidden group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] group-hover:-translate-y-4 rounded-[2rem]">
                       {/* Image Header */}
                       <div className="h-56 w-full relative bg-brand-bg/50 overflow-hidden border-b border-brand-border">
                          <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-brand-blue/10 transition-colors" />
                          <img 
                            src={step.image} 
                            alt={step.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 relative z-10" 
                          />
                          
                          {/* Step Number Badge */}
                          <div className="absolute top-4 right-4 h-8 w-8 rounded-xl bg-brand-blue text-white flex items-center justify-center text-[11px] font-black shadow-lg shadow-brand-blue/20 z-20">
                             {step.id}
                          </div>
                       </div>

                       {/* Content Area */}
                       <div className="p-6 space-y-3">
                          <div className="flex items-center gap-3">
                             <div className="h-8 w-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                <Icon className="h-4 w-4" />
                             </div>
                             <h3 className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-widest group-hover:text-brand-blue transition-colors">
                                {step.title}
                             </h3>
                          </div>
                          <p className="text-[12px] text-brand-slate font-medium leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity min-h-[60px]">
                             {step.desc}
                          </p>
                       </div>

                       {/* Connection Indicator (Mobile/Tablet) */}
                       {i < steps.length - 1 && (
                         <div className="lg:hidden h-12 flex items-center justify-center">
                           <ChevronRight className="h-5 w-5 text-brand-blue/30 rotate-90" />
                         </div>
                       )}
                    </GlassPanel>

                    {/* Desktop Connector Animated Pulse */}
                    {i < steps.length - 1 && (
                      <div className="absolute top-[120px] left-full w-full h-px hidden lg:block overflow-hidden">
                        <motion.div 
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.3 }}
                          className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-blue to-transparent"
                        />
                      </div>
                    )}
                  </motion.div>
                );
              })}
           </div>
        </div>

        {/* Operational Metrics */}
        <div className="mt-32 border-t border-brand-border pt-16 flex flex-wrap justify-center gap-x-16 gap-y-10">
           {[
             { label: 'Pipeline Latency', val: '< 2.4s', icon: Zap, detail: 'End-to-End' },
             { label: 'Validation Accuracy', val: '99.9%', icon: ShieldCheck, detail: 'Automated' },
             { label: 'Live Node Sync', val: 'Active', icon: Activity, detail: 'Nationwide' }
           ].map((m, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 + i * 0.1 }}
               className="flex items-center gap-5"
             >
                <div className="h-12 w-12 rounded-xl bg-card border border-brand-border flex items-center justify-center shadow-lg">
                   <m.icon className="h-5 w-5 text-brand-blue opacity-40" />
                </div>
                <div>
                   <p className="text-[9px] font-black text-brand-slate uppercase tracking-[0.3em] mb-1">{m.label}</p>
                   <div className="flex items-baseline gap-2">
                      <p className="text-xl font-black text-foreground dark:text-white">{m.val}</p>
                      <span className="text-[8px] font-black text-brand-blue uppercase tracking-widest">{m.detail}</span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
