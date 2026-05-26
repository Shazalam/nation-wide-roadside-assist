'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText } from 'lucide-react';

export const VendorCTA = () => {
  return (
    <section className="py-24 relative bg-brand-bg border-t border-brand-border overflow-hidden">
      {/* Cinematic Grid dots and Ambient lighting */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Absolute image on the right that bleeds to the edge and melts into the background */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none z-0 hidden lg:block">
        {/* Ambient glow behind the trucks */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#2F80FF]/10 via-transparent to-[#10B981]/5 blur-[80px] rounded-full pointer-events-none" />
        
        <img
          src="/tow_truck_night.jpg"
          alt="Modernize Vendor Coordination"
          className="w-full h-full object-cover object-left opacity-80"
        />

        {/* 4-way cinematic edge blending masks to eliminate all rectangular box borders */}
        <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-[5%] bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-brand-bg via-brand-bg/20 to-transparent pointer-events-none" />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-brand-bg/10 mix-blend-multiply pointer-events-none" />
        
        {/* Soft bloom simulation overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 via-transparent to-transparent opacity-30 mix-blend-screen pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em] font-mono">Infrastructure Scaling</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white uppercase tracking-tight leading-[1.1]">
              Modernize Your <span className="text-[#2F80FF]">Vendor Coordination</span> Infrastructure
            </h2>
            
            <p className="text-[14px] text-brand-slate leading-relaxed font-medium max-w-xl">
              Partner with Nationwide Trans Inc. to optimize dispatch workflows, automate vendor coordination, and modernize enterprise roadside network operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button className="w-full sm:w-auto bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-2xl shadow-[0_15px_30px_rgba(47,128,255,0.15)] hover:shadow-[0_20px_40px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-1">
                Contact Enterprise Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-2xl font-bold bg-card/40 backdrop-blur-xl border shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#2F80FF]/30 transition-all hover:-translate-y-1">
                Request Capability Report <FileText className="ml-2 h-4 w-4 text-brand-slate" />
              </Button>
            </div>
          </motion.div>

          {/* Right empty column for spacing on large screens */}
          <div className="lg:col-span-5 hidden lg:block" />

        </div>
      </div>
    </section>
  );
};
