'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  Search, 
  Zap, 
  Truck, 
  Navigation, 
  CheckCircle2, 
  BarChart3,
  UserCheck,
  Route,
  MapPin,
  FileText
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { 
    id: 1, 
    title: 'Incident Reported', 
    desc: 'Customer or system reports the breakdown or recovery need through our high-priority gateway.', 
    icon: UserCheck 
  },
  { 
    id: 2, 
    title: 'Customer Validation', 
    desc: 'Identify vehicle class, weight, and specialized recovery equipment requirements (Class 1-8).', 
    icon: Search 
  },
  { 
    id: 3, 
    title: 'Mobility Options', 
    desc: 'AI matches best certified heavy-duty vendor based on proximity, skill, and equipment availability.', 
    icon: Zap 
  },
  { 
    id: 4, 
    title: 'Transportation Assigned', 
    desc: 'Coordinate route, specialized equipment, and safety requirements for heavy-duty extraction.', 
    icon: Truck 
  },
  { 
    id: 5, 
    title: 'Live ETA Tracking', 
    desc: 'Real-time GPS telemetry and status updates for precise multi-unit recovery coordination.', 
    icon: Navigation 
  },
  { 
    id: 6, 
    title: 'Continuation Confirmed', 
    desc: 'Vehicle recovered safely and cleared from roadway using professional heavy-duty protocols.', 
    icon: CheckCircle2 
  },
  { 
    id: 7, 
    title: 'Automated Reporting', 
    desc: 'Automated reports, digital POD, and billing workflows synchronized to fleet systems.', 
    icon: BarChart3 
  }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-40 bg-brand-bg relative z-10 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-12 left-0 right-0 h-[1px] bg-brand-border/40 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 lg:gap-4 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon Container */}
                  <div className="relative mb-12">
                    <div className="h-24 w-24 rounded-[2rem] bg-[#0A1121] border border-brand-border flex items-center justify-center relative z-10 group-hover:border-brand-blue group-hover:shadow-[0_0_30px_rgba(47,128,255,0.2)] transition-all duration-500">
                      <Icon className="h-7 w-7 text-brand-slate group-hover:text-brand-blue transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-3 -right-3 h-9 w-9 rounded-2xl bg-brand-blue text-white flex items-center justify-center text-xs font-black shadow-[0_10px_20px_rgba(47,128,255,0.4)] z-20 group-hover:scale-110 transition-transform duration-500">
                      {step.id}
                    </div>
                  </div>

                  {/* Indicator Dot */}
                  <div className="w-2.5 h-2.5 bg-brand-blue rounded-full mb-8 shadow-[0_0_15px_#2F80FF] group-hover:scale-125 transition-transform duration-500" />

                  {/* Content */}
                  <div className="space-y-4 px-4">
                    <h3 className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-[0.2em] leading-tight min-h-[32px] flex items-center justify-center">
                      {step.title}
                    </h3>
                    <p className="text-[10px] text-brand-slate font-medium leading-relaxed group-hover:text-foreground/80 transition-colors duration-500">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
