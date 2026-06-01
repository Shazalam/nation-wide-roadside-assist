'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { 
  ShieldCheck, 
  FileText, 
  Lock, 
  Search, 
  ChevronRight, 
  ArrowLeft,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

const legalLinks = [
  { group: "Governance", items: [
    { label: "Trust Center", href: "/legal/trust", icon: ShieldCheck },
    { label: "Privacy Policy", href: "/legal/privacy-policy", icon: Lock },
    { label: "Terms of Service", href: "/legal/terms-of-service", icon: FileText },
    { label: "Cookie Policy", href: "/legal/cookie-policy", icon: Eye },
  ]}
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row pt-20">
        {/* Governance Sidebar */}
        <aside className="w-full lg:w-80 lg:border-r border-brand-border bg-brand-bg/50 backdrop-blur-xl lg:sticky lg:top-20 lg:h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
          <div className="p-8 space-y-8">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-slate group-hover:text-[#2F80FF] transition-colors" />
              <input 
                type="text" 
                placeholder="Search legal..."
                className="w-full bg-white/[0.03] border border-brand-border rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-foreground dark:text-white placeholder:text-brand-slate focus:outline-none focus:border-[#2F80FF]/50 transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {legalLinks.map((group) => (
              <div key={group.group}>
                <h3 className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-4 px-3">
                  {group.group}
                </h3>
                <nav className="flex flex-col gap-1">
                  {group.items.map((item) => (
                    <Link 
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all group",
                        pathname === item.href 
                          ? "bg-[#2F80FF]/10 text-[#2F80FF] border border-[#2F80FF]/20" 
                          : "text-brand-slate hover:text-foreground dark:text-white hover:bg-white/[0.03]"
                      )}
                    >
                      <item.icon className={cn(
                        "h-4 w-4 shrink-0 transition-colors",
                        pathname === item.href ? "text-[#2F80FF]" : "text-brand-slate group-hover:text-foreground dark:text-white"
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

            <div className="pt-8 border-t border-brand-border">
               <div className="flex items-center gap-3 opacity-40">
                  <div className="h-10 w-10 rounded border border-white/20 flex items-center justify-center text-[8px] font-black text-foreground dark:text-white text-center p-1 uppercase">Enterprise Security</div>
                  <div className="h-10 w-10 rounded border border-white/20 flex items-center justify-center text-[8px] font-black text-foreground dark:text-white text-center p-1 uppercase tracking-tighter">Secure Payment Processing</div>
               </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 bg-brand-bg relative overflow-hidden flex flex-col">
           <div className="flex-1">
              {/* Cinematic Ambient Glows */}
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full -mr-48 -mt-48 pointer-events-none" />
              
              <div className="relative z-10">
                 {children}
              </div>
           </div>
           
           <EnterpriseFooter />
        </main>
      </div>
    </div>
  );
}
