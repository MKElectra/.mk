import React from "react";
import { Metadata } from "next";
import { QuoteCalculator } from "@/components/calculator/QuoteCalculator";
import { Badge } from "@/components/ui/Badge";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Get an Instant 3D Printing & Engineering Quote | MK Electra",
  description:
    "Configure your 3D printing parameters (PLA, PETG, ABS, ASA, TPU), upload CAD files, and request transparent wholesale B2B or retail B2C quotations.",
};

export default function QuotePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Badge variant="cyan" size="md" className="mb-4">
            ONLINE RFQ CONFIGURATOR
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Configure Your 3D Printing & Engineering Quote
          </h1>
          <p className="text-lg text-steel-300 mt-6 leading-relaxed">
            Select material grades, layer resolutions, infill percentages, and batch quantities for
            instant engineering review and quotation.
          </p>
        </div>
      </section>

      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteCalculator defaultType="wholesale" />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
