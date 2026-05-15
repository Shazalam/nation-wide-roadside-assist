'use client';

import React, { useState } from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { TelemetryIndicator } from '@/components/ui/telemetry-indicator';
import { APIBlock } from '@/components/ui/api-block';
import { StatusIndicator } from '@/components/ui/status-indicator';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { GlassModal } from '@/components/ui/glass-modal';
import { EnterpriseChart } from '@/components/ui/enterprise-chart';
import { EnterpriseInput } from '@/components/ui/enterprise-input';
import { EnterpriseAccordion } from '@/components/ui/enterprise-accordion';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Activity, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight,
  Code,
  BarChart3
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const DesignSystemPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('nodes');

  return (
    <LandingLayout>
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-4xl mb-16">
          <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4">Enterprise Design System</h1>
          <p className="text-brand-slate text-lg">
            Standardized UI components for Nationwide Trans Inc. built with cinematic dark mode, glassmorphism, and high-performance animations.
          </p>
        </div>

        {/* Layout & Containers */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Database className="h-4 w-4" /> Layout & Containers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassPanel className="p-8">
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">Glass Panel (Default)</h3>
              <p className="text-brand-slate text-sm mb-6">
                The core container for the design system. Features backdrop-blur, subtle borders, and inner glows.
              </p>
              <Button>Action Item</Button>
            </GlassPanel>
            <GlassPanel variant="blue" className="p-8">
              <h3 className="text-xl font-bold text-brand-blue mb-4">Glass Panel (Brand Blue)</h3>
              <p className="text-brand-slate text-sm mb-6">
                Used for primary emphasis and highlighted content.
              </p>
              <Button variant="outline" className="border-brand-blue/30 text-brand-blue hover:bg-brand-blue/10">
                Primary Detail
              </Button>
            </GlassPanel>
          </div>
        </section>

        {/* Intelligence & Data Widgets */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Activity className="h-4 w-4" /> Intelligence & KPI Widgets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <KPIWidget 
              title="Active Dispatches" 
              value="1,284" 
              change={12.5} 
              trend="up" 
              icon={Zap} 
              description="Last 24 hours"
            />
            <KPIWidget 
              title="Fleet Utilization" 
              value="94.2%" 
              change={2.1} 
              trend="up" 
              icon={Cpu} 
              description="Peak performance"
            />
            <KPIWidget 
              title="Avg. ETA" 
              value="18.5m" 
              change={4.3} 
              trend="down" 
              icon={Activity} 
              description="Optimization active"
            />
            <KPIWidget 
              title="System Uptime" 
              value="99.99%" 
              loading={false}
              icon={ShieldCheck} 
              description="Enterprise SLA"
            />
          </div>
        </section>

        {/* Telemetry & Status */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Cpu className="h-4 w-4" /> Telemetry & System Health
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <GlassPanel className="p-6 space-y-6">
              <TelemetryIndicator label="CPU Load" value={42} status="healthy" />
              <TelemetryIndicator label="Memory Usage" value={78} status="warning" />
              <TelemetryIndicator label="Network I/O" value={92} status="critical" />
            </GlassPanel>
            
            <GlassPanel className="p-6 flex flex-col gap-6">
              <StatusIndicator status="online" label="Dispatch Server North" />
              <StatusIndicator status="busy" label="Vendor API Relay" />
              <StatusIndicator status="alert" label="Compliance Engine" />
              <StatusIndicator status="offline" label="Legacy Sync" />
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col items-center justify-center text-center">
              <div className="h-20 w-20 rounded-full bg-brand-blue/5 border border-brand-blue/20 flex items-center justify-center mb-4 relative">
                <div className="absolute inset-0 rounded-full bg-brand-blue/10 animate-ping" />
                <Zap className="h-8 w-8 text-brand-blue" />
              </div>
              <h4 className="text-foreground dark:text-white font-bold mb-1">AI Routing Active</h4>
              <p className="text-xs text-brand-slate">Processing 422 nodes/sec</p>
            </GlassPanel>
          </div>
        </section>

        {/* API & Developer Experience */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Code className="h-4 w-4" /> API & Infrastructure Blocks
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <APIBlock 
              method="POST" 
              endpoint="/v1/dispatch/create"
              code={`curl -X POST https://api.nationwidetrans.com/v1/dispatch \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "type": "towing",
    "location": [ -74.006, 40.7128 ],
    "priority": "high"
  }'`}
            />
          </div>
        </section>

        {/* Enterprise Data Grid */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Database className="h-4 w-4" /> Enterprise Data Grid
          </h2>
          <EnterpriseTable 
            title="Recent Operations"
            headers={['ID', 'Status', 'Operator', 'Priority', 'ETA']}
            data={[
              { id: 'OPS-2841', status: 'en_route', user: 'Sarah Jenkins', priority: 'High', eta: '12m' },
              { id: 'OPS-2842', status: 'on_site', user: 'Michael Chen', priority: 'Critical', eta: '0m' },
              { id: 'OPS-2843', status: 'dispatched', user: 'Alex Rivera', priority: 'Medium', eta: '24m' },
            ]}
            renderRow={(item) => (
              <>
                <td className="px-6 py-4 text-xs font-mono text-brand-blue">{item.id}</td>
                <td className="px-6 py-4">
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                    {item.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-xs text-foreground dark:text-white">{item.user}</td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    item.priority === 'Critical' ? 'text-rose-500' : 'text-amber-500'
                  )}>
                    {item.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-xs text-brand-slate">{item.eta}</td>
              </>
            )}
            actions={
              <Button variant="ghost" size="sm" className="text-xs">View All</Button>
            }
          />
        </section>

        {/* Analytics & Visualization */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <BarChart3 className="h-4 w-4" /> Analytics & Visualization
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <EnterpriseChart 
              title="Operational Throughput (Dispatches/Hour)"
              dataKey="dispatches"
              categoryKey="time"
              data={[
                { time: '00:00', dispatches: 420 },
                { time: '04:00', dispatches: 380 },
                { time: '08:00', dispatches: 850 },
                { time: '12:00', dispatches: 1200 },
                { time: '16:00', dispatches: 1100 },
                { time: '20:00', dispatches: 900 },
                { time: '23:59', dispatches: 500 },
              ]}
            />
          </div>
        </section>

        {/* Forms & Inputs */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Database className="h-4 w-4" /> Enterprise Forms & Inputs
          </h2>
          <GlassPanel className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
              <EnterpriseInput 
                label="Node Identifier" 
                placeholder="e.g. US-EAST-01" 
                icon={<Database className="h-4 w-4" />}
              />
              <EnterpriseInput 
                label="Security Token" 
                type="password"
                placeholder="••••••••••••" 
                icon={<ShieldCheck className="h-4 w-4" />}
                error="Token rotation required in 4 days"
              />
              <div className="col-span-2">
                <EnterpriseInput 
                  label="API Endpoint URL" 
                  defaultValue="https://api.nationwidetrans.com/v1/internal/node-cluster" 
                  icon={<Zap className="h-4 w-4" />}
                />
              </div>
            </div>
          </GlassPanel>
        </section>

        {/* Content Display & Navigation */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Users className="h-4 w-4" /> Content Display & Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest mb-4">Segmented Controls</h3>
              <EnterpriseTabs 
                activeTab={activeTab} 
                onChange={setActiveTab}
                tabs={[
                  { id: 'nodes', label: 'Nodes', icon: <Database className="h-4 w-4" /> },
                  { id: 'logs', label: 'Logs', icon: <Activity className="h-4 w-4" /> },
                  { id: 'settings', label: 'Config', icon: <Cpu className="h-4 w-4" /> },
                ]}
              />
              
              <h3 className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest mb-4 mt-8">Underline Variant</h3>
              <EnterpriseTabs 
                variant="underline"
                activeTab={activeTab} 
                onChange={setActiveTab}
                tabs={[
                  { id: 'nodes', label: 'Primary' },
                  { id: 'logs', label: 'Secondary' },
                  { id: 'settings', label: 'Settings' },
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest mb-4">Hierarchical Data</h3>
              <EnterpriseAccordion 
                items={[
                  { 
                    title: "Operational SLA Compliance", 
                    icon: <ShieldCheck className="h-4 w-4" />,
                    content: "All operational nodes must maintain 99.99% uptime. Failure to meet these requirements results in automatic failover to secondary clusters." 
                  },
                  { 
                    title: "Resource Allocation Strategy", 
                    icon: <Cpu className="h-4 w-4" />,
                    content: "CPU and Memory resources are dynamically allocated based on regional dispatch demand. High-priority zones receive 2x redundancy." 
                  },
                  { 
                    title: "Security & Encryption Protocols", 
                    icon: <Database className="h-4 w-4" />,
                    content: "All data at rest is encrypted using AES-256-GCM. TLS 1.3 is enforced for all API traffic with mutual authentication." 
                  }
                ]}
              />
            </div>
          </div>
        </section>

        {/* Interactive Overlays */}
        <section className="mb-24">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8 flex items-center gap-2">
            <Users className="h-4 w-4" /> Overlays & Interaction
          </h2>
          <div className="flex gap-4">
            <Button onClick={() => setIsModalOpen(true)}>Open Enterprise Modal</Button>
            <GlassModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
              title="Create New Dispatch Instance"
              footer={
                <>
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button className="bg-brand-blue">Initialize Node</Button>
                </>
              }
            >
              <div className="space-y-6">
                <p className="text-brand-slate text-sm">
                  Configure a new operational node for the Nationwide mesh network. This will provision dedicated resources for dispatch intelligence.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground dark:text-white uppercase tracking-wider">Region</label>
                    <Skeleton className="h-10 w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground dark:text-white uppercase tracking-wider">Capacity</label>
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>
            </GlassModal>
          </div>
        </section>

      </div>
    </LandingLayout>
  );
};

export default DesignSystemPage;
