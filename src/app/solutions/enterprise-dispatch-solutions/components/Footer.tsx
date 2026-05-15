'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Globe, Share2, Activity, ExternalLink } from 'lucide-react';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'Insurance Programs', href: '/solutions/insurance-programs' },
      { name: 'Fleet & Rental Ops', href: '/solutions/fleet-rental-operations' },
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
      { name: 'Medium & Light Duty', href: '/services/medium-light-duty-towing' },
      { name: 'Tire Change Assistance', href: '/services/tire-change-assistance' },
      { name: 'Mobile Repairs', href: '/services/mobile-repairs' },
    ]
  },
  {
    title: 'Operations',
    links: [
      { name: '24/7 Dispatch Center', href: '/operations/24-7-dispatch-center' },
      { name: 'Fleet Support', href: '/operations/fleet-support' },
      { name: 'Vendor Network', href: '/operations/vendor-network' },
      { name: 'Call Center Operations', href: '/operations/call-center-operations' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'Overview', href: '/company/overview' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Security Hub', href: '/legal/security' },
    ]
  }
];

export const Footer = () => {
  return (
    <footer className="bg-brand-bg pt-24 pb-12 border-t border-brand-border relative z-10 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
               <div className="flex items-center italic font-black text-2xl tracking-tighter mr-1">
                  <span className="text-foreground dark:text-white">N</span>
                  <span className="text-brand-blue">T</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-lg font-bold text-foreground dark:text-white tracking-tight leading-none uppercase">NATIONWIDE</span>
                  <span className="text-[10px] font-black text-brand-blue tracking-[0.3em] mt-1">TRANS INC.</span>
               </div>
            </Link>
            <p className="text-brand-slate text-sm leading-relaxed max-w-sm font-medium">
              Mission-critical roadside infrastructure and dispatch intelligence for the enterprise mobility economy.
            </p>
            <div className="flex gap-4">
               {[Globe, Share2, Activity].map((Icon, i) => (
                 <a key={i} href="#" className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-slate hover:bg-brand-blue/10 hover:text-brand-blue transition-all border border-brand-border">
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
                     <h4 className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-[0.3em]">{col.title}</h4>
                     <ul className="space-y-4">
                        {col.links.map((link) => (
                          <li key={link.name}>
                             <Link href={link.href} className="text-sm text-brand-slate hover:text-brand-blue transition-colors flex items-center gap-1 group">
                                {link.name}
                                {link.href === '#' && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />}
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
        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold text-brand-slate uppercase tracking-widest">
              <Link href="/legal/privacy-policy" className="hover:text-foreground dark:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms-of-service" className="hover:text-foreground dark:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/compliance" className="hover:text-foreground dark:text-white transition-colors">SLA Agreement</Link>
              <Link href="/legal/compliance" className="hover:text-foreground dark:text-white transition-colors">Compliance Hub</Link>
           </div>
           
           <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">All Systems Operational</span>
           </div>

           <p className="text-[10px] font-bold text-brand-slate/40 uppercase tracking-widest">
              © {new Date().getFullYear()} Nationwide Trans Inc. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  );
};
