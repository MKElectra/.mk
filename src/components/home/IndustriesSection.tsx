import React from "react";
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
  ArrowRight,
} from "lucide-react";

export function IndustriesSection() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Factory":
        return <Factory className="w-5 h-5 text-brand-400" />;
      case "Car":
        return <Car className="w-5 h-5 text-cyan-400" />;
      case "Sprout":
        return <Sprout className="w-5 h-5 text-emerald-400" />;
      case "Shirt":
        return <Shirt className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400" />;
      case "Truck":
        return <Truck className="w-5 h-5 text-teal-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-red-400" />;
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-indigo-400" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-cyan-300" />;
      case "Building2":
        return <Building2 className="w-5 h-5 text-brand-300" />;
      default:
        return <Factory className="w-5 h-5 text-steel-400" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="DOMAINS & VERTICALS"
            kicker="SECTOR EXPERTISE"
            title="Industries Empowered by MK Electra"
            subtitle="Tailored engineering architectures configured for specific industrial environments, regulatory standards, and operating conditions."
            align="left"
            className="mb-0"
          />

          <Button
            href="/industries"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            Explore All Industries
          </Button>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.slice(0, 8).map((ind) => (
            <div
              key={ind.id}
              className="p-6 rounded-2xl bg-navy-950 border border-steel-800 hover:border-steel-700 transition-all flex flex-col justify-between group hover:shadow-xl corner-crosshairs"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy-900 border border-steel-700 flex items-center justify-center mb-4 group-hover:border-cyan-400 transition-colors">
                  {getIndustryIcon(ind.iconName)}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {ind.name}
                </h3>

                <p className="text-xs text-steel-400 leading-relaxed mb-4">
                  {ind.shortDesc}
                </p>
              </div>

              <div className="pt-3 border-t border-steel-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-steel-500">{ind.applicableDivisions[0]}</span>
                <Link
                  href="/contact"
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                >
                  Consult →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
