"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, Code2, Cpu, Cog, Printer,
  Zap, Bot, Rocket, ArrowRight, MessageSquare, Phone
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

const SERVICES_MENU = [
  {
    icon: Code2,
    title: "Software Engineering",
    desc: "Web, mobile, enterprise & cloud systems",
    href: "/services/software",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: Cpu,
    title: "Embedded & IoT",
    desc: "Firmware, ESP32, STM32, industrial protocols",
    href: "/services/embedded-iot",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    desc: "3D CAD, machine design, jigs & enclosures",
    href: "/services/mechanical",
    color: "text-slate-600",
    bg: "bg-slate-50",
  },
  {
    icon: Printer,
    title: "3D Printing & Manufacturing",
    desc: "Wholesale B2B & retail B2C, all materials",
    href: "/3d-printing",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Zap,
    title: "Industrial Automation",
    desc: "PLC, HMI, SCADA, motor control",
    href: "/services/industrial-automation",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Bot,
    title: "AI & Computer Vision",
    desc: "Defect detection, edge AI, predictive maintenance",
    href: "/services/ai-ml",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const NAV = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_1px_0_0_#e2e8f0]"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-6">

          {/* ─── Logo ─── */}
          <Link href="/" className="flex flex-col shrink-0 group">
            <div className="flex items-center leading-none">
              <span className="text-xl font-black text-ink-900 tracking-tight">M</span>
              <span className="text-xl font-black text-brand-500 tracking-tight">K</span>
              <span className="w-px h-4 bg-ink-200 mx-2" />
              <span className="text-xl font-black text-ink-900 tracking-tight">ELECTRA</span>
            </div>
            <motion.div
              className="h-[2.5px] bg-brand-500 rounded-full mt-0.5"
              initial={{ width: "40%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-[9px] text-ink-400 font-mono tracking-widest mt-0.5">
              Built on Trust. Powered by Quality.
            </span>
          </Link>

          {/* ─── Desktop Navigation ─── */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  servicesOpen
                    ? "text-brand-600 bg-brand-50"
                    : "text-ink-500 hover:text-ink-900 hover:bg-surface-1"
                }`}
              >
                Services
                <motion.span
                  animate={{ rotate: servicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </motion.span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[560px] bg-white rounded-2xl shadow-dropdown border border-surface-3 p-4 z-50"
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-surface-3 rotate-45 rounded-sm" />

                    <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink-300 mb-3 px-1">
                      All Services
                    </p>

                    <div className="grid grid-cols-2 gap-1.5">
                      {SERVICES_MENU.map((svc, i) => (
                        <motion.div
                          key={svc.href}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          <Link
                            href={svc.href}
                            onClick={() => setServicesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-1 transition-all group"
                          >
                            <div className={`w-8 h-8 rounded-lg ${svc.bg} flex items-center justify-center shrink-0`}>
                              <svc.icon className={`w-4 h-4 ${svc.color}`} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition-colors leading-tight">
                                {svc.title}
                              </p>
                              <p className="text-xs text-ink-400 mt-0.5 leading-tight">{svc.desc}</p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-3 pt-3 border-t border-surface-2 flex items-center justify-between px-1">
                      <Link
                        href="/services"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                      >
                        View all services <ArrowRight className="w-3 h-3" />
                      </Link>
                      <Link
                        href="/quote"
                        onClick={() => setServicesOpen(false)}
                        className="text-xs font-semibold bg-brand-500 hover:bg-brand-600 text-white px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Get a Quote
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-sm font-medium text-ink-500 hover:text-ink-900 hover:bg-surface-1 transition-all animated-underline"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ─── Right CTAs ─── */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {COMPANY_INFO.phones[0].display}
            </a>
            <div className="w-px h-4 bg-surface-3" />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-all shadow-sm-orange hover:shadow-md-orange hover:-translate-y-px"
            >
              Get in Touch
            </Link>
          </div>

          {/* ─── Mobile toggle ─── */}
          <button
            className="lg:hidden p-2 text-ink-500 hover:text-ink-900 rounded-lg hover:bg-surface-1 transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* ─── Mobile Navigation Drawer ─── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-ink-900/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-80 bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-surface-2">
                <div className="flex items-center gap-1">
                  <span className="font-black text-ink-900">M</span>
                  <span className="font-black text-brand-500">K</span>
                  <span className="w-px h-3.5 bg-ink-200 mx-1.5" />
                  <span className="font-black text-ink-900 text-sm">ELECTRA</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-ink-400 hover:text-ink-900 hover:bg-surface-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-1">
                {/* Services section */}
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-ink-700 hover:bg-surface-1 transition-colors"
                >
                  Services
                  <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }}>
                    <ChevronDown className="w-4 h-4 text-ink-400" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-3 pt-1 space-y-1">
                        {SERVICES_MENU.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-ink-600 hover:text-ink-900 hover:bg-surface-1 transition-colors"
                          >
                            <svc.icon className={`w-4 h-4 ${svc.color}`} />
                            {svc.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {NAV.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-xl text-sm font-semibold text-ink-700 hover:bg-surface-1 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Drawer footer */}
              <div className="p-4 border-t border-surface-2 space-y-3">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone.raw}
                    href={getWhatsAppLink(phone.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-emerald-600"
                  >
                    <MessageSquare className="w-4 h-4" /> {phone.display}
                  </a>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16" />
    </>
  );
}
