import React from "react";
import Link from "next/link";
import { PRINTING_MATERIALS } from "@/data/materials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Printer,
  Building,
  User,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export function ThreeDPrintingSection() {
  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="3D PRINTING & MANUFACTURING"
          kicker="FROM DIGITAL DESIGN TO PHYSICAL PRODUCT"
          title="Additive Manufacturing for Enterprise Batches & Custom Parts"
          subtitle="Whether you need hundreds of end-use industrial components or a single high-precision functional prototype, MK Electra delivers production-grade 3D printing."
          align="center"
        />

        {/* Dual Tier Comparison: Wholesale vs Retail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Tier 1: Wholesale / B2B */}
          <div className="p-8 sm:p-10 rounded-2xl bg-navy-950 border border-brand-500/40 hover:border-brand-400 transition-all group flex flex-col justify-between shadow-2xl corner-crosshairs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-steel-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-300 flex items-center justify-center">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      DIVISION 04 — B2B
                    </span>
                    <h3 className="text-2xl font-bold text-white">WHOLESALE / B2B</h3>
                  </div>
                </div>
                <Badge variant="brand" size="md">
                  BULK PRODUCTION
                </Badge>
              </div>

              <p className="text-sm font-semibold text-brand-300 font-mono mb-2">
                Professional bulk 3D printing at competitive wholesale pricing.
              </p>

              <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                Dedicated batch manufacturing for industrial equipment builders, hardware startups,
                and OEMs needing repeated consistency, high structural durability, and custom volume tiers.
              </p>

              {/* Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-300 mb-8">
                {[
                  "Bulk 3D Printing Runs",
                  "Production & Batch Manufacturing",
                  "Prototype Validation Batches",
                  "Industrial Enclosures & Mounts",
                  "Fixtures & Assembly Jigs",
                  "OEM & Reseller Orders",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-steel-800 flex flex-wrap items-center justify-between gap-4">
              <Button
                href="/3d-printing/wholesale"
                variant="glow"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold w-full sm:w-auto"
              >
                Request Wholesale Quote
              </Button>
              <Link
                href="/quote"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                Configure Batch RFQ →
              </Link>
            </div>
          </div>

          {/* Tier 2: Retail / B2C */}
          <div className="p-8 sm:p-10 rounded-2xl bg-navy-950 border border-cyan-500/40 hover:border-cyan-400 transition-all group flex flex-col justify-between shadow-2xl corner-crosshairs">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-steel-800 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 flex items-center justify-center">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider">
                      DIVISION 04 — B2C
                    </span>
                    <h3 className="text-2xl font-bold text-white">RETAIL / B2C</h3>
                  </div>
                </div>
                <Badge variant="cyan" size="md">
                  CUSTOM & SINGLE PIECE
                </Badge>
              </div>

              <p className="text-sm font-semibold text-cyan-300 font-mono mb-2">
                Custom 3D printing for individual customers, creators and makers.
              </p>

              <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-6">
                Fast turnarounds on one-off parts, obsolete replacement brackets, hobby models, and
                functional engineering prototypes without minimum order quantity constraints.
              </p>

              {/* Bullet points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-300 mb-8">
                {[
                  "Single-Piece Custom Printing",
                  "Obsolete & Replacement Parts",
                  "Personalized Consumer Products",
                  "Hobby & Robotics Components",
                  "Functional Concept Prototypes",
                  "Custom Electronics Housings",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-steel-800 flex flex-wrap items-center justify-between gap-4">
              <Button
                href="/3d-printing/retail"
                variant="cyan"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold w-full sm:w-auto"
              >
                Order Custom Print
              </Button>
              <Link
                href="/quote"
                className="text-xs font-mono text-cyan-400 hover:text-cyan-300"
              >
                Instant Price Estimate →
              </Link>
            </div>
          </div>
        </div>

        {/* Available Materials Matrix Preview */}
        <div className="mt-16 pt-12 border-t border-steel-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                ENGINEERING THERMOPLASTICS
              </span>
              <h3 className="text-xl font-bold text-white mt-1">Available 3D Printing Materials</h3>
            </div>
            <Link
              href="/3d-printing"
              className="text-xs font-mono text-steel-300 hover:text-white inline-flex items-center gap-1"
            >
              View Full Material Datasheets <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINTING_MATERIALS.map((mat) => (
              <div
                key={mat.id}
                className="p-6 rounded-xl bg-navy-950/80 border border-steel-800 hover:border-steel-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                      {mat.category}
                    </span>
                    <Badge variant="steel" size="sm">
                      {mat.heatResistance}
                    </Badge>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{mat.name}</h4>
                  <p className="text-xs text-steel-400 leading-relaxed mb-4">{mat.shortDesc}</p>
                </div>
                <div className="pt-3 border-t border-steel-800/80 flex items-center justify-between text-xs font-mono text-steel-400">
                  <span>Strength: <strong className="text-steel-200">{mat.strength}</strong></span>
                  <Link href="/quote" className="text-cyan-400 hover:underline">
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
