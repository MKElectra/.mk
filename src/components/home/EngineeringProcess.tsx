"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const STEPS = [
  { n: "01", title: "Brief & Discovery", desc: "We align on requirements, constraints and success criteria." },
  { n: "02", title: "Feasibility & Scoping", desc: "Technical review, BOM estimation, timeline and milestone agreement." },
  { n: "03", title: "Design & Prototyping", desc: "CAD models, schematics, wireframes or firmware architecture — reviewed with you." },
  { n: "04", title: "Build & Integration", desc: "Development, manufacturing and assembly with iterative testing at every stage." },
  { n: "05", title: "Validation & Delivery", desc: "QA testing, full documentation and handoff — or ongoing support as needed." },
];

export function EngineeringProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mt-3">
            A clear process, every time.
          </h2>
          <p className="text-ink-500 mt-3">
            No surprises. No scope creep. Just structured engineering delivery.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical connector line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-brand-500 via-brand-300 to-brand-100 origin-top hidden sm:block"
          />

          <div className="space-y-3">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className="relative flex items-start gap-6 p-5 rounded-2xl hover:bg-surface-1 transition-colors group"
              >
                {/* Circle */}
                <div className="relative shrink-0 w-12 h-12 rounded-xl bg-white border-2 border-brand-200 group-hover:border-brand-400 group-hover:bg-brand-50 flex items-center justify-center z-10 transition-all">
                  <span className="text-xs font-mono font-black text-brand-500">{step.n}</span>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-bold text-ink-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
