'use client';

import React, { useState } from 'react';
import { LandingLayout } from '@/components/layout/landing-layout';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { EnterpriseTabs } from '@/components/ui/enterprise-tabs';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Copy, 
  Key, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function APIDocsPage() {
  const [activeTab, setActiveTab] = useState('dispatch');

  return (
    <LandingLayout>
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar Navigation */}
          <aside className="lg:w-64 shrink-0">
            <div className="sticky top-32 space-y-8">
              <div>
                <h3 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4">Core Reference</h3>
                <nav className="flex flex-col gap-2">
                  <button className="text-sm font-medium text-foreground dark:text-white flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20">
                    <BookOpen className="h-4 w-4" /> Introduction
                  </button>
                  <button className="text-sm font-medium text-brand-slate hover:text-foreground dark:text-white flex items-center gap-2 px-3 py-2 rounded-lg transition-colors">
                    <ShieldCheck className="h-4 w-4" /> Authentication
                  </button>
                  <button className="text-sm font-medium text-brand-slate hover:text-foreground dark:text-white flex items-center gap-2 px-3 py-2 rounded-lg transition-colors">
                    <Key className="h-4 w-4" /> API Keys
                  </button>
                </nav>
              </div>

              <div>
                <h3 className="text-[10px] font-bold text-brand-slate uppercase tracking-widest mb-4">Endpoints</h3>
                <nav className="flex flex-col gap-2">
                  {['Dispatch', 'Telemetry', 'Vendors', 'Compliance', 'Webhooks'].map((item) => (
                    <button key={item} className="text-sm font-medium text-brand-slate hover:text-foreground dark:text-white px-3 py-2 rounded-lg transition-colors text-left">
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 max-w-4xl">
            <header className="mb-12">
              <Badge variant="outline" className="mb-4 border-brand-blue/30 text-brand-blue bg-brand-blue/5">
                v2.4.0 Stable
              </Badge>
              <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4">Developer API & Webhooks</h1>
              <p className="text-brand-slate text-lg leading-relaxed">
                Build high-performance mobility applications with the Nationwide Trans infrastructure. 
                Our API-first approach allows for seamless integration into existing ERP, Insurance, or Fleet management systems.
              </p>
            </header>

            <section className="mb-16">
              <h2 className="text-2xl font-bold text-foreground dark:text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-brand-blue" /> Quick Start: Authentication
              </h2>
              <GlassPanel className="p-8 mb-8">
                <p className="text-brand-slate text-sm mb-6">
                  All API requests must include your Bearer Token in the `Authorization` header. You can generate and rotate tokens in the Developer Console.
                </p>
                <APIBlock 
                  method="GET" 
                  endpoint="/v1/me" 
                  code={`curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://api.nationwidetrans.com/v1/me`}
                />
              </GlassPanel>
            </section>

            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground dark:text-white flex items-center gap-3">
                  <Zap className="h-6 w-6 text-brand-blue" /> Operational Endpoints
                </h2>
                <EnterpriseTabs 
                  activeTab={activeTab} 
                  onChange={setActiveTab}
                  tabs={[
                    { id: 'dispatch', label: 'Dispatch' },
                    { id: 'fleet', label: 'Fleet' },
                    { id: 'vendors', label: 'Vendors' },
                  ]}
                />
              </div>

              {activeTab === 'dispatch' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground dark:text-white">Initialize Service Request</h3>
                    <p className="text-brand-slate text-sm">Creates a new incident in the mesh network and initiates automated vendor matching.</p>
                    <APIBlock 
                      method="POST" 
                      endpoint="/v1/dispatch"
                      code={`{
  "type": "heavy_towing",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060,
    "address": "123 Broadway, NY"
  },
  "priority": "high",
  "vehicle": {
    "vin": "1A2B3C...",
    "make": "Freightliner"
  }
}`}
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground dark:text-white">Retrieve Real-time ETA</h3>
                    <p className="text-brand-slate text-sm">Returns the current estimated time of arrival for an active service node.</p>
                    <APIBlock 
                      method="GET" 
                      endpoint="/v1/dispatch/:id/eta"
                      code={`curl https://api.nationwidetrans.com/v1/dispatch/INC-8241/eta`}
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'fleet' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-foreground dark:text-white">Fetch Asset Telemetry</h3>
                    <p className="text-brand-slate text-sm">Retrieves real-time diagnostics and coordinates for a specific fleet unit.</p>
                    <APIBlock 
                      method="GET" 
                      endpoint="/v1/fleet/:id/telemetry"
                      code={`curl https://api.nationwidetrans.com/v1/fleet/FLT-001/telemetry`}
                    />
                  </div>
                </motion.div>
              )}
            </section>

            <section className="mt-24 pt-12 border-t border-brand-border">
              <GlassPanel variant="blue" className="p-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-foreground dark:text-white">Need custom infrastructure?</h2>
                  <p className="text-brand-slate text-sm">Our solution engineers can help build dedicated API clusters for high-volume enterprise clients.</p>
                </div>
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold h-12 px-8 uppercase tracking-widest shrink-0">
                  Talk to Engineering
                </Button>
              </GlassPanel>
            </section>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
}

const Badge = ({ children, variant, className }: any) => (
  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${className}`}>
    {children}
  </span>
);
