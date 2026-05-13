'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, UserCheck, Route, Truck, MapPin, CheckCircle2, FileText } from 'lucide-react';

const steps = [
  { id: 1, title: 'Incident Reported', desc: 'Customer or system submits an incident', icon: ShieldAlert },
  { id: 2, title: 'Customer Validation', desc: 'Verify customer details & trip requirements', icon: UserCheck },
  { id: 3, title: 'Mobility Options', desc: 'Generate best travel & mobility options', icon: Route },
  { id: 4, title: 'Transportation Assigned', desc: 'Assign transportation or lodging solution', icon: Truck },
  { id: 5, title: 'Live ETA Tracking', desc: 'Customer receives real-time ETA & updates', icon: MapPin },
  { id: 6, title: 'Continuation Confirmed', desc: 'Customer reaches destination or continues trip', icon: CheckCircle2 },
  { id: 7, title: 'Automated Reporting', desc: 'Reports, invoices & analytics generated', icon: FileText }
];

export const WorkflowTimeline = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Trip Continuation Workflow
           </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
           {/* Connecting Line (Desktop) */}
           <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent -translate-y-1/2 hidden lg:block" />
           
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
                      <div className="h-16 w-16 rounded-full bg-[#081120] border-2 border-white/10 flex items-center justify-center relative z-10 group-hover:border-[#2F80FF] group-hover:shadow-[0_0_20px_rgba(47,128,255,0.4)] transition-all bg-clip-padding">
                         <step.icon className="h-6 w-6 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-[#2F80FF] text-white flex items-center justify-center text-[10px] font-black border-2 border-[#081120] z-20">
                         {step.id}
                      </div>
                   </div>

                   <h3 className="text-[10px] font-black text-white mb-2 uppercase tracking-widest leading-tight">
                      {step.title}
                   </h3>
                   <p className="text-[10px] text-[#94A3B8] font-medium leading-tight max-w-[140px]">
                      {step.desc}
                   </p>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};
