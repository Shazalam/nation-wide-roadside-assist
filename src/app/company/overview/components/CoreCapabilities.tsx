'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Truck, 
  ShieldAlert, 
  Activity, 
  GitMerge, 
  Settings, 
  HardHat, 
  Zap, 
  CircleDashed,
  ArrowUpRight
} from 'lucide-react';

const capabilities = [
  { 
    title: 'Heavy-Duty Recovery', 
    icon: Truck, 
    kpi: 'Class 8 Certified',
    desc: 'Specialized recovery for super heavy-duty commercial units and long-haul assets.',
    progress: '92%',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Dispatch Intelligence', 
    icon: Activity, 
    kpi: '< 2min Response',
    desc: 'AI-driven logistics coordination and automated vendor routing for mission-critical response.',
    progress: '98%',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536ad0a?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Fleet Recovery Coordination', 
    icon: GitMerge, 
    kpi: 'Infinite Scale',
    desc: 'Scalable operational infrastructure managed by a 24/7 command center ecosystem.',
    progress: '95%',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Incident Management', 
    icon: ShieldAlert, 
    kpi: '24/7 Command',
    desc: 'Strategic scene orchestration and asset protection for complex highway recovery events.',
    progress: '97%',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Medium & Light Duty Recovery', 
    icon: Truck, 
    kpi: 'Class 1-6 Support',
    desc: 'Precision recovery for delivery fleets, box trucks, and light commercial vehicles.',
    progress: '94%',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Roadside Assistance', 
    icon: Zap, 
    kpi: 'Nationwide Support',
    desc: 'Comprehensive mechanical support including battery, tire, and fuel logistics.',
    progress: '99%',
    image: 'https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Commercial Vehicle Services', 
    icon: Settings, 
    kpi: 'Nationwide Network',
    desc: 'Unified service platform covering every major transport corridor across North America.',
    progress: '96%',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Hazard Zone Operations', 
    icon: HardHat, 
    kpi: 'Multi-Agency Sync',
    desc: 'Specialized traffic control and hazardous environment recovery coordination.',
    progress: '91%',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80'
  },
  { 
    title: 'Precision Towing', 
    icon: CircleDashed, 
    kpi: 'Zero-Damage Ops',
    desc: 'Specialized wheel-lift and flatbed operations for sensitive high-value mobility assets.',
    progress: '93%',
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80'
  }
];

export const CoreCapabilities = () => {
  return (
    <section className="py-32 bg-brand-bg relative overflow-hidden border-t border-brand-border">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-brand-blue/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 mb-4"
           >
              <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              <span className="text-[10px] font-black text-brand-blue uppercase tracking-[0.4em]">Operations Infrastructure</span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-tight mb-6"
           >
              Core Operational <span className="text-brand-blue">Capabilities</span>
           </motion.h2>
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-brand-slate font-medium text-lg max-w-2xl"
           >
              Enterprise-grade roadside recovery infrastructure engineered for mission-critical scale across all vehicle classes.
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 pt-12">
           {capabilities.map((cap, i) => {
             const Icon = cap.icon;
             return (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.05 }}
                 className="relative group h-full"
               >
                  {/* Floating Icon Bubble (50% Overlap) */}
                  <div className="absolute top-0 left-10 -translate-y-1/2 z-20">
                     <motion.div
                       whileHover={{ scale: 1.2 }}
                       transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                       className="h-16 w-16 bg-card/95 backdrop-blur-3xl border border-brand-border rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(47,128,255,0.2)] group-hover:border-brand-blue/50 group-hover:shadow-[0_0_40px_rgba(47,128,255,0.5)] transition-all relative overflow-hidden"
                     >
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-transparent" />
                        <Icon className="h-7 w-7 text-brand-blue relative z-10 transition-transform group-hover:scale-110" />
                     </motion.div>
                  </div>

                  {/* Optimized Glassmorphism Card */}
                  <motion.div 
                    whileHover={{ 
                      y: -12,
                      scale: 1.04,
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 80, 
                      damping: 30, 
                      mass: 1.2 // Added mass for a slower, cinematic feel
                    }}
                    className="relative bg-card/60 backdrop-blur-[24px] border border-brand-border rounded-[28px] pt-16 p-10 h-full flex flex-col shadow-[0_15px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_40px_100px_rgba(47,128,255,0.2)] hover:border-brand-blue/40 overflow-hidden will-change-transform"
                  >
                     {/* Background Image Ghost - Optimized Transition */}
                     <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-5 mix-blend-luminosity transition-opacity duration-1000 pointer-events-none scale-110 group-hover:scale-100" 
                          style={{ backgroundImage: `url(${cap.image})` }} />

                     {/* Background Large Icon Ghost */}
                     <div className="absolute -top-12 -right-12 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none">
                        <Icon className="w-64 h-64 text-brand-blue rotate-12" />
                     </div>

                     <div className="flex justify-between items-start mb-6 relative z-10">
                        <span className="px-3 py-1 bg-brand-blue/10 border border-brand-blue/30 rounded-lg text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(47,128,255,0.1)]">
                           {cap.kpi}
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-brand-slate group-hover:text-brand-blue transition-colors duration-700" />
                     </div>
                     
                     <div className="relative z-10 mb-8">
                        <h3 className="text-xl font-black text-foreground dark:text-white uppercase tracking-tight leading-tight mb-4 group-hover:text-brand-blue transition-colors duration-700">
                           {cap.title}
                        </h3>
                        <p className="text-[14px] text-brand-slate font-medium leading-relaxed">
                           {cap.desc}
                        </p>
                     </div>
                     
                     <div className="mt-auto relative z-10 pt-6 border-t border-brand-border">
                        <div className="flex justify-between items-center mb-3">
                           <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest">Network Velocity</span>
                           <span className="text-[12px] font-bold text-foreground dark:text-white font-mono">{cap.progress}</span>
                        </div>
                        {/* Telemetry Progress line */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: cap.progress }}
                              transition={{ duration: 1.5, ease: 'easeInOut' }}
                              className="absolute top-0 bottom-0 left-0 bg-brand-blue rounded-full shadow-[0_0_10px_#2F80FF]" 
                           />
                        </div>
                     </div>

                     {/* Optimized Edge Glow */}
                     <div className="absolute inset-0 rounded-[28px] border-2 border-brand-blue/0 group-hover:border-brand-blue/10 transition-all duration-1000 pointer-events-none" />
                  </motion.div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
};
