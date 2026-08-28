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
  Bot,
  BrainCircuit,
  Eye,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Layers,
  Sparkles,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "AI, Machine Learning & Computer Vision Solutions | MK Electra",
  description:
    "Practical artificial intelligence for real-world applications: automated optical inspection, edge AI inference, predictive maintenance, OCR, and anomaly detection.",
};

export default function AIMLServicePage() {
  const capability = ADVANCED_CAPABILITIES.find((c) => c.id === "ai-ml")!;

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/40 uppercase flex items-center gap-1.5">
              <BrainCircuit className="w-3.5 h-3.5" /> AI & COMPUTER VISION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Intelligence for Real-World Industrial & Business Applications
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
              className="bg-purple-600 hover:bg-purple-500 font-bold px-8"
            >
              Build an AI Solution
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
            Integrated AI Architecture
          </span>
          <div className="p-4 rounded-2xl bg-navy-950 border border-steel-800 flex flex-wrap items-center justify-center gap-4 font-mono text-sm sm:text-base font-bold text-white shadow-xl">
            <span className="text-purple-400">AI / ML</span>
            <span className="text-steel-600">+</span>
            <span className="text-cyan-400">Software</span>
            <span className="text-steel-600">+</span>
            <span className="text-brand-400">Embedded</span>
            <span className="text-steel-600">+</span>
            <span className="text-amber-400">Industrial Systems</span>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="AI & COMPUTER VISION"
            kicker="PRODUCTION-GRADE INFERENCE"
            title="Practical AI Built for Real-World Impact"
            subtitle="Custom model training, lightweight edge quantization, and low-latency hardware triggers."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {capability.services.map((service, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-purple-500/40 transition-all flex items-start gap-3 corner-crosshairs"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white mb-1">{service}</h3>
                  <p className="text-xs text-steel-400">
                    Deployed on local edge accelerators or secure private cloud endpoints.
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
