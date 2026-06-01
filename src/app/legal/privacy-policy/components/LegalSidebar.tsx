'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'collection', label: 'Information We Collect' },
  { id: 'usage', label: 'Operational Data Usage' },
  { id: 'fleet-data', label: 'Dispatch & Fleet Data' },
  { id: 'api-data', label: 'API & Integration Data' },
  { id: 'cookies', label: 'Cookies & Tracking' },
  { id: 'retention', label: 'Data Retention' },
  { id: 'security', label: 'Security Practices' },
  { id: 'compliance', label: 'Compliance & Governance' },
  { id: 'providers', label: 'Third-Party Providers' },
  { id: 'user-rights', label: 'User Rights' },
  { id: 'gdpr', label: 'Privacy Compliance Rights' },
  { id: 'ccpa', label: 'Privacy Controls Rights' },
  { id: 'contact', label: 'Contact Information' },
  { id: 'updates', label: 'Policy Updates' }
];

interface LegalSidebarProps {
  activeId: string;
}

export const LegalSidebar = ({ activeId }: LegalSidebarProps) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // Navbar + ComplianceBar + extra
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <aside className="w-80 hidden lg:block sticky top-36 h-[calc(100vh-160px)] overflow-y-auto no-scrollbar pr-6 pb-12">
      <div className="space-y-8">
        {/* Search Input */}
        <div className="relative group">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-brand-slate group-hover:text-brand-blue transition-colors" />
           <input 
             type="text" 
             placeholder="Search legal docs..." 
             className="w-full bg-white/[0.03] border border-brand-border rounded-xl py-2.5 pl-10 pr-4 text-xs font-medium text-foreground dark:text-white placeholder:text-brand-slate focus:outline-none focus:border-brand-blue/50 transition-all"
           />
        </div>

        <nav className="space-y-1">
           <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.25em] mb-4 px-3">Documentation Sections</p>
           {sections.map((section) => (
             <button
               key={section.id}
               onClick={() => scrollToSection(section.id)}
               className={cn(
                 "w-full text-left px-3 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                 activeId === section.id 
                   ? "bg-[#2F80FF]/10 text-[#2F80FF] border border-[#2F80FF]/20" 
                   : "text-brand-slate hover:text-foreground dark:text-white hover:bg-white/[0.03]"
               )}
             >
                {section.label}
                <ChevronRight className={cn(
                  "h-3 w-3 transition-transform duration-300",
                  activeId === section.id ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-40"
                )} />
             </button>
           ))}
        </nav>

        {/* Support Card */}
        <div className="p-5 bg-[#2F80FF]/5 border border-[#2F80FF]/20 rounded-2xl space-y-3">
           <p className="text-[10px] font-black text-[#2F80FF] uppercase tracking-widest leading-none">Legal Support</p>
           <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
              Need clarification on our enterprise privacy framework?
           </p>
           <button className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:text-[#2F80FF] transition-colors">
              Contact Compliance Team →
           </button>
        </div>
      </div>
    </aside>
  );
};
