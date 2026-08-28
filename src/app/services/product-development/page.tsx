import React from "react";
import { Metadata } from "next";
import { ADVANCED_CAPABILITIES } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Rocket,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Turnkey Hardware & Software Product Development | MK Electra",
  description:
    "End-to-end product development under one roof: from initial concept and PCB schematics to CAD enclosures, functional 3D printing, firmware, and cloud companion apps.",
};

export default function ProductDevServicePage() {
  const capability = ADVANCED_CAPABILITIES.find((c) => c.id === "product-development")!;

  const lifecycleStages = [
    { num: "01", title: "Concept & Feasibility", desc: "Use case mapping, technical feasibility, component availability, and BOM estimation." },
    { num: "02", title: "System Architecture", desc: "Block diagrams, communication bus topology, power budgets, and firmware state machines." },
    { num: "03", title: "Electronics Schematic & PCB", desc: "Schematic capture, multi-layer PCB layout, signal integrity, and design for EMC noise." },
    { num: "04", title: "3D CAD Enclosure", desc: "Parametric industrial modeling, snap-fit mechanics, thermal vents, and internal clearances." },
    { num: "05", title: "Embedded Firmware", desc: "Bare-metal or RTOS drivers, communication protocols (MQTT, Modbus), and hardware watchdogs." },
    { num: "06", title: "Rapid Functional 3D Prototype", desc: "High-precision PETG/ASA additive manufacturing to create tangible working prototypes." },
    { num: "07", title: "Companion App & Web Cloud", desc: "Cross-platform mobile apps (React Native) and cloud telemetry dashboards." },
    { num: "08", title: "Bench Testing & Validation", desc: "Environmental thermal cycles, stress tests, firmware edge cases, and mechanical drop tests." },
    { num: "09", title: "DFM & Tooling Preparation", desc: "Draft angle optimization, mold analysis, and volume batch manufacturing setup." },
    { num: "10", title: "Production & Deployment", desc: "Pilot batch assembly, QA flashing rigs, and long-term maintenance support." },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 uppercase flex items-center gap-1.5">
              <Rocket className="w-3.5 h-3.5" /> FROM IDEA TO PRODUCT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Turnkey Product Development Under One Roof
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            {capability.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="bg-emerald-600 hover:bg-emerald-500 font-bold px-8"
            >
              Start Product Development
            </Button>
            <Button
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw, capability.whatsappMessage)}
              external
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* 10 Stages Detailed Matrix */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="10-STAGE LIFECYCLE"
            kicker="PRECISION EXECUTION"
            title="The 10-Stage Idea-to-Production Pipeline"
            subtitle="Eliminating communication gaps between industrial designers, electronics engineers, and software developers."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
            {lifecycleStages.map((st, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-navy-950 border border-steel-800 hover:border-emerald-400/50 transition-all flex flex-col justify-between corner-crosshairs group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-400 block mb-2">
                    STAGE {st.num}
                  </span>
                  <h3 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                    {st.title}
                  </h3>
                  <p className="text-xs text-steel-400 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
