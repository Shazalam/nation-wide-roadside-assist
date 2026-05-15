'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Activity, Info, ChevronRight, Zap, Weight, Shield } from 'lucide-react';

const vehicleClasses = [
  {
    id: 1,
    label: 'Class 1',
    weight: '6,000 lbs or less',
    category: 'Light Duty',
    examples: 'Pickups, SUVs, Vans',
    towType: 'Light Duty Towing',
    color: '#2F80FF',
  },
  {
    id: 2,
    label: 'Class 2',
    weight: '6,001–10,000 lbs',
    category: 'Light Duty',
    examples: 'Heavy Pickups, Step Vans',
    towType: 'Light/Medium Duty',
    color: '#2F80FF',
  },
  {
    id: 3,
    label: 'Class 3',
    weight: '10,001–14,000 lbs',
    category: 'Medium Duty',
    examples: 'Box Trucks, City Delivery',
    towType: 'Medium Duty Towing',
    color: '#FF7A1A',
  },
  {
    id: 4,
    label: 'Class 4',
    weight: '14,001–16,000 lbs',
    category: 'Medium Duty',
    examples: 'Large Box Trucks, Utility',
    towType: 'Medium Duty Towing',
    color: '#FF7A1A',
  },
  {
    id: 5,
    label: 'Class 5',
    weight: '16,001–19,500 lbs',
    category: 'Medium Duty',
    examples: 'Bucket Trucks, Heavy Vans',
    towType: 'Medium Duty Recovery',
    color: '#FF7A1A',
  },
  {
    id: 6,
    label: 'Class 6',
    weight: '19,501–26,000 lbs',
    category: 'Medium Duty',
    examples: 'School Buses, Rack Trucks',
    towType: 'Heavy Duty Towing',
    color: '#FF7A1A',
  },
  {
    id: 7,
    label: 'Class 7',
    weight: '26,001–33,000 lbs',
    category: 'Heavy Duty',
    examples: 'Refuse Trucks, Tow Trucks',
    towType: 'Heavy Duty Recovery',
    color: '#E11D48',
  },
  {
    id: 8,
    label: 'Class 8',
    weight: '33,001 lbs or above',
    category: 'Super Heavy Duty',
    examples: 'Semi-Tractors, Cement Mixers',
    towType: 'Super Heavy Recovery',
    color: '#9F1239',
  },
];

export default function VehicleClassIntelligence() {
  const [selectedClass, setSelectedClass] = useState(vehicleClasses[7]);

  return (
    <section className="py-24 bg-brand-bg relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4">
              <Zap className="w-3 h-3 text-[#2F80FF]" />
              <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Classification Intelligence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-foreground dark:text-white mb-6">
              Vehicle Class Intelligence Dashboard
            </h2>
            <p className="text-brand-slate text-lg leading-relaxed">
              Automated classification systems ensure the right equipment is dispatched for every recovery event. Our platform categorizes over 50,000 vehicle types into 8 operational weight classes.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-brand-slate">
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> Real-time Telemetry</span>
            <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-blue-500" /> Dispatch Sync</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Class Grid Selector */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {vehicleClasses.map((cls) => (
              <motion.button
                key={cls.id}
                whileHover={{ y: -4, borderColor: cls.color }}
                onClick={() => setSelectedClass(cls)}
                className={`relative p-6 rounded-2xl border bg-card/50 backdrop-blur-xl transition-all text-left overflow-hidden ${
                  selectedClass.id === cls.id ? 'border-white/20 ring-1 ring-white/10' : 'border-brand-border grayscale opacity-60 hover:grayscale-0 hover:opacity-100'
                }`}
              >
                {selectedClass.id === cls.id && (
                  <motion.div 
                    layoutId="activeClassGlow"
                    className="absolute -inset-1 bg-gradient-to-br from-white/10 to-transparent blur-xl" 
                  />
                )}
                <div className="relative z-10">
                  <div className="text-[10px] font-mono mb-1" style={{ color: cls.color }}>{cls.category}</div>
                  <div className="text-2xl font-black text-foreground dark:text-white mb-1">{cls.label}</div>
                  <div className="text-[9px] text-brand-slate font-mono tracking-tight">{cls.weight}</div>
                </div>
                <div className="absolute bottom-2 right-2 opacity-10">
                   <Truck className="w-12 h-12" />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Details Dashboard */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedClass.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-card/80 backdrop-blur-3xl border border-brand-border rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="bg-brand-bg p-6 border-b border-brand-border flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-foreground dark:text-white">{selectedClass.label} Recovery Intelligence</h3>
                    <div className="text-[10px] font-mono text-brand-slate uppercase tracking-widest mt-1">Operational Parameters</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5">
                    <Activity className="w-5 h-5 text-[#2F80FF]" />
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Weight Visualizer */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Weight className="w-4 h-4 text-brand-slate" />
                        <span className="text-xs font-mono text-brand-slate uppercase">Weight Threshold</span>
                      </div>
                      <span className="text-sm font-black text-foreground dark:text-white">{selectedClass.weight}</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(selectedClass.id / 8) * 100}%` }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: selectedClass.color }}
                      />
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                      <div className="text-[9px] text-brand-slate uppercase tracking-widest mb-2">Category</div>
                      <div className="text-sm font-bold text-foreground dark:text-white">{selectedClass.category}</div>
                    </div>
                    <div className="p-4 rounded-xl bg-brand-bg border border-brand-border">
                      <div className="text-[9px] text-brand-slate uppercase tracking-widest mb-2">Recovery Target</div>
                      <div className="text-sm font-bold text-[#2F80FF]">{selectedClass.towType}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="text-[10px] font-mono text-brand-slate uppercase tracking-widest flex items-center gap-2">
                      <Info className="w-3 h-3" /> Vehicle Examples
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedClass.examples.split(', ').map((ex, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-brand-border text-[10px] font-medium text-foreground dark:text-white">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Dispatch Intelligence */}
                  <div className="pt-6 border-t border-brand-border">
                    <div className="bg-blue-500/5 rounded-xl p-4 border border-blue-500/10 flex items-start gap-4">
                      <Shield className="w-5 h-5 text-blue-400 mt-1" />
                      <div>
                        <div className="text-[11px] font-black text-foreground dark:text-white uppercase tracking-wider mb-1">Dispatch Intelligence</div>
                        <p className="text-[10px] text-brand-slate leading-normal">
                          Requires specialized {selectedClass.towType.toLowerCase()} units with certified {selectedClass.category.toLowerCase()} operators. Automated routing will prioritize proximity to heavy-duty recovery nodes.
                        </p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-brand-border rounded-xl text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group">
                    View Technical Specifications <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      {/* Decorative background class labels */}
      <div className="absolute top-0 right-0 p-12 pointer-events-none opacity-[0.02]">
        <div className="text-[15rem] font-black leading-none select-none">CLASS {selectedClass.id}</div>
      </div>
    </section>
  );
}
