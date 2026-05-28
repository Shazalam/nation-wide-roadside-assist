'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Globe, ArrowRight, ExternalLink } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const TrustCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border">
      {/* Background Lighting & Globe Decoration */}
      <div className="absolute -left-[10%] bottom-0 w-[600px] h-[600px] pointer-events-none opacity-20">
         <motion.div
           animate={{ rotate: -360 }}
           transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
           className="w-full h-full text-[#2F80FF]"
         >
            <Globe className="w-full h-full" strokeWidth={0.5} />
         </motion.div>
         <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg" />
         <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <GlassPanel className="p-12 lg:p-20 border-brand-border bg-card/40 relative overflow-hidden group">
          {/* Animated Background Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2F80FF]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />
          
          <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-[#2F80FF]" />
              <span className="text-[11px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Infrastructure Integrity</span>
              <div className="h-[1px] w-8 bg-[#2F80FF]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05]"
            >
              Enterprise-Grade Privacy for <br />
              <span className="text-[#2F80FF]">Mission-Critical Mobility Infrastructure</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium"
            >
              Nationwide Roadside Assist is committed to secure, transparent, and compliant operational infrastructure for enterprise mobility ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 pt-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.2)] transition-all hover:-translate-y-1">
                Contact Legal Team <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl font-bold backdrop-blur-sm group">
                View Trust Center <ExternalLink className="ml-3 h-5 w-5 text-brand-slate group-hover:text-brand-blue transition-colors" />
              </Button>
            </motion.div>
          </div>
        </GlassPanel>
      </div>
      
      <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};
