'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, AreaChart, Area, 
  PieChart, Pie, Cell 
} from 'recharts';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Activity, Zap, TrendingUp, Users, Clock, ShieldCheck, Truck } from 'lucide-react';

const recoveryVolumeData = [
  { name: 'Mon', volume: 420 },
  { name: 'Tue', volume: 580 },
  { name: 'Wed', volume: 490 },
  { name: 'Thu', volume: 620 },
  { name: 'Fri', volume: 780 },
  { name: 'Sat', volume: 350 },
  { name: 'Sun', volume: 290 },
];

const slaComplianceData = [
  { name: '00:00', compliance: 98 },
  { name: '04:00', compliance: 99 },
  { name: '08:00', compliance: 97 },
  { name: '12:00', compliance: 98 },
  { name: '16:00', compliance: 96 },
  { name: '20:00', compliance: 99 },
];

const classDistributionData = [
  { name: 'Light Duty', value: 400, color: '#2F80FF' },
  { name: 'Medium Duty', value: 300, color: '#FF7A1A' },
  { name: 'Heavy Duty', value: 200, color: '#A855F7' },
  { name: 'Super Heavy', value: 100, color: '#EF4444' }
];

export const RecoveryAnalytics = () => {
  return (
    <section className="py-32 bg-brand-bg relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
           <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.4em] mb-4">Operational Intelligence</p>
           <h2 className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tight leading-tight mb-8">
              Advanced Performance <br />Analytics Dashboard
           </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* Left Large Chart: Recovery Volume */}
           <div className="lg:col-span-8">
              <GlassPanel className="h-[500px] p-10 border-brand-border bg-card/60 flex flex-col">
                 <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-3">
                       <Activity className="h-5 w-5 text-[#2F80FF]" />
                       <span className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Recovery Volume (7D)</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <div className="flex items-center gap-2 text-[10px] font-bold text-brand-slate uppercase">
                          <div className="h-2 w-2 rounded-full bg-[#2F80FF]" />
                          <span>Incident Volume</span>
                       </div>
                    </div>
                 </div>
                 
                 <div className="flex-1 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <BarChart data={recoveryVolumeData}>
                          <defs>
                             <linearGradient id="recoveryBarGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2F80FF" stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#2F80FF" stopOpacity={0.2} />
                             </linearGradient>
                          </defs>
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                          <XAxis 
                             dataKey="name" 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} 
                             dy={10}
                          />
                          <YAxis 
                             axisLine={false} 
                             tickLine={false} 
                             tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 700 }} 
                          />
                          <Tooltip 
                             cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                             contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                          />
                          <Bar dataKey="volume" fill="url(#recoveryBarGradient)" radius={[6, 6, 0, 0]} barSize={40} />
                       </BarChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>
           </div>

           {/* Right Column: KPIs and Mini Charts */}
           <div className="lg:col-span-4 space-y-10">
              {/* SLA Compliance Mini Chart */}
              <GlassPanel className="p-8 border-brand-border bg-card/60">
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                       <ShieldCheck className="h-4 w-4 text-[#22c55e]" />
                       <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">SLA Compliance</span>
                    </div>
                    <span className="text-xl font-black text-emerald-400">99.1%</span>
                 </div>
                 <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <AreaChart data={slaComplianceData}>
                          <defs>
                             <linearGradient id="slaAreaGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.2} />
                                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
                             </linearGradient>
                          </defs>
                          <Area 
                             type="monotone" 
                             dataKey="compliance" 
                             stroke="#22c55e" 
                             strokeWidth={3} 
                             fill="url(#slaAreaGradient)" 
                             dot={false}
                          />
                       </AreaChart>
                    </ResponsiveContainer>
                 </div>
              </GlassPanel>

              {/* Class Distribution Pie Chart */}
              <GlassPanel className="p-8 border-brand-border bg-card/60">
                 <div className="flex items-center gap-3 mb-10">
                    <TrendingUp className="h-4 w-4 text-[#2F80FF]" />
                    <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Weight-Class Mix</span>
                 </div>
                 <div className="h-48 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                       <PieChart>
                          <Pie
                             data={classDistributionData}
                             cx="50%"
                             cy="50%"
                             innerRadius={60}
                             outerRadius={80}
                             paddingAngle={5}
                             dataKey="value"
                          >
                             {classDistributionData.map((entry, index) => (
                               <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                             ))}
                          </Pie>
                          <Tooltip 
                             contentStyle={{ backgroundColor: '#0A192F', border: 'none', borderRadius: '8px' }}
                             itemStyle={{ fontSize: '10px', color: '#fff' }}
                          />
                       </PieChart>
                    </ResponsiveContainer>
                 </div>
                 <div className="grid grid-cols-2 gap-4 mt-6">
                    {classDistributionData.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                         <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                         <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest">{item.name}</span>
                      </div>
                    ))}
                 </div>
              </GlassPanel>
           </div>

           {/* Bottom Row KPI Widgets */}
           {[
             { label: 'Avg. Response Time', val: '31 min', trend: '-9.2%', icon: Clock },
             { label: 'Recovery Completion', val: '98.6%', trend: '+5.7%', icon: Zap },
             { label: 'Active Rotators', val: '68', trend: '+12%', icon: Truck },
             { label: 'Client Satisfaction', val: '4.9 / 5', trend: '+0.3', icon: Users }
           ].map((kpi, i) => (
             <div key={i} className="lg:col-span-3">
                <GlassPanel className="p-8 border-brand-border bg-white/[0.01] hover:bg-white/[0.03] transition-all group overflow-hidden relative">
                   <div className="absolute -inset-10 bg-[#2F80FF]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
                   <div className="flex items-center gap-4 mb-6 relative z-10">
                      <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center">
                         <kpi.icon className="h-5 w-5 text-[#2F80FF] opacity-50" />
                      </div>
                      <div>
                         <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{kpi.label}</p>
                         <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter leading-none">{kpi.val}</p>
                      </div>
                   </div>
                   <div className="flex items-center justify-between relative z-10">
                      <span className={`text-[10px] font-bold ${kpi.trend.includes('-') ? 'text-emerald-400' : 'text-emerald-400'}`}>{kpi.trend} vs Last Period</span>
                      <div className="h-1 w-20 bg-white/10 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: 0 }} 
                           whileInView={{ width: '75%' }} 
                           className="h-full bg-[#2F80FF]" 
                         />
                      </div>
                   </div>
                </GlassPanel>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};
