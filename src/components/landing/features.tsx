'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Shield, Cpu, Network, Wrench, Server, Cloud, GitMerge } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: "Dispatch Intelligence",
    description: "Proprietary mesh algorithms coordinate nationwide vendors for sub-15 minute response times.",
  },
  {
    icon: Globe,
    title: "Nationwide Mesh",
    description: "Access over 3,000+ certified heavy-duty and light-duty recovery nodes across North America.",
  },
  {
    icon: Shield,
    title: "Sovereign Security",
    description: "SOC 2 Type II compliant infrastructure with end-to-end encrypted telemetry and data sovereignty.",
  },
  {
    icon: Network, // Global network icon
    title: "GLOBAL MOBILITY GRID",
    description: "Cross-border roadside operations connecting USA, Canada, and European support ecosystems.",
  },
  {
    icon: Wrench, // Tow truck / Wrench icon
    title: "FLEET RECOVERY NETWORK",
    description: "Integrated towing and recovery infrastructure optimized for commercial fleet operations.",
  },
  {
    icon: Server, // Server / Database icon
    title: "ENTERPRISE DISPATCH CORE",
    description: "High-availability dispatch architecture built for mission-critical roadside response operations.",
  },
  {
    icon: Cloud,
    title: "ENTERPRISE MOBILITY CLOUD",
    description: "Scalable cloud infrastructure designed for high-volume roadside operations.",
  },
  {
    icon: GitMerge,
    title: "SMART ESCALATION ENGINE",
    description: "Automated escalation workflows ensure rapid resolution for high-priority mobility incidents.",
  },
  {
    icon: Cpu, // Connected towing and recovery
    title: "DIGITAL RECOVERY NETWORK",
    description: "Connected towing and recovery ecosystem with intelligent dispatch coordination.",
  },

];

export const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#020712] z-10">
      <div className="container mx-auto px-4 lg:px-12 relative z-10">

        {/* Section Heading - Centered & Structured */}
        <div className="text-center max-w-5xl mx-auto mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[0.9] uppercase italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            Engineered for <span className="text-brand-blue tracking-normal">High-Stakes Mobility</span>
          </motion.h2>
        </div>

        {/* Capabilities Grid with Core Capabilities Styling (3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="relative h-full"
            >
              {/* Pure Custom Glassmorphism Card Wrapper */}
              <div className="relative pt-20 pb-12 px-10 border border-brand-border bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group h-full flex flex-col rounded-[3.5rem] hover:border-brand-blue/40 shadow-2xl">

                {/* Subtle Inner Highlight Border */}
                <div className="absolute inset-px rounded-[3.4rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Floating Half-Inside/Half-Outside Icon sits perfectly on the top rounded shoulder border, offset left-12 */}
                <div className="absolute -top-8 left-12 h-16 w-16 rounded-2xl bg-[#020712] border border-brand-blue/30 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 flex items-center justify-center transition-all duration-500 shadow-[0_6px_24px_rgba(0,0,0,0.6)] z-20">
                  <feature.icon className="h-8 w-8 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                </div>

                {/* Card Content Area */}
                <div className="flex-1 flex flex-col justify-start relative z-10">
                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-brand-blue transition-colors uppercase italic">
                    {feature.title}
                  </h4>
                  <p className="text-brand-slate text-[13.5px] leading-relaxed font-medium group-hover:text-foreground/85 transition-colors">
                    {feature.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[160px] pointer-events-none opacity-50 dark:opacity-100" />
    </section>
  );
};
