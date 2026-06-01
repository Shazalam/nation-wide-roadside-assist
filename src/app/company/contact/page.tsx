'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { MountedOnly } from '@/components/utils/mounted-only';
import {
  Headphones, Globe, Shield, Activity, ChevronRight, Phone,
  Mail, MapPin, Clock, ArrowRight, ExternalLink, MessageSquare,
  Building2, Zap, Users, FileText, AlertCircle
} from 'lucide-react';

/* ─── Reusable Section Shell ─────────────────────────────────────────────── */
const DocumentationSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="scroll-mt-40 mb-16"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="h-px w-8 bg-[#2F80FF]/30" />
      <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tight uppercase">{title}</h2>
    </div>
    <GlassPanel className="p-8 lg:p-10 border-brand-border bg-card/40 space-y-6">
      {children}
    </GlassPanel>
  </motion.section>
);

/* ─── Hero ───────────────────────────────────────────────────────────────── */
const ContactHero = () => (
  <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden bg-brand-bg min-h-[55vh] flex items-center border-b border-brand-border">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#2F80FF]/10 blur-[150px] rounded-full -mt-48 pointer-events-none" />
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
      style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 0)', backgroundSize: '40px 40px' }} />

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        <div className="space-y-4 flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm font-medium text-slate-300 uppercase tracking-widest">
            <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Company</span>
            <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
            <span className="text-[#2F80FF]">Contact</span>
          </motion.div>
        </div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]">
          Enterprise <br />
          <span className="text-[#2F80FF]">Contact & Support</span>
          <br />Infrastructure
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-lg lg:text-xl text-slate-200 leading-relaxed max-w-3xl font-normal">
          Multiple channels for enterprise partners, fleet operators, vendors, and developers to reach our operations, sales, and support teams.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
          {[
            { label: '24/7 Live Support', icon: Headphones },
            { label: 'Enterprise Sales', icon: Building2 },
            { label: 'Developer Portal', icon: Zap },
            { label: 'Partner Success', icon: Users }
          ].map((m, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
              className="bg-card/40 backdrop-blur-xl border border-brand-border rounded-2xl p-6 flex flex-col items-center justify-center gap-4 group hover:border-[#2F80FF]/40 transition-all duration-500 min-h-[140px]">
              <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 flex items-center justify-center group-hover:scale-105 transition-all">
                <m.icon className="h-6 w-6 text-[#2F80FF]" />
              </div>
              <p className="text-sm lg:text-base font-extrabold text-foreground dark:text-white uppercase tracking-wider text-center leading-tight">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ─── Support Strip ──────────────────────────────────────────────────────── */
const SupportStrip = () => (
  <section className="bg-brand-bg/80 backdrop-blur-md border-b border-brand-border sticky top-16 z-40">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-12">
        <p className="text-sm font-black text-slate-300 uppercase tracking-[0.22em] whitespace-nowrap hidden lg:block">Support Channels</p>
        <div className="flex items-center gap-10">
          {[
            { label: 'PHONE', icon: Phone },
            { label: 'EMAIL', icon: Mail },
            { label: 'OFFICES', icon: MapPin }
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 group transition-all cursor-pointer">
              <c.icon className="h-5 w-5 text-[#2F80FF] group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100" />
              <span className="text-sm font-extrabold text-slate-300 group-hover:text-white transition-colors tracking-widest whitespace-nowrap">{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#2F80FF]/30 to-transparent" />
  </section>
);

/* ─── Main Content ───────────────────────────────────────────────────────── */
const ContactContent = () => (
  <div className="flex-grow max-w-4xl pb-32">
    <DocumentationSection id="emergency" title="Emergency Dispatch">
      <p className="text-slate-200 text-lg lg:text-xl leading-relaxed font-normal">
        For active roadside emergencies and priority dispatch requests, contact our 24/7 operations center directly:
      </p>
      <div className="p-6 bg-[#2F80FF]/5 border border-[#2F80FF]/25 rounded-2xl flex items-start gap-4">
        <AlertCircle className="h-7 w-7 text-[#2F80FF] mt-0.5 shrink-0" />
        <div className="text-base font-normal text-slate-200 leading-relaxed">
          <span className="text-white font-bold block mb-2 text-lg">24/7 Emergency Dispatch Line:</span>
          <a href="tel:+18556133131" className="text-3xl font-mono text-[#2F80FF] hover:text-[#2F80FF]/80 transition-colors font-black mb-2 inline-block hover:underline">
            +1-855-613-3131
          </a>
          <p className="text-base text-slate-300 leading-relaxed">This line is monitored 24/7 by our dispatch operations team. Average response time: under 60 seconds.</p>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="enterprise" title="Enterprise Sales & Partnerships">
      <p className="text-slate-200 text-lg lg:text-xl leading-relaxed font-normal mb-6">
        Connect with our enterprise team for partnership discussions, custom integrations, and fleet program onboarding:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { label: '24/7 Support Team', desc: 'Dedicated operational assistance for roadside dispatch, booking support, service coordination, and customer help across nationwide operations.', icon: Building2, contact: 'supportmgmt@nationwideroadsideassist.com' },
          { label: 'Partner With Us', desc: 'Join our nationwide roadside assistance network and collaborate with a trusted operational ecosystem supporting insurers, fleets, rental providers, and mobility partners across the USA and Canada.', icon: Users, contact: 'kongl@nationwidetransinc.com' }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-white/[0.02] border border-brand-border rounded-2xl space-y-4 group hover:border-[#2F80FF]/35 transition-all duration-300 hover:bg-white/[0.03]">
            <item.icon className="h-6 w-6 text-[#2F80FF]" />
            <h4 className="text-lg font-black text-white uppercase tracking-wider">{item.label}</h4>
            <p className="text-base text-slate-300 font-normal leading-relaxed">{item.desc}</p>
            <div className="pt-2">
              <a href={`mailto:${item.contact}`} className="inline-flex items-center gap-2 text-base font-mono font-bold text-[#2F80FF] hover:underline hover:text-[#2F80FF]/80 transition-colors">
                {item.contact}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="support" title="Technical Support">
      <p className="text-slate-200 text-lg lg:text-xl leading-relaxed font-normal mb-6">
        Our technical support team provides multi-tier assistance for all enterprise clients:
      </p>
      <ul className="space-y-5">
        {[
          { text: 'Tier 1: Live chat and email support — average response time under 5 minutes.' },
          { text: 'Tier 2: Dedicated technical account managers for enterprise partners with SLA guarantees.' },
          { text: 'Tier 3: Engineering escalation for API integration issues and platform-level incidents.' },
          { 
            text: 'Developer Portal: Self-service documentation, API reference, and sandbox environments at ',
            link: { label: 'docs.nationwidetrans.com', href: 'https://docs.nationwidetrans.com' }
          },
          { 
            text: 'Status Page: Real-time infrastructure health monitoring at ',
            link: { label: 'status.nationwidetrans.com', href: 'https://status.nationwidetrans.com' }
          }
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/30 flex items-center justify-center shrink-0 mt-1">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
            </div>
            <span className="text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              {item.text}
              {item.link && (
                <a href={item.link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#2F80FF] hover:underline font-bold font-mono">
                  {item.link.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </span>
          </li>
        ))}
      </ul>
    </DocumentationSection>

    <DocumentationSection id="offices" title="Corporate Headquarters & Contacts">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h4 className="text-lg font-black text-white uppercase tracking-wider">Headquarters</h4>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Nationwide Roadside Assist<br />
            11727 East End Avenue<br />
            Chino, CA 91710<br />
            United States
          </p>
          <a href="tel:+18556133131" className="inline-block text-base font-mono font-bold text-[#2F80FF] hover:underline hover:text-[#2F80FF]/80 transition-colors">
            +1 (855) 613-3131
          </a>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-black text-white uppercase tracking-wider">People & Contacts</h4>
          <div className="flex flex-col gap-2.5">
            <a href="mailto:careers@nationwidetrans.com" className="inline-flex items-center gap-1.5 text-base font-mono font-bold text-[#2F80FF] hover:underline hover:text-[#2F80FF]/80 transition-colors">
              careers@nationwidetrans.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a href="mailto:talent@nationwidetrans.com" className="inline-flex items-center gap-1.5 text-base font-mono font-bold text-[#2F80FF] hover:underline hover:text-[#2F80FF]/80 transition-colors">
              talent@nationwidetrans.com
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-black text-white uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col gap-2 text-base text-slate-300 font-normal leading-relaxed">
            <a href="https://linkedin.com/company/nationwidetrans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors group">
              <span>LinkedIn:</span>
              <span className="text-[#2F80FF] font-mono font-bold group-hover:underline inline-flex items-center gap-1">
                /company/nationwidetrans
                <ExternalLink className="h-3 w-3" />
              </span>
            </a>
            <a href="https://github.com/nationwide-trans" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors group">
              <span>GitHub:</span>
              <span className="text-[#2F80FF] font-mono font-bold group-hover:underline inline-flex items-center gap-1">
                /nationwide-trans
                <ExternalLink className="h-3 w-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </DocumentationSection>
  </div>
);

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <title>Contact Us | Nationwide Roadside Assist</title>
      <meta name="description" content="Reach our 24/7 operations command center, enterprise partnerships teams, and technical support representatives." />
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <ContactHero />

      <MountedOnly>
        <SupportStrip />
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <ContactContent />
        </div>
      </MountedOnly>
    </>
  );
}
