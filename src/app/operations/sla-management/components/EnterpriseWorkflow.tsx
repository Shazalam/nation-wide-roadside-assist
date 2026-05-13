'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AlertTriangle, MapPin, Truck, Clock, Wrench, CheckCircle, ShieldCheck, FileText } from 'lucide-react';

const steps = [
  { id: 1, label: "Incident Received", icon: AlertTriangle },
  { id: 2, label: "Dispatch Routed", icon: MapPin },
  { id: 3, label: "Vendor Assigned", icon: Truck },
  { id: 4, label: "ETA Monitoring", icon: Clock, active: true },
  { id: 5, label: "Service In Progress", icon: Wrench },
  { id: 6, label: "Resolution Verification", icon: CheckCircle },
  { id: 7, label: "SLA Compliance Logged", icon: ShieldCheck },
  { id: 8, label: "Automated Reporting", icon: FileText }
];

export const EnterpriseWorkflow = () => {
  return (
    <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full flex flex-col">
      <h3 className="text-lg font-bold text-white mb-8">Enterprise Workflow Timeline</h3>
      
      <div className="flex items-center justify-between mt-auto mb-8 px-4 relative">
         <div className="absolute top-1/2 left-6 right-6 h-px bg-white/10 -translate-y-1/2 z-0" />
         
         {steps.map(step => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
               <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                  step.active 
                  ? 'bg-[#2F80FF] border-[#2F80FF] shadow-[0_0_20px_rgba(47,128,255,0.5)]' 
                  : 'bg-[#081120] border-white/20 text-[#94A3B8]'
               }`}>
                  <step.icon className={`h-4 w-4 ${step.active ? 'text-white' : ''}`} />
               </div>
               <div className="text-center w-14">
                  <div className="text-[10px] font-bold text-white mb-0.5">{step.id}</div>
                  <div className={`text-[8px] leading-tight ${step.active ? 'text-white font-bold' : 'text-[#94A3B8]'}`}>{step.label}</div>
               </div>
            </div>
         ))}
      </div>
    </GlassPanel>
  );
};
