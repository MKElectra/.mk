import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import { ArrowRight, MessageSquare, Sparkles, Send } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 relative overflow-hidden border-b border-steel-800">
      {/* Background blueprint details */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase tracking-wider">
            READY TO ENGINEER
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          LET&apos;S BUILD WHAT&apos;S NEXT.
        </h2>

        <p className="text-base sm:text-lg text-steel-300 max-w-3xl mx-auto leading-relaxed">
          Whether you need a software platform, embedded system, industrial machine, AI solution,
          mechanical design or 3D-printed component — MK Electra can help turn your requirement into
          a practical engineering solution.
        </p>

        {/* Action Button Trio */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="glow"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto font-bold px-8"
          >
            Start a Project
          </Button>

          <Button
            href="/quote"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto font-semibold px-6"
          >
            Request a Quote
          </Button>

          <Button
            href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
            external
            variant="whatsapp"
            size="lg"
            leftIcon={<MessageSquare className="w-4 h-4" />}
            className="w-full sm:w-auto font-medium px-6"
          >
            WhatsApp Us
          </Button>
        </div>

        {/* Direct Phone Numbers Quick Ticker */}
        <div className="pt-8 border-t border-steel-800/80 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-steel-400">
          <span>Direct Lines:</span>
          {COMPANY_INFO.phones.map((phone, idx) => (
            <a
              key={idx}
              href={`tel:${phone.raw}`}
              className="text-white hover:text-cyan-400 font-bold underline underline-offset-4"
            >
              {phone.display}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
