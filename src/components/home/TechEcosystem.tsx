"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tabs } from "@/components/ui/Tabs";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Cpu,
  Zap,
  Bot,
  Cog,
  Printer,
  CheckCircle2,
} from "lucide-react";

export function TechEcosystem() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const techCategories = [
    {
      id: "software",
      name: "Software & Cloud",
      icon: <Code2 className="w-4 h-4 text-brand-400" />,
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Python",
        "FastAPI",
        "Django",
        ".NET",
        "C#",
        "React Native",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Docker",
        "AWS / Azure",
      ],
    },
    {
      id: "embedded",
      name: "Embedded & IoT",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      items: [
        "ESP32",
        "STM32",
        "ARM Cortex",
        "Raspberry Pi",
        "Arduino",
        "Embedded C / C++",
        "FreeRTOS",
        "UART / SPI / I2C",
        "CAN Bus (2.0B)",
        "Modbus RTU / TCP",
        "RS485 Isolated",
        "MQTT / TLS",
        "BLE 5.0",
        "4G LTE-M Telemetry",
      ],
    },
    {
      id: "industrial",
      name: "Industrial Automation",
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      items: [
        "PLC Programming (Ladder / ST)",
        "HMI Touchscreen Design",
        "SCADA Central Telemetry",
        "Industrial IoT Gateways",
        "Photoelectric & Proximity Sensors",
        "VFD & Servo Motor Control",
        "Data Acquisition (DAQ)",
        "Relay & Solenoid Control",
      ],
    },
    {
      id: "ai",
      name: "AI & Computer Vision",
      icon: <Bot className="w-4 h-4 text-purple-400" />,
      items: [
        "OpenCV",
        "Python Machine Learning",
        "Computer Vision Pipelines",
        "Automated Optical Inspection (AOI)",
        "OCR Text Extraction",
        "Object Detection & Classification",
        "Predictive Maintenance Analytics",
        "Edge AI Accelerators",
      ],
    },
    {
      id: "mechanical",
      name: "Mechanical CAD",
      icon: <Cog className="w-4 h-4 text-blue-400" />,
      items: [
        "3D CAD Modeling",
        "Parametric Machine Design",
        "Product Enclosure Design",
        "Assembly Jigs & Fixtures",
        "2D Engineering Drawings",
        "GD&T Drafting",
        "Design for Manufacturing (DFM)",
        "Sheet Metal & Weldments",
      ],
    },
    {
      id: "3dprinting",
      name: "3D Printing & Polymers",
      icon: <Printer className="w-4 h-4 text-teal-400" />,
      items: [
        "FDM High-Precision Printing",
        "Wholesale Batch Farm",
        "PLA / PLA+ Tough",
        "PETG (Chemical/Water Proof)",
        "ABS (High Temp 90°C)",
        "ASA (UV & Outdoor Weather)",
        "TPU (Flexible 95A)",
        "Carbon Fiber Composites",
        "Heat-Set Brass Inserts",
      ],
    },
  ];

  const tabOptions = [
    { id: "all", label: "All Engineering Stacks" },
    { id: "software", label: "Software" },
    { id: "embedded", label: "Embedded" },
    { id: "industrial", label: "Automation" },
    { id: "ai", label: "AI / ML" },
    { id: "mechanical", label: "Mechanical CAD" },
    { id: "3dprinting", label: "3D Printing" },
  ];

  const visibleCategories =
    activeTab === "all"
      ? techCategories
      : techCategories.filter((c) => c.id === activeTab);

  return (
    <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden border-b border-steel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="TECHNOLOGY ECOSYSTEM"
          kicker="OUR ENGINEERING STACK"
          title="Battle-Tested Protocols, Frameworks & Tooling"
          subtitle="We select robust, maintainable, and industry-standard technologies to ensure system reliability and long-term support."
          align="center"
        />

        {/* Tab Filter */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2">
          <Tabs
            tabs={tabOptions}
            activeTab={activeTab}
            onChange={(id) => setActiveTab(id)}
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 rounded-2xl bg-navy-900 border border-steel-800 hover:border-steel-700 transition-all flex flex-col justify-between corner-crosshairs shadow-xl"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 border-b border-steel-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-navy-950 border border-steel-700">
                    {cat.icon}
                  </div>
                  <h3 className="text-base font-bold text-white">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-950 text-steel-200 border border-steel-800 hover:border-cyan-500/40 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
