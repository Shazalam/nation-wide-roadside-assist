'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { MountedOnly } from '@/components/utils/mounted-only';
import {
  Building2, Globe, Shield, Activity, ChevronRight, Truck,
  Users, MapPin, Zap, BarChart3, ArrowRight, ExternalLink,
  Target, Cpu, Award, Lock, Network, Clock, Mail
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
const OverviewHero = () => (
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
            <span className="text-[#2F80FF]">Overview</span>
          </motion.div>

        </div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]">
          Nationwide Roadside Assist <br />
          <span className="text-[#2F80FF]">Company Overview</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl font-medium">
          Mission-critical recovery infrastructure for the enterprise mobility economy. Operating 24/7 nationwide dispatch, vendor coordination, and fleet intelligence platforms.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
          {[
            { label: 'USA & Canada Coverage', icon: Globe },
            { label: '24/7 Operations', icon: Activity },
            { label: '3,000+ Vendors', icon: Users },
            { label: 'Enterprise SLA', icon: Shield }
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

/* ─── Main Content ───────────────────────────────────────────────────────── */
const OverviewContent = () => (
  <div className="flex-grow max-w-4xl pb-32">
    <DocumentationSection id="mission" title="Mission & Vision">
      <p className="text-brand-slate text-lg leading-relaxed font-medium">
        Nationwide Roadside Assist (Nationwide Roadside Assist) operates mission-critical recovery and dispatch infrastructure for the enterprise mobility economy. We serve as the operational backbone for insurers, commercial fleets, OEM mobility programs, and logistics operators across USA and Canada.
      </p>
      <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
        <Target className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
        <div className="text-sm font-medium text-brand-slate leading-relaxed">
          <span className="text-foreground dark:text-white font-bold block mb-1 text-base">Enterprise Mission:</span>
          To provide the most reliable, intelligent, and scalable roadside recovery infrastructure in North America — engineered for enterprise mobility ecosystems that demand zero-downtime operations and SLA-driven service delivery.
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="infrastructure" title="Enterprise Infrastructure">
      <p className="text-brand-slate text-lg leading-relaxed font-medium mb-6">
        Our infrastructure powers seamless recovery operations through a vast nationwide vendor ecosystem —
        connecting highways, fleets, and emergency response networks with speed, precision, and unwavering reliability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: '24/7 Dispatch Operations', desc: 'Multi-region command centers with live telemetry, AI-assisted dispatch, and real-time SLA monitoring.', icon: Activity },
          { label: 'Vendor Network Intelligence', desc: '18,000+ certified vendors across USA and Canada with real-time capacity tracking and performance scoring.', icon: Network },
          { label: 'Fleet Telematics Integration', desc: 'API-first connectivity with OBD-II, CAN bus, and OEM telematics for proactive breakdown detection.', icon: Cpu },
          { label: 'Enterprise Security', desc: 'Enterprise-Grade Security certified infrastructure with end-to-end encryption and zero-trust architecture.', icon: Lock }
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white/[0.02] border border-brand-border rounded-xl space-y-3 group hover:border-[#2F80FF]/30 transition-all">
            <item.icon className="h-5 w-5 text-[#2F80FF]" />
            <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</h4>
            <p className="text-sm text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="capabilities" title="Core Capabilities">
      <p className="text-brand-slate text-lg leading-relaxed font-medium">
        We deliver end-to-end operational coverage for every type of roadside and recovery event:
      </p>
      <ul className="space-y-4">
        {[
          'Light-duty, medium-duty, and heavy-duty towing and recovery operations.',
          'Emergency roadside services: jump-start, tire change, fuel delivery, lockout assistance.',
          'Commercial fleet support with dedicated SLA management and priority dispatch.',
          'Insurance claim intake, automated triage, and real-time status reporting.',
          'Accident management including scene coordination and law enforcement liaison.',
          'RV, camper, and specialty vehicle recovery with specialized equipment dispatch.'
        ].map((text, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/30 flex items-center justify-center shrink-0 mt-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF]" />
            </div>
            <span className="text-base text-brand-slate font-medium">{text}</span>
          </li>
        ))}
      </ul>
    </DocumentationSection>

    <DocumentationSection id="industries" title="Industries Served">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Insurance Carriers', desc: 'White-label roadside programs with automated claims integration and policyholder experience management.' },
          { title: 'Commercial Fleets', desc: 'Priority dispatch, dedicated account management, and proactive maintenance intelligence for fleet operators.' },
          { title: 'OEM Mobility', desc: 'Connected vehicle integrations, EV-specific recovery protocols, and manufacturer roadside warranty programs.' },
          { title: 'Logistics & Transportation', desc: 'Time-critical recovery for supply chain operations with load transfer coordination and cargo management.' },
          { title: 'Rental & Leasing', desc: 'Automated vehicle retrieval, renter assistance, and asset protection protocols for rental fleets.' },
          { title: 'Government & Municipal', desc: 'Emergency management support, police-authorized towing, and municipal contract operations.' }
        ].map((item, i) => (
          <div key={i} className="space-y-3">
            <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">{item.title}</h4>
            <p className="text-sm text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="operations" title="Nationwide Operations">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
  <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">
    Headquarters
  </h4>

  <a
    href="https://maps.google.com/?q=11727+East+End+Avenue+Chino+CA+91710"
    target="_blank"
    rel="noopener noreferrer"
    className="block text-sm text-brand-slate font-medium leading-relaxed hover:text-brand-blue transition-all duration-300 hover:translate-x-1"
  >
    Nationwide Roadside Assist
    <br />
    11727 East End Avenue
    <br />
    Chino, CA 91710
  </a>
</div>
        <div className="space-y-4">
          <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">Operational Reach</h4>
          <div className="space-y-2">
            <p className="text-sm text-brand-slate font-medium">Seamless coast-to-coast coverage across the United States and Canada, driven by a unified dispatch ecosystem engineered for speed, coordination, and uninterrupted mobility.</p>
            <p className="text-sm text-brand-slate font-medium">24/7 operational vigilance, delivering unwavering roadside support with speed, precision, and relentless reliability.</p>
          </div>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="leadership" title="Operational Leadership">
      <div className="flex flex-col gap-8">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-3xl font-black text-foreground dark:text-white tracking-tight">Kong Lee</h3>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2F80FF]/10 border border-[#2F80FF]/20 rounded-full">
              <Award className="h-4 w-4 text-[#2F80FF]" />
              <span className="text-[11px] font-bold text-[#2F80FF] uppercase tracking-widest">18+ Years in Transportation & Logistics</span>
            </div>
          </div>
          <div className="space-y-4 text-brand-slate text-base leading-relaxed font-medium max-w-3xl">
            <p>
              Kong Lee is a transportation and logistics industry leader with over 18 years of operational experience across freight transportation, fleet operations, dispatch coordination, and enterprise mobility infrastructure.
            </p>
            <p>
              Through Nationwide Trans Inc. and Nationwide Roadside Assist, he has developed a vertically integrated operational ecosystem focused on transportation continuity, roadside response coordination, and enterprise dispatch infrastructure throughout North America.
            </p>
            <p>
              Nationwide Roadside Assist currently supports transportation, logistics, roadside dispatch, and mobility coordination operations throughout the United States and Canada.
            </p>
          </div>
        </div>

        <div className="p-6 bg-white/[0.02] border border-brand-border rounded-xl space-y-4 group hover:border-[#2F80FF]/30 transition-all max-w-2xl">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#2F80FF]/15 transition-colors">
              <Building2 className="h-6 w-6 text-[#2F80FF]" />
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-0.5">Sister Company</h4>
              <div className="text-xl font-black text-foreground dark:text-white uppercase tracking-tight">Nationwide Trans Inc.</div>
            </div>
          </div>
          <p className="text-sm text-brand-slate font-medium leading-relaxed">
            Asset-based transportation and logistics operations supporting freight movement, dispatch coordination, and commercial mobility infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-5 border-t border-brand-border/50">
            <a
              href="https://www.nationwide-trans.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13px] font-bold text-brand-slate hover:text-[#2F80FF] transition-colors"
            >
              <Globe className="h-4 w-4" />
              nationwide-trans.com
            </a>
            <a
              href="mailto:kongl@nationwidetransinc.com"
              className="flex items-center gap-2.5 text-[13px] font-bold text-brand-slate hover:text-[#2F80FF] transition-colors"
            >
              <Mail className="h-4 w-4" />
              kongl@nationwidetransinc.com
            </a>
          </div>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">STRATEGIC PARTNERSHIPS</h4>
          <div className="space-y-2">
  <a
    href="mailto:partnerships@nationwideroadsideassist.com"
    className="block text-sm font-mono text-brand-blue hover:text-white transition-colors"
  >
    partnerships@nationwideroadsideassist.com
  </a>

  <a
    href="tel:+18556133131"
    className="block text-sm font-mono text-brand-blue hover:text-white transition-colors"
  >
    +1 (855) 613-3131
  </a>
</div>
        </div>
        <div className="space-y-4">
  <h4 className="text-base font-black text-foreground dark:text-white uppercase tracking-widest">
    General Inquiries
  </h4>

  <div className="space-y-3">

    {/* Email */}
    <a
      href="mailto:jaydensmith@nationwideroadsideassist.com"
      className="block text-sm font-mono text-brand-blue hover:text-white transition-all duration-300 hover:translate-x-1"
    >
      jaydensmith@nationwideroadsideassist.com
    </a>

    {/* Phone */}
    <a
      href="tel:+18556133131"
      className="block text-sm font-mono text-brand-blue hover:text-white transition-all duration-300 hover:translate-x-1"
    >
      +1 (855) 613-3131
    </a>

  </div>
</div>
      </div>
    </DocumentationSection>
  </div>
);

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function CompanyOverviewPage() {
  return (
    <>
      <title>Company Overview | Nationwide Roadside Assist</title>
      <meta name="description" content="Learn about Nationwide Roadside Assist's mission-critical recovery and dispatch infrastructure designed for the enterprise mobility economy." />
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <OverviewHero />

      <MountedOnly>
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <OverviewContent />
        </div>
      </MountedOnly>
    </>
  );
}
