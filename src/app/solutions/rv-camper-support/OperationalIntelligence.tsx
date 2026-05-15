'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingDown, Clock, Map as MapIcon } from 'lucide-react';

export default function OperationalIntelligence() {
  return (
    <section className="py-24 bg-brand-bg border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Operational Intelligence</h2>
          <p className="text-brand-slate max-w-2xl mx-auto">
            Deep analytics and actionable intelligence powering nationwide RV fleet operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Heatmap Card */}
          <div className="lg:col-span-2 bg-card rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent pointer-events-none" />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h3 className="font-semibold flex items-center gap-2"><MapIcon className="w-5 h-5 text-[#2F80FF]"/> Regional Incident Heatmap</h3>
              <select className="bg-brand-bg border border-[rgba(255,255,255,0.1)] text-xs rounded px-2 py-1 text-brand-slate outline-none">
                <option>Last 30 Days</option>
                <option>Year to Date</option>
              </select>
            </div>
            
            <div className="w-full h-[300px] bg-brand-bg rounded-xl border border-[rgba(255,255,255,0.05)] relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'radial-gradient(circle at 30% 40%, #FF7A1A 0%, transparent 40%), radial-gradient(circle at 70% 60%, #2F80FF 0%, transparent 50%), radial-gradient(circle at 50% 20%, #00C6FF 0%, transparent 30%)',
                  filter: 'blur(30px)'
               }} />
               {/* Grid Overlay */}
               <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
               <div className="relative z-10 font-mono text-brand-slate text-sm flex flex-col items-center gap-2 opacity-50">
                  <MapIcon className="w-8 h-8" />
                  [INTERACTIVE_HEATMAP_RENDER]
               </div>
            </div>
          </div>

          {/* Right Column Metrics */}
          <div className="flex flex-col gap-6">
            <div className="bg-card rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 flex-1 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A1A]/5 to-transparent pointer-events-none" />
               <h3 className="font-semibold flex items-center gap-2 mb-4"><Clock className="w-5 h-5 text-[#FF7A1A]"/> ETA Intelligence</h3>
               <div className="flex items-end gap-4 mb-4">
                 <div className="text-4xl font-bold font-mono">22<span className="text-xl text-brand-slate">m</span></div>
                 <div className="text-green-400 text-sm font-medium flex items-center gap-1 pb-1">
                   <TrendingDown className="w-4 h-4" /> 14%
                 </div>
               </div>
               <p className="text-xs text-brand-slate">Average nationwide response time for Class A motorhome recovery.</p>
               
               <div className="mt-6 space-y-3">
                 <div className="flex justify-between text-xs text-[#E2E8F0]"><span className="text-brand-slate">Urban Route</span><span>18m avg</span></div>
                 <div className="w-full h-1 bg-brand-bg rounded-full"><div className="h-full bg-[#FF7A1A] w-[30%]" /></div>
                 <div className="flex justify-between text-xs text-[#E2E8F0]"><span className="text-brand-slate">Rural/Campground</span><span>34m avg</span></div>
                 <div className="w-full h-1 bg-brand-bg rounded-full"><div className="h-full bg-[#2F80FF] w-[60%]" /></div>
               </div>
            </div>

            <div className="bg-card rounded-2xl border border-[rgba(255,255,255,0.08)] p-6 flex-1 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-b from-[#2F80FF]/5 to-transparent pointer-events-none" />
               <h3 className="font-semibold flex items-center gap-2 mb-4"><BarChart3 className="w-5 h-5 text-[#2F80FF]"/> SLA Compliance</h3>
               <div className="flex items-end gap-4 mb-4">
                 <div className="text-4xl font-bold font-mono">99.4<span className="text-xl text-brand-slate">%</span></div>
               </div>
               <p className="text-xs text-brand-slate">Dispatch SLAs met within agreed enterprise parameters.</p>
               
               <div className="w-full h-16 mt-4 flex items-end gap-2">
                 {[40, 65, 85, 95, 90, 99, 99, 99.4].map((val, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     whileInView={{ height: `${val}%` }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="w-full bg-[#2F80FF] rounded-t opacity-80 hover:opacity-100 transition-opacity cursor-pointer" 
                   />
                 ))}
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
