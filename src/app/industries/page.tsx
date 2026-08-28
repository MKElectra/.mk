import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { INDUSTRIES_DATA } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Factory,
  Car,
  Sprout,
  Shirt,
  Cpu,
  Zap,
  Truck,
  Activity,
  GraduationCap,
  Rocket,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Industry Domains & Engineering Solutions | MK Electra",
  description:
    "Tailored engineering solutions for Manufacturing, Automotive, Agriculture, Textile, Electronics, Energy, Healthcare, Logistics, R&D Labs, Startups, and Enterprises.",
};

export default function IndustriesIndexPage() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-6 h-6 text-brand-400" />;
      case "Car":
        return <Car className="w-6 h-6 text-cyan-400" />;
      case "Sprout":
        return <Sprout className="w-6 h-6 text-emerald-400" />;
      case "Shirt":
        return <Shirt className="w-6 h-6 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-blue-400" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-teal-400" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-red-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-6 h-6 text-indigo-400" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-cyan-300" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-brand-300" />;
      default:
        return <Factory className="w-6 h-6 text-steel-400" />;
    }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              DOMAINS & VERTICALS
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industry-Specific Engineering Solutions
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Discover how MK Electra deploys specialized software architectures, rugged IoT hardware,
            custom machine CAD, and 3D printing across high-demand industrial sectors.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind) => (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-navy-950 border border-steel-800 hover:border-brand-500/40 transition-all flex flex-col justify-between corner-crosshairs shadow-xl group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-steel-800/80 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      {getIndustryIcon(ind.iconName)}
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                      {ind.applicableDivisions[0]}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {ind.name}
                  </h2>

                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                    {ind.overview}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-steel-800/80 mb-6">
                    <span className="text-[10px] font-mono uppercase text-steel-400 font-bold block">
                      Key Tailored Capabilities:
                    </span>
                    {ind.keySolutions.slice(0, 3).map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-steel-300 truncate">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-steel-800 flex items-center justify-between">
                  <Button
                    href="/contact"
                    variant="outline"
                    size="sm"
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="w-full text-xs font-semibold"
                  >
                    Consult Industry Leads
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
