'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Shield, Scale, Headphones, Globe, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactChannels = [
  {
    title: "Enterprise Legal Support",
    desc: "Direct coordination with our infrastructure legal division for enterprise contracts and compliance.",
    icon: Scale,
    action: "Contact Legal",
    email: "legal@nationwidetrans.com"
  },
  {
    title: "SLA Escalation Center",
    desc: "24/7 dedicated escalation node for mission-critical service level commitments and operational support.",
    icon: Shield,
    action: "Open SLA Case",
    email: "sla-support@nationwidetrans.com"
  },
  {
    title: "API Governance Inquiries",
    desc: "Developer-centric support for API rules, integration compliance, and programmatic trust framework.",
    icon: Globe,
    action: "API Trust Support",
    email: "dev-governance@nationwidetrans.com"
  }
];

export const ContactSupport = () => {
  return (
    <section id="contact" className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Governance Support Nodes</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Enterprise <span className="text-[#2F80FF]">Operational Support</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {contactChannels.map((channel, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
             >
               <GlassPanel className="p-8 h-full flex flex-col border-brand-border bg-card/60 group hover:border-[#2F80FF]/30 transition-all duration-500">
                  <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 flex items-center justify-center mb-6 border border-[#2F80FF]/20 group-hover:bg-[#2F80FF]/20 transition-all">
                     <channel.icon className="h-6 w-6 text-[#2F80FF]" />
                  </div>
                  
                  <h3 className="text-lg font-black text-foreground dark:text-white uppercase tracking-tight mb-4 leading-tight">{channel.title}</h3>
                  <p className="text-[11px] text-brand-slate font-medium leading-relaxed mb-8 flex-grow">
                     {channel.desc}
                  </p>
                  
                  <div className="space-y-4 pt-6 border-t border-brand-border">
                     <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Enterprise Direct</span>
                        <span className="text-[10px] font-mono text-[#2F80FF] font-bold">{channel.email}</span>
                     </div>
                     <Button className="w-full bg-[#2F80FF]/10 hover:bg-[#2F80FF] text-[#2F80FF] hover:text-foreground dark:hover:text-white border border-[#2F80FF]/20 font-black h-11 rounded-lg transition-all group/btn uppercase text-[10px] tracking-widest">
                        {channel.action} <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
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
