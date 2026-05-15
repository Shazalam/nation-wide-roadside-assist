'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Truck, Fuel, Lock, Battery, Gauge, Wrench, 
  Wind, Thermometer, ShieldCheck, Activity, Search,
  AlertTriangle, ArrowUpRight
} from 'lucide-react';

const services = [
  { 
    id: 1, 
    title: 'Battery Jump Starts', 
    icon: Battery, 
    desc: 'Advanced voltage diagnostics and emergency jump-start recovery for all vehicle classes.',
    metrics: { eta: '18m', coverage: '99%', trend: '+2.4%' }
  },
  { 
    id: 2, 
    title: 'Tire Change Assistance', 
    icon: Truck, 
    desc: 'Rapid roadside tire changes for passenger and commercial vehicles with heavy-duty capability.',
    metrics: { eta: '24m', coverage: '98%', trend: 'Stable' }
  },
  { 
    id: 3, 
    title: 'Flat Tire Repair', 
    icon: Activity, 
    desc: 'On-site plug and patch services to get vehicles back on the road without towing.',
    metrics: { eta: '28m', coverage: '96%', trend: '+1.8%' }
  },
  { 
    id: 4, 
    title: 'Fuel Delivery', 
    icon: Fuel, 
    desc: 'Emergency fuel and DEF delivery for passenger cars, RVs, and commercial trucking fleets.',
    metrics: { eta: '15m', coverage: '99%', trend: '-5%' }
  },
  { 
    id: 5, 
    title: 'Lockout Assistance', 
    icon: Lock, 
    desc: 'Non-destructive vehicle entry for locked-out drivers using specialized enterprise tools.',
    metrics: { eta: '22m', coverage: '94%', trend: 'Stable' }
  },
  { 
    id: 6, 
    title: 'Mobile Diagnostics', 
    icon: Search, 
    desc: 'Full-system computer diagnostics and error code clearing at the point of breakdown.',
    metrics: { eta: '35m', coverage: '92%', trend: '+4.2%' }
  },
  { 
    id: 7, 
    title: 'Emergency Repairs', 
    icon: AlertTriangle, 
    desc: 'On-site mechanical interventions for starters, alternators, and minor engine components.',
    metrics: { eta: '45m', coverage: '88%', trend: '+0.5%' }
  },
  { 
    id: 8, 
    title: 'Hose & Belt Replacement', 
    icon: Wrench, 
    desc: 'Field replacement of critical cooling and drive components for fleet resilience.',
    metrics: { eta: '55m', coverage: '91%', trend: 'Stable' }
  },
  { 
    id: 9, 
    title: 'Electrical Repairs', 
    icon: Zap, 
    desc: 'Advanced troubleshooting and repair of vehicle electrical systems and wiring.',
    metrics: { eta: '60m', coverage: '85%', trend: '+2.1%' }
  },
  { 
    id: 10, 
    title: 'Cooling System Service', 
    icon: Thermometer, 
    desc: 'Emergency radiator repairs and coolant system pressure testing in the field.',
    metrics: { eta: '50m', coverage: '89%', trend: '-2%' }
  },
  { 
    id: 11, 
    title: 'Minor Mechanical Repairs', 
    icon: Gauge, 
    desc: 'Broad spectrum on-site mechanical support for non-major failure events.',
    metrics: { eta: '65m', coverage: '82%', trend: 'Stable' }
  },
  { 
    id: 12, 
    title: 'Fleet Maintenance Support', 
    icon: ShieldCheck, 
    desc: 'Scheduled on-site preventive maintenance and inspection for commercial operators.',
    metrics: { eta: 'Sched', coverage: '100%', trend: '+12%' }
  }
];

