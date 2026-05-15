'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Clock, Zap, ShieldCheck } from 'lucide-react';

export default function RateLimitingPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
           <Clock className="h-8 w-8 text-brand-blue" />
           <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Rate Limiting</h1>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl">
          To ensure system stability and fair usage, Nationwide Trans applies rate limits to all API requests. These limits vary based on your account tier and the specific endpoint.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <GlassPanel className="p-8 border-brand-border bg-brand-bg/40 space-y-4">
            <h3 className="text-xl font-bold text-foreground dark:text-white">Standard Limits</h3>
            <div className="space-y-4">
               <div className="flex justify-between items-center border-b border-brand-border pb-3">
                  <span className="text-brand-slate text-sm font-mono">/v1/dispatch</span>
                  <span className="text-foreground dark:text-white font-bold">100 req/min</span>
               </div>
               <div className="flex justify-between items-center border-b border-brand-border pb-3">
                  <span className="text-brand-slate text-sm font-mono">/v1/fleet/*</span>
                  <span className="text-foreground dark:text-white font-bold">500 req/min</span>
               </div>
               <div className="flex justify-between items-center border-b border-brand-border pb-3">
                  <span className="text-brand-slate text-sm font-mono">/v1/vendors/*</span>
                  <span className="text-foreground dark:text-white font-bold">200 req/min</span>
               </div>
               <div className="flex justify-between items-center">
                  <span className="text-brand-slate text-sm font-mono">All other</span>
                  <span className="text-foreground dark:text-white font-bold">1,000 req/min</span>
               </div>
            </div>
         </GlassPanel>

         <div className="space-y-6">
            <h3 className="text-xl font-bold text-foreground dark:text-white">Handling Limits</h3>
            <p className="text-sm text-brand-slate leading-relaxed">
               When you exceed a rate limit, the API will respond with a <code className="text-brand-blue">429 Too Many Requests</code> status code. 
            </p>
            <p className="text-sm text-brand-slate leading-relaxed">
               We include headers in every response to help you track your current usage and reset times:
            </p>
            <div className="p-4 rounded-lg bg-black/40 border border-brand-border font-mono text-xs space-y-2">
               <p className="text-brand-slate"><span className="text-foreground dark:text-white">X-RateLimit-Limit:</span> 100</p>
               <p className="text-brand-slate"><span className="text-foreground dark:text-white">X-RateLimit-Remaining:</span> 42</p>
               <p className="text-brand-slate"><span className="text-foreground dark:text-white">X-RateLimit-Reset:</span> 1715421200</p>
            </div>
         </div>
      </div>

      <section className="p-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/10 flex gap-6">
        <Zap className="h-6 w-6 text-brand-blue shrink-0 mt-1" />
        <div className="space-y-2">
           <h4 className="font-bold text-foreground dark:text-white uppercase tracking-wider text-xs">Burst Allowance</h4>
           <p className="text-sm text-brand-slate leading-relaxed">
             Our rate limiter allows for short bursts of traffic (up to 20% over the limit) to handle sudden spikes in activity. However, sustained usage above the limit will result in throttling.
           </p>
        </div>
      </section>
    </div>
  );
}
