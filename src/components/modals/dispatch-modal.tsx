'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { useDispatchRequest } from '@/hooks/use-enterprise-forms';
import {
  X,
  Truck,
  MapPin,
  Clock,
  Zap,
  Send,
  CheckCircle2,
  Activity,
  ShieldAlert,
  Radio,
  Navigation,
  Phone,
  Mail,
  Terminal,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

const dispatchSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Valid phone required'),
  vehicleType: z.string().min(1, 'Please select vehicle type'),
  fleetSize: z.string().optional(),
  details: z.string().min(10, 'Details required'),
});

type DispatchFormData = z.infer<typeof dispatchSchema>;

interface DispatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DispatchModal = ({ isOpen, onClose }: DispatchModalProps) => {
  const [activeTab, setActiveTab] = useState<'form' | 'contact'>('form');
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<DispatchFormData>({
    resolver: zodResolver(dispatchSchema),
  });

  const mutation = useDispatchRequest();

  const onSubmit = async (data: DispatchFormData) => {
    toast.promise(mutation.mutateAsync(data), {
      loading: 'Broadcasting dispatch request to network...',
      success: () => {
        setIsSuccess(true);
        reset();
        return 'Dispatch request initialized successfully.';
      },
      error: (err: any) => {
        return err.response?.data?.message || 'Network broadcast failed. Please try again.';
      }
    });
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 lg:p-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/85 backdrop-blur-xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-6xl h-full lg:h-[min(750px,90vh)] rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.6)] bg-[#081120] flex flex-col lg:flex-row"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-slate hover:text-white transition-all group"
          >
            <X className="h-5 w-5" />
          </button>

          {/* LEFT PANEL — DISPATCH TELEMETRY */}
          <div className="lg:w-[40%] bg-gradient-to-br from-[#0A192F] to-[#081120] p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2F80FF_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20">
                <Radio className="h-3 w-3 text-rose-500 animate-pulse" />
                <span className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Priority Dispatch Node</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-none">
                Rapid <br />
                <span className="text-[#2F80FF]">Dispatch Request</span>
              </h2>
              <p className="text-brand-slate text-sm font-medium leading-relaxed max-w-xs">
                Initiate immediate recovery coordination across our nationwide infrastructure mesh. Typical response time: &lt; 2 minutes.
              </p>
            </div>

            {/* Simulated Live Grid */}
            <div className="relative z-10 space-y-4">
              {[
                { label: 'Network Load', value: 'OPTIMAL', color: 'text-emerald-500', icon: Activity },
                { label: 'Active Nodes', value: '12,482', color: 'text-[#2F80FF]', icon: Navigation },
                { label: 'SLA Priority', value: 'LEVEL 1', color: 'text-amber-500', icon: ShieldAlert }
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3">
                    <stat.icon className="h-4 w-4 text-brand-slate" />
                    <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <span className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.value}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4">
                <div className="h-2 w-2 rounded-full bg-[#2F80FF] animate-ping" />
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Live Connection Secured</span>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — DISPATCH FORM & CONTACT */}
          <div className="lg:w-[60%] bg-[#081120]/40 p-8 lg:p-12 overflow-y-auto no-scrollbar relative">
            {/* Tab Switcher */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 backdrop-blur-md shadow-inner">
                <button
                  onClick={() => setActiveTab('form')}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                    activeTab === 'form'
                      ? "bg-[#2F80FF] text-white shadow-[0_4px_12px_rgba(47,128,255,0.4)]"
                      : "text-brand-slate hover:text-white/60"
                  )}
                >
                  Broadcast Request
                </button>
                <button
                  onClick={() => setActiveTab('contact')}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                    activeTab === 'contact'
                      ? "bg-[#2F80FF] text-white shadow-[0_4px_12px_rgba(47,128,255,0.4)]"
                      : "text-brand-slate hover:text-white/60"
                  )}
                >
                  Direct Contact
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                >
                  <div className="h-20 w-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-white tracking-tight">Dispatch Initialized</h3>
                    <p className="text-brand-slate text-sm max-w-sm">
                      Your request has been broadcast to the nearest regional coordination centers. A specialist will call you immediately.
                    </p>
                  </div>
                  <Button onClick={onClose} className="bg-[#2F80FF] text-white px-8">Close Connection</Button>
                </motion.div>
              ) : activeTab === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">First Name</label>
                        <input {...register('firstName')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="John" />
                        {errors.firstName && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.firstName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Last Name</label>
                        <input {...register('lastName')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="Doe" />
                        {errors.lastName && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.lastName.message}</p>}
                      </div>
                      <div className="col-span-2 space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Company Name</label>
                        <input {...register('companyName')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="Your Business LLC" />
                        {errors.companyName && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.companyName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Phone Number</label>
                        <input {...register('phone')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="(555) 000-0000" />
                        {errors.phone && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Email Address</label>
                        <input {...register('email')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="john@company.com" />
                        {errors.email && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Fleet Vehicle Type</label>
                        <select {...register('vehicleType')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 appearance-none">
                          <option value="" className="bg-[#081120]">Select Type</option>
                          <option value="light" className="bg-[#081120]">Passenger / Light Utility</option>
                          <option value="medium" className="bg-[#081120]">Medium Duty Truck</option>
                          <option value="heavy" className="bg-[#081120]">Heavy Duty / Class 8</option>
                          <option value="specialized" className="bg-[#081120]">Specialized Equipment</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Estimated Fleet Size</label>
                        <input {...register('fleetSize')} className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all" placeholder="0" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest ml-1">Reason for Dispatch / Request Details</label>
                      <textarea
                        {...register('details')}
                        rows={3}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all resize-none"
                        placeholder="e.g. Towing required for heavy duty truck at Mile Marker 54..."
                      />
                      {errors.details && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.details.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full h-14 bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black uppercase tracking-widest rounded-xl transition-all group"
                    >
                      {mutation.isPending ? 'Broadcasting...' : 'Submit Dispatch Request'}
                      {!mutation.isPending && <Send className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>

                    <p className="text-[9px] text-center text-brand-slate font-medium">
                      By submitting this form, you agree to our Terms of Service and Privacy Policy. A specialist will call you immediately.
                    </p>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="h-full flex flex-col justify-center"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: 'Nationwide Dispatch',
                        value: '+1 (855) 613-3131',
                        icon: Phone,
                        label: '24/7 Operations Line'
                      },
                      {
                        title: '24/7 Coordination',
                        value: 'KONGL@NATIONWIDETRANSINC.COM',
                        icon: Mail,
                        label: 'Enterprise Support'
                      },
                      {
                        title: 'Operations Headquarters',
                        value: 'Chino, California, USA',
                        icon: MapPin,
                        label: '11727 East End Avenue'
                      },
                      {
                        title: 'Rapid Dispatch SLA',
                        value: '< 15 Min Response',
                        icon: Clock,
                        label: 'Real-Time Coordination'
                      }
                    ].map((card, i) => (
                      <GlassPanel key={i} className="p-6 border-white/10 bg-white/[0.02] space-y-4 hover:border-[#2F80FF]/30 transition-all">
                        <div className="h-10 w-10 rounded-xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 flex items-center justify-center text-[#2F80FF]">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-[9px] font-black text-brand-slate uppercase tracking-widest">{card.label}</p>
                          <h4 className="text-sm font-bold text-white">{card.value}</h4>
                          <p className="text-[10px] text-brand-slate font-medium">{card.title}</p>
                        </div>
                      </GlassPanel>
                    ))}

                    <div className="col-span-1 md:col-span-2 pt-8 flex items-center justify-between border-t border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                        <span className="text-[10px] font-black text-white uppercase tracking-widest">Emergency Priority Routing Active</span>
                      </div>
                      <div className="flex gap-4">
                        {[Terminal, Lock, Activity].map((Icon, i) => (
                          <Icon key={i} className="h-4 w-4 text-brand-slate hover:text-white transition-colors cursor-pointer" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
