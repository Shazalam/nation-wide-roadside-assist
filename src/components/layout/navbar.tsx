'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '@/providers/auth-provider';
import { useDispatch } from 'react-redux';
import { setPartnershipOpen, setDispatchOpen } from '@/store';
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
  User,
  Lock,
  FileText,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

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
          { label: "Medium & Light Duty", href: "/services/medium-light-duty-towing", icon: Zap, desc: "Rapid RSA coordination" },
          { label: "Tire Change Assistance", href: "/services/tire-change-assistance", icon: Settings, desc: "Enterprise tire response" },
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
        ]
      },
      {
        title: "Workflows",
        items: [
          { label: "Call Center Operations", href: "/operations/call-center-operations", icon: Headphones, desc: "Voice & digital" },
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
          { label: "Capability Report", href: "/company/capability-report", icon: FileText, desc: "Strategic operational briefing" },
          { label: "Contact", href: "/company/contact", icon: Headphones, desc: "24/7 support channels" }
        ]
      },
      {
        title: "Governance",
        items: [
          { label: "Privacy Policy", href: "/legal/privacy-policy", icon: Shield, desc: "Data protection infra" },
          { label: "Terms of Service", href: "/legal/terms-of-service", icon: FileText, desc: "Operational governance" },
          { label: "Cookie Policy", href: "/legal/cookie-policy", icon: Eye, desc: "Tracking transparency" },
          // { label: "Security Hub", href: "/legal/security", icon: Lock, desc: "Infrastructure trust" },
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
  const dispatch = useDispatch();
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
    <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 pt-6 pointer-events-none">
      <div className="mx-auto w-full max-w-[1600px]">
        <motion.div
          initial={false}
          animate={{
            width: scrolled ? "94%" : "100%",
            y: scrolled ? 6 : 0,
            backgroundColor: scrolled ? "rgba(10, 17, 33, 0.85)" : "rgba(10, 17, 33, 0.35)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(12px)",
            borderColor: scrolled ? "rgba(47, 128, 255, 0.25)" : "rgba(255, 255, 255, 0.08)",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Smooth quintic ease-out
          }}
          className={cn(
            "relative mx-auto pointer-events-auto rounded-[2rem] border",
            scrolled ? "shadow-[0_20px_50px_rgba(0,0,0,0.4)]" : "shadow-none"
          )}
        >
          {/* Top-Left Shine Effect */}
          <div className="absolute inset-0 rounded-[2rem] pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
            <AnimatePresence>
              {!scrolled && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -top-12 -left-12 w-[300px] h-[300px] bg-brand-blue/20 blur-[60px] rounded-full"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Glass Navbar Container Content */}
          <div className="relative flex items-center justify-between h-16 transition-all duration-500">

            {/* Logo Section */}
            <div className="flex items-center gap-3 shrink-0">
              <Link href="/" className="flex items-center gap-3 group relative z-10">
                <Logo className="transition-transform duration-300 group-hover:scale-105" size={36} />
                <div className="hidden sm:flex flex-col">
                  <span className="text-foreground font-extrabold text-[12.5px] leading-none tracking-wider uppercase group-hover:text-foreground/80 transition-colors">
                    NATIONWIDE
                  </span>
                  <span className="text-[10px] font-black text-brand-blue tracking-[0.22em] mt-0.5 uppercase">
                    ROADSIDE ASSIST
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 absolute left-1/2 -translate-x-1/2 h-full">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="h-full px-4 flex items-center relative group"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button 
                    className="flex items-center gap-2 text-[15px] font-black text-brand-slate hover:text-foreground transition-colors py-2 relative z-10 uppercase tracking-tight"
                    aria-haspopup="true"
                    aria-expanded={activeMenu === item.label}
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 opacity-50 group-hover:rotate-180 transition-transform duration-300" aria-hidden="true" />
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
                        <GlassPanel className="p-6 border-brand-border bg-card/95 shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                          <div className="grid grid-cols-2 gap-8">
                            {item.columns.map((col, idx) => (
                              <div key={idx}>
                                <h4 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest mb-4 flex items-center gap-2">
                                  <div className="h-px flex-1 bg-gradient-to-r from-brand-blue/50 to-transparent" />
                                  {col.title}
                                  <div className="h-px flex-1 bg-gradient-to-l from-brand-blue/50 to-transparent" />
                                </h4>
                                <ul className="space-y-2">
                                  {col.items.map((link, i) => (
                                    <li key={i}>
                                      <Link
                                        href={link.href}
                                        className="flex items-start gap-3 p-2 rounded-lg hover:bg-foreground/[0.04] transition-colors group/link"
                                        onClick={() => setActiveMenu(null)}
                                      >
                                        <div className="mt-0.5 h-8 w-8 rounded-md bg-foreground/[0.03] border border-brand-border flex items-center justify-center group-hover/link:border-brand-blue/30 group-hover/link:bg-brand-blue/10 transition-colors">
                                          <link.icon className="h-4 w-4 text-brand-slate group-hover/link:text-brand-blue transition-colors" />
                                        </div>
                                        <div>
                                          <div className="text-[13px] font-bold text-foreground group-hover/link:text-brand-blue transition-colors">{link.label}</div>
                                          <div className="text-[11px] text-brand-slate mt-0.5">{link.desc}</div>
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
            <div className="hidden lg:flex items-center gap-6 shrink-0 relative z-10">
              {isMounted && isAuthenticated ? (
                <div className="flex items-center gap-4">
                  <Link href="/dashboard" className="text-[13px] font-bold text-brand-slate hover:text-foreground transition-colors">
                    Dashboard
                  </Link>
                  <Button variant="ghost" size="sm" onClick={logout} className="text-brand-slate hover:text-foreground hover:bg-foreground/5 h-8 px-3 rounded-lg text-[13px] font-bold">
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </Button>
                </div>
              ) : (
                <>
                  <Button
                    onClick={() => dispatch(setDispatchOpen(true))}
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-10 px-5 rounded-xl shadow-[0_4px_14px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-0.5 text-[12px] uppercase tracking-wider group"
                  >
                    Request Dispatch
                  </Button>
                  <Button
                    onClick={() => dispatch(setPartnershipOpen(true))}
                    className="bg-brand-blue hover:bg-brand-blue/90 text-white font-black h-10 px-5 rounded-xl shadow-[0_4px_14px_rgba(47,128,255,0.3)] transition-all hover:-translate-y-0.5 text-[12px] uppercase tracking-wider group overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-out" />
                    Partner With Us
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-brand-slate hover:text-foreground transition-colors relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
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
            className="lg:hidden absolute top-[80px] left-4 right-4 bg-brand-bg/95 backdrop-blur-2xl border border-brand-border rounded-2xl overflow-hidden shadow-2xl pointer-events-auto transition-colors duration-500"
          >
            <div className="p-4 max-h-[70vh] overflow-y-auto flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <h3 className="text-[10px] font-bold text-brand-blue uppercase tracking-widest px-2">{item.label}</h3>
                  <div className="space-y-2">
                    {item.columns.flatMap(col => col.items).map((link, i) => (
                      <Link
                        key={i}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 p-3 rounded-xl bg-foreground/[0.02] border border-brand-border hover:border-brand-blue/30 transition-colors"
                      >
                        <link.icon className="h-4 w-4 text-brand-slate" />
                        <span className="text-[13px] font-bold text-foreground">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Mobile PDF Download removed */}

              <div className="pt-4 border-t border-brand-border flex flex-col gap-3">
                {isMounted && isAuthenticated ? (
                  <>
                    <Link href="/dashboard" className="w-full">
                      <Button className="w-full bg-foreground/5 text-foreground hover:bg-foreground/10">Dashboard</Button>
                    </Link>
                    <Button onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full border border-red-500/20 text-red-500 bg-red-500/10 hover:bg-red-500/20">
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => { dispatch(setDispatchOpen(true)); setIsMobileMenuOpen(false); }}
                      className="w-full bg-foreground/5 text-foreground hover:bg-foreground/10 font-bold"
                    >
                      Request Dispatch
                    </Button>
                    <Button
                      onClick={() => { dispatch(setPartnershipOpen(true)); setIsMobileMenuOpen(false); }}
                      className="w-full bg-brand-blue hover:bg-brand-blue/90 text-foreground dark:text-white font-bold shadow-[0_4px_14px_rgba(47,128,255,0.3)]"
                    >
                      Partner With Us
                    </Button>
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
