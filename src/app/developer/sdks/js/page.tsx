'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Code, Package, Zap, Copy, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function JavascriptSDKPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-4">
           <div className="p-3 rounded-xl bg-yellow-400/10 border border-yellow-400/20">
              <Code className="h-8 w-8 text-yellow-400" />
           </div>
           <div>
              <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">JavaScript SDK</h1>
              <p className="text-brand-slate text-sm">Official client for Node.js and Browser environments.</p>
           </div>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl pt-4">
          The Nationwide Roadside Assist JS SDK is the fastest way to integrate roadside intelligence into your application. It provides type-safe methods for all API endpoints, automatic retries, and real-time event listeners.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <GlassPanel className="p-6 border-brand-border flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4">
               <Package className="h-6 w-6 text-brand-blue" />
               <div>
                  <p className="text-foreground dark:text-white font-bold">npm install @nw-trans/sdk</p>
                  <p className="text-xs text-brand-slate">Latest: v4.2.0</p>
               </div>
            </div>
            <Copy className="h-4 w-4 text-brand-slate group-hover:text-foreground dark:text-white" />
         </GlassPanel>
         <GlassPanel className="p-6 border-brand-border flex items-center justify-between group cursor-pointer hover:bg-white/[0.02] transition-colors">
            <div className="flex items-center gap-4">
               <Download className="h-6 w-6 text-emerald-400" />
               <div>
                  <p className="text-foreground dark:text-white font-bold">Download Source</p>
                  <p className="text-xs text-brand-slate">ZIP / TAR.GZ</p>
               </div>
            </div>
            <Download className="h-4 w-4 text-brand-slate group-hover:text-foreground dark:text-white" />
         </GlassPanel>
      </div>

      <div className="h-px w-full bg-white/5" />

      {/* Usage Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-foreground dark:text-white">Initialization</h2>
        <p className="text-brand-slate">Initialize the client with your API key or OAuth credentials.</p>
        
        <APIBlock 
          method="POST"
          endpoint="Initialize Client"
          code={`import { NWTransClient } from '@nw-trans/sdk';

const client = new NWTransClient({
  apiKey: process.env.NW_API_KEY,
  environment: 'production', // or 'sandbox'
  timeout: 5000
});`}
        />
      </section>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-foreground dark:text-white">Example: Requesting a Tow</h2>
        <p className="text-brand-slate">Create a dispatch request with a simple method call. The SDK handles JSON serialization and headers for you.</p>
        
        <APIBlock 
          method="POST"
          endpoint="Create Dispatch"
          code={`async function requestEmergencyTow() {
  try {
    const dispatch = await client.dispatch.create({
      type: 'heavy_duty_tow',
      location: {
        latitude: 40.7128,
        longitude: -74.0060,
        address: '123 Main St, New York, NY'
      },
      metadata: {
        internal_claim_id: 'CLM-99210'
      }
    });

    console.log(\`Dispatch initialized: \${dispatch.id}\`);
    
    // Listen for real-time updates
    dispatch.on('status_changed', (newStatus) => {
       console.log(\`Current Status: \${newStatus}\`);
    });

  } catch (error) {
    console.error('Dispatch failed:', error.message);
  }
}`}
        />
      </section>

      {/* Features List */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
         <div className="space-y-3">
            <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
               <Zap className="h-5 w-5 text-brand-blue" />
            </div>
            <h4 className="text-foreground dark:text-white font-bold">Auto-Retries</h4>
            <p className="text-sm text-brand-slate leading-relaxed">Configurable exponential backoff for network-related failures and 5xx errors.</p>
         </div>
         <div className="space-y-3">
            <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
               <Code className="h-5 w-5 text-brand-blue" />
            </div>
            <h4 className="text-foreground dark:text-white font-bold">TypeScript First</h4>
            <p className="text-sm text-brand-slate leading-relaxed">Full type definitions for every request and response object in the ecosystem.</p>
         </div>
         <div className="space-y-3">
            <div className="h-10 w-10 rounded-full bg-brand-blue/10 flex items-center justify-center border border-brand-blue/20">
               <Package className="h-5 w-5 text-brand-blue" />
            </div>
            <h4 className="text-foreground dark:text-white font-bold">Isomorphic</h4>
            <p className="text-sm text-brand-slate leading-relaxed">Works seamlessly in Node.js, Next.js, and directly in modern browsers.</p>
         </div>
      </section>

      <section className="p-8 rounded-2xl bg-gradient-to-r from-brand-blue/20 to-brand-navy border border-brand-border flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground dark:text-white">Explore our Python and Go SDKs</h3>
            <p className="text-sm text-brand-slate">Looking for other languages? We support multiple backend environments.</p>
         </div>
         <div className="flex gap-3">
            <Button variant="outline" className="border-brand-border text-foreground dark:text-white font-mono text-xs">PYTHON</Button>
            <Button variant="outline" className="border-brand-border text-foreground dark:text-white font-mono text-xs">GOLANG</Button>
         </div>
      </section>
    </div>
  );
}
