import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  UploadCloud,
  FileCheck2,
  Calculator,
  ThumbsUp,
  Printer,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";

export function EngineeringProcess() {
  const steps = [
    {
      number: "01",
      title: "Upload Your Design",
      desc: "Upload STL, STEP, STP, OBJ, or 2D technical drawings through our online quotation portal.",
      icon: <UploadCloud className="w-5 h-5 text-cyan-400" />,
    },
    {
      number: "02",
      title: "Requirement Review",
      desc: "Our engineering team reviews wall thicknesses, overhangs, material suitability, and tolerances.",
      icon: <FileCheck2 className="w-5 h-5 text-brand-400" />,
    },
    {
      number: "03",
      title: "Custom Quotation",
      desc: "Receive clear, volume-tiered pricing based on material volume, print duration, and finishing.",
      icon: <Calculator className="w-5 h-5 text-teal-400" />,
    },
    {
      number: "04",
      title: "Client Approval",
      desc: "You review and approve the technical quote and production timeline.",
      icon: <ThumbsUp className="w-5 h-5 text-emerald-400" />,
    },
    {
      number: "05",
      title: "Precision Printing",
      desc: "Additive manufacturing commences using calibrated machines and industrial-grade filaments.",
      icon: <Printer className="w-5 h-5 text-purple-400" />,
    },
    {
      number: "06",
      title: "Quality Check",
      desc: "Critical dimensions, surface integrity, and layer bonding are verified using precision gauges.",
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      number: "07",
      title: "Finishing & Assembly",
      desc: "Optional support removal, sanding, heat-set brass threaded inserts, or vapor smoothing.",
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
    },
    {
      number: "08",
      title: "Delivery / Pickup",
      desc: "Securely packaged and dispatched with tracked courier delivery or local facility pickup.",
      icon: <Truck className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="PRECISION WORKFLOW"
          kicker="STEP-BY-STEP ORDER EXECUTION"
          title="From Digital CAD to Finished Component"
          subtitle="A transparent 8-step production pipeline ensuring dimensional accuracy, material integrity, and on-time dispatch."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-steel-700 transition-all flex flex-col justify-between group corner-crosshairs"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-steel-800/80 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-navy-950 border border-steel-700 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-sm font-mono font-bold text-steel-500 group-hover:text-cyan-400 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-steel-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
