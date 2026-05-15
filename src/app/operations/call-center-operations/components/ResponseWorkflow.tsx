'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { PhoneCall, ShieldCheck, Cpu, Truck, MapPin, CheckCircle, FileText } from 'lucide-react';

const steps = [
  { id: 1, label: "Customer Call Received", icon: PhoneCall },
  { id: 2, label: "Incident Validation", icon: ShieldCheck },
  { id: 3, label: "AI Dispatch Routing", icon: Cpu, active: true },
  { id: 4, label: "Vendor Assignment", icon: Truck },
  { id: 5, label: "Live GPS Tracking", icon: MapPin },
  { id: 6, label: "Service Completion", icon: CheckCircle },
  { id: 7, label: "Automated Reporting", icon: FileText }
];

export const ResponseWorkflow = () => {
  return (
    <GlassPanel className="p-6 border-brand-border bg-card/40 h-full flex flex-col">
      <h3 className="text-lg font-bold text-foreground dark:text-white mb-8">Incident Response Workflow</h3>
      
      <div className="flex items-center justify-between mt-auto mb-8 px-4 relative">
         <div className="absolute top-1/2 left-8 right-8 h-px bg-white/10 -translate-y-1/2 z-0" />
         
         {steps.map(step => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
               <div className={`h-12 w-12 rounded-full flex items-center justify-center border transition-colors ${
                  step.active 
                  ? 'bg-[#2F80FF] border-[#2F80FF] shadow-[0_0_20px_rgba(47,128,255,0.5)]' 
                  : 'bg-brand-bg border-white/20 text-brand-slate'
               }`}>
                  <step.icon className={`h-5 w-5 ${step.active ? 'text-foreground dark:text-white' : ''}`} />
               </div>
               <div className="text-center w-16">
                  <div className="text-[10px] font-bold text-foreground dark:text-white mb-0.5">{step.id}</div>
                  <div className={`text-[9px] leading-tight ${step.active ? 'text-foreground dark:text-white font-bold' : 'text-brand-slate'}`}>{step.label}</div>
               </div>
            </div>
         ))}
      </div>
    </GlassPanel>
  );
};
