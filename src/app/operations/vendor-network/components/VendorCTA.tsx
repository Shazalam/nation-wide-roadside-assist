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
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
              <span className="text-[9px] font-black text-[#2F80FF] uppercase tracking-[0.3em] font-mono">Infrastructure Scaling</span>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white uppercase tracking-tight leading-[1.1]">
              Scale Your Nationwide <br />
              <span className="text-[#2F80FF]">Vendor Operations</span> Infrastructure
            </h2>
            
            <p className="text-[14px] text-brand-slate leading-relaxed font-medium max-w-xl">
              Connect with Nationwide Roadside Assist to optimize dispatch workflows, automate vendor coordination, and modernize enterprise roadside network operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Button className="w-full sm:w-auto bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-2xl shadow-[0_15px_30px_rgba(47,128,255,0.15)] hover:shadow-[0_20px_40px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-1">
                Contact Enterprise Team <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-2xl font-bold bg-card/40 backdrop-blur-xl border shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] hover:border-[#2F80FF]/30 transition-all hover:-translate-y-1">
                Request Operational Report <FileText className="ml-2 h-4 w-4 text-brand-slate" />
              </Button>
            </div>
          </motion.div>

          {/* Right Image Column with Custom Masks & Glow */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-6 relative group"
          >
            {/* Ambient glows behind the trucks */}
            <div className="absolute -inset-10 bg-[#2F80FF]/5 blur-[60px] rounded-full pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-[#2F80FF]/5 via-transparent to-[#10B981]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="relative w-full h-[320px] md:h-[400px] lg:h-[460px] rounded-3xl overflow-hidden border border-white/[0.04] bg-brand-bg shadow-2xl">
              <img
                src="/tow_truck_night.jpg"
                alt="Scale Nationwide Vendor Operations"
                className="w-full h-full object-cover opacity-75 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1500ms] ease-out"
              />

              {/* Edge mask gradients to melt the image into background */}
              <div className="absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-brand-bg via-brand-bg/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-brand-bg to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-1/5 bg-gradient-to-b from-brand-bg to-transparent pointer-events-none" />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-brand-bg/10 mix-blend-multiply pointer-events-none" />
              
              {/* Soft bloom simulation overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/10 via-transparent to-[#FF7A1A]/5 opacity-30 mix-blend-screen pointer-events-none" />
            </div>

            {/* Futuristic Telemetry HUD Border Corner Accents */}
            <div className="absolute top-4 left-4 h-6 w-6 border-t-2 border-l-2 border-[#2F80FF]/30 rounded-tl pointer-events-none group-hover:border-[#2F80FF]/60 transition-colors" />
            <div className="absolute bottom-4 right-4 h-6 w-6 border-b-2 border-r-2 border-[#2F80FF]/30 rounded-br pointer-events-none group-hover:border-[#2F80FF]/60 transition-colors" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
