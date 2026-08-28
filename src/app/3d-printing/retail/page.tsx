import React from "react";
import { Metadata } from "next";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  User,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Custom & Retail 3D Printing Services (B2C) | MK Electra",
  description:
    "Single-piece custom 3D printing, replacement parts, personalized products, and functional prototypes for creators, makers, and individuals with fast turnaround.",
};

export default function Retail3DPrintingPage() {
  const retailUseCases = [
    {
      title: "Replacement & Obsolete Parts",
      desc: "Print replacement gears, broken brackets, appliance clips, and vintage automobile interior knobs.",
    },
    {
      title: "One-Off Functional Prototypes",
      desc: "Bring your CAD model or product idea to physical reality for fitment testing and investor demos.",
    },
    {
      title: "Custom Enclosures & Electronics",
      desc: "Custom dimensioned housings for Arduino, Raspberry Pi, ESP32, and custom sensor projects.",
    },
    {
      title: "Hobby, Robotics & Drone Parts",
      desc: "Lightweight, rigid brackets, drone camera mounts, robot chassis arms, and customized gears.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 uppercase flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" /> RETAIL & INDIVIDUAL PRINTING
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Custom 3D Printing for Everyone
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            From one custom part to small-batch requirements, MK Electra turns your digital design
            into a physical product.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="#retail-quote-form"
              variant="cyan"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold px-8"
            >
              Request Retail Quote
            </Button>
            <Button
              href={getWhatsAppLink(
                COMPANY_INFO.phones[1].raw,
                "Hello MK Electra, I need a custom 3D printed part/product."
              )}
              external
              variant="whatsapp"
              size="lg"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              WhatsApp Custom Desk
            </Button>
          </div>
        </div>
      </section>

      {/* Retail Use Cases */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="NO MINIMUM ORDER QUANTITY"
            kicker="SINGLE PARTS & PROTOTYPES"
            title="What Can We Print for You?"
            subtitle="Send us your CAD file (.STL / .STEP / .OBJ) or even a rough sketch with dimensions."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {retailUseCases.map((u, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950 border border-steel-800 hover:border-cyan-400/40 transition-all flex flex-col justify-between corner-crosshairs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-steel-700 text-cyan-400 flex items-center justify-center font-mono font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{u.title}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed">{u.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="retail-quote-form" className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator defaultType="retail" />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