export const ServicesGrid = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />

      <div className="container mx-auto px-6 lg:px-12 max-w-[1536px]">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-32">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center justify-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Service Catalog</span>
           </motion.div>
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-8">
              Comprehensive Mobile <br /><span className="text-[#2F80FF]">Field Solutions</span>
           </h2>
           <p className="text-brand-slate font-medium text-lg max-w-2xl mx-auto leading-relaxed">
             Rapid, on-site mechanical resolution engineered for nationwide fleet resilience and maximum uptime.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
           {services.map((s, i) => (
             <motion.div
               key={s.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
               whileHover={{ scale: 1.08, y: -24 }}
               className="relative group cursor-pointer"
             >
                {/* 50/50 Overlapping Icon */}
                <div className="absolute -top-6 left-8 h-12 w-12 bg-[#2F80FF] rounded-xl flex items-center justify-center z-30 shadow-[0_10px_25px_rgba(47,128,255,0.4)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                   <s.icon className="h-5 w-5 text-foreground dark:text-white" />
                </div>

                {/* Main Card */}
                <div className="h-full bg-card/60 backdrop-blur-2xl border border-brand-border rounded-[24px] p-8 pt-10 flex flex-col relative overflow-hidden group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 transition-all duration-500 shadow-2xl">
                   {/* Background Visual Fade */}
                   <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   
                   <div className="relative z-10 flex-1">
                      <div className="flex items-start justify-between mb-6">
                         <h3 className="text-lg font-black text-foreground dark:text-white leading-tight max-w-[150px] group-hover:text-[#2F80FF] transition-colors">
                            {s.title}
                         </h3>
                         <div className="h-8 w-8 bg-white/5 border border-brand-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ArrowUpRight className="h-4 w-4 text-[#2F80FF]" />
                         </div>
                      </div>
                      
                      <p className="text-[12px] text-brand-slate font-medium leading-relaxed mb-8 line-clamp-2">
                         {s.desc}
                      </p>
                   </div>

                   {/* Telemetry Block */}
                   <div className="relative z-10 pt-6 border-t border-brand-border flex items-end justify-between">
                      <div className="space-y-1.5">
                         <div className="flex items-center gap-2">
                            <span className="text-[8px] font-black text-brand-slate uppercase tracking-[0.2em]">ETA</span>
                            <span className="text-[11px] font-black text-foreground dark:text-white">{s.metrics.eta}</span>
                         </div>
                         <div className="flex items-center gap-2">
                            <span className="text-[8px] font-black text-brand-slate uppercase tracking-[0.2em]">Status</span>
                            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest">{s.metrics.trend}</span>
                         </div>
                      </div>

                      <div className="text-right">
                         <span className="text-[8px] font-black text-brand-slate uppercase tracking-[0.3em] block mb-1">Coverage</span>
                         <span className="text-xl font-black text-foreground dark:text-white">{s.metrics.coverage}</span>
                      </div>
                   </div>

                   {/* Hover Glow Edge */}
                   <div className="absolute inset-0 border border-transparent group-hover:border-[#2F80FF]/10 rounded-[24px] pointer-events-none transition-all duration-500" />
                </div>
             </motion.div>
           ))}
        </div>

        {/* Support Banner (Upgraded) */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-32"
        >
           <div className="bg-card/60 backdrop-blur-2xl border border-[#2F80FF]/20 rounded-[40px] overflow-hidden relative group">
              <div className="flex flex-col lg:flex-row items-center">
                 <div className="p-12 lg:p-20 flex-1 space-y-8 relative z-10">
                    <div className="flex items-center gap-4">
                       <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse" />
                       <span className="text-xs font-black text-emerald-400 uppercase tracking-[0.4em]">Global Operations Ready</span>
                    </div>
                    <h3 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tighter leading-tight">
                       24/7 Mission-Critical <br /><span className="text-[#2F80FF]">Emergency Support</span>
                    </h3>
                    <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-xl">
                       Our unified dispatch coordination center is available around the clock to get your fleet back on the road. High-priority resolution for all mechanical events.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                       <button className="px-10 py-5 bg-[#2F80FF] text-foreground dark:text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_10px_30px_rgba(47,128,255,0.4)] hover:scale-105 active:scale-95 transition-all">
                          Request Support Now
                       </button>
                       <button className="px-10 py-5 bg-white/5 border border-brand-border text-foreground dark:text-white text-xs font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white/10 transition-all">
                          Live Status Hub
                       </button>
                    </div>
                 </div>
                 
                 <div className="w-full lg:w-[450px] h-[350px] lg:h-auto self-stretch relative">
                    <div className="absolute inset-0 bg-brand-bg/40 z-10" />
                    <img 
                       src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                       alt="Service Support" 
                       className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#081120] via-transparent to-transparent z-20" />
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
