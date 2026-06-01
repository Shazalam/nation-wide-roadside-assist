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
  Lock,
  ArrowRight,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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
        {/* Cinematic Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#020617]/80 backdrop-blur-[22px]"
        >
          {/* Telemetry Particles — Red-tinted for dispatch urgency */}
          <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [Math.random() * 100, Math.random() * 800],
                  x: [Math.random() * 1000, Math.random() * 1000 + 20],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ duration: 5 + Math.random() * 5, repeat: Infinity }}
                className="absolute w-px h-12 bg-gradient-to-b from-transparent via-rose-500 to-transparent"
                style={{ left: `${Math.random() * 100}%`, top: '-100px' }}
              />
            ))}
          </div>

          {/* Ambient Glow Orbs — dispatch red/blue accent */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-rose-500/8 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[200px] rounded-full animate-pulse-slow" />
        </motion.div>

        {/* Modal Wrapper (allows close button to extend outside) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-[calc(100%-2rem)] max-w-7xl h-full lg:h-[min(800px,90vh)] m-4"
        >
          {/* Close Button (half-on, half-off the card border) */}
          <button
            onClick={onClose}
            className="absolute -top-3.5 -right-3.5 z-[70] h-9 w-9 rounded-full bg-[#020712] border border-white/20 flex items-center justify-center text-brand-slate hover:text-white hover:border-rose-500 hover:bg-rose-500/15 hover:shadow-[0_0_20px_rgba(244,63,94,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <X className="h-4.5 w-4.5 group-hover:scale-110 transition-transform group-hover:drop-shadow-[0_0_8px_#f43f5e]" />
          </button>

          {/* Modal Container Card */}
          <div className="w-full h-full rounded-2xl lg:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.55),0_0_50px_rgba(244,63,94,0.12),inset_0_1px_0_rgba(255,255,255,0.05)] bg-gradient-to-br from-[#0A192F]/70 to-[#081120]/60 backdrop-blur-[32px] flex flex-col lg:flex-row">

            {/* LEFT PANEL — DISPATCH COMMAND CENTER */}
            <div className="lg:w-[42%] h-1/3 lg:h-full relative overflow-hidden bg-[#0A192F]/40 border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
                <Truck className="h-[400px] w-[400px] text-rose-500/20 animate-spin-slow" />
              </div>

              {/* Network Lines Visualization */}
              <svg className="absolute inset-0 h-full w-full opacity-10 pointer-events-none">
                <motion.path
                  d="M 50 150 L 350 300 L 150 550"
                  stroke="#f43f5e"
                  strokeWidth="1"
                  fill="none"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.path
                  d="M 400 50 L 150 350 L 500 650"
                  stroke="#2F80FF"
                  strokeWidth="1"
                  fill="none"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.path
                  d="M 250 80 L 450 250 L 100 500"
                  stroke="#f43f5e"
                  strokeWidth="0.5"
                  fill="none"
                  animate={{ pathLength: [0, 1, 0] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
              </svg>

              <div className="relative h-full p-10 lg:p-12 flex flex-col justify-between z-10">
                <div className="space-y-6">
                  {/* Priority Badge */}
                  <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 backdrop-blur-xl">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-black text-rose-500 uppercase tracking-[0.3em]">Priority Dispatch Node</span>
                  </div>

                  {/* Heading */}
                  <div className="space-y-4">
                    <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tighter leading-[0.95]">
                      Rapid <br />
                      <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-[#2F80FF] bg-clip-text text-transparent">Dispatch Request</span>
                    </h2>
                    <p className="text-brand-slate text-sm lg:text-base leading-relaxed max-w-sm font-medium">
                      Initiate immediate recovery coordination across our nationwide infrastructure mesh. Typical response time: &lt; 2 minutes.
                    </p>
                  </div>
                </div>

                {/* Live Telemetry Grid */}
                <div className="space-y-3 pt-6">
                  {[
                    { label: 'Network Load', value: 'OPTIMAL', color: 'text-emerald-500', dotColor: 'bg-emerald-500', icon: Activity },
                    { label: 'Active Nodes', value: '12,482', color: 'text-[#2F80FF]', dotColor: 'bg-[#2F80FF]', icon: Navigation },
                    { label: 'SLA Priority', value: 'LEVEL 1', color: 'text-amber-500', dotColor: 'bg-amber-500', icon: ShieldAlert }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group backdrop-blur-md"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-brand-slate group-hover:text-white/80 transition-colors">
                          <stat.icon className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-[10px] font-black text-brand-slate uppercase tracking-widest group-hover:text-white/60 transition-colors">{stat.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className={cn("h-1.5 w-1.5 rounded-full animate-pulse", stat.dotColor)} />
                        <span className={cn("text-[10px] font-black uppercase tracking-widest", stat.color)}>{stat.value}</span>
                      </div>
                    </motion.div>
                  ))}

                  {/* Live Connection */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[10px] font-black text-white/70 uppercase tracking-[0.2em]">Live Connection Secured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL — FORM & CONTACT */}
            <div className="lg:w-[58%] h-2/3 lg:h-full flex flex-col bg-[#020712]/95 backdrop-blur-3xl p-8 lg:p-12 overflow-y-auto no-scrollbar relative">
              {/* Tab Switcher */}
              <div className="flex justify-center mb-10">
                <div className="inline-flex p-1.5 rounded-full bg-[#0F172A]/80 border border-white/10 backdrop-blur-md shadow-inner relative z-10">
                  <button
                    onClick={() => setActiveTab('form')}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                      activeTab === 'form'
                        ? "bg-[#2F80FF] text-white shadow-[0_4px_12px_rgba(47,128,255,0.4)]"
                        : "text-brand-slate hover:text-white/60"
                    )}
                  >
                    Request a Dispatch
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
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                  >
                    <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-bounce-slow">
                      <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-black text-white tracking-tight">Dispatch Initialized</h3>
                      <p className="text-brand-slate text-sm max-w-sm mx-auto">
                        Your request has been broadcast to the nearest regional coordination centers. A specialist will call you immediately.
                      </p>
                    </div>
                    <Button
                      onClick={() => { setIsSuccess(false); onClose(); }}
                      className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black uppercase tracking-widest"
                    >
                      Close Connection
                    </Button>
                  </motion.div>
                ) : activeTab === 'form' ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Smart Inputs */}
                        {[
                          { id: 'firstName', label: 'First Name', placeholder: 'John' },
                          { id: 'lastName', label: 'Last Name', placeholder: 'Doe' },
                          { id: 'email', label: 'Email Address', placeholder: 'john@company.com' },
                          { id: 'phone', label: 'Phone Number', placeholder: '+1 (555) 000-0000' }
                        ].map((field) => (
                          <div key={field.id} className="group space-y-2">
                            <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2F80FF] transition-colors">
                              {field.label}
                            </label>
                            <div className="relative">
                              <input
                                {...register(field.id as any)}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10 group-focus-within:shadow-[0_0_20px_rgba(47,128,255,0.1)]"
                                placeholder={field.placeholder}
                              />
                              <div className="absolute inset-0 rounded-2xl border border-transparent group-focus-within:border-[#2F80FF]/20 pointer-events-none transition-all" />
                            </div>
                            {errors[field.id as keyof DispatchFormData] && (
                              <p className="text-[10px] text-rose-500 font-bold ml-1">{errors[field.id as keyof DispatchFormData]?.message}</p>
                            )}
                          </div>
                        ))}

                        {/* Company Name — full width */}
                        <div className="col-span-1 md:col-span-2 group space-y-2">
                          <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2F80FF] transition-colors">Company Name</label>
                          <div className="relative">
                            <input
                              {...register('companyName')}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10 group-focus-within:shadow-[0_0_20px_rgba(47,128,255,0.1)]"
                              placeholder="Your Business LLC"
                            />
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-focus-within:border-[#2F80FF]/20 pointer-events-none transition-all" />
                          </div>
                          {errors.companyName && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.companyName.message}</p>}
                        </div>

                        {/* Vehicle Type */}
                        <div className="group space-y-2">
                          <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Fleet Vehicle Type</label>
                          <select
                            {...register('vehicleType')}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#0A192F]">Select Type</option>
                            <option value="light" className="bg-[#0A192F]">Passenger / Light Utility</option>
                            <option value="medium" className="bg-[#0A192F]">Medium Duty Truck</option>
                            <option value="heavy" className="bg-[#0A192F]">Heavy Duty / Class 8</option>
                            <option value="specialized" className="bg-[#0A192F]">Specialized Equipment</option>
                          </select>
                          {errors.vehicleType && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.vehicleType.message}</p>}
                        </div>

                        {/* Fleet Size */}
                        <div className="group space-y-2">
                          <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Estimated Fleet Size</label>
                          <div className="relative">
                            <input
                              {...register('fleetSize')}
                              className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10 group-focus-within:shadow-[0_0_20px_rgba(47,128,255,0.1)]"
                              placeholder="e.g. 50+ Vehicles"
                            />
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-focus-within:border-[#2F80FF]/20 pointer-events-none transition-all" />
                          </div>
                        </div>
                      </div>

                      {/* Details Textarea */}
                      <div className="group space-y-2">
                        <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#2F80FF] transition-colors">Reason for Dispatch / Request Details</label>
                        <div className="relative">
                          <textarea
                            {...register('details')}
                            rows={3}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all resize-none placeholder:text-white/10 group-focus-within:shadow-[0_0_20px_rgba(47,128,255,0.1)]"
                            placeholder="e.g. Towing required for heavy duty truck at Mile Marker 54..."
                          />
                          <div className="absolute inset-0 rounded-2xl border border-transparent group-focus-within:border-[#2F80FF]/20 pointer-events-none transition-all" />
                        </div>
                        {errors.details && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.details.message}</p>}
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={mutation.isPending}
                        className="w-full h-16 bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_40px_rgba(47,128,255,0.3)] transition-all group relative overflow-hidden"
                      >
                        {mutation.isPending ? (
                          <div className="flex items-center gap-3">
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Broadcasting...
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            Submit Dispatch Request <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      </Button>

                      <p className="text-[9px] text-center text-brand-slate/60 font-medium">
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
                    className="space-y-10 flex flex-col w-full relative pt-2"
                  >
                    {/* Premium Ambient glow effects */}
                    <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-rose-500/5 blur-[80px] pointer-events-none animate-pulse" />
                    <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-[#2F80FF]/5 blur-[80px] pointer-events-none animate-pulse-slow" />

                    {/* Header */}
                    <div className="space-y-4 relative z-10">
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-black text-white tracking-tighter leading-tight"
                      >
                        Direct <span className="bg-gradient-to-r from-rose-400 via-rose-500 to-[#2F80FF] bg-clip-text text-transparent">Dispatch Contact</span>
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-brand-slate text-sm lg:text-base leading-relaxed max-w-2xl font-medium"
                      >
                        Reach our 24/7 dispatch coordination team directly for immediate roadside recovery and fleet operations support across the USA and Canada.
                      </motion.p>
                    </div>

                    {/* 2x2 Grid of Premium Glass Cards */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: { staggerChildren: 0.15 }
                        }
                      }}
                      initial="hidden"
                      animate="show"
                      className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10"
                    >
                      {[
                        {
                          title: 'Nationwide Dispatch',
                          value: '+1 (855) 613-3131',
                          href: 'tel:+18556133131',
                          icon: Phone,
                          desc: '24/7 enterprise roadside coordination & dispatch.',
                          accentColor: 'group-hover:text-rose-400'
                        },
                        {
                          title: '24/7 Coordination',
                          value: 'jaydensmith@nationwideroadsideassist.com',
                          href: 'mailto:jaydensmith@nationwideroadsideassist.com',
                          icon: Mail,
                          desc: 'Enterprise dispatch support & case management.',
                          accentColor: 'group-hover:text-cyan-400'
                        },
                        {
                          title: 'Operations Headquarters',
                          value: '11727 East End Avenue, Chino, CA 91710',
                          href: 'https://maps.google.com/?q=11727+East+End+Avenue,+Chino,+CA+91710',
                          icon: MapPin,
                          desc: 'North American dispatch coordination hub.',
                          accentColor: 'group-hover:text-blue-400'
                        },
                        {
                          title: 'Rapid Dispatch SLA',
                          value: '< 15 Min Response Time',
                          href: '#',
                          icon: Clock,
                          desc: 'Real-time coordination & ETA tracking.',
                          accentColor: 'group-hover:text-amber-400'
                        }
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          variants={{
                            hidden: { opacity: 0, y: 30 },
                            show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.2, duration: 0.8 } }
                          }}
                          whileHover={{
                            y: -6,
                            transition: { duration: 0.3, ease: 'easeOut' }
                          }}
                          className="group relative backdrop-blur-3xl bg-white/[0.02] border border-white/[0.06] rounded-2xl p-5 lg:p-6 hover:border-rose-500/30 hover:bg-rose-500/[0.02] transition-all duration-500 flex flex-col justify-between min-h-[200px] shadow-2xl"
                        >
                          {/* Inner Radial Glow */}
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-rose-500/[0.01] to-[#2F80FF]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl" />
                          <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-rose-500/10 blur-[60px] opacity-40 group-hover:opacity-75 group-hover:bg-rose-500/15 transition-all duration-700 pointer-events-none" />

                          {/* Card Content Top: Icon & Title */}
                          <div className="flex items-start gap-3 relative z-10">
                            <div className="h-11 w-11 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-brand-slate group-hover:text-rose-500 group-hover:bg-rose-500/10 group-hover:border-rose-500/25 shadow-inner transition-all duration-500 shrink-0">
                              <card.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="space-y-0.5 min-w-0">
                              <h4 className="text-[11px] font-bold text-brand-slate uppercase tracking-[0.2em]">{card.title}</h4>
                              <p className="text-[10px] text-brand-slate/60 font-medium tracking-wide leading-snug">{card.desc}</p>
                            </div>
                          </div>

                          {/* Card Content Bottom: Primary Text Link */}
                          <div className="relative z-10 pt-3 w-full min-w-0">
                            <a
                              href={card.href}
                              target={card.href.startsWith('http') ? '_blank' : undefined}
                              rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`text-[13px] font-bold text-white hover:underline decoration-rose-500/50 transition-all group-hover:text-white break-all leading-relaxed ${card.accentColor}`}
                            >
                              {card.value}
                              <ArrowRight className="inline-block h-3.5 w-3.5 ml-1.5 text-brand-slate opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-rose-500 transition-all duration-500 align-middle" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
