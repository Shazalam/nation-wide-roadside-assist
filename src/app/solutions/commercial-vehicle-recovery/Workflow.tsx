'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, Search, UserCheck, Truck, 
  CheckCircle2, FileText, ArrowRight, Zap 
} from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Incident Detected',
    description: 'Fleet vehicle incident is reported via API, mobile app, or connected vehicle telemetry.',
    icon: AlertTriangle,
    color: '#2F80FF',
  },
  {
    id: 2,
    title: 'Vehicle Classification',
    description: 'AI-driven classification engine determines vehicle class (1-8) and required recovery equipment.',
    icon: Search,
    color: '#2F80FF',
  },
  {
    id: 3,
    title: 'Vendor Assignment',
    description: 'The closest certified heavy-duty vendor is automatically assigned based on capability and proximity.',
    icon: UserCheck,
    color: '#FF7A1A',
  },
  {
    id: 4,
    title: 'Recovery Dispatch',
    description: 'Real-time dispatch telemetry coordinates the recovery unit to the precise incident location.',
    icon: Truck,
    color: '#FF7A1A',
  },
  {
    id: 5,
    title: 'Onsite Resolution',
    description: 'Specialized operators resolve the incident, with status updates streamed directly to the platform.',
    icon: CheckCircle2,
    color: '#2F80FF',
  },
  {
    id: 6,
    title: 'Automated Reporting',
    description: 'Full incident data, media, and billing are automatically generated and synchronized to fleet systems.',
    icon: FileText,
    color: '#2F80FF',
  },
];

export default function Workflow() {
  return (
    <section className="py-32 bg-[#0A192F]/30 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Zap className="w-3 h-3 text-[#2F80FF]" />
            <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Operational Lifecycle</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
            Enterprise Recovery Workflow
          </h2>
          <p className="text-[#94A3B8] text-lg leading-relaxed">
            Our automated operational mesh streamlines the entire recovery lifecycle, reducing downtime and ensuring total visibility from incident to resolution.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Circle / Icon */}
                    <div className="relative mb-8">
                       {/* Pulsing ring for active-feeling steps */}
                       <div className="absolute -inset-4 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                       
                       <div className="relative w-20 h-20 rounded-3xl bg-[#081120] border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(47,128,255,0.2)]">
                          <Icon className="w-8 h-8 text-[#94A3B8] group-hover:text-[#2F80FF] transition-colors" />
                          <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#0A192F] border border-white/10 flex items-center justify-center text-[10px] font-black text-white">
                             0{step.id}
                          </div>
                       </div>
                    </div>

                    <h3 className="text-lg font-black text-white mb-4 group-hover:text-[#2F80FF] transition-colors">{step.title}</h3>
                    <p className="text-[11px] text-[#94A3B8] leading-relaxed max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">
                      {step.description}
                    </p>

                    {/* Mobile/Tablet Arrow */}
                    {i < steps.length - 1 && (
                      <div className="mt-8 lg:hidden">
                        <ArrowRight className="w-5 h-5 text-white/10 rotate-90 md:rotate-0" />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA / Metric */}
        <div className="mt-32 p-1 rounded-3xl bg-gradient-to-r from-blue-500/20 via-transparent to-orange-500/20 max-w-4xl mx-auto">
           <div className="bg-[#081120] rounded-[22px] p-8 md:p-12 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2">
                 <div className="text-3xl font-black text-white">42% Faster Resolution</div>
                 <p className="text-sm text-[#94A3B8]">Compared to traditional dispatch methods through automated class matching.</p>
              </div>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                Download Operational Report
              </button>
           </div>
        </div>

      </div>
    </section>
  );
}
