'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Globe, Lock } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const GovernanceCTA = () => {
  return (
    <section className="py-32 relative bg-brand-bg overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-brand-border backdrop-blur-md"
          >
             <Shield className="h-4 w-4 text-[#2F80FF]" />
             <span className="text-[10px] font-black text-brand-slate uppercase tracking-[0.4em]">Infrastructure Trust Standard</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-[1.1]"
          >
            Built for Enterprise <br />
            <span className="text-[#2F80FF]">Mobility Infrastructure at Scale</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed font-medium max-w-3xl mx-auto"
          >
            Nationwide Trans Inc. delivers enterprise-grade operational infrastructure, dispatch intelligence, and API-backed mobility systems governed by transparent and secure service standards.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.4)] transition-all hover:-translate-y-1 text-base uppercase tracking-widest">
               Contact Enterprise Legal <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-border bg-white/[0.03] text-foreground dark:text-white hover:bg-white/10 h-16 px-10 rounded-2xl font-black transition-all hover:border-[#2F80FF]/50 text-base uppercase tracking-widest backdrop-blur-xl">
               Explore Trust Center
            </Button>
          </motion.div>

          {/* Floating Trust Artifacts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-24">
             {[
               { label: 'ISO 27001', icon: Globe },
               { label: 'SOC 2 Type II', icon: Shield },
               { label: 'PCI-DSS', icon: Lock },
               { label: 'GDPR READY', icon: Shield }
             ].map((t, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 + i * 0.1 }}
                 className="px-6 py-4 bg-white/[0.02] border border-brand-border rounded-xl flex items-center justify-center gap-3"
               >
                  <t.icon className="h-3.5 w-3.5 text-[#2F80FF]/60" />
                  <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">{t.label}</span>
               </motion.div>
             ))}
          </div>

        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-bg to-transparent" />
    </section>
  );
};
