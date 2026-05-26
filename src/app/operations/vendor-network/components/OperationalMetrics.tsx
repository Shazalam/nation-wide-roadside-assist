'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
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
    desc: "Seamless dispatch capabilities via a vast nationwide network of certified towing, recovery, and mobile service providers.",
    color: "#2F80FF",
    sparkline: "M0,12 Q15,3 30,18 T60,8 T90,20 L100,10",
    status: "ACTIVE"
  },
  {
    icon: Clock,
    label: "Customer Response Window",
    value: "30s - 4m",
    subLabel: "response coordination",
    desc: "Rapid triage and dispatch commitment, routing emergency calls to the nearest regional units under strict service intervals.",
    color: "#10B981",
    sparkline: "M0,8 L15,18 L30,12 L45,22 L60,5 L75,15 L90,10 L100,20",
    status: "OPTIMIZED"
  },
  {
    icon: Compass,
    label: "Average ETA to Customer",
    value: "~60 min",
    subLabel: "intelligent route optimization",
    desc: "Proactive routing calculations account for heavy traffic, weather impediments, and vehicle specs to ensure fast arrival times.",
    color: "#2F80FF",
    sparkline: "M0,20 Q10,5 25,15 T50,5 T75,20 L100,12",
    status: "LIVE ROUTING"
  },
  {
    icon: MapPin,
    label: "Coverage Ecosystem",
    value: "USA & CANADA",
    subLabel: "cross-border operations",
    desc: "Comprehensive operational presence spanning state lines, provinces, and major transport corridors with local unit allocations.",
    color: "#10B981",
    sparkline: "M0,15 L20,15 L30,5 L40,20 L50,12 L60,12 L70,22 L80,5 L100,12",
    status: "ACTIVE"
  },
  {
    icon: Activity,
    label: "Dispatch Continuity",
    value: "24/7/365",
    subLabel: "live roadside monitoring",
    desc: "Continuous system telemetry and human operator surveillance to manage breakdown alerts and road hazards without interruption.",
    color: "#2F80FF",
    sparkline: "M0,12 C10,12 15,22 25,22 C35,22 40,5 50,5 C60,5 65,15 75,15 C85,15 90,8 100,8",
    status: "LIVE OPS"
  },
  {
    icon: Shield,
    label: "Recovery Coordination",
    value: "PRECISION",
    subLabel: "excellence in dispatch",
    desc: "Standardized operating procedures and dedicated incident coordinators handling heavy-duty, multi-vehicle, and complex recoveries.",
    color: "#10B981",
    sparkline: "M0,12 Q15,3 30,18 T60,8 T90,20 L100,10",
    status: "CERTIFIED"
  },
  {
    icon: Server,
    label: "Real-Time Visibility",
    value: "LIVE TRACKING",
    subLabel: "vendor telemetry tracking",
    desc: "Full visibility for enterprise clients with live updates from vehicles, matching status feeds directly to customer client systems.",
    color: "#2F80FF",
    sparkline: "M0,8 L15,18 L30,12 L45,22 L60,5 L75,15 L90,10 L100,20",
    status: "CONNECTED"
  },
  {
    icon: Layers,
    label: "Multi-Service Coverage",
    value: "FULL SPECTRUM",
    subLabel: "towing, battery, lockout & tire",
    desc: "Equipped for light-duty to heavy-duty towing, jumpstarts, lockouts, fuel delivery, winch-outs, and vehicle recovery operations.",
    color: "#10B981",
    sparkline: "M0,20 Q10,5 25,15 T50,5 T75,20 L100,12",
    status: "AVAILABLE"
  },
  {
    icon: Zap,
    label: "Enterprise Mobility",
    value: "B2B / B2C",
    subLabel: "insurance, rental & fleets",
    desc: "Custom operational pipelines supporting large insurers, car rental agencies, and logistics companies with priority SLAs.",
    color: "#2F80FF",
    sparkline: "M0,15 L20,15 L30,5 L40,20 L50,12 L60,12 L70,22 L80,5 L100,12",
    status: "ENABLED"
  },
  {
    icon: Activity,
    label: "Availability Intelligence",
    value: "DYNAMIC",
    subLabel: "active vendor tracking",
    desc: "Intelligent resource allocation engines matching requests to nearest certified vendors who are currently online and available.",
    color: "#10B981",
    sparkline: "M0,12 C10,12 15,22 25,22 C35,22 40,5 50,5 C60,5 65,15 75,15 C85,15 90,8 100,8",
    status: "ONLINE"
  },
  {
    icon: Globe,
    label: "Cross-Border Reach",
    value: "TRANS-BORDER",
    subLabel: "u.s. & canadian coordination",
    desc: "Operational frameworks that permit seamless transitions and emergency response routing across boundary borders with ease.",
    color: "#2F80FF",
    sparkline: "M0,12 Q15,3 30,18 T60,8 T90,20 L100,10",
    status: "CONFIGURED"
  },
  {
    icon: Shield,
    label: "Recovery Reliability",
    value: "HIGH-VOLUME",
    subLabel: "nationwide scale systems",
    desc: "Robust architecture capable of managing sudden demand surges during severe weather, traffic peaks, or wide regional outages.",
    color: "#10B981",
    sparkline: "M0,8 L15,18 L30,12 L45,22 L60,5 L75,15 L90,10 L100,20",
    status: "ACTIVE"
  },
  {
    icon: Activity,
    label: "Operational SLA Monitoring",
    value: "99.9% SLA",
    subLabel: "service consistency tracking",
    desc: "Continuous compliance tracking, measuring response milestones, arrival times, and vendor resolution rates for strict accountability.",
    color: "#2F80FF",
    sparkline: "M0,20 Q10,5 25,15 T50,5 T75,20 L100,12",
    status: "MONITORED"
  },
  {
    icon: Zap,
    label: "Fleet Mobility Continuity",
    value: "MIN. DOWNTIME",
    subLabel: "rapid roadside systems",
    desc: "Reduces commercial downtime by optimizing towing and mobile repairs, getting assets back on the road in shortest intervals.",
    color: "#10B981",
    sparkline: "M0,15 L20,15 L30,5 L40,20 L50,12 L60,12 L70,22 L80,5 L100,12",
    status: "LIVE"
  },
  {
    icon: Compass,
    label: "Intelligent Routing",
    value: "ADAPTIVE",
    subLabel: "proximity & traffic routing",
    desc: "Proactive routing routing logic selects optimal towing vectors, avoiding choke points and matching vehicles based on active load.",
    color: "#2F80FF",
    sparkline: "M0,12 C10,12 15,22 25,22 C35,22 40,5 50,5 C60,5 65,15 75,15 C85,15 90,8 100,8",
    status: "OPTIMIZED"
  }
];

