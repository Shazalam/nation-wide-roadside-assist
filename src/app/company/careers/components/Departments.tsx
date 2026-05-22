'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Truck, 
  Activity, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const departments = [
  { 
    name: 'Engineering & Platform Infrastructure', 
    icon: Code2,
    desc: 'Build the API-first systems, real-time routing engines, and highly available architecture powering nationwide mobility.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    count: '14 Openings'
  },
  { 
    name: 'Recovery Operations', 
    icon: Truck,
    desc: 'Lead complex commercial recovery efforts and manage real-time incident responses from our national command center.',
    image: 'https://images.unsplash.com/photo-1454165833762-02ad50e8958d?auto=format&fit=crop&q=80',
    count: '8 Openings'
  },
  { 
    name: 'Dispatch Intelligence', 
    icon: Activity,
    desc: 'Optimize vendor matching, SLA tracking, and coordinate immediate responses for mission-critical events.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80',
    count: '6 Openings'
  },
  { 
    name: 'Vendor Network Operations', 
    icon: Users,
    desc: 'Scale and manage our nationwide ecosystem of certified heavy-duty and commercial recovery partners.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80',
    count: '5 Openings'
  },
  { 
    name: 'Incident Analytics', 
    icon: BarChart3,
    desc: 'Leverage operational data to predict recovery challenges and automate dispatch decision-making.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    count: '4 Openings'
  },
  { 
    name: 'Customer Success', 
    icon: ShieldCheck,
    desc: 'Ensure enterprise fleets, insurers, and OEMs maximize the value of the Nationwide Roadside Assist platform.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    count: '7 Openings'
  }
];

export const Departments = () => {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
              <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Team Ecosystem</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight"
           >
              Enterprise <span className="text-[#2F80FF]">Teams</span>
           </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12">
           {departments.map((dept, i) => {
             const Icon = dept.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="relative group h-full cursor-pointer"
               >
                  {/* Floating Icon Bubble (50% Overlap) */}
                  <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                     <motion.div
                       whileHover={{ scale: 1.2 }}
                       className="h-16 w-16 bg-card/90 backdrop-blur-2xl border border-brand-border rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-[#2F80FF]/40 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.4)] transition-all relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/20 to-transparent" />
                        <Icon className="h-7 w-7 text-[#2F80FF] relative z-10 transition-transform group-hover:scale-110" />
                        <div className="absolute inset-0 rounded-2xl border-2 border-[#2F80FF]/20 animate-pulse" />
                     </motion.div>
                  </div>

                  {/* Glassmorphism Card */}
                  <div className="relative bg-card/55 backdrop-blur-[24px] border border-white/[0.08] rounded-[28px] pt-16 p-10 h-full flex flex-col transition-all duration-400 group-hover:border-[#2F80FF]/40 group-hover:bg-card/80 group-hover:-translate-y-6 group-hover:scale-[1.08] shadow-[0_15px_50px_rgba(0,0,0,0.5)] group-hover:shadow-[0_40px_80px_rgba(47,128,255,0.25)] overflow-hidden">
                     {/* Background Image Ghost */}
                     <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-700 pointer-events-none scale-110 group-hover:scale-100" 
                          style={{ backgroundImage: `url(${dept.image})` }} />
                     
                     <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className="px-3 py-1 bg-[#2F80FF]/10 border border-[#2F80FF]/30 rounded-lg text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(47,128,255,0.1)]">
                           {dept.count}
                        </span>
                        <ArrowRight className="h-4 w-4 text-foreground dark:text-white/20 group-hover:text-[#2F80FF] group-hover:translate-x-1 transition-all" />
                     </div>
                     
                     <div className="relative z-10 mb-8">
                        <h3 className="text-xl font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-[#2F80FF] transition-colors">
                           {dept.name}
                        </h3>
                        <p className="text-[14px] text-brand-slate font-medium leading-relaxed">
                           {dept.desc}
                        </p>
                     </div>
                     
                     <div className="mt-auto relative z-10 pt-6 border-t border-brand-border flex items-center justify-between">
                        <div className="flex items-center gap-2 group/btn">
                           <span className="text-[10px] font-black text-foreground dark:text-white/40 uppercase tracking-[0.2em] group-hover:text-[#2F80FF] transition-colors">View Roles</span>
                           <ChevronRight className="h-3 w-3 text-foreground dark:text-white/20 group-hover:text-[#2F80FF] transition-colors" />
                        </div>
                        {/* Pulse Dot */}
                        <div className="flex items-center gap-2">
                           <div className="h-1 w-1 rounded-full bg-[#2F80FF] animate-ping" />
                           <span className="text-[8px] font-black text-[#2F80FF] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Hiring</span>
                        </div>
                     </div>

                     {/* Edge Glow Pulse */}
                     <div className="absolute inset-0 rounded-[28px] border-2 border-[#2F80FF]/0 group-hover:border-[#2F80FF]/10 transition-all duration-500 pointer-events-none" />
                  </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
};
