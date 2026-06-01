'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, Weight } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const vehicleClasses = [
  {
    id: 'CLASS 1',
    weight: '6,000 lbs or less',
    category: 'Light Duty',
    examples: 'Pickup Trucks, SUVs',
    image: '/assets/3d/class1.png',
    color: '#2F80FF',
  },
  {
    id: 'CLASS 2',
    weight: '6,001–10,000 lbs',
    category: 'Light Duty',
    examples: 'Full-size Pickups, Vans',
    image: '/assets/3d/class2.png',
    color: '#2F80FF',
  },
  {
    id: 'CLASS 3',
    weight: '10,001–14,000 lbs',
    category: 'Medium Duty',
    examples: 'Box Trucks, Walk-ins',
    image: '/assets/3d/class3.png',
    color: '#FF7A1A',
  },
  {
    id: 'CLASS 4',
    weight: '14,001–16,000 lbs',
    category: 'Medium Duty',
    examples: 'Large Walk-ins, Utility',
    image: '/assets/3d/class4.png',
    color: '#FF7A1A',
  },
  {
    id: 'CLASS 5',
    weight: '16,001–19,500 lbs',
    category: 'Heavy Duty',
    examples: 'Bucket Trucks, Large Box',
    image: '/assets/3d/class5.png',
    color: '#E11D48',
  },
  {
    id: 'CLASS 6',
    weight: '19,501–26,000 lbs',
    category: 'Heavy Duty',
    examples: 'School Buses, Rack Trucks',
    image: '/assets/3d/class6.png',
    color: '#E11D48',
  },
  {
    id: 'CLASS 7',
    weight: '26,001–33,000 lbs',
    category: 'Super Heavy Duty',
    examples: 'City Transit, Refuse',
    image: '/assets/3d/class7.png',
    color: '#9F1239',
  },
  {
    id: 'CLASS 8',
    weight: '33,001 lbs or above',
    category: 'Super Heavy Duty',
    examples: 'Semi-Trucks, Cement',
    image: '/assets/3d/class8.png',
    color: '#9F1239',
  },
];

export const VehicleClassMatrix = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-32 bg-brand-bg relative z-10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #94A3B8 1px, transparent 0)`, backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full -mr-96 -mt-96 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {vehicleClasses.map((item, i) => (
             <div
               key={item.id}
               className={`relative h-[400px] transition-all duration-300 ${hoveredId === item.id ? 'z-[100]' : 'z-10'}`}
               onMouseEnter={() => setHoveredId(item.id)}
               onMouseLeave={() => setHoveredId(null)}
             >
                <AnimatePresence>
                   {hoveredId !== item.id ? (
                      /* Stable Card State */
                      <motion.div
                        key="stable"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                        className="absolute inset-0 cursor-pointer"
                      >
                         <GlassPanel className="h-full p-6 border-brand-border bg-card/40 backdrop-blur-xl rounded-[2rem] flex flex-col overflow-hidden group">
                            <div className="flex justify-between items-start mb-6">
                               <div>
                                  <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest mb-1 opacity-60">
                                     Support Node {item.id.split(' ')[1]}
                                  </p>
                                  <h3 className="text-xl font-black text-foreground dark:text-white group-hover:text-brand-blue transition-colors">
                                     {item.category}
                                  </h3>
                               </div>
                               <div className="h-8 w-8 rounded-lg bg-card border border-brand-border flex items-center justify-center text-brand-slate">
                                  <Maximize2 className="h-3 w-3" />
                               </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 mb-auto">
                               <div className="relative h-36 w-36 bg-brand-bg/50 rounded-2xl border border-brand-border flex items-center justify-center overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={item.id} 
                                    className="w-24 h-24 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-500" 
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-transparent" />
                               </div>
                               <div className="text-center">
                                  <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter mb-1">{item.weight}</p>
                                  <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest">{item.examples.length > 25 ? item.examples.substring(0, 25) + '...' : item.examples}</p>
                               </div>
                            </div>
                         </GlassPanel>
                      </motion.div>
                   ) : (
                      /* Hover Detailed State (Glassmorphism Expansion) */
                      <motion.div
                        key="hover"
                        initial={{ opacity: 0, scale: 0.98, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 20 }}
                        transition={{ 
                           type: 'spring', 
                           damping: 30, 
                           stiffness: 80,
                           mass: 1.2
                        }}
                        className="absolute inset-0 z-50 pointer-events-none"
                      >
                         <GlassPanel className="h-auto w-full md:w-[105%] md:-left-[2.5%] -top-2 md:-top-4 p-4 md:p-5 border-brand-blue/40 bg-card/80 backdrop-blur-[60px] rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.7),0_0_60px_rgba(47,128,255,0.2)] flex flex-col overflow-visible pointer-events-auto z-50">


                            <div className="mb-3 md:mb-4">
                               <h4 className="text-[9px] md:text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-1 md:mb-2">Class Support</h4>
                               <h2 className="text-3xl md:text-4xl font-black text-foreground dark:text-white tracking-tighter">
                                  {item.id}
                               </h2>
                               <p className="text-xs md:text-sm font-medium text-brand-slate tracking-tight opacity-70">{item.category} Configuration</p>
                            </div>

                            <div className="relative h-24 md:h-28 w-full mb-4 flex items-center justify-center">
                               <div className="absolute inset-0 bg-brand-blue/10 rounded-full blur-2xl animate-pulse" />
                               <motion.img 
                                 initial={{ scale: 0.8, rotate: -10 }}
                                 animate={{ scale: 1, rotate: 0 }}
                                 src={item.image} 
                                 alt={item.id}
                                 className="w-24 h-24 md:w-32 md:h-32 object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(47,128,255,0.3)]"
                               />
                            </div>

                            <div className="space-y-3 mt-auto">

                               <div className="space-y-2">
                                  {/* Weight Visualizer */}
                                  <div className="space-y-3 mb-2">
                                    <div className="flex justify-between items-center">
                                      <div className="flex items-center gap-2">
                                        <Weight className="w-3.5 h-3.5 md:w-4 md:h-4 text-brand-slate" />
                                        <span className="text-[9px] md:text-[10px] font-mono text-brand-slate uppercase tracking-widest">Weight Threshold</span>
                                      </div>
                                      <span className="text-xs md:text-sm font-black text-foreground dark:text-white">{item.weight}</span>
                                    </div>
                                    <div className="h-1.5 md:h-2 bg-white/5 rounded-full overflow-hidden">
                                      <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${(parseInt(item.id.replace('CLASS ', '')) / 8) * 100}%` }}
                                        className="h-full rounded-full"
                                        style={{ backgroundColor: item.color }}
                                      />
                                    </div>
                                  </div>

                                  <div className="bg-brand-bg/40 p-3 md:p-4 rounded-xl border border-brand-border">
                                     <div>
                                        <p className="text-[8px] md:text-[9px] font-black text-brand-slate uppercase tracking-widest mb-0.5">Vehicle Types</p>
                                        <p className="text-xs md:text-sm font-black text-foreground dark:text-white leading-tight">{item.examples}</p>
                                     </div>
                                  </div>
                               </div>

                            </div>

                            {/* Large background number */}
                            <div className="absolute top-[-40px] right-[-20px] text-[10rem] font-black text-brand-blue/5 pointer-events-none select-none -z-10">
                               {item.id.split(' ')[1]}
                            </div>
                         </GlassPanel>
                      </motion.div>
                   )}
                </AnimatePresence>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
