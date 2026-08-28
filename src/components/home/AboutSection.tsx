import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Award,
  Settings2,
} from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      title: "Integrated Engineering",
      desc: "Software, firmware, CAD, and additive manufacturing work in direct synchronization under one roof.",
    },
    {
      title: "Production-Ready Execution",
      desc: "We engineer solutions with manufacturability, thermal durability, and long-term maintainability in focus.",
    },
    {
      title: "Rapid Turnaround",
      desc: "In-house 3D printing and rapid prototyping accelerate validation cycles from months to days.",
    },
    {
      title: "Industrial Grade Quality",
      desc: "Rigorous testing, isolation for industrial electrical noise, and dimensional QC inspection on every batch.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Vision & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-brand-500/10 text-cyan-400 border border-cyan-500/30 uppercase">
                ABOUT MK ELECTRA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              ONE ENGINEERING PARTNER.{" "}
              <span className="block bg-gradient-to-r from-cyan-400 via-brand-300 to-white bg-clip-text text-transparent">
                MULTIPLE CAPABILITIES.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-steel-300 leading-relaxed">
              MK Electra brings software engineering, embedded systems, mechanical engineering,
              3D printing and intelligent technologies together to solve real-world problems.
            </p>

            <p className="text-sm sm:text-base text-steel-400 leading-relaxed">
              Whether it is a software application, an embedded device, an industrial machine, a
              prototype or a custom manufactured component, our multidisciplinary approach allows
              us to design, build and integrate complete solutions without fragmented handoffs.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Button href="/about" variant="secondary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Read Our Story
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Talk to an Engineer
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Engineering Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-cyan-500/40 transition-all group corner-crosshairs"
              >
                <div className="w-10 h-10 rounded-xl bg-navy-950 border border-steel-700 text-cyan-400 flex items-center justify-center mb-4 group-hover:border-cyan-400 transition-colors">
                  <span className="font-mono text-sm font-bold">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-steel-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
