"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(249,115,22,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Kicker */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            <span className="text-xs font-mono tracking-widest text-steel-400 uppercase">
              Engineering & Technology Solutions
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] mb-6">
            We Build What{" "}
            <span className="text-brand-500">Engineers</span>{" "}
            Imagine.
          </h1>

          {/* Subline */}
          <p className="text-lg sm:text-xl text-steel-400 leading-relaxed max-w-2xl mb-10">
            MK Electra delivers software, embedded systems, mechanical engineering and 3D
            manufacturing — under one roof, from idea to production.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-semibold text-sm transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-steel-700 hover:border-steel-500 text-steel-200 hover:text-white font-semibold text-sm transition-colors"
            >
              View Services
            </Link>

            <a
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-emerald-800/60 hover:border-emerald-600 text-emerald-400 font-semibold text-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>

          {/* Divider stats */}
          <div className="mt-16 pt-8 border-t border-steel-800/60 flex flex-wrap gap-10">
            {[
              { value: "4", label: "Core Divisions" },
              { value: "100%", label: "In-house Design & Build" },
              { value: "Turnkey", label: "Idea to Production" },
              { value: "B2B & B2C", label: "Wholesale & Retail" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                <p className="text-xs text-steel-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
