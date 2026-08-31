import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="py-24 bg-navy-950 border-t border-steel-800/60">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Have a project in mind?
        </h2>
        <p className="text-steel-400 text-base mb-10 leading-relaxed">
          Tell us what you&apos;re building. We&apos;ll tell you if we can help — and how.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors"
          >
            Start a Conversation <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-800/60 hover:border-emerald-600 text-emerald-400 font-semibold text-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4" /> WhatsApp Direct
          </a>
        </div>

        <p className="mt-8 text-xs text-steel-600 font-mono">
          {COMPANY_INFO.phones[0].display} &nbsp;·&nbsp; {COMPANY_INFO.phones[1].display}
        </p>
      </div>
    </section>
  );
}
