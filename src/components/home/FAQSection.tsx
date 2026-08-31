"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FAQS_DATA } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const faqs = FAQS_DATA.slice(0, 6);

  return (
    <section ref={ref} className="py-24 bg-surface-1 border-t border-surface-2">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mt-3">
            Common Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              className={`rounded-xl border overflow-hidden transition-colors ${
                open === idx ? "border-brand-300 bg-white" : "border-surface-2 bg-white hover:border-brand-200"
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-4 p-5 text-left"
              >
                <span className={`text-sm font-semibold transition-colors leading-snug ${open === idx ? "text-brand-600" : "text-ink-900"}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 w-6 h-6 rounded-lg flex items-center justify-center transition-all ${open === idx ? "bg-brand-500 text-white" : "bg-surface-2 text-ink-400"}`}>
                  {open === idx ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                </span>
              </button>

              <AnimatePresence>
                {open === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-ink-500 leading-relaxed px-5 pb-5 pt-0">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
