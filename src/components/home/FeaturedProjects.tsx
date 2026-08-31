"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";

const COLORS: Record<string, { bg: string; text: string; border: string }> = {
  software: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-200" },
  "embedded-iot": { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-200" },
  mechanical: { bg: "bg-slate-50", text: "text-slate-600", border: "border-slate-200" },
  "3d-printing": { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
  automation: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  "ai-ml": { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-200" },
};

export function FeaturedProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const featured = PROJECTS_DATA.slice(0, 3);

  return (
    <section ref={ref} className="py-24 bg-surface-1 border-y border-surface-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mt-2">
              Work that speaks for itself.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project, i) => {
            const c = COLORS[project.divisionId] || COLORS.software;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-surface-2 hover:border-brand-200 p-6 h-full card-lift transition-all"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border ${c.bg} ${c.text} ${c.border}`}>
                      {project.divisionId.replace("-", " ")}
                    </span>
                    <ExternalLink className="w-4 h-4 text-ink-300 group-hover:text-brand-500 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-ink-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors flex-grow">
                    {project.title}
                  </h3>

                  <p className="text-sm text-ink-500 leading-relaxed mb-5">
                    {project.shortSummary}
                  </p>

                  <div className="pt-4 border-t border-surface-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-surface-2 text-ink-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
