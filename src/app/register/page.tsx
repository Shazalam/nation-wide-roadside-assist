'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useStore } from '@/lib/store';
import api from '@/lib/api';
import { GlassPanel } from '@/components/ui/glass-panel';
import { EnterpriseInput } from '@/components/ui/enterprise-input';
import { Button } from '@/components/ui/button';
import { Shield, ArrowRight, Loader2, User, Mail, Lock, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const setAuth = useStore((state) => state.setAuth);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/auth/register', {
        ...formData,
        role: 'client', // Default role
        profile: { company: formData.company }
      });
      setAuth(response.data, response.data.token);
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center relative overflow-hidden px-4 py-12">
      {/* Cinematic Background */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl z-10"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="h-10 w-10 rounded-lg bg-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.4)]">
              <Shield className="text-foreground dark:text-white h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-foreground dark:text-white tracking-tight">NATIONWIDE <span className="text-brand-blue">TRANS</span></span>
          </Link>
          <h1 className="text-3xl font-bold text-foreground dark:text-white tracking-tight">Request Provisioning</h1>
          <p className="text-brand-slate mt-2">Initialize your enterprise profile on the Nationwide network.</p>
        </div>

        <GlassPanel className="p-8 shadow-2xl bg-brand-navy/60">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <EnterpriseInput 
                label="Full Name"
                name="name"
                placeholder="Sarah Jenkins"
                value={formData.name}
                onChange={handleChange}
                icon={<User className="h-4 w-4" />}
                required
              />
              <EnterpriseInput 
                label="Operational Email"
                name="email"
                type="email"
                placeholder="s.jenkins@company.com"
                value={formData.email}
                onChange={handleChange}
                icon={<Mail className="h-4 w-4" />}
                required
              />
              <EnterpriseInput 
                label="Company / Fleet"
                name="company"
                placeholder="Logistics Hub Inc."
                value={formData.company}
                onChange={handleChange}
                icon={<Building2 className="h-4 w-4" />}
              />
              <EnterpriseInput 
                label="Security Key"
                name="password"
                type="password"
                placeholder="••••••••••••"
                value={formData.password}
                onChange={handleChange}
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
              className="w-full h-12 bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(47,128,255,0.3)] group mt-4"
              disabled={loading}
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : (
                <span className="flex items-center gap-2">
                  Create Infrastructure Profile <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-brand-border text-center">
            <p className="text-xs text-brand-slate">
              Already have credentials? <Link href="/login" className="text-brand-blue font-bold hover:underline">Access Operational Node</Link>
            </p>
          </div>
        </GlassPanel>
      </motion.div>
    </div>
  );
}
