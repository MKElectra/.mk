"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROJECTS_DATA, ProjectItem } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Modal } from "@/components/ui/Modal";
import {
  ArrowRight,
  Sparkles,
  ExternalLink,
  Code2,
  Cpu,
  Cog,
  Printer,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ProjectsIndexPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "Software", label: "Software" },
    { id: "Embedded", label: "Embedded" },
    { id: "Mechanical", label: "Mechanical" },
    { id: "3D Printing", label: "3D Printing" },
    { id: "Automation", label: "Automation" },
    { id: "AI/ML", label: "AI & Vision" },
    { id: "IoT", label: "IoT Telemetry" },
    { id: "Product Development", label: "Product Dev" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              PROJECT CASE STUDIES
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering Case Studies & Solutions
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Detailed technical breakdowns of how we solve complex industrial challenges across
            software, embedded firmware, 3D CAD modeling, and batch manufacturing.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <Tabs
              tabs={categories}
              activeTab={activeCategory}
              onChange={(id) => setActiveCategory(id)}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-xl corner-crosshairs"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-steel-800/80">
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 text-cyan-300 border border-cyan-500/30">
                      {project.category}
                    </span>
                    <span className="text-xs text-steel-400 font-mono truncate">
                      {project.industry.split("&")[0]}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {project.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                    {project.shortSummary}
                  </p>

                  <div className="space-y-3 p-4 rounded-xl bg-navy-900/80 border border-steel-800/80 text-xs mb-6">
                    <div>
                      <span className="font-mono text-steel-400 font-bold uppercase block text-[10px]">
                        Challenge:
                      </span>
                      <p className="text-steel-300 line-clamp-2 mt-0.5">{project.challenge}</p>
                    </div>
                    <div className="pt-2 border-t border-steel-800/60">
                      <span className="font-mono text-cyan-400 font-bold uppercase block text-[10px]">
                        Solution:
                      </span>
                      <p className="text-steel-300 line-clamp-2 mt-0.5">{project.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <Badge key={tIdx} variant="steel" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                  >
                    Read Technical Breakdown <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-[11px] font-mono text-steel-500 hover:text-steel-300"
                  >
                    Direct Link
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <Modal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          subtitle={`${selectedProject.category} • ${selectedProject.industry}`}
          maxWidth="2xl"
        >
          <div className="space-y-6 text-left">
            <p className="text-sm text-steel-200 leading-relaxed font-medium">
              {selectedProject.shortSummary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  The Challenge
                </h4>
                <p className="text-xs text-steel-300 leading-relaxed">
                  {selectedProject.challenge}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-navy-950 border border-brand-500/30 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  MK Electra Solution
                </h4>
                <p className="text-xs text-steel-300 leading-relaxed">
                  {selectedProject.solution}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-3">
                Key Engineering Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-300">
                {selectedProject.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Operational Outcome
              </h4>
              <p className="text-xs text-steel-200 leading-relaxed">
                {selectedProject.results}
              </p>
            </div>

            <div className="pt-4 border-t border-steel-800 flex flex-wrap items-center justify-between gap-4">
              <Button
                href="/contact"
                variant="glow"
                size="md"
                onClick={() => setSelectedProject(null)}
              >
                Discuss a Similar Project
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => setSelectedProject(null)}
              >
                Close Case Study
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <FinalCTA />
    </div>
  );
}
