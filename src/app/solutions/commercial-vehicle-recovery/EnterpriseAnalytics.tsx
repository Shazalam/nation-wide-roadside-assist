'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, LineChart, Line,
  AreaChart, Area
} from 'recharts';
import { 
  BarChart3, Activity, PieChart, TrendingUp, 
  ArrowUpRight, Globe, Zap, Clock 
} from 'lucide-react';

const recoveryData = [
  { name: 'Jan', recoveries: 12400, responseTime: 28 },
  { name: 'Feb', recoveries: 15200, responseTime: 26 },
  { name: 'Mar', recoveries: 18400, responseTime: 25 },
  { name: 'Apr', recoveries: 16800, responseTime: 24 },
  { name: 'May', recoveries: 21000, responseTime: 22 },
  { name: 'Jun', recoveries: 24500, responseTime: 21 },
];

const regionalPerformance = [
  { region: 'Northeast', incidents: 4200, sla: 98.2 },
  { region: 'Southeast', incidents: 3800, sla: 99.1 },
  { region: 'Midwest', incidents: 5100, sla: 97.8 },
  { region: 'Southwest', incidents: 2900, sla: 98.5 },
  { region: 'West', incidents: 3500, sla: 99.4 },
];

export default function EnterpriseAnalytics() {
  return (
    <section className="py-32 bg-[#081120] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7A1A]/10 border border-[#FF7A1A]/20 rounded-full mb-6">
              <BarChart3 className="w-3 h-3 text-[#FF7A1A]" />
              <span className="text-[10px] font-bold text-[#FF7A1A] uppercase tracking-widest">Operational Intelligence</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Enterprise Recovery Analytics
            </h2>
            <p className="text-[#94A3B8] text-lg leading-relaxed">
              Unprecedented visibility into your fleet recovery operations. Monitor response performance, SLA compliance, and regional incident density in real-time.
            </p>
          </div>
          <div className="flex items-center gap-4">
             <div className="bg-white/5 border border-white/5 px-6 py-3 rounded-xl">
                <div className="text-[9px] text-[#94A3B8] uppercase tracking-widest mb-1">Total Support Events</div>
                <div className="text-2xl font-black text-white font-mono">3.2M+</div>
             </div>
             <div className="bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-xl">
                <div className="text-[9px] text-[#2F80FF] uppercase tracking-widest mb-1">Efficiency Gain</div>
                <div className="text-2xl font-black text-white font-mono">+24.8%</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chart: Recovery Volume & Response Time */}
          <div className="lg:col-span-8 bg-[#0A192F]/50 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-wider">Recovery Lifecycle Performance</h3>
                  <p className="text-[10px] font-mono text-[#94A3B8] mt-1">Cross-Platform Dispatch Efficiency Index</p>
               </div>
               <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#2F80FF]" />
                     <span className="text-[10px] text-[#94A3B8] uppercase">Recoveries</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-3 h-3 rounded-full bg-[#FF7A1A]" />
                     <span className="text-[10px] text-[#94A3B8] uppercase">Response Time (m)</span>
                  </div>
               </div>
            </div>

            <div className="h-[400px]">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={recoveryData}>
                    <defs>
                      <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                    <XAxis 
                      dataKey="name" 
                      stroke="#94A3B8" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#94A3B8" 
                      fontSize={10} 
                      tickLine={false} 
                      axisLine={false}
                      tickFormatter={(val) => `${val/1000}k`}
                    />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#081120', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                      itemStyle={{ fontSize: '10px', color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="recoveries" stroke="#2F80FF" strokeWidth={3} fillOpacity={1} fill="url(#colorRec)" />
                    <Line type="monotone" dataKey="responseTime" stroke="#FF7A1A" strokeWidth={2} dot={{ r: 4, fill: '#FF7A1A' }} />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
          </div>

          {/* Sidebar Metrics: Regional Performance */}
          <div className="lg:col-span-4 space-y-8">
             <div className="bg-[#0A192F]/50 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-8">Regional SLA Compliance</h3>
                <div className="space-y-6">
                   {regionalPerformance.map((item, i) => (
                     <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                           <span className="text-xs font-bold text-white">{item.region}</span>
                           <span className="text-[10px] font-mono text-emerald-400">{item.sla}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                           <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.sla}%` }}
                              className="h-full bg-blue-500 rounded-full"
                           />
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             <div className="bg-gradient-to-br from-[#2F80FF]/20 to-[#FF7A1A]/10 backdrop-blur-3xl border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="relative z-10">
                   <div className="p-3 rounded-xl bg-blue-500/20 w-fit mb-6">
                      <TrendingUp className="w-6 h-6 text-[#2F80FF]" />
                   </div>
                   <h4 className="text-xl font-black text-white mb-2">Predictive Asset Placement</h4>
                   <p className="text-[11px] text-[#94A3B8] leading-relaxed mb-6">
                      Our ML engine analyzes historical incident density to recommend optimal staging locations for recovery units.
                   </p>
                   <button className="flex items-center gap-2 text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest group">
                      Open Insights <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                   </button>
                </div>
                <div className="absolute -bottom-6 -right-6 opacity-10">
                   <Globe className="w-32 h-32 text-white" />
                </div>
             </div>
          </div>

        </div>

        {/* Bottom Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
           {[
             { label: 'Dispatch Accuracy', val: '99.4%', icon: Activity },
             { label: 'Network Redundancy', val: 'x3.2', icon: Zap },
             { label: 'System Uptime', val: '99.99%', icon: Clock },
             { label: 'Active Fleet Load', val: '72.4%', icon: Globe }
           ].map((m, i) => (
             <div key={i} className="text-center p-6 border-r border-white/5 last:border-0">
                <div className="flex justify-center mb-4">
                   <m.icon className="w-5 h-5 text-[#2F80FF]" />
                </div>
                <div className="text-2xl font-black text-white font-mono">{m.val}</div>
                <div className="text-[9px] text-[#94A3B8] uppercase tracking-[0.2em] mt-2">{m.label}</div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}
