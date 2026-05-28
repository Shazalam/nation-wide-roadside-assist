'use client';

import React from 'react';
import { GlassPanel } from '@/components/ui/glass-panel';
import { ShieldAlert, AlertCircle } from 'lucide-react';

export default function ErrorCodesPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-3">
           <ShieldAlert className="h-8 w-8 text-rose-500" />
           <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Error Codes</h1>
        </div>
        <p className="text-brand-slate text-lg max-w-3xl">
          The Nationwide Roadside Assist API uses standard HTTP response codes to indicate the success or failure of an API request.
        </p>
      </section>

      <div className="space-y-6">
        {[
          { code: '200', title: 'OK', desc: 'Everything worked as expected.' },
          { code: '400', title: 'Bad Request', desc: 'The request was unacceptable, often due to missing a required parameter.' },
          { code: '401', title: 'Unauthorized', desc: 'No valid API key provided.' },
          { code: '403', title: 'Forbidden', desc: 'The API key does not have permissions to perform the request.' },
          { code: '404', title: 'Not Found', desc: 'The requested resource doesn\'t exist.' },
          { code: '429', title: 'Too Many Requests', desc: 'Too many requests hit the API too quickly.' },
          { code: '500', title: 'Server Errors', desc: 'Something went wrong on Nationwide Roadside Assist\'s end.' },
        ].map((err) => (
          <div key={err.code} className="flex items-start gap-6 p-6 rounded-xl border border-brand-border bg-white/5 hover:bg-white/[0.08] transition-all">
             <div className="text-2xl font-black text-brand-blue font-mono min-w-[60px]">{err.code}</div>
             <div>
                <h4 className="text-foreground dark:text-white font-bold mb-1">{err.title}</h4>
                <p className="text-sm text-brand-slate">{err.desc}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
