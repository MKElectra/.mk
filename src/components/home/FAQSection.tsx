"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FAQS_DATA } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Tabs } from "@/components/ui/Tabs";
import { Button } from "@/components/ui/Button";
import { MessageSquare, HelpCircle, ArrowRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "General", label: "General" },
    { id: "Software", label: "Software" },
    { id: "Embedded & IoT", label: "Embedded & IoT" },
    { id: "Mechanical", label: "Mechanical" },
    { id: "3D Printing", label: "3D Printing" },
  ];

  const filteredFaqs =
    activeCategory === "all"
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const accordionItems = filteredFaqs.map((faq) => ({
    id: faq.id,
    title: faq.question,
    category: faq.category,
    content: faq.answer,
  }));

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          kicker="CLEAR ANSWERS & PROTOCOLS"
          title="Everything You Need to Know About MK Electra"
          subtitle="Clear answers regarding our multidisciplinary capabilities, custom engineering workflow, 3D printing services, and engagement models."
          align="center"
        />

        {/* Category Filter */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <Tabs
            tabs={categories}
            activeTab={activeCategory}
            onChange={(id) => setActiveCategory(id)}
          />
        </div>

        {/* Accordion Component */}
        <Accordion items={accordionItems} allowMultiple={false} />

        {/* Bottom Help Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-navy-950 border border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Have a specific project question?</h4>
              <p className="text-xs text-steel-400 mt-0.5">
                Our engineering leads are available to discuss technical feasibility directly.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
              external
              variant="whatsapp"
              size="md"
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Ask on WhatsApp
            </Button>
            <Button href="/contact" variant="outline" size="md">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
