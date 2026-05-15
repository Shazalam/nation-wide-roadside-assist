'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RecoveryCTA = () => {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(47,128,255,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-[#0A192F] to-[#081120] border border-brand-border rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Animated Glow Border */}
          <div className="absolute inset-0 border-2 border-[#2F80FF]/20 rounded-[32px] animate-pulse pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-[#2F80FF]/10 rounded-2xl">
                <ShieldCheck className="h-10 w-10 text-[#2F80FF]" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight">
              Scale Your Roadside <br />
              <span className="text-[#2F80FF]">Infrastructure</span>
            </h2>
            
            <p className="text-lg text-brand-slate font-medium leading-relaxed">
              Join the hundreds of enterprise fleets and insurance providers leveraging our nationwide light-duty recovery mesh.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-16 px-10 rounded-2xl shadow-[0_0_30px_rgba(47,128,255,0.3)] group text-sm uppercase tracking-widest">
                Start Integration <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl group backdrop-blur-sm text-sm uppercase tracking-widest">
                <Phone className="mr-3 h-5 w-5 text-brand-slate" /> Speak with Ops
              </Button>
            </div>
          </motion.div>

          {/* Decorative Corner Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2F80FF]/10 blur-[60px] rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF7A1A]/10 blur-[60px] rounded-full" />
        </div>
      </div>
    </section>
  );
};
