import React from "react";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck } from "lucide-react";

export function QuickContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              badge="DIRECT CONTACT"
              kicker="CONNECT WITH OUR ENGINEERS"
              title="Get in Touch with Our Engineering Team"
              subtitle="Have a question or requirement? We respond promptly with technical guidance and transparent proposals."
              align="left"
              className="mb-6"
            />

            {/* Direct Phone Numbers */}
            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block">
                Engineering Desk Phones & WhatsApp
              </span>
              <div className="space-y-3">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppLink(phone.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-navy-900 border border-steel-800 hover:border-emerald-500/50 hover:bg-navy-850 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-mono text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
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
            </div>

            {/* Operational details */}
            <div className="p-4 rounded-xl bg-navy-900 border border-steel-800 space-y-2 text-xs text-steel-300 font-mono">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.locationNotice}</span>
              </div>
            </div>

            {/* Non-disclosure note */}
            <div className="p-4 rounded-xl bg-navy-900/60 border border-steel-800/80 flex items-start gap-2.5 text-xs text-steel-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <p>
                All proprietary design files, CAD models, and technical requirements submitted are
                handled under strict engineering confidentiality.
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
  );
}
