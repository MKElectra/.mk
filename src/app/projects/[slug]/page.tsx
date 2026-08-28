import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS_DATA } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found | MK Electra" };

  return {
    title: `${project.title} — Case Study | MK Electra`,
    description: project.shortSummary,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <Badge variant="cyan" size="md">
                {project.category}
              </Badge>
              <Badge variant="steel" size="md">
                {project.industry}
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-steel-300 leading-relaxed">
              {project.shortSummary}
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-navy-950 border border-steel-800 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                The Engineering Challenge
              </span>
              <p className="text-sm text-steel-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-8 rounded-2xl bg-navy-950 border border-brand-500/40 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                MK Electra Solution
              </span>
              <p className="text-sm text-steel-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="p-8 rounded-2xl bg-navy-950 border border-steel-800 space-y-4">
            <h2 className="text-xl font-bold text-white">Delivered System Components</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Realized Results */}
          <div className="p-8 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 space-y-2">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Realized Outcome & Impact
            </span>
            <p className="text-sm sm:text-base text-steel-100 leading-relaxed font-medium">
              {project.results}
            </p>
          </div>

          {/* Tech Used */}
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-steel-400 font-bold block mb-3">
              Technologies & Protocols Employed
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-mono bg-navy-950 border border-steel-700 text-steel-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
