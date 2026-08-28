"use client";

import React, { useState } from "react";
import { COMPANY_INFO, WHATSAPP_TEMPLATES } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { FileUpload } from "@/components/ui/FileUpload";
import { useToast } from "@/components/ui/Toast";
import { Send, MessageSquare, CheckCircle2, ShieldAlert } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Software Development");
  const [projectType, setProjectType] = useState("New Project / MVP");
  const [requirement, setRequirement] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const serviceOptions = [
    "Software Development & Web Apps",
    "Embedded Systems & Firmware",
    "IoT & Telemetry Solutions",
    "Mechanical Engineering & 3D CAD",
    "Wholesale / Bulk 3D Printing",
    "Retail / Custom 3D Printing",
    "Industrial Automation & PLC/SCADA",
    "AI / ML & Computer Vision",
    "End-to-End Product Development",
    "Custom Engineering & Consulting",
  ];

  const projectTypeOptions = [
    "New Project / MVP",
    "Industrial Automation / Retrofit",
    "Batch Manufacturing / 3D Printing",
    "Architecture & Consulting",
    "Prototype Development",
    "Enterprise Software Integration",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim() || !email.trim() || !requirement.trim()) {
      toast({
        title: "Please Complete Required Fields",
        message: "Name, Mobile, Email, and Requirement are required.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Enquiry Sent Successfully",
        message: "Thank you! Our engineering team will review your specifications and reach out shortly.",
        type: "success",
      });
    }, 1200);
  };

  const handleWhatsAppUs = () => {
    const msg = `Hello MK Electra,
*Name:* ${name || "Not provided"}
*Company:* ${company || "Individual"}
*Service:* ${service}
*Project Type:* ${projectType}
*Requirement:* ${requirement || "Would like to discuss engineering solutions."}
*Timeline:* ${timeline || "Standard"}
*Budget:* ${budget || "To be estimated"}`;

    window.open(getWhatsAppLink(COMPANY_INFO.phones[0].raw, msg), "_blank");
  };

  if (isSuccess) {
    return (
      <div className="p-8 sm:p-12 rounded-2xl bg-navy-900 border border-emerald-500/40 text-center space-y-5 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white">Thank You for Reaching Out</h3>
        <p className="text-steel-300 max-w-md mx-auto text-sm leading-relaxed">
          We have received your project details. An MK Electra engineering specialist will analyze your
          requirements and get in touch within one business day.
        </p>

        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <Button
            variant="whatsapp"
            size="md"
            onClick={handleWhatsAppUs}
            leftIcon={<MessageSquare className="w-4 h-4" />}
          >
            Direct WhatsApp Follow-up (+91 8220660081)
          </Button>
          <Button
            variant="outline"
            size="md"
            onClick={() => {
              setIsSuccess(false);
              setRequirement("");
            }}
          >
            Submit Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-2xl bg-navy-900 border border-steel-700/80 shadow-2xl space-y-6 corner-crosshairs">
      <div className="border-b border-steel-800 pb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white">Let&apos;s Build Something Great.</h3>
        <p className="text-xs sm:text-sm text-steel-400 mt-1">
          Tell us about your engineering challenge, software requirement, or production batch.
        </p>
      </div>

      {/* Row 1: Name & Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Full Name *
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Anand Sundaram"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="e.g. Apex Engineering Pvt Ltd"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>
      </div>

      {/* Row 2: Mobile & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Mobile / Phone Number *
          </label>
          <input
            type="tel"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g. +91 82206 60081"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Email Address *
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. anand@company.com"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>
      </div>

      {/* Row 3: Service Division & Project Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Primary Service Required *
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
          >
            {serviceOptions.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Project Engagement Type
          </label>
          <select
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
          >
            {projectTypeOptions.map((p, idx) => (
              <option key={idx} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 4: Requirement Description */}
      <div>
        <label className="text-xs font-semibold text-steel-300 block mb-1.5">
          Project Requirement / Engineering Challenge *
        </label>
        <textarea
          required
          rows={4}
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
          placeholder="Describe your technical specifications, goals, operating conditions, machine specs, or desired outcomes..."
          className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
        />
      </div>

      {/* Row 5: Budget & Timeline (Optional) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Estimated Budget Range (Optional)
          </label>
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            placeholder="e.g. Flexible / Quote required"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-steel-300 block mb-1.5">
            Target Timeline (Optional)
          </label>
          <input
            type="text"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            placeholder="e.g. 2-4 Weeks / Immediate"
            className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 placeholder:text-steel-600"
          />
        </div>
      </div>

      {/* Row 6: Optional File Upload */}
      <div>
        <label className="text-xs font-semibold text-steel-300 block mb-1.5">
          Attach Specification / CAD / Diagram (Optional)
        </label>
        <FileUpload
          onFileSelect={(file) => setUploadedFile(file)}
          label="Upload RFP, PDF, CAD (STEP/STL), or Image"
          sublabel="Max 50MB. We maintain strict non-disclosure for all client engineering data."
        />
      </div>

      {/* Submit Buttons */}
      <div className="pt-4 border-t border-steel-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          type="submit"
          variant="glow"
          size="lg"
          isLoading={isSubmitting}
          leftIcon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto font-bold"
        >
          Send Enquiry
        </Button>

        <Button
          type="button"
          variant="whatsapp"
          size="lg"
          onClick={handleWhatsAppUs}
          leftIcon={<MessageSquare className="w-4 h-4" />}
          className="w-full sm:w-auto font-medium"
        >
          WhatsApp Us Directly
        </Button>
      </div>
    </form>
  );
}
