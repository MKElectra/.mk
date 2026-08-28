import React from "react";
import { Metadata } from "next";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Mail,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Contact MK Electra | Start an Engineering Project",
  description:
    "Get in touch with MK Electra. Direct WhatsApp lines (+91 8220660081, +91 9790630883), inquiry form for software, embedded systems, mechanical design, and 3D printing quotes.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              LET&apos;S BUILD WHAT&apos;S NEXT
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Connect With Our Engineering Desk
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Have an idea, engineering challenge or production requirement? Tell us what you need and
            our team can help define the right technical approach.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Phone & Channels */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                DIRECT CHANNELS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                Immediate Assistance on WhatsApp & Phone
              </h2>

              <p className="text-sm text-steel-300 leading-relaxed">
                We believe in direct technical communication without administrative delays. Reach
                our engineering and 3D printing desks directly.
              </p>

              {/* Direct Phone Cards */}
              <div className="space-y-4 pt-2">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppLink(phone.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-navy-950 border border-steel-800 hover:border-emerald-500/50 hover:bg-navy-850 transition-all flex items-center justify-between group shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="font-mono text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                          {phone.display}
                        </p>
                        <p className="text-xs text-steel-400">{phone.label}</p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-emerald-400 font-semibold">
                      WhatsApp →
                    </span>
                  </a>
                ))}
              </div>

              {/* Working Hours & Operations */}
              <div className="p-6 rounded-2xl bg-navy-950 border border-steel-800 space-y-3 text-xs text-steel-300 font-mono">
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{COMPANY_INFO.workingHours}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>{COMPANY_INFO.locationNotice}</span>
                </div>
              </div>

              {/* NDA Notice */}
              <div className="p-5 rounded-2xl bg-navy-950/60 border border-steel-800/80 flex items-start gap-3 text-xs text-steel-400">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  <strong className="text-white">Confidentiality Assured:</strong> All proprietary
                  drawings, schematics, and business ideas submitted to MK Electra are protected
                  under strict engineering confidentiality.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
