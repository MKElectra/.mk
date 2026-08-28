import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/data/insights";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight, Clock, Calendar, CheckCircle2, User, ChevronLeft } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found | MK Electra" };

  return {
    title: `${article.title} | MK Electra Engineering Insights`,
    description: article.excerpt,
  };
}

export default function InsightArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = INSIGHTS_DATA.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="py-20 lg:py-24 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300"
          >
            <ChevronLeft className="w-4 h-4" /> Back to All Guides
          </Link>

          <div className="flex items-center gap-3">
            <Badge variant="cyan" size="md">
              {article.category}
            </Badge>
            <span className="text-xs font-mono text-steel-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-xs font-mono text-steel-400">• {article.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {article.title}
          </h1>

          <div className="p-4 rounded-xl bg-navy-900 border border-steel-800 text-xs font-mono text-steel-300 flex items-center gap-2">
            <User className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Author: {article.author}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-navy-900 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="prose prose-invert max-w-none text-steel-300 space-y-6 text-base sm:text-lg leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Key Takeaways */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-cyan-500/30 space-y-4">
            <h3 className="text-base font-mono uppercase tracking-wider text-cyan-400 font-bold">
              Key Engineering Takeaways
            </h3>
            <ul className="space-y-3">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-steel-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Division CTA */}
          <div className="pt-8 border-t border-steel-800 flex items-center justify-between">
            <Link
              href={article.relatedServiceSlug}
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
            >
              Explore Related Engineering Division <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
