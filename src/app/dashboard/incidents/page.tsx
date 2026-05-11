'use client';

import React, { useState } from 'react';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ShieldAlert, 
  Search, 
  Filter, 
  ArrowUpRight, 
  Clock, 
  MapPin, 
  AlertCircle,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const incidentData = [
  { id: 'INC-2914', title: 'Heavy Recovery Required', location: 'I-95, New York', priority: 'critical', status: 'dispatched', time: '4m ago', client: 'State Farm' },
  { id: 'INC-2915', title: 'Fleet Lockdown Request', location: 'Queens, NY', priority: 'high', status: 'on_site', time: '12m ago', client: 'Hertz' },
  { id: 'INC-2916', title: 'Fuel Delivery', location: 'Brooklyn, NY', priority: 'medium', status: 'pending', time: '18m ago', client: 'Uber' },
  { id: 'INC-2917', title: 'Motorcycle Tow', location: 'Newark, NJ', priority: 'low', status: 'completed', time: '1h ago', client: 'Private' },
  { id: 'INC-2918', title: 'EV Battery Depletion', location: 'Bronx, NY', priority: 'high', status: 'dispatched', time: '22m ago', client: 'Tesla Fleet' },
];

export default function IncidentsPage() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <ShieldAlert className="h-5 w-5 text-brand-orange" />
            <h1 className="text-3xl font-bold text-white tracking-tight">Incident Tracking</h1>
          </div>
          <p className="text-brand-slate text-sm">Real-time monitoring and coordination of active service nodes.</p>
        </div>
        <div className="flex items-center gap-3">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" />
              <input 
                type="text" 
                placeholder="Find incident..."
                className="bg-brand-navy/50 border border-brand-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-blue/50 transition-all"
              />
           </div>
           <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2">
              <AlertCircle className="h-4 w-4" /> New Ticket
           </Button>
        </div>
      </div>

      {/* Stats Quick Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Active Tickets', value: '42', color: 'brand-blue' },
          { label: 'Critical Alert', value: '04', color: 'rose-500' },
          { label: 'Avg. Response', value: '11.4m', color: 'emerald-500' },
          { label: 'SLA Status', value: 'Optimal', color: 'brand-blue' },
        ].map((stat) => (
          <GlassPanel key={stat.label} className="p-6 border-white/5">
            <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-2xl font-black text-white`}>{stat.value}</p>
          </GlassPanel>
        ))}
      </div>

      {/* Incident List */}
      <EnterpriseTable 
        title="Live Incident Feed"
        headers={['Incident ID', 'Description', 'Priority', 'Location', 'Status', 'Time', 'Actions']}
        data={incidentData}
        renderRow={(incident) => (
          <>
            <td className="px-6 py-4 font-mono text-[10px] text-brand-blue">{incident.id}</td>
            <td className="px-6 py-4">
               <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{incident.title}</span>
                  <span className="text-[10px] text-brand-slate uppercase tracking-tighter">{incident.client}</span>
               </div>
            </td>
            <td className="px-6 py-4">
               <Badge className={
                 incident.priority === 'critical' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                 incident.priority === 'high' ? 'bg-brand-orange/10 text-brand-orange border-brand-orange/20' :
                 'bg-brand-slate/10 text-brand-slate border-brand-border'
               }>
                 {incident.priority}
               </Badge>
            </td>
            <td className="px-6 py-4">
               <div className="flex items-center gap-2 text-xs text-brand-slate">
                  <MapPin className="h-3 w-3" /> {incident.location}
               </div>
            </td>
            <td className="px-6 py-4">
               <StatusIndicator status={incident.status === 'dispatched' ? 'busy' : incident.status === 'completed' ? 'online' : 'alert'} label={incident.status} />
            </td>
            <td className="px-6 py-4 text-xs text-brand-slate">{incident.time}</td>
            <td className="px-6 py-4 text-right">
               <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ArrowUpRight className="h-4 w-4 text-brand-blue" />
               </Button>
            </td>
          </>
        )}
      />

      {/* Incident Detail Modal Preview (Simplified) */}
      <GlassPanel className="p-8 border-brand-orange/20 bg-brand-orange/5 relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
               <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <AlertCircle className="h-6 w-6 text-brand-orange" /> Escalation Watch Active
               </h3>
               <p className="text-brand-slate text-sm max-w-xl">
                  Incident INC-2914 (Heavy Recovery) is approaching its 15-minute response threshold. Auto-escalation to Regional Supervisor triggered.
               </p>
            </div>
            <div className="flex gap-4">
               <Button variant="outline" className="border-brand-orange/20 text-brand-orange">Ignore Alert</Button>
               <Button className="bg-brand-orange text-white font-bold">Intervene Now</Button>
            </div>
         </div>
         {/* Background Glow */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 blur-3xl -z-10" />
      </GlassPanel>
    </div>
  );
}
