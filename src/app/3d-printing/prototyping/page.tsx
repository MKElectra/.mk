import React from "react";
import { Metadata } from "next";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Rapid Prototyping & Iteration Services | MK Electra",
  description:
    "Fast 24-48h turnaround rapid prototyping for mechanical fitment verification, industrial styling, and functional testing.",
};

export default function RapidPrototypingPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 lg:py-28 bg-navy-950 border-b border-steel-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Badge variant="brand" size="md" className="mb-4">
            RAPID ITERATION
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Rapid 3D Prototyping & Fitment Validation
          </h1>
          <p className="text-lg text-steel-300 mt-6 leading-relaxed">
            Accelerate your engineering validation cycle with high-resolution prototypes printed in
            24 to 48 hours.
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
