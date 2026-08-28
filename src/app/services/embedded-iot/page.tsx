import React from "react";
import { Metadata } from "next";
import { CORE_DIVISIONS } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Radio,
  Wifi,
  Activity,
  Layers,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Embedded Systems & Industrial IoT Solutions | MK Electra",
  description:
    "Custom microcontroller firmware (ESP32, STM32, ARM), industrial Modbus/CAN/RS485 communication, telemetry gateways, and sensor hardware integration.",
};

export default function EmbeddedIoTServicePage() {
  const division = CORE_DIVISIONS.find((d) => d.id === "embedded-iot")!;

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              DIVISION {division.number} — EMBEDDED & IoT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {division.heroHeadline}
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            {division.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="glow"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold px-8"
            >
              Start Embedded Project
            </Button>
            <Button
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw, division.whatsappMessage)}
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

      {/* Services Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FIRMWARE & HARDWARE SERVICES"
            kicker="END-TO-END EMBEDDED"
            title="Intelligent Electronics. Connected Systems."
            subtitle="From bare-metal C/C++ on STM32 to multi-node industrial Modbus telemetries with edge buffers."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {division.services.map((srv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-navy-950 border border-steel-800 hover:border-cyan-500/40 transition-all corner-crosshairs shadow-xl"
              >
                <h3 className="text-xl font-bold text-white mb-2">{srv.title}</h3>
                <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-steel-300">
                  {srv.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Protocols & Hardware Ecosystem */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="SUPPORTED HARDWARE & PROTOCOLS"
            kicker="PROVEN STANDARDS"
            title="Microcontrollers, Field Buses & Telemetry Protocols"
            subtitle="Engineered for high noise immunity, wide supply voltages, and deterministic firmware execution."
            align="center"
          />

          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mt-8">
            {division.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl text-sm font-mono bg-navy-900 text-steel-200 border border-steel-700 hover:border-cyan-400 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Inquiry Form */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
