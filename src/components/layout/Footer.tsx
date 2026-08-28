import React from "react";
import Link from "next/link";
import { COMPANY_INFO } from "@/data/company";
import { Logo } from "@/components/ui/Logo";
import { getWhatsAppLink } from "@/lib/utils";
import {
  MessageSquare,
  Clock,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-steel-800 text-steel-400 text-sm relative overflow-hidden">
      {/* Background blueprint subtle styling */}
      <div className="absolute inset-0 bg-tech-grid-orange opacity-20 pointer-events-none" />

      {/* Main Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Column 1: Brand & Positioning (Double width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <Logo size="lg" showTagline={true} />

            <p className="text-steel-300 text-sm leading-relaxed max-w-md">
              Multidisciplinary engineering & technology company combining software engineering,
              embedded IoT systems, mechanical design, and advanced 3D printing to engineer practical,
              production-ready solutions under one roof.
            </p>

            {/* Direct Multi-Number Contact Cards */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-400 block font-bold">
                Direct Engineering Desk & WhatsApp
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
                {COMPANY_INFO.phones.map((phone, idx) => (
                  <a
                    key={idx}
                    href={getWhatsAppLink(phone.raw)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-navy-900 border border-steel-800 hover:border-brand-500/60 hover:bg-navy-850 transition-all group flex flex-col justify-between shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-emerald-400 font-semibold flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-steel-500 group-hover:text-brand-400 transition-colors" />
                    </div>
                    <p className="font-mono text-sm text-white font-bold mt-1.5">
                      {phone.display}
                    </p>
                    <p className="text-[10px] text-steel-400 mt-0.5 truncate">{phone.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Core Divisions */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">
              Core Divisions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services/software"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs font-mono text-brand-500 font-bold">01</span>
                  Software Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/services/embedded-iot"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs font-mono text-brand-500 font-bold">02</span>
                  Embedded & IoT
                </Link>
              </li>
              <li>
                <Link
                  href="/services/mechanical"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs font-mono text-brand-500 font-bold">03</span>
                  Mechanical Engineering
                </Link>
              </li>
              <li>
                <Link
                  href="/3d-printing"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-xs font-mono text-brand-500 font-bold">04</span>
                  3D Printing & Manufacturing
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold pt-4">
              Advanced Capabilities
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/industrial-automation"
                  className="hover:text-white transition-colors"
                >
                  Industrial Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ai-ml"
                  className="hover:text-white transition-colors"
                >
                  AI / ML & Computer Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/services/product-development"
                  className="hover:text-white transition-colors"
                >
                  Turnkey Product Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: 3D Printing Hub */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">
              3D Printing Hub
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/3d-printing/wholesale"
                  className="hover:text-brand-300 transition-colors font-semibold text-brand-400"
                >
                  Wholesale & Bulk B2B
                </Link>
              </li>
              <li>
                <Link
                  href="/3d-printing/retail"
                  className="hover:text-cyan-300 transition-colors font-medium text-cyan-400"
                >
                  Retail & Custom B2C
                </Link>
              </li>
              <li>
                <Link
                  href="/3d-printing/prototyping"
                  className="hover:text-white transition-colors"
                >
                  Rapid Prototyping
                </Link>
              </li>
              <li>
                <Link
                  href="/3d-printing/custom-parts"
                  className="hover:text-white transition-colors"
                >
                  Custom Parts & Enclosures
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="hover:text-white transition-colors text-steel-200 flex items-center gap-1 font-semibold"
                >
                  Get Instant RFQ Quote <ArrowUpRight className="w-3.5 h-3.5 text-brand-400" />
                </Link>
              </li>
            </ul>

            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold pt-4">
              Explore & Solutions
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Solutions by Scale
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Product Catalog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Project Case Studies
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Operations & Trust */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-brand-400 font-bold">
              Company & Operations
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About MK Electra
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Engineering Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-navy-900 border border-steel-800 space-y-2.5 mt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-steel-300">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-steel-300">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{COMPANY_INFO.locationNotice}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-steel-800/80 bg-navy-950/95 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-500">
          <p>© 2026 MK Electra. All Rights Reserved. Built on Trust. Powered by Quality.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-steel-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-steel-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-steel-300 transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
