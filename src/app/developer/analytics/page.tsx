'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Activity,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  ArrowDownRight,
  Filter,
  Download
} from 'lucide-react';

export default function APIAnalyticsPage() {
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-white tracking-tight">API Analytics</h1>
          <p className="text-brand-slate text-lg">Monitor your integration performance and usage metrics.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white hover:bg-white/10 transition-all">
            <Filter className="h-4 w-4 text-brand-blue" /> Last 30 Days
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-blue text-white rounded-lg text-sm font-bold hover:bg-brand-blue/90 transition-all">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </header>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Requests"
          value="1,284,902"
          change="+12.5%"
          isPositive={true}
          icon={Activity}
        />
        <MetricCard
          title="Avg. Latency"
          value="84ms"
          change="-4.2%"
          isPositive={true}
          icon={Clock}
        />
        <MetricCard
          title="Error Rate"
          value="0.04%"
          change="+0.01%"
          isPositive={false}
          icon={ShieldAlert}
        />
        <MetricCard
          title="Active Webhooks"
          value="12"
          change="0%"
          isPositive={true}
          icon={BarChart3}
        />
      </div>

      {/* Main Chart Area */}
      <GlassPanel className="p-8 border-white/5 bg-brand-bg/40 min-h-[400px] flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">Traffic Overview</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-blue" />
              <span className="text-xs text-brand-slate">Successful</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="text-xs text-brand-slate">Errors</span>
            </div>
          </div>
        </div>

        {/* Mock Chart Visualization */}
        <div className="flex-1 flex items-end gap-2 pt-10">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="flex-1 flex flex-col gap-1 items-center group">
              <div
                className="w-full bg-brand-blue/20 group-hover:bg-brand-blue/40 transition-all rounded-t-sm relative"
                style={{ height: `${Math.random() * 150 + 50}px` }}
              >
                {/* Tooltip hint */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {Math.floor(Math.random() * 50000)} req
                </div>
              </div>
              <div className="text-[8px] text-brand-slate font-mono mt-2">{i}:00</div>
            </div>
          ))}
        </div>
      </GlassPanel>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <GlassPanel className="p-6 border-white/5 bg-brand-bg/40">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Top Endpoints</h3>
          <div className="space-y-4">
            {[
              { path: '/v1/dispatch', count: '842,001', perc: 65 },
              { path: '/v1/fleet/telemetry', count: '312,442', perc: 24 },
              { path: '/v1/vendors/search', count: '102,990', perc: 8 },
              { path: '/v1/auth/token', count: '27,469', perc: 3 },
            ].map((endpoint) => (
              <div key={endpoint.path} className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="font-mono text-brand-blue">{endpoint.path}</span>
                  <span className="text-brand-slate">{endpoint.count}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-blue rounded-full"
                    style={{ width: `${endpoint.perc}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-6 border-white/5 bg-brand-bg/40">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Error Distribution</h3>
          <div className="space-y-4">
            {[
              { code: '401 Unauthorized', count: '412', color: 'bg-amber-500' },
              { code: '429 Rate Limited', count: '284', color: 'bg-brand-blue' },
              { code: '404 Not Found', count: '112', color: 'bg-brand-slate' },
              { code: '500 Server Error', count: '45', color: 'bg-rose-500' },
            ].map((error) => (
              <div key={error.code} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${error.color}`} />
                  <span className="text-xs font-mono text-white">{error.code}</span>
                </div>
                <span className="text-xs text-brand-slate font-bold">{error.count}</span>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </div>
  );
}

function MetricCard({ title, value, change, isPositive, icon: Icon }: any) {
  return (
    <GlassPanel className="p-6 border-white/5 bg-brand-bg/40">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
          <Icon className="h-5 w-5 text-brand-blue" />
        </div>
        <div className={cn(
          "flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full",
          isPositive ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
        )}>
          {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {change}
        </div>
      </div>
      <p className="text-xs font-bold text-brand-slate uppercase tracking-widest mb-1">{title}</p>
      <p className="text-3xl font-black text-white tracking-tight">{value}</p>
    </GlassPanel>
  );
}
