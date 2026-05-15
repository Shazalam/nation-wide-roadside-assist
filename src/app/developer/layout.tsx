'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GlassPanel } from '@/components/ui/glass-panel';
import { 
  BookOpen, 
  Terminal, 
  Code, 
  Zap, 
  Globe, 
  ShieldCheck, 
  ShieldAlert,
  Cpu, 
  Search, 
  ChevronRight,
  ArrowLeft,
  LayoutDashboard,
  Box,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

const devLinks = [
  { group: "Getting Started", items: [
    { label: "Overview", href: "/developer", icon: BookOpen },
    { label: "Authentication", href: "/developer/auth", icon: ShieldCheck },
    { label: "Sandbox", href: "/developer/sandbox", icon: Box },
    { label: "API Analytics", href: "/developer/analytics", icon: LayoutDashboard },
  ]},
  { group: "API Reference", items: [
    { label: "Dispatch API", href: "/developer/reference/dispatch", icon: Zap },
    { label: "Fleet Telemetry", href: "/developer/reference/fleet", icon: Cpu },
    { label: "Vendor Search", href: "/developer/reference/vendors", icon: Search },
    { label: "API Explorer", href: "/developer/explorer", icon: Terminal },
  ]},
  { group: "SDKs & Tools", items: [
    { label: "Javascript SDK", href: "/developer/sdks/js", icon: Code },
    { label: "Python SDK", href: "/developer/sdks/python", icon: Code },
    { label: "Go SDK", href: "/developer/sdks/go", icon: Code },
  ]},
  { group: "Events", items: [
    { label: "Webhooks", href: "/developer/webhooks", icon: Globe },
  ]},
  { group: "Guides", items: [
    { label: "Error Codes", href: "/developer/guides/errors", icon: ShieldAlert },
    { label: "Rate Limiting", href: "/developer/guides/limits", icon: Clock },
  ]}
];

export default function DeveloperLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <LandingLayout>
      <div className="pt-24 min-h-screen bg-[#030812] flex flex-col font-sans">
        
        {/* Developer Header */}
        <div className="border-b border-brand-border bg-brand-bg/40 backdrop-blur-md sticky top-16 z-30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-brand-slate hover:text-foreground dark:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div className="h-4 w-[1px] bg-white/10" />
              <h1 className="text-sm font-bold text-foreground dark:text-white uppercase tracking-widest flex items-center gap-2">
                Developer Hub <span className="text-[10px] text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">v4.2.0</span>
              </h1>
            </div>
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" />
              <input 
                type="text" 
                placeholder="Search API docs, methods, SDKs..."
                className="w-full bg-white/5 border border-brand-border rounded-lg py-2 pl-10 pr-4 text-sm text-foreground dark:text-white placeholder:text-brand-slate focus:outline-none focus:border-brand-blue/50 transition-all font-mono"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-4">
               <button className="text-[10px] font-bold text-brand-slate hover:text-foreground dark:text-white uppercase tracking-widest px-3 py-1.5 rounded bg-white/5 border border-brand-border transition-all">Support</button>
               <button className="text-[10px] font-bold text-foreground dark:text-white bg-brand-blue hover:bg-brand-blue/90 uppercase tracking-widest px-4 py-1.5 rounded shadow-[0_0_15px_rgba(47,128,255,0.4)]">Login</button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 flex-1">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-40 space-y-8">
                {devLinks.map((group) => (
                  <div key={group.group}>
                    <h3 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-4">
                      {group.group}
                    </h3>
                    <nav className="flex flex-col gap-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                          <Link 
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                              isActive 
                                ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20" 
                                : "text-brand-slate hover:text-foreground dark:text-white hover:bg-white/5"
                            )}
                          >
                            <item.icon className={cn(
                              "h-4 w-4 shrink-0 transition-colors",
                              isActive ? "text-brand-blue" : "text-brand-slate group-hover:text-foreground dark:text-white"
                            )} />
                            {item.label}
                            {isActive && (
                              <ChevronRight className="h-3 w-3 ml-auto" />
                            )}
                          </Link>
                        );
                      })}
                    </nav>
                  </div>
                ))}
              </div>
            </aside>

            {/* Main Documentation Content */}
            <main className="flex-1 min-w-0 max-w-5xl">
              <div className="space-y-16">
                {children}
              </div>
            </main>

            {/* Right Side: Page Outline (Visible on desktop) */}
            <aside className="w-48 shrink-0 hidden xl:block">
               <div className="sticky top-40 space-y-6">
                  <h4 className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest border-b border-brand-border pb-2">On this page</h4>
                  <nav className="flex flex-col gap-3">
                     <button className="text-xs text-brand-blue text-left hover:text-brand-blue transition-colors">Introduction</button>
                     <button className="text-xs text-brand-slate text-left hover:text-foreground dark:text-white transition-colors">Authentication</button>
                     <button className="text-xs text-brand-slate text-left hover:text-foreground dark:text-white transition-colors">Endpoint Matrix</button>
                     <button className="text-xs text-brand-slate text-left hover:text-foreground dark:text-white transition-colors">Error Codes</button>
                  </nav>
               </div>
            </aside>

          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
