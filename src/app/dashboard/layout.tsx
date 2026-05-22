"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Activity, 
  Map, 
  Truck, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search,
  ChevronRight,
  User,
  ShieldAlert,
  Terminal,
  Clock,
  CreditCard,
  FileText,
  AlertTriangle
} from "lucide-react";
import { useStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: Activity, label: "Dispatch Hub", href: "/dashboard/operations" },
  { icon: ShieldAlert, label: "Incident Tracking", href: "/dashboard/incidents" },
  { icon: Truck, label: "Vendor Intelligence", href: "/dashboard/vendors" },
  { icon: Clock, label: "SLA Analytics", href: "/dashboard/sla" },
  { icon: Terminal, label: "API Mesh", href: "/dashboard/api" },
  { icon: AlertTriangle, label: "Escalations", href: "/dashboard/escalations" },
  { icon: CreditCard, label: "Billing Systems", href: "/dashboard/billing" },
  { icon: FileText, label: "Enterprise Reporting", href: "/dashboard/reporting" },
  { icon: Settings, label: "Node Config", href: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { user, logout, isAuthenticated } = useStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated || !user) return null;

  return (
    <div className="min-h-screen bg-[#060D18] flex text-foreground dark:text-white overflow-hidden">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 280 : 80 }}
        className="bg-brand-navy border-r border-brand-border h-screen sticky top-0 flex flex-col z-50"
      >
        <div className="p-6 h-20 flex items-center justify-between overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-brand-blue/20 border border-brand-blue/50 flex items-center justify-center flex-shrink-0">
              <span className="font-mono font-bold text-brand-blue">NT</span>
            </div>
            {isSidebarOpen && (
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-bold text-lg tracking-tight whitespace-nowrap"
              >
                Nationwide Roadside Assist
              </motion.span>
            )}
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto overflow-x-hidden">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  isActive 
                    ? "bg-brand-blue/10 text-brand-blue border border-brand-blue/20 shadow-[0_0_20px_rgba(47,128,255,0.1)]" 
                    : "text-brand-slate hover:bg-white/5 hover:text-foreground dark:text-white"
                }`}
              >
                <item.icon className={`w-5 h-5 flex-shrink-0 ${isActive ? "text-brand-blue" : "group-hover:text-foreground dark:text-white"}`} />
                {isSidebarOpen && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                )}
                {isActive && isSidebarOpen && (
                  <motion.div 
                    layoutId="activeTab"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-brand-blue shadow-[0_0_10px_#2F80FF]" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-brand-border space-y-2">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center gap-4 px-4 py-3 text-brand-slate hover:text-foreground dark:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            {isSidebarOpen && <span className="text-sm font-medium">Collapse Menu</span>}
          </button>
          <button
            onClick={() => logout()}
            className="w-full flex items-center gap-4 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all"
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="text-sm font-medium">Log Out</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 relative h-screen overflow-y-auto">
        {/* Header */}
        <header className={`h-20 sticky top-0 z-40 flex items-center justify-between px-8 transition-all duration-300 ${scrolled ? "bg-[#060D18]/80 backdrop-blur-md border-b border-brand-border" : "bg-transparent"}`}>
          <div className="flex items-center gap-4 flex-1">
             <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-slate" />
                <input 
                  type="text" 
                  placeholder="Search infrastructure, incidents, or partners..."
                  className="w-full bg-brand-navy/50 border border-brand-border rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-brand-blue/50 transition-all"
                />
             </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
               <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-mono text-[10px]">
                 API: CONNECTED
               </Badge>
            </div>
            
            <button className="relative p-2 text-brand-slate hover:text-foreground dark:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-orange rounded-full border-2 border-[#060D18]" />
            </button>

            <div className="h-8 w-px bg-brand-border mx-2" />

            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-foreground dark:text-white leading-none">{user.name}</p>
                <p className="text-[10px] text-brand-slate uppercase tracking-wider mt-1">{user.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-brand-blue/20 border border-brand-blue/40 flex items-center justify-center overflow-hidden">
                <User className="w-6 h-6 text-brand-blue" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </div>

        {/* Ambient Background Glows */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 left-1/4 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      </main>
    </div>
  );
}
