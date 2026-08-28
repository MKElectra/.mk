"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Logo } from "@/components/ui/Logo";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  ArrowRight,
  MessageSquare,
  Sparkles,
  Code2,
  Cpu,
  Cog,
  Printer,
  Activity,
  Layers,
  CheckCircle2,
  Zap,
  ShieldCheck,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-navy-950 overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Architectural Canvas with subtle electric orange & cyan grids */}
      <div className="absolute inset-0 bg-tech-grid-orange opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Core Positioning Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Top Engineering Kicker */}
            <div className="inline-flex items-center gap-2 p-1.5 px-3 rounded-full bg-navy-900 border border-brand-500/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
              <span className="text-xs font-mono font-medium text-steel-200">
                MULTIDISCIPLINARY ENGINEERING & TECHNOLOGY
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                Engineering Ideas.{" "}
                <span className="block bg-gradient-to-r from-brand-400 via-brand-500 to-amber-300 bg-clip-text text-transparent">
                  Building What Matters.
                </span>
              </h1>
              <p className="text-base sm:text-lg font-mono text-brand-400 font-semibold tracking-wide flex items-center justify-center lg:justify-start gap-2">
                <span>Software</span>
                <span className="text-steel-600">•</span>
                <span>Embedded</span>
                <span className="text-steel-600">•</span>
                <span>Mechanical</span>
                <span className="text-steel-600">•</span>
                <span>3D Printing</span>
              </p>
            </div>

            {/* Body */}
            <p className="text-base sm:text-lg text-steel-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              MK Electra delivers integrated engineering and technology solutions — from enterprise
              software and embedded IoT hardware to precision industrial machines, AI solutions and
              functional 3D-printed components.
            </p>

            {/* CTAs: Primary, Secondary, Third (WhatsApp) */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-bold px-8 bg-brand-500 hover:bg-brand-600 shadow-brand-500/30 text-white"
              >
                Start a Project
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto font-semibold border-steel-700 hover:border-brand-400"
              >
                Explore Capabilities
              </Button>

              <Button
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
                external
                variant="whatsapp"
                size="lg"
                leftIcon={<MessageSquare className="w-4 h-4" />}
                className="w-full sm:w-auto font-medium"
              >
                WhatsApp Us
              </Button>
            </div>

            {/* Supporting Trust Badges */}
            <div className="pt-6 border-t border-steel-800/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
              <div className="p-3 rounded-xl bg-navy-900/60 border border-steel-800">
                <span className="block text-xl sm:text-2xl font-bold font-mono text-white">4</span>
                <span className="text-[11px] text-steel-400 uppercase font-mono">Core Divisions</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-brand-500/20">
                <span className="block text-xl sm:text-2xl font-bold font-mono text-brand-400">100%</span>
                <span className="text-[11px] text-steel-400 uppercase font-mono">In-House Design</span>
              </div>
              <div className="p-3 rounded-xl bg-navy-900/60 border border-steel-800">
                <span className="block text-xl sm:text-2xl font-bold font-mono text-amber-400">Turnkey</span>
                <span className="text-[11px] text-steel-400 uppercase font-mono">Idea to Product</span>
              </div>
            </div>
          </div>

          {/* Right Column: Coherent Engineering Ecosystem Interactive Composition */}
          <div className="lg:col-span-5 relative">
            {/* Main Interactive Diagram Card */}
            <div className="relative rounded-2xl bg-navy-900/95 border border-steel-700/90 shadow-2xl p-6 sm:p-7 backdrop-blur-md corner-crosshairs overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-steel-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-steel-300 ml-2 font-semibold">
                    MK_SYSTEM_ECOSYSTEM.v2
                  </span>
                </div>
                <Badge variant="brand" size="sm">
                  ACTIVE
                </Badge>
              </div>

              {/* Central Integrated Topology Grid */}
              <div className="py-6 grid grid-cols-2 gap-3.5 relative">
                {/* 01. Software Tier */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-brand-500/40 hover:border-brand-400 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Code2 className="w-4 h-4 text-brand-400" />
                    <span className="text-[10px] font-mono text-brand-400 font-bold">01</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-brand-300">
                    Software & Cloud
                  </h4>
                  <p className="text-[10px] text-steel-400 mt-1">
                    React • Next.js • Python • Realtime SCADA
                  </p>
                </div>

                {/* 02. Embedded PCB */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-cyan-500/40 hover:border-cyan-400 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">02</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-cyan-300">
                    Embedded & IoT
                  </h4>
                  <p className="text-[10px] text-steel-400 mt-1">
                    ESP32 • STM32 • Modbus • CAN Telemetry
                  </p>
                </div>

                {/* 03. Mechanical CAD */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-blue-500/40 hover:border-blue-400 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Cog className="w-4 h-4 text-blue-400" />
                    <span className="text-[10px] font-mono text-blue-400 font-bold">03</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-blue-300">
                    Mechanical CAD
                  </h4>
                  <p className="text-[10px] text-steel-400 mt-1">
                    3D Modeling • Machine Design • Enclosures
                  </p>
                </div>

                {/* 04. 3D Manufacturing */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-amber-500/40 hover:border-amber-400 transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <Printer className="w-4 h-4 text-amber-400" />
                    <span className="text-[10px] font-mono text-amber-400 font-bold">04</span>
                  </div>
                  <h4 className="text-xs font-bold text-white group-hover:text-amber-300">
                    3D Printing Batch
                  </h4>
                  <p className="text-[10px] text-steel-400 mt-1">
                    Wholesale B2B & Retail • PETG / ASA / ABS
                  </p>
                </div>
              </div>

              {/* Integrated Center Core: AI & Automation */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-navy-950 via-navy-850 to-navy-950 border border-brand-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">AI & Industrial Automation</p>
                    <p className="text-[10px] text-steel-400">Computer Vision • PLC/HMI • Turnkey Integration</p>
                  </div>
                </div>
                <Link
                  href="/services/product-development"
                  className="text-xs font-mono text-brand-400 hover:text-brand-300 flex items-center gap-1 shrink-0 font-bold"
                >
                  Explore <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Decorative Corner Status Badge */}
            <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-navy-900 border border-emerald-500/40 shadow-xl flex items-center gap-2.5 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <div>
                <p className="text-[11px] font-bold text-white leading-tight">Engineering Ready</p>
                <p className="text-[10px] text-steel-400 font-mono">Accepting Project Inquiries</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
