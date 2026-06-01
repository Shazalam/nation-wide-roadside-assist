'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, Globe, Zap, Activity, Share2, Lock } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen } from '@/store';
import { Logo } from '@/components/ui/logo';

const footerLinks = [
  {
    title: 'Solutions',
    links: [
      { name: 'Insurance Programs', href: '/solutions/insurance-programs' },
      { name: 'Fleet & Rental Ops', href: '/solutions/fleet-rental-operations' },
      { name: 'RV & Camper Support', href: '/solutions/rv-camper-support' },
      { name: 'Commercial Recovery', href: '/solutions/commercial-vehicle-recovery' },
      { name: 'Dispatch Solutions', href: '/solutions/enterprise-dispatch-solutions' },
      { name: 'Partner With Us', href: '/partner-with-us' },
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
      { name: 'Recovery & Winch-outs', href: '/services/recovery-winchouts' },
      { name: 'Trip Continuation', href: '/services/trip-continuation' },
      { name: 'Vendor Coordination', href: '/services/vendor-coordination' },
    ]
  },
  {
    title: 'Operations',
    links: [
      { name: '24/7 Dispatch Center', href: '/operations/24-7-dispatch-center' },
      { name: 'Vendor Network', href: '/operations/vendor-network' },
      { name: 'Call Center Operations', href: '/operations/call-center-operations' },
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'Overview', href: '/company/overview' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Privacy Policy', href: '/legal/privacy-policy' },
      { name: 'Security Hub', href: '/legal/security' },
    ]
  }
];

export const EnterpriseFooter = () => {
  const dispatch = useDispatch();

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12 relative z-10 overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6 relative z-10">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
               <Logo className="transition-transform duration-300 group-hover:scale-105" size={36} />
               <div className="flex flex-col">
                  <span className="text-foreground font-extrabold text-[12.5px] leading-none tracking-wider uppercase group-hover:text-foreground/80 transition-colors">
                     NATIONWIDE
                  </span>
                  <span className="text-[10px] font-black text-brand-blue tracking-[0.22em] mt-0.5 uppercase">
                     ROADSIDE ASSIST
                  </span>
               </div>
            </Link>
            
            <p className="text-brand-slate text-[15px] leading-7 max-w-[320px] font-medium">
              Building the mission-critical infrastructure for the nationwide enterprise heavy-duty recovery economy.
            </p>
            
            <div className="flex gap-3">
              {[Globe, Share2, Activity].map((Icon, i) => (
                <Link key={i} href="#" className="h-10 w-10 rounded-xl bg-foreground/[0.02] border border-brand-border flex items-center justify-center text-brand-slate hover:text-brand-blue hover:bg-brand-blue/10 transition-colors group shadow-sm">
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-5 relative z-10">
              <h4 className="text-xs font-bold text-foreground uppercase tracking-[0.22em]">{group.title}</h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.name === 'Partner With Us' ? (
                      <button 
                        onClick={() => dispatch(setPartnershipOpen(true))}
                        className="text-brand-slate text-sm font-medium hover:text-brand-blue transition-colors flex items-center gap-2 group"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href} className="text-brand-slate text-sm font-medium hover:text-brand-blue transition-colors flex items-center gap-2 group">
                        {link.name}
                        {link.href === '#' && <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-opacity" />}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Legal & Status Row */}
        <div className="py-5 border-t border-brand-border flex flex-col lg:flex-row items-center justify-between gap-4 relative z-10">
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-xs font-mono text-brand-slate">
            <span className="text-foreground/40">© {new Date().getFullYear()} NATIONWIDE ROADSIDE ASSIST</span>
            <Link href="/legal/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/legal/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            <Link href="/legal/compliance" className="hover:text-foreground transition-colors">SLA Agreement</Link>
          </div>

        </div>
      </div>
    </footer>
  );
};
