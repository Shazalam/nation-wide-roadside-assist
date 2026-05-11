'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { Button } from '@/components/ui/button';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line
} from 'recharts';
import { Clock, TrendingUp, ShieldCheck, Zap, Download, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

const complianceData = [
  { day: 'Mon', NY: 98, CA: 95, TX: 92 },
  { day: 'Tue', NY: 96, CA: 97, TX: 94 },
  { day: 'Wed', NY: 99, CA: 94, TX: 91 },
  { day: 'Thu', NY: 97, CA: 98, TX: 95 },
  { day: 'Fri', NY: 95, CA: 96, TX: 93 },
  { day: 'Sat', NY: 92, CA: 93, TX: 99 },
  { day: 'Sun', NY: 94, CA: 92, TX: 98 },
];

export default function SLAPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">SLA Performance Mesh</h1>
          <p className="text-brand-slate text-sm">Real-time service level agreement compliance and optimization analytics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white/10 text-white gap-2">
            <Filter className="h-4 w-4" /> Regional Filter
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2">
            <Download className="h-4 w-4" /> Export Report
          </Button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPIWidget title="Global Compliance" value="97.2%" change={1.4} trend="up" icon={ShieldCheck} />
        <KPIWidget title="Avg. Response Time" value="11.8m" change={0.5} trend="down" icon={Clock} />
        <KPIWidget title="Optimization Rate" value="84%" change={5} trend="up" icon={Zap} />
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Compliance Trend */}
        <GlassPanel className="p-8 h-full bg-brand-navy/60 border-white/5">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Regional Compliance Trend</h3>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-brand-blue" />
                    <span className="text-[10px] text-brand-slate uppercase font-bold">New York</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-brand-slate uppercase font-bold">California</span>
                 </div>
              </div>
           </div>
           <div className="h-80 w-full">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={complianceData}>
                      <defs>
                         <linearGradient id="colorNY" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2F80FF" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2F80FF" stopOpacity={0}/>
                         </linearGradient>
                         <linearGradient id="colorCA" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                         </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                      <XAxis dataKey="day" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} domain={[90, 100]} />
                      <Tooltip 
                         contentStyle={{ backgroundColor: '#060D18', border: '1px solid #1e293b', borderRadius: '12px' }}
                         itemStyle={{ fontSize: '10px', fontWeight: 'bold' }}
                      />
                      <Area type="monotone" dataKey="NY" stroke="#2F80FF" fillOpacity={1} fill="url(#colorNY)" />
                      <Area type="monotone" dataKey="CA" stroke="#10B981" fillOpacity={1} fill="url(#colorCA)" />
                   </AreaChart>
                </ResponsiveContainer>
              )}
           </div>
        </GlassPanel>

        {/* Heatmap Mockup */}
        <GlassPanel className="p-8 h-full bg-brand-navy/60 border-white/5">
           <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Network Saturation Heatmap</h3>
              <div className="flex items-center gap-2">
                 <span className="text-[10px] text-brand-slate uppercase font-bold">Low</span>
                 <div className="flex gap-1">
                    <div className="h-2 w-4 bg-brand-blue/10 rounded" />
                    <div className="h-2 w-4 bg-brand-blue/30 rounded" />
                    <div className="h-2 w-4 bg-brand-blue/60 rounded" />
                    <div className="h-2 w-4 bg-brand-blue rounded" />
                 </div>
                 <span className="text-[10px] text-brand-slate uppercase font-bold">Critical</span>
              </div>
           </div>
           <div className="grid grid-cols-12 gap-2">
              {Array.from({ length: 144 }).map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.005 }}
                  className={`aspect-square rounded-[2px] transition-all hover:scale-125 hover:z-10 cursor-pointer ${
                    Math.random() > 0.8 ? 'bg-brand-blue shadow-[0_0_8px_#2F80FF]' : 
                    Math.random() > 0.5 ? 'bg-brand-blue/60' : 
                    Math.random() > 0.3 ? 'bg-brand-blue/30' : 
                    'bg-brand-blue/10'
                  }`}
                />
              ))}
           </div>
           <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
              <div className="space-y-1">
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest">Active Monitoring</p>
                 <p className="text-xs text-brand-slate">Grid synchronized with Node 14.2A</p>
              </div>
              <Button variant="ghost" size="sm" className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">View Full Resolution</Button>
           </div>
        </GlassPanel>
      </div>
    </div>
  );
}
