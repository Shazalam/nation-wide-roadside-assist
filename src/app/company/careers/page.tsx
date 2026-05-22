'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MountedOnly } from '@/components/utils/mounted-only';
import {
  Briefcase, Globe, Shield, Activity, ChevronRight, Users,
  MapPin, Zap, ArrowRight, ExternalLink, Heart, Code,
  Cpu, Rocket, GraduationCap, Building2, Clock, Award,
  Coffee, Laptop, Plane, Star
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
const CareersHero = () => (
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
            <span className="text-[#2F80FF]">Careers</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}>
            <Badge className="bg-[#2F80FF]/10 text-[#2F80FF] border-[#2F80FF]/30 px-5 py-2 rounded-full flex items-center gap-2.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse shadow-[0_0_8px_#2F80FF]" />
              <span className="text-[10px] font-black uppercase tracking-[0.25em]">Build Mission-Critical Infrastructure</span>
            </Badge>
          </motion.div>
        </div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="text-4xl lg:text-[4rem] font-black tracking-tighter text-foreground dark:text-white leading-[1.05]">
          Join the Team <br />
          <span className="text-[#2F80FF]">Building the Future of Mobility</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl font-medium">
          Help us engineer mission-critical roadside recovery infrastructure that serves millions of motorists and enterprises nationwide.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full pt-8">
          {[
            { label: 'Remote-First Culture', icon: Laptop },
            { label: 'Engineering Excellence', icon: Code },
            { label: 'Competitive Benefits', icon: Heart },
            { label: 'Growth Trajectory', icon: Rocket }
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

/* ─── Culture Strip ──────────────────────────────────────────────────────── */
const CultureStrip = () => (
  <section className="bg-brand-bg/80 backdrop-blur-md border-b border-brand-border sticky top-16 z-40">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between py-4 overflow-x-auto no-scrollbar gap-12">
        <p className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] whitespace-nowrap hidden lg:block">Why Nationwide Roadside Assist</p>
        <div className="flex items-center gap-10">
          {[
            { label: 'REMOTE-FIRST', icon: Globe },
            { label: 'EQUITY', icon: Award },
            { label: 'UNLIMITED PTO', icon: Plane },
            { label: 'LEARNING BUDGET', icon: GraduationCap },
            { label: 'TEAM EVENTS', icon: Coffee },
            { label: 'TOP TIER HEALTH', icon: Heart }
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
const CareersContent = () => (
  <div className="flex-grow max-w-4xl pb-32">
    <DocumentationSection id="why-Nationwide Roadside Assist" title="Why Nationwide Roadside Assist">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        At Nationwide Roadside Assist, you won&#39;t be building another CRUD app. You&#39;ll be engineering infrastructure that keeps the enterprise mobility economy running — 24/7, coast to coast, in real time. Our platform handles millions of dispatch events, coordinates 18,000+ vendors, and powers roadside recovery for the largest insurers and fleets in North America.
      </p>
      <div className="p-5 bg-brand-blue/5 border border-brand-blue/20 rounded-2xl flex items-start gap-4">
        <Rocket className="h-5 w-5 text-brand-blue mt-0.5 shrink-0" />
        <p className="text-xs font-medium text-brand-slate leading-relaxed">
          <span className="text-foreground dark:text-white font-bold block mb-1">Our Impact:</span>
          Every line of code you write directly affects millions of people stranded on the roadside. We take that responsibility seriously and build software that matches the urgency of the mission.
        </p>
      </div>
    </DocumentationSection>

    <DocumentationSection id="departments" title="Open Departments">
      <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
        We&#39;re hiring across every function. Here are the teams actively looking for talent:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Engineering', desc: 'Full-stack, backend, mobile, infrastructure, and ML/AI roles building real-time dispatch systems.', icon: Code, positions: 12 },
          { label: 'Product & Design', desc: 'Product managers and designers creating enterprise SaaS dashboards and operational tools.', icon: Cpu, positions: 4 },
          { label: 'Operations', desc: 'Dispatch coordinators, fleet managers, and operational analysts running 24/7 recovery operations.', icon: Activity, positions: 8 },
          { label: 'Business & Partnerships', desc: 'Enterprise sales, account management, and partner success for insurance and fleet clients.', icon: Building2, positions: 6 }
        ].map((item, i) => (
          <div key={i} className="p-5 bg-white/[0.02] border border-brand-border rounded-xl space-y-3 group hover:border-[#2F80FF]/30 transition-all">
            <div className="flex items-center justify-between">
              <item.icon className="h-5 w-5 text-[#2F80FF]" />
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{item.positions} open</span>
            </div>
            <h4 className="text-sm font-black text-foreground dark:text-white uppercase tracking-widest">{item.label}</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="positions" title="Featured Positions">
      <div className="space-y-4">
        {[
          { title: 'Senior Backend Engineer — Dispatch Engine', team: 'Engineering', location: 'Remote (US)', type: 'Full-time' },
          { title: 'Staff Frontend Engineer — Enterprise Dashboard', team: 'Engineering', location: 'Remote (US)', type: 'Full-time' },
          { title: 'ML Engineer — Predictive Dispatch', team: 'Engineering / AI', location: 'SF or Remote', type: 'Full-time' },
          { title: 'Product Manager — Fleet Operations', team: 'Product', location: 'Remote (US)', type: 'Full-time' },
          { title: 'Enterprise Account Executive', team: 'Business', location: 'Remote (US)', type: 'Full-time' },
          { title: 'Dispatch Operations Manager', team: 'Operations', location: 'Regional Hub', type: 'Full-time' },
          { title: 'DevOps / SRE — Infrastructure', team: 'Engineering', location: 'Remote (US)', type: 'Full-time' },
          { title: 'UX Designer — Operational Intelligence', team: 'Design', location: 'Remote (US)', type: 'Full-time' },
        ].map((job, i) => (
          <div key={i} className="p-5 bg-white/[0.02] border border-brand-border rounded-xl flex items-center justify-between group hover:border-[#2F80FF]/30 transition-all cursor-pointer">
            <div className="space-y-1">
              <h4 className="text-sm font-black text-foreground dark:text-white group-hover:text-[#2F80FF] transition-colors">{job.title}</h4>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-brand-slate uppercase tracking-widest">{job.team}</span>
                <span className="text-[10px] text-brand-slate">•</span>
                <span className="text-[10px] font-mono text-brand-slate">{job.location}</span>
                <span className="text-[10px] text-brand-slate">•</span>
                <span className="text-[10px] font-mono text-emerald-400">{job.type}</span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-brand-slate group-hover:text-[#2F80FF] group-hover:translate-x-1 transition-all shrink-0" />
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4">
        <button className="bg-white/[0.03] border border-brand-border px-5 py-2.5 rounded-xl text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest hover:border-brand-blue transition-all">View All Positions →</button>
      </div>
    </DocumentationSection>

    <DocumentationSection id="benefits" title="Benefits & Perks">
      <p className="text-brand-slate text-base leading-relaxed font-medium">
        We invest in our team because they build the infrastructure that keeps the country moving:
      </p>
      <ul className="space-y-4">
        {[
          'Competitive salary + equity in a high-growth enterprise infrastructure company.',
          'Fully remote work culture with optional co-working stipend.',
          'Unlimited PTO with a minimum 3-week encouraged baseline.',
          'Premium health, dental, and vision for you and your family.',
          '$5,000 annual learning & development budget for conferences, courses, and certifications.',
          'Home office setup budget ($2,500) for day-one productivity.',
          'Annual team offsites and quarterly virtual team events.',
          '401(k) with company matching.'
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

    <DocumentationSection id="hiring-process" title="Hiring Process">
      <p className="text-brand-slate text-base leading-relaxed font-medium mb-6">
        Our process is designed to be respectful of your time and transparent from start to finish:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: 'Step 1: Application Review', desc: 'We review every application personally. No AI screening — a human reads your resume.' },
          { title: 'Step 2: Intro Call (30 min)', desc: 'A casual conversation about your experience, interests, and what you&#39;re looking for.' },
          { title: 'Step 3: Technical Deep-Dive', desc: 'A practical assessment relevant to the role — no whiteboard algorithms.' },
          { title: 'Step 4: Team Meet & Offer', desc: 'Meet your future teammates, ask questions, and receive a transparent offer within 48 hours.' },
        ].map((item, i) => (
          <div key={i} className="space-y-3">
            <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">{item.title}</h4>
            <p className="text-[11px] text-brand-slate font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </DocumentationSection>

    <DocumentationSection id="contact" title="Recruiting Contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">People Team</h4>
          <div className="space-y-2">
            <p className="text-[11px] font-mono text-brand-blue">careers@nationwidetrans.com</p>
            <p className="text-[11px] font-mono text-brand-blue">talent@nationwidetrans.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-xs font-black text-foreground dark:text-white uppercase tracking-widest">Follow Us</h4>
          <div className="space-y-2">
            <p className="text-[11px] text-brand-slate font-medium">LinkedIn: /company/nationwidetrans</p>
            <p className="text-[11px] text-brand-slate font-medium">GitHub: /nationwide-trans</p>
          </div>
        </div>
      </div>
    </DocumentationSection>
  </div>
);

/* ─── CTA ────────────────────────────────────────────────────────────────── */
const CareersCTA = () => (
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
            <span className="text-[11px] font-black text-[#2F80FF] uppercase tracking-[0.4em]">Ready to Build?</span>
            <div className="h-[1px] w-8 bg-[#2F80FF]" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-foreground dark:text-white tracking-tighter leading-[1.05]">
            Your Code Keeps <br />
            <span className="text-[#2F80FF]">Millions Moving</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-lg lg:text-xl text-brand-slate leading-relaxed max-w-3xl mx-auto font-medium">
            Join us and build the infrastructure that powers enterprise mobility recovery across the entire United States.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-4">
            <Button size="lg" className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-foreground dark:text-white font-black h-16 px-10 rounded-2xl shadow-[0_20px_40px_rgba(47,128,255,0.2)] transition-all hover:-translate-y-1">
              View Open Positions <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-border text-foreground dark:text-white hover:bg-white/5 h-16 px-10 rounded-2xl font-bold backdrop-blur-sm group">
              Company Overview <ExternalLink className="ml-3 h-5 w-5 text-brand-slate group-hover:text-brand-blue transition-colors" />
            </Button>
          </motion.div>
        </div>
      </GlassPanel>
    </div>
    <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-blue/5 blur-[150px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
  </section>
);

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function CareersPage() {
  return (
    <>
      <div className="fixed inset-0 z-0 opacity-[0.015] dark:opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-slate) 1px, transparent 0)`, backgroundSize: '48px 48px' }} />

      <CareersHero />

      <MountedOnly>
        <CultureStrip />
        <div className="max-w-4xl mx-auto px-6 py-20 relative">
          <CareersContent />
        </div>
      </MountedOnly>

      <CareersCTA />
    </>
  );
}
