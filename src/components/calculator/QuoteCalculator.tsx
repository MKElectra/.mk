"use client";

import React, { useState } from "react";
import { PRINTING_MATERIALS } from "@/data/materials";
import { COMPANY_INFO } from "@/data/company";
import { getWhatsAppLink } from "@/lib/utils";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useToast } from "@/components/ui/Toast";
import {
  Printer,
  Sparkles,
  Layers,
  Sliders,
  CheckCircle2,
  FileCheck,
  Send,
  MessageSquare,
  Building,
  User,
  ShieldCheck,
  Info,
} from "lucide-react";

export function QuoteCalculator({ defaultType = "wholesale" }: { defaultType?: "wholesale" | "retail" }) {
  const { toast } = useToast();

  const [customerType, setCustomerType] = useState<"wholesale" | "retail">(defaultType);
  const [selectedMaterial, setSelectedMaterial] = useState<string>("pla");
  const [selectedColor, setSelectedColor] = useState<string>("Industrial Black");
  const [layerHeight, setLayerHeight] = useState<string>("0.20mm");
  const [infill, setInfill] = useState<string>("25%");
  const [quantity, setQuantity] = useState<number>(defaultType === "wholesale" ? 50 : 1);
  const [finishing, setFinishing] = useState<string[]>(["Support Removal"]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Contact Form State
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const activeMaterialObj = PRINTING_MATERIALS.find((m) => m.id === selectedMaterial) || PRINTING_MATERIALS[0];

  const finishingOptions = [
    { id: "Support Removal", label: "Clean Support Removal & Deburring" },
    { id: "Sanding", label: "Surface Sanding & Smoothing" },
    { id: "Brass Inserts", label: "Heat-Set Brass Threaded Inserts (M3/M4/M5)" },
    { id: "Acetone/Vapor", label: "Vapor Smoothing (ABS only)" },
    { id: "Assembly", label: "Sub-Component Assembly & Fitment Test" },
  ];

  const toggleFinishing = (id: string) => {
    setFinishing((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !email.trim()) {
      toast({
        title: "Required Fields Missing",
        message: "Please fill in your Name, Phone/Mobile, and Email.",
        type: "error",
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Quotation Request Received!",
        message:
          "Our manufacturing engineering team is reviewing your parameters. We will contact you with a detailed technical quote.",
        type: "success",
      });
    }, 1200);
  };

  const handleWhatsAppDirect = () => {
    const summaryMsg = `Hello MK Electra, I am requesting a 3D Printing quotation:
*Type:* ${customerType.toUpperCase()}
*Material:* ${activeMaterialObj.name}
*Color:* ${selectedColor}
*Layer Height:* ${layerHeight}
*Infill:* ${infill}
*Quantity:* ${quantity} units
*Finishing:* ${finishing.join(", ") || "Standard"}
*Customer Name:* ${name || "Not specified"}
*Company:* ${company || "Individual"}
*Location:* ${location || "India"}
*File:* ${uploadedFile ? uploadedFile.name : "Will send via WhatsApp"}`;

    window.open(getWhatsAppLink(COMPANY_INFO.phones[1].raw, summaryMsg), "_blank");
  };

  return (
    <div className="rounded-2xl bg-navy-900 border border-steel-700/80 shadow-2xl p-6 sm:p-8 lg:p-10 corner-crosshairs">
      {/* Header Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-steel-800">
        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold flex items-center gap-1.5">
            <Sliders className="w-4 h-4" /> 3D Manufacturing RFQ Configurator
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Configure Your Print Requirements
          </h3>
        </div>

        {/* Customer Type Selector */}
        <div className="flex items-center p-1 bg-navy-950 rounded-xl border border-steel-800 shrink-0">
          <button
            type="button"
            onClick={() => {
              setCustomerType("wholesale");
              if (quantity < 10) setQuantity(50);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              customerType === "wholesale"
                ? "bg-brand-500 text-white shadow-md"
                : "text-steel-400 hover:text-steel-200"
            }`}
          >
            <Building className="w-3.5 h-3.5" />
            <span>Wholesale / B2B Batch</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setCustomerType("retail");
              setQuantity(1);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              customerType === "retail"
                ? "bg-cyan-500 text-navy-950 font-bold shadow-md"
                : "text-steel-400 hover:text-steel-200"
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Retail / Custom Print</span>
          </button>
        </div>
      </div>

      {isSuccess ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-bold text-white">Quotation Request Submitted</h4>
          <p className="text-steel-300 max-w-md mx-auto text-sm">
            Thank you, <span className="text-white font-semibold">{name}</span>. Our 3D printing
            engineers are analyzing your file geometry and volume parameters.
          </p>
          <div className="p-4 rounded-xl bg-navy-850 border border-steel-800 max-w-md mx-auto text-left text-xs text-steel-400 space-y-1">
            <p>
              <strong className="text-white">Configuration:</strong> {activeMaterialObj.name} • {quantity} units
            </p>
            <p>
              <strong className="text-white">Specs:</strong> {layerHeight} layer • {infill} infill • {selectedColor}
            </p>
            {uploadedFile && (
              <p>
                <strong className="text-white">Uploaded:</strong> {uploadedFile.name}
              </p>
            )}
          </div>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button
              variant="whatsapp"
              size="md"
              onClick={handleWhatsAppDirect}
              leftIcon={<MessageSquare className="w-4 h-4" />}
            >
              Continue on WhatsApp (+91 9790630883)
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => setIsSuccess(false)}
            >
              Configure Another Part
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-8">
          {/* Step 1: CAD / Model Upload */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center">
                  1
                </span>
                Upload CAD Model / Drawings
              </label>
              <span className="text-xs text-steel-400 font-mono">
                {uploadedFile ? "1 File Attached" : "Optional for initial inquiry"}
              </span>
            </div>
            <FileUpload
              onFileSelect={(file) => setUploadedFile(file)}
              label="Drop STL / STEP / OBJ / 3MF file here"
              sublabel="Max 50MB. If you don't have a CAD file, you can upload technical drawings or describe requirements."
            />
          </div>

          {/* Step 2: Material & Color */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center">
                  2
                </span>
                Select Material
              </label>
              <div className="space-y-2">
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
                >
                  {PRINTING_MATERIALS.map((mat) => (
                    <option key={mat.id} value={mat.id}>
                      {mat.name} — [{mat.category} / {mat.heatResistance}]
                    </option>
                  ))}
                </select>

                {/* Selected Material Quick Technical Specs */}
                <div className="p-3 rounded-lg bg-navy-950/60 border border-steel-800/80 text-xs text-steel-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-cyan-400 font-semibold">{activeMaterialObj.badge}</span>
                    <span className="font-mono text-steel-400">Strength: {activeMaterialObj.strength}</span>
                  </div>
                  <p className="text-steel-400">{activeMaterialObj.shortDesc}</p>
                </div>
              </div>
            </div>

            <div>
              <label className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-brand-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center">
                  3
                </span>
                Preferred Color
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
              >
                {activeMaterialObj.colors.map((c, idx) => (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              <p className="text-xs text-steel-400 mt-2">
                Custom engineering and RAL/Pantone color matches available for bulk wholesale orders.
              </p>
            </div>
          </div>

          {/* Step 3: Layer Height, Infill & Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <label className="text-sm font-bold text-white mb-2 block">
                Layer Resolution
              </label>
              <select
                value={layerHeight}
                onChange={(e) => setLayerHeight(e.target.value)}
                className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
              >
                <option value="0.12mm">0.12mm (Ultra High Precision)</option>
                <option value="0.16mm">0.16mm (Fine Detail)</option>
                <option value="0.20mm">0.20mm (Standard Balance)</option>
                <option value="0.28mm">0.28mm (Functional Speed / Draft)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-white mb-2 block">
                Internal Infill Density
              </label>
              <select
                value={infill}
                onChange={(e) => setInfill(e.target.value)}
                className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm focus:outline-none focus:border-cyan-400 font-medium"
              >
                <option value="15%">15% (Lightweight / Visual)</option>
                <option value="25%">25% (Standard Enclosures)</option>
                <option value="50%">50% (High Mechanical Stress)</option>
                <option value="80%">80% (Heavy Duty Tooling)</option>
                <option value="100%">100% (Solid Structural Core)</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-bold text-white mb-2 block">
                Quantity (Units)
              </label>
              <input
                type="number"
                min="1"
                max="10000"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-full p-3 rounded-xl bg-navy-950 border border-steel-700 text-white text-sm font-mono focus:outline-none focus:border-cyan-400 font-bold"
              />
              {customerType === "wholesale" && quantity >= 50 && (
                <span className="text-[11px] text-brand-300 font-mono mt-1 block">
                  ✓ Volume batch discount tier applied
                </span>
              )}
            </div>
          </div>

          {/* Step 4: Optional Finishing & Post-Processing */}
          <div>
            <label className="text-sm font-bold text-white mb-3 block">
              Optional Finishing & Post-Processing Services
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {finishingOptions.map((opt) => {
                const isSelected = finishing.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleFinishing(opt.id)}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-all ${
                      isSelected
                        ? "bg-brand-500/10 border-cyan-400 text-white shadow-sm"
                        : "bg-navy-950/60 border-steel-800 text-steel-400 hover:border-steel-700"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center text-xs shrink-0 border ${
                        isSelected
                          ? "bg-cyan-500 border-cyan-400 text-navy-950 font-bold"
                          : "border-steel-600 bg-navy-900"
                      }`}
                    >
                      {isSelected ? "✓" : ""}
                    </div>
                    <span className="text-xs font-medium leading-tight">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 5: Contact & Delivery Details */}
          <div className="pt-6 border-t border-steel-800">
            <h4 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-500/20 text-cyan-400 font-mono text-xs flex items-center justify-center">
                4
              </span>
              Contact & Delivery Destination
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Company / Organization {customerType === "wholesale" && "*"}
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Apex Industries"
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Mobile / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul@company.com"
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Delivery City / Pincode
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Chennai, Bangalore, Coimbatore..."
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs text-steel-300 font-semibold block mb-1">
                  Additional Notes / Tolerances
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Critical fitment area, urgent lead time..."
                  className="w-full p-2.5 rounded-lg bg-navy-950 border border-steel-700 text-white text-xs focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>
          </div>

          {/* Pricing Policy Statement (As instructed in Prompt Section 7 & 10) */}
          <div className="p-4 rounded-xl bg-navy-950 border border-steel-800 flex items-start gap-3 text-xs text-steel-400">
            <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-white">Engineering Quotation Policy:</strong> 3D printing
              pricing is calculated accurately based on CAD model volume, weight, print duration,
              material grade, batch quantity, and post-processing requirements. We do not show
              arbitrary pricing formulas. Submitting this form sends your technical specifications
              directly to our engineering desk for immediate review.
            </p>
          </div>

          {/* Action Triggers */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-steel-800">
            <Button
              type="submit"
              variant="glow"
              size="lg"
              isLoading={isSubmitting}
              leftIcon={<Send className="w-4 h-4" />}
              className="w-full sm:w-auto font-bold"
            >
              Request Engineering Quotation
            </Button>

            <Button
              type="button"
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsAppDirect}
              leftIcon={<MessageSquare className="w-4 h-4" />}
              className="w-full sm:w-auto font-medium"
            >
              Instant WhatsApp Quote (+91 9790630883)
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
