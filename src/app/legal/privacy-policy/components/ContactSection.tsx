'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Mail, Shield, User, MapPin, ExternalLink } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-[1px] w-8 bg-[#2F80FF]" />
                  <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Compliance Support</span>
                </motion.div>
                <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
                  Contact Our <br />
                  <span className="text-[#2F80FF]">Compliance Team</span>
                </h2>
                <p className="text-lg text-brand-slate leading-relaxed font-medium max-w-md">
                   Our dedicated Data Protection Officer and Legal Infrastructure team are available to address enterprise inquiries regarding our privacy framework.
                </p>
                
                <div className="space-y-4">
                   <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-brand-border rounded-xl group hover:border-[#2F80FF]/30 transition-all">
                      <div className="h-10 w-10 rounded-lg bg-[#2F80FF]/10 flex items-center justify-center">
                         <User className="h-5 w-5 text-[#2F80FF]" />
                      </div>
                      <div>
                         <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none mb-1">Data Protection Officer</p>
                         <p className="text-sm font-black text-foreground dark:text-white uppercase tracking-tight">Sarah J. Montgomery</p>
                      </div>
                   </div>
                   <div className="flex items-center gap-4 p-4 bg-white/[0.02] border border-brand-border rounded-xl group hover:border-[#2F80FF]/30 transition-all">
                      <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                         <Shield className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                         <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none mb-1">Infrastructure Trust</p>
                         <p className="text-sm font-black text-foreground dark:text-white uppercase tracking-tight">Enterprise Compliance Unit</p>
                      </div>
                   </div>
                </div>
             </div>

             <GlassPanel className="p-10 border-brand-border bg-card/60 space-y-8">
                <div className="grid grid-cols-1 gap-8">
                   <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                         <Mail className="h-4 w-4 text-[#2F80FF]" />
                         <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-[0.25em]">Direct Inquiries</span>
                      </div>
                      <div className="space-y-3">
                         <a href="mailto:privacy@nationwidetrans.com" className="flex items-center justify-between p-4 bg-brand-navy border border-brand-border rounded-xl hover:border-[#2F80FF]/40 transition-all group">
                            <span className="text-xs font-mono text-brand-blue">privacy@nationwidetrans.com</span>
                            <ExternalLink className="h-3 w-3 text-brand-slate group-hover:text-brand-blue transition-colors" />
                         </a>
                         <a href="mailto:legal@nationwidetrans.com" className="flex items-center justify-between p-4 bg-brand-navy border border-brand-border rounded-xl hover:border-[#2F80FF]/40 transition-all group">
                            <span className="text-xs font-mono text-brand-blue">legal@nationwidetrans.com</span>
                            <ExternalLink className="h-3 w-3 text-brand-slate group-hover:text-brand-blue transition-colors" />
                         </a>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                         <MapPin className="h-4 w-4 text-[#2F80FF]" />
                         <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-[0.25em]">Physical Address</span>
                      </div>
                      <div className="p-4 bg-brand-navy border border-brand-border rounded-xl">
                         <p className="text-xs font-medium text-brand-slate leading-relaxed">
                            Nationwide Roadside Assist<br />
                            Attn: Legal Department / DPO<br />
                            1200 Enterprise Way<br />
                            San Francisco, CA 94105
                         </p>
                      </div>
                   </div>
                </div>
             </GlassPanel>
          </div>
        </div>
      </div>
    </section>
  );
};
