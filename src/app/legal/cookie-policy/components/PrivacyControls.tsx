'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Settings, Trash2, ArrowRight, UserCheck, BarChart2, Globe, FileSearch } from 'lucide-react';
import { Button } from '@/components/ui/button';

const controls = [
  {
    title: "Manage Consent",
    desc: "Update your real-time tracking preferences for analytics and performance monitoring.",
    icon: Settings,
    action: "Launch Manager"
  },
  {
    title: "Data Removal Request",
    desc: "Request the permanent deletion of your localized preference nodes and analytics telemetry.",
    icon: Trash2,
    action: "Request Removal"
  },
  {
    title: "Browser Controls",
    desc: "Guides on managing cookie settings across enterprise-grade browsing environments.",
    icon: Globe,
    action: "View Guides"
  },
  {
    title: "GDPR Request Portal",
    desc: "Submit formal requests for data access, portability, or rectification for EU residents.",
    icon: UserCheck,
    action: "Access Portal"
  },
  {
    title: "Analytics Opt-Out",
    desc: "Immediately disable all non-essential operational tracking across the NTI mesh.",
    icon: BarChart2,
    action: "Global Opt-Out"
  },
  {
    title: "Audit Your Data",
    desc: "Download a report of the specific infrastructure cookies currently associated with your node.",
    icon: FileSearch,
    action: "Download Report"
  }
];

export const PrivacyControls = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Privacy Sovereignty</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Privacy & <span className="text-[#2F80FF]">Consent Controls</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {controls.map((control, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassPanel className="p-8 h-full flex flex-col border-brand-border bg-card/60 group hover:border-[#2F80FF]/30 transition-all duration-500">
                  <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center mb-6 border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all">
                     <control.icon className="h-6 w-6 text-[#2F80FF]" />
                  </div>
                  
                  <h3 className="text-lg font-black text-foreground dark:text-white uppercase tracking-tight mb-4 leading-tight">{control.title}</h3>
                  <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-8 flex-grow">
                     {control.desc}
                  </p>
                  
                  <div className="pt-6 border-t border-brand-border">
                     <Button variant="ghost" className="p-0 text-[10px] font-black text-[#2F80FF] uppercase tracking-widest hover:text-foreground dark:hover:text-white group/btn">
                        {control.action} <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                     </Button>
                  </div>
               </GlassPanel>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
