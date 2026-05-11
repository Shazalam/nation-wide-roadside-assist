'use client';

import React from 'react';
import { GlassPanel } from './glass-panel';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KPIWidgetProps {
  title: string;
  value: string | number;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  description?: string;
  loading?: boolean;
}

export const KPIWidget = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  description,
  loading = false,
}: KPIWidgetProps) => {
  if (loading) {
    return (
      <GlassPanel className="p-6 space-y-4">
        <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
        <div className="h-8 w-32 bg-white/10 rounded animate-pulse" />
        <div className="h-4 w-40 bg-white/5 rounded animate-pulse" />
      </GlassPanel>
    );
  }

  return (
    <GlassPanel hover className="p-6 flex flex-col justify-between group">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-brand-slate uppercase tracking-wider">{title}</p>
          <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        </div>
        {Icon && (
          <div className="h-10 w-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {trend && change !== undefined && (
          <div className={cn(
            "flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-full",
            trend === 'up' ? "bg-emerald-500/10 text-emerald-500" : 
            trend === 'down' ? "bg-rose-500/10 text-rose-500" : 
            "bg-brand-slate/10 text-brand-slate"
          )}>
            {trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {change}%
          </div>
        )}
        {description && <span className="text-xs text-brand-slate">{description}</span>}
      </div>

      {/* Decorative Glow on hover */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-brand-blue/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </GlassPanel>
  );
};
