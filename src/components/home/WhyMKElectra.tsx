"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, ShieldCheck, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    icon: Layers,
    title: "Integrated Under One Roof",
    description: "Software, hardware, mechanical and manufacturing teams work together. No external vendor handoffs — faster delivery, tighter quality.",
    color: "text-brand-500",
    bg: "bg-brand-50",
  },
  {
    icon: ShieldCheck,
    title: "Engineering First, Always",
    description: "Every decision starts with what's technically correct. Honest scoping, honest timelines — no overselling.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Idea to Production",
    description: "From sketch to deployable product. Design, prototype, firmware, software, batch manufacturing — end-to-end.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
];

export function WhyMKElectra() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Why MK Electra
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mt-3 leading-tight">
              Built on Trust.
              <br />
              <span className="gradient-text">Powered by Quality.</span>
            </h2>
            <p className="text-ink-500 mt-4 leading-relaxed max-w-md">
              Most engineering challenges require multiple disciplines. We built MK Electra to solve
              them end-to-end — without the complexity of managing multiple agencies.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { n: "4", l: "Engineering Disciplines" },
                { n: "1", l: "Unified Team" },
                { n: "B2B", l: "Wholesale Manufacturing" },
                { n: "B2C", l: "Retail 3D Printing" },
              ].map((s) => (
                <div key={s.l} className="p-4 rounded-xl bg-surface-1 border border-surface-2">
                  <p className="text-2xl font-black text-brand-500 font-mono">{s.n}</p>
                  <p className="text-xs text-ink-500 mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
            >
              More about us <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Right: pillars */}
          <div className="space-y-5">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-surface-1 border border-surface-2 hover:border-brand-200 hover:bg-brand-50/30 transition-all card-lift"
              >
                <div className={`w-10 h-10 rounded-xl ${pillar.bg} flex items-center justify-center shrink-0`}>
                  <pillar.icon className={`w-5 h-5 ${pillar.color}`} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-ink-900 mb-1.5">{pillar.title}</h3>
                  <p className="text-sm text-ink-500 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
