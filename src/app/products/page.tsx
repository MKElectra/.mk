"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Modal } from "@/components/ui/Modal";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Cpu,
  ArrowRight,
  Sparkles,
  ExternalLink,
  MessageSquare,
  CheckCircle2,
  Sliders,
  Info,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function ProductsCatalogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const categories = [
    { id: "all", label: "All Products" },
    { id: "IoT Products", label: "IoT & Gateways" },
    { id: "Embedded Products", label: "Embedded Boards" },
    { id: "Industrial Products", label: "Industrial Sensors" },
    { id: "3D Printed Products", label: "3D Printed Enclosures" },
    { id: "Software Products", label: "Software Platforms" },
    { id: "Smart Devices", label: "Smart Devices" },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              HARDWARE & PLATFORM CATALOG
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineered Products & Technology Frameworks
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            Explore our ready-to-deploy IoT edge telemetry gateways, multi-axis motor controllers,
            modular ASA enclosures, and industrial SCADA platforms.
          </p>

          <div className="mt-6 p-3 rounded-xl bg-navy-900 border border-steel-800 max-w-xl mx-auto flex items-center justify-center gap-2 text-xs font-mono text-amber-400">
            <Info className="w-4 h-4 shrink-0" />
            <span>Note: Items marked &quot;Demo Product / Coming Soon&quot; represent standard engineering frameworks.</span>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex justify-center mb-12 overflow-x-auto pb-2">
            <Tabs
              tabs={categories}
              activeTab={activeCategory}
              onChange={(id) => setActiveCategory(id)}
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-2xl bg-navy-950 border border-steel-800 hover:border-steel-700 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl corner-crosshairs"
              >
                <div>
                  <div className="relative h-48 bg-navy-900 overflow-hidden border-b border-steel-800 flex items-center justify-center p-6 bg-tech-dots">
                    <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-navy-950/90 text-cyan-300 border border-steel-700">
                      {product.category}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      {product.badge}
                    </span>
                    <Cpu className="w-16 h-16 text-steel-700 group-hover:text-cyan-400/80 group-hover:scale-110 transition-all" />
                  </div>

                  <div className="p-6 space-y-4">
                    <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {product.name}
                    </h2>
                    <p className="text-xs text-steel-400 line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-mono uppercase text-steel-500 tracking-wider block font-semibold">
                        Key Highlights
                      </span>
                      {product.features.slice(0, 3).map((f, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-steel-300 truncate">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-steel-800/60 mt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold"
                  >
                    Technical Specs →
                  </button>

                  <Button
                    href={getWhatsAppLink(COMPANY_INFO.phones[0].raw, product.whatsappMessage)}
                    external
                    variant="whatsapp"
                    size="sm"
                    leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
                    className="text-xs"
                  >
                    Enquire
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          subtitle={`${selectedProduct.category} • [${selectedProduct.badge}]`}
          maxWidth="2xl"
        >
          <div className="space-y-6">
            <p className="text-sm text-steel-300 leading-relaxed">
              {selectedProduct.fullDescription}
            </p>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-steel-200">
                {selectedProduct.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                Engineering Specifications
              </h4>
              <div className="rounded-xl bg-navy-950 border border-steel-800 divide-y divide-steel-800 text-xs">
                {Object.entries(selectedProduct.specifications).map(([key, val], idx) => (
                  <div key={idx} className="p-3 flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-mono text-steel-400">{key}:</span>
                    <span className="font-mono text-white sm:text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-steel-800 flex flex-wrap items-center justify-between gap-4">
              <Button
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw, selectedProduct.whatsappMessage)}
                external
                variant="whatsapp"
                size="md"
                leftIcon={<MessageSquare className="w-4 h-4" />}
              >
                Inquire on WhatsApp (+91 8220660081)
              </Button>
              <Button
                href="/contact"
                variant="glow"
                size="md"
                onClick={() => setSelectedProduct(null)}
              >
                Request Custom RFQ
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <FinalCTA />
    </div>
  );
}
