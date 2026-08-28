export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Software" | "Embedded & IoT" | "Mechanical" | "3D Printing" | "Automation & Product Dev";
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-01",
    question: "What does MK Electra do?",
    answer:
      "MK Electra is a multidisciplinary Engineering & Technology Solutions company. We engineer ideas into intelligent, reliable, and production-ready solutions across Software Engineering, Embedded & IoT Systems, Mechanical Engineering, and Advanced 3D Printing & Manufacturing, alongside Industrial Automation and AI/ML capabilities.",
    category: "General",
  },
  {
    id: "faq-02",
    question: "What are MK Electra's four core divisions?",
    answer:
      "Our four foundational divisions are: 01 — Software (Web, Mobile, Enterprise, Cloud & SaaS), 02 — Embedded & IoT (Firmware, Microcontrollers, Industrial Protocols, Telemetry), 03 — Mechanical Engineering (Machine Design, 3D CAD, Tooling, Jigs & Fixtures), and 04 — 3D Printing & Manufacturing (Wholesale B2B Batch Production & Retail B2C Custom Prints).",
    category: "General",
  },
  {
    id: "faq-03",
    question: "Do you develop custom software?",
    answer:
      "Yes. We develop full-stack enterprise web platforms, native/cross-platform mobile apps, cloud backends, real-time industrial telemetry dashboards, SaaS applications, custom APIs, and database architectures using modern stacks such as React.js, Next.js, TypeScript, Node.js, Python (FastAPI/Django), and .NET.",
    category: "Software",
  },
  {
    id: "faq-04",
    question: "Do you develop embedded and IoT systems?",
    answer:
      "Yes. We specialize in embedded firmware and hardware integration for ESP32, STM32, ARM Cortex, and Arduino platforms. We build multi-protocol communication bridges using RS485, Modbus RTU/TCP, CAN bus, UART, SPI, I2C, MQTT, Wi-Fi, Bluetooth BLE, and 4G/GSM telemetry.",
    category: "Embedded & IoT",
  },
  {
    id: "faq-05",
    question: "Can you design industrial machines?",
    answer:
      "Yes. Our mechanical team delivers industrial machine design, 3D CAD modeling, custom mechanism design, automated indexing tables, machine structural frames, sheet metal enclosures, assembly jigs, inspection fixtures, and fabrication-ready 2D engineering drawings with full GD&T tolerances.",
    category: "Mechanical",
  },
  {
    id: "faq-06",
    question: "Do you provide industrial automation?",
    answer:
      "Yes. We provide complete industrial automation spanning PLC programming, HMI touchscreen interface development, SCADA central monitoring, VFD motor control, sensor integration, conveyor sortation, data acquisition (DAQ), and retrofitting of legacy industrial machinery.",
    category: "Automation & Product Dev",
  },
  {
    id: "faq-07",
    question: "Do you provide 3D printing for businesses?",
    answer:
      "Yes. We provide comprehensive B2B 3D printing services for manufacturing enterprises, engineering firms, and hardware startups. This includes prototype validation batches, end-use functional components, custom electronics enclosures, assembly jigs, and repeat production runs.",
    category: "3D Printing",
  },
  {
    id: "faq-08",
    question: "Do you offer wholesale 3D printing?",
    answer:
      "Yes. Our wholesale 3D printing division is dedicated to bulk and batch production orders. We offer volume-based tiered quotations, rapid turnaround times, high repeatability across batches, and engineering support for batch manufacturing.",
    category: "3D Printing",
  },
  {
    id: "faq-09",
    question: "Do you accept single-piece retail 3D printing orders?",
    answer:
      "Yes. Through our retail 3D printing service, individual creators, makers, hobbyists, and innovators can order single-piece custom prints, personalized models, replacement brackets, and one-off functional prototypes.",
    category: "3D Printing",
  },
  {
    id: "faq-10",
    question: "Can I send my own STL / STEP / OBJ file?",
    answer:
      "Absolutely. You can upload standard 3D CAD formats including .STL, .STEP, .STP, and .OBJ directly through our online quote system or email/WhatsApp. Our engineering team reviews the geometry, infill orientation, and material compatibility to ensure optimal print quality.",
    category: "3D Printing",
  },
  {
    id: "faq-11",
    question: "Can you help design the 3D model if I don't have a CAD file?",
    answer:
      "Yes. If you only have a rough sketch, dimensions, broken sample part, or physical reference, our mechanical design team can reverse-engineer or design the 3D CAD model from scratch prior to manufacturing.",
    category: "3D Printing",
  },
  {
    id: "faq-12",
    question: "Can you develop a complete product from idea to deployment?",
    answer:
      "Yes. MK Electra's multidisciplinary structure is built specifically for turnkey product development. We orchestrate the entire lifecycle: Concept Definition → Architecture → Electronics Schematic & PCB → Firmware → 3D CAD Enclosure → Functional 3D Prototype → Testing → Cloud/Mobile App → Batch Manufacturing.",
    category: "Automation & Product Dev",
  },
  {
    id: "faq-13",
    question: "Do you work with startups, SMEs, and industrial enterprises?",
    answer:
      "Yes. We support clients at all scales—from individual innovators and early-stage startup founders building their first MVP, to established SMEs and large industrial manufacturing plants requiring enterprise automation and software platforms.",
    category: "General",
  },
  {
    id: "faq-14",
    question: "How can I request a quotation?",
    answer:
      "You can submit a project requirement or upload your 3D CAD files through our online Quote / Contact form, or message our engineering desk directly via WhatsApp at +91 8220660081 or +91 9790630883. We will review your technical specifications and provide a tailored proposal.",
    category: "General",
  },
];
