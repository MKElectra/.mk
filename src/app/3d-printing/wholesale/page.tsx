import React from "react";
import { Metadata } from "next";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Building,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Wholesale & Bulk 3D Printing Services (B2B) | MK Electra",
  description:
    "Reliable, scalable bulk 3D printing at wholesale pricing for businesses, manufacturers, hardware startups, and OEMs. Batch manufacturing in PETG, ASA, ABS, and engineering polymers.",
};

export default function Wholesale3DPrintingPage() {
  const b2bBenefits = [
    {
      title: "Tiered Volume Pricing",
      desc: "Economies of scale applied directly to batch production runs from 20 to 5,000+ units.",
    },
    {
      title: "Repeatable Batch Consistency",
      desc: "Calibrated multi-machine farm ensuring identical layer bonding and dimensional fit across all units.",
    },
    {
      title: "Heat-Set Threaded Inserts",
      desc: "Post-processed with installed M3/M4/M5 brass inserts for reusable, durable mechanical bolting.",
    },
    {
      title: "Dimensional QC Reports",
      desc: "Calibrated digital caliper and gauge inspection with sampling reports provided with shipments.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/40 uppercase flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5" /> B2B MANUFACTURING UNIT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Bulk 3D Printing at Wholesale Pricing
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Reliable, scalable 3D printing for businesses, manufacturers, startups, resellers and
            production requirements.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="#wholesale-quote-form"
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold px-8"
            >
              Get Wholesale Quote
            </Button>
            <Button
              href={getWhatsAppLink(
                COMPANY_INFO.phones[1].raw,
                "Hello MK Electra, I am interested in wholesale/bulk 3D printing services for my business."
              )}
              external
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp B2B Desk
            </Button>
          </div>
        </div>
      </section>

      {/* B2B Value Proposition */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="WHOLESALE ADVANTAGES"
            kicker="SCALABLE CAPACITY"
            title="Engineered for OEM & Business Batch Orders"
            subtitle="Eliminate high-cost injection mold tooling and long lead times with on-demand additive batch production."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {b2bBenefits.map((b, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/40 transition-all flex flex-col justify-between corner-crosshairs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-steel-700 text-brand-400 flex items-center justify-center font-mono font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Wholesale Quote Form */}
      <section id="wholesale-quote-form" className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator defaultType="wholesale" />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
