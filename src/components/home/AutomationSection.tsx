import React from "react";
import Link from "next/link";
import { ADVANCED_CAPABILITIES } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Zap,
  CheckCircle2,
  ArrowRight,
  Activity,
  Cpu,
  Layers,
  Network,
} from "lucide-react";

export function AutomationSection() {
  const capability = ADVANCED_CAPABILITIES.find((c) => c.id === "industrial-automation")!;

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      {/* Subtle blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Technical Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" /> INDUSTRIAL AUTOMATION
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Intelligent Automation for Modern Manufacturing
            </h2>

            {/* Cross-Discipline Formula */}
            <div className="p-3.5 rounded-xl bg-navy-900 border border-steel-800 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-steel-200">
              <span className="text-cyan-400">Software</span>
              <span className="text-steel-600">+</span>
              <span className="text-brand-400">Embedded</span>
              <span className="text-steel-600">+</span>
              <span className="text-blue-400">Mechanical</span>
              <span className="text-steel-600">+</span>
              <span className="text-amber-400">Automation</span>
            </div>

            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              Bridging mechanical motion, electrical controls, programmable logic (PLC), and cloud
              supervisory dashboards to create autonomous, high-throughput manufacturing lines.
            </p>

            {/* Sub-services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {capability.services.slice(0, 8).map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-steel-300 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="truncate">{srv}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href={capability.slug}
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-amber-600 hover:bg-amber-500 shadow-amber-600/30 text-white font-bold"
              >
                {capability.ctaText}
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Request Facility Retrofit
              </Button>
            </div>
          </div>

          {/* Right Column: Industrial SCADA / Automation Architectural Graphic */}
          <div className="lg:col-span-6 relative">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-900/90 border border-amber-500/30 shadow-2xl backdrop-blur-md corner-crosshairs space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-steel-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                  <span className="font-mono text-xs text-steel-300 font-bold">
                    AUTOMATION CONTROL STACK
                  </span>
                </div>
                <Badge variant="amber" size="sm">
                  PLC + SCADA
                </Badge>
              </div>

              {/* Stack Layers */}
              <div className="space-y-3 font-mono text-xs">
                {/* Level 3: SCADA & Cloud */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-steel-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Network className="w-4 h-4 text-cyan-400" />
                    <div>
                      <p className="font-bold text-white">Level 3 — SCADA & Enterprise Cloud</p>
                      <p className="text-[10px] text-steel-400">WebSocket Mimic Panels • Shift Telemetry • OEE</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    Active
                  </span>
                </div>

                {/* Level 2: PLC & HMI */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-amber-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-amber-400" />
                    <div>
                      <p className="font-bold text-white">Level 2 — PLC Logic & HMI Touchscreens</p>
                      <p className="text-[10px] text-steel-400">Deterministic Ladder • Modbus TCP • VFD Drives</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                    Deterministic
                  </span>
                </div>

                {/* Level 1: Sensors & Actuators */}
                <div className="p-3.5 rounded-xl bg-navy-950 border border-steel-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-4 h-4 text-brand-400" />
                    <div>
                      <p className="font-bold text-white">Level 1 — Field Sensors & Actuators</p>
                      <p className="text-[10px] text-steel-400">Pneumatic Cylinders • Photoelectric • Motor Servos</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-brand-400 bg-brand-950/60 px-2 py-0.5 rounded border border-brand-500/30">
                    24V DC
                  </span>
                </div>
              </div>

              {/* Bottom Real-time Telemetry Bar */}
              <div className="p-3 rounded-lg bg-navy-950/60 border border-steel-800/80 text-[11px] text-steel-400 flex items-center justify-between">
                <span>Cycle Time: <strong className="text-white font-mono">1.24s</strong></span>
                <span>System Health: <strong className="text-emerald-400 font-mono">OPTIMAL</strong></span>
                <span>Uptime: <strong className="text-cyan-400 font-mono">99.98%</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
