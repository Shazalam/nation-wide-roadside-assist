"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Truck, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  TrendingUp,
  MapPin,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
  ChevronRight
} from "lucide-react";
import { KPIWidget } from "@/components/ui/kpi-widget";
import { EnterpriseChart } from "@/components/ui/enterprise-chart";
import { EnterpriseTable } from "@/components/ui/enterprise-table";
import { TelemetryIndicator } from "@/components/ui/telemetry-indicator";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const chartData = [
  { name: "00:00", active: 400 },
  { name: "04:00", active: 300 },
  { name: "08:00", active: 900 },
  { name: "12:00", active: 1200 },
  { name: "16:00", active: 1500 },
  { name: "20:00", active: 1100 },
  { name: "23:59", active: 600 },
];

const recentIncidents = [
  { id: "INC-8291", type: "Heavy Towing", location: "Los Angeles, CA", status: "In Progress", priority: "High", time: "2m ago" },
  { id: "INC-8292", type: "Flat Tire", location: "Chicago, IL", status: "Dispatched", priority: "Medium", time: "5m ago" },
  { id: "INC-8293", type: "Fuel Delivery", location: "Houston, TX", status: "Completed", priority: "Low", time: "12m ago" },
  { id: "INC-8294", type: "Lockout", location: "Miami, FL", status: "Pending", priority: "High", time: "15m ago" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">Operations Intelligence</h1>
          <p className="text-brand-slate mt-1">Real-time nationwide infrastructure performance telemetry.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-brand-navy/40 border-brand-border hover:bg-brand-blue/10 border-brand-border text-foreground dark:text-white">
            Export Report
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 shadow-[0_0_20px_rgba(47,128,255,0.3)] border-none">
            New Incident
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPIWidget 
          title="Active Incidents" 
          value="1,284" 
          change={12.5} 
          trend="up" 
          icon={Activity} 
          description="vs last hour" 
        />
        <KPIWidget 
          title="Avg. Response" 
          value="14.2m" 
          change={2.1} 
          trend="down" 
          icon={Clock} 
          description="Across all regions" 
        />
        <KPIWidget 
          title="Fleet Capacity" 
          value="94.2%" 
          change={0.4} 
          trend="up" 
          icon={Truck} 
          description="8,241 vendors active" 
        />
        <KPIWidget 
          title="SLA Compliance" 
          value="98.1%" 
          change={1.2} 
          trend="up" 
          icon={CheckCircle2} 
          description="Target: 97.5%" 
        />
      </div>

      {/* Charts & Risks Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <EnterpriseChart 
            title="Event Telemetry: Volume vs Time"
            data={chartData}
            dataKey="active"
            categoryKey="name"
          />
        </div>

        <Card className="bg-brand-navy/40 border-brand-border backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-foreground dark:text-white">Regional Surge Risk</CardTitle>
            <p className="text-sm text-brand-slate">Predicted demand by region</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { region: "Northeast", load: 85, status: "Critical" },
              { region: "Southwest", load: 62, status: "Normal" },
              { region: "Midwest", load: 45, status: "Normal" },
              { region: "Pacific", load: 78, status: "High" },
            ].map((item) => (
              <TelemetryIndicator 
                key={item.region}
                label={item.region}
                value={item.load}
                status={item.load > 80 ? 'critical' : item.load > 60 ? 'warning' : 'healthy'}
              />
            ))}
            <Button variant="ghost" className="w-full text-brand-blue hover:bg-brand-blue/5 mt-4 group">
              View Regional Heatmap <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Incidents Table */}
      <EnterpriseTable 
        title="Critical Active Incidents"
        headers={['ID', 'Service Type', 'Location', 'Priority', 'Status', 'Time', '']}
        data={recentIncidents}
        renderRow={(incident) => (
          <>
            <td className="px-6 py-4 text-sm font-mono text-brand-blue">{incident.id}</td>
            <td className="px-6 py-4 text-sm font-medium text-foreground dark:text-white">{incident.type}</td>
            <td className="px-6 py-4 text-sm text-brand-slate">
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {incident.location}
              </div>
            </td>
            <td className="px-6 py-4">
              <Badge variant="outline" className={cn(
                "border-none",
                incident.priority === 'High' ? 'bg-red-500/10 text-red-400' : 
                incident.priority === 'Medium' ? 'bg-brand-orange/10 text-brand-orange' :
                'bg-emerald-500/10 text-emerald-400'
              )}>
                {incident.priority}
              </Badge>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center gap-2 text-sm text-foreground dark:text-white">
                <span className={`w-2 h-2 rounded-full ${
                  incident.status === 'Completed' ? 'bg-emerald-500' :
                  incident.status === 'In Progress' ? 'bg-brand-blue animate-pulse' :
                  'bg-brand-orange'
                }`} />
                {incident.status}
              </div>
            </td>
            <td className="px-6 py-4 text-sm text-brand-slate">{incident.time}</td>
            <td className="px-6 py-4 text-right">
              <button className="p-1 hover:text-foreground dark:text-white text-brand-slate transition-colors">
                <MoreVertical className="w-4 h-4" />
              </button>
            </td>
          </>
        )}
        actions={<Button variant="ghost" className="text-brand-slate hover:text-foreground dark:text-white text-xs">Refresh Feed</Button>}
      />
    </div>
  );
}
