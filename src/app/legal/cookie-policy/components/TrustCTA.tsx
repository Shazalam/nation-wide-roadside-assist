'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Globe, Lock } from 'lucide-react';

export const TrustCTA = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-brand-border backdrop-blur-md"
          >
             <Shield className="h-4 w-4 text-[#2F80FF]" />
             <span className="text-[10px] font-black text-brand-slate uppercase tracking-[0.4em]">Enterprise Governance Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-[1.1]"
          >
            Transparent Consent <br />
            <span className="text-[#2F80FF]">Infrastructure at Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Nationwide Trans Inc. is committed to transparent tracking governance, secure analytics systems, and enterprise-grade consent infrastructure engineered for mobility platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all hover:-translate-y-1 text-base uppercase tracking-widest">
               Manage Cookie Preferences <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-border bg-white/[0.03] text-foreground dark:text-white hover:bg-white/10 h-16 px-10 rounded-2xl font-black transition-all hover:border-[#2F80FF]/50 text-base uppercase tracking-widest backdrop-blur-xl">
               Explore Privacy Center
            </Button>
          </motion.div>

          {/* Infrastructure Grid Texture */}
          <div className="pt-24 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40">
             {[
               { label: 'GDPR READY', icon: Shield },
               { label: 'CCPA COMPLIANT', icon: Lock },
               { label: 'SOC 2 TYPE II', icon: Globe },
               { label: 'ISO 27001', icon: Shield }
             ].map((t, i) => (
               <div key={i} className="flex items-center justify-center gap-3 py-4 border border-brand-border rounded-xl">
                  <t.icon className="h-3.5 w-3.5 text-[#2F80FF]" />
                  <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">{t.label}</span>
               </div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
};
