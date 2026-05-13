'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const EnterpriseCTA = () => {
  return (
    <section className="py-24 relative z-10 bg-[#081120] overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
           <div className="lg:col-span-8">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
                <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-6">
                   Modernize Recovery Operations <br />At Enterprise Scale
                </h2>
                <p className="text-sm text-[#94A3B8] font-medium leading-relaxed mb-10 max-w-xl">
                   Connect with Nationwide Trans Inc. to orchestrate fleet recovery operations, automate complex dispatch routing, and scale enterprise operational intelligence.
                </p>

                <div className="flex flex-wrap gap-4">
                   <Button size="lg" suppressHydrationWarning className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-12 px-8 rounded-lg shadow-[0_10px_30px_rgba(47,128,255,0.3)] group text-xs">
                      Contact Enterprise Operations <ArrowRight className="ml-3 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                   </Button>
                   <Button variant="outline" size="lg" suppressHydrationWarning className="border-white/10 text-white hover:bg-white/5 h-12 px-8 rounded-lg font-bold uppercase tracking-widest text-[10px] group">
                      Request Capability Report <FileText className="ml-3 h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                   </Button>
                </div>
             </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
};
