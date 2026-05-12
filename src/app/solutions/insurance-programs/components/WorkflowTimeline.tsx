'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserPlus, ShieldCheck, Search, Radio, 
  Wrench, FileText, ChevronRight, Zap
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Customer Request Initiated',
    description: 'Member requests assistance via app, web, or phone integration.',
    icon: UserPlus,
  },
  {
    id: 2,
    title: 'Claims Validation',
    description: 'Policy verification and eligibility confirmation in real-time.',
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: 'Intelligent Vendor Routing',
    description: 'AI matches the best vendor based on SLA, location & capacity.',
    icon: Search,
  },
  {
    id: 4,
    title: 'Live Dispatch Tracking',
    description: 'Real-time tracking and updates for complete visibility.',
    icon: Radio,
  },
  {
    id: 5,
    title: 'Roadside Resolution',
    description: 'Vendor arrives, issue resolved, member satisfied.',
    icon: Wrench,
  },
  {
    id: 6,
    title: 'Automated Billing & Reporting',
    description: 'Claims closed, billing automated, reports generated.',
    icon: FileText,
  },
];

export default function WorkflowTimeline() {
  return (
    <section className="py-32 bg-[#0A192F]/40 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7A1A]/10 border border-[#FF7A1A]/20 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5 text-[#FF7A1A]" />
            <span className="text-[10px] font-bold text-[#FF7A1A] uppercase tracking-widest">End-to-End Operational Lifecycle</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
            Insurance Operations Workflow
          </h2>
          <p className="text-[#94A3B8] text-xl leading-relaxed">
            Our automated mesh streamlines the entire roadside claims lifecycle, ensuring total visibility and operational compliance at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line Backdrop (Desktop) */}
          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/5 to-transparent hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Circle / Icon Container */}
                  <div className="relative mb-8">
                     {/* Pulsing Aura */}
                     <div className="absolute -inset-6 bg-blue-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                     
                     <div className="relative w-20 h-20 rounded-[2rem] bg-[#081120] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.2)]">
                        <Icon className="w-8 h-8 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A192F] border border-white/10 flex items-center justify-center text-[10px] font-black text-white group-hover:border-[#2F80FF]/50 group-hover:text-[#2F80FF] transition-all">
                           {step.id}
                        </div>
                     </div>
                  </div>

                  <h3 className="text-sm font-black text-white mb-4 uppercase tracking-widest leading-snug group-hover:text-[#2F80FF] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed max-w-[180px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                    {step.description}
                  </p>

                  {/* Desktop Connecting Arrow (Visual only) */}
                  {i < steps.length - 1 && (
                    <div className="absolute top-[40px] right-[-30px] hidden lg:block">
                       <ChevronRight className="w-5 h-5 text-white/10" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Feature Focus Box */}
        <div className="mt-32 max-w-5xl mx-auto p-1 rounded-[2.5rem] bg-gradient-to-r from-blue-500/20 via-transparent to-[#FF7A1A]/20">
           <div className="bg-[#081120] rounded-[2.4rem] p-10 md:p-14 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="space-y-4 text-center md:text-left">
                 <div className="text-4xl font-black text-white">42% Faster Resolution</div>
                 <p className="text-[#94A3B8] text-sm max-w-xl">
                   By automating class matching and intelligent vendor routing, our infrastructure significantly reduces claim lifecycle duration compared to legacy methods.
                 </p>
              </div>
              <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all whitespace-nowrap">
                 View Operational Report
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}
