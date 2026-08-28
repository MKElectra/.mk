import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Layers,
  Sliders,
  CheckCircle,
  Cpu,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";

export function WhyMKElectra() {
  const cards = [
    {
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Disciplinary",
      description: "Multiple engineering capabilities under one roof — software, firmware, CAD, and 3D manufacturing unified seamlessly.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-brand-400" />,
      title: "Custom Built",
      description: "Solutions designed around actual client requirements, operating environments, and functional constraints.",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-teal-400" />,
      title: "End-to-End",
      description: "From initial concept definition and architecture through rapid prototyping, testing, batch production, and deployment.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-400" />,
      title: "Engineering First",
      description: "Practical, robust solutions engineered for real-world operational reliability, thermal stability, and noise tolerance.",
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-amber-400" />,
      title: "Flexible",
      description: "Agile support spanning one-off prototypes, individual maker components, startup MVPs, and enterprise-scale production runs.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
      title: "Quality Driven",
      description: "Focused on uncompromising reliability, dimensional consistency, code maintainability, and thorough quality inspection.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="WHY MK ELECTRA"
          kicker="OUR VALUE PROPOSITION"
          title="Engineered for Precision, Speed and Scale"
          subtitle="We eliminate fragmented communication between disparate design studios, software agencies, and machine shops."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/50 hover:bg-navy-900/60 transition-all duration-300 group shadow-lg corner-crosshairs"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-steel-400 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
