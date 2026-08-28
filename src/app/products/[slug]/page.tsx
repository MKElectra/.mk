import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PRODUCTS_DATA } from "@/data/products";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/forms/ContactForm";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import {
  Cpu,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Sparkles,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);
  if (!product) return { title: "Product Not Found | MK Electra" };

  return {
    title: `${product.name} | MK Electra`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = PRODUCTS_DATA.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <div className="flex flex-col w-full">
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2">
                <Badge variant="cyan" size="md">
                  {product.category}
                </Badge>
                <Badge variant="amber" size="md">
                  {product.badge}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base sm:text-lg text-steel-300 leading-relaxed">
                {product.fullDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button
                  href={getWhatsAppLink(COMPANY_INFO.phones[0].raw, product.whatsappMessage)}
                  external
                  variant="whatsapp"
                  size="lg"
                  leftIcon={<MessageSquare className="w-4 h-4" />}
                >
                  Inquire on WhatsApp
                </Button>
                <Button href="#inquiry-form" variant="glow" size="lg">
                  Request Specification Sheet
                </Button>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 p-8 rounded-2xl bg-navy-900 border border-steel-700/80 shadow-2xl corner-crosshairs flex flex-col items-center justify-center min-h-[280px]">
              <Cpu className="w-24 h-24 text-cyan-400/80 mb-4 animate-pulse" />
              <span className="text-xs font-mono text-steel-400">
                MK_ELECTRA_ENGINEERING_FRAMEWORK
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications & Features */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Features */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">System Features & Architecture</h3>
              <div className="space-y-3">
                {product.features.map((feat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-navy-950 border border-steel-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-steel-200">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications Table */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Engineering Specifications</h3>
              <div className="rounded-2xl bg-navy-950 border border-steel-800 divide-y divide-steel-800 text-xs sm:text-sm">
                {Object.entries(product.specifications).map(([k, v], idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row sm:justify-between gap-1">
                    <span className="font-mono text-steel-400">{k}:</span>
                    <span className="font-mono text-white sm:text-right font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="inquiry-form" className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
