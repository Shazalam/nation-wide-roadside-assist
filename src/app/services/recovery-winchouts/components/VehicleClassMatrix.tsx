'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, ChevronRight, Weight, ShieldCheck, Zap } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const vehicleClasses = [
  { class: 1, range: '6,000 lbs or less', category: 'Light Duty', type: 'Pickup Trucks, SUVs', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400' },
  { class: 2, range: '6,001–10,000 lbs', category: 'Light Duty', type: 'Full-size Pickups, Vans', image: 'https://images.unsplash.com/photo-1594833211511-2092109e46a7?auto=format&fit=crop&q=80&w=400' },
  { class: 3, range: '10,001–14,000 lbs', category: 'Medium Duty', type: 'Box Trucks, Walk-ins', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=400' },
  { class: 4, range: '14,001–16,000 lbs', category: 'Medium Duty', type: 'Large Walk-ins, Utility', image: 'https://images.unsplash.com/photo-1586191582151-f739433368bb?auto=format&fit=crop&q=80&w=400' },
  { class: 5, range: '16,001–19,500 lbs', category: 'Heavy Duty', type: 'Bucket Trucks, Large Box', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400' },
  { class: 6, range: '19,501–26,000 lbs', category: 'Heavy Duty', type: 'School Buses, Rack Trucks', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400' },
  { class: 7, range: '26,001–33,000 lbs', category: 'Super Heavy Duty', type: 'City Transit, Refuse', image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&q=80&w=400' },
  { class: 8, range: '33,001 lbs or above', category: 'Super Heavy Duty', type: 'Semi-Trucks, Cement', image: 'https://images.unsplash.com/photo-1591768793355-74d7ca7385da?auto=format&fit=crop&q=80&w=400' }
];

export const VehicleClassMatrix = () => {
  const [selectedClass, setSelectedClass] = useState(vehicleClasses[7]);

  return (
    <section className="py-32 bg-brand-bg/50 relative z-10 border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
           <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em] mb-4">Capability Matrix</p>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
              Vehicle Recovery <br />Class Support
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
           
           {/* Left: Class List */}
           <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {vehicleClasses.map((item) => (
                <button
                  key={item.class}
                  onClick={() => setSelectedClass(item)}
                  suppressHydrationWarning
                  className={`group p-6 rounded-2xl border transition-all text-left relative overflow-hidden ${
                    selectedClass.class === item.class 
                    ? 'bg-[#2F80FF]/10 border-[#2F80FF]/30 ring-1 ring-[#2F80FF]/20' 
                    : 'bg-white/[0.01] border-white/5 hover:bg-white/[0.03] hover:border-white/10'
                  }`}
                >
                   <div className="flex justify-between items-start mb-6">
                      <div className="flex flex-col">
                         <span className={`text-[10px] font-black uppercase tracking-widest ${selectedClass.class === item.class ? 'text-[#2F80FF]' : 'text-[#94A3B8]'}`}>Class {item.class}</span>
                         <span className="text-sm font-black text-white mt-1 leading-tight">{item.category}</span>
                      </div>
                      <Badge className={`text-[8px] uppercase font-black px-2 py-0.5 ${
                        item.category.includes('Super') ? 'bg-brand-orange/10 text-brand-orange' :
                        item.category.includes('Heavy') ? 'bg-purple-500/10 text-purple-400' :
                        'bg-brand-blue/10 text-brand-blue'
                      }`}>
                         {item.category.split(' ')[0]}
                      </Badge>
                   </div>
                   <p className="text-xl font-black text-white tracking-tight leading-none mb-1">{item.range}</p>
                   <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest">{item.type}</p>

                   {selectedClass.class === item.class && (
                     <motion.div layoutId="active-class" className="absolute top-0 left-0 w-1 h-full bg-[#2F80FF]" />
                   )}
                </button>
              ))}
           </div>

           {/* Right: Detailed Visualization */}
           <div className="lg:col-span-5 sticky top-32">
              <GlassPanel className="p-0 border-white/10 bg-[#0A192F]/60 overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                 <div className="h-64 w-full relative">
                    <AnimatePresence mode="wait">
                       <motion.img
                         key={selectedClass.class}
                         initial={{ opacity: 0, scale: 1.1 }}
                         animate={{ opacity: 0.5, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.95 }}
                         transition={{ duration: 0.6 }}
                         src={selectedClass.image}
                         alt={selectedClass.category}
                         className="w-full h-full object-cover grayscale"
                       />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent" />
                    <div className="absolute bottom-8 left-10">
                       <Badge className="bg-[#2F80FF] text-white border-0 text-[10px] uppercase font-black px-4 py-1.5 mb-3">Enterprise Class Support</Badge>
                       <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Class {selectedClass.class} <span className="text-[#2F80FF] ml-2">Verified</span></h3>
                    </div>
                 </div>

                 <div className="p-10 space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest flex items-center gap-2">
                             <Weight className="h-3 w-3" /> Weight Range
                          </p>
                          <p className="text-lg font-black text-white">{selectedClass.range}</p>
                       </div>
                       <div className="space-y-1">
                          <p className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-widest flex items-center gap-2">
                             <ShieldCheck className="h-3 w-3" /> Certification
                          </p>
                          <p className="text-lg font-black text-emerald-400">Fleet Validated</p>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <p className="text-[10px] font-black text-white uppercase tracking-widest">Supported Equipment</p>
                       <div className="flex flex-wrap gap-2">
                          {[
                            'Standard Recovery',
                            'Heavy-Duty Wrecker',
                            selectedClass.class >= 5 ? 'Rotator Support' : 'Tilt-Tray Support',
                            selectedClass.class >= 7 ? 'Cargo Management' : 'Basic Winch',
                            'SLA Compliance Monitoring'
                          ].map((eq, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[9px] font-bold text-white uppercase tracking-widest">
                               {eq}
                            </span>
                          ))}
                       </div>
                    </div>

                    <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                       <div className="flex items-center gap-3">
                          <Zap className="h-4 w-4 text-[#2F80FF]" />
                          <span className="text-[10px] font-black text-white uppercase tracking-widest">Live Dispatch Ready</span>
                       </div>
                       <Button className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black h-12 px-8 rounded-xl text-[10px] uppercase tracking-widest">
                          Deploy Recovery Unit
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
