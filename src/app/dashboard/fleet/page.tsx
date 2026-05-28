'use client';

import React from 'react';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { TelemetryIndicator } from '@/components/ui/telemetry-indicator';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { GlassPanel } from '@/components/ui/glass-panel';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Truck, 
  Settings, 
  MapPin, 
  BarChart2, 
  ShieldCheck, 
  Activity,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';

const fleetData = [
  { id: 'FLT-001', name: 'Atlas Recovery-1', type: 'flatbed', plate: 'NTX-9281', status: 'active', fuel: 84, mileage: 12400, health: 'healthy' },
  { id: 'FLT-002', name: 'Titan Service-A', type: 'service_vehicle', plate: 'NTX-1124', status: 'active', fuel: 32, mileage: 45200, health: 'warning' },
  { id: 'FLT-003', name: 'Heavy Duty-02', type: 'towing_truck', plate: 'NTX-8821', status: 'maintenance', fuel: 0, mileage: 98000, health: 'idle' },
  { id: 'FLT-004', name: 'Rapid Response', type: 'service_vehicle', plate: 'NTX-4412', status: 'active', fuel: 91, mileage: 8200, health: 'healthy' },
];

export default function FleetPage() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">Fleet Telemetry</h1>
          <p className="text-brand-slate text-sm">Real-time asset tracking, health diagnostics, and utilization analytics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-border bg-brand-navy/40 text-foreground dark:text-white gap-2">
            <BarChart2 className="h-4 w-4" /> Analytics
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 shadow-[0_0_20px_rgba(47,128,255,0.4)] border-none gap-2">
            <Plus className="h-4 w-4" /> Add Asset
          </Button>
        </div>
      </div>

      {/* Fleet Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPIWidget title="Total Assets" value="124" icon={Truck} />
        <KPIWidget title="Active Now" value="86" change={4} trend="up" icon={Activity} />
        <KPIWidget title="Maintenance" value="12" change={2} trend="down" icon={Settings} />
        <KPIWidget title="Safety Rating" value="98.2" icon={ShieldCheck} />
      </div>

      {/* Fleet Inventory Table */}
      <EnterpriseTable 
        title="Asset Inventory & Real-time Telemetry"
        headers={['Asset ID', 'Vehicle Name', 'Type', 'License Plate', 'Fuel/Energy', 'Status', 'Actions']}
        data={fleetData}
        renderRow={(asset) => (
          <>
            <td className="px-6 py-4 text-sm font-mono text-brand-blue">{asset.id}</td>
            <td className="px-6 py-4">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground dark:text-white">{asset.name}</span>
                <span className="text-[10px] text-brand-slate">{asset.mileage.toLocaleString()} miles</span>
              </div>
            </td>
            <td className="px-6 py-4 text-xs text-brand-slate uppercase tracking-wider">{asset.type.replace('_', ' ')}</td>
            <td className="px-6 py-4 text-xs font-mono text-foreground dark:text-white">{asset.plate}</td>
            <td className="px-6 py-4 min-w-[200px]">
              <TelemetryIndicator 
                label="Fuel Level" 
                value={asset.fuel} 
                status={asset.fuel < 20 ? 'critical' : asset.fuel < 50 ? 'warning' : 'healthy'} 
                animate={asset.status === 'active'}
              />
            </td>
            <td className="px-6 py-4">
              <StatusIndicator status={asset.health as any} label={asset.status} />
            </td>
            <td className="px-6 py-4 text-right">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-brand-slate hover:text-foreground dark:text-white">
                <Settings className="h-4 w-4" />
              </Button>
            </td>
          </>
        )}
        actions={
          <div className="flex items-center gap-2">
             <Button variant="ghost" size="sm" className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Live View</Button>
             <Button variant="ghost" size="sm" className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">History</Button>
          </div>
        }
      />

      {/* Regional Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassPanel className="p-8">
          <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider mb-6">Asset Distribution by Node</h3>
          <div className="space-y-6">
            {[
              { node: 'US-EAST-NY', count: 42, load: 85 },
              { node: 'US-WEST-CA', count: 28, load: 60 },
              { node: 'US-SOUTH-TX', count: 34, load: 72 },
              { node: 'US-NORTH-IL', count: 20, load: 45 },
            ].map((node) => (
              <div key={node.node} className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-foreground dark:text-white font-bold">{node.node}</span>
                  <span className="text-brand-slate">{node.count} units</span>
                </div>
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-brand-border">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${node.load}%` }}
                    className="h-full bg-brand-blue shadow-[0_0_10px_rgba(47,128,255,0.4)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-8 flex flex-col justify-center items-center text-center">
           <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
             <ShieldCheck className="h-10 w-10 text-emerald-500" />
           </div>
           <h3 className="text-xl font-bold text-foreground dark:text-white mb-2">Fleet Integrity Certified</h3>
           <p className="text-sm text-brand-slate max-w-sm">
             All connected assets are currently compliant with Nationwide Roadside Assist enterprise safety protocols and emission standards.
           </p>
           <Button className="mt-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-500 hover:text-foreground dark:text-white transition-all font-bold uppercase tracking-widest text-xs h-10 px-6">
             Review Compliance
           </Button>
        </GlassPanel>
      </div>
    </div>
  );
}
