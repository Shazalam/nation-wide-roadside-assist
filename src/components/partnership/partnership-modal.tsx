'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';
import { usePartnerRequest } from '@/hooks/use-enterprise-forms';
import { 
  X, 
  ShieldCheck, 
  ChevronRight, 
  Globe, 
  Zap, 
  Activity, 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  CheckCircle2,
  Lock,
  Terminal,
  Cpu,
  Navigation
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';

const partnershipSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid business email'),
  phone: z.string().min(10, 'Valid phone number required'),
  companyType: z.string().min(1, 'Please select company type'),
  fleetSize: z.string().optional(),
  region: z.string().min(1, 'Region is required'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type PartnershipFormData = z.infer<typeof partnershipSchema>;

interface PartnershipModalProps {
  isOpen: boolean;
  onClose: () => void;
}


export const PartnershipModal = ({ isOpen, onClose }: PartnershipModalProps) => {
  const [activeTab, setActiveTab] = useState<'form' | 'details'>('form');
  const [isSuccess, setIsSuccess] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<PartnershipFormData>({
    resolver: zodResolver(partnershipSchema),
  });

  const mutation = usePartnerRequest();

  const onSubmit = async (data: PartnershipFormData) => {
    toast.promise(mutation.mutateAsync(data), {
      loading: 'Initializing enterprise onboarding...',
      success: () => {
        setIsSuccess(true);
        reset();
        return 'Partnership request indexed successfully.';
      },
      error: (err: any) => {
        return err.response?.data?.message || 'Operational failure. Please contact infrastructure support.';
      }
    });
  };

  // Prevent scroll when open
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
           {/* Telemetry Particles */}
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
                  className="absolute w-px h-12 bg-gradient-to-b from-transparent via-[#2F80FF] to-transparent"
                  style={{ left: `${Math.random() * 100}%`, top: '-100px' }}
                />
              ))}
           </div>
           
           {/* Ambient Glow Orbs */}
           <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#2F80FF]/10 blur-[150px] rounded-full animate-pulse" />
           <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#2F80FF]/5 blur-[200px] rounded-full animate-pulse-slow" />
        </motion.div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 40 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-7xl h-full lg:h-[min(800px,90vh)] rounded-2xl lg:rounded-[32px] overflow-hidden border border-white/10 shadow-[0_30px_120px_rgba(0,0,0,0.55),0_0_50px_rgba(47,128,255,0.18),inset_0_1px_0_rgba(255,255,255,0.05)] bg-gradient-to-br from-[#0A192F]/70 to-[#081120]/60 backdrop-blur-[32px] flex flex-col lg:flex-row"
        >
           {/* Close Button */}
           <button 
             onClick={onClose}
             className="absolute top-6 right-6 z-[60] h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand-slate hover:text-white hover:bg-white/10 transition-all group"
           >
              <X className="h-5 w-5 group-hover:scale-110 transition-transform" />
           </button>

           {/* LEFT PANEL — IMMERSIVE EXPERIENCE */}
           <div className="lg:w-[45%] h-1/3 lg:h-full relative overflow-hidden bg-[#0A192F]/40 border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Animated Map Background */}
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
                 <Globe className="h-[500px] w-[500px] text-[#2F80FF]/20 animate-spin-slow" />
              </div>

              {/* Network Lines Visualization */}
              <svg className="absolute inset-0 h-full w-full opacity-10 pointer-events-none">
                 <motion.path 
                   d="M 100 200 L 400 350 L 200 600" 
                   stroke="#2F80FF" 
                   strokeWidth="1" 
                   fill="none"
                   animate={{ pathLength: [0, 1, 0] }}
                   transition={{ duration: 4, repeat: Infinity }}
                 />
                 <motion.path 
                   d="M 500 100 L 200 400 L 600 700" 
                   stroke="#2F80FF" 
                   strokeWidth="1" 
                   fill="none"
                   animate={{ pathLength: [0, 1, 0] }}
                   transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                 />
              </svg>

              <div className="relative h-full p-12 flex flex-col justify-between z-10">
                 <div className="space-y-8">
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20 backdrop-blur-xl">
                       <div className="h-1.5 w-1.5 rounded-full bg-[#2F80FF] animate-pulse" />
                       <span className="text-[10px] font-black text-[#2F80FF] uppercase tracking-[0.3em]">Enterprise Onboarding Module</span>
                    </div>

                    <div className="space-y-4">
                       <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95]">
                          Connect With Our <br />
                          <span className="text-[#2F80FF]">Partnership Ecosystem</span>
                       </h2>
                       <p className="text-brand-slate text-lg leading-relaxed max-w-md font-medium">
                          Connect into a nationwide mobility infrastructure ecosystem engineered for insurers, fleets, OEMs, roadside networks, and logistics providers.
                       </p>
                    </div>

                       <div className="flex flex-wrap gap-3 pt-6">
                       {[
                         { text: "Need nationwide roadside coverage?", icon: Navigation },
                         { text: "Looking for dispatch API integration?", icon: Terminal },
                         { text: "Automating fleet recovery operations?", icon: Zap }
                       ].map((prompt, i) => (
                         <motion.button
                           key={i}
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.5 + i * 0.1 }}
                           whileHover={{ y: -2, scale: 1.02 }}
                           className="px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[10px] font-black text-brand-slate uppercase tracking-widest hover:text-white hover:border-[#2F80FF]/40 hover:bg-[#2F80FF]/5 transition-all flex items-center gap-2 group"
                         >
                           <prompt.icon className="h-3 w-3 text-[#2F80FF] opacity-50 group-hover:opacity-100 transition-opacity" />
                           {prompt.text}
                         </motion.button>
                       ))}
                    </div>
                 </div>

              </div>
           </div>

           {/* RIGHT PANEL — INTERACTIVE FORM MODULE */}
           <div className="lg:w-[55%] h-2/3 lg:h-full flex flex-col bg-[#081120]/20 p-8 lg:p-12 overflow-y-auto no-scrollbar">
              {/* Tab Switcher */}
              <div className="flex justify-center mb-12">
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
                      Request a Callback
                    </button>
                    <button
                      onClick={() => setActiveTab('details')}
                      className={cn(
                        "px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                        activeTab === 'details' 
                          ? "bg-[#2F80FF] text-white shadow-[0_4px_12px_rgba(47,128,255,0.4)]" 
                          : "text-brand-slate hover:text-white/60"
                      )}
                    >
                      Contact Details
                    </button>
                 </div>
              </div>

              <AnimatePresence mode="wait">
                 {activeTab === 'form' ? (
                   <motion.div
                     key="form"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="space-y-8"
                   >
                      {isSuccess ? (
                        <div className="flex flex-col items-center text-center space-y-6 py-20">
                           <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center animate-bounce-slow">
                              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                           </div>
                           <div className="space-y-2">
                              <h3 className="text-3xl font-black text-white tracking-tight">Onboarding Initialized</h3>
                              <p className="text-brand-slate max-w-sm mx-auto">
                                Your enterprise profile is being indexed into our partnership mesh. A representative will contact you within 24 hours.
                              </p>
                           </div>
                           <Button 
                             onClick={() => setIsSuccess(false)}
                             className="bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-black uppercase tracking-widest"
                           >
                             Reset Form
                           </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Smart Inputs */}
                              {[
                                { id: 'fullName', label: 'Full Name', placeholder: 'Enterprise Lead' },
                                { id: 'companyName', label: 'Company Name', placeholder: 'Mobility Corp' },
                                { id: 'email', label: 'Business Email', placeholder: 'lead@enterprise.com' },
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
                                   {errors[field.id as keyof PartnershipFormData] && (
                                     <p className="text-[10px] text-rose-500 font-bold ml-1">{errors[field.id as keyof PartnershipFormData]?.message}</p>
                                   )}
                                </div>
                              ))}

                              <div className="group space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Company Type</label>
                                 <select 
                                   {...register('companyType')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="" className="bg-[#0A192F]">Select Track</option>
                                    <option value="insurance" className="bg-[#0A192F]">Insurtech / Carrier</option>
                                    <option value="fleet" className="bg-[#0A192F]">Enterprise Fleet</option>
                                    <option value="oem" className="bg-[#0A192F]">Automotive OEM</option>
                                    <option value="logistics" className="bg-[#0A192F]">Logistics Provider</option>
                                    <option value="other" className="bg-[#0A192F]">Others / Specialized Enterprise</option>
                                 </select>
                              </div>

                                 <div className="group space-y-2">
                                    <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Fleet Size (Optional)</label>
                                    <input 
                                      {...register('fleetSize')}
                                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                      placeholder="e.g. 500+ Vehicles"
                                    />
                                 </div>

                                 <div className="group space-y-2">
                                    <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Primary Region</label>
                                    <input 
                                      {...register('region')}
                                      className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                      placeholder="e.g. North America"
                                    />
                                 </div>
                              </div>

                              <div className="space-y-3">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Services Interested In</label>
                                 <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {['Dispatch', 'Recovery', 'API Access', 'Fleet Ops'].map((service) => (
                                      <label key={service} className="relative group cursor-pointer">
                                         <input type="checkbox" className="peer sr-only" {...register('services')} value={service} />
                                         <div className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-center text-[9px] font-black text-brand-slate uppercase tracking-widest transition-all peer-checked:bg-[#2F80FF]/20 peer-checked:border-[#2F80FF] peer-checked:text-white group-hover:bg-white/[0.05]">
                                            {service}
                                         </div>
                                      </label>
                                    ))}
                                 </div>
                                 {errors.services && <p className="text-[10px] text-rose-500 font-bold ml-1">{errors.services.message}</p>}
                              </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-brand-slate uppercase tracking-[0.2em] ml-1">Enterprise Message</label>
                              <textarea 
                                {...register('message')}
                                rows={3}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                placeholder="Tell us about your operational infrastructure requirements..."
                              />
                           </div>

                           <Button 
                             type="submit"
                             disabled={mutation.isPending}
                             className="w-full h-16 bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black uppercase tracking-widest rounded-2xl shadow-[0_10px_40px_rgba(47,128,255,0.3)] transition-all group relative overflow-hidden"
                           >
                              {mutation.isPending ? (
                                <div className="flex items-center gap-3">
                                   <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                   Syncing Node...
                                </div>
                              ) : (
                                <div className="flex items-center gap-3">
                                   Request Enterprise Callback <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                           </Button>
                        </form>
                      )}
                   </motion.div>
                 ) : (
                   <motion.div
                     key="details"
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     className="grid grid-cols-1 md:grid-cols-2 gap-6"
                   >
                      {[
                        { title: 'Partnership Ops', value: 'enterprise@nationwidetrans.com', icon: Mail, label: 'Enterprise Email' },
                        { title: '24/7 Operations', value: '+1 (888) Nationwide Roadside Assist-MESH', icon: Phone, label: 'Partnership Line' },
                        { title: 'Integration Hub', value: 'SF Headquarters / Global', icon: MapPin, label: 'Operations Base' },
                        { title: 'Support SLA', value: '< 2 Hour Response', icon: Clock, label: 'Response Target' }
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
                            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-[10px] font-black text-white uppercase tracking-widest">Global Support Mesh Active</span>
                         </div>
                         <div className="flex gap-4">
                            {[Terminal, Lock, Activity].map((Icon, i) => (
                              <Icon key={i} className="h-4 w-4 text-brand-slate hover:text-white transition-colors cursor-pointer" />
                            ))}
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
