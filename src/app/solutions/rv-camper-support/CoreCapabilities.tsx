'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Users, Activity, ArrowDown, Database, CheckCircle, Smartphone } from 'lucide-react';

export default function CoreCapabilities() {
  const cards = [
    {
      icon: Server,
      title: 'API & FORM REQUEST INTAKE',
      desc: 'Clients submit roadside assistance requests through secure API endpoints or request forms, including customer name, phone number, policy details, vehicle type, pickup location, drop-off location, service type, and notes.',
          },
    {
      icon: Users,
      title: '24/7 DISPATCH TEAM COORDINATION',
      desc: 'Every request is routed into our internal dispatch system, where our backend operations team reviews the case, validates the service need, coordinates the provider, and manages the roadside workflow.',
          },
    {
      icon: Activity,
      title: 'STATUS UPDATES & COMPLETION FLOW',
      desc: 'Clients receive request status, ETA updates, dispatch progress, provider coordination updates, and final completion records without directly managing the vendor network.',
          }
  ];

  const workflowSteps = [
    { label: 'Client API / Form Request', icon: Smartphone },
    { label: 'Internal Dispatch Dashboard', icon: Database },
    { label: 'Backend Team Review', icon: Users },
    { label: 'Provider Coordination', icon: Server },
    { label: 'ETA & Status Updates', icon: Activity },
    { label: 'Job Completion Report', icon: CheckCircle }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-12 relative z-10 bg-[#020617] overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2F80FF]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Block moved outside the grid to align the columns below */}
        <div className="mb-12 max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-6 text-white leading-tight">
            Built for <span className="text-[#2F80FF]">Enterprise RSA Request</span> Operations
          </h2>
          <p className="text-brand-slate text-lg leading-relaxed">
            API-powered request intake and 24/7 dispatch support for clients who need roadside assistance coordination without managing vendors directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          
          {/* LEFT SIDE: Cards */}
          <div className="flex flex-col justify-between space-y-6">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} 
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    className="group bg-[#0A1121]/80 backdrop-blur-xl border border-[rgba(47,128,255,0.15)] rounded-2xl p-6 relative overflow-hidden hover:border-[#2F80FF]/50 transition-all duration-300 shadow-[0_0_0_rgba(47,128,255,0)] hover:shadow-[0_10px_40px_rgba(47,128,255,0.15)]"
                  >
                    {/* Hover Glow */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2F80FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F80FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-[rgba(47,128,255,0.1)] border border-[rgba(47,128,255,0.2)] rounded-xl shrink-0">
                          <Icon className="w-5 h-5 text-[#2F80FF]" />
                        </div>
                        <h3 className="text-[13px] font-black text-white tracking-[0.1em] uppercase">{card.title}</h3>
                      </div>
                      <p className="text-brand-slate text-sm leading-relaxed mb-5">
                        {card.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          {/* RIGHT SIDE: Visual Workflow */}
          <div className="relative h-full flex flex-col justify-center lg:justify-end lg:items-end w-full">
            <div className="w-full max-w-md relative h-full flex flex-col justify-between">
              {/* Decorative elements behind the workflow */}
              <div className="absolute -inset-10 bg-gradient-to-b from-[#2F80FF]/5 via-[#2F80FF]/10 to-transparent blur-3xl rounded-full" />
              
              <div className="relative flex flex-col h-full">
                {workflowSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isLast = idx === workflowSteps.length - 1;
                  
                  return (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                      className={`relative flex flex-col items-center ${!isLast ? 'flex-1' : ''}`}
                    >
                      {/* Workflow Node */}
                      <div className="w-full bg-[#0A1121]/90 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-xl p-4 flex items-center gap-4 relative z-10 shadow-xl overflow-hidden group hover:border-[#2F80FF]/40 transition-colors">
                        {/* Animated background gradient sweep */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2F80FF]/5 to-transparent skew-x-12 -translate-x-full"
                          animate={{ translateX: ['-100%', '200%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: idx * 0.5 }}
                        />
                        
                        <div className="w-10 h-10 rounded-lg bg-[#2F80FF]/10 border border-[#2F80FF]/20 flex items-center justify-center shrink-0 relative overflow-hidden">
                          <StepIcon className="w-5 h-5 text-[#2F80FF] relative z-10" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-white tracking-wide">{step.label}</div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-[#2F80FF] shadow-[0_0_8px_#2F80FF]" />
                      </div>

                      {/* Animated Connector Line */}
                      {!isLast && (
                        <div className="flex-1 min-h-[1.5rem] w-px bg-[rgba(255,255,255,0.1)] relative my-2">
                          <motion.div 
                            className="absolute top-0 left-0 w-full bg-[#2F80FF]"
                            animate={{ height: ['0%', '100%'], opacity: [1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear', delay: idx * 0.2 }}
                          />
                          <ArrowDown className="w-3 h-3 text-[#2F80FF]/50 absolute -bottom-2 left-1/2 -translate-x-1/2" />
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
