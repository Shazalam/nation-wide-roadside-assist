'use client';

import React from 'react';
import { APIBlock } from '@/components/ui/api-block';
import { GlassPanel } from '@/components/ui/glass-panel';
import { ShieldCheck, Lock, Key, RefreshCw, Server } from 'lucide-react';

export default function AuthenticationPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold text-foreground dark:text-white tracking-tight">Authentication</h1>
        <p className="text-brand-slate text-lg max-w-3xl">
          The Nationwide Roadside Assist API uses OAuth 2.0 and API Keys to authorize requests. Learn how to secure your integration and manage access tokens.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassPanel className="p-6 border-brand-border space-y-4">
          <Key className="h-8 w-8 text-brand-blue" />
          <h3 className="text-lg font-bold text-foreground dark:text-white">API Keys</h3>
          <p className="text-sm text-brand-slate">Perfect for server-to-server communication and background jobs.</p>
        </GlassPanel>
        <GlassPanel className="p-6 border-brand-border space-y-4">
          <Lock className="h-8 w-8 text-emerald-400" />
          <h3 className="text-lg font-bold text-foreground dark:text-white">OAuth 2.0</h3>
          <p className="text-sm text-brand-slate">Required for user-facing applications requiring delegated access.</p>
        </GlassPanel>
        <GlassPanel className="p-6 border-brand-border space-y-4">
          <ShieldCheck className="h-8 w-8 text-purple-400" />
          <h3 className="text-lg font-bold text-foreground dark:text-white">PKCE</h3>
          <p className="text-sm text-brand-slate">Enhanced security for mobile and single-page applications.</p>
        </GlassPanel>
      </div>

      <div className="h-px w-full bg-white/5" />

      {/* OAuth Flow Section */}
      <section className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-foreground dark:text-white">Client Credentials Flow</h2>
          <p className="text-brand-slate">Use this flow to authenticate your backend service directly with our infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs font-bold text-brand-blue border border-brand-blue/30">1</div>
                <h4 className="font-bold text-foreground dark:text-white">Exchange Credentials</h4>
              </div>
              <p className="text-sm text-brand-slate pl-9">
                Post your `client_id` and `client_secret` to our token endpoint to receive a scoped access token.
              </p>
            </div>

            <APIBlock
              method="POST"
              endpoint="/oauth/token"
              code={`curl -X POST https://auth.nationwidetrans.com/oauth/token \\
  -H "Content-Type: application/x-www-form-urlencoded" \\
  -d "grant_type=client_credentials" \\
  -d "client_id=YOUR_CLIENT_ID" \\
  -d "client_secret=YOUR_CLIENT_SECRET" \\
  -d "scope=fleet:read dispatch:write"`}
            />
          </div>

          <div className="lg:col-span-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-xs font-bold text-emerald-500 border border-emerald-500/30">2</div>
                <h4 className="font-bold text-foreground dark:text-white">Receive Bearer Token</h4>
              </div>
              <p className="text-sm text-brand-slate pl-9">
                You will receive a JWT token valid for 3600 seconds. Use this token in the `Authorization` header of all subsequent API requests.
              </p>
            </div>

            <GlassPanel className="mt-4 p-4 bg-black/40 border-brand-border font-mono text-xs">
              <pre className="text-brand-slate whitespace-pre-wrap">
                {`{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "token_type": "Bearer",
  "expires_in": 3600,
  "scope": "fleet:read dispatch:write"
}`}
              </pre>
            </GlassPanel>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-white/5" />

      {/* Scopes Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground dark:text-white">Available Scopes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-brand-border">
                <th className="py-4 px-4 text-[10px] font-black text-brand-blue uppercase tracking-widest">Scope Name</th>
                <th className="py-4 px-4 text-[10px] font-black text-brand-blue uppercase tracking-widest">Description</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-brand-border hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 font-mono text-brand-blue">dispatch:write</td>
                <td className="py-4 px-4 text-brand-slate">Create and manage emergency dispatch requests</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 font-mono text-brand-blue">fleet:read</td>
                <td className="py-4 px-4 text-brand-slate">View real-time telemetry and vehicle status</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 font-mono text-brand-blue">vendors:search</td>
                <td className="py-4 px-4 text-brand-slate">Query the nationwide vendor network</td>
              </tr>
              <tr className="border-b border-brand-border hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 font-mono text-brand-blue">analytics:view</td>
                <td className="py-4 px-4 text-brand-slate">Access historical performance metrics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="p-8 rounded-2xl bg-brand-blue/5 border border-brand-blue/10">
        <div className="flex gap-4">
          <Server className="h-6 w-6 text-brand-blue shrink-0" />
          <div className="space-y-2">
            <h4 className="font-bold text-foreground dark:text-white uppercase tracking-wider text-xs">Security Best Practice</h4>
            <p className="text-sm text-brand-slate leading-relaxed">
              Never expose your `client_secret` or API keys in client-side code. Always perform the OAuth exchange on your secure backend. If you suspect a key has been compromised, rotate it immediately in the Developer Dashboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
