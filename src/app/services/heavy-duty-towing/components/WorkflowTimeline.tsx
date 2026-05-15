'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserCheck, 
  Search, 
  Zap, 
  Truck, 
  Navigation, 
  CheckCircle2, 
  BarChart3,
  Activity
} from 'lucide-react';

const steps = [
  { 
    id: 1, 
    title: 'Incident Reported', 
    desc: 'Customer or system reports the breakdown or recovery need through our high-priority gateway.', 
    icon: UserCheck 
  },
  { 
    id: 2, 
    title: 'Vehicle Classification', 
    desc: 'Identify vehicle class, weight, and specialized recovery equipment requirements (Class 1-8).', 
    icon: Search 
  },
  { 
    id: 3, 
    title: 'Vendor Assignment', 
    desc: 'AI matches best certified heavy-duty vendor based on proximity, skill, and equipment availability.', 
    icon: Zap 
  },
  { 
    id: 4, 
    title: 'Dispatch Coordination', 
    desc: 'Coordinate route, specialized equipment, and safety requirements for heavy-duty extraction.', 
    icon: Truck 
  },
  { 
    id: 5, 
    title: 'Live Tracking', 
    desc: 'Real-time GPS telemetry and status updates for precise multi-unit recovery coordination.', 
    icon: Navigation 
  },
  { 
    id: 6, 
    title: 'Recovery Resolution', 
    desc: 'Vehicle recovered safely and cleared from roadway using professional heavy-duty protocols.', 
    icon: CheckCircle2 
  },
  { 
    id: 7, 
    title: 'Reporting & Billing', 
    desc: 'Automated reports, digital POD, and billing workflows synchronized to fleet systems.', 
    icon: BarChart3 
  }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-40 bg-brand-bg relative z-10 overflow-hidden border-t border-brand-border">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />

      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#2F80FF]" />
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em]">Operational Sequence</span>
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Our Heavy-Duty <span className="text-brand-blue">Recovery</span> Process
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             A mission-critical orchestration layer designed specifically for the extreme technical requirements of heavy-duty commercial recovery.
           </p>
        </div>

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

        {/* Global Operational Metrics Footer */}
        <div className="mt-32 border-t border-brand-border pt-16 flex flex-wrap justify-center gap-16">
           {[
             { label: 'Dispatch Velocity', val: '< 1.5s', detail: 'Real-Time' },
             { label: 'Asset Accuracy', val: '99.9%', detail: 'Optimized' },
             { label: 'Network Integrity', val: 'Active', detail: 'Nationwide' },
             { label: 'Automation Load', val: 'Live', detail: 'Mesh' }
           ].map((m, i) => (
             <div key={i} className="flex flex-col items-center group cursor-default">
                <span className="text-[9px] font-black text-brand-slate uppercase tracking-[0.4em] mb-2 group-hover:text-brand-blue transition-colors">{m.label}</span>
                <div className="flex items-baseline gap-2">
                   <span className="text-2xl font-black text-foreground dark:text-white">{m.val}</span>
                   <span className="text-[9px] font-black text-brand-blue uppercase tracking-widest">{m.detail}</span>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
