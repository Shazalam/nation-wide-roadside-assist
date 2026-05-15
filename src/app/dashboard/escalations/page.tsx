'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { 
  AlertTriangle, 
  ArrowRight, 
  ShieldAlert, 
  Zap, 
  Clock, 
  Users, 
  CheckCircle2,
  PhoneCall,
  Mail,
  MoreVertical
} from 'lucide-react';
import { motion } from 'framer-motion';

const criticalEscalations = [
  { id: 'ESC-401', incident: 'INC-2914', type: 'SLA Breach (Response)', level: 'L3 - Executive', status: 'active', time: '14m overdue' },
  { id: 'ESC-402', incident: 'INC-2918', type: 'Vendor No-Show', level: 'L2 - Regional', status: 'investigating', time: '4m overdue' },
  { id: 'ESC-403', incident: 'INC-2921', type: 'Safety Incident', level: 'L3 - Executive', status: 'new', time: 'Just now' },
];

export default function EscalationsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-brand-orange" />
            <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">Escalation Workflows</h1>
          </div>
          <p className="text-brand-slate text-sm">Critical path management and high-stakes operational intervention protocols.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-orange/20 text-brand-orange gap-2">
            <ShieldAlert className="h-4 w-4" /> View Crisis Log
          </Button>
          <Button className="bg-brand-orange hover:bg-brand-orange/90 text-foreground dark:text-white gap-2">
            <Zap className="h-4 w-4" /> Override Protocol
          </Button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPIWidget title="Active Escalations" value="03" change={2} trend="down" icon={AlertTriangle} />
        <KPIWidget title="Resolution Velocity" value="8.4m" change={12} trend="up" icon={Zap} />
        <KPIWidget title="Auto-Resolved" value="142" icon={CheckCircle2} />
      </div>

      {/* Main Escalation Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Critical Queue */}
        <div className="lg:col-span-8 space-y-6">
          <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
             <ShieldAlert className="h-4 w-4 text-brand-orange" /> Critical Intervention Queue
          </h3>
          
          <div className="space-y-4">
             {criticalEscalations.map((esc) => (
               <motion.div 
                 key={esc.id}
                 whileHover={{ x: 4 }}
                 className="p-6 rounded-[2rem] bg-brand-navy/60 border border-brand-orange/20 relative overflow-hidden group"
               >
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
                     <div className="space-y-2">
                        <div className="flex items-center gap-3">
                           <span className="text-[10px] font-mono text-brand-orange">{esc.id}</span>
                           <div className="h-1 w-1 rounded-full bg-white/20" />
                           <span className="text-[10px] font-mono text-brand-blue">{esc.incident}</span>
                        </div>
                        <h4 className="text-lg font-bold text-foreground dark:text-white">{esc.type}</h4>
                        <div className="flex items-center gap-4 text-[10px] text-brand-slate uppercase font-bold tracking-widest">
                           <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {esc.level}</span>
                           <span className="flex items-center gap-1 text-rose-500"><Clock className="h-3 w-3" /> {esc.time}</span>
                        </div>
                     </div>
                     
                     <div className="flex items-center gap-4">
                        <StatusIndicator status="alert" label={esc.status} pulse />
                        <div className="h-8 w-px bg-white/10" />
                        <Button className="bg-brand-orange/10 border border-brand-orange/20 text-brand-orange hover:bg-brand-orange hover:text-foreground dark:text-white transition-all text-xs font-bold uppercase tracking-widest px-6 h-10">
                           Take Command
                        </Button>
                     </div>
                  </div>
                  {/* Background Accents */}
                  <div className="absolute top-0 right-0 w-32 h-full bg-brand-orange/5 blur-2xl group-hover:bg-brand-orange/10 transition-colors" />
               </motion.div>
             ))}
          </div>
        </div>

        {/* Workflow Chain Visualizer */}
        <div className="lg:col-span-4">
          <GlassPanel className="p-8 h-full bg-brand-navy/80 border-brand-border">
             <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider mb-8">Protocol Chain: L3-EXEC</h3>
             
             <div className="space-y-12 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-8 bottom-8 w-[2px] bg-brand-orange/20" />
                
                {[
                  { step: "Node Alert", desc: "SLA threshold > 100%", icon: ShieldAlert, active: true },
                  { step: "Supervisor Notify", desc: "Automated SMS/Email sent", icon: Mail, active: true },
                  { step: "Executive Briefing", desc: "Phone bridge initialized", icon: PhoneCall, active: true },
                  { step: "On-Site Intervention", desc: "Waiting for supervisor confirm", icon: Zap, active: false },
                ].map((node, i) => (
                  <div key={node.step} className="flex items-start gap-6 relative z-10">
                     <div className={`h-12 w-12 rounded-full flex items-center justify-center border transition-all ${
                       node.active ? 'bg-brand-orange/10 border-brand-orange text-brand-orange shadow-[0_0_15px_rgba(249,115,22,0.4)]' : 'bg-white/5 border-brand-border text-brand-slate'
                     }`}>
                        <node.icon className="h-5 w-5" />
                     </div>
                     <div className="space-y-1">
                        <h4 className={`text-sm font-bold ${node.active ? 'text-foreground dark:text-white' : 'text-brand-slate'}`}>{node.step}</h4>
                        <p className="text-[10px] text-brand-slate">{node.desc}</p>
                     </div>
                  </div>
                ))}
             </div>

             <div className="mt-12 pt-8 border-t border-brand-border">
                <Button variant="ghost" className="w-full text-brand-slate hover:text-foreground dark:text-white gap-2 text-[10px] font-bold uppercase tracking-widest">
                   Edit Protocol Rules <ArrowRight className="h-3 w-3" />
                </Button>
             </div>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
