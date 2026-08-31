import React from "react";

const STEPS = [
  { n: "01", title: "Brief & Discovery", desc: "We align on your requirements, constraints, and success criteria." },
  { n: "02", title: "Feasibility & Scoping", desc: "Technical review, BOM estimation, timeline and milestone agreement." },
  { n: "03", title: "Design & Prototyping", desc: "CAD models, schematics, wireframes or firmware architecture — built and reviewed with you." },
  { n: "04", title: "Build & Integration", desc: "Development, manufacturing and assembly with iterative testing at each stage." },
  { n: "05", title: "Validation & Delivery", desc: "QA testing, documentation and handoff — or ongoing support if required." },
];

export function EngineeringProcess() {
  return (
    <section className="py-24 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-brand-500 uppercase mb-3">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            A clear process, every time.
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-steel-800/80 hidden sm:block" />

          <div className="space-y-0">
            {STEPS.map((step, idx) => (
              <div key={step.n} className="relative flex items-start gap-8 py-7 border-b border-steel-800/40 last:border-0">
                {/* Number dot */}
                <div className="relative shrink-0 w-10 h-10 rounded-full bg-navy-900 border border-steel-700 flex items-center justify-center z-10">
                  <span className="text-xs font-mono font-bold text-brand-500">{step.n}</span>
                </div>

                <div className="pt-1.5 pb-2">
                  <h3 className="text-sm font-semibold text-white mb-1.5">{step.title}</h3>
                  <p className="text-sm text-steel-400 leading-relaxed max-w-xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
