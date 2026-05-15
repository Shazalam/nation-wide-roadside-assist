'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Headphones } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

export const CTASection = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Mesh/Glow */}
      <div className="absolute inset-0 bg-brand-blue/5 blur-[120px] rounded-full translate-y-1/2 pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <GlassPanel className="p-12 lg:p-24 border-brand-border bg-card/60 relative overflow-hidden text-center max-w-6xl mx-auto shadow-2xl">
           <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/10 border border-brand-blue/20 mb-4"
              >
                 <Headphones className="h-4 w-4 text-brand-blue" />
                 <span className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.2em]">Contact Solutions Team</span>
              </motion.div>

              <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white leading-[1.1] tracking-tight max-w-4xl mx-auto">
                 Modernize Your Dispatch <br />
                 <span className="text-foreground dark:text-white/40 italic">Operations Infrastructure</span>
              </h2>

              <p className="text-brand-slate text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                 Deploy enterprise-grade dispatch intelligence, automate roadside coordination, and optimize nationwide mobility operations with Nationwide Trans Inc.
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                 <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-black h-16 px-12 rounded-2xl shadow-[0_0_40px_rgba(47,128,255,0.4)] group text-base">
                    Contact Enterprise Team <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                 </Button>
                 <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-12 rounded-2xl group text-base font-bold">
                    Request Dispatch Capability Report <FileText className="ml-3 h-5 w-5 opacity-50" />
                 </Button>
              </div>
           </div>

           {/* Floating Decorative Elements */}
           <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
              <div className="h-64 w-64 border border-brand-blue rounded-full" />
           </div>
           <div className="absolute bottom-0 left-0 p-10 opacity-10 pointer-events-none">
              <div className="h-48 w-48 border border-white rounded-full" />
           </div>
        </GlassPanel>
      </div>
    </section>
  );
};
