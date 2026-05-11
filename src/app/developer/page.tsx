'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Terminal, Code, Zap, ShieldCheck, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DeveloperOverviewPage() {
  return (
    <div className="space-y-16">
      {/* Intro Header */}
      <section className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20">
          <Zap className="h-4 w-4 text-brand-blue" />
          <span className="text-[10px] font-bold text-brand-blue uppercase tracking-widest">Global Mesh API v4.2.0</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
          Integrate the world's most advanced <span className="text-brand-blue">Mobility Mesh</span>.
        </h2>
        <p className="text-brand-slate text-xl leading-relaxed max-w-3xl">
          Build high-performance roadside and fleet operations with our API-first infrastructure. From automated dispatch to real-time telemetry, Nationwide Trans provides the tools you need to scale.
        </p>
        <div className="flex gap-4 pt-4">
           <Link href="/developer/auth">
             <Button className="bg-brand-blue text-white font-bold h-12 px-8 uppercase tracking-widest shadow-[0_0_20px_rgba(47,128,255,0.4)]">
               Get Started
             </Button>
           </Link>
           <Button variant="outline" className="border-white/10 text-white h-12 px-8 uppercase tracking-widest">
             Join Sandbox
           </Button>
        </div>
      </section>

      <div className="h-px w-full bg-white/5" />

      {/* Quickstart Code */}
      <section className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
           <div className="space-y-1">
              <h3 className="text-2xl font-bold text-white">Initialize a Dispatch Request</h3>
              <p className="text-sm text-brand-slate">Send a POST request to coordinate an immediate service node.</p>
           </div>
           <div className="flex gap-2">
              <span className="text-[10px] font-bold text-brand-slate bg-white/5 px-2 py-1 rounded uppercase tracking-widest">cURL</span>
              <span className="text-[10px] font-bold text-brand-slate bg-white/5 px-2 py-1 rounded uppercase tracking-widest">Node.js</span>
              <span className="text-[10px] font-bold text-brand-slate bg-white/5 px-2 py-1 rounded uppercase tracking-widest">Python</span>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-7">
              <APIBlock 
                method="POST"
                endpoint="/v1/dispatch"
                code={`curl https://api.nationwidetrans.com/v1/dispatch \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "type": "towing_truck",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    },
    "priority": "high"
  }'`}
              />
           </div>
           <div className="lg:col-span-5 space-y-6">
              <GlassPanel className="p-8 bg-brand-navy/60 border-white/5 h-full">
                 <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-6">Key Capabilities</h4>
                 <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                       <ShieldCheck className="h-5 w-5 text-brand-blue shrink-0" />
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-white">Auth Mesh Integrated</p>
                          <p className="text-xs text-brand-slate">OAuth 2.0 with scopes for Fleet, Claims, and Ops.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <Zap className="h-5 w-5 text-brand-blue shrink-0" />
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-white">Sub-100ms Latency</p>
                          <p className="text-xs text-brand-slate">Global edge nodes for instantaneous coordination.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-4">
                       <BookOpen className="h-5 w-5 text-brand-blue shrink-0" />
                       <div className="space-y-1">
                          <p className="text-sm font-bold text-white">Rich Error Diagnostics</p>
                          <p className="text-xs text-brand-slate">Detailed status codes for edge-case recovery.</p>
                       </div>
                    </li>
                 </ul>
              </GlassPanel>
           </div>
        </div>
      </section>

      {/* API Analytics Teaser */}
      <section className="p-10 rounded-[2.5rem] bg-gradient-to-br from-brand-blue/10 to-brand-navy border border-white/5 relative overflow-hidden">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4">
               <h3 className="text-2xl font-bold text-white">Operational Analytics Built-In</h3>
               <p className="text-brand-slate text-sm max-w-xl">
                 Track your integration health, latency, and throughput in real-time through the Developer Console.
               </p>
               <Button className="bg-brand-blue/10 border border-brand-blue/30 text-brand-blue font-bold uppercase tracking-widest text-[10px] h-10 px-6">
                 View Dashboards <ArrowRight className="ml-2 h-3 w-3" />
               </Button>
            </div>
            <div className="flex gap-12 text-center">
               <div className="space-y-1">
                  <p className="text-3xl font-black text-white">4.2M</p>
                  <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Requests/Month</p>
               </div>
               <div className="space-y-1">
                  <p className="text-3xl font-black text-emerald-500">99.9%</p>
                  <p className="text-[10px] font-bold text-brand-slate uppercase tracking-widest">Uptime SLA</p>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
