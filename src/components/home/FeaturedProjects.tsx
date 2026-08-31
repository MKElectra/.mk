import React from "react";
import Link from "next/link";
import { PROJECTS_DATA } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = PROJECTS_DATA.slice(0, 3);

  const divisionColors: Record<string, string> = {
    software: "text-brand-500 bg-brand-500/10",
    "embedded-iot": "text-cyan-400 bg-cyan-400/10",
    mechanical: "text-blue-400 bg-blue-400/10",
    "3d-printing": "text-amber-400 bg-amber-400/10",
    automation: "text-purple-400 bg-purple-400/10",
    "ai-ml": "text-emerald-400 bg-emerald-400/10",
  };

  return (
    <section className="py-24 bg-navy-900 border-y border-steel-800/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4 mb-14">
          <div>
            <p className="text-xs font-mono tracking-widest text-brand-500 uppercase mb-3">
              Case Studies
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work that speaks for itself.
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-steel-400 hover:text-white transition-colors"
          >
            All Projects <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((project) => {
            const colorClass =
              divisionColors[project.divisionId] || "text-steel-400 bg-steel-400/10";
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-navy-950 rounded-xl border border-steel-800/60 hover:border-steel-700 p-6 transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 rounded ${colorClass}`}
                  >
                    {project.divisionId.replace("-", " ")}
                  </span>
                  <ArrowRight className="w-4 h-4 text-steel-700 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-base font-semibold text-white mb-2 leading-snug group-hover:text-brand-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-steel-400 leading-relaxed flex-grow">
                  {project.shortSummary}
                </p>

                <div className="mt-6 pt-4 border-t border-steel-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-steel-800/60 text-steel-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
