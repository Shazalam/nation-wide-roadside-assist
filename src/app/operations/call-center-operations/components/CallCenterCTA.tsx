'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

export const CallCenterCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#2F80FF]/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-black text-foreground dark:text-white mb-6">
            Modernize Your Enterprise Call Center Operations
          </h2>
          <p className="text-[15px] text-brand-slate leading-relaxed mb-10">
            Connect with Nationwide Trans Inc. to automate dispatch workflows, optimize communications, and scale nationwide mobility operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="w-full sm:w-auto bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-12 px-8 rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all">
              Contact Enterprise Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="w-full sm:w-auto border-brand-border text-foreground dark:text-white hover:bg-white/5 h-12 px-8 rounded-xl font-bold bg-card/50 backdrop-blur-md">
              Request Operational Report <FileText className="ml-2 h-4 w-4 text-brand-slate" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
