'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Shield, Terminal, MessageSquare, Zap } from 'lucide-react';

const footerLinks = {
  solutions: [
    { label: 'Fleet Recovery', href: '#' },
    { label: 'Heavy Towing', href: '#' },
    { label: 'Dispatch Intelligence', href: '#' },
    { label: 'Network Operations', href: '#' },
  ],
  services: [
    { label: 'Accident Recovery', href: '#' },
    { label: 'Tire & Battery', href: '#' },
    { label: 'Fuel Delivery', href: '#' },
    { label: 'Mobile Mechanic', href: '#' },
  ],
  operations: [
    { label: 'Dispatch Center', href: '#' },
    { label: 'Vendor Network', href: '#' },
    { label: 'Compliance', href: '#' },
    { label: 'SLA Monitoring', href: '#' },
  ],
  technology: [
    { label: 'Developer Portal', href: '#' },
    { label: 'API Documentation', href: '#' },
    { label: 'System Status', href: '#' },
    { label: 'Open Source', href: '#' },
  ],
};

export default function EnterpriseFooter() {
  return (
    <footer className="bg-[#0A192F] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-[#2F80FF] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
               </div>
               <span className="text-xl font-black text-white tracking-tighter uppercase">Nationwide Trans</span>
            </div>
            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-xs">
              Enterprise roadside infrastructure and commercial recovery intelligence for the modern mobility economy.
            </p>
            <div className="flex gap-4">
               {[MessageSquare, Shield, Terminal].map((Icon, i) => (
                 <Link key={i} href="#" className="p-2 rounded-lg bg-white/5 text-[#94A3B8] hover:text-[#2F80FF] hover:bg-white/10 transition-all">
                    <Icon className="w-5 h-5" />
                 </Link>
               ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
             {Object.entries(footerLinks).map(([category, links]) => (
               <div key={category}>
                  <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-6">{category}</h4>
                  <ul className="space-y-4">
                     {links.map((link) => (
                       <li key={link.label}>
                          <Link href={link.href} className="text-sm text-[#94A3B8] hover:text-white transition-colors">
                             {link.label}
                          </Link>
                       </li>
                     ))}
                  </ul>
               </div>
             ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-8 text-[10px] font-mono text-[#94A3B8] uppercase tracking-widest">
              <span>© 2024 Nationwide Trans Inc.</span>
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                 <Shield className="w-4 h-4 text-emerald-500" />
                 <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[9px] font-bold text-[#94A3B8] uppercase tracking-widest">Operational Mesh: 100% Online</span>
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
}
