import React from "react";
import Link from "next/link";
import { ADVANCED_CAPABILITIES } from "@/data/divisions";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Bot,
  Eye,
  BrainCircuit,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

export function AIMLSection() {
  const capability = ADVANCED_CAPABILITIES.find((c) => c.id === "ai-ml")!;

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Computer Vision & Edge AI Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-950 border border-purple-500/30 shadow-2xl corner-crosshairs space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-steel-800">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span className="font-mono text-xs text-steel-300 font-bold">
                    EDGE_VISION_INSPECTION_PIPELINE
                  </span>
                </div>
                <Badge variant="brand" size="sm">
                  120 FPS REALTIME
                </Badge>
              </div>

              {/* Visual Simulated Bounding Box Mock */}
              <div className="relative rounded-xl bg-navy-900 border border-steel-800 p-6 flex flex-col items-center justify-center min-h-[200px] overflow-hidden">
                <div className="absolute inset-0 bg-tech-dots opacity-30" />

                {/* Simulated Target Component */}
                <div className="relative z-10 w-36 h-36 rounded-xl border-2 border-dashed border-purple-400/80 bg-purple-950/30 flex flex-col items-center justify-center p-3 animate-pulse">
                  <Target className="w-8 h-8 text-purple-400 mb-2" />
                  <span className="text-[10px] font-mono text-purple-300 font-bold bg-navy-950 px-2 py-0.5 rounded border border-purple-500/40">
                    PASS: 99.4% CONF
                  </span>
                </div>

                {/* Real-time OCR overlay */}
                <div className="absolute top-3 left-3 p-1.5 px-2.5 rounded bg-navy-950/90 border border-steel-700 font-mono text-[10px] text-cyan-400">
                  OCR: LOT# 2026-MK-094
                </div>

                <div className="absolute bottom-3 right-3 p-1.5 px-2.5 rounded bg-navy-950/90 border border-steel-700 font-mono text-[10px] text-emerald-400">
                  LATENCY: 8.2ms
                </div>
              </div>

              {/* Integrated Edge AI Architecture Strip */}
              <div className="p-3.5 rounded-xl bg-navy-900 border border-steel-800/80 grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div>
                  <span className="text-steel-400 block text-[10px]">INSPECTION</span>
                  <span className="font-bold text-white">0 Missed</span>
                </div>
                <div>
                  <span className="text-steel-400 block text-[10px]">HARDWARE</span>
                  <span className="font-bold text-purple-400">Edge NPU</span>
                </div>
                <div>
                  <span className="text-steel-400 block text-[10px]">PLC TRIGGER</span>
                  <span className="font-bold text-emerald-400">24V Output</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Content & Philosophy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-medium rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5" /> INTELLIGENCE FOR REAL-WORLD APPLICATIONS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Practical AI Integrated Directly with Operational Hardware
            </h2>

            {/* Architecture formula */}
            <div className="p-3.5 rounded-xl bg-navy-950 border border-steel-800 flex flex-wrap items-center gap-2 font-mono text-xs font-semibold text-steel-200">
              <span className="text-purple-400">AI / ML</span>
              <span className="text-steel-600">+</span>
              <span className="text-cyan-400">Software</span>
              <span className="text-steel-600">+</span>
              <span className="text-brand-400">Embedded</span>
              <span className="text-steel-600">+</span>
              <span className="text-amber-400">Industrial Systems</span>
            </div>

            <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
              We don&apos;t build isolated AI models. We engineer end-to-end intelligence—combining
              high-speed industrial computer vision, edge inferencing, automated defect rejection, and
              predictive telemetry directly into manufacturing and enterprise workflows.
            </p>

            {/* Sub-services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {capability.services.slice(0, 8).map((srv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-steel-300 truncate">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">{srv}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button
                href={capability.slug}
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-purple-600 hover:bg-purple-500 shadow-purple-600/30 text-white font-bold"
              >
                {capability.ctaText}
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Schedule Technical Consult
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
