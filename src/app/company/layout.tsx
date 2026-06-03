'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/layout/navbar';
import { EnterpriseFooter } from '@/components/landing/enterprise-footer';
import { 
  Building2, 
  Users, 
  Headphones, 
  Search, 
  ChevronRight,
  Globe,
  Shield,
  FileText,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';

const companyLinks = [
  { group: "Company", items: [
    { label: "Overview", href: "/company/overview", icon: Building2 },
    { label: "Contact", href: "/company/contact", icon: Headphones },
    { label: "CAPABILITY REPORT PDF", href: "#", icon: FileText, isPdf: true },
  ]},
  { group: "Legal & Governance", items: [
    { label: "Privacy Policy", href: "/legal/privacy-policy", icon: Shield },
    { label: "Terms of Service", href: "/legal/terms-of-service", icon: Globe },
    { label: "Cookie Policy", href: "/legal/cookie-policy", icon: Users },
  ]}
];

export default function CompanyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isGeneratingPdf) return;
    setIsGeneratingPdf(true);
    try {
      const response = await fetch('/api/generate-pdf');
      if (!response.ok) throw new Error('PDF generation failed');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'NationwideRoadsideAssist-Capability-Report.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('PDF download error:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row pt-20 relative">
        {/* Company Sidebar - Collapsible on Desktop */}
        <aside className="fixed left-0 top-20 h-[calc(100vh-80px)] w-0 lg:w-16 lg:hover:w-80 transition-all duration-300 z-50 border-r border-brand-border bg-brand-bg/95 backdrop-blur-xl overflow-hidden group/sidebar shadow-2xl">
          <div className="w-80 p-4 group-hover/sidebar:p-8 space-y-8 h-full overflow-y-auto no-scrollbar">


            {companyLinks.map((group) => (
              <div key={group.group}>
                <h3 className="text-[10px] font-black text-brand-slate uppercase tracking-[0.3em] mb-4 px-2 opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">
                  {group.group}
                </h3>
                <nav className="flex flex-col gap-2">
                  {group.items.map((item) => {
                    const isPdf = 'isPdf' in item && item.isPdf;
                    return (
                      <Link 
                        key={item.label}
                        href={item.href}
                        onClick={isPdf ? handleDownloadPdf : undefined}
                        className={cn(
                          "flex items-center gap-4 p-2 rounded-xl text-xs font-bold transition-all relative overflow-hidden",
                          (pathname === item.href && !isPdf) 
                            ? "bg-[#2F80FF]/10 text-[#2F80FF] border border-[#2F80FF]/20" 
                            : "text-brand-slate hover:text-foreground dark:text-white hover:bg-white/[0.03]"
                        )}
                        title={item.label}
                      >
                        {isPdf && isGeneratingPdf ? (
                          <Loader2 className="h-5 w-5 shrink-0 animate-spin text-cyan-400 ml-0.5" />
                        ) : (
                          <item.icon className={cn(
                            "h-5 w-5 shrink-0 transition-colors ml-0.5",
                            (pathname === item.href && !isPdf) ? "text-[#2F80FF]" : "text-brand-slate group-hover:text-foreground dark:text-white"
                          )} />
                        )}
                        <span className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity whitespace-nowrap">
                          {isPdf && isGeneratingPdf ? "Generating PDF..." : item.label}
                        </span>
                        {(pathname === item.href && !isPdf) && (
                          <ChevronRight className="absolute right-4 h-3 w-3 opacity-0 group-hover/sidebar:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}


          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 bg-brand-bg relative overflow-hidden flex flex-col lg:pl-16">
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
