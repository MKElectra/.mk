import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | MK Electra",
  description: "Terms and conditions of service and manufacturing agreements for MK Electra.",
};

export default function TermsPage() {
  return (
    <div className="py-20 lg:py-28 bg-navy-950 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            TERMS OF SERVICE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Terms and Conditions</h1>
          <p className="text-xs font-mono text-steel-400 mt-2">Last Updated: January 1, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-steel-300 leading-relaxed">
          <p>
            Welcome to MK Electra. By accessing our website, requesting quotations, or engaging our
            engineering, software, or 3D printing manufacturing services, you agree to comply with and
            be bound by the following terms.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Engineering Quotations & Proposals</h2>
          <p>
            All quotations provided online or via direct communication are estimates based on initial
            parameter submissions. Final pricing is confirmed following complete CAD geometry review,
            material availability, and print time calculations. Quotations remain valid for 30 days
            unless otherwise specified.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Manufacturing Tolerances & Materials</h2>
          <p>
            3D printed components and mechanical parts are produced according to industry standard FDM
            and CNC tolerances (typically ±0.2mm to ±0.5mm depending on geometry and material grade).
            Clients requiring critical precision tolerances must specify them explicitly in technical
            drawings.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Intellectual Property Rights</h2>
          <p>
            Clients warrant that they possess all necessary rights and licenses for any CAD files,
            schematics, or designs submitted to MK Electra for prototyping or batch manufacturing. MK
            Electra retains intellectual property rights to proprietary software libraries, firmware
            boilerplates, and core platforms developed independently.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Payment & Delivery Terms</h2>
          <p>
            Payment terms for wholesale production and custom engineering projects are established in
            individual project statements of work (SOW). Production commences upon approval of initial
            milestone terms.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">5. Governing Law</h2>
          <p>
            These terms are governed by the laws of India, with jurisdiction in Tamil Nadu.
          </p>
        </div>
      </div>
    </div>
  );
}
