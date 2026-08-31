import React from "react";
import { ShieldCheck, Layers, Zap } from "lucide-react";

const PILLARS = [
  {
    icon: <Layers className="w-5 h-5 text-brand-500" />,
    title: "Integrated Under One Roof",
    description:
      "Software, hardware, mechanical and manufacturing teams work together. No handoffs to external vendors. Faster delivery, tighter quality control.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-brand-500" />,
    title: "Engineering First, Always",
    description:
      "Every decision starts with what's technically correct. We don't oversell or underdeliver. Honest scoping, honest timelines.",
  },
  {
    icon: <Zap className="w-5 h-5 text-brand-500" />,
    title: "Idea to Production",
    description:
      "From a napkin sketch to a deployable product. We handle design, prototyping, firmware, software and batch manufacturing end-to-end.",
  },
];

export function WhyMKElectra() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-mono tracking-widest text-brand-500 uppercase mb-3">
              Why MK Electra
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Built on Trust.
              <br />
              Powered by Quality.
            </h2>
            <p className="mt-4 text-steel-400 text-base leading-relaxed max-w-md">
              Most engineering problems need more than one discipline. We built MK Electra to solve
              them end-to-end — without the coordination overhead of working with multiple agencies.
            </p>
          </div>

          {/* Right: Pillars */}
          <div className="space-y-8">
            {PILLARS.map((pillar, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-1.5">{pillar.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
