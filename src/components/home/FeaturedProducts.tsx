"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PRODUCTS_DATA, ProductItem } from "@/data/products";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
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
  Info,
} from "lucide-react";

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-navy-900 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            badge="PRODUCT CATALOG"
            kicker="PROPRIETARY HARDWARE & PLATFORMS"
            title="Engineered Products & Modular Solutions"
            subtitle="Explore our portfolio of industrial IoT edge gateways, custom controllers, modular enclosures, and telemetry platforms."
            align="left"
            className="mb-0"
          />

          <Button
            href="/products"
            variant="outline"
            size="md"
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="self-start md:self-auto shrink-0"
          >
            View All Products
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_DATA.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-navy-950 border border-steel-800 hover:border-steel-700 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl hover:shadow-2xl"
            >
              <div>
                {/* Visual Header / Image Box */}
                <div className="relative h-48 bg-navy-900 overflow-hidden border-b border-steel-800/80 flex items-center justify-center p-6 bg-tech-dots">
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-navy-950/90 text-cyan-300 border border-steel-700">
                    {product.category}
                  </span>

                  {/* Demo Flag Badge */}
                  <span className="absolute top-3 right-3 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30">
                    {product.badge}
                  </span>

                  <Cpu className="w-16 h-16 text-steel-700 group-hover:text-cyan-400/80 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Content Area */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-steel-400 line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Key Features Preview */}
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

              {/* Action Bar */}
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

      {/* Product Detail Modal */}
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

            {/* Features */}
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

            {/* Specifications Matrix */}
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

            {/* Modal Actions */}
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
                Request Custom Quotation
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
