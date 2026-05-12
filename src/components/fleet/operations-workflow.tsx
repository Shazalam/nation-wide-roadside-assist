'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Cpu, Zap, MapPin, Truck, FileText } from 'lucide-react';
import { GlassPanel } from '@/components/ui/glass-panel';

const steps = [
  { label: "Fleet Incident Detected", desc: "Automated incident capture via telematics, API, or call center intake.", icon: Search, step: "01" },
  { label: "Vehicle Diagnostics Validation", desc: "AI-powered diagnostics identify service requirements and severity.", icon: Cpu, step: "02" },
  { label: "Intelligent Vendor Assignment", desc: "Proximity-based vendor matching with SLA and capability filtering.", icon: Zap, step: "03" },
  { label: "Live Dispatch Coordination", desc: "Real-time dispatch with GPS tracking and ETA intelligence.", icon: MapPin, step: "04" },
  { label: "Roadside Resolution", desc: "On-site service execution with live status updates.", icon: Truck, step: "05" },
  { label: "Automated Reporting & Billing", desc: "Invoice generation, compliance reporting, and analytics capture.", icon: FileText, step: "06" },
];

export const OperationsWorkflow = () => {
  return (
    <section className="relative z-10 py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[10px] font-bold text-brand-blue uppercase tracking-[0.3em] mb-4">Operational Pipeline</p>
          <h2 className="text-3xl lg:text-5xl font-black text-white mb-6">Mission-Critical Dispatch Mesh</h2>
          <p className="text-brand-slate text-lg max-w-2xl mx-auto">From incident detection to automated resolution, every event is tracked through our nationwide infrastructure.</p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-[52px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-brand-blue/30 to-transparent z-0 hidden lg:block" />
          {/* Animated pulse along the line */}
          <motion.div
            animate={{ x: ['0%', '100%'] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[51px] left-[8%] h-[3px] w-20 bg-gradient-to-r from-transparent via-brand-blue/80 to-transparent z-[1] hidden lg:block blur-[1px]"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, boxShadow: '0 0 24px rgba(47,128,255,0.25)' }}
                  className="h-[68px] w-[68px] rounded-2xl bg-brand-navy border border-white/10 flex items-center justify-center mb-5 group-hover:border-brand-blue/50 transition-all relative z-10"
                >
                  <item.icon className="h-6 w-6 text-brand-blue" />
                  <span className="absolute -top-2.5 -right-2.5 text-[9px] font-bold text-brand-blue font-mono bg-brand-bg px-2 py-0.5 rounded-full border border-brand-blue/30 shadow-lg">{item.step}</span>
                </motion.div>
                <p className="text-[11px] font-bold text-white text-center leading-tight mb-2">{item.label}</p>
                <p className="text-[9px] text-brand-slate text-center leading-relaxed max-w-[140px]">{item.desc}</p>
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  className="h-1.5 w-1.5 rounded-full bg-brand-blue/50 mt-4"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
