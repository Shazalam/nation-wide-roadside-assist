'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, Truck, Fuel, Lock, Battery, Gauge, Wrench, 
  Wind, Thermometer, ShieldCheck, Activity, Search 
} from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const services = [
  { 
    id: 1, 
    title: 'Battery Jump Starts', 
    icon: Battery, 
    desc: 'Advanced voltage diagnostics and emergency jump-start recovery for all vehicle classes.',
    metrics: { eta: '18m', coverage: '99%' }
  },
  { 
    id: 2, 
    title: 'Tire Change Assistance', 
    icon: Truck, 
    desc: 'Rapid roadside tire changes for passenger and commercial vehicles with heavy-duty capability.',
    metrics: { eta: '24m', coverage: '98%' }
  },
  { 
    id: 3, 
    title: 'Flat Tire Repair', 
    icon: Activity, 
    desc: 'On-site plug and patch services to get vehicles back on the road without towing.',
    metrics: { eta: '28m', coverage: '96%' }
  },
  { 
    id: 4, 
    title: 'Fuel Delivery', 
    icon: Fuel, 
    desc: 'Emergency fuel and DEF delivery for passenger cars, RVs, and commercial trucking fleets.',
    metrics: { eta: '15m', coverage: '99%' }
  },
  { 
    id: 5, 
    title: 'Lockout Assistance', 
    icon: Lock, 
    desc: 'Non-destructive vehicle entry for locked-out drivers using specialized enterprise tools.',
    metrics: { eta: '22m', coverage: '94%' }
  },
  { 
    id: 6, 
    title: 'Mobile Diagnostics', 
    icon: Search, 
    desc: 'Full-system computer diagnostics and error code clearing at the point of breakdown.',
    metrics: { eta: '35m', coverage: '92%' }
  },
  { 
    id: 7, 
    title: 'Emergency Repairs', 
    icon: AlertTriangle, 
    desc: 'On-site mechanical interventions for starters, alternators, and minor engine components.',
    metrics: { eta: '45m', coverage: '88%' }
  },
  { 
    id: 8, 
    title: 'Hose & Belt Replacement', 
    icon: Wrench, 
    desc: 'Field replacement of critical cooling and drive components for fleet resilience.',
    metrics: { eta: '55m', coverage: '91%' }
  },
  { 
    id: 9, 
    title: 'Electrical Repairs', 
    icon: Zap, 
    desc: 'Advanced troubleshooting and repair of vehicle electrical systems and wiring.',
    metrics: { eta: '60m', coverage: '85%' }
  },
  { 
    id: 10, 
    title: 'Cooling System Service', 
    icon: Thermometer, 
    desc: 'Emergency radiator repairs and coolant system pressure testing in the field.',
    metrics: { eta: '50m', coverage: '89%' }
  },
  { 
    id: 11, 
    title: 'Minor Mechanical Repairs', 
    icon: Gauge, 
    desc: 'Broad spectrum on-site mechanical support for non-major failure events.',
    metrics: { eta: '65m', coverage: '82%' }
  },
  { 
    id: 12, 
    title: 'Fleet Maintenance Support', 
    icon: ShieldCheck, 
    desc: 'Scheduled on-site preventive maintenance and inspection for commercial operators.',
    metrics: { eta: 'Sched', coverage: '100%' }
  }
];

function AlertTriangle(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

export const ServicesGrid = () => {
  return (
    <section className="py-32 relative z-10 bg-[#081120]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <p className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em] mb-4">Service Catalog</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Comprehensive Mobile <br />Field Solutions
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           {services.map((s, i) => (
             <motion.div
               key={s.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <GlassPanel className="h-full p-8 border-white/5 bg-white/[0.01] hover:bg-white/[0.04] transition-all group relative">
                   <div className="flex justify-between items-start mb-8">
                      <div className="h-12 w-12 rounded-xl bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20 group-hover:scale-110 transition-transform">
                         <s.icon className="h-5 w-5 text-brand-blue" />
                      </div>
                      <Badge className="bg-white/5 text-[#94A3B8] border-white/10 text-[8px] uppercase font-black">
                         ETA: {s.metrics.eta}
                      </Badge>
                   </div>

                   <h3 className="text-xl font-black text-white mb-4 leading-tight">{s.title}</h3>
                   <p className="text-[12px] text-[#94A3B8] leading-relaxed font-medium mb-8">
                      {s.desc}
                   </p>

                   <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex flex-col">
                         <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">Network Coverage</span>
                         <span className="text-[13px] font-black text-white">{s.metrics.coverage}</span>
                      </div>
                      <Button variant="ghost" className="p-0 h-auto text-[10px] font-black text-brand-blue uppercase tracking-widest hover:bg-transparent hover:text-brand-blue/80">
                         Dispatch Now →
                      </Button>
                   </div>
                </GlassPanel>
             </motion.div>
           ))}
        </div>

        {/* 24/7 Support Banner */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="mt-20"
        >
           <GlassPanel className="p-0 border-white/10 bg-brand-blue/5 overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center">
                 <div className="p-12 lg:p-16 flex-1 space-y-6">
                    <div className="flex items-center gap-3">
                       <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                       <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Global Dispatch Ready</span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-white">24/7 Emergency Roadside Support</h3>
                    <p className="text-[#94A3B8] font-medium leading-relaxed max-w-xl">
                       Our team is available around the clock to get your fleet back on the road safely and quickly. Unified dispatch coordination for all emergency repair events.
                    </p>
                    <Button size="lg" className="bg-brand-blue text-white font-bold px-10 rounded-xl h-14">
                       Request Assistance Now
                    </Button>
                 </div>
                 <div className="w-full lg:w-[400px] h-[300px] lg:h-auto self-stretch relative bg-[#081120]">
                    <img 
                       src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                       alt="Service Support" 
                       className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-transparent" />
                 </div>
              </div>
           </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
};
