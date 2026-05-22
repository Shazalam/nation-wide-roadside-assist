'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const RecoveryCTA = () => {
  return (
    <section className="py-44 relative z-10 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
           <h2 className="text-5xl lg:text-7xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-10">
              Modernize Your Recovery <br />Operations Infrastructure
           </h2>
           <p className="text-xl text-brand-slate font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
              Connect with Nationwide Roadside Assist to streamline heavy-duty recovery coordination, automate dispatch operations, and optimize enterprise roadside recovery systems.
           </p>

           <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-12 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.3)] group">
                 Contact Recovery Team <Send className="ml-3 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-12 rounded-2xl font-black uppercase tracking-widest text-[11px] group">
                 Request Capability Report <FileText className="ml-3 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
           </div>
        </motion.div>

        {/* Floating Mechanic Image/Overlay Decoration (Reusing a high-quality recovery visual) */}
        <div className="mt-32 relative">
           <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent z-10" />
           <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="h-[500px] w-full rounded-[3rem] overflow-hidden border border-brand-border"
           >
              <img 
                 src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1600" 
                 alt="Recovery Operations" 
                 className="w-full h-full object-cover grayscale"
              />
           </motion.div>
        </div>
      </div>
    </section>
  );
};
