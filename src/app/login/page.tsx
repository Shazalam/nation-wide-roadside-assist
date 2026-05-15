'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import api from '@/lib/api';
import { GlassPanel } from '@/components/ui/glass-panel';
import { EnterpriseInput } from '@/components/ui/enterprise-input';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Loader2, Lock, Mail } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const setAuth = useStore((state) => state.setAuth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/login', { email, password });
      setAuth(response.data, response.data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center relative overflow-hidden px-4">
      {/* Cinematic Background */}
      <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="h-10 w-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.4)]">
              <Shield className="text-foreground dark:text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-foreground dark:text-white tracking-tight">NATIONWIDE <span className="text-brand-blue">TRANS</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">System Access</h1>
          <p className="text-brand-slate mt-2">Authentication required for operational node entry.</p>
        </div>

        <GlassPanel className="p-8 shadow-2xl bg-brand-navy/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <EnterpriseInput 
              label="Operational Email"
              type="email"
              placeholder="operator@nationwidetrans.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={<Mail className="h-4 w-4" />}
              required
            />

            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] font-bold text-foreground dark:text-white uppercase tracking-widest">Access Key</label>
                <Link href="#" className="text-[10px] text-brand-blue hover:underline uppercase tracking-widest font-bold">Reset Key</Link>
              </div>
              <EnterpriseInput 
                type="password"
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<Lock className="h-4 w-4" />}
                required
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-xs font-medium"
              >
                {error}
              </motion.div>
            )}

            <Button 
              type="submit" 
              className="w-full h-12 bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(47,128,255,0.3)] group"
              disabled={loading}
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                <span className="flex items-center gap-2">
                  Initialize Session <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-brand-border text-center">
            <p className="text-xs text-brand-slate">
              Need access? <Link href="/register" className="text-brand-blue font-bold hover:underline">Request Node Credentials</Link>
            </p>
          </div>
        </GlassPanel>

        <div className="mt-8 flex justify-center gap-8 opacity-50">
          <div className="flex items-center gap-2 text-[10px] text-brand-slate font-bold uppercase tracking-widest">
            <Shield className="h-3 w-3 text-brand-blue" /> AES-256
          </div>
          <div className="flex items-center gap-2 text-[10px] text-brand-slate font-bold uppercase tracking-widest">
            <Lock className="h-3 w-3 text-brand-blue" /> TLS 1.3
          </div>
        </div>
      </motion.div>
    </div>
  );
}
