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
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Activity,
  Cpu,
  Layers,
  Network,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Industrial Automation, PLC & SCADA Systems | MK Electra",
  description:
    "End-to-end industrial automation: PLC programming, HMI touchscreens, centralized SCADA telemetry, motor drives, conveyor sortation, and legacy machinery retrofits.",
};

export default function AutomationServicePage() {
  const capability = ADVANCED_CAPABILITIES.find((c) => c.id === "industrial-automation")!;

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 uppercase flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" /> INDUSTRIAL AUTOMATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industrial Automation & Control Systems Engineering
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
              className="bg-amber-600 hover:bg-amber-500 font-bold px-8"
            >
              Discuss Automation Project
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

      {/* Integration Formula */}
      <section className="py-12 bg-navy-900 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-mono uppercase text-steel-400 font-bold tracking-wider block mb-3">
            Cross-Disciplinary Integration
          </span>
          <div className="p-4 rounded-2xl bg-navy-950 border border-steel-800 flex flex-wrap items-center justify-center gap-4 font-mono text-sm sm:text-base font-bold text-white shadow-xl">
            <span className="text-cyan-400">Software</span>
            <span className="text-steel-600">+</span>
            <span className="text-brand-400">Embedded</span>
            <span className="text-steel-600">+</span>
            <span className="text-blue-400">Mechanical</span>
            <span className="text-steel-600">+</span>
            <span className="text-amber-400">Industrial Automation</span>
          </div>
        </div>
      </section>

      {/* Automation Services Grid */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SERVICES & DELIVERABLES"
            kicker="AUTOMATION EXPERTISE"
            title="Complete Automation Capabilities"
            subtitle="From single PLC machine panels to factory-wide SCADA monitoring architectures."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {capability.services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-amber-500/40 transition-all flex items-start gap-3 corner-crosshairs"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{service}</h3>
                  <p className="text-xs text-steel-400">
                    Industrial-grade implementation with safety interlocks and wiring schematics.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
