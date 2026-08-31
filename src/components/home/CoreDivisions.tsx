"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Code2, Cpu, Cog, Printer, ArrowRight } from "lucide-react";

const DIVISIONS = [
  {
    number: "01",
    icon: Code2,
    title: "Software Engineering",
    description: "Web platforms, mobile apps, enterprise dashboards, APIs and cloud-connected systems built for scale.",
    href: "/services/software",
    iconColor: "text-brand-500",
    iconBg: "bg-brand-50",
    border: "hover:border-brand-300",
    tag: "React · Next.js · Node.js · Python",
  },
  {
    number: "02",
    icon: Cpu,
    title: "Embedded & IoT",
    description: "Firmware on ESP32, STM32 & ARM. Industrial Modbus, MQTT, CAN, RS485 telemetry systems.",
    href: "/services/embedded-iot",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-300",
    tag: "ESP32 · STM32 · RTOS · CAN Bus",
  },
  {
    number: "03",
    icon: Cog,
    title: "Mechanical Engineering",
    description: "3D CAD modeling, machine structures, jigs, fixtures, enclosures and GD&T production drawings.",
    href: "/services/mechanical",
    iconColor: "text-slate-600",
    iconBg: "bg-slate-50",
    border: "hover:border-slate-300",
    tag: "SolidWorks · AutoCAD · FEA",
  },
  {
    number: "04",
    icon: Printer,
    title: "3D Printing & Manufacturing",
    description: "Precision FDM in PLA, PETG, ABS, ASA, TPU and Carbon Fiber. Wholesale B2B and retail B2C orders.",
    href: "/3d-printing",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-50",
    border: "hover:border-amber-300",
    tag: "PLA · PETG · ABS · ASA · TPU · CF",
  },
];

export function CoreDivisions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-surface-1 border-y border-surface-2">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between flex-wrap gap-6 mb-12"
        >
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-500">
              Core Divisions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-ink-900 tracking-tight mt-2">
              Four disciplines. One company.
            </h2>
            <p className="text-ink-500 mt-2 max-w-lg">
              Every engineering challenge under one roof — no handoffs, no delays.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {DIVISIONS.map((div, i) => (
            <motion.div
              key={div.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={div.href}
                className={`group block bg-white rounded-2xl border border-surface-2 ${div.border} p-6 h-full card-lift transition-all`}
              >
                {/* Top */}
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl ${div.iconBg} flex items-center justify-center`}>
                    <div.icon className={`w-5 h-5 ${div.iconColor}`} />
                  </div>
                  <span className="text-xs font-mono font-bold text-ink-200 group-hover:text-ink-400 transition-colors">
                    {div.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-ink-900 mb-2 group-hover:text-brand-600 transition-colors">
                  {div.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{div.description}</p>

                {/* Tech tag */}
                <p className="text-[10px] font-mono text-ink-300 group-hover:text-brand-400 transition-colors">
                  {div.tag}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-500 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1">
                  Learn more <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
