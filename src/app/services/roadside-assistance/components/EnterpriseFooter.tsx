'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, Globe, Zap, Activity, Share2 } from 'lucide-react';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'Insurance Programs', href: '/solutions/insurance-programs' },
      { name: 'Fleet Solutions', href: '/solutions/fleet-operations' },
      { name: 'RV & Camper Support', href: '/solutions/rv-camper-support' },
      { name: 'Commercial Recovery', href: '/solutions/commercial-vehicle-recovery' },
      { name: 'Dispatch Solutions', href: '/solutions/enterprise-dispatch-solutions' },
    ]
  },
  {
    title: 'Services',
    links: [
      { name: 'Roadside Assistance', href: '/services/roadside-assistance' },
      { name: 'Heavy-Duty Towing', href: '/services/heavy-duty-towing' },
      { name: 'Recovery & Winch-outs', href: '/services/recovery-winchouts' },
      { name: 'Mobile Repairs', href: '/services/mobile-repairs' },
      { name: 'Tire Change Assistance', href: '#' },
    ]
  },
  {
    title: 'Operations',
    links: [
      { name: '24/7 Dispatch Center', href: '/operations/24-7-dispatch-center' },
      { name: 'Vendor Network', href: '#' },
      { name: 'SLA Management', href: '#' },
      { name: 'Fleet Support', href: '#' },
      { name: 'Incident Management', href: '#' },
    ]
  },
  {
    title: 'Technology',
    links: [
      { name: 'API Documentation', href: '#' },
      { name: 'SDKs & Libraries', href: '#' },
      { name: 'Webhook Events', href: '#' },
      { name: 'Sandbox Environment', href: '#' },
      { name: 'System Status', href: '#' },
    ]
  }
];

export const EnterpriseFooter = () => {
  return (
    <footer className="bg-[#081120] border-t border-white/5 py-12 relative z-10 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#2F80FF]/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 relative z-10">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
               <div className="flex items-center italic font-black text-2xl tracking-tighter mr-1">
                  <span className="text-white">N</span>
                  <span className="text-[#2F80FF]">T</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-white font-bold text-[13px] leading-tight tracking-wide group-hover:text-white/80 transition-colors">
                     NATIONWIDE<br/>TRANS INC.
                  </span>
               </div>
            </Link>
            
            <p className="text-[#94A3B8] text-[15px] leading-7 max-w-[320px] font-medium">
              Building the mission-critical infrastructure for the nationwide enterprise heavy-duty recovery economy.
            </p>
            
            <div className="flex gap-3">
              {[Globe, Share2, Activity].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-[#94A3B8] hover:text-[#2F80FF] hover:bg-[#2F80FF]/10 transition-colors group shadow-sm">
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-5 relative z-10">
              <h4 className="text-xs font-bold text-white uppercase tracking-[0.22em]">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#94A3B8] text-sm font-medium hover:text-[#2F80FF] transition-colors flex items-center gap-2 group">
                      {link.name}
                      {link.href === '#' && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Legal & Status Row */}
        <div className="py-5 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs font-mono text-[#94A3B8]">
            <span className="text-white/40">© {new Date().getFullYear()} NTI</span>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">SLA Agreement</Link>
          </div>
          
          <div className="flex items-center gap-5">
             <span className="text-xs text-[#94A3B8] font-mono">ISO 27001 Certified</span>
             <div className="h-3 w-px bg-white/10" />
             <div className="flex items-center gap-2 bg-[#2F80FF]/5 px-3 py-1.5 rounded-full border border-[#2F80FF]/10">
                <div className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Operational</span>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
