'use client';

import React from 'react';
import { LiveMap } from '@/components/dashboard/live-map';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { GlassPanel } from '@/components/ui/glass-panel';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Activity, 
  MapPin, 
  Clock, 
  Filter, 
  Download, 
  Search,
  Maximize2
} from 'lucide-react';
import { motion } from 'framer-motion';

const incidentData = [
  { id: 'NT-8241', type: 'Accident Recovery', client: 'State Farm', priority: 'High', location: 'Brooklyn, NY', status: 'en_route', time: '12m' },
  { id: 'NT-8242', type: 'Flatbed Tow', client: 'Geico', priority: 'Medium', location: 'Queens, NY', status: 'on_site', time: '4m' },
  { id: 'NT-8243', type: 'Lockout Service', client: 'Enterprise', priority: 'Low', location: 'Manhattan, NY', status: 'dispatched', time: '22m' },
  { id: 'NT-8244', type: 'Fuel Delivery', client: 'Uber Fleet', priority: 'Medium', location: 'Newark, NJ', status: 'pending', time: '1m' },
];

export default function OperationsPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Live Network Active</span>
          </div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Live Operations Mesh</h1>
          <p className="text-brand-slate text-sm">Real-time nationwide incident coordination and fleet dispatch.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-white/10 bg-brand-navy/40 text-white gap-2">
            <Filter className="h-4 w-4" /> Filter Network
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 shadow-[0_0_20px_rgba(47,128,255,0.4)] border-none gap-2">
            <Activity className="h-4 w-4" /> Initialize Dispatch
          </Button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPIWidget 
          title="Active Dispatches" 
          value="42" 
          change={8} 
          trend="up" 
          icon={Activity} 
          description="In last 60 minutes"
        />
        <KPIWidget 
          title="Avg. Dispatch Time" 
          value="118s" 
          change={12} 
          trend="down" 
          icon={Clock} 
          description="Optimization active"
        />
        <KPIWidget 
          title="Vendor Availability" 
          value="92%" 
          change={2} 
          trend="up" 
          icon={MapPin} 
          description="Regional hubs online"
        />
      </div>

      {/* Main Operations Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Map View */}
        <div className="lg:col-span-8 h-full min-h-[600px]">
          <LiveMap />
        </div>

        {/* Real-time Feed */}
        <div className="lg:col-span-4 space-y-6">
          <GlassPanel className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Operational Feed</h3>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-[10px] text-brand-slate uppercase font-bold">Live</span>
              </div>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
              {incidentData.map((incident) => (
                <motion.div 
                  key={incident.id}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-xl bg-white/[0.03] border border-brand-border hover:border-brand-blue/30 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-mono text-brand-blue">{incident.id}</span>
                    <Badge variant="outline" className={
                      incident.priority === 'High' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' : 
                      'bg-brand-slate/10 text-brand-slate border-brand-border'
                    }>
                      {incident.priority}
                    </Badge>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{incident.type}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-brand-slate mb-3">
                    <MapPin className="h-3 w-3" /> {incident.location}
                    <div className="h-1 w-1 rounded-full bg-brand-border" />
                    <Clock className="h-3 w-3" /> {incident.time}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <StatusIndicator status={incident.status === 'on_site' ? 'online' : 'busy'} label={incident.status.replace('_', ' ')} />
                    <Button variant="ghost" size="sm" className="h-7 px-2 text-[10px] text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all">
                      Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-6 text-brand-slate border border-brand-border hover:bg-white/5 text-xs">
              View Audit Log
            </Button>
          </GlassPanel>
        </div>
      </div>
    </div>
  );
}
