'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, AlertTriangle, Truck, MapPin } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const scenarios = [
  { title: 'Multi-Vehicle Incidents', icon: Truck, severity: 'Critical' },
  { title: 'Hazard Zone Escalations', icon: AlertTriangle, severity: 'High' },
  { title: 'Commercial Recovery', icon: ShieldAlert, severity: 'Elevated' },
  { title: 'Emergency Dispatch', icon: MapPin, severity: 'Critical' }
];

export const IncidentManagement = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           <div className="lg:col-span-6 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
                 Enterprise Incident <br />
                 <span className="text-emerald-400">Management Systems</span>
              </h2>
              <div className="space-y-6 text-brand-slate font-medium leading-relaxed text-sm md:text-base mb-10">
                 <p>
                    Not all dispatches are routine. Our command center utilizes advanced incident management systems to coordinate complex recoveries, including hazard zones and multi-vehicle commercial accidents.
                 </p>
                 <p>
                    Automated escalation protocols ensure that critical events immediately ping senior operational managers and prioritize specialized heavy-duty assets.
                 </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 {scenarios.map((scenario, i) => (
                   <div key={i} className="flex items-center gap-3 p-3 bg-white/[0.02] border border-brand-border rounded-lg">
                      <scenario.icon className={`h-4 w-4 ${scenario.severity === 'Critical' ? 'text-red-400' : scenario.severity === 'High' ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`} />
                      <div>
                         <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">{scenario.title}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="lg:col-span-6 lg:order-1 h-[450px] relative rounded-3xl overflow-hidden border border-brand-border shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-card opacity-90 mix-blend-multiply z-0" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80')] mix-blend-luminosity opacity-40 bg-cover bg-center" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center relative z-10 p-8">
                 {/* Simulated Heatmap Element */}
                 <div className="w-full max-w-sm">
                    <GlassPanel className="p-4 bg-brand-bg/90 border-red-500/30 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                       <div className="flex justify-between items-center mb-4 border-b border-brand-border pb-2">
                          <span className="text-[10px] font-black text-red-400 uppercase tracking-widest flex items-center gap-2">
                             <AlertTriangle className="h-3 w-3" /> Hazard Zone Active
                          </span>
                          <span className="text-[9px] font-mono text-foreground dark:text-white">PRIORITY 1</span>
                       </div>
                       
                       <div className="space-y-3">
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] text-brand-slate font-bold uppercase tracking-wider">Asset Routing</span>
                             <span className="text-[10px] font-mono text-[#2F80FF]">OVERRIDDEN</span>
                          </div>
                          <div className="flex justify-between items-center">
                             <span className="text-[10px] text-brand-slate font-bold uppercase tracking-wider">Nearest Heavy-Duty</span>
                             <span className="text-[10px] font-mono text-emerald-400">12 Miles</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mt-2">
                             <div className="h-full w-[80%] bg-red-500 animate-pulse" />
                          </div>
                       </div>
                    </GlassPanel>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};
