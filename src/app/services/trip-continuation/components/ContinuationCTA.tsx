'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContinuationCTA = () => {
  return (
    <section className="py-44 relative z-10 bg-brand-bg overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-7">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-6">
                   Modernize Your Mobility <br />Continuation Operations
                </h2>
                <p className="text-lg text-brand-slate font-medium leading-relaxed mb-12 max-w-xl">
                   Connect with Nationwide Roadside Assist to streamline customer mobility assistance, automate transportation coordination, and optimize enterprise roadside continuity systems.
                </p>

                <div className="flex flex-wrap gap-4">
                   <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-bold h-14 px-8 rounded-xl shadow-[0_20px_40px_rgba(47,128,255,0.3)] group">
                      Contact Enterprise Team <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                   <Button variant="outline" size="lg" suppressHydrationWarning className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-14 px-8 rounded-xl font-bold uppercase tracking-widest text-[11px] group">
                      Request Capability Report <FileText className="ml-3 h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                   </Button>
                </div>
             </motion.div>
           </div>
           
           <div className="lg:col-span-5 hidden lg:flex justify-end">
              <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 0.8, scale: 1 }}
                 transition={{ duration: 1.5 }}
                 className="h-[400px] w-full max-w-md rounded-3xl overflow-hidden border border-brand-border relative"
              >
                 <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-transparent to-transparent z-10" />
                 <img 
                    src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" 
                    alt="Enterprise Mobility Operations" 
                    className="w-full h-full object-cover mix-blend-luminosity opacity-70"
                 />
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};
