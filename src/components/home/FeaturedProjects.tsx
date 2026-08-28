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

export function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: "all", label: "All Engineering Projects" },
    { id: "Software", label: "Software" },
    { id: "Embedded", label: "Embedded & IoT" },
    { id: "Mechanical", label: "Mechanical" },
    { id: "3D Printing", label: "3D Printing" },
    { id: "Automation", label: "Automation" },
    { id: "AI/ML", label: "AI & Vision" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeading
            badge="CASE STUDIES"
            kicker="PROVEN MULTIDISCIPLINARY SOLUTIONS"
            title="Real-World Engineering & Delivery"
            subtitle="Explore how we solve complex industrial challenges through software architectures, custom embedded hardware, CAD design, and additive manufacturing."
            align="left"
            className="mb-0"
          />

          <Button
            href="/projects"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            View All Case Studies
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="mb-10 overflow-x-auto pb-2">
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-navy-900 border border-steel-800 hover:border-brand-500/40 transition-all duration-300 p-6 flex flex-col justify-between group shadow-xl corner-crosshairs"
            >
              <div>
                {/* Top Row: Category and Industry */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-steel-800/80">
                  <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-brand-500/10 text-cyan-300 border border-cyan-500/30">
                    {project.category}
                  </span>
                  <span className="text-xs text-steel-400 font-mono truncate">
                    {project.industry.split("&")[0]}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                  {project.shortSummary}
                </p>

                {/* Challenge & Solution Summary */}
                <div className="space-y-3 p-3.5 rounded-xl bg-navy-950/80 border border-steel-800/80 text-xs mb-6">
                  <div>
                    <span className="font-mono text-steel-400 font-bold uppercase block text-[10px]">
                      Challenge:
                    </span>
                    <p className="text-steel-300 line-clamp-2 mt-0.5">{project.challenge}</p>
                  </div>
                  <div className="pt-2 border-t border-steel-800/60">
                    <span className="font-mono text-cyan-400 font-bold uppercase block text-[10px]">
                      Engineering Solution:
                    </span>
                    <p className="text-steel-300 line-clamp-2 mt-0.5">{project.solution}</p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <Badge key={tIdx} variant="steel" size="sm">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" size="sm">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  Read Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

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
            {/* Summary */}
            <p className="text-sm text-steel-200 leading-relaxed font-medium">
              {selectedProject.shortSummary}
            </p>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                  The Engineering Challenge
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

            {/* Deliverables */}
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

            {/* Results / Measured Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Realized Operational Outcome
              </h4>
              <p className="text-xs text-steel-200 leading-relaxed">
                {selectedProject.results}
              </p>
            </div>

            {/* Modal Actions */}
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
    </section>
  );
}
