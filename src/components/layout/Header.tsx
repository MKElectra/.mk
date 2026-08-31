"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "3D Printing", href: "/3d-printing" },
  { label: "Projects", href: "/projects" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-navy-950/95 backdrop-blur-lg border-b border-steel-800/80"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex flex-col group shrink-0">
            <div className="flex items-center gap-0.5 leading-none">
              <span className="text-xl font-extrabold text-white tracking-tight">M</span>
              <span className="text-xl font-extrabold text-brand-500 tracking-tight">K</span>
              <span className="text-xl font-extrabold text-white tracking-tight ml-1.5">
                ELECTRA
              </span>
            </div>
            <div className="h-[2px] w-full bg-brand-500 mt-0.5 rounded-full" />
            <span className="text-[9px] text-steel-400 font-mono tracking-widest mt-0.5 leading-none">
              Built on Trust. Powered by Quality.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-steel-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {COMPANY_INFO.phones[0].display}
            </a>

            <Link
              href="/contact"
              className="px-4 py-2 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-steel-400 hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/80 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-navy-900 border-l border-steel-800 flex flex-col">
            <div className="flex items-center justify-between p-5 border-b border-steel-800">
              <span className="text-sm font-bold text-white">MK ELECTRA</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 text-steel-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 p-5 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2.5 px-3 text-sm font-medium text-steel-300 hover:text-white hover:bg-navy-800 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="p-5 border-t border-steel-800 space-y-3">
              {COMPANY_INFO.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={getWhatsAppLink(phone.raw)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-emerald-400 font-mono"
                >
                  <MessageSquare className="w-4 h-4" /> {phone.display}
                </a>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center px-4 py-2.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
