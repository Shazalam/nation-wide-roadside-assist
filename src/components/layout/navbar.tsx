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
  ArrowRight,
  User,
  LogOut,
  Bell,
  Truck,
  Settings,
  Headphones,
  Wrench,
  Navigation
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
          { label: "Mobile Repairs", href: "/services/repairs", icon: Wrench, desc: "On-site mechanical" }
        ]
      },
      {
        title: "Coordination",
        items: [
          { label: "Recovery & Winch-Outs", href: "/services/recovery", icon: Globe, desc: "Off-road & complex" },
          { label: "Trip Continuation", href: "/services/trip", icon: Zap, desc: "Travel logistics" },
          { label: "Vendor Coordination", href: "/services/vendors", icon: Settings, desc: "Network management" }
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
          { label: "24/7 Dispatch Center", href: "/operations/dispatch", icon: Zap, desc: "Global coordination" },
          { label: "Vendor Network", href: "/operations/vendors", icon: Globe, desc: "Certified partners" },
          { label: "SLA Management", href: "/operations/sla", icon: Shield, desc: "Performance tracking" }
        ]
      },
      {
        title: "Workflows",
        items: [
          { label: "Call Center Operations", href: "/operations/call-center", icon: Headphones, desc: "Voice & digital" },
          { label: "Escalation Workflows", href: "/operations/escalations", icon: BarChart3, desc: "Critical pathing" }
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
    label: "About",
    href: "/about",
    columns: [
      {
        title: "Company",
        items: [
          { label: "Overview", href: "/about/company", icon: Globe, desc: "Our history & mission" },
          { label: "Infrastructure", href: "/about/infrastructure", icon: Cpu, desc: "Global mesh specs" },
          { label: "Leadership", href: "/about/leadership", icon: Shield, desc: "Executive team" }
        ]
      },
      {
        title: "Join Us",
        items: [
          { label: "Careers", href: "/careers", icon: Zap, desc: "Shape mobility future" },
          { label: "Contact", href: "/contact", icon: Headphones, desc: "24/7 support channels" }
        ]
      }
    ]
  }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const { isAuthenticated, logout, user } = useAuth();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        scrolled
          ? "bg-brand-bg/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-brand-blue flex items-center justify-center shadow-[0_0_20px_rgba(47,128,255,0.4)] group-hover:scale-105 transition-transform duration-300">
            <Shield className="text-white h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-tight leading-none">NATIONWIDE</span>
            <span className="text-[10px] font-black text-brand-blue tracking-[0.3em] mt-1">TRANS INC.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              onMouseEnter={() => setActiveMenu(item.label)}
              onMouseLeave={() => setActiveMenu(null)}
              className="relative px-4 py-2"
            >
              <button className={cn(
                "flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest transition-colors relative group py-2",
                activeMenu === item.label ? "text-brand-blue" : "text-brand-slate hover:text-white"
              )}>
                {item.label}
                <ChevronDown className={cn(
                  "h-3 w-3 transition-transform duration-300",
                  activeMenu === item.label && "rotate-180 text-brand-blue"
                )} />
                {/* Active Underline */}
                {activeMenu === item.label && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-blue shadow-[0_0_8px_rgba(47,128,255,0.8)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>

              {/* Mega Menu Dropdown */}
              <AnimatePresence>
                {activeMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] z-50 pt-4"
                  >
                    <GlassPanel className="p-8 grid grid-cols-2 gap-10 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                      {item.columns.map((column) => (
                        <div key={column.title} className="space-y-6">
                          <h4 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em] border-b border-brand-blue/20 pb-2">
                            {column.title}
                          </h4>
                          <div className="space-y-4">
                            {column.items.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-start gap-4 group/sub"
                              >
                                <div className="h-10 w-10 shrink-0 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center group-hover/sub:bg-brand-blue/10 group-hover/sub:border-brand-blue/20 transition-all">
                                  <subItem.icon className="h-5 w-5 text-brand-slate group-hover/sub:text-brand-blue transition-colors" />
                                </div>
                                <div>
                                  <p className="text-sm font-bold text-white group-hover/sub:text-brand-blue transition-colors">
                                    {subItem.label}
                                  </p>
                                  <p className="text-[10px] text-brand-slate mt-1 line-clamp-1">
                                    {subItem.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Featured Promo in Mega Menu */}
                      <div className="col-span-2 mt-4 pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                          <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Mesh Network Live v4.2</span>
                        </div>
                        <Link href="/developer-api" className="text-[10px] font-bold text-brand-blue uppercase tracking-widest flex items-center gap-1 hover:underline">
                          Developer Portal <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </GlassPanel>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Auth Actions */}
        <div className="hidden lg:flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-brand-slate hover:text-white transition-colors relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 bg-brand-blue rounded-full border-2 border-brand-bg" />
              </Button>
              <div className="h-8 w-[1px] bg-white/10 mx-2" />
              <Link href="/dashboard">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(47,128,255,0.3)] gap-2">
                  <User className="h-4 w-4" /> Operations
                </Button>
              </Link>
              <Button variant="ghost" onClick={logout} className="text-red-400 hover:bg-red-500/10 gap-2 font-bold uppercase tracking-widest text-xs">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-brand-slate hover:text-white font-bold uppercase tracking-widest text-xs">
                  Access Node
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(47,128,255,0.3)] h-11 px-6">
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-bg border-b border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 space-y-8">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-4">
                  <h3 className="text-[10px] font-black text-brand-blue uppercase tracking-[0.3em]">
                    {item.label}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {item.columns.flatMap(c => c.items).map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-sm font-bold text-brand-slate hover:text-white transition-colors"
                      >
                        <sub.icon className="h-4 w-4 text-brand-blue" />
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <div className="pt-8 border-t border-white/5 flex flex-col gap-4">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-brand-blue h-12 text-white font-bold uppercase tracking-widest">Dashboard</Button>
                    </Link>
                    <Button variant="ghost" onClick={() => { logout(); setIsMobileMenuOpen(false); }} className="w-full text-red-400">Logout</Button>
                  </>
                ) : (
                  <>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full border-white/10 text-white h-12 font-bold uppercase tracking-widest">Login</Button>
                    </Link>
                    <Link href="/register" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-brand-blue h-12 text-white font-bold uppercase tracking-widest">Get Started</Button>
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
