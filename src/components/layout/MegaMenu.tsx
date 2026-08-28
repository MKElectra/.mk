"use client";

import React from "react";
import Link from "next/link";
import { CORE_DIVISIONS, ADVANCED_CAPABILITIES } from "@/data/divisions";
import { ArrowRight, Code2, Cpu, Cog, Printer, Bot, Zap, Rocket, ChevronRight } from "lucide-react";

interface MegaMenuProps {
  divisionKey: "services" | "3d-printing";
  onClose: () => void;
}

export function MegaMenu({ divisionKey, onClose }: MegaMenuProps) {
  const getDivisionIcon = (id: string) => {
    switch (id) {
      case "software":
        return <Code2 className="w-5 h-5 text-brand-400" />;
      case "embedded-iot":
        return <Cpu className="w-5 h-5 text-cyan-400" />;
      case "mechanical":
        return <Cog className="w-5 h-5 text-blue-400" />;
      case "3d-printing":
        return <Printer className="w-5 h-5 text-cyan-300" />;
      case "industrial-automation":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "ai-ml":
        return <Bot className="w-5 h-5 text-purple-400" />;
      case "product-development":
        return <Rocket className="w-5 h-5 text-emerald-400" />;
      default:
        return <ChevronRight className="w-4 h-4 text-steel-400" />;
    }
  };

  if (divisionKey === "3d-printing") {
    return (
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-5xl bg-navy-900/95 backdrop-blur-xl border border-steel-700/80 shadow-2xl rounded-2xl p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 mt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Wholesale B2B */}
          <div className="p-5 rounded-xl bg-navy-850 border border-brand-500/30 hover:border-brand-400/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase">
                  B2B / Wholesale
                </span>
                <Printer className="w-5 h-5 text-brand-400" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">
                Wholesale 3D Printing
              </h4>
              <p className="text-xs text-steel-400 mt-2 leading-relaxed">
                Bulk quantity orders, batch manufacturing, prototype batches, and volume-based pricing for businesses and OEMs.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-steel-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  Bulk Production Runs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  Industrial Components & Enclosures
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                  OEM & Reseller Manufacturing Support
                </li>
              </ul>
            </div>
            <Link
              href="/3d-printing/wholesale"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
            >
              Explore Wholesale Hub <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Column 2: Retail B2C */}
          <div className="p-5 rounded-xl bg-navy-850 border border-cyan-500/30 hover:border-cyan-400/60 transition-all flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 text-[11px] font-mono font-semibold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase">
                  B2C / Custom
                </span>
                <Cog className="w-5 h-5 text-cyan-400" />
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                Retail & Custom Printing
              </h4>
              <p className="text-xs text-steel-400 mt-2 leading-relaxed">
                Single-piece printing, replacement parts, personalized products, and functional prototypes for innovators.
              </p>
              <ul className="mt-4 space-y-2 text-xs text-steel-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Single-Piece Printing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Replacement & Obsolete Parts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  Custom Engineering Models
                </li>
              </ul>
            </div>
            <Link
              href="/3d-printing/retail"
              onClick={onClose}
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
            >
              Explore Retail Printing <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Column 3: Quick Links & Instant RFQ */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-navy-800 to-navy-950 border border-steel-700/80 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-steel-400 font-semibold">
                Specialized Services
              </span>
              <div className="mt-4 space-y-3">
                <Link
                  href="/3d-printing/prototyping"
                  onClick={onClose}
                  className="block p-2.5 rounded-lg hover:bg-navy-700/60 transition-colors group"
                >
                  <p className="text-xs font-semibold text-white group-hover:text-cyan-400 flex items-center justify-between">
                    Rapid Prototyping <ChevronRight className="w-3.5 h-3.5 text-steel-400 group-hover:text-cyan-400" />
                  </p>
                  <p className="text-[11px] text-steel-400 mt-0.5">Iterative testing & fitment validation</p>
                </Link>
                <Link
                  href="/3d-printing/custom-parts"
                  onClick={onClose}
                  className="block p-2.5 rounded-lg hover:bg-navy-700/60 transition-colors group"
                >
                  <p className="text-xs font-semibold text-white group-hover:text-cyan-400 flex items-center justify-between">
                    Custom & Replacement Parts <ChevronRight className="w-3.5 h-3.5 text-steel-400 group-hover:text-cyan-400" />
                  </p>
                  <p className="text-[11px] text-steel-400 mt-0.5">End-use functional brackets & enclosures</p>
                </Link>
              </div>
            </div>

            <div className="pt-4 border-t border-steel-800">
              <Link
                href="/quote"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold text-center block shadow-lg shadow-brand-500/25 transition-all"
              >
                Instant 3D Print Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Services Master Mega Menu
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-screen max-w-6xl bg-navy-900/95 backdrop-blur-xl border border-steel-700/80 shadow-2xl rounded-2xl p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200 mt-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Core 4 Divisions */}
        {CORE_DIVISIONS.map((div) => (
          <div
            key={div.id}
            className="p-4 rounded-xl bg-navy-850/70 border border-steel-800 hover:border-brand-500/40 hover:bg-navy-850 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-mono text-cyan-400 font-bold px-1.5 py-0.5 rounded bg-brand-500/20">
                  {div.number}
                </span>
                <span className="text-xs font-bold text-white group-hover:text-brand-300 transition-colors">
                  {div.title}
                </span>
              </div>
              <p className="text-[11px] text-steel-400 line-clamp-2 leading-relaxed">
                {div.tagline}
              </p>
              <ul className="mt-3 space-y-1.5 text-[11px] text-steel-300">
                {div.services.slice(0, 3).map((s, idx) => (
                  <li key={idx} className="truncate flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href={div.slug}
              onClick={onClose}
              className="mt-4 pt-3 border-t border-steel-800/80 inline-flex items-center gap-1 text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-transform"
            >
              {div.ctaText} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>

      {/* Bottom Capabilities Strip */}
      <div className="mt-6 pt-6 border-t border-steel-800 grid grid-cols-1 md:grid-cols-3 gap-4">
        {ADVANCED_CAPABILITIES.map((cap) => (
          <Link
            key={cap.id}
            href={cap.slug}
            onClick={onClose}
            className="flex items-center gap-3 p-3 rounded-lg bg-navy-950/60 border border-steel-800/60 hover:border-cyan-500/40 hover:bg-navy-800/50 transition-all group"
          >
            <div className="p-2 rounded-lg bg-navy-800 border border-steel-700 group-hover:border-cyan-400 transition-colors shrink-0">
              {getDivisionIcon(cap.id)}
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white group-hover:text-cyan-300 truncate">
                {cap.title}
              </p>
              <p className="text-[11px] text-steel-400 truncate">
                {cap.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
