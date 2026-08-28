export interface ServiceDivision {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroDescription: string;
  slug: string;
  ctaText: string;
  whatsappMessage: string;
  accentColor: string;
  services: {
    title: string;
    description: string;
    items: string[];
  }[];
  technologies: string[];
  applications?: string[];
  features?: string[];
}

export const CORE_DIVISIONS: ServiceDivision[] = [
  {
    id: "software",
    number: "01",
    title: "Software Engineering",
    tagline: "Digital Solutions Built for Business.",
    description:
      "Enterprise web applications, robust mobile platforms, custom SaaS architectures, and industrial software designed for reliability and seamless integration.",
    heroHeadline: "Enterprise Software & Cloud Platforms Engineered for Scale",
    heroDescription:
      "From high-throughput backend systems and cloud architectures to modern responsive web applications and mobile apps, MK Electra delivers production-grade software engineered for reliability, security, and long-term maintainability.",
    slug: "/services/software",
    ctaText: "Explore Software",
    whatsappMessage:
      "Hello MK Electra, I am interested in software development. I would like to discuss my project.",
    accentColor: "from-blue-600 to-cyan-500",
    services: [
      {
        title: "Web & Enterprise Applications",
        description: "Modern, responsive, high-performance web systems and SaaS platforms.",
        items: [
          "Website Development",
          "Web Applications",
          "Enterprise Software",
          "Custom Software",
          "SaaS Development",
          "Admin Panels & Dashboards",
        ],
      },
      {
        title: "Mobile & Cross-Platform",
        description: "Native and multi-platform mobile apps for field operations, consumers, and industrial monitoring.",
        items: [
          "Mobile Applications (iOS / Android)",
          "React Native Development",
          "Industrial Field Apps",
          "Offline-First Mobile Systems",
          "Real-time Telemetry Interfaces",
        ],
      },
      {
        title: "Backend, APIs & Cloud Systems",
        description: "Scalable microservices, RESTful and GraphQL APIs, databases, and cloud infrastructure.",
        items: [
          "API Development",
          "Backend Architecture",
          "Database Architecture & Optimization",
          "Cloud Integration (AWS / Azure / GCP)",
          "ERP & Third-Party System Integration",
          "Business Process Automation Software",
        ],
      },
      {
        title: "Architecture & UX/UI Engineering",
        description: "Industrial-grade interface design, system architecture, security auditing, and continuous support.",
        items: [
          "UI/UX Design for Technical Platforms",
          "Software System Architecture",
          "Maintenance & SLA Support",
          "Legacy Modernization",
          "Performance & Security Audits",
        ],
      },
    ],
    technologies: [
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
      "SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    id: "embedded-iot",
    number: "02",
    title: "Embedded & IoT",
    tagline: "Intelligent Electronics. Connected Systems.",
    description:
      "Custom firmware, microcontroller programming, industrial IoT telemetry, sensor networks, and edge computing for mission-critical hardware.",
    heroHeadline: "Precision Firmware, Hardware Integration & Industrial IoT",
    heroDescription:
      "Bridging the physical and digital worlds with custom microcontroller firmware, industrial communication protocols, telemetry gateways, and edge processing hardware built for rugged environments.",
    slug: "/services/embedded-iot",
    ctaText: "Explore Embedded & IoT",
    whatsappMessage:
      "Hello MK Electra, I am interested in an embedded/IoT project.",
    accentColor: "from-cyan-500 to-teal-400",
    services: [
      {
        title: "Firmware & Microcontroller Programming",
        description: "Low-level firmware development and real-time execution for diverse architectures.",
        items: [
          "Embedded System Development",
          "Firmware Development (C / C++ / Rust)",
          "Microcontroller Programming",
          "ESP32 & STM32 Architecture",
          "Arduino & Raspberry Pi Prototyping",
          "ARM Cortex Systems & Embedded Linux",
        ],
      },
      {
        title: "Sensors & Industrial Protocols",
        description: "High-reliability bus communication and multi-sensor data acquisition.",
        items: [
          "Sensor Integration & Calibration",
          "UART, SPI, I2C Bus Systems",
          "CAN Bus & CANopen Networks",
          "Modbus RTU / TCP Systems",
          "RS485 & Industrial Serial Links",
          "MQTT & WebSocket IoT Protocols",
        ],
      },
      {
        title: "Wireless & Industrial Telemetry",
        description: "Secure long-range and short-range wireless connectivity for distributed systems.",
        items: [
          "Wi-Fi & Bluetooth Low Energy (BLE)",
          "GSM / 4G / LTE-M Telemetry",
          "Data Acquisition (DAQ) Systems",
          "Industrial Remote Monitoring",
          "Edge Computing & Pre-processing",
          "Device-to-Cloud Communication",
        ],
      },
      {
        title: "Hardware Integration & Custom Boards",
        description: "Bringing electronics from schematic to enclosure integration.",
        items: [
          "Custom Electronics Integration",
          "PCB Integration & Enclosure Fitment",
          "IoT Gateways & Bridge Units",
          "Power Management & Battery Systems",
          "Hardware Testing & Validation",
        ],
      },
    ],
    technologies: [
      "ESP32",
      "STM32",
      "ARM Cortex",
      "Raspberry Pi",
      "Arduino",
      "Embedded C/C++",
      "UART / SPI / I2C",
      "CAN Bus",
      "Modbus RTU/TCP",
      "RS485",
      "MQTT",
      "BLE / Wi-Fi / 4G",
    ],
    applications: [
      "Industrial Monitoring",
      "Smart Machines",
      "Agriculture IoT",
      "Home Automation",
      "Industrial Automation",
      "Energy Monitoring",
      "Remote Telemetry",
      "Smart Devices",
      "Machine Control",
      "IoT Gateways",
    ],
  },
  {
    id: "mechanical",
    number: "03",
    title: "Mechanical Engineering",
    tagline: "Designed for Performance. Built for Reality.",
    description:
      "Industrial machine design, 3D CAD modeling, structural analysis, custom enclosures, tooling, jigs, fixtures, and fabrication-ready engineering drawings.",
    heroHeadline: "Industrial Machine Design, 3D CAD & Mechanical Systems",
    heroDescription:
      "Transforming functional requirements into robust mechanical designs. From precision CAD modeling and industrial machine structures to custom enclosures and manufacturing-ready documentation.",
    slug: "/services/mechanical",
    ctaText: "Explore Mechanical",
    whatsappMessage:
      "Hello MK Electra, I am interested in mechanical engineering/design services.",
    accentColor: "from-blue-700 to-indigo-500",
    services: [
      {
        title: "Machine & Mechanism Design",
        description: "Engineered structures and mechanisms for industrial operations.",
        items: [
          "Industrial Machine Design",
          "Automation Machine Design",
          "Machine Structures & Frames",
          "Industrial Equipment Design",
          "Mechanical Integration for Electronics",
        ],
      },
      {
        title: "3D CAD & Product Modeling",
        description: "Precision 3D modeling and aesthetic industrial product design.",
        items: [
          "3D CAD Modeling",
          "Product Enclosure Design",
          "Prototype Design & Iteration",
          "Reverse Engineering",
          "Design for Assembly (DFA)",
        ],
      },
      {
        title: "Tooling, Fixtures & Jigs",
        description: "Custom manufacturing aids for production assembly and quality inspection.",
        items: [
          "Assembly Jigs & Alignment Fixtures",
          "Quality Inspection Fixtures",
          "Custom Tooling Design",
          "Manufacturing Optimization",
          "Fabrication Support",
        ],
      },
      {
        title: "Engineering Drawings & Documentation",
        description: "Standardized fabrication drawings with GD&T and manufacturing specifications.",
        items: [
          "2D Engineering Drawings",
          "GD&T & Tolerance Stack-up Analysis",
          "Bill of Materials (BOM) Preparation",
          "Production & Fabrication Support",
          "Design Optimization for Manufacturing (DFM)",
        ],
      },
    ],
    technologies: [
      "3D CAD Modeling",
      "Parametric Design",
      "SolidWorks Compatible",
      "Fusion 360 Compatible",
      "AutoCAD Compatible",
      "Finite Element Modeling",
      "Enclosure Engineering",
      "GD&T Drafting",
    ],
  },
  {
    id: "3d-printing",
    number: "04",
    title: "3D Printing & Manufacturing",
    tagline: "From Digital Design to Physical Product.",
    description:
      "High-precision additive manufacturing for wholesale B2B production runs and custom retail B2C parts, functional prototypes, and industrial enclosures.",
    heroHeadline: "Advanced 3D Printing for Wholesale Production & Custom Retail",
    heroDescription:
      "High-precision additive manufacturing serving both enterprise production runs and individual custom requirements. From prototype batches to industrial end-use components.",
    slug: "/3d-printing",
    ctaText: "Explore 3D Printing",
    whatsappMessage:
      "Hello MK Electra, I am interested in 3D printing. I would like to get a quotation.",
    accentColor: "from-cyan-400 to-blue-600",
    services: [
      {
        title: "Wholesale & B2B Production",
        description: "Scalable batch manufacturing and volume production runs with consistent repeatability.",
        items: [
          "Bulk 3D Printing",
          "Production Runs & Batch Manufacturing",
          "Prototype Batches for Validation",
          "Industrial Components & Mounts",
          "Custom Enclosures & Electronics Housings",
          "OEM & Reseller Manufacturing Support",
        ],
      },
      {
        title: "Retail & Custom B2C Printing",
        description: "Single-piece printing and custom functional parts for creators, makers, and innovators.",
        items: [
          "Single-Piece Custom Printing",
          "Replacement & Obsolete Parts",
          "Personalized Products & Models",
          "Hobby & DIY Engineering Components",
          "Functional Concept Prototypes",
          "Custom Brackets & Home Solutions",
        ],
      },
      {
        title: "Materials & Engineering Polymers",
        description: "Wide selection of technical thermoplastics for functional rigidity, heat resistance, and aesthetics.",
        items: [
          "PLA (Standard, High-Speed, Tough)",
          "PETG (Durable & Chemical Resistant)",
          "ABS & ASA (Heat & UV Resistant)",
          "TPU (Flexible & Impact Absorbing)",
          "Engineering-Grade Materials",
        ],
      },
      {
        title: "Finishing & Quality Assurance",
        description: "Comprehensive post-processing and precision inspection before delivery.",
        items: [
          "Support Removal & Vapor Polishing",
          "Precision Sanding & Surface Smoothing",
          "Threaded Brass Insert Installation",
          "Assembly & Fitment Verification",
          "Dimensional Quality Inspection",
        ],
      },
    ],
    technologies: [
      "FDM Additive Manufacturing",
      "Multi-Material Printing",
      "High-Temp Hotends",
      "0.1mm - 0.3mm Layer Precision",
      "Batch Farm Scalability",
      "Direct CAD/STL Slicing",
    ],
  },
];

export interface AdvancedCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  slug: string;
  ctaText: string;
  whatsappMessage: string;
  services: string[];
  integrationPillars: string[];
}

