import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  Award,
  Settings2,
  Cpu,
  Code2,
  Cog,
  Printer,
  Zap,
  Target,
  Users,
} from "lucide-react";
import { FinalCTA } from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About MK Electra | Build on Trust. Powered by Quality.",
  description:
    "Learn about MK Electra's multidisciplinary engineering philosophy, core values, technical standards, and integrated approach across software, embedded IoT, mechanical CAD, and 3D manufacturing.",
};

export default function AboutPage() {
  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-400" />,
      title: "Build on Trust",
      desc: "Transparent engineering feasibility, realistic delivery timelines, honest technical consulting, and zero unverified marketing claims.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-cyan-400" />,
      title: "Powered by Quality",
      desc: "Robust code architectures, noise-isolated PCB electronics, precise CAD tolerances, and dimensional quality inspection.",
    },
    {
      icon: <Layers className="w-6 h-6 text-teal-400" />,
      title: "Multidisciplinary Synergy",
      desc: "Eliminating the friction between independent software agencies, hardware design studios, and machine shops.",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Practical Reality",
      desc: "Designing solutions tailored for actual industrial environments, thermal conditions, and ease of maintenance.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
        <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-brand-500/20 text-cyan-300 border border-cyan-400/40 uppercase">
              ABOUT OUR COMPANY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ONE ENGINEERING PARTNER.{" "}
            <span className="block bg-gradient-to-r from-brand-400 via-cyan-300 to-white bg-clip-text text-transparent">
              MULTIPLE CAPABILITIES.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-steel-300 mt-6 leading-relaxed">
            MK Electra brings software engineering, embedded systems, mechanical engineering, 3D
            printing and intelligent technologies together to solve real-world industrial and
            commercial problems under one roof.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 bg-navy-900 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
                THE MK ELECTRA ETHOS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                From Concept to Production Without Fragmented Handoffs
              </h2>
              <p className="text-sm sm:text-base text-steel-300 leading-relaxed">
                Traditional product development is plagued by fragmented communication: a software
                team builds an app disconnected from hardware constraints, an industrial designer
                creates a CAD casing without considering PCB mounting, and a machine shop rejects the
                design for lack of DFM (Design for Manufacturing) foresight.
              </p>
              <p className="text-sm sm:text-base text-steel-400 leading-relaxed">
                MK Electra was founded to eliminate this friction. By housing full-stack software
                engineers, embedded firmware architects, mechanical designers, and advanced 3D
                printing machinery in one synchronized team, we deliver integrated, production-ready
                engineering solutions faster and with uncompromising reliability.
              </p>
            </div>

            {/* Architecture Card */}
            <div className="lg:col-span-6 p-8 rounded-2xl bg-navy-950 border border-steel-800 corner-crosshairs shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Settings2 className="w-5 h-5 text-cyan-400" />
                The Integrated Engineering Advantage
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-steel-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Direct Hardware & Firmware Co-Design:</strong>{" "}
                    Pinouts, bus topologies, and interrupt timers are designed simultaneously with
                    PCB traces.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Mechanical & Thermal Synchronization:</strong>{" "}
                    Enclosure clearances, heat dissipation, and snap-fit ribs are verified via 3D CAD
                    models.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Same-Week Physical Validation:</strong> In-house
                    batch 3D printing prints functional ASA/PETG housings within hours of CAD sign-off.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">End-to-End Software Integration:</strong> Native
                    mobile apps and web SCADA dashboards connect seamlessly to field hardware via
                    MQTT and WebSockets.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-navy-950 border-b border-steel-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="OUR PRINCIPLES"
            kicker="CORE VALUES"
            title="The Pillars That Guide Every Engineering Project"
            subtitle="We adhere strictly to engineering rigor, client confidentiality, and practical operational durability."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-cyan-500/40 transition-all corner-crosshairs flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-steel-700 flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-steel-400 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
