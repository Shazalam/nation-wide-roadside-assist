'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Truck, 
  MapPin, 
  Users, 
  Settings, 
  BarChart3, 
  ShieldCheck,
  Zap
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: MapPin, label: 'Live Operations', href: '/dashboard/operations' },
  { icon: Truck, label: 'Fleet Management', href: '/dashboard/fleet' },
  { icon: Users, label: 'Vendors', href: '/dashboard/vendors' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: ShieldCheck, label: 'Compliance', href: '/dashboard/compliance' },
  { icon: Zap, label: 'API Integrations', href: '/dashboard/api' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-64px)] w-64 border-r border-brand-border bg-brand-bg/50 backdrop-blur-xl">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                pathname === item.href 
                  ? "bg-brand-blue/10 text-brand-blue" 
                  : "text-brand-slate hover:bg-white/5 hover:text-white"
              )}
            >
              <item.icon className={cn("h-5 w-5", pathname === item.href ? "text-brand-blue" : "text-brand-slate")} />
              {item.label}
              {pathname === item.href && (
                <div className="ml-auto h-1.5 w-1.5 rounded-full bg-brand-blue shadow-[0_0_8px_#2F80FF]" />
              )}
            </Link>
          ))}
        </div>

        <div className="mt-auto rounded-xl bg-gradient-to-br from-brand-navy to-brand-bg p-4 border border-brand-border">
          <p className="text-xs font-semibold text-brand-blue uppercase tracking-wider mb-2">System Status</p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] text-brand-slate">All systems operational</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
