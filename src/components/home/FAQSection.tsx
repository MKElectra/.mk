"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import { Plus, Minus } from "lucide-react";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = FAQS_DATA.slice(0, 6);

  return (
    <section className="py-24 bg-navy-900 border-t border-steel-800/60">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs font-mono tracking-widest text-brand-500 uppercase mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="divide-y divide-steel-800/60">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-5">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-4 text-left group"
              >
                <span className="text-sm font-medium text-white group-hover:text-brand-400 transition-colors leading-snug">
                  {faq.question}
                </span>
                <span className="shrink-0 mt-0.5 text-steel-500 group-hover:text-brand-500 transition-colors">
                  {open === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </span>
              </button>

              {open === idx && (
                <p className="mt-3 text-sm text-steel-400 leading-relaxed pr-8">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
