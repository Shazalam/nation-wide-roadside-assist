'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Globe, Share2, Activity, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    title: 'Solutions',
    links: ['Insurance Programs', 'Fleet & Rental', 'Enterprise Dispatch', 'Commercial Recovery', 'RV Support']
  },
  {
    title: 'Services',
    links: ['Roadside Assistance', 'Heavy-Duty Towing', 'Mobile Repairs', 'Trip Continuation', 'Vendor Network']
  },
  {
    title: 'Operations',
    links: ['24/7 Dispatch Center', 'Vendor Network', 'SLA Management', 'Escalation Workflows', 'Call Center Ops']
  },
  {
    title: 'Technology',
    links: ['Dispatch APIs', 'Real-time Tracking', 'Fleet Visibility', 'Analytics Hub', 'Developer Portal']
  }
];

export const EnterpriseFooter = () => {
  return (
    <footer className="bg-[#081120] pt-32 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.4)] group-hover:scale-105 transition-transform duration-300">
                <Shield className="text-white h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none">NATIONWIDE</span>
                <span className="text-[10px] font-black text-brand-blue tracking-[0.3em] mt-1 uppercase">Trans Inc.</span>
              </div>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Mission-critical roadside infrastructure and dispatch intelligence for the enterprise mobility economy.
            </p>
            <div className="flex gap-4">
               {[Globe, Share2, Activity].map((Icon, i) => (
                 <a key={i} href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-slate hover:bg-brand-blue/10 hover:text-brand-blue transition-all border border-white/5">
                    <Icon className="h-5 w-5" />
                 </a>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {footerLinks.map((col) => (
                  <div key={col.title} className="space-y-6">
                     <h4 className="text-[10px] font-black text-white uppercase tracking-[0.3em]">{col.title}</h4>
                     <ul className="space-y-4">
                        {col.links.map((link) => (
                          <li key={link}>
                             <Link href="#" className="text-sm text-brand-slate hover:text-brand-blue transition-colors flex items-center gap-1 group">
                                {link}
                                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                             </Link>
                          </li>
                        ))}
                     </ul>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold text-brand-slate uppercase tracking-widest">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white transition-colors">Compliance</Link>
              <Link href="#" className="hover:text-white transition-colors">API Status</Link>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">All Systems Operational</span>
           </div>

           <p className="text-[10px] font-bold text-brand-slate/40 uppercase tracking-widest">
              © 2026 Nationwide Trans Inc. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};
