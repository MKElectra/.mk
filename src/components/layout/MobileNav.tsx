"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS, COMPANY_INFO } from "@/data/company";
import { CORE_DIVISIONS, ADVANCED_CAPABILITIES } from "@/data/divisions";
import { Logo } from "@/components/ui/Logo";
import { getWhatsAppLink } from "@/lib/utils";
import {
  X,
  ChevronDown,
  Phone,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    services: false,
    "3d-printing": false,
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-950/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-navy-900 border-l border-steel-800 shadow-2xl z-10 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header with Logo */}
          <div className="p-5 flex items-center justify-between border-b border-steel-800">
            <Logo size="sm" showTagline={false} />
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-steel-400 hover:text-white hover:bg-navy-800 transition-colors"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {NAVIGATION_LINKS.map((link) => {
              if (link.hasMegaMenu && link.divisionKey === "services") {
                const isExpanded = expandedSections.services;
                return (
                  <div key={link.href} className="border-b border-steel-800/60 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleSection("services")}
                      className="w-full py-2.5 px-3 flex items-center justify-between text-sm font-semibold text-steel-200 hover:text-white hover:bg-navy-850 rounded-lg"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-steel-400 transition-transform ${
                          isExpanded ? "transform rotate-180 text-brand-400" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-navy-950/50 rounded-lg my-1">
                        <span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider block px-2 font-bold">
                          Core Divisions
                        </span>
                        {CORE_DIVISIONS.map((div) => (
                          <Link
                            key={div.id}
                            href={div.slug}
                            onClick={onClose}
                            className="block py-1.5 px-2 text-xs text-steel-300 hover:text-brand-300 hover:bg-navy-800/60 rounded transition-colors"
                          >
                            {div.number} — {div.title}
                          </Link>
                        ))}
                        <span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider block px-2 pt-2 font-bold">
                          Advanced Capabilities
                        </span>
                        {ADVANCED_CAPABILITIES.map((cap) => (
                          <Link
                            key={cap.id}
                            href={cap.slug}
                            onClick={onClose}
                            className="block py-1.5 px-2 text-xs text-steel-300 hover:text-brand-300 hover:bg-navy-800/60 rounded transition-colors"
                          >
                            • {cap.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              if (link.hasMegaMenu && link.divisionKey === "3d-printing") {
                const isExpanded = expandedSections["3d-printing"];
                return (
                  <div key={link.href} className="border-b border-steel-800/60 pb-1">
                    <button
                      type="button"
                      onClick={() => toggleSection("3d-printing")}
                      className="w-full py-2.5 px-3 flex items-center justify-between text-sm font-semibold text-steel-200 hover:text-white hover:bg-navy-850 rounded-lg"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-steel-400 transition-transform ${
                          isExpanded ? "transform rotate-180 text-brand-400" : ""
                        }`}
                      />
                    </button>

                    {isExpanded && (
                      <div className="pl-4 pr-2 py-2 space-y-1.5 bg-navy-950/50 rounded-lg my-1">
                        <Link
                          href="/3d-printing/wholesale"
                          onClick={onClose}
                          className="block py-1.5 px-2 text-xs text-brand-300 font-semibold hover:bg-navy-800/60 rounded"
                        >
                          Wholesale / B2B Batch Printing
                        </Link>
                        <Link
                          href="/3d-printing/retail"
                          onClick={onClose}
                          className="block py-1.5 px-2 text-xs text-cyan-300 font-semibold hover:bg-navy-800/60 rounded"
                        >
                          Retail / Custom Single-Piece
                        </Link>
                        <Link
                          href="/3d-printing/prototyping"
                          onClick={onClose}
                          className="block py-1.5 px-2 text-xs text-steel-300 hover:text-white hover:bg-navy-800/60 rounded"
                        >
                          Rapid Prototyping
                        </Link>
                        <Link
                          href="/3d-printing/custom-parts"
                          onClick={onClose}
                          className="block py-1.5 px-2 text-xs text-steel-300 hover:text-white hover:bg-navy-800/60 rounded"
                        >
                          Custom Enclosures & Parts
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="block py-2.5 px-3 text-sm font-semibold text-steel-200 hover:text-white hover:bg-navy-850 rounded-lg transition-colors border-b border-steel-800/30"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-steel-800 bg-navy-950/90 space-y-3">
          <div className="flex flex-col gap-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full font-bold bg-brand-500 hover:bg-brand-600 text-white"
              onClick={onClose}
            >
              Start a Project <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button
              href="/quote"
              variant="secondary"
              size="md"
              className="w-full font-bold"
              onClick={onClose}
            >
              Get 3D Print Quote
            </Button>
          </div>

          <div className="pt-3 border-t border-steel-800/80 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-brand-400 font-bold block">
              Direct Engineering Contact
            </span>
            {COMPANY_INFO.phones.map((phone, idx) => (
              <a
                key={idx}
                href={getWhatsAppLink(phone.raw)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-navy-900 border border-steel-800 text-xs text-steel-200 hover:border-emerald-500/50 hover:text-emerald-300 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="font-mono">{phone.display}</span>
                </div>
                <span className="text-[10px] text-steel-400">{phone.label.split(" ")[0]}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
