'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, Activity, Database, Globe, Clock, Terminal, Shield, Zap
} from 'lucide-react';

const liveClaims = [
  { id: 'CLM-8821', carrier: 'Allstate', type: 'Roadside Assist', status: 'validated', eta: '14 min', priority: 'high' },
  { id: 'CLM-7742', carrier: 'Geico', type: 'Towing Dispatch', status: 'dispatched', eta: '28 min', priority: 'critical' },
  { id: 'CLM-1109', carrier: 'AAA', type: 'Winch-Out', status: 'active', eta: '42 min', priority: 'medium' },
  { id: 'CLM-3392', carrier: 'State Farm', type: 'Mobile Repair', status: 'pending', eta: 'N/A', priority: 'high' },
];

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(p => (p + 1) % liveClaims.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#081120] min-h-[90vh] lg:min-h-screen flex items-center">
      {/* Cinematic Enterprise Atmosphere */}
      <div className="absolute top-0 right-0 w-[1200px] h-[900px] bg-[#2F80FF]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[900px] h-[700px] bg-[#FF7A1A]/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(47,128,255,0.05)_0%,transparent_80%)] pointer-events-none" />

      <div className="max-w-[1536px] mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ── LEFT CONTENT (40-45%) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="xl:col-span-5 flex flex-col"
          >
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#94A3B8] mb-6">
              <span className="hover:text-white transition-colors cursor-pointer">Solutions</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#2F80FF]" />
              <span className="text-[#2F80FF]">Insurance Programs</span>
            </div>

            <h1 className="text-4xl lg:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.05] mb-6 drop-shadow-lg">
              Enterprise Roadside <br />
              <span className="text-[#2F80FF]">Infrastructure</span>
            </h1>

            <p className="text-base lg:text-lg text-[#94A3B8] mb-8 max-w-lg leading-relaxed font-medium">
              Nationwide dispatch intelligence, SLA-driven roadside operations, and API-first claims workflows engineered for insurers, motor clubs, and enterprise mobility providers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-[#2F80FF] text-white rounded-lg font-bold text-sm flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(47,128,255,0.3)] hover:shadow-[0_0_30px_rgba(47,128,255,0.5)] transition-all"
              >
                Schedule Enterprise Demo
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3.5 bg-[#0A192F]/50 backdrop-blur-md border border-white/10 text-white rounded-lg font-bold text-sm flex items-center justify-center gap-3 transition-colors hover:border-white/20"
              >
                View API Documentation <Terminal className="w-4 h-4 text-[#94A3B8]" />
              </motion.button>
            </div>

            {/* Premium KPI Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { value: '97.8%', label: 'SLA Compliance', icon: Activity },
                { value: '2.4M+', label: 'Dispatch Events', icon: Database },
                { value: 'Nationwide', label: 'Vendor Coverage', icon: Globe },
                { value: '24/7', label: 'Enterprise Ops', icon: Clock },
              ].map((kpi, i) => {
                const Icon = kpi.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-[#0A192F]/60 backdrop-blur-md border border-white/10 rounded-xl p-3.5 hover:border-[#2F80FF]/40 transition-colors group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-md bg-[#081120] border border-white/5 group-hover:border-[#2F80FF]/30 transition-colors">
                        <Icon className="w-3.5 h-3.5 text-[#2F80FF]" />
                      </div>
                    </div>
                    <div className="text-lg lg:text-xl font-bold text-white mb-1 tracking-tight">{kpi.value}</div>
                    <div className="text-[9px] text-[#94A3B8] font-medium leading-tight">{kpi.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ── RIGHT DASHBOARD (55-60%) ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="xl:col-span-7 relative"
          >
            {/* Cinematic Dashboard Container */}
            <div className="relative bg-[#070D18]/90 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)] p-5 lg:p-6">
              
              {/* Top KPIs Row */}
              <div className="grid grid-cols-4 gap-4 pb-5 border-b border-white/10 mb-5">
                {[
                  { label: 'Active Incidents', val: '1,247', delta: '+12.5%', pos: true },
                  { label: 'Avg. Dispatch Time', val: '18.4 min', delta: '-8.3%', pos: true },
                  { label: 'First Call Resolution', val: '93.6%', delta: '+5.7%', pos: true },
                  { label: 'Customer Satisfaction', val: '4.8/5', delta: '+3.2%', pos: true },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <div className="text-[10px] text-[#94A3B8] font-medium mb-1 truncate">{s.label}</div>
                    <div className="flex items-baseline gap-1.5">
                       <span className="text-lg lg:text-xl font-semibold text-white tracking-tight">{s.val}</span>
                       <span className={`text-[9px] font-medium px-1.5 py-0.5 rounded-full ${s.pos ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'}`}>{s.delta}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Main Dashboard Split */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                
                {/* Map Area */}
                <div className="lg:col-span-8 bg-[#0B1221] rounded-xl border border-white/5 relative overflow-hidden h-[260px] lg:h-[300px]">
                  <div className="absolute top-3 left-3 z-10 text-[11px] font-semibold text-white tracking-wide">Live Operations Overview</div>
                  
                  {/* USA Map SVG approximation */}
                  <div className="absolute inset-0 flex items-center justify-center p-4 opacity-60">
                    <svg viewBox="0 0 1000 600" className="w-full h-full text-blue-500/10" fill="currentColor">
                      <path d="M165.7,21.7c0,0-5.8,51.8,4.1,68.4c9.9,16.6,56.4,85.4,56.4,85.4l25.7,69.6l24.1-1.7l16.6,26.5c0,0-25.7,51.4-8.3,77.9 s106.1,107.8,106.1,107.8s12.4,5.8,32.3,16.6s35.6,35.6,44.8,35.6s22.4,19.1,43.9,15.8c21.6-3.3,32.3-9.1,58-9.1 c25.7,0,51.4,15.8,66.3,15.8c14.9,0,32.3-15.8,45.6-21.6c13.3-5.8,40.6-21.6,40.6-21.6l88.7-27.3l11.6,25.7 c0,0,14.9-5.8,24.1-23.2s11.6-29,11.6-29l50.6-23.2c0,0,10.8-3.3,10.8-19.1c0-15.8,11.6-25.7,11.6-25.7l16.6-47.3 c0,0-6.6-43.1,8.3-51.4c14.9-8.3,37.3-34.8,37.3-34.8l20.7-56.4L954.1,180c0,0-17.4-44.8-19.9-53.9c-2.5-9.1-12.4-38.1-12.4-38.1 s-30.7-33.2-53.9-34.8c-23.2-1.7-46.4-1.7-46.4-1.7S799.1,38.2,780.9,44.9s-34.8,19.1-34.8,19.1l-25.7,0l-45.6,25.7 c0,0-14.9-20.7-28.2-19.1c-13.3,1.7-52.2,27.4-60.5,23.2s-39.8-12.4-39.8-12.4s-32.3,0-39.8-5.8c-7.5-5.8-21.6,5.8-21.6,5.8 l-40.6,2.5l-20.7-16.6l-57.2-22.4l-46.4,4.1l-44.8-12.4l-31.5-3.3l-20.7-19.1c0,0-34.8,13.3-43.1,15.8c-8.3,2.5-36.5,5.8-36.5,5.8 l-10.8-20.7L165.7,21.7z" />
                    </svg>
                  </div>
                  
                  {/* Grid Lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

                  {/* Telemetry Dots & Connections */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 300">
                     {/* Lines */}
                     <path d="M200,100 L350,150 L500,200 L650,120" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1" />
                     <path d="M350,150 L400,250 L550,200" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1" />
                     <path d="M150,180 L250,220 L400,250" fill="none" stroke="rgba(47,128,255,0.2)" strokeWidth="1" />
                     
                     {/* Blue Nodes */}
                     {[
                       {cx: 200, cy: 100}, {cx: 350, cy: 150}, {cx: 500, cy: 200}, {cx: 650, cy: 120},
                       {cx: 400, cy: 250}, {cx: 550, cy: 200}, {cx: 150, cy: 180}, {cx: 250, cy: 220},
                       {cx: 600, cy: 160}, {cx: 700, cy: 230}, {cx: 300, cy: 80}, {cx: 180, cy: 260}
                     ].map((dot, i) => (
                        <g key={i}>
                          <circle cx={dot.cx} cy={dot.cy} r="3" fill="#2F80FF" className="animate-pulse" style={{animationDelay: `${i * 0.2}s`}} />
                          <circle cx={dot.cx} cy={dot.cy} r="10" fill="#2F80FF" opacity="0.1" />
                        </g>
                     ))}

                     {/* Orange Active Incident Node */}
                     <g>
                       <circle cx="550" cy="200" r="4" fill="#FF7A1A" />
                       <circle cx="550" cy="200" r="12" fill="#FF7A1A" opacity="0.3" className="animate-ping" />
                     </g>
                     <g>
                       <circle cx="250" cy="220" r="4" fill="#FF7A1A" />
                       <circle cx="250" cy="220" r="12" fill="#FF7A1A" opacity="0.3" className="animate-ping" style={{animationDelay: '1s'}} />
                     </g>
                  </svg>

                  {/* Incident Popover (Florida) */}
                  <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute top-[35%] right-[10%] bg-[#0A192F]/95 backdrop-blur-xl border border-white/10 rounded-lg p-2.5 shadow-[0_0_30px_rgba(47,128,255,0.2)]"
                  >
                     <div className="text-[9px] text-white font-medium mb-0.5">Active Incident</div>
                     <div className="text-[10px] text-[#94A3B8] mb-1.5 font-mono">I-95 North, Florida</div>
                     <div className="text-[9px] text-emerald-400 font-mono font-bold">ETA 18 min • Tow</div>
                  </motion.div>
                </div>

                {/* Right Side Sidebar */}
                <div className="lg:col-span-4 flex flex-col gap-5">
                  
                  {/* Dispatch Summary */}
                  <div className="bg-[#0B1221] rounded-xl border border-white/5 p-4 flex-1">
                    <div className="text-[11px] font-semibold text-white tracking-wide mb-3">Dispatch Summary</div>
                    <div className="space-y-2.5">
                      {[
                        { label: 'Towing', val: '512', icon: Activity, color: '#2F80FF' },
                        { label: 'Roadside Assistance', val: '384', icon: Shield, color: '#2F80FF' },
                        { label: 'Battery Service', val: '178', icon: Zap, color: '#FF7A1A' },
                        { label: 'Tire Service', val: '96', icon: Globe, color: '#FF7A1A' },
                        { label: 'Fuel Delivery', val: '77', icon: Database, color: '#2F80FF' },
                      ].map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <div key={i} className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-2">
                              <Icon className="w-3 h-3" style={{ color: item.color }} />
                              <span className="text-[11px] text-[#94A3B8] font-medium group-hover:text-white transition-colors">{item.label}</span>
                            </div>
                            <span className="text-[11px] font-mono text-white group-hover:text-[#2F80FF] transition-colors">{item.val}</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="mt-4 pt-2.5 border-t border-white/5 text-center">
                       <span className="text-[10px] font-medium text-[#2F80FF] hover:text-white cursor-pointer transition-colors">View All</span>
                    </div>
                  </div>

                  {/* Incidents 7 Days Area Chart */}
                  <div className="bg-[#0B1221] rounded-xl border border-white/5 p-4 h-[100px] lg:h-[110px] flex flex-col justify-between relative overflow-hidden">
                    <div className="flex justify-between items-center z-10 relative">
                      <span className="text-[11px] font-semibold text-white tracking-wide">Incidents (7 Days)</span>
                      <span className="text-[11px] font-mono text-white">2.4M+</span>
                    </div>
                    
                    {/* SVG Area Chart */}
                    <div className="absolute bottom-0 left-0 right-0 h-[50px] lg:h-[60px]">
                      <svg viewBox="0 0 300 60" className="w-full h-full preserve-3d" preserveAspectRatio="none">
                         <defs>
                           <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                             <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.3" />
                             <stop offset="100%" stopColor="#2F80FF" stopOpacity="0" />
                           </linearGradient>
                         </defs>
                         <path d="M0,60 L0,30 Q30,10 60,35 T120,20 T180,45 T240,15 T300,30 L300,60 Z" fill="url(#areaGrad)" />
                         <path d="M0,30 Q30,10 60,35 T120,20 T180,45 T240,15 T300,30" fill="none" stroke="#2F80FF" strokeWidth="2" className="drop-shadow-[0_0_5px_rgba(47,128,255,0.8)]" />
                      </svg>
                    </div>

                    <div className="flex justify-between text-[8px] text-[#94A3B8] z-10 relative">
                      <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
