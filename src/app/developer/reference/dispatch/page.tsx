'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Zap, MapPin, Truck, History, AlertCircle } from 'lucide-react';

export default function DispatchAPIPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
           <Zap className="h-8 w-8 text-brand-blue" />
           <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Dispatch API</h1>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl">
          The Dispatch API is the heart of the Nationwide Trans platform. It allows you to programmatically request roadside assistance, track service nodes in real-time, and manage the lifecycle of an incident.
        </p>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
           <h2 className="text-2xl font-bold text-foreground dark:text-white">Lifecycle of a Dispatch</h2>
           <span className="text-[10px] font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 rounded border border-brand-blue/20 uppercase tracking-widest">Core Concept</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
           {/* Connecting Line (Dashed) */}
           <div className="absolute top-1/2 left-0 w-full h-[1px] border-t border-dashed border-brand-border hidden md:block -z-10" />
           
           {[
             { step: '1', label: 'INITIALIZED', icon: Zap, desc: 'Request received by mesh' },
             { step: '2', label: 'MATCHING', icon: Truck, desc: 'Automated vendor bidding' },
             { step: '3', label: 'EN ROUTE', icon: MapPin, desc: 'Vendor GPS lock confirmed' },
             { step: '4', label: 'COMPLETED', icon: History, desc: 'Service proof uploaded' },
           ].map((item) => (
             <GlassPanel key={item.step} className="p-6 text-center border-brand-border bg-brand-bg/60">
                <div className="h-10 w-10 rounded-full bg-brand-blue/20 border border-brand-blue/30 flex items-center justify-center mx-auto mb-4 text-brand-blue font-bold">
                   <item.icon className="h-5 w-5" />
                </div>
                <h4 className="text-[10px] font-black text-foreground dark:text-white uppercase tracking-widest mb-1">{item.label}</h4>
                <p className="text-[11px] text-brand-slate">{item.desc}</p>
             </GlassPanel>
           ))}
        </div>
      </section>

      <div className="h-px w-full bg-white/5" />

      {/* POST /dispatch */}
      <section className="space-y-6">
        <div className="space-y-2">
           <h3 className="text-xl font-bold text-foreground dark:text-white">Create a New Dispatch</h3>
           <p className="text-brand-slate">Initiates a service request for a vehicle in distress.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           <div className="lg:col-span-7">
              <APIBlock 
                method="POST"
                endpoint="/v1/dispatch"
                code={`{
  "type": "tire_change",
  "priority": "emergency",
  "location": {
    "lat": 34.0522,
    "lng": -118.2437,
    "address": "I-10 East, Los Angeles, CA"
  },
  "vehicle": {
    "make": "Tesla",
    "model": "Model 3",
    "color": "Midnight Silver",
    "license_plate": "ABC-1234"
  },
  "customer": {
    "name": "Jane Doe",
    "phone": "+1555019922"
  }
}`}
              />
           </div>
           <div className="lg:col-span-5">
              <GlassPanel className="p-6 border-brand-border bg-brand-navy/40 h-full">
                 <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-widest mb-4">Field Specifications</h4>
                 <div className="space-y-4">
                    <div className="flex justify-between items-start border-b border-brand-border pb-3">
                       <div>
                          <p className="text-xs font-mono text-foreground dark:text-white">type</p>
                          <p className="text-[10px] text-brand-slate">Enum: towing, jump_start, tire_change, fuel, lockout</p>
                       </div>
                       <span className="text-[8px] font-bold text-rose-400 bg-rose-400/10 px-1 rounded border border-rose-400/20">REQ</span>
                    </div>
                    <div className="flex justify-between items-start border-b border-brand-border pb-3">
                       <div>
                          <p className="text-xs font-mono text-foreground dark:text-white">priority</p>
                          <p className="text-[10px] text-brand-slate">Enum: normal, high, emergency</p>
                       </div>
                       <span className="text-[8px] font-bold text-rose-400 bg-rose-400/10 px-1 rounded border border-rose-400/20">REQ</span>
                    </div>
                    <div className="flex justify-between items-start">
                       <div>
                          <p className="text-xs font-mono text-foreground dark:text-white">metadata</p>
                          <p className="text-[10px] text-brand-slate">Object: Max 20 key-value pairs</p>
                       </div>
                       <span className="text-[8px] font-bold text-brand-slate bg-white/5 px-1 rounded border border-brand-border">OPT</span>
                    </div>
                 </div>
              </GlassPanel>
           </div>
        </div>
      </section>

      {/* Error handling note */}
      <section className="p-8 rounded-2xl bg-rose-500/5 border border-rose-500/10 flex gap-6">
        <AlertCircle className="h-6 w-6 text-rose-500 shrink-0 mt-1" />
        <div className="space-y-2">
           <h4 className="font-bold text-foreground dark:text-white uppercase tracking-wider text-xs">High-Priority Dispatch Policy</h4>
           <p className="text-sm text-brand-slate leading-relaxed">
             Requests marked as `emergency` bypass the standard vendor bidding process and are immediately routed to the closest high-performance node. These requests carry a 25% premium on base rates and require a valid `safety_status` flag in the payload.
           </p>
        </div>
      </section>
    </div>
  );
}
