import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Home, MessageSquare, Terminal } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";

export default function NotFoundPage() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-navy-950 px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="max-w-xl w-full p-8 sm:p-10 rounded-2xl bg-navy-900 border border-steel-700/80 shadow-2xl corner-crosshairs text-center space-y-6 relative z-10">
        <div className="w-16 h-16 rounded-2xl bg-brand-500/20 text-cyan-400 flex items-center justify-center mx-auto border border-cyan-500/30">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="text-xs font-mono uppercase text-red-400 font-bold px-2.5 py-1 rounded bg-red-950/40 border border-red-500/30">
          HTTP_STATUS: 404_PAGE_NOT_FOUND
        </span>

        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Specified Endpoint Does Not Exist
        </h1>

        <p className="text-sm text-steel-400 leading-relaxed">
          The requested route, schematic, or resource is unavailable or has been relocated within the
          MK Electra architecture.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/"
            variant="glow"
            size="md"
            leftIcon={<Home className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Return to Homepage
          </Button>

          <Button
            href="/services"
            variant="secondary"
            size="md"
            className="w-full sm:w-auto"
          >
            Explore Services
          </Button>
        </div>

        <div className="pt-6 border-t border-steel-800 text-xs font-mono text-steel-500">
          Need immediate engineering assistance?{" "}
          <a
            href={getWhatsAppLink(COMPANY_INFO.phones[0].raw)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            WhatsApp Desk
          </a>
        </div>
      </div>
    </div>
  );
}
