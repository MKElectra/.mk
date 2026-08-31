import React from "react";
import Link from "next/link";
import { Code2, Cpu, Cog, Printer, ArrowRight } from "lucide-react";

const DIVISIONS = [
  {
    number: "01",
    icon: <Code2 className="w-5 h-5" />,
    title: "Software Engineering",
    description:
      "Web platforms, mobile apps, enterprise dashboards, APIs and cloud-connected systems built for scale.",
    href: "/services/software",
    accent: "text-brand-500",
    border: "hover:border-brand-500/40",
  },
  {
    number: "02",
    icon: <Cpu className="w-5 h-5" />,
    title: "Embedded & IoT",
    description:
      "Firmware development on ESP32, STM32 and ARM. Industrial protocols — Modbus, MQTT, CAN, RS485.",
    href: "/services/embedded-iot",
    accent: "text-cyan-400",
    border: "hover:border-cyan-500/40",
  },
  {
    number: "03",
    icon: <Cog className="w-5 h-5" />,
    title: "Mechanical Engineering",
    description:
      "3D CAD modeling, machine design, enclosures, jigs, fixtures and production-ready engineering drawings.",
    href: "/services/mechanical",
    accent: "text-blue-400",
    border: "hover:border-blue-500/40",
  },
  {
    number: "04",
    icon: <Printer className="w-5 h-5" />,
    title: "3D Printing & Manufacturing",
    description:
      "Precision FDM printing in PLA, PETG, ABS, ASA, TPU and Carbon Fiber. Wholesale B2B and retail B2C.",
    href: "/3d-printing",
    accent: "text-amber-400",
    border: "hover:border-amber-500/40",
  },
];

export function CoreDivisions() {
  return (
    <section className="py-24 bg-navy-900 border-y border-steel-800/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-mono tracking-widest text-brand-500 uppercase mb-3">
            Core Divisions
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Four disciplines. One company.
            </h2>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm text-steel-400 hover:text-white transition-colors"
            >
              All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-800/30 rounded-xl overflow-hidden border border-steel-800/40">
          {DIVISIONS.map((div) => (
            <Link
              key={div.number}
              href={div.href}
              className={`group flex flex-col bg-navy-950 p-7 transition-all ${div.border}`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`${div.accent} transition-colors`}>{div.icon}</span>
                <span className="text-xs font-mono text-steel-700 group-hover:text-steel-500 transition-colors">
                  {div.number}
                </span>
              </div>

              <h3 className={`text-base font-bold text-white mb-3 group-hover:${div.accent} transition-colors`}>
                {div.title}
              </h3>

              <p className="text-sm text-steel-400 leading-relaxed flex-grow">
                {div.description}
              </p>

              <div className={`mt-6 flex items-center gap-1.5 text-xs font-mono ${div.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Learn more <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
