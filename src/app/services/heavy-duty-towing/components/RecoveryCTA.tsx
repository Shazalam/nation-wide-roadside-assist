'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RecoveryCTA = () => {
  return (
    <section className="py-44 relative z-10 overflow-hidden">
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="h-16 w-[2px] bg-brand-blue mx-auto mb-10" />
          <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1]">
            Modernize Your Heavy-Duty <br />
            <span className="bg-gradient-to-r from-brand-blue via-brand-orange to-brand-blue bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">Recovery Infrastructure</span>
          </h2>
          <p className="text-xl text-[#94A3B8] leading-relaxed max-w-2xl mx-auto font-medium">
            Connect with Nationwide Trans Inc. to streamline heavy recovery operations, automate fleet dispatch coordination, and optimize enterprise roadside intelligence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-10">
            <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-20 px-12 rounded-[2rem] text-lg shadow-[0_20px_50px_rgba(47,128,255,0.3)] group">
              Contact Enterprise Team <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 h-20 px-12 rounded-[2rem] text-lg group">
              <FileText className="mr-3 h-6 w-6 opacity-40 group-hover:opacity-100 transition-opacity" />
              Request Recovery Capability Report
            </Button>
          </div>

          <div className="pt-24 flex items-center justify-center gap-16 opacity-30">
             {[
               { l: 'Nationwide Network', i: Globe },
               { l: 'DOT Certified Ops', i: Globe },
               { l: 'SLA Guaranteed', i: Globe }
             ].map((item, i) => (
               <div key={i} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                  <span className="text-[11px] font-black uppercase tracking-[0.3em]">{item.l}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
