import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MK Electra",
  description: "Privacy Policy and data protection terms for MK Electra.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-20 lg:py-28 bg-navy-950 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            LEGAL COMPLIANCE
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Privacy Policy</h1>
          <p className="text-xs font-mono text-steel-400 mt-2">Effective Date: January 1, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-steel-300 leading-relaxed">
          <p>
            At MK Electra (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), we are committed to protecting the privacy
            and confidentiality of our clients, website visitors, and partners. This Privacy Policy
            explains how we collect, use, and safeguard personal and proprietary technical information
            submitted through our website.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Information We Collect</h2>
          <p>
            We collect information provided directly by you when you request a quotation, submit a
            contact inquiry, or upload CAD files. This includes your name, email address, telephone/mobile
            number, company name, delivery location, project requirements, and technical design files
            (.STL, .STEP, .PDF, etc.).
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Engineering Confidentiality & IP Protection</h2>
          <p>
            All 3D CAD files, electronic schematics, firmware code, and project documentation submitted
            remain the exclusive intellectual property of the client. MK Electra does not share,
            redistribute, or reuse client design files for any third party without explicit written consent.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. How We Use Your Information</h2>
          <p>
            We use collected information solely to review engineering feasibility, formulate custom
            quotations, execute manufacturing orders, communicate project milestones, and provide
            technical support.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">4. Third-Party Sharing & Security</h2>
          <p>
            We do not sell or rent personal information. We employ industry-standard encryption, secure
            server protocols, and internal access controls to protect all data against unauthorized access.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">5. Contact Information</h2>
          <p>
            For questions regarding this Privacy Policy or to request deletion of your submitted files,
            contact us directly via WhatsApp (+91 8220660081) or through our official contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
