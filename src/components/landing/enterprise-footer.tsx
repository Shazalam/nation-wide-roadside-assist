'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Globe, Terminal, Headphones, Zap, Cpu, Activity } from 'lucide-react';

export const EnterpriseFooter = () => {
  return (
    <footer className="bg-[#030812] border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-brand-blue flex items-center justify-center">
                <Shield className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">NATIONWIDE TRANS</span>
            </Link>
            <p className="text-brand-slate text-sm max-w-sm leading-relaxed">
              Enterprise mobility infrastructure engineered for high-stakes roadside operations. API-first coordination for fleets, insurers, and OEMs globally.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Zap} />
              <SocialLink icon={Cpu} />
              <SocialLink icon={Activity} />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-6">Solutions</h4>
            <ul className="space-y-4">
              <FooterLink href="/solutions/insurance">Insurance Core</FooterLink>
              <FooterLink href="/solutions/fleet">Fleet Operations</FooterLink>
              <FooterLink href="/solutions/rv">RV & Leisure</FooterLink>
              <FooterLink href="/solutions/commercial">Commercial Recovery</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-6">Infrastructure</h4>
            <ul className="space-y-4">
              <FooterLink href="/api-docs">API Reference</FooterLink>
              <FooterLink href="/tech/mesh">Mesh Network</FooterLink>
              <FooterLink href="/tech/security">Security Mesh</FooterLink>
              <FooterLink href="/status">Network Status</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] mb-6">Company</h4>
            <ul className="space-y-4">
              <FooterLink href="/about">Our Story</FooterLink>
              <FooterLink href="/careers">Careers</FooterLink>
              <FooterLink href="/contact">Support</FooterLink>
              <FooterLink href="/legal">Legal Node</FooterLink>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[10px] text-brand-slate font-bold uppercase tracking-widest">© 2026 NATIONWIDE TRANS INC.</p>
            <div className="h-4 w-[1px] bg-white/10 hidden md:block" />
            <p className="text-[10px] text-brand-slate font-bold uppercase tracking-widest">SYSTEM STATUS: <span className="text-emerald-500">OPTIMAL</span></p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-[10px] font-bold text-brand-slate hover:text-white uppercase tracking-widest transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[10px] font-bold text-brand-slate hover:text-white uppercase tracking-widest transition-colors">Terms</Link>
            <Link href="/cookies" className="text-[10px] font-bold text-brand-slate hover:text-white uppercase tracking-widest transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-sm text-brand-slate hover:text-white transition-colors">
      {children}
    </Link>
  </li>
);

const SocialLink = ({ icon: Icon }: { icon: any }) => (
  <Link href="#" className="h-10 w-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-brand-blue/10 hover:border-brand-blue/20 transition-all">
    <Icon className="h-5 w-5 text-brand-slate" />
  </Link>
);
