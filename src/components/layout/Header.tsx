"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/data/company";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";
import {
  ChevronDown,
  Menu,
  MessageSquare,
  Sparkles,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"services" | "3d-printing" | null>(null);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-navy-950/95 backdrop-blur-lg border-b border-steel-800/80 shadow-2xl py-3"
            : "bg-navy-950/70 backdrop-blur-md border-b border-steel-800/50 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo with Orange Lightning Emblem & Official Tagline */}
            <div onMouseEnter={() => setActiveMegaMenu(null)}>
              <Logo size="md" showTagline={true} />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {NAVIGATION_LINKS.map((link) => {
                if (link.hasMegaMenu) {
                  const isOpen = activeMegaMenu === link.divisionKey;
                  return (
                    <div
                      key={link.href}
                      className="relative"
                      onMouseEnter={() =>
                        setActiveMegaMenu(link.divisionKey as "services" | "3d-printing")
                      }
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                          isOpen
                            ? "text-brand-400 bg-navy-900 border border-brand-500/30"
                            : "text-steel-300 hover:text-white hover:bg-navy-900/60"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isOpen ? "transform rotate-180 text-brand-400" : "text-steel-400"
                          }`}
                        />
                      </Link>

                      {/* Mega Menu Dropdown */}
                      {isOpen && (
                        <div onMouseLeave={() => setActiveMegaMenu(null)}>
                          <MegaMenu
                            divisionKey={link.divisionKey as "services" | "3d-printing"}
                            onClose={() => setActiveMegaMenu(null)}
                          />
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setActiveMegaMenu(null)}
                    className="px-3 py-2 text-sm font-medium text-steel-300 hover:text-white hover:bg-navy-900/60 rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action CTAs */}
            <div
              className="hidden lg:flex items-center gap-3"
              onMouseEnter={() => setActiveMegaMenu(null)}
            >
              {/* Direct WhatsApp Call Pill */}
              <a
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:inline-flex items-center gap-2 px-3 py-2 text-xs font-mono rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-900/40 hover:border-emerald-400 transition-all group"
                title="Direct WhatsApp Engineering Desk"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>+91 8220660081</span>
              </a>

              <Button
                href="/quote"
                variant="outline"
                size="sm"
                className="font-semibold text-xs border-steel-700 hover:border-brand-400 hover:text-brand-300"
              >
                Instant RFQ
              </Button>

              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="text-xs font-bold bg-brand-500 hover:bg-brand-600 shadow-brand-500/30 text-white"
              >
                Start a Project
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-400"
                aria-label="WhatsApp Us"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="p-2 rounded-lg text-steel-300 hover:text-white bg-navy-900 border border-steel-700"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