export const ADVANCED_CAPABILITIES: AdvancedCapability[] = [
  {
    id: "industrial-automation",
    title: "Industrial Automation",
    tagline: "Connecting Software, Embedded, Mechanical & Control Systems.",
    description:
      "End-to-end automation solutions integrating PLC controllers, HMI interfaces, SCADA monitoring, motor drives, and conveyor automation for manufacturing efficiency.",
    slug: "/services/industrial-automation",
    ctaText: "Discuss an Automation Project",
    whatsappMessage:
      "Hello MK Electra, I am interested in an industrial automation project.",
    services: [
      "PLC Programming & Integration",
      "HMI Touchscreen Interface Design",
      "SCADA Systems & Centralized Control",
      "Machine Automation & Sequential Control",
      "Motor & Drive Control Systems",
      "Sensor Integration & Signal Conditioning",
      "Conveyor & Material Handling Automation",
      "Production Line Automation",
      "Industrial Monitoring & Telemetry",
      "Control Systems & Electrical Panels",
      "Data Acquisition (DAQ) Systems",
      "Industrial IoT & Cloud Telemetry",
      "Automation Retrofitting of Legacy Machinery",
      "Machine-to-Machine Integration",
      "Custom Automation Systems",
    ],
    integrationPillars: ["Software", "Embedded & IoT", "Mechanical", "Control Systems"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Intelligence for Real-World Industrial & Business Applications.",
    description:
      "Practical artificial intelligence solutions combining computer vision, automated defect inspection, predictive analytics, and edge AI integrated directly with operational hardware.",
    slug: "/services/ai-ml",
    ctaText: "Build an AI Solution",
    whatsappMessage:
      "Hello MK Electra, I am interested in building an AI/ML or Computer Vision solution.",
    services: [
      "Computer Vision & Video Analytics",
      "Automated Optical Inspection (AOI)",
      "Object Detection & Classification",
      "Optical Character Recognition (OCR)",
      "Predictive Maintenance Analytics",
      "Anomaly Detection in Production Lines",
      "Edge AI Deployment (Jetson / Coral / Raspberry Pi)",
      "Machine Learning Model Training & Tuning",
      "Industrial AI Integration",
      "Data Analytics & Telemetry Insights",
      "Intelligent Process Automation",
    ],
    integrationPillars: ["AI / ML", "Software", "Embedded Systems", "Industrial Hardware"],
  },
  {
    id: "product-development",
    title: "End-to-End Product Development",
    tagline: "From Idea to Production Under One Roof.",
    description:
      "Turnkey hardware and software product development. We orchestrate architecture, CAD modeling, circuit design, firmware, prototyping, 3D printing, testing, and production scaling.",
    slug: "/services/product-development",
    ctaText: "Start Product Development",
    whatsappMessage:
      "Hello MK Electra, I have a product idea and would like to explore end-to-end development.",
    services: [
      "Concept Definition & Feasibility Study",
      "System Architecture & BOM Estimation",
      "Hardware Schematic & PCB Design",
      "Mechanical CAD & Enclosure Engineering",
      "Embedded Firmware Development",
      "Companion App & Cloud Backend Development",
      "Rapid 3D Printed Functional Prototypes",
      "Bench Testing & Environmental Validation",
      "Design for Manufacturing (DFM) Optimization",
      "Pilot Batch Production & Deployment",
    ],
    integrationPillars: [
      "Software",
      "Embedded",
      "Mechanical",
      "3D Printing",
      "AI / ML",
      "Automation",
    ],
  },
];
