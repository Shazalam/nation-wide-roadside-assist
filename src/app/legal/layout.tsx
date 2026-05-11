'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LandingLayout } from '@/components/layout/landing-layout';
import { GlassPanel } from '@/components/ui/glass-panel';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Globe, 
  Users, 
  Search, 
  ChevronRight, 
  History, 
  ShieldAlert,
  ArrowLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';

const legalLinks = [
  { group: "Governance", items: [
    { label: "Trust Center", href: "/legal/trust", icon: ShieldCheck },
    { label: "Privacy Policy", href: "/legal/privacy", icon: Lock },
    { label: "Terms of Service", href: "/legal/terms", icon: FileText },
  ]},
  { group: "Compliance", items: [
    { label: "GDPR Compliance", href: "/legal/gdpr", icon: Globe },
    { label: "Security Mesh", href: "/legal/security", icon: ShieldAlert },
    { label: "SLA Commitments", href: "/legal/compliance", icon: History },
  ]},
  { group: "Accessibility", items: [
    { label: "Accessibility Policy", href: "/legal/accessibility", icon: Users },
  ]}
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <LandingLayout>
      <div className="pt-24 min-h-screen bg-[#030812]">
        {/* Legal Header */}
        <div className="border-b border-white/5 bg-brand-bg/40 backdrop-blur-md sticky top-16 z-30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-brand-slate hover:text-white transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div className="h-4 w-[1px] bg-white/10" />
              <h1 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                Legal & Trust Console <span className="text-[10px] text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">v2026.1</span>
              </h1>
            </div>
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-slate" />
              <input 
                type="text" 
                placeholder="Search legal documents..."
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder:text-brand-slate focus:outline-none focus:border-brand-blue/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-64 shrink-0">
              <div className="sticky top-40 space-y-8">
                {legalLinks.map((group) => (
                  <div key={group.group}>
                    <h3 className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-4">
                      {group.group}
                    </h3>
                    <nav className="flex flex-col gap-1">
                      {group.items.map((item) => (
                        <Link 
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all group",
                            pathname === item.href 
                              ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20" 
                              : "text-brand-slate hover:text-white hover:bg-white/5"
                          )}
                        >
                          <item.icon className={cn(
                            "h-4 w-4 shrink-0 transition-colors",
                            pathname === item.href ? "text-brand-blue" : "text-brand-slate group-hover:text-white"
                          )} />
                          {item.label}
                          {pathname === item.href && (
                            <ChevronRight className="h-3 w-3 ml-auto" />
                          )}
                        </Link>
                      ))}
                    </nav>
                  </div>
                ))}

                {/* Compliance Badges in Sidebar */}
                <div className="pt-8 border-t border-white/5 space-y-4">
                   <div className="flex items-center gap-3 grayscale opacity-30">
                      <div className="h-10 w-10 rounded border border-white/20 flex items-center justify-center text-[8px] font-bold text-white text-center p-1">SOC 2<br/>TYPE II</div>
                      <div className="h-10 w-10 rounded border border-white/20 flex items-center justify-center text-[8px] font-bold text-white text-center p-1">HIPAA<br/>COMPLIANT</div>
                   </div>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 max-w-4xl min-w-0">
              <GlassPanel className="p-10 md:p-16 bg-brand-navy/30 border-white/5 shadow-2xl">
                {children}
              </GlassPanel>
            </main>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}
