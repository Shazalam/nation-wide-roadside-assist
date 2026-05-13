'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Car, Truck } from 'lucide-react';

const classes = [
  { id: 1, name: "Class 1", weight: "≤ 6,000 lbs", icon: Car, color: "text-[#94A3B8]", bg: "bg-[#94A3B8]/10", border: "border-[#94A3B8]/30" },
  { id: 2, name: "Class 2", weight: "6,001 - 10,000 lbs", icon: Car, color: "text-[#94A3B8]", bg: "bg-[#94A3B8]/10", border: "border-[#94A3B8]/30" },
  { id: 3, name: "Class 3", weight: "10,001 - 14,000 lbs", icon: Truck, color: "text-[#FF7A1A]", bg: "bg-[#FF7A1A]/10", border: "border-[#FF7A1A]/30" },
  { id: 4, name: "Class 4", weight: "14,001 - 16,000 lbs", icon: Truck, color: "text-[#FF7A1A]", bg: "bg-[#FF7A1A]/10", border: "border-[#FF7A1A]/30" },
  { id: 5, name: "Class 5", weight: "16,001 - 19,500 lbs", icon: Truck, color: "text-[#FF7A1A]", bg: "bg-[#FF7A1A]/10", border: "border-[#FF7A1A]/30" },
  { id: 6, name: "Class 6", weight: "19,501 - 26,000 lbs", icon: Truck, color: "text-[#FF7A1A]", bg: "bg-[#FF7A1A]/10", border: "border-[#FF7A1A]/30" },
  { id: 7, name: "Class 7", weight: "26,001 - 33,000 lbs", icon: Truck, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
  { id: 8, name: "Class 8", weight: "33,001+ lbs", icon: Truck, color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/30" },
];

export const VehicleCoverage = () => {
  return (
    <GlassPanel className="p-6 border-white/5 bg-[#0A192F]/40 h-full">
      <h3 className="text-lg font-bold text-white mb-6">Vehicle Class Escalation Support</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {classes.map(cls => (
          <div key={cls.id} className={`p-3 rounded-xl border ${cls.border} ${cls.bg} flex flex-col justify-between`}>
            <div>
               <div className="text-white font-bold text-sm mb-1">{cls.name}</div>
               <div className="text-[10px] text-[#94A3B8] font-mono">{cls.weight}</div>
            </div>
            <div className={`mt-4 ${cls.color} self-end`}>
               <cls.icon className="h-6 w-6" strokeWidth={1.5} />
            </div>
          </div>
        ))}
      </div>
    </GlassPanel>
  );
};
