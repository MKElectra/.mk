import React from "react";
import { Cpu, Code2, Cog, Printer, Zap, Bot, Rocket, ShieldCheck } from "lucide-react";

export function TrustStrip() {
  const primaryPillars = [
    { title: "Software Engineering", icon: <Code2 className="w-4 h-4 text-brand-400" /> },
    { title: "Embedded & IoT", icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { title: "Mechanical Engineering", icon: <Cog className="w-4 h-4 text-blue-400" /> },
    { title: "3D Printing & Manufacturing", icon: <Printer className="w-4 h-4 text-amber-400" /> },
  ];

  const secondaryPillars = [
    { title: "Industrial Automation", icon: <Zap className="w-3.5 h-3.5 text-brand-400" /> },
    { title: "AI / ML & Computer Vision", icon: <Bot className="w-3.5 h-3.5 text-purple-400" /> },
    { title: "Product Development", icon: <Rocket className="w-3.5 h-3.5 text-emerald-400" /> },
    { title: "Custom Engineering", icon: <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> },
  ];

  return (
    <div className="w-full bg-navy-950 border-y border-steel-800/80 py-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-tech-grid-orange opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-3">
        {/* Primary Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-semibold text-steel-200">
          {primaryPillars.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon}
              <span className="tracking-wide text-white">{item.title}</span>
              {idx < primaryPillars.length - 1 && (
                <span className="hidden md:inline text-steel-700 font-mono ml-6">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Secondary Row */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-steel-400 pt-1 border-t border-steel-800/40">
          {secondaryPillars.map((item, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              {item.icon}
              <span className="tracking-tight">{item.title}</span>
              {idx < secondaryPillars.length - 1 && (
                <span className="hidden sm:inline text-steel-700 ml-4">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
