'use client';

import React, { useState, useEffect } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Button } from '@/components/ui/button';
import { 
  Terminal, 
  Activity, 
  Globe, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Search, 
  Code,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { motion, AnimatePresence } from 'framer-motion';

const trafficData = [
  { time: '12:00', requests: 420 },
  { time: '12:05', requests: 580 },
  { time: '12:10', requests: 490 },
  { time: '12:15', requests: 720 },
  { time: '12:20', requests: 640 },
  { time: '12:25', requests: 890 },
  { time: '12:30', requests: 950 },
];

const initialLogs = [
  { id: 'LOG-821', method: 'POST', endpoint: '/v1/dispatch', status: 201, latency: '82ms', time: 'Just now' },
  { id: 'LOG-820', method: 'GET', endpoint: '/v1/fleet/telemetry', status: 200, latency: '44ms', time: '2m ago' },
  { id: 'LOG-819', method: 'PUT', endpoint: '/v1/incident/INC-2914', status: 200, latency: '112ms', time: '5m ago' },
  { id: 'LOG-818', method: 'POST', endpoint: '/v1/auth/login', status: 200, latency: '142ms', time: '8m ago' },
  { id: 'LOG-817', method: 'GET', endpoint: '/v1/vendors/search', status: 404, latency: '12ms', time: '12m ago' },
];

export default function APIMeshPage() {
  const [logs, setLogs] = useState(initialLogs);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const newLog = {
        id: `LOG-${Math.floor(Math.random() * 1000)}`,
        method: ['GET', 'POST', 'PUT'][Math.floor(Math.random() * 3)],
        endpoint: ['/v1/dispatch', '/v1/fleet', '/v1/telemetry'][Math.floor(Math.random() * 3)],
        status: Math.random() > 0.1 ? 200 : 500,
        latency: `${Math.floor(Math.random() * 200)}ms`,
        time: 'Just now'
      };
      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="h-5 w-5 text-brand-blue" />
            <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">API Infrastructure Mesh</h1>
          </div>
          <p className="text-brand-slate text-sm">Real-time gateway monitoring and request orchestration.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-border text-foreground dark:text-white gap-2">
            <Code className="h-4 w-4" /> API Reference
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white shadow-[0_0_20px_rgba(47,128,255,0.4)]">
            Create Key
          </Button>
        </div>
      </div>

      {/* System Health Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Gateway Status', value: 'Active', icon: Globe, status: 'online' },
          { label: 'Avg. Latency', value: '84ms', icon: Activity, status: 'online' },
          { label: 'Error Rate', value: '0.04%', icon: ShieldCheck, status: 'online' },
          { label: 'Peak RPS', value: '1.2k', icon: Zap, status: 'online' },
        ].map((item) => (
          <GlassPanel key={item.label} className="p-6 border-brand-border">
            <div className="flex items-center justify-between mb-4">
              <item.icon className="h-5 w-5 text-brand-blue" />
              <StatusIndicator status={item.status as any} pulse />
            </div>
            <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{item.label}</p>
            <p className="text-2xl font-black text-foreground dark:text-white">{item.value}</p>
          </GlassPanel>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Real-time Traffic Chart */}
        <div className="lg:col-span-8">
          <GlassPanel className="p-8 h-full bg-brand-navy/60 border-brand-border">
            <div className="flex items-center justify-between mb-8">
               <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider">Gateway Throughput (RPS)</h3>
               <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                  <span className="text-[10px] text-brand-slate uppercase font-bold">Live Stream</span>
               </div>
            </div>
            <div className="h-80 w-full">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trafficData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#060D18', border: '1px solid #1e293b', borderRadius: '12px' }}
                      itemStyle={{ color: '#2F80FF', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Line type="monotone" dataKey="requests" stroke="#2F80FF" strokeWidth={3} dot={{ fill: '#2F80FF' }} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </GlassPanel>
        </div>

        {/* Real-time Logs */}
        <div className="lg:col-span-4">
          <GlassPanel className="p-8 h-full bg-brand-navy/60 border-brand-border flex flex-col">
            <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider mb-8">Request Audit Log</h3>
            <div className="space-y-4 flex-1 overflow-y-auto">
              <AnimatePresence mode="popLayout">
                {logs.map((log) => (
                  <motion.div
                    key={log.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-brand-border hover:border-brand-blue/30 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-start mb-2">
                       <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${
                         log.method === 'POST' ? 'text-brand-blue border-brand-blue/20 bg-brand-blue/5' :
                         log.method === 'GET' ? 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5' :
                         'text-amber-400 border-amber-400/20 bg-amber-400/5'
                       }`}>
                         {log.method}
                       </span>
                       <span className="text-[10px] text-brand-slate font-mono">{log.time}</span>
                    </div>
                    <p className="text-xs font-mono text-foreground dark:text-white mb-2 truncate">{log.endpoint}</p>
                    <div className="flex justify-between items-center pt-2 border-t border-brand-border">
                       <div className="flex items-center gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full ${log.status >= 400 ? 'bg-rose-500' : 'bg-emerald-500'}`} />
                          <span className="text-[10px] font-bold text-foreground dark:text-white">Status {log.status}</span>
                       </div>
                       <span className="text-[10px] text-brand-slate">{log.latency}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <Button variant="ghost" className="w-full mt-6 text-brand-slate text-[10px] font-bold uppercase tracking-widest border border-brand-border">
              Clear Audit Cache
            </Button>
          </GlassPanel>
        </div>
      </div>

      {/* Advanced API Security Watch */}
      <GlassPanel className="p-8 border-brand-blue/20 bg-brand-blue/5">
         <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-brand-blue" />
               </div>
               <div className="space-y-1">
                  <h4 className="text-lg font-bold text-foreground dark:text-white">Advanced Security Mesh</h4>
                  <p className="text-xs text-brand-slate">Real-time threat detection and rate-limiting active across all nodes.</p>
               </div>
            </div>
            <div className="flex gap-4">
               <div className="flex flex-col items-end">
                  <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">Global Keys</p>
                  <p className="text-lg font-black text-brand-blue">1,248</p>
               </div>
               <div className="h-10 w-px bg-white/10" />
               <div className="flex flex-col items-end">
                  <p className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">Active Tokens</p>
                  <p className="text-lg font-black text-emerald-500">8,912</p>
               </div>
            </div>
         </div>
      </GlassPanel>
    </div>
  );
}
