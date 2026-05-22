'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Globe, Activity } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const EnterpriseCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border">
      {/* Background Lighting & Globe Decoration */}
      <div className="absolute -right-[15%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-20">
         <motion.div
           animate={{ rotate: 360 }}
           transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
           className="w-full h-full text-[#2F80FF]"
         >
            <Globe className="w-full h-full" strokeWidth={0.5} />
         </motion.div>
         <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-bg" />
         <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <GlassPanel className="p-12 lg:p-20 border-brand-border bg-card/40 relative overflow-hidden group">
          {/* Animated Background Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2F80FF]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />
          
          <div className="max-w-3xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[1px] w-8 bg-[#2F80FF]" />
              <span className="text-[11px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Enterprise Integration</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05] mb-8"
            >
              Modernize Your Enterprise <br />
              <span className="text-[#2F80FF]">Fleet Operations Infrastructure</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg lg:text-xl text-brand-slate leading-relaxed mb-12 max-w-2xl font-medium"
            >
              Connect Nationwide Roadside Assist into your fleet ecosystem to streamline roadside support, reduce operational downtime, and improve real-time mobility intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.2)] transition-all hover:-translate-y-1">
                Contact Enterprise Team <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl font-bold backdrop-blur-sm group">
                Request Fleet Capability Report <FileText className="ml-3 h-5 w-5 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
              </Button>
            </motion.div>
          </div>

          {/* Right Floating Info Element */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 hidden xl:block w-72 space-y-4 opacity-50 group-hover:opacity-100 transition-opacity duration-700">
             <GlassPanel className="p-4 border-brand-border bg-brand-navy/60">
                <div className="flex items-center gap-3 mb-2">
                   <Activity className="h-4 w-4 text-[#2F80FF]" />
                   <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Fleet Network Load</span>
                </div>
                <div className="flex items-center gap-2">
                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                   <span className="text-[10px] font-mono text-emerald-400">99.4% UPTIME NOMINAL</span>
                </div>
             </GlassPanel>
          </div>
        </GlassPanel>
      </div>
      
      <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 translate-y-1/2" />
    </section>
  );
};
