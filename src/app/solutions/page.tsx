import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  User,
  Rocket,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Engineering Solutions by Scale | MK Electra",
  description:
    "Tailored engineering engagement frameworks for Individuals & Creators, Startups & SMEs, and Industrial Enterprises.",
};

export default function SolutionsPage() {
  const tiers = [
    {
      icon: <User className="w-8 h-8 text-cyan-400" />,
      badge: "CREATORS & MAKERS",
      title: "INDIVIDUALS",
      tagline: "Single parts, custom prints & individual software.",
      desc: "For independent inventors, hobbyists, students, and makers needing professional engineering support without minimum order barriers.",
      services: [
        "Single-Piece Custom 3D Printing",
        "Replacement & Obsolete Parts",
        "Functional Concept Prototypes",
        "Custom Software & Web Tools",
        "Small-Scale Engineering Consulting",
      ],
      ctaText: "Order Custom Print / Consult",
      ctaHref: "/3d-printing/retail",
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      badge: "AGILE INNOVATORS",
      title: "STARTUPS & SMEs",
      tagline: "Turnkey MVP hardware, IoT & automation.",
      desc: "Comprehensive multidisciplinary firepower to design, prototype, and build production-ready products rapidly under one roof.",
      services: [
        "Turnkey Product Development (Idea to MVP)",
        "Custom Electronics & Firmware Architecture",
        "Batch 3D Printing of Production Housings",
        "Full-Stack SaaS & Companion Mobile Apps",
        "Edge AI & Computer Vision Integration",
        "Cost Optimization & DFM Preparation",
      ],
      ctaText: "Explore Product Development",
      ctaHref: "/services/product-development",
      highlight: true,
    },
    {
      icon: <Building2 className="w-8 h-8 text-brand-400" />,
      badge: "SCALE & DURABILITY",
      title: "INDUSTRIES & ENTERPRISES",
      tagline: "Industrial automation, SCADA & bulk production.",
      desc: "Dedicated engineering firepower for manufacturing facilities, plant modernizations, volume batch manufacturing, and enterprise systems.",
      services: [
        "Industrial Automation & PLC/SCADA Integration",
        "Machine Design & Custom Jigs/Fixtures",
        "Industrial IoT Telemetry & OEE Tracking",
        "High-Volume 3D Printing Batch Runs",
        "Enterprise Software Platforms & Cloud Backends",
        "Dedicated Long-Term SLA Engineering Support",
      ],
      ctaText: "Request Enterprise Consultation",
      ctaHref: "/contact",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              BUSINESS MODEL & ENGAGEMENT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Solutions for Every Scale
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            From single-piece functional prints for individual creators to factory-wide automation
            and enterprise software platforms for industrial enterprises.
          </p>
        </div>
      </section>

      {/* 3 Tier Solutions Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`p-8 sm:p-10 rounded-2xl bg-navy-950 border transition-all flex flex-col justify-between corner-crosshairs shadow-2xl ${
                  tier.highlight
                    ? "border-emerald-500/50 ring-1 ring-emerald-500/30"
                    : "border-steel-800 hover:border-steel-700"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-steel-800 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-navy-900 border border-steel-700 flex items-center justify-center">
                      {tier.icon}
                    </div>
                    <Badge variant={tier.highlight ? "emerald" : "steel"} size="sm">
                      {tier.badge}
                    </Badge>
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-1">{tier.title}</h2>
                  <p className="text-xs font-mono text-cyan-400 font-semibold mb-4">
                    {tier.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                    {tier.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-steel-800/80 mb-8">
                    <span className="text-[11px] font-mono uppercase text-steel-400 font-bold block">
                      Core Deliverables:
                    </span>
                    {tier.services.map((s, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-steel-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  href={tier.ctaHref}
                  variant={tier.highlight ? "glow" : "outline"}
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full font-semibold"
                >
                  {tier.ctaText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
