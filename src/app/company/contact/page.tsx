'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
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
            className="flex items-center gap-2 text-xs font-medium text-brand-slate uppercase tracking-widest">
            <span className="hover:text-foreground dark:text-white transition-colors cursor-pointer">Company</span>
            <ChevronRight className="h-3 w-3 text-[#2F80FF]" />
            <span className="text-[#2F80FF]">Contact</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_8px_#2F80FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">24/7 Enterprise Support Channels</span>
            </Badge>
          </motion.div>
        </div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]">
          Enterprise <br />
          <span className="text-[#2F80FF]">Contact & Support</span>
          <br />Infrastructure
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl font-medium">
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
              className="bg-card/40 backdrop-blur-xl border border-brand-border rounded-2xl p-4 flex flex-col items-center gap-3 group hover:border-[#2F80FF]/40 transition-all duration-500">
              <m.icon className="h-5 w-5 text-[#2F80FF] group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest text-center leading-tight">{m.label}</p>
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
        <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] whitespace-nowrap hidden lg:block">Support Channels</p>
        <div className="flex items-center gap-10">
          {[
            { label: 'PHONE', icon: Phone },
            { label: 'EMAIL', icon: Mail },
            { label: 'LIVE CHAT', icon: MessageSquare },
            { label: 'API DOCS', icon: FileText },
            { label: 'STATUS PAGE', icon: Activity },
            { label: 'OFFICES', icon: MapPin }
          ].map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 group transition-all">
              <c.icon className="h-4 w-4 text-[#2F80FF] group-hover:scale-110 transition-transform opacity-60 group-hover:opacity-100" />
              <span className="text-[10px] font-black text-brand-slate group-hover:text-foreground dark:text-white transition-colors tracking-widest whitespace-nowrap">{c.label}</span>
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
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        For active roadside emergencies and priority dispatch requests, contact our 24/7 operations center directly:
      </p>
      <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
        <AlertCircle className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
        <div className="text-xs font-medium text-brand-slate leading-relaxed">
          <span className="text-foreground dark:text-white font-bold block mb-2">24/7 Emergency Dispatch Line:</span>
          <p className="text-lg font-mono text-brand-blue font-black mb-2">1-800-Nationwide Roadside Assist-HELP (1-800-684-4357)</p>
          <p>This line is monitored 24/7/365 by our dispatch operations team. Average response time: under 60 seconds.</p>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="enterprise" title="Enterprise Sales & Partnerships">
      <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
        Connect with our enterprise team for partnership discussions, custom integrations, and fleet program onboarding:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Enterprise Sales', desc: 'Custom program design, pricing, and integration planning for insurers, fleets, and OEMs.', icon: Building2, contact: 'enterprise@nationwidetrans.com' },
          { label: 'Partner Success', desc: 'Dedicated account management, SLA monitoring, and operational support for active partners.', icon: Users, contact: 'partners@nationwidetrans.com' },
          { label: 'Developer Relations', desc: 'API access, sandbox environments, technical documentation, and integration support.', icon: Zap, contact: 'developers@nationwidetrans.com' },
          { label: 'Vendor Onboarding', desc: 'Join our nationwide vendor network — qualification, certification, and dispatch enrollment.', icon: MapPin, contact: 'vendors@nationwidetrans.com' }
        ].map((item, i) => (
          <div key={i} className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3 group hover:border-[#2F80FF]/30 transition-all">
            <item.icon className="h-5 w-5 text-[#2F80FF]" />
            <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
            <p className="text-[11px] font-mono text-brand-blue">{item.contact}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="support" title="Technical Support">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        Our technical support team provides multi-tier assistance for all enterprise clients:
      </p>
      <ul className="space-y-4">
        {[
          'Tier 1: Live chat and email support — average response time under 5 minutes.',
          'Tier 2: Dedicated technical account managers for enterprise partners with SLA guarantees.',
          'Tier 3: Engineering escalation for API integration issues and platform-level incidents.',
          'Developer Portal: Self-service documentation, API reference, and sandbox environments at docs.nationwidetrans.com.',
          'Status Page: Real-time infrastructure health monitoring at status.nationwidetrans.com.'
        ].map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/30 flex items-center justify-center shrink-0 mt-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
            </div>
            <span className="text-sm text-brand-slate font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </DocumentationSection>

    <DocumentationSection id="offices" title="Office Locations">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Headquarters</h4>
          <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
            Nationwide Roadside Assist<br />
            1200 Enterprise Way<br />
            San Francisco, CA 94105<br />
            United States
          </p>
          <p className="text-[11px] font-mono text-brand-blue">+1 (415) 555-0100</p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Regional Operations</h4>
          <div className="space-y-3">
            <div>
              <p className="text-[11px] text-foreground dark:text-white font-bold">East Coast Hub</p>
              <p className="text-[11px] text-brand-slate font-medium">Atlanta, GA</p>
            </div>
            <div>
              <p className="text-[11px] text-foreground dark:text-white font-bold">Central Hub</p>
              <p className="text-[11px] text-brand-slate font-medium">Dallas, TX</p>
            </div>
            <div>
              <p className="text-[11px] text-foreground dark:text-white font-bold">West Coast Hub</p>
              <p className="text-[11px] text-brand-slate font-medium">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="hours" title="Support Hours">
      <div className="bg-brand-navy border border-brand-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 bg-white/[0.03] border-b border-brand-border">
          <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Operational Availability</span>
        </div>
        <div className="p-6">
          <pre className="font-mono text-[11px] text-[#2F80FF]/80 leading-relaxed">
{`{
  "emergency_dispatch":  "24/7/365",
  "enterprise_support":  "24/7/365 (SLA clients)",
  "general_support":     "Mon-Fri 6AM-10PM ET",
  "sales_inquiries":     "Mon-Fri 8AM-6PM ET",
  "developer_support":   "Mon-Fri 9AM-6PM ET",
  "vendor_onboarding":   "Mon-Fri 8AM-5PM ET",
  "holiday_coverage":    "Emergency dispatch only"
}`}
          </pre>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="departments" title="Department Directory">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">General</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">info@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">press@nationwidetrans.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Legal & Compliance</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">legal@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">privacy@nationwidetrans.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Careers</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">careers@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">talent@nationwidetrans.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Billing & Accounts</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">billing@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">accounts@nationwidetrans.com</p>
          </div>
        </div>
      </div>
    </DocumentationSection>
  </div>
);

/* ─── CTA ────────────────────────────────────────────────────────────────── */
const ContactCTA = () => (
  <section className="py-24 relative overflow-hidden bg-brand-bg border-t border-brand-border">
    <div className="absolute -left-[10%] bottom-0 w-[600px] h-[600px] pointer-events-none opacity-20">
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 120, repeat: Infinity, ease: "linear" }} className="w-full h-full text-[#2F80FF]">
        <Globe className="w-full h-full" strokeWidth={0.5} />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-bg" />
      <div className="absolute inset-0 bg-brand-blue/10 blur-[100px] rounded-full" />
    </div>

    <div className="container mx-auto px-6 lg:px-12 relative z-10">
      <GlassPanel className="p-12 lg:p-20 border-brand-border bg-card/40 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2F80FF]/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms] ease-in-out" />
        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
            <span className="text-[11px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Connect With Us</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05]">
            Enterprise-Grade Support for <br />
            <span className="text-[#2F80FF]">Mission-Critical Operations</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium">
            Whether you need emergency dispatch, enterprise integration support, or want to explore partnership opportunities — we&#39;re here 24/7.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-4">
            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.2)] transition-all hover:-translate-y-1">
              Contact Enterprise Sales <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl font-bold backdrop-blur-sm group">
              View Company Overview <ExternalLink className="ml-3 h-5 w-5 text-brand-slate group-hover:text-brand-blue transition-colors" />
            </Button>
          </motion.div>
        </div>
      </GlassPanel>
    </div>
    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
  </section>
);

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function ContactPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <ContactHero />

      <MountedOnly>
        <SupportStrip />
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <ContactContent />
        </div>
      </MountedOnly>

      <ContactCTA />
    </>
  );
}
