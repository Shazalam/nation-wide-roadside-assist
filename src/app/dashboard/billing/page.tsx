'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { KPIWidget } from '@/components/ui/kpi-widget';
import { EnterpriseTable } from '@/components/ui/enterprise-table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  TrendingUp, 
  DollarSign, 
  Download, 
  ArrowUpRight, 
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const revenueData = [
  { region: 'Northeast', amount: 42000 },
  { region: 'Southeast', amount: 38000 },
  { region: 'Midwest', amount: 29000 },
  { region: 'Southwest', amount: 31000 },
  { region: 'West', amount: 45000 },
];

const billingHistory = [
  { id: 'INV-9214', client: 'State Farm', amount: 12450.00, status: 'paid', date: 'May 10, 2026' },
  { id: 'INV-9213', client: 'Geico', amount: 8900.50, status: 'pending', date: 'May 08, 2026' },
  { id: 'INV-9212', client: 'Enterprise', amount: 4500.00, status: 'paid', date: 'May 05, 2026' },
  { id: 'INV-9211', client: 'Hertz', amount: 15800.00, status: 'overdue', date: 'Apr 30, 2026' },
  { id: 'INV-9210', client: 'Tesla Fleet', amount: 2100.00, status: 'paid', date: 'Apr 28, 2026' },
];

export default function BillingPage() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="h-5 w-5 text-brand-blue" />
            <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">Enterprise Billing Systems</h1>
          </div>
          <p className="text-brand-slate text-sm">Automated reconciliation, regional payouts, and high-volume transaction mesh.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="border-brand-border text-foreground dark:text-white gap-2">
            <FileText className="h-4 w-4" /> Billing API
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white gap-2">
            <Download className="h-4 w-4" /> Settlement Report
          </Button>
        </div>
      </div>

      {/* Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPIWidget title="Net Revenue (MTD)" value="$842.4K" change={12.5} trend="up" icon={TrendingUp} />
        <KPIWidget title="Pending Payouts" value="$128.2K" change={2.4} trend="down" icon={Clock} />
        <KPIWidget title="Avg. Ticket Value" value="$184.20" icon={DollarSign} />
      </div>

      {/* Revenue Distribution & Invoices */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Revenue Chart */}
        <div className="lg:col-span-5">
          <GlassPanel className="p-8 h-full bg-brand-navy/60 border-brand-border">
            <h3 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-wider mb-8">Regional Revenue Distribution</h3>
            <div className="h-80 w-full">
              {isMounted && (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" horizontal={false} />
                    <XAxis type="number" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                    <YAxis dataKey="region" type="category" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                      contentStyle={{ backgroundColor: '#060D18', border: '1px solid #1e293b', borderRadius: '12px' }}
                      itemStyle={{ color: '#2F80FF', fontSize: '10px', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="amount" fill="#2F80FF" radius={[0, 4, 4, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
            <div className="mt-8 flex justify-between items-center text-xs text-brand-slate">
               <p>Global Exchange Node active</p>
               <p className="font-mono text-brand-blue">USD / EUR / GBP supported</p>
            </div>
          </GlassPanel>
        </div>

        {/* Invoice Table */}
        <div className="lg:col-span-7">
          <EnterpriseTable 
            title="Recent Enterprise Invoices"
            headers={['Invoice ID', 'Client', 'Amount', 'Status', 'Date', 'Actions']}
            data={billingHistory}
            renderRow={(invoice) => (
              <>
                <td className="px-6 py-4 font-mono text-[10px] text-brand-blue">{invoice.id}</td>
                <td className="px-6 py-4 text-sm font-bold text-foreground dark:text-white">{invoice.client}</td>
                <td className="px-6 py-4 text-sm font-mono text-foreground dark:text-white">${invoice.amount.toLocaleString()}</td>
                <td className="px-6 py-4">
                  <Badge className={
                    invoice.status === 'paid' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                    invoice.status === 'overdue' ? 'bg-rose-500/10 text-rose-500 border-rose-500/20' :
                    'bg-brand-orange/10 text-brand-orange border-brand-orange/20'
                  }>
                    {invoice.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-xs text-brand-slate">{invoice.date}</td>
                <td className="px-6 py-4 text-right">
                   <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ArrowUpRight className="h-4 w-4 text-brand-blue" />
                   </Button>
                </td>
              </>
            )}
          />
        </div>
      </div>

      {/* Financial Security Watch */}
      <GlassPanel className="p-10 border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500" />
               </div>
               <div className="space-y-1">
                  <h4 className="text-xl font-bold text-foreground dark:text-white">Automated Reconciliation Optimal</h4>
                  <p className="text-sm text-brand-slate">All MTD transactions have been verified against node logs. Zero discrepancies detected.</p>
               </div>
            </div>
            <Button className="bg-emerald-500 text-foreground dark:text-white font-bold h-12 px-8 rounded-xl shadow-[0_0_25px_rgba(16,185,129,0.3)]">
               Review Audit Mesh
            </Button>
         </div>
      </GlassPanel>
    </div>
  );
}
