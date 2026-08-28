import React from "react";
import { Metadata } from "next";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRight } from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Custom 3D Printed Parts & Enclosures | MK Electra",
  description:
    "Manufacture custom replacement brackets, functional industrial components, and electronic housings in PETG, ASA, and engineering composites.",
};

export default function CustomParts3DPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 lg:py-28 bg-navy-950 border-b border-steel-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Badge variant="cyan" size="md" className="mb-4">
            FUNCTIONAL COMPONENTS
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Custom 3D Printed Parts & Functional Enclosures
          </h1>
          <p className="text-lg text-steel-300 mt-6 leading-relaxed">
            High-strength, dimensionally stable thermoplastic components designed for end-use
            industrial deployment, mechanical brackets, and electronics housings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4">
          <QuoteCalculator defaultType="retail" />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
