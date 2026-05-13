'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { AlertTriangle, Cpu, ShieldAlert, Zap, UserCheck, Navigation, Activity, FileText } from 'lucide-react';

const steps = [
  { id: 1, label: "Incident Detected", icon: AlertTriangle },
  { id: 2, label: "AI Severity Analysis", icon: Cpu },
  { id: 3, label: "SLA Risk Assessment", icon: ShieldAlert },
  { id: 4, label: "Escalation Triggered", icon: Zap, active: true },
  { id: 5, label: "Supervisor Intervention", icon: UserCheck },
  { id: 6, label: "Recovery Routing", icon: Navigation },
  { id: 7, label: "Monitoring & Resolution", icon: Activity },
  { id: 8, label: "Reporting & Analytics", icon: FileText }
];

export const EscalationWorkflow = () => {
  return (
    <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full flex flex-col">
      <h3 className="text-lg font-bold text-white mb-8">Escalation Workflow</h3>
      
      <div className="flex items-center justify-between mt-auto mb-8 px-4 relative">
         <div className="absolute top-1/2 left-6 right-6 h-px bg-white/10 -translate-y-1/2 z-0" />
         
         {steps.map(step => (
            <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
               <div className={`h-10 w-10 rounded-full flex items-center justify-center border transition-colors ${
                  step.active 
                  ? 'bg-red-500 border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]' 
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
