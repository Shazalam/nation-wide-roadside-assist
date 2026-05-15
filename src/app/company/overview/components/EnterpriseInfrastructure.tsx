'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Zap, Shield, Database } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const EnterpriseInfrastructure = () => {
  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-6">
              Nationwide Operational <br />Ecosystem
            </h2>
            <p className="text-brand-slate font-medium text-sm max-w-md mb-10 leading-relaxed">
              Our infrastructure is engineered for total operational redundancy. With active-active multi-region deployments, we guarantee 24/7 command operations, incident escalation, and vendor coordination across North America.
            </p>
            
            <div className="space-y-6">
               {[
                 { label: 'Heavy-Duty Recovery Coordination', icon: Shield, desc: 'Centralized dispatching for Class 8 vehicles and complex winch-outs.' },
                 { label: 'Multi-State Operational Coverage', icon: MapPin, desc: 'A deeply vetted network of over 10,000 localized recovery vendors.' },
                 { label: 'Vendor Intelligence Systems', icon: Database, desc: 'Real-time capability matching algorithms for precise equipment deployment.' },
                 { label: 'Incident Escalation Workflows', icon: Zap, desc: 'Automated high-severity incident routing to senior operational command.' }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 group">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center border border-brand-border group-hover:bg-[#2F80FF]/10 group-hover:border-[#2F80FF]/30 transition-colors">
                       <item.icon className="h-4 w-4 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
                    </div>
                    <div>
                       <p className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-wider mb-1">{item.label}</p>
                       <p className="text-[11px] font-medium text-brand-slate leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden border border-brand-border shadow-2xl">
             <div className="absolute inset-0 bg-card opacity-90 mix-blend-multiply" />
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at center, #2F80FF 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.15 }} />
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 mix-blend-luminosity" />
             
             {/* Heatmap overlay abstractions */}
             <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#FF7A1A]/40 blur-3xl rounded-full" />
             <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#2F80FF]/30 blur-3xl rounded-full" />
             <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-500/30 blur-3xl rounded-full" />

             {/* UI Overlay */}
             <div className="absolute bottom-6 left-6 right-6">
                <GlassPanel className="p-4 bg-brand-bg/80 border-brand-border flex items-center justify-between">
                   <div className="flex gap-6">
                      <div>
                         <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-1">Active Zones</p>
                         <p className="text-lg font-black text-foreground dark:text-white leading-none">48 <span className="text-[8px] text-[#2F80FF]">States</span></p>
                      </div>
                      <div>
                         <p className="text-[8px] font-bold text-brand-slate uppercase tracking-widest mb-1">Live Coordination</p>
                         <p className="text-lg font-black text-foreground dark:text-white leading-none text-emerald-400">1,248 <span className="text-[8px]">Events</span></p>
                      </div>
                   </div>
                   <div className="flex gap-1.5">
                      <div className="h-1.5 w-8 bg-[#2F80FF] rounded-full" />
                      <div className="h-1.5 w-4 bg-[#FF7A1A] rounded-full" />
                      <div className="h-1.5 w-4 bg-purple-500 rounded-full" />
                   </div>
                </GlassPanel>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
