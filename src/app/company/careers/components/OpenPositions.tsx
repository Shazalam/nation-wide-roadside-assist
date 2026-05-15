'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, Clock, ArrowRight } from 'lucide-react';

const positions = [
  { id: 1, title: 'Senior Full Stack Engineer', dept: 'Engineering', loc: 'Remote (US)', type: 'Full-time', scope: 'Core Platform' },
  { id: 2, title: 'Realtime Systems Engineer', dept: 'Engineering', loc: 'San Francisco, CA / Remote', type: 'Full-time', scope: 'Dispatch Telemetry' },
  { id: 3, title: 'Recovery Operations Manager', dept: 'Operations', loc: 'Dallas, TX', type: 'Full-time', scope: 'Command Center' },
  { id: 4, title: 'Fleet Intelligence Analyst', dept: 'Operations', loc: 'Remote (US)', type: 'Full-time', scope: 'Incident Analytics' },
  { id: 5, title: 'Enterprise Account Executive', dept: 'Enterprise', loc: 'New York, NY / Remote', type: 'Full-time', scope: 'Strategic Fleets' },
  { id: 6, title: 'Vendor Network Coordinator', dept: 'Operations', loc: 'Chicago, IL', type: 'Full-time', scope: 'Nationwide Compliance' }
];

export const OpenPositions = () => {
  const [filter, setFilter] = useState('All');
  const depts = ['All', 'Engineering', 'Operations', 'Enterprise'];

  const filtered = filter === 'All' ? positions : positions.filter(p => p.dept === filter);

  return (
    <section className="py-24 bg-brand-bg relative z-10 border-t border-brand-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
           <div>
              <h2 className="text-3xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-4">
                 Open Positions
              </h2>
           </div>
           
           <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto mt-6 md:mt-0">
              {depts.map(d => (
                <button
                  key={d}
                  onClick={() => setFilter(d)}
                  suppressHydrationWarning
                  className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                    filter === d 
                    ? 'bg-[#2F80FF] text-foreground dark:text-white' 
                    : 'bg-white/5 text-brand-slate hover:bg-white/10 hover:text-foreground dark:text-white'
                  }`}
                >
                   {d}
                </button>
              ))}
           </div>
        </div>

        <div className="space-y-4">
           {filtered.map((pos, i) => (
             <motion.div
               key={pos.id}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.05 }}
               viewport={{ once: true }}
             >
                <div className="p-6 bg-white/[0.02] border border-brand-border hover:border-[#2F80FF]/30 rounded-2xl hover:bg-white/[0.04] transition-all group cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
                   
                   <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                         <span className="text-[9px] font-bold text-[#2F80FF] uppercase tracking-widest">{pos.dept}</span>
                         <span className="w-1 h-1 rounded-full bg-white/20" />
                         <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">{pos.scope}</span>
                      </div>
                      <h3 className="text-xl font-black text-foreground dark:text-white mb-3 group-hover:text-[#2F80FF] transition-colors">{pos.title}</h3>
                      
                      <div className="flex flex-wrap items-center gap-4 text-[11px] font-medium text-brand-slate">
                         <div className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {pos.loc}</div>
                         <div className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5" /> {pos.type}</div>
                      </div>
                   </div>

                   <button suppressHydrationWarning className="shrink-0 h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#2F80FF] transition-colors border border-brand-border group-hover:border-[#2F80FF]">
                      <ArrowRight className="h-5 w-5 text-foreground dark:text-white" />
                   </button>
                </div>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
};
