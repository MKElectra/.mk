import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { CORE_DIVISIONS, ADVANCED_CAPABILITIES } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Cpu,
  Cog,
  Printer,
  Zap,
  Bot,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Engineering Services & Divisions | MK Electra",
  description:
    "Explore MK Electra's complete engineering services matrix: Software Development, Embedded Systems & IoT, Mechanical Engineering, 3D Printing, Industrial Automation, and AI Solutions.",
};

export default function ServicesPage() {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case "software":
        return <Code2 className="w-6 h-6 text-brand-400" />;
      case "embedded-iot":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case "mechanical":
        return <Cog className="w-6 h-6 text-blue-400" />;
      case "3d-printing":
        return <Printer className="w-6 h-6 text-teal-400" />;
      case "industrial-automation":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "ai-ml":
        return <Bot className="w-6 h-6 text-purple-400" />;
      case "product-development":
        return <Rocket className="w-6 h-6 text-emerald-400" />;
      default:
        return <Layers className="w-6 h-6 text-steel-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              CAPABILITIES & SERVICES MATRIX
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Integrated Engineering Capabilities for Every Technical Challenge
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            From low-level microcontrollers and high-throughput cloud backends to parametric 3D CAD
            modeling and batch additive manufacturing.
          </p>
        </div>
      </section>

      {/* 4 Core Divisions Breakdown */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FOUR CORE DIVISIONS"
            kicker="FOUNDATIONAL CAPABILITIES"
            title="Our Four Primary Business Units"
            subtitle="Explore detailed service listings, architectural stacks, and technical deliverables across our core divisions."
            align="center"
          />

          <div className="space-y-12 mt-12">
            {CORE_DIVISIONS.map((div) => (
              <div
                key={div.id}
                className="p-8 sm:p-10 rounded-2xl bg-navy-950 border border-steel-800 hover:border-steel-700 transition-all corner-crosshairs shadow-2xl"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-steel-800/80 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-steel-700 flex items-center justify-center">
                      {getDivisionIcon(div.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-cyan-400 font-bold tracking-wider">
                        DIVISION {div.number}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
                        {div.title}
                      </h2>
                      <p className="text-xs sm:text-sm font-mono text-brand-300 mt-1">
                        {div.tagline}
                      </p>
                    </div>
                  </div>

                  <Button
                    href={div.slug}
                    variant="glow"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="self-start lg:self-auto shrink-0 font-bold"
                  >
                    {div.ctaText}
                  </Button>
                </div>

                {/* Subservices Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {div.services.map((sub, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-5 rounded-xl bg-navy-900/70 border border-steel-800/80 space-y-3"
                    >
                      <h3 className="text-sm font-bold text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        {sub.title}
                      </h3>
                      <p className="text-xs text-steel-400 leading-relaxed">
                        {sub.description}
                      </p>
                      <ul className="space-y-1.5 pt-2 border-t border-steel-800/60 text-xs text-steel-300">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-center gap-1.5 truncate">
                            <span className="w-1 h-1 rounded-full bg-steel-500 shrink-0" />
                            <span className="truncate">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Capabilities Strip */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="CROSS-DISCIPLINARY"
            kicker="ADVANCED CAPABILITIES"
            title="Integrated Systems Spanning All Disciplines"
            subtitle="Industrial automation, edge AI computer vision, and turnkey idea-to-market product development."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {ADVANCED_CAPABILITIES.map((cap) => (
              <div
                key={cap.id}
                className="p-8 rounded-2xl bg-navy-900 border border-steel-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group corner-crosshairs"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-steel-700 flex items-center justify-center mb-6">
                    {getDivisionIcon(cap.id)}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-4">{cap.tagline}</p>
                  <p className="text-xs text-steel-400 leading-relaxed mb-6">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                  <Button
                    href={cap.slug}
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="w-full sm:w-auto text-xs"
                  >
                    Explore Capability
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
