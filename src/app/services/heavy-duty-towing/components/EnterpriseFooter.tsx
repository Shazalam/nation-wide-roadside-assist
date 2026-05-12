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
      { name: 'Winch-Out Events', href: '#' },
      { name: 'Mobile Mechanic', href: '#' },
      { name: 'Tire Change Assistance', href: '#' },
    ]
  },
  {
    title: 'Operations',
    links: [
      { name: '24/7 Dispatch Center', href: '#' },
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
    <footer className="bg-[#0A192F] border-t border-white/5 pt-32 pb-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mb-24">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-brand-blue rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.4)]">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">NATIONWIDE <span className="text-brand-blue">TRANS INC.</span></span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs font-medium">
              Building the mission-critical infrastructure for the nationwide enterprise heavy-duty recovery economy.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors"><Globe className="h-5 w-5" /></Link>
              <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors"><Share2 className="h-5 w-5" /></Link>
              <Link href="#" className="text-[#94A3B8] hover:text-white transition-colors"><Activity className="h-5 w-5" /></Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-8">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[#94A3B8] text-[13px] font-medium hover:text-brand-blue transition-colors flex items-center gap-2 group">
                      {link.name}
                      {link.href === '#' && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">SLA Agreement</Link>
          </div>
          
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">System Operational</span>
             </div>
             <p className="text-[11px] font-bold text-[#94A3B8] uppercase tracking-widest opacity-40">
               © 2026 Nationwide Trans Inc. All rights reserved.
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
