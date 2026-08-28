import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { PRINTING_MATERIALS } from "@/data/materials";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { EngineeringProcess } from "@/components/home/EngineeringProcess";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Printer,
  Building,
  User,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
  Sliders,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "3D Printing & Additive Manufacturing Services | MK Electra",
  description:
    "Professional 3D printing services for wholesale B2B batch production runs and retail B2C custom functional parts. Engineering materials: PLA, PETG, ABS, ASA, TPU, Carbon Fiber.",
};

export default function ThreeDPrintingHubPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              DIVISION 04 — ADDITIVE MANUFACTURING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            From Digital Design to Physical Product
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            High-precision additive manufacturing serving both enterprise batch production runs and
            individual custom requirements. Fast turnarounds, robust engineering thermoplastics, and
            repeatable precision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="#quote-configurator"
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold px-8"
            >
              Get Instant Quote
            </Button>
            <Button
              href="/3d-printing/wholesale"
              variant="secondary"
              size="lg"
            >
              Wholesale B2B Hub
            </Button>
            <Button
              href="/3d-printing/retail"
              variant="cyan"
              size="lg"
            >
              Retail & Custom Prints
            </Button>
          </div>
        </div>
      </section>

      {/* Dual Business Model: Wholesale B2B vs Retail B2C */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="TWO TAILORED PATHWAYS"
            kicker="WHOLESALE & RETAIL"
            title="Custom 3D Printing for Every Need"
            subtitle="Whether you require 500 weather-sealed ASA sensor enclosures or a single replacement gear, we have the specialized process for you."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Wholesale */}
            <div className="p-8 sm:p-10 rounded-2xl bg-navy-950 border border-brand-500/40 hover:border-brand-400 transition-all group flex flex-col justify-between corner-crosshairs shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-steel-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-300 flex items-center justify-center">
                      <Building className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400">B2B / WHOLESALE</span>
                      <h3 className="text-2xl font-bold text-white">Wholesale 3D Printing</h3>
                    </div>
                  </div>
                  <Badge variant="brand" size="md">
                    BULK DISCOUNTS
                  </Badge>
                </div>

                <p className="text-sm font-semibold text-brand-300 font-mono mb-3">
                  Professional bulk 3D printing at competitive wholesale pricing.
                </p>

                <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                  Volume manufacturing runs, recurring batches, OEM components, functional enclosures,
                  and assembly jigs with dedicated engineering support.
                </p>

                <ul className="space-y-2 text-xs text-steel-300 mb-8">
                  {[
                    "Bulk quantity orders with tiered volume pricing",
                    "Repeat production batches with dimensional consistency",
                    "Heat-set brass threaded insert installation",
                    "Strict QC dimensional inspection reports",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-steel-800 flex items-center justify-between">
                <Button
                  href="/3d-printing/wholesale"
                  variant="glow"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Wholesale
                </Button>
                <span className="text-xs font-mono text-steel-500">Tiered Volume Pricing</span>
              </div>
            </div>

            {/* Retail */}
            <div className="p-8 sm:p-10 rounded-2xl bg-navy-950 border border-cyan-500/40 hover:border-cyan-400 transition-all group flex flex-col justify-between corner-crosshairs shadow-2xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-steel-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                      <User className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400">B2C / CUSTOM</span>
                      <h3 className="text-2xl font-bold text-white">Retail & Custom Printing</h3>
                    </div>
                  </div>
                  <Badge variant="cyan" size="md">
                    NO MOQ
                  </Badge>
                </div>

                <p className="text-sm font-semibold text-cyan-300 font-mono mb-3">
                  Custom 3D printing for individual customers and creators.
                </p>

                <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                  From one custom part to small-batch requirements, MK Electra turns your digital CAD
                  design or physical concept into a tangible reality.
                </p>

                <ul className="space-y-2 text-xs text-steel-300 mb-8">
                  {[
                    "Single-piece printing (No Minimum Order Quantity)",
                    "Custom replacement parts for broken items",
                    "Rapid functional prototypes for inventors",
                    "CAD modeling assistance available",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-steel-800 flex items-center justify-between">
                <Button
                  href="/3d-printing/retail"
                  variant="cyan"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Order Custom Print
                </Button>
                <span className="text-xs font-mono text-steel-500">Fast 24-48h Turnaround</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Deep Dive */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="ENGINEERING POLYMERS"
            kicker="AVAILABLE MATERIALS"
            title="Industrial & Functional Material Selection"
            subtitle="Each material is carefully selected based on thermal resistance, mechanical toughness, and outdoor weatherability."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PRINTING_MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between corner-crosshairs"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-steel-800/80 mb-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                      {mat.category}
                    </span>
                    <Badge variant="steel" size="sm">
                      {mat.heatResistance}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1.5">{mat.name}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed mb-4">{mat.shortDesc}</p>

                  <div className="space-y-1.5 text-xs text-steel-300 mb-4">
                    <p>
                      <strong className="text-white">Strength:</strong> {mat.strength}
                    </p>
                    <p>
                      <strong className="text-white">Finish:</strong> {mat.finish}
                    </p>
                    <p>
                      <strong className="text-white">Recommended:</strong> {mat.recommendedUsage}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-steel-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-steel-400">Density: {mat.density}</span>
                  <a href="#quote-configurator" className="text-cyan-400 hover:underline">
                    Configure →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Engineering Workflow */}
      <EngineeringProcess />

      {/* Interactive Quotation Configurator */}
      <section id="quote-configurator" className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
