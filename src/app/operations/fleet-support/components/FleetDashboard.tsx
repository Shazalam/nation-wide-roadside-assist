'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Activity, Map, Clock, Shield, Zap, TrendingUp, Users, ArrowUpRight } from 'lucide-react';
import { useFleetStats } from '../hooks/use-fleet-stats';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';

const chartData = [
  { time: '00:00', load: 30, incidents: 2 },
  { time: '04:00', load: 25, incidents: 1 },
  { time: '08:00', load: 75, incidents: 8 },
  { time: '12:00', load: 85, incidents: 12 },
  { time: '16:00', load: 60, incidents: 5 },
  { time: '20:00', load: 45, incidents: 3 },
  { time: '23:59', load: 35, incidents: 2 },
];

export const FleetDashboard = () => {
  const { stats } = useFleetStats();

  return (
    <section className="py-24 relative bg-brand-bg overflow-hidden border-t border-brand-border">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Live Fleet Operations Overview</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-foreground dark:text-white tracking-tight">
            Real-Time <span className="text-[#2F80FF]">Mobility Intelligence</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Visualization: Fleet on the Move */}
          <div className="lg:col-span-8 space-y-6">
            <GlassPanel className="p-0 border-brand-border bg-card/60 overflow-hidden h-[450px] flex flex-col">
               <div className="px-6 py-4 border-b border-brand-border bg-white/[0.02] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <Activity className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest">Fleet Active Load (24h)</span>
                  </div>
                  <div className="flex items-center gap-4">
                     <div className="flex items-center gap-1.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Live Feed</span>
                     </div>
                  </div>
               </div>

               <div className="flex-grow p-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                      <XAxis 
                        dataKey="time" 
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
                        contentStyle={{ backgroundColor: '#0A192F', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                        itemStyle={{ color: '#2F80FF', fontSize: '12px', fontWeight: 'bold' }}
                        labelStyle={{ color: '#FFFFFF', fontSize: '10px', marginBottom: '4px' }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="load" 
                        stroke="#2F80FF" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorLoad)" 
                        animationDuration={2000}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
               </div>
            </GlassPanel>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Users className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none">Active Vehicles</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1 tracking-tighter">{stats?.activeVehicles.toLocaleString()}</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">+12.4%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-none">vs yesterday</span>
                  </div>
               </GlassPanel>
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Zap className="h-4 w-4 text-[#FF7A1A]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none">Roadside Incidents</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1 tracking-tighter">{stats?.activeIncidents}</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">+8.7%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-none">vs yesterday</span>
                  </div>
               </GlassPanel>
               <GlassPanel className="p-6 border-brand-border bg-card/60">
                  <div className="flex items-center gap-3 mb-4">
                     <Clock className="h-4 w-4 text-[#2F80FF]" />
                     <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none">Avg. Response Time</span>
                  </div>
                  <p className="text-3xl font-black text-foreground dark:text-white mb-1 tracking-tighter">{stats?.avgResponseTime} min</p>
                  <div className="flex items-center gap-2">
                     <span className="text-[9px] font-bold text-emerald-400 font-mono">-0.2%</span>
                     <span className="text-[9px] font-bold text-brand-slate uppercase tracking-widest leading-none">vs yesterday</span>
                  </div>
               </GlassPanel>
            </div>
          </div>

          {/* Right Sidebar: SLA & Health */}
          <div className="lg:col-span-4 space-y-6">
            <GlassPanel className="p-8 border-brand-border bg-card/60 space-y-8 flex flex-col justify-between h-full">
               <div className="space-y-6">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Infrastructure Health</span>
                     <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 text-[9px] font-black tracking-widest">STABLE</Badge>
                  </div>

                  <div className="space-y-6">
                    {[
                      { label: 'SLA Compliance', val: stats?.slaCompliance, color: 'text-[#2F80FF]' },
                      { label: 'Vendor Response', val: stats?.vendorResponse, color: 'text-[#FF7A1A]' },
                      { label: 'Fleet Uptime', val: stats?.fleetUptime, color: 'text-emerald-400' },
                      { label: 'On-Time Arrivals', val: stats?.onTimeArrivals, color: 'text-purple-400' }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                         <div className="flex justify-between items-end">
                            <span className="text-[9px] font-black text-brand-slate uppercase tracking-widest leading-none">{item.label}</span>
                            <span className="text-sm font-black text-foreground dark:text-white leading-none">{item.val}%</span>
                         </div>
                         <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }} 
                              whileInView={{ width: `${item.val}%` }} 
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className={`h-full ${item.color.replace('text-', 'bg-')}`} 
                            />
                         </div>
                      </div>
                    ))}
                  </div>
               </div>

               <div className="p-5 bg-white/[0.03] border border-brand-border rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest leading-none">Customer Satisfaction</span>
                     <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-emerald-400" />
                        <span className="text-[9px] font-bold text-emerald-400">4.8 / 5.0</span>
                     </div>
                  </div>
                  <div className="flex gap-1 h-8 items-end">
                     {[40, 60, 45, 80, 55, 70, 90, 65].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#2F80FF]/20 rounded-t-[1px]" style={{ height: `${h}%` }} />
                     ))}
                  </div>
               </div>

               <Button className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-12 rounded-xl group">
                  View Full Analytics <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </Button>
            </GlassPanel>
          </div>

        </div>
      </div>
    </section>
  );
};
