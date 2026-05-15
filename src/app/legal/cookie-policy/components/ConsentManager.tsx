'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Zap, Lock, Database, Activity, Check, ShieldCheck, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const preferences = [
  { id: 'essential', label: 'Essential Infrastructure', desc: 'Critical for platform stability and authentication.', mandatory: true, icon: Lock },
  { id: 'analytics', label: 'Operational Analytics', desc: 'Used for infrastructure performance monitoring.', mandatory: false, icon: Database },
  { id: 'functional', label: 'Functional Preferences', desc: 'Remembers regional dashboard and UI settings.', mandatory: false, icon: Settings2 },
  { id: 'marketing', label: 'Enterprise Intelligence', desc: 'Analytics for platform utilization and growth.', mandatory: false, icon: Activity }
];

export const ConsentManager = () => {
  const [consent, setConsent] = useState({
    essential: true,
    analytics: true,
    functional: true,
    marketing: false
  });

  const toggleConsent = (id: string) => {
    const item = preferences.find(p => p.id === id);
    if (item && !item.mandatory) {
      setConsent(prev => ({ ...prev, [id as keyof typeof prev]: !prev[id as keyof typeof prev] }));
    }
  };

  return (
    <section id="consent-preferences" className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
           <div className="lg:w-1/3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="h-[1px] w-8 bg-[#2F80FF]" />
                <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Consent Orchestration</span>
              </motion.div>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-[1.1]">
                Enterprise <br />
                <span className="text-[#2F80FF]">Consent Manager</span>
              </h2>
              <p className="text-base text-brand-slate leading-relaxed font-medium">
                Manage your enterprise-wide consent preferences for NTI infrastructure nodes and operational analytics.
              </p>
              
              <div className="pt-8 space-y-4">
                 <div className="flex items-center gap-4 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl">
                    <ShieldCheck className="h-5 w-5 text-emerald-400" />
                    <div>
                       <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Compliance Status</p>
                       <p className="text-[11px] text-emerald-400 font-bold uppercase tracking-tight">NOMINAL / SECURE</p>
                    </div>
                 </div>
                 <div className="p-4 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl">
                    <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest mb-1">Last Update</p>
                    <p className="text-[11px] text-brand-blue font-mono font-bold uppercase tracking-tight">MAY 14, 2026 - 22:59 UTC</p>
                 </div>
              </div>
           </div>
           
           <div className="lg:w-2/3 space-y-4">
              {preferences.map((pref) => (
                <GlassPanel key={pref.id} className="p-6 border-brand-border bg-card/60 hover:bg-card/80 transition-all group">
                   <div className="flex items-center justify-between">
                      <div className="flex items-start gap-5">
                         <div className="h-12 w-12 rounded-xl bg-white/[0.03] border border-brand-border flex items-center justify-center shrink-0 group-hover:bg-[#2F80FF]/10 transition-all">
                            <pref.icon className="h-6 w-6 text-[#2F80FF]" />
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest flex items-center gap-3">
                               {pref.label}
                               {pref.mandatory && <span className="text-[8px] bg-white/[0.05] border border-brand-border px-2 py-0.5 rounded text-brand-slate">REQUIRED</span>}
                            </h4>
                            <p className="text-[11px] text-brand-slate font-medium leading-relaxed max-w-lg">
                               {pref.desc}
                            </p>
                         </div>
                      </div>
                      
                      <div 
                        onClick={() => toggleConsent(pref.id)}
                        className={`w-14 h-7 rounded-full p-1 cursor-pointer transition-all duration-300 relative ${pref.mandatory ? 'opacity-30 cursor-not-allowed bg-[#2F80FF]' : (consent[pref.id as keyof typeof consent] ? 'bg-[#2F80FF]' : 'bg-white/10')}`}
                      >
                         <motion.div 
                           animate={{ x: consent[pref.id as keyof typeof consent] ? 28 : 0 }}
                           className="h-5 w-5 rounded-full bg-white shadow-lg flex items-center justify-center"
                         >
                            {consent[pref.id as keyof typeof consent] && <Check className="h-3 w-3 text-[#2F80FF]" />}
                         </motion.div>
                      </div>
                   </div>
                </GlassPanel>
              ))}
              
              <div className="pt-6 flex justify-end gap-4">
                 <Button variant="outline" className="border-brand-border bg-white/[0.03] text-foreground dark:text-white font-black h-12 px-8 rounded-xl uppercase tracking-widest text-[10px]">
                    Reset Preferences
                 </Button>
                 <Button className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-12 px-8 rounded-xl uppercase tracking-widest text-[10px] shadow-[0_0_20px_rgba(47,128,255,0.3)]">
                    Save Infrastructure Settings
                 </Button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
