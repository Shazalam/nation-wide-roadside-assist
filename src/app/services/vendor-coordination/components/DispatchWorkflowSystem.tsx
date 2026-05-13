'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, UserCheck, Search, Zap, MapPin, CheckCircle2, FileText } from 'lucide-react';

const steps = [
  { id: 1, title: 'Incident Reported', icon: ShieldAlert },
  { id: 2, title: 'Customer Validation', icon: UserCheck },
  { id: 3, title: 'Vendor Match Engine', icon: Search },
  { id: 4, title: 'Dispatch Assignment', icon: Zap },
  { id: 5, title: 'Live GPS Tracking', icon: MapPin },
  { id: 6, title: 'Recovery/Tow Completion', icon: CheckCircle2 },
  { id: 7, title: 'Automated Billing & Reporting', icon: FileText }
];

export const DispatchWorkflowSystem = () => {
  return (
    <section className="py-32 bg-[#0A192F]/30 relative z-10 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Dispatch Workflow
           </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent hidden lg:block" />
           <div className="absolute top-8 left-[30%] right-[30%] h-0.5 bg-transparent border-t border-dashed border-[#2F80FF]/50 hidden lg:block" />
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center group relative"
                >
                   <div className="relative mb-6">
                      <div className={`h-16 w-16 rounded-full border-2 border-[#2F80FF]/20 flex items-center justify-center relative z-10 group-hover:border-[#2F80FF] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all bg-[#081120] ${i === 6 ? 'border-[#FF7A1A]/30 group-hover:border-[#FF7A1A] group-hover:shadow-[0_0_20px_rgba(255,122,26,0.4)]' : ''}`}>
                         <step.icon className={`h-6 w-6 ${i === 6 ? 'text-[#FF7A1A]' : 'text-[#2F80FF]'}`} />
                      </div>
                      
                      {/* Step Number */}
                      <div className="absolute -bottom-1 -left-2 text-2xl font-black text-white/10 group-hover:text-white/30 transition-colors z-0">
                         {step.id}
                      </div>
                   </div>

                   <h3 className="text-[10px] font-black text-white uppercase tracking-widest leading-tight max-w-[120px]">
                      {step.title}
                   </h3>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
