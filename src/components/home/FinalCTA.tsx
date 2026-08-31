"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-brand-500 to-brand-700 rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-brand-200 text-xs font-mono uppercase tracking-widest mb-3"
            >
              Ready to Build?
            </motion.p>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              Have a project in mind?
            </h2>
            <p className="text-brand-100 text-base mb-8 leading-relaxed max-w-lg mx-auto">
              Tell us what you&apos;re building. We&apos;ll tell you exactly how we can help — and how fast.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand-600 font-bold text-sm hover:bg-brand-50 transition-all shadow-lg hover:-translate-y-0.5"
              >
                Start a Conversation <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-white/30 hover:border-white text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" /> WhatsApp Direct
              </a>
            </div>

            <p className="mt-8 text-brand-200/70 text-xs font-mono">
              {COMPANY_INFO.phones[0].display} &nbsp;·&nbsp; {COMPANY_INFO.phones[1].display}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
