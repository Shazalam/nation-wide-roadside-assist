'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ChevronRight, Weight, ShieldCheck, Zap, Maximize2 } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const vehicleClasses = [
  { class: 1, range: '6,000 lbs or less', category: 'Light Duty', type: 'Pickup Trucks, SUVs', image: '/assets/3d/class1.png' },
  { class: 2, range: '6,001–10,000 lbs', category: 'Light Duty', type: 'Full-size Pickups, Vans', image: '/assets/3d/class2.png' },
  { class: 3, range: '10,001–14,000 lbs', category: 'Medium Duty', type: 'Box Trucks, Walk-ins', image: '/assets/3d/class3.png' },
  { class: 4, range: '14,001–16,000 lbs', category: 'Medium Duty', type: 'Large Walk-ins, Utility', image: '/assets/3d/class4.png' },
  { class: 5, range: '16,001–19,500 lbs', category: 'Heavy Duty', type: 'Bucket Trucks, Large Box', image: '/assets/3d/class5.png' },
  { class: 6, range: '19,501–26,000 lbs', category: 'Heavy Duty', type: 'School Buses, Rack Trucks', image: '/assets/3d/class6.png' },
  { class: 7, range: '26,001–33,000 lbs', category: 'Super Heavy Duty', type: 'City Transit, Refuse', image: '/assets/3d/class7.png' },
  { class: 8, range: '33,001 lbs or above', category: 'Super Heavy Duty', type: 'Semi-Trucks, Cement', image: '/assets/3d/class8.png' }
];