export const OperationalMetrics = () => {
  return (
    <section className="py-24 relative bg-brand-bg border-t border-brand-border overflow-hidden">
      {/* Background Ambience matching original theme */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Left-aligned Title Block matching original layout */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#2F80FF]/30" />
            <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tight uppercase">
              Nationwide Operational Metrics
            </h2>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-black uppercase tracking-wider font-mono">Live Status: Active</span>
            </div>
          </div>
          <p className="text-brand-slate text-sm font-medium max-w-3xl leading-relaxed pl-11">
            An always-active nationwide roadside infrastructure engineered for precision, response speed, and uninterrupted mobility.
          </p>
        </div>

        {/* 5-Column Grid using Original Glass Card style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <GlassPanel className="p-5 border-brand-border bg-card/55 backdrop-blur-[24px] hover:border-[#2F80FF]/40 hover:bg-card/80 h-full flex flex-col justify-between group transition-all duration-300 relative overflow-hidden rounded-[24px]">
                  
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div>
                    {/* Top status bar inside card */}
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10B981]" />
                        <span className="text-[8px] font-black font-mono text-emerald-400 tracking-wider uppercase">{metric.status}</span>
                      </div>
                      
                      {/* Sparkline Graphic */}
                      <div className="h-5 w-16 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-full h-full" viewBox="0 0 100 25">
                          <path
                            d={metric.sparkline}
                            fill="none"
                            stroke={metric.color}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Metric Large Value */}
                    <div className="text-2xl font-black font-mono text-foreground dark:text-white tracking-tight">
                      {metric.value}
                    </div>

                    {/* Metric Heading */}
                    <div className="text-[10px] font-black uppercase text-brand-slate tracking-widest mt-3 flex items-center gap-1.5">
                      <Icon className="h-3 w-3 text-[#2F80FF]/70" />
                      <span>{metric.label}</span>
                    </div>

                    {/* Sub Label */}
                    <div className="text-[9px] font-bold text-[#2F80FF] uppercase tracking-wider mt-1 mb-3">
                      {metric.subLabel}
                    </div>
                  </div>

                  {/* Operational Description */}
                  <p className="text-[10px] text-brand-slate leading-relaxed font-medium border-t border-white/[0.04] pt-3 mt-3">
                    {metric.desc}
                  </p>

                </GlassPanel>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
