'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Clock, Compass, MapPin, Activity, 
  Shield, Server, Layers, Zap, Globe 
} from 'lucide-react';

const metrics = [
  {
    icon: Users,
    label: "Active Vendor Network",
    value: "3,000+",
    subLabel: "roadside & recovery partners",
    desc: "Seamless dispatch capabilities via a vast nationwide network of certified towing, recovery, and mobile service providers."
  },
  {
    icon: Clock,
    label: "Customer Response",
    value: "30s - 4m",
    subLabel: "response coordination",
    desc: "Rapid triage and dispatch commitment, routing emergency calls to the nearest regional units under strict service intervals."
  },
  {
    icon: Compass,
    label: "Average ETA",
    value: "~60 min",
    subLabel: "intelligent route optimization",
    desc: "Proactive routing calculations account for heavy traffic, weather impediments, and vehicle specs to ensure fast arrival times."
  },
  {
    icon: MapPin,
    label: "Coverage Ecosystem",
    value: "USA & CAN",
    subLabel: "cross-border operations",
    desc: "Comprehensive operational presence spanning state lines, provinces, and major transport corridors with local unit allocations."
  },
  {
    icon: Activity,
    label: "Dispatch Continuity",
    value: "24/7/365",
    subLabel: "live roadside monitoring",
    desc: "Continuous system telemetry and human operator surveillance to manage breakdown alerts and road hazards without interruption."
  },
  {
    icon: Zap,
    label: "Enterprise Mobility",
    value: "B2B/B2C",
    subLabel: "insurance, rental & fleets",
    desc: "Custom operational pipelines supporting large insurers, car rental agencies, and logistics companies with priority SLAs."
  },
  {
    icon: Server,
    label: "Availability Intelligence",
    value: "DYNAMIC",
    subLabel: "active vendor tracking",
    desc: "Intelligent resource allocation engines matching requests to nearest certified vendors who are currently online and available."
  },
  {
    icon: Shield,
    label: "Recovery Reliability",
    value: "HIGH-VOL",
    subLabel: "nationwide scale systems",
    desc: "Robust architecture capable of managing sudden demand surges during severe weather, traffic peaks, or wide regional outages."
  },
  {
    icon: Layers,
    label: "Fleet Continuity",
    value: "MIN. WAIT",
    subLabel: "rapid roadside systems",
    desc: "Reduces commercial downtime by optimizing towing and mobile repairs, getting assets back on the road in shortest intervals."
  },
  {
    icon: Globe,
    label: "Intelligent Routing",
    value: "ADAPTIVE",
    subLabel: "proximity & traffic routing",
    desc: "Proactive routing logic selects optimal towing vectors, avoiding choke points and matching vehicles based on active load."
  }
];

export const OperationalMetrics = () => {
  return (
    <section className="py-32 relative z-10 bg-[#020617]" id="operational-metrics">
      <div className="container mx-auto px-4 lg:px-6 max-w-[1536px]">
        
        {/* Section Heading - Static and Prominent */}
        <div className="text-center max-w-5xl mx-auto mb-32 space-y-8">
            <h2 className="text-5xl lg:text-[5rem] font-black text-white tracking-tighter leading-[1] uppercase italic drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              Operational <span className="text-brand-blue tracking-normal">Metrics</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium opacity-80">
              An always-active nationwide roadside infrastructure engineered for precision, response speed, and uninterrupted mobility.
            </p>
        </div>
        
        {/* Capabilities Grid - 5x2 format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
          {metrics.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              className="relative h-full"
            >
              {/* Pure Custom Glassmorphism Card Wrapper */}
              <div className="relative pt-16 pb-10 px-8 border border-brand-border bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-500 group h-full flex flex-col rounded-[2.5rem] hover:border-brand-blue/40 shadow-2xl">
                
                {/* Subtle Inner Highlight Border */}
                <div className="absolute inset-px rounded-[2.4rem] bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

                {/* Floating Half-Inside/Half-Outside Icon */}
                <div className="absolute -top-8 left-8 h-16 w-16 rounded-2xl bg-[#020617] border border-brand-blue/30 group-hover:border-brand-blue/60 group-hover:bg-brand-blue/10 flex items-center justify-center transition-all duration-500 shadow-[0_6px_24px_rgba(0,0,0,0.6)] z-20">
                  <cap.icon className="h-8 w-8 text-brand-blue group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                </div>
                
                {/* Card Content Area */}
                <div className="flex-1 flex flex-col justify-start relative z-10 mt-2">
                  <h4 className="text-2xl font-black text-white mb-1 tracking-tight group-hover:text-brand-blue transition-colors uppercase italic">
                    {cap.value}
                  </h4>
                  <h5 className="text-[11px] font-bold text-brand-blue mb-4 uppercase tracking-widest opacity-90">
                    {cap.label}
                  </h5>
                  <p className="text-brand-slate text-[12px] leading-relaxed font-medium group-hover:text-foreground/85 transition-colors">
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