export const VehicleClassMatrix = () => {
  const [selectedClass, setSelectedClass] = useState(vehicleClasses[7]);

  return (
    <section className="py-32 relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-blue/[0.02] blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <Badge className="bg-brand-blue/10 text-brand-blue border-brand-blue/20 text-[10px] uppercase font-black tracking-[0.4em] px-6 py-1.5 mb-6">
                Capability Matrix 2.0
             </Badge>
           </motion.div>
           <h2 className="text-4xl lg:text-7xl font-black text-foreground dark:text-white tracking-tighter leading-[0.95] mb-8">
              Vehicle Recovery <br />
              <span className="bg-gradient-to-r from-brand-blue via-brand-blue/80 to-brand-orange bg-clip-text text-transparent">
                Class Support
              </span>
           </h2>
           <p className="text-brand-slate text-lg font-medium leading-relaxed max-w-2xl">
              Precision-engineered recovery solutions across the full spectrum of vehicle classifications, from light passenger units to super-heavy industrial assets.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
           
           {/* Left: Class Card Grid */}
           <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicleClasses.map((item, i) => (
                <motion.button
                  key={item.class}
                  onClick={() => setSelectedClass(item)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`group relative p-6 rounded-[2rem] border text-left transition-all duration-500 overflow-hidden ${
                    selectedClass.class === item.class 
                    ? 'bg-card border-brand-blue/40 shadow-[0_20px_50px_rgba(47,128,255,0.15)] ring-1 ring-brand-blue/30' 
                    : 'bg-card/40 border-brand-border hover:bg-card hover:border-brand-blue/20 hover:shadow-xl'
                  }`}
                >
                   {/* 3D Icon Background Decor */}
                   <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
                      <img src={item.image} alt="" className="w-full h-full object-contain rotate-[-15deg]" />
                   </div>

                   <div className="flex justify-between items-start mb-6 relative z-10">
                      <div className="flex flex-col">
                         <span className={`text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${selectedClass.class === item.class ? 'text-brand-blue' : 'text-brand-slate'}`}>
                            Class Support Node 0{item.class}
                         </span>
                         <h4 className="text-lg font-black text-foreground dark:text-white mt-1 tracking-tight">{item.category}</h4>
                      </div>
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${
                        selectedClass.class === item.class ? 'bg-brand-blue text-white' : 'bg-white/5 text-brand-slate group-hover:bg-brand-blue/10 group-hover:text-brand-blue'
                      }`}>
                         <Maximize2 className="h-4 w-4" />
                      </div>
                   </div>

                   <div className="flex items-center gap-6 relative z-10">
                      <div className="w-20 h-20 rounded-2xl bg-brand-bg border border-brand-border p-2 group-hover:border-brand-blue/30 transition-colors">
                         <img src={item.image} alt={item.category} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                         <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter leading-none mb-1.5">{item.range}</p>
                         <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">{item.type}</p>
                      </div>
                   </div>

                   {selectedClass.class === item.class && (
                     <motion.div 
                        layoutId="active-indicator" 
                        className="absolute bottom-0 left-0 h-1 bg-brand-blue w-full"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                     />
                   )}
                </motion.button>
              ))}
           </div>

           {/* Right: Immersive Detail Panel */}
           <div className="lg:col-span-4 sticky top-32">
              <GlassPanel className="p-0 border-brand-border bg-card/80 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)] rounded-[2.5rem]">
                 <div className="h-72 w-full relative group">
                    <AnimatePresence mode="wait">
                       <motion.div
                         key={selectedClass.class}
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         transition={{ duration: 0.4 }}
                         className="absolute inset-0 bg-brand-navy"
                       >
                          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--brand-blue) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                          <motion.img
                            initial={{ scale: 1.2, y: 20, rotate: -5 }}
                            animate={{ scale: 1, y: 0, rotate: 0 }}
                            src={selectedClass.image}
                            alt={selectedClass.category}
                            className="w-full h-full object-contain relative z-10 p-12 filter drop-shadow-[0_20px_50px_rgba(47,128,255,0.4)]"
                          />
                       </motion.div>
                    </AnimatePresence>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-20" />
                    
                    <div className="absolute bottom-8 left-10 z-30">
                       <Badge className="bg-brand-blue text-white border-0 text-[10px] uppercase font-black px-4 py-1.5 mb-3 shadow-lg shadow-brand-blue/20">
                          Verified Infrastructure
                       </Badge>
                       <h3 className="text-3xl font-black text-foreground dark:text-white tracking-tighter uppercase">
                          Class {selectedClass.class} <span className="text-brand-blue">Active</span>
                       </h3>
                    </div>
                 </div>

                 <div className="p-10 space-y-10">
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest flex items-center gap-2">
                             <Weight className="h-3 w-3 text-brand-blue" /> Weight Class
                          </p>
                          <p className="text-lg font-black text-foreground dark:text-white tracking-tight">{selectedClass.range}</p>
                       </div>
                       <div className="space-y-2">
                          <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest flex items-center gap-2">
                             <ShieldCheck className="h-3 w-3 text-brand-blue" /> Certification
                          </p>
                          <p className="text-lg font-black text-emerald-400 tracking-tight">Enterprise Tier</p>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-[0.2em] border-b border-brand-border pb-4">Operational Capabilities</p>
                       <div className="grid grid-cols-2 gap-3">
                          {[
                            'Standard Recovery',
                            'Heavy Wrecker',
                            selectedClass.class >= 5 ? 'Rotator System' : 'Tilt-Tray Ops',
                            selectedClass.class >= 7 ? 'Cargo Logistics' : 'Winch Sync',
                            'SLA Telemetry',
                            'Automated Dispatch'
                          ].map((eq, i) => (
                            <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-brand-border group hover:border-brand-blue/30 transition-colors">
                               <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                               <span className="text-[9px] font-black text-foreground dark:text-white uppercase tracking-widest">{eq}</span>
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="pt-8 border-t border-brand-border">
                       <Button className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-14 rounded-2xl text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-brand-blue/20 group">
                          Initialize Class {selectedClass.class} Protocol
                          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                       </Button>
                    </div>
                 </div>
              </GlassPanel>
           </div>

        </div>
      </div>
    </section>
  );
};
