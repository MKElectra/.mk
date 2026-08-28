export interface IndustryItem {
  id: string;
  name: string;
  shortDesc: string;
  overview: string;
  keySolutions: string[];
  applicableDivisions: string[];
  iconName: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "manufacturing",
    name: "Manufacturing & Assembly",
    shortDesc: "Automated inspection, PLC retrofits, custom machine fixtures, and telemetry monitoring for discrete manufacturing.",
    overview:
      "We help manufacturing facilities modernize their production floors through custom assembly fixtures, PLC automation, high-speed vision inspection, and real-time SCADA telemetry.",
    keySolutions: [
      "Custom assembly jigs and holding fixtures",
      "Inline automated optical inspection (AOI)",
      "PLC & HMI programming for automated machinery",
      "SCADA machine status dashboards and OEE tracking",
      "3D printed replacement parts and tooling",
    ],
    applicableDivisions: ["Industrial Automation", "Mechanical Engineering", "Software", "AI/ML", "3D Printing"],
    iconName: "Factory",
  },
  {
    id: "automotive",
    name: "Automotive & Ancillaries",
    shortDesc: "Tooling design, quality inspection jigs, custom test benches, and rapid prototype parts.",
    overview:
      "Supporting Tier-1 & Tier-2 automotive component makers with robust CAD modeling, dimensional inspection fixtures, test bench instrumentation, and end-use heat-resistant 3D printed components.",
    keySolutions: [
      "Automotive part holding and checking fixtures",
      "End-of-line functional test benches",
      "High-temp ASA/PETG functional 3D prints",
      "CAN bus diagnostic nodes and data loggers",
      "Computer vision scratch and defect detection",
    ],
    applicableDivisions: ["Mechanical Engineering", "Embedded & IoT", "3D Printing", "AI/ML"],
    iconName: "Car",
  },
  {
    id: "agriculture",
    name: "Agriculture & Agritech",
    shortDesc: "Solar-powered IoT telemetry, automated irrigation controllers, and weather-sealed field stations.",
    overview:
      "Delivering rugged, low-power telemetry and automation for precision farming, smart greenhouses, pump scheduling, and soil sensor arrays in remote agricultural landscapes.",
    keySolutions: [
      "Cellular 4G/GSM solar telemetry nodes",
      "Multi-depth soil moisture data acquisition",
      "Automated solenoid valve scheduling controllers",
      "Weather-sealed IP66 ASA 3D printed housings",
      "Mobile farmer apps and monitoring dashboards",
    ],
    applicableDivisions: ["Embedded & IoT", "Software", "3D Printing"],
    iconName: "Sprout",
  },
  {
    id: "textile",
    name: "Textile & Garment Machinery",
    shortDesc: "Machine speed synchronizers, yarn break optical sensors, and legacy loom telemetry retrofits.",
    overview:
      "Enhancing textile mill efficiency with digital length counters, motor speed synchronization, optical yarn detection, and centralized shift production logging.",
    keySolutions: [
      "Fabric roll length and speed telemetry",
      "Optical yarn break detector modules",
      "VFD motor synchronization controls",
      "Central production tracking software",
      "Custom nylon/PETG machine replacement gears",
    ],
    applicableDivisions: ["Embedded & IoT", "Industrial Automation", "Mechanical Engineering", "Software"],
    iconName: "Shirt",
  },
  {
    id: "electronics",
    name: "Electronics & Semiconductor",
    shortDesc: "PCB test jigs, custom programming rigs, ESD-safe fixtures, and microcontroller firmware development.",
    overview:
      "Providing complete electronic engineering services including custom firmware development, automated flashing/testing fixtures, and functional prototype enclosures.",
    keySolutions: [
      "Pogo-pin PCB programming and test fixtures",
      "Custom STM32/ESP32 firmware engineering",
      "Functional snap-fit electronics enclosures",
      "Automated optical component verification",
      "Hardware-in-the-loop (HIL) test setups",
    ],
    applicableDivisions: ["Embedded & IoT", "Software", "3D Printing", "AI/ML"],
    iconName: "Cpu",
  },
  {
    id: "energy",
    name: "Energy, Solar & Utilities",
    shortDesc: "Substation power factor logging, solar string telemetry, and battery storage monitoring systems.",
    overview:
      "Engineering robust data acquisition hardware and cloud dashboards for renewable energy installations, electrical substations, and industrial energy management.",
    keySolutions: [
      "Multi-channel Modbus energy data loggers",
      "Solar inverter and pyranometer telemetry",
      "Battery management system (BMS) interfaces",
      "Automated demand-peak alert software",
      "UV-stabilized outdoor sensor mounts",
    ],
    applicableDivisions: ["Embedded & IoT", "Software", "3D Printing"],
    iconName: "Zap",
  },
  {
    id: "logistics",
    name: "Logistics & Warehousing",
    shortDesc: "Conveyor divert automation, barcode indexing, asset tracking nodes, and warehouse dispatch software.",
    overview:
      "Accelerating order fulfillment with automated conveyor sortation systems, barcode scanner integration, parcel dimensioning sensors, and custom logistics software.",
    keySolutions: [
      "Conveyor sorting and divert arm automation",
      "Barcode & QR code scanner integration",
      "Warehouse telemetry and status dashboards",
      "Shock & temperature transit data loggers",
      "Custom conveyor guide rails and bumpers",
    ],
    applicableDivisions: ["Industrial Automation", "Software", "Embedded & IoT"],
    iconName: "Truck",
  },
  {
    id: "healthcare",
    name: "Healthcare & MedTech R&D",
    shortDesc: "Precision medical device enclosures, laboratory test rigs, and automated dispensing mechanisms.",
    overview:
      "Assisting medical research teams and healthcare hardware innovators with rapid prototype enclosures, fluid dispensing mechanisms, and compliant embedded interfaces.",
    keySolutions: [
      "Ergonomic handheld medical device prototypes",
      "Precision peristaltic pump dispensing controllers",
      "Laboratory test tube racks and custom fixtures",
      "Bluetooth telemetry companion mobile apps",
      "High-resolution concept model printing",
    ],
    applicableDivisions: ["Product Development", "Mechanical Engineering", "Embedded & IoT", "3D Printing"],
    iconName: "Activity",
  },
  {
    id: "education-rd",
    name: "Education & R&D Laboratories",
    shortDesc: "Custom experimental test rigs, engineering student project support, and prototype fabrication.",
    overview:
      "Partnering with academic institutions, research labs, and engineering universities to bring research concepts and experimental setups into physical reality.",
    keySolutions: [
      "Wind tunnel and structural test apparatus",
      "Custom sensor data acquisition rigs",
      "Complex geometry scale models & cutaways",
      "Robotics chassis and mechanism development",
      "Technical mentorship and prototype fabrication",
    ],
    applicableDivisions: ["Mechanical Engineering", "3D Printing", "Embedded & IoT", "Software"],
    iconName: "GraduationCap",
  },
  {
    id: "startups",
    name: "Startups & Innovators",
    shortDesc: "End-to-end MVP development, hardware prototyping, and seed-stage engineering support.",
    overview:
      "Empowering early-stage tech founders with complete multidisciplinary engineering under one roof—from first circuit schematic and CAD prototype to functional demo units.",
    keySolutions: [
      "Rapid turnkey MVP hardware & software build",
      "Investor-ready functional 3D printed prototypes",
      "Custom PCB and firmware architecture",
      "Companion mobile apps and cloud backends",
      "Cost estimation and DFM preparation",
    ],
    applicableDivisions: ["Product Development", "Software", "Embedded & IoT", "3D Printing", "Mechanical Engineering"],
    iconName: "Rocket",
  },
  {
    id: "enterprises",
    name: "Industrial Enterprises & SMEs",
    shortDesc: "Digital transformation, legacy modernization, factory automation, and contract engineering.",
    overview:
      "Providing established industrial companies and SMEs with dedicated engineering firepower for modernization initiatives, automation retrofits, and software platforms.",
    keySolutions: [
      "Legacy machine automation retrofits",
      "Factory-wide IoT telemetry & centralized SCADA",
      "Custom enterprise software and ERP bridges",
      "Volume 3D printing of assembly aids and jigs",
      "Long-term SLA engineering support",
    ],
    applicableDivisions: ["Industrial Automation", "Software", "Embedded & IoT", "Mechanical Engineering"],
    iconName: "Building2",
  },
];
