import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/data/insights";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, BookOpen, Clock, Calendar, Sparkles } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Engineering Insights & Technical Guides | MK Electra",
  description:
    "In-depth engineering articles on 3D printing materials selection (PETG vs ABS vs ASA), hardening firmware for industrial RS485, and DFAM best practices.",
};

export default function InsightsIndexPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              TECHNICAL WHITEPAPERS & GUIDES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Insights & Manufacturing Practices
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Practical engineering knowledge from our software architects, firmware specialists,
            mechanical designers, and 3D printing engineers.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INSIGHTS_DATA.map((article) => (
              <div
                key={article.id}
                className="p-8 rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/40 transition-all flex flex-col justify-between corner-crosshairs shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-steel-800/80 mb-4 text-xs font-mono text-steel-400">
                    <span className="text-cyan-400 font-semibold uppercase">{article.category}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-steel-500">{article.publishDate}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
