import { HeroSection } from "@/components/home/HeroSection";
import { CoreDivisions } from "@/components/home/CoreDivisions";
import { WhyMKElectra } from "@/components/home/WhyMKElectra";
import { EngineeringProcess } from "@/components/home/EngineeringProcess";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <HeroSection />
      <CoreDivisions />
      <WhyMKElectra />
      <FeaturedProjects />
      <EngineeringProcess />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}
