'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { GlassPanel } from '@/components/ui/glass-panel';
import {
  ChevronDown,
  Menu,
  X,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Cpu,
  Terminal,
  Truck,
  Settings,
  Headphones,
  Wrench,
  Navigation,
  ArrowRight,
  LogOut,
  User
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    columns: [
      {
        title: "Partnerships",
        items: [
          { label: "Insurance Programs", href: "/solutions/insurance-programs", icon: Shield, desc: "Direct claims integration" },
          { label: "Fleet & Rental Operations", href: "/solutions/fleet-rental-operations", icon: Truck, desc: "Scale fleet management" },
          { label: "RV & Camper Support", href: "/solutions/rv-camper-support", icon: Globe, desc: "Specialized recovery" }
        ]
      },
      {
        title: "Enterprise",
        items: [
          { label: "Commercial Recovery", href: "/solutions/commercial-vehicle-recovery", icon: Wrench, desc: "Enterprise heavy-duty recovery" },
          { label: "Dispatch Solutions", href: "/solutions/enterprise-dispatch-solutions", icon: Zap, desc: "Mesh-driven logistics" }
        ]
      }
    ]
  },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        title: "Response",
        items: [
          { label: "Roadside Assistance", href: "/services/roadside-assistance", icon: Navigation, desc: "24/7 emergency support" },
          { label: "Heavy-Duty Towing", href: "/services/heavy-duty-towing", icon: Truck, desc: "Class 8 specialized" },
          { label: "Mobile Repairs", href: "/services/mobile-repairs", icon: Wrench, desc: "On-site mechanical" }
        ]
      },
      {
        title: "Coordination",
        items: [
          { label: "Recovery & Winch-outs", href: "/services/recovery-winchouts", icon: Globe, desc: "Off-road & complex" },
          { label: "Trip Continuation", href: "/services/trip-continuation", icon: Zap, desc: "Travel logistics" },
          { label: "Vendor Coordination", href: "/services/vendor-coordination", icon: Settings, desc: "Network management" }
        ]
      }
    ]
  },
  {
    label: "Operations",
    href: "/operations",
    columns: [
      {
        title: "Command Center",
        items: [
          { label: "24/7 Dispatch Center", href: "/operations/24-7-dispatch-center", icon: Zap, desc: "Global coordination" },
          { label: "Vendor Network", href: "/operations/vendor-network", icon: Globe, desc: "Certified partners" },
          { label: "SLA Management", href: "/operations/sla-management", icon: Shield, desc: "Performance tracking" }
        ]
      },
      {
        title: "Workflows",
        items: [
          { label: "Call Center Operations", href: "/operations/call-center-operations", icon: Headphones, desc: "Voice & digital" },
          { label: "Escalation Workflows", href: "/operations/escalation-workflows", icon: BarChart3, desc: "Critical pathing" }
        ]
      }
    ]
  },
  {
    label: "Technology",
    href: "/technology",
    columns: [
      {
        title: "Platforms",
        items: [
          { label: "Real-Time Tracking", href: "/tech/tracking", icon: Navigation, desc: "Live GPS telemetry" },
          { label: "API Integrations", href: "/tech/api", icon: Terminal, desc: "M2M connectivity" },
          { label: "Reporting Dashboards", href: "/tech/analytics", icon: BarChart3, desc: "BI intelligence" }
        ]
      },
      {
        title: "Infrastructure",
        items: [
          { label: "Case Management", href: "/tech/cases", icon: Settings, desc: "Full lifecycle tracking" },
          { label: "Fleet Visibility", href: "/tech/visibility", icon: Cpu, desc: "Global asset mesh" }
        ]
      }
    ]
  },
  {
    label: "Company",
    href: "/company",
    columns: [
      {
        title: "Company",
        items: [
          { label: "Overview", href: "/company/overview", icon: Globe, desc: "Our history & mission" },
          { label: "Infrastructure", href: "/about/infrastructure", icon: Cpu, desc: "Global mesh specs" },
          { label: "Leadership", href: "/about/leadership", icon: Shield, desc: "Executive team" }
        ]
      },
      {
        title: "Join Us",
        items: [
          { label: "Careers", href: "/company/careers", icon: Zap, desc: "Shape mobility future" },
          { label: "Contact", href: "/company/contact", icon: Headphones, desc: "24/7 support channels" }
        ]
      }
    ]
  }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { isAuthenticated, logout, user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 pb-2 pointer-events-none">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "relative mx-auto pointer-events-auto rounded-2xl transition-all duration-300",
            scrolled ? "w-full lg:w-[95%] shadow-[0_20px_40px_rgba(0,0,0,0.4)]" : "w-full lg:w-full"
          )}
        >
          {/* Top-Left Shine Effect */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ zIndex: 0 }}>
             {/* Large ambient blue shine emanating from top-left */}
             <div className="absolute -top-12 -left-12 w-[250px] h-[250px] bg-[#2F80FF]/20 blur-[50px] rounded-full" />
             {/* Intense core shine right at the corner */}
             <div className="absolute -top-6 -left-6 w-[120px] h-[120px] bg-[#2F80FF]/40 blur-[30px] rounded-full" />
          </div>

          {/* Sharp Edge Gradient (Matches Image Inner Border) */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
             <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-[#2F80FF] to-transparent" />
             <div className="absolute top-0 left-0 w-[1px] h-1/2 bg-gradient-to-b from-[#2F80FF] to-transparent" />
          </div>

          {/* Glass Navbar Container */}
          <div className="relative bg-[#0A192F]/70 backdrop-blur-[18px] border border-white/[0.08] rounded-2xl flex items-center justify-between h-16 px-6">
            
            {/* Logo Section */}
            <div className="flex items-center gap-3 shrink-0">
               <Link href="/" className="flex items-center gap-3 group relative z-10">
                  <div className="flex items-center italic font-black text-2xl tracking-tighter mr-1">
                     <span className="text-white">N</span>
                     <span className="text-[#2F80FF]">T</span>
                  </div>
                  <div className="hidden sm:flex flex-col">
                     <span className="text-white font-bold text-[13px] leading-tight tracking-wide group-hover:text-white/80 transition-colors">
                        NATIONWIDE<br/>TRANS INC.
                     </span>
                  </div>
               </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 h-full">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="h-full px-4 flex items-center relative group"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button className="flex items-center gap-1.5 text-[13px] font-bold text-[#94A3B8] hover:text-white transition-colors py-2 relative z-10">
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" />
                  </button>

                  {/* Dropdown Panel */}
                  <AnimatePresence>
                    {activeMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] cursor-default"
                      >
                        <GlassPanel className="p-6 border-white/10 bg-[#081120]/95 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          <div className="grid grid-cols-2 gap-8">
                            {item.columns.map((col, idx) => (
                              <div key={idx}>
                                <h4 className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest mb-4 flex items-center gap-2">
                                   <div className="h-px flex-1 bg-gradient-to-r from-[#2F80FF]/50 to-transparent" />
                                   {col.title}
                                   <div className="h-px flex-1 bg-gradient-to-l from-[#2F80FF]/50 to-transparent" />
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        href={link.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/[0.04] transition-colors group/link"
                                        onClick={() => setActiveMenu(null)}
                                      >
                                        <div className="mt-0.5 h-8 w-8 rounded-md bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover/link:border-[#2F80FF]/30 group-hover/link:bg-[#2F80FF]/10 transition-colors">
                                          <link.icon className="h-4 w-4 text-[#94A3B8] group-hover/link:text-[#2F80FF] transition-colors" />
                                        </div>
                                        <div>
                                          <div className="text-[13px] font-bold text-white group-hover/link:text-[#2F80FF] transition-colors">{link.label}</div>
                                          <div className="text-[11px] text-[#94A3B8] mt-0.5">{link.desc}</div>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </GlassPanel>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4 shrink-0 relative z-10">
              {isMounted && isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="text-[13px] font-bold text-[#94A3B8] hover:text-white transition-colors">
                    Dashboard
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout} className="text-[#94A3B8] hover:text-white hover:bg-white/5 h-8 px-3 rounded-lg text-[13px] font-bold">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Link href="/auth/login" className="text-[13px] font-bold text-[#94A3B8] hover:text-white transition-colors">
                    Partner Login
                  </Link>
                  <Button 
                    className="bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold h-9 px-5 rounded-xl shadow-[0_4px_14px_rgba(47,128,255,0.3)] hover:shadow-[0_6px_20px_rgba(47,128,255,0.4)] transition-all hover:-translate-y-0.5 text-[12px] relative overflow-hidden group"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
                     Partner With Us
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#94A3B8] hover:text-white transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-[80px] left-4 right-4 bg-[#081120]/95 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl pointer-events-auto"
          >
            <div className="p-4 max-h-[70vh] overflow-y-auto flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <h3 className="text-[10px] font-bold text-[#2F80FF] uppercase tracking-widest px-2">{item.label}</h3>
                  <div className="space-y-2">
                    {item.columns.flatMap(col => col.items).map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#2F80FF]/30 transition-colors"
                      >
                        <link.icon className="h-4 w-4 text-[#94A3B8]" />
                        <span className="text-[13px] font-bold text-white">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                 {isMounted && isAuthenticated ? (
                    <>
                       <Link href="/dashboard" className="w-full">
                          <Button className="w-full bg-white/5 text-white hover:bg-white/10">Dashboard</Button>
                       </Link>
                       <Button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full border border-red-500/20 text-red-400 bg-red-500/10 hover:bg-red-500/20">
                          Logout
                       </Button>
                    </>
                 ) : (
                    <>
                       <Link href="/auth/login" className="w-full">
                          <Button className="w-full bg-white/5 text-white hover:bg-white/10 font-bold">Partner Login</Button>
                       </Link>
                       <Link href="/company/contact" className="w-full">
                          <Button className="w-full bg-[#2F80FF] hover:bg-[#2F80FF]/90 text-white font-bold shadow-[0_4px_14px_rgba(47,128,255,0.3)]">
                             Partner With Us
                          </Button>
                       </Link>
                    </>
                 )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
