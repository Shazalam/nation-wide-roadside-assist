'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Zap, Code2, Clock, Shield, Activity } from 'lucide-react';

export const CoreCapabilities = () => {
  return (
    <section className="py-32 relative z-10 bg-[#020617]" id="core-capabilities">
      <div className="container mx-auto px-4 lg:px-12">
        
        {/* Section Heading - Static and Prominent */}
        <div className="text-center max-w-5xl mx-auto mb-32 space-y-8">
            
            
            <h2 className="text-6xl lg:text-[6rem] font-black text-white tracking-tighter leading-[0.9] uppercase italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Core <span className="text-brand-blue tracking-normal">Capabilities</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium opacity-80">
              Enterprise-grade recovery coordination, SLA-driven dispatch intelligence, and API-first infrastructure.
            </p>
        </div>
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {[
            {
              title: 'Nationwide Heavy Recovery',
              desc: 'Access our contractually vetted, nation-wide network of elite class 1–8 heavy-duty towing specialists. Equipped with state-of-the-art rotators, lowboys, and underlifts, our operators deliver high-capacity recovery coordination for commercial fleets under any operational environment.',
              icon: Globe,
            },
            {
              title: 'SLA Driven Dispatch',
              icon: Zap,
              desc: 'Our automated dispatch engine enforces strict response metrics with real-time operator tracking and geo-fenced ETA validations. Built to secure commercial supply chain continuity, our system delivers contractually backed response performance to minimize vehicle downtime.',
            },
            {
              title: 'Commercial Recovery APIs',
              icon: Code2,
              desc: 'Integrate roadside telemetry directly into your TMS, ERP, or fleet management software. Our ultra-fast, robust APIs enable seamless real-time dispatch ordering, live webhook event tracking, automated invoicing, and digital claim documentation flow.',
            },
            {
              title: 'Mission-Critical SLAs',
              icon: Clock,
              desc: 'Secure guaranteed roadside assistance coverage with tailored, high-priority service level agreements. From instant dispatch priority to custom multi-unit mobilization schedules, our operations team ensures constant operational uptime for your critical logistics.',
            },
            {
              title: 'Operational Compliance',
              icon: Shield,
              desc: 'Rest easy with comprehensive regulatory compliance, complete hazard mitigation protocols, and elite commercial insurance coverage. Every dispatch complies with state, federal, and local transportation laws, ensuring safe and legally protected operations.',
            },
            {
              title: 'Forensic Audit Trails',
              icon: Activity,
              desc: 'Gain total operational accountability with comprehensive end-to-end event logs and forensic data streams. Every recovery operation is fully documented with high-resolution digital photos, timestamped telemetry points, and transparent cost breakdowns.',
            }
          ].map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="relative h-full"
            >
              {/* Pure Custom Glassmorphism Card Wrapper */}
              <div className="relative pt-20 pb-12 px-10 border border-brand-border bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group h-full flex flex-col rounded-[3.5rem] hover:border-brand-blue/40 shadow-2xl">
                
                {/* Subtle Inner Highlight Border */}
                <div className="absolute inset-px rounded-[3.4rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Floating Half-Inside/Half-Outside Icon sits perfectly on the top rounded shoulder border, offset left-12 */}
                <div className="absolute -top-8 left-12 h-16 w-16 rounded-2xl bg-[#020617] border border-brand-blue/30 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 flex items-center justify-center transition-all duration-500 shadow-[0_6px_24px_rgba(0,0,0,0.6)] z-20">
                  <cap.icon className="h-8 w-8 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                </div>
                
                {/* Card Content Area */}
                <div className="flex-1 flex flex-col justify-start relative z-10">
                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-brand-blue transition-colors uppercase italic">
                    {cap.title}
                  </h4>
                  <p className="text-brand-slate text-[13.5px] leading-relaxed font-medium group-hover:text-foreground/85 transition-colors">
                    {cap.desc}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
