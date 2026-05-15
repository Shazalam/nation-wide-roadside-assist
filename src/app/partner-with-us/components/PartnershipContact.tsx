'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from '@/components/ui/glass-panel';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Building2,
  Users,
  Briefcase,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

const contactSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  companyName: z.string().min(2, 'Company name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Valid phone number is required'),
  companyType: z.string().min(1, 'Please select a company type'),
  fleetSize: z.string().optional(),
  region: z.string().min(1, 'Region is required'),
  services: z.string().min(1, 'Please select a service interest'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const PartnershipContact = () => {
  const [activeTab, setActiveTab] = useState<'callback' | 'details'>('callback');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form data:', data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section id="contact-module" className="py-32 relative bg-[#081120]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2F80FF]/10 border border-[#2F80FF]/20">
              <ShieldCheck className="h-4 w-4 text-[#2F80FF]" />
              <span className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest">Enterprise Onboarding</span>
           </div>
           <h2 className="text-4xl lg:text-6xl font-black text-white tracking-tight">
             Connect With Our <br />
             <span className="text-[#2F80FF]">Partnership Ecosystem</span>
           </h2>
        </div>

        <div className="max-w-5xl mx-auto">
           {/* Tab Switcher */}
           <div className="flex justify-center mb-12">
              <div className="inline-flex p-1.5 bg-[#0A192F]/80 border border-white/5 rounded-2xl backdrop-blur-xl relative">
                 <button
                   onClick={() => setActiveTab('callback')}
                   className={cn(
                     "relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10",
                     activeTab === 'callback' ? "text-white" : "text-brand-slate hover:text-white"
                   )}
                 >
                   Request a Callback
                 </button>
                 <button
                   onClick={() => setActiveTab('details')}
                   className={cn(
                     "relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10",
                     activeTab === 'details' ? "text-white" : "text-brand-slate hover:text-white"
                   )}
                 >
                   Company Contact Details
                 </button>
                 
                 {/* Animated Background Pill */}
                 <motion.div
                   className="absolute bg-[#2F80FF] rounded-xl shadow-[0_0_20px_rgba(47,128,255,0.4)] h-[calc(100%-12px)] top-1.5"
                   initial={false}
                   animate={{
                     left: activeTab === 'callback' ? 6 : 'calc(50% + 3px)',
                     width: 'calc(50% - 9px)'
                   }}
                   transition={{ type: "spring", stiffness: 300, damping: 30 }}
                 />
              </div>
           </div>

           <AnimatePresence mode="wait">
              {activeTab === 'callback' ? (
                <motion.div
                  key="callback"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                   <GlassPanel className="p-8 lg:p-12 border-white/10 bg-[#0A192F]/60 relative overflow-hidden">
                      {isSuccess ? (
                        <div className="py-20 flex flex-col items-center text-center space-y-6">
                           <div className="h-24 w-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                              <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                           </div>
                           <h3 className="text-3xl font-black text-white">Request Received</h3>
                           <p className="text-brand-slate max-w-md mx-auto">
                             Your enterprise partnership request has been logged into our dispatch mesh. A partnership architect will contact you within 24 hours.
                           </p>
                           <Button 
                             onClick={() => setIsSuccess(false)}
                             variant="outline" 
                             className="border-white/10 text-white"
                           >
                             Send Another Request
                           </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Full Name</label>
                                 <input 
                                   {...register('fullName')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                   placeholder="John Doe"
                                 />
                                 {errors.fullName && <p className="text-[10px] text-rose-500 font-bold">{errors.fullName.message}</p>}
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Company Name</label>
                                 <input 
                                   {...register('companyName')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                   placeholder="Enterprise Corp"
                                 />
                                 {errors.companyName && <p className="text-[10px] text-rose-500 font-bold">{errors.companyName.message}</p>}
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Business Email</label>
                                 <input 
                                   {...register('email')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                   placeholder="john@enterprise.com"
                                 />
                                 {errors.email && <p className="text-[10px] text-rose-500 font-bold">{errors.email.message}</p>}
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Phone Number</label>
                                 <input 
                                   {...register('phone')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                   placeholder="+1 (555) 000-0000"
                                 />
                                 {errors.phone && <p className="text-[10px] text-rose-500 font-bold">{errors.phone.message}</p>}
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Company Type</label>
                                 <select 
                                   {...register('companyType')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all appearance-none cursor-pointer"
                                 >
                                    <option value="" className="bg-[#0A192F]">Select Type</option>
                                    <option value="insurance" className="bg-[#0A192F]">Insurance Provider</option>
                                    <option value="fleet" className="bg-[#0A192F]">Fleet / Rental Operator</option>
                                    <option value="oem" className="bg-[#0A192F]">Vehicle Manufacturer (OEM)</option>
                                    <option value="vendor" className="bg-[#0A192F]">Roadside Service Vendor</option>
                                    <option value="logistics" className="bg-[#0A192F]">Logistics / Transportation</option>
                                 </select>
                                 {errors.companyType && <p className="text-[10px] text-rose-500 font-bold">{errors.companyType.message}</p>}
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Primary Region</label>
                                 <input 
                                   {...register('region')}
                                   className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                   placeholder="e.g. North America / Western US"
                                 />
                                 {errors.region && <p className="text-[10px] text-rose-500 font-bold">{errors.region.message}</p>}
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Services Interested In</label>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                 {['Dispatch', 'Recovery', 'API Access', 'Fleet Ops'].map((service) => (
                                   <label key={service} className="relative group cursor-pointer">
                                      <input type="checkbox" className="peer sr-only" />
                                      <div className="p-3 rounded-xl border border-white/10 bg-white/[0.02] text-center text-[10px] font-black text-brand-slate uppercase tracking-widest transition-all peer-checked:bg-[#2F80FF]/20 peer-checked:border-[#2F80FF] peer-checked:text-white group-hover:bg-white/[0.05]">
                                         {service}
                                      </div>
                                   </label>
                                 ))}
                                 {/* Hidden field to satisfy validation for this demo */}
                                 <input type="hidden" {...register('services')} value="selected" />
                              </div>
                           </div>

                           <div className="space-y-2">
                              <label className="text-[10px] font-black text-brand-slate uppercase tracking-widest pl-1">Enterprise Message</label>
                              <textarea 
                                {...register('message')}
                                rows={4}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-4 text-white text-sm focus:outline-none focus:border-[#2F80FF]/50 transition-all placeholder:text-white/10"
                                placeholder="Tell us about your operational requirements..."
                              />
                              {errors.message && <p className="text-[10px] text-rose-500 font-bold">{errors.message.message}</p>}
                           </div>

                           <Button 
                             type="submit"
                             disabled={isSubmitting}
                             className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-black h-16 rounded-xl shadow-[0_10px_30px_rgba(47,128,255,0.3)] text-base group relative overflow-hidden"
                           >
                              {isSubmitting ? (
                                <div className="flex items-center gap-2">
                                   <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                   Processing Node...
                                </div>
                              ) : (
                                <div className="flex items-center gap-2">
                                   Request Enterprise Callback <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                              )}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                           </Button>
                        </form>
                      )}
                   </GlassPanel>
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                   {/* Contact Cards */}
                   <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60 space-y-6">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-xl bg-[#2F80FF]/10 border border-[#2F80FF]/20 flex items-center justify-center">
                            <Phone className="h-6 w-6 text-[#2F80FF]" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">24/7 Operations Line</p>
                            <h4 className="text-xl font-bold text-white">+1 (888) NTI-MESH</h4>
                         </div>
                      </div>
                      <p className="text-sm text-brand-slate font-medium leading-relaxed">
                        Direct access to our enterprise operations command center for existing partners and critical onboarding inquiries.
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                         <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                         <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Live Support Active</span>
                      </div>
                   </GlassPanel>

                   <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60 space-y-6">
                      <div className="flex items-center gap-4">
                         <div className="h-12 w-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                            <Mail className="h-6 w-6 text-purple-400" />
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-brand-slate uppercase tracking-widest">Enterprise Support</p>
                            <h4 className="text-xl font-bold text-white">partners@nationwidetrans.com</h4>
                         </div>
                      </div>
                      <p className="text-sm text-brand-slate font-medium leading-relaxed">
                        For RFP submissions, security questionnaires, and technical integration documentation requests.
                      </p>
                      <div className="flex items-center gap-4 pt-2">
                         <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                              <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0A192F] bg-[#0A192F]/50 flex items-center justify-center text-[10px] font-bold text-white">
                                 {String.fromCharCode(64 + i)}
                              </div>
                            ))}
                         </div>
                         <span className="text-[10px] text-brand-slate font-bold uppercase tracking-widest">Team Response SLA: &lt; 2h</span>
                      </div>
                   </GlassPanel>

                   <GlassPanel className="p-8 border-white/10 bg-[#0A192F]/60 space-y-6 col-span-1 md:col-span-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="space-y-4">
                            <div className="flex items-center gap-3">
                               <MapPin className="h-4 w-4 text-[#2F80FF]" />
                               <span className="text-[10px] font-black text-white uppercase tracking-widest">HQ Operations</span>
                            </div>
                            <p className="text-sm text-brand-slate font-medium leading-relaxed">
                               1200 Enterprise Way, Suite 400<br />
                               San Francisco, CA 94105<br />
                               United States
                            </p>
                         </div>
                         <div className="space-y-4">
                            <div className="flex items-center gap-3">
                               <Clock className="h-4 w-4 text-[#2F80FF]" />
                               <span className="text-[10px] font-black text-white uppercase tracking-widest">Coverage Timezone</span>
                            </div>
                            <p className="text-sm text-brand-slate font-medium leading-relaxed">
                               Global 24/7 Operations<br />
                               Primary Business: 08:00 - 18:00 PST<br />
                               SLA-Backed Monitoring: Active
                            </p>
                         </div>
                         <div className="flex flex-col justify-center gap-3">
                            <div className="flex gap-4">
                               {[Globe, Users, Briefcase, Building2].map((Icon, i) => (
                                 <button key={i} className="h-10 w-10 rounded-xl border border-white/5 bg-white/[0.02] flex items-center justify-center text-brand-slate hover:text-white hover:border-[#2F80FF]/30 transition-all">
                                    <Icon className="h-4 w-4" />
                                 </button>
                               ))}
                            </div>
                         </div>
                      </div>
                   </GlassPanel>
                </motion.div>
              )}
           </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
