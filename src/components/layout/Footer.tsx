import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-steel-800/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-0.5 leading-none">
                <span className="text-xl font-extrabold text-white tracking-tight">M</span>
                <span className="text-xl font-extrabold text-brand-500 tracking-tight">K</span>
                <span className="text-xl font-extrabold text-white tracking-tight ml-1.5">
                  ELECTRA
                </span>
              </div>
              <div className="h-[2px] w-full bg-brand-500 mt-0.5 rounded-full" />
              <span className="text-[9px] text-steel-500 font-mono tracking-widest mt-1 leading-none">
                Built on Trust. Powered by Quality.
              </span>
            </div>

            <p className="text-sm text-steel-500 leading-relaxed">
              Multidisciplinary engineering company — software, embedded systems, mechanical design
              and 3D manufacturing.
            </p>

            <div className="space-y-2 pt-2">
              {COMPANY_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={getWhatsAppLink(phone.raw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-steel-400 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-steel-500 mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-steel-400">
              {[
                { label: "Software Engineering", href: "/services/software" },
                { label: "Embedded & IoT", href: "/services/embedded-iot" },
                { label: "Mechanical Engineering", href: "/services/mechanical" },
                { label: "Industrial Automation", href: "/services/industrial-automation" },
                { label: "AI & Computer Vision", href: "/services/ai-ml" },
                { label: "Product Development", href: "/services/product-development" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Printing */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-steel-500 mb-5">
              3D Printing
            </h4>
            <ul className="space-y-3 text-sm text-steel-400">
              {[
                { label: "Overview", href: "/3d-printing" },
                { label: "Wholesale / B2B", href: "/3d-printing/wholesale" },
                { label: "Retail / B2C", href: "/3d-printing/retail" },
                { label: "Rapid Prototyping", href: "/3d-printing/prototyping" },
                { label: "Custom Parts", href: "/3d-printing/custom-parts" },
                { label: "Get a Quote", href: "/quote" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-steel-500 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-steel-400">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Products", href: "/products" },
                { label: "Industries", href: "/industries" },
                { label: "Insights", href: "/insights" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-steel-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-steel-600">
          <p>© {new Date().getFullYear()} MK Electra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-steel-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-steel-400 transition-colors">
              Terms
            </Link>
            <Link href="/cookie-policy" className="hover:text-steel-400 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
