import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Rocket,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";

export function ProductDevSection() {
  const steps = [
    { number: "01", name: "Idea", desc: "Concept validation, use-case mapping, and project feasibility study." },
    { number: "02", name: "Requirement", desc: "Technical specs, environmental constraints, and functional benchmarks." },
    { number: "03", name: "Architecture", desc: "System block diagrams, hardware selection, and cloud/firmware topology." },
    { number: "04", name: "Design", desc: "Schematics, PCB layout, 3D CAD modeling, and industrial styling." },
    { number: "05", name: "Prototype", desc: "Functional electronics and precision 3D printed mechanical housings." },
    { number: "06", name: "Testing", desc: "Thermal stress, firmware bench tests, electrical noise, and fitment checks." },
    { number: "07", name: "3D Printing & Mfg", desc: "Batch 3D printing, CNC machining, or tooling preparation." },
    { number: "08", name: "Integration", desc: "Combining hardware, firmware, mechanical enclosures, and companion apps." },
    { number: "09", name: "Production", desc: "Pilot batch manufacturing, calibration fixtures, and quality control." },
    { number: "10", name: "Deployment", desc: "Final field installation, cloud provisioning, and SLA support." },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      {/* Background grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TURNKEY PRODUCT ENGINEERING"
          kicker="FROM IDEA TO PRODUCTION"
          title="Turnkey Engineering from Concept to Deployment"
          subtitle="MK Electra orchestrates software, electronics, mechanical CAD, 3D printing, AI, and automation under one unified engineering lifecycle."
          align="center"
        />

        {/* Integration Formula Ribbon */}
        <div className="max-w-4xl mx-auto mb-16 p-4 rounded-2xl bg-navy-900 border border-steel-800 flex flex-wrap items-center justify-center gap-3 font-mono text-xs sm:text-sm font-semibold text-white shadow-xl">
          <span className="text-cyan-400">Software</span>
          <span className="text-steel-600">+</span>
          <span className="text-brand-400">Embedded</span>
          <span className="text-steel-600">+</span>
          <span className="text-blue-400">Mechanical</span>
          <span className="text-steel-600">+</span>
          <span className="text-teal-400">3D Printing</span>
          <span className="text-steel-600">+</span>
          <span className="text-purple-400">AI</span>
          <span className="text-steel-600">+</span>
          <span className="text-amber-400">Automation</span>
        </div>

        {/* 10-Step Interactive Lifecycle Flow Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-navy-900/90 border border-steel-800 hover:border-cyan-400/60 hover:bg-navy-850 transition-all group flex flex-col justify-between corner-crosshairs relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                    STEP {step.number}
                  </span>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-steel-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all hidden md:block" />
                  )}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                  {step.name}
                </h4>
                <p className="text-xs text-steel-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-14 text-center">
          <Button
            href="/services/product-development"
            variant="glow"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold px-8"
          >
            Start Product Development
          </Button>
        </div>
      </div>
    </section>
  );
}
