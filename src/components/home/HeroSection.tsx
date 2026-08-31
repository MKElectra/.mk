"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Sparkles, CheckCircle } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

const BADGES = ["Software", "Embedded & IoT", "Mechanical", "3D Printing", "Automation", "AI/ML"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />

      {/* Orange gradient blob */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-brand-100 blur-[80px] opacity-60 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-orange-50 blur-[80px] opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ─── Left: Copy ─── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {/* Kicker */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-500" />
              <span className="text-xs font-semibold text-brand-700">
                Engineering & Technology Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl lg:text-6xl font-black text-ink-900 tracking-tight leading-[1.1]">
              We Build What{" "}
              <span className="relative inline-block">
                <span className="gradient-text">Engineers</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-1 bg-brand-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                />
              </span>
              {" "}Imagine.
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp} className="text-lg text-ink-500 leading-relaxed max-w-lg">
              MK Electra integrates software, embedded hardware, mechanical design and 3D
              manufacturing — from concept to production-ready product.
            </motion.p>

            {/* Service badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
              {BADGES.map((b, i) => (
                <motion.span
                  key={b}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.07 }}
                  className="px-3 py-1 text-xs font-semibold rounded-full bg-surface-1 border border-surface-3 text-ink-600"
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm transition-all shadow-md-orange hover:shadow-lg-orange hover:-translate-y-0.5"
              >
                Start a Project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-surface-3 hover:border-brand-300 bg-white hover:bg-brand-50 text-ink-700 font-semibold text-sm transition-all"
              >
                Explore Services
              </Link>
              <a
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-emerald-200 hover:border-emerald-400 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-sm transition-all"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp
              </a>
            </motion.div>

            {/* Trust points */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              {["100% In-House Design", "Idea to Production", "B2B & B2C Ready"].map((pt) => (
                <div key={pt} className="flex items-center gap-1.5 text-xs text-ink-500">
                  <CheckCircle className="w-3.5 h-3.5 text-brand-500" />
                  {pt}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── Right: Animated Visual Card ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-white rounded-3xl border border-surface-2 shadow-card p-6 space-y-4">
              {/* Card header */}
              <div className="flex items-center justify-between pb-3 border-b border-surface-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono text-ink-300">MK_SYSTEM_V2</span>
              </div>

              {/* 4 Division tiles */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "💻", title: "Software", color: "bg-orange-50 border-orange-200", badge: "React · Next.js · Python" },
                  { icon: "🔌", title: "Embedded & IoT", color: "bg-blue-50 border-blue-200", badge: "ESP32 · STM32 · MQTT" },
                  { icon: "⚙️", title: "Mechanical", color: "bg-slate-50 border-slate-200", badge: "3D CAD · Solidworks" },
                  { icon: "🖨️", title: "3D Printing", color: "bg-amber-50 border-amber-200", badge: "PLA · PETG · ABS · ASA" },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className={`p-4 rounded-xl border ${item.color}`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm font-bold text-ink-900 mt-2">{item.title}</p>
                    <p className="text-[10px] text-ink-400 font-mono mt-1">{item.badge}</p>
                  </motion.div>
                ))}
              </div>

              {/* Status bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex items-center justify-between p-3 rounded-xl bg-surface-1 border border-surface-2"
              >
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-xs font-semibold text-ink-700">Engineering Desk Active</span>
                </div>
                <span className="text-[10px] text-ink-400 font-mono">Open for inquiries</span>
              </motion.div>
            </div>

            {/* Floating badge 1 */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl border border-surface-2 shadow-card px-4 py-2.5 flex items-center gap-2"
            >
              <span className="text-base">🏭</span>
              <div>
                <p className="text-xs font-bold text-ink-900">Turnkey Production</p>
                <p className="text-[10px] text-ink-400">Idea → Delivery</p>
              </div>
            </motion.div>

            {/* Floating badge 2 */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-5 -left-5 bg-brand-500 rounded-2xl shadow-md-orange px-4 py-2.5 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <div>
                <p className="text-xs font-bold text-white">WhatsApp Direct</p>
                <p className="text-[10px] text-brand-200 font-mono">{COMPANY_INFO.phones[0].display}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ─── Stat Strip ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-16 pt-8 border-t border-surface-2 grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {[
            { value: "4", label: "Core Divisions" },
            { value: "100%", label: "In-House Build" },
            { value: "B2B + B2C", label: "3D Print Options" },
            { value: "Turnkey", label: "Idea to Production" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <p className="text-2xl font-black text-ink-900 font-mono">{s.value}</p>
              <p className="text-xs text-ink-400 mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
