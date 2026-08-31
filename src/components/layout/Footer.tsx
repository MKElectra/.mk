import React from "react";
import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <div>
              <div className="flex items-center gap-0.5 leading-none">
                <span className="text-xl font-black text-white tracking-tight">M</span>
                <span className="text-xl font-black text-brand-400 tracking-tight">K</span>
                <span className="w-px h-4 bg-ink-600 mx-2" />
                <span className="text-xl font-black text-white tracking-tight">ELECTRA</span>
              </div>
              <div className="h-[2px] bg-brand-500 rounded-full mt-1" />
              <span className="text-[9px] text-ink-400 font-mono tracking-widest block mt-1">
                Built on Trust. Powered by Quality.
              </span>
            </div>

            <p className="text-sm text-ink-400 leading-relaxed">
              Multidisciplinary engineering — software, embedded, mechanical and 3D manufacturing.
            </p>

            <div className="space-y-2">
              {COMPANY_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={getWhatsAppLink(phone.raw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> {phone.display}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-ink-500 mb-5">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { l: "Software Engineering", h: "/services/software" },
                { l: "Embedded & IoT", h: "/services/embedded-iot" },
                { l: "Mechanical Engineering", h: "/services/mechanical" },
                { l: "Industrial Automation", h: "/services/industrial-automation" },
                { l: "AI & Computer Vision", h: "/services/ai-ml" },
                { l: "Product Development", h: "/services/product-development" },
              ].map((link) => (
                <li key={link.h}>
                  <Link href={link.h} className="hover:text-white transition-colors">{link.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D Printing */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-ink-500 mb-5">3D Printing</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { l: "Overview", h: "/3d-printing" },
                { l: "Wholesale / B2B", h: "/3d-printing/wholesale" },
                { l: "Retail / B2C", h: "/3d-printing/retail" },
                { l: "Rapid Prototyping", h: "/3d-printing/prototyping" },
                { l: "Custom Parts", h: "/3d-printing/custom-parts" },
                { l: "Get a Quote", h: "/quote" },
              ].map((link) => (
                <li key={link.h}>
                  <Link href={link.h} className="hover:text-white transition-colors">{link.l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-ink-500 mb-5">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { l: "About", h: "/about" },
                { l: "Projects", h: "/projects" },
                { l: "Products", h: "/products" },
                { l: "Industries", h: "/industries" },
                { l: "Insights", h: "/insights" },
                { l: "Contact", h: "/contact" },
              ].map((link) => (
                <li key={link.h}>
                  <Link href={link.h} className="hover:text-white transition-colors">{link.l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-ink-700 flex flex-wrap items-center justify-between gap-4 text-xs text-ink-500">
          <p>© {new Date().getFullYear()} MK Electra. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {[{ l: "Privacy", h: "/privacy-policy" }, { l: "Terms", h: "/terms" }, { l: "Cookies", h: "/cookie-policy" }].map((l) => (
              <Link key={l.h} href={l.h} className="hover:text-ink-300 transition-colors">{l.l}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
