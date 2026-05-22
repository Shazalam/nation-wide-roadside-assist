'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MountedOnly } from '@/components/utils/mounted-only';
import {
  Building2, Globe, Shield, Activity, ChevronRight, Truck,
  Users, MapPin, Zap, BarChart3, ArrowRight, ExternalLink,
  Target, Cpu, Award, Lock, Network, Clock
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

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_8px_#2F80FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Enterprise Mobility Infrastructure</span>
            </Badge>
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
            { label: '18,000+ Vendors', icon: Users },
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

/* ─── Info Strip ─────────────────────────────────────────────────────────── */
const InfoStrip = () => (
  <section className="bg-brand-bg/80 backdrop-blur-md border-b border-brand-border sticky top-16 z-40">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-12">
        <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] whitespace-nowrap hidden lg:block">Infrastructure Metrics</p>
        <div className="flex items-center gap-10">
          {[
            { label: '99.1% UPTIME', icon: Activity },
            { label: '3.2M+ EVENTS', icon: Zap },
            { label: '2 REGIONS', icon: MapPin },
            { label: '24/7 OPS', icon: Clock },
            { label: 'SOC 2 CERTIFIED', icon: Shield },
            { label: 'API-FIRST', icon: Cpu }
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
const OverviewContent = () => (
  <div className="flex-grow max-w-4xl pb-32">
    <DocumentationSection id="mission" title="Mission & Vision">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        Nationwide Roadside Assist (Nationwide Roadside Assist) operates mission-critical recovery and dispatch infrastructure for the enterprise mobility economy. We serve as the operational backbone for insurers, commercial fleets, OEM mobility programs, and logistics operators across USA and Canada.
      </p>
      <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
        <Target className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
        <p className="text-xs font-medium text-brand-slate leading-relaxed">
          <span className="text-foreground dark:text-white font-bold block mb-1">Enterprise Mission:</span>
          To provide the most reliable, intelligent, and scalable roadside recovery infrastructure in North America — engineered for enterprise mobility ecosystems that demand zero-downtime operations and SLA-driven service delivery.
        </p>
      </div>
    </DocumentationSection>

    <DocumentationSection id="infrastructure" title="Enterprise Infrastructure">
      <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
        Our infrastructure supports 3.2M+ annual recovery events across a nationwide vendor ecosystem:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: '24/7 Dispatch Operations', desc: 'Multi-region command centers with live telemetry, AI-assisted dispatch, and real-time SLA monitoring.', icon: Activity },
          { label: 'Vendor Network Intelligence', desc: '18,000+ certified vendors across USA and Canada with real-time capacity tracking and performance scoring.', icon: Network },
          { label: 'Fleet Telematics Integration', desc: 'API-first connectivity with OBD-II, CAN bus, and OEM telematics for proactive breakdown detection.', icon: Cpu },
          { label: 'Enterprise Security', desc: 'SOC 2 Type II certified infrastructure with end-to-end encryption and zero-trust architecture.', icon: Lock }
        ].map((item, i) => (
          <div key={i} className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3 group hover:border-[#2F80FF]/30 transition-all">
            <item.icon className="h-5 w-5 text-[#2F80FF]" />
            <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="capabilities" title="Core Capabilities">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
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
            <span className="text-sm text-brand-slate font-medium">{text}</span>
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
            <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">{item.title}</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="technology" title="Technology Platform">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        Our technology stack is purpose-built for enterprise-scale operations with real-time performance requirements:
      </p>
      <div className="bg-brand-navy border border-brand-border rounded-2xl overflow-hidden">
        <div className="px-6 py-4 bg-white/[0.03] border-b border-brand-border">
          <span className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Platform Architecture</span>
        </div>
        <div className="p-6">
          <pre className="font-mono text-[11px] text-[#2F80FF]/80 leading-relaxed">
{`{
  "dispatch_engine": "Real-time AI-assisted routing",
  "telematics": "OBD-II / CAN bus / OEM APIs",
  "infrastructure": "Multi-region, Active-Active",
  "uptime_sla": "99.95% guaranteed",
  "api_protocol": "REST + GraphQL + WebSocket",
  "security": "SOC 2 Type II + Zero Trust",
  "data_processing": "3.2M+ events/year",
  "vendor_network": "18,000+ nationwide"
}`}
          </pre>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="operations" title="Nationwide Operations">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Headquarters</h4>
          <p className="text-[11px] text-brand-slate font-medium leading-relaxed">
            Nationwide Roadside Assist<br />
            1200 Enterprise Way<br />
            San Francisco, CA 94105
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Operational Reach</h4>
          <div className="space-y-2">
            <p className="text-[11px] text-brand-slate font-medium">USA and Canada coverage with regional command centers</p>
            <p className="text-[11px] text-brand-slate font-medium">Multi-region dispatch hubs (East, West, Central)</p>
            <p className="text-[11px] text-brand-slate font-medium">24/7/365 operational availability</p>
          </div>
        </div>
      </div>
    </DocumentationSection>

    <DocumentationSection id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Enterprise Sales</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">enterprise@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">1-800-Nationwide Roadside Assist-FLEET</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">General Inquiries</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">info@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">press@nationwidetrans.com</p>
          </div>
        </div>
      </div>
    </DocumentationSection>
  </div>
);

/* ─── CTA ────────────────────────────────────────────────────────────────── */
const CompanyCTA = () => (
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
            <span className="text-[11px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Partner With Us</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05]">
            Enterprise-Grade Infrastructure for <br />
            <span className="text-[#2F80FF]">Mission-Critical Mobility Operations</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium">
            Connect with our enterprise team to explore partnership opportunities, custom integrations, and dedicated operational support.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-4">
            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.2)] transition-all hover:-translate-y-1">
              Schedule Enterprise Demo <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl font-bold backdrop-blur-sm group">
              View Careers <ExternalLink className="ml-3 h-5 w-5 text-brand-slate group-hover:text-brand-blue transition-colors" />
            </Button>
          </motion.div>
        </div>
      </GlassPanel>
    </div>
    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
  </section>
);

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function CompanyOverviewPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <OverviewHero />

      <MountedOnly>
        <InfoStrip />
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <OverviewContent />
        </div>
      </MountedOnly>

      <CompanyCTA />
    </>
  );
}
