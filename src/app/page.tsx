import React from "react";
import { TrustStrip } from "@/components/home/TrustStrip";
import { HeroSection } from "@/components/home/HeroSection";
import { CoreDivisions } from "@/components/home/CoreDivisions";
import { AboutSection } from "@/components/home/AboutSection";
import { WhyMKElectra } from "@/components/home/WhyMKElectra";
import { AutomationSection } from "@/components/home/AutomationSection";
import { AIMLSection } from "@/components/home/AIMLSection";
import { ProductDevSection } from "@/components/home/ProductDevSection";
import { ThreeDPrintingSection } from "@/components/home/ThreeDPrintingSection";
import { EngineeringProcess } from "@/components/home/EngineeringProcess";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { TechEcosystem } from "@/components/home/TechEcosystem";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { QuickContactSection } from "@/components/home/QuickContactSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 01 — Trust Strip */}
      <TrustStrip />

      {/* 03 — Hero */}
      <HeroSection />

      {/* 04 — Four Core Divisions */}
      <CoreDivisions />

      {/* 05 — About MK Electra */}
      <AboutSection />

      {/* 06 — Why MK Electra */}
      <WhyMKElectra />

      {/* 07 — Industrial Automation */}
      <AutomationSection />

      {/* 08 — AI / ML */}
      <AIMLSection />

      {/* 09 — Product Development */}
      <ProductDevSection />

      {/* 10 — 3D Printing Wholesale + Retail */}
      <ThreeDPrintingSection />

      {/* 11 — Engineering Process */}
      <EngineeringProcess />

      {/* 12 — Featured Products */}
      <FeaturedProducts />

      {/* 13 — Featured Projects */}
      <FeaturedProjects />

      {/* 14 — Industries */}
      <IndustriesSection />

      {/* 15 — Technology Ecosystem */}
      <TechEcosystem />

      {/* 16 — FAQ */}
      <FAQSection />

      {/* 17 — Final CTA */}
      <FinalCTA />

      {/* 18 — Contact */}
      <QuickContactSection />
    </div>
  );
}
