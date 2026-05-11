'use client';

import React, { useState } from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Search, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Settings, 
  Filter, 
  Plus,
  ArrowUpRight,
  Globe,
  Award
} from 'lucide-react';
import { motion } from 'framer-motion';

const vendorData = [
  { id: 'VND-1001', name: 'Atlas Recovery Services', location: 'New York, NY', rating: 4.9, status: 'certified', coverage: 'Global', nodes: 142 },
  { id: 'VND-1002', name: 'Titan Heavy Towing', location: 'Chicago, IL', rating: 4.7, status: 'certified', coverage: 'Regional', nodes: 84 },
  { id: 'VND-1003', name: 'Rapid Response Fleet', location: 'Los Angeles, CA', rating: 4.8, status: 'certified', coverage: 'National', nodes: 210 },
  { id: 'VND-1004', name: 'Elite Mobile Mechanical', location: 'Houston, TX', rating: 4.2, status: 'warning', coverage: 'Local', nodes: 12 },
  { id: 'VND-1005', name: 'Sovereign Dispatch Hub', location: 'Miami, FL', rating: 5.0, status: 'certified', coverage: 'National', nodes: 340 },
];

export default function VendorsPage() {
  const [activeView, setActiveView] = useState('list');

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Truck className="h-5 w-5 text-brand-blue" />
            <h1 className="text-3xl font-bold text-white tracking-tight">Vendor Intelligence</h1>
          </div>
          <p className="text-brand-slate text-sm">Orchestration and performance management of the global partner mesh.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-brand-navy/50 p-1 rounded-lg border border-brand-border">
             <button 
               onClick={() => setActiveView('list')}
               className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'list' ? 'bg-brand-blue text-white shadow-lg' : 'text-brand-slate hover:text-white'}`}
             >
               List
             </button>
             <button 
               onClick={() => setActiveView('map')}
               className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${activeView === 'map' ? 'bg-brand-blue text-white shadow-lg' : 'text-brand-slate hover:text-white'}`}
             >
               Map
             </button>
          </div>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2">
            <Plus className="h-4 w-4" /> Onboard Vendor
          </Button>
        </div>
      </div>

      {/* Network Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPIWidget title="Total Partners" value="12,482" icon={Globe} />
        <KPIWidget title="Certified Nodes" value="54.2K" change={8} trend="up" icon={Award} />
        <KPIWidget title="Avg. Partner Rating" value="4.82/5" icon={Star} />
        <KPIWidget title="Compliance Rate" value="99.1%" change={0.4} trend="up" icon={ShieldCheck} />
      </div>

      {activeView === 'list' ? (
        <div className="space-y-8">
          {/* Filters & Search */}
          <GlassPanel className="p-4 border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="relative flex-1 max-w-md w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" />
                <input 
                  type="text" 
                  placeholder="Search partner network..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-blue/50 transition-all"
                />
             </div>
             <div className="flex gap-3">
                <Button variant="ghost" size="sm" className="text-brand-slate hover:text-white border border-white/5 gap-2">
                   <Filter className="h-3 w-3" /> Region: All
                </Button>
                <Button variant="ghost" size="sm" className="text-brand-slate hover:text-white border border-white/5 gap-2">
                   <Award className="h-3 w-3" /> Tier: Platinum
                </Button>
             </div>
          </GlassPanel>

          {/* Vendor Table */}
          <EnterpriseTable 
            title="Global Partner Directory"
            headers={['Vendor ID', 'Partner Name', 'Location', 'Coverage', 'Nodes', 'Rating', 'Status', 'Actions']}
            data={vendorData}
            renderRow={(vendor) => (
              <>
                <td className="px-6 py-4 font-mono text-[10px] text-brand-blue">{vendor.id}</td>
                <td className="px-6 py-4">
                   <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{vendor.name}</span>
                      <span className="text-[10px] text-brand-slate uppercase tracking-tighter">Enterprise Partner</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-2 text-xs text-brand-slate">
                      <MapPin className="h-3 w-3" /> {vendor.location}
                   </div>
                </td>
                <td className="px-6 py-4">
                   <Badge variant="outline" className="text-[10px] uppercase font-bold tracking-widest border-white/10">
                     {vendor.coverage}
                   </Badge>
                </td>
                <td className="px-6 py-4 text-sm font-mono text-white">{vendor.nodes}</td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-bold text-white">{vendor.rating}</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                   <StatusIndicator status={vendor.status === 'certified' ? 'online' : 'alert'} label={vendor.status} />
                </td>
                <td className="px-6 py-4 text-right">
                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ArrowUpRight className="h-4 w-4 text-brand-blue" />
                   </Button>
                </td>
              </>
            )}
          />
        </div>
      ) : (
        <div className="h-[600px] w-full rounded-[2.5rem] bg-brand-navy/60 border border-brand-border relative overflow-hidden flex items-center justify-center">
           {/* Mock Network Map */}
           <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #2F80FF 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
           <div className="relative z-10 flex flex-col items-center gap-4">
              <Globe className="h-16 w-16 text-brand-blue animate-pulse" />
              <p className="text-sm font-bold text-white uppercase tracking-[0.3em]">Network Map Initializing...</p>
           </div>
           
           {/* Map Overlays */}
           <div className="absolute top-8 left-8">
              <GlassPanel className="px-4 py-2 border-white/10 bg-brand-navy/80">
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                       <div className="h-2 w-2 rounded-full bg-emerald-500" />
                       <span className="text-[10px] text-brand-slate uppercase font-bold">54,218 ACTIVE NODES</span>
                    </div>
                    <div className="h-3 w-[1px] bg-white/10" />
                    <div className="text-[10px] text-brand-blue font-mono">LAT: 37.7749 | LON: -122.4194</div>
                 </div>
              </GlassPanel>
           </div>
        </div>
      )}
    </div>
  );
}
