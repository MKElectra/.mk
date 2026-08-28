import React from "react";
import Link from "next/link";
import { CORE_DIVISIONS } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Cpu,
  Cog,
  Printer,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";

export function CoreDivisions() {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case "software":
        return <Code2 className="w-6 h-6 text-brand-400" />;
      case "embedded-iot":
        return <Cpu className="w-6 h-6 text-cyan-400" />;
      case "mechanical":
        return <Cog className="w-6 h-6 text-blue-400" />;
      case "3d-printing":
        return <Printer className="w-6 h-6 text-teal-400" />;
      default:
        return <Layers className="w-6 h-6 text-steel-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      {/* Blueprint lines */}
      <div className="absolute inset-0 bg-tech-grid-dense opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR CORE CAPABILITIES"
          kicker="FOUR FOUNDATIONAL DIVISIONS"
          title="Multidisciplinary Engineering Under One Roof"
          subtitle="MK Electra combines software engineering, embedded electronics, mechanical design, and advanced 3D manufacturing to transform industrial challenges into production-ready systems."
          align="center"
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-8 mt-12">
          {CORE_DIVISIONS.map((division) => (
            <div
              key={division.id}
              className="rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/50 transition-all duration-300 p-8 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-brand-500/10 corner-crosshairs"
            >
              <div>
                {/* Card Top Row */}
                <div className="flex items-center justify-between pb-4 border-b border-steel-800/80 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      {getDivisionIcon(division.id)}
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                        DIVISION {division.number}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {division.title}
                      </h3>
                    </div>
                  </div>
                  <span className="text-2xl font-extrabold font-mono text-steel-700 group-hover:text-steel-500 transition-colors">
                    {division.number}
                  </span>
                </div>

                {/* Tagline */}
                <p className="text-sm font-semibold text-brand-300 font-mono mb-3">
                  {division.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-steel-300 leading-relaxed mb-6">
                  {division.description}
                </p>

                {/* Sub-Services Preview */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-mono uppercase text-steel-400 tracking-wider font-semibold block">
                    Core Capabilities & Services
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-300">
                    {division.services.flatMap((s) => s.items).slice(0, 6).map((service, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Wall / Badges */}
                <div className="pt-4 border-t border-steel-800/80 mb-6">
                  <span className="text-[11px] font-mono uppercase text-steel-400 tracking-wider font-semibold block mb-2">
                    Key Technologies & Tools
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {division.technologies.slice(0, 7).map((tech, tIdx) => (
                      <Badge key={tIdx} variant="steel" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    {division.technologies.length > 7 && (
                      <Badge variant="outline" size="sm">
                        +{division.technologies.length - 7} more
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                <Button
                  href={division.slug}
                  variant="outline"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto font-semibold border-steel-700 hover:border-cyan-400 group-hover:bg-brand-500 group-hover:text-white group-hover:border-transparent transition-all"
                >
                  {division.ctaText}
                </Button>

                <Link
                  href="/contact"
                  className="hidden sm:inline-flex text-xs font-mono text-steel-400 hover:text-cyan-400 transition-colors"
                >
                  Request Quote →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
