export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  category: "3D Printing" | "Embedded & IoT" | "Mechanical Design" | "Software Architecture" | "Industrial Automation";
  readTime: string;
  publishDate: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  author: string;
  relatedServiceSlug: string;
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    id: "insight-01",
    slug: "choosing-the-right-3d-printing-material-petg-vs-abs-vs-asa",
    title: "Engineering Materials Guide: Selecting Between PETG, ABS, and ASA for Industrial Components",
    category: "3D Printing",
    readTime: "6 min read",
    publishDate: "January 2026",
    excerpt:
      "A technical comparison of functional thermoplastics for end-use industrial parts, enclosure durability, UV tolerance, and thermal thresholds.",
    content: [
      "When moving from rapid aesthetic prototyping to functional end-use mechanical components, selecting the proper polymer is the single most critical engineering decision.",
      "PETG (Polyethylene Terephthalate Glycol) offers excellent layer adhesion, chemical resistance, and ease of printing. It is the premier choice for indoor electronic housings, water-resistant fixtures, and parts requiring moderate impact toughness without brittle failure.",
      "ABS (Acrylonitrile Butadiene Styrene) provides superior thermal resistance up to 90°C and can be post-processed using acetone vapor smoothing for fluid-tight, glossy surfaces. However, it requires a controlled heated chamber to prevent thermal shrinkage and warping.",
      "ASA (Acrylonitrile Styrene Acrylate) represents the gold standard for outdoor industrial applications. Formulated with an acrylate elastomer instead of butadiene rubber, ASA offers extraordinary UV stability, weather resistance, and thermal endurance without fading or becoming brittle under direct sunlight.",
    ],
    keyTakeaways: [
      "Use PETG for general functional prototypes, chemical resistance, and non-UV indoor applications.",
      "Use ABS when parts operate in elevated temperature environments up to 90°C or require solvent smoothing.",
      "Choose ASA for any component deployed outdoors, exposed to direct sunlight, or subjected to weather cycling.",
    ],
    author: "MK Electra Materials & Manufacturing Desk",
    relatedServiceSlug: "/3d-printing",
  },
  {
    id: "insight-02",
    slug: "designing-rugged-esp32-telemetry-nodes-for-industrial-rs485",
    title: "Hardening ESP32 & STM32 Firmware for Noisy Industrial RS485 & Modbus Environments",
    category: "Embedded & IoT",
    readTime: "8 min read",
    publishDate: "February 2026",
    excerpt:
      "Practical techniques for isolating communication lines, implementing hardware watchdogs, and handling CRC errors in factory floor telemetry.",
    content: [
      "Deploying microcontroller nodes in factory environments presents electrical noise challenges including inductive kickback from large contactors, ground loop differentials, and high-voltage transients.",
      "Opto-isolation and galvanic power isolation on RS485 transceiver lines (such as MAX13487 or ADM2483) are essential to prevent transient spikes from resetting or damaging microcontrollers.",
      "Firmware architectures must implement deterministic non-blocking state machines with hardware watchdogs (WDT), CRC16 frame validation, and exponential backoff retry algorithms to guarantee zero data loss.",
      "Implementing a local non-volatile flash ring buffer ensures that when Wi-Fi or cellular networks experience temporary dropouts, sensor metrics are buffered and forwarded automatically once connectivity is restored.",
    ],
    keyTakeaways: [
      "Always isolate RS485 transceiver bus lines from the core MCU ground in industrial settings.",
      "Use hardware watchdog timers and separate non-volatile flash buffers for offline-first telemetry resilience.",
      "Enforce strict CRC validation on all Modbus packets to filter out induced electromagnetic noise.",
    ],
    author: "MK Electra Embedded Systems Team",
    relatedServiceSlug: "/services/embedded-iot",
  },
  {
    id: "insight-03",
    slug: "design-for-additive-manufacturing-dfam-best-practices",
    title: "DFAM Best Practices: Designing Custom Jigs, Fixtures, and Enclosures for 3D Printing",
    category: "Mechanical Design",
    readTime: "7 min read",
    publishDate: "March 2026",
    excerpt:
      "How to design internal chamfers, self-supporting angles, print orientation alignment, and heat-set insert bosses for maximum mechanical strength.",
    content: [
      "Design for Additive Manufacturing (DFAM) requires a shift in engineering mindset compared to traditional subtractive CNC machining or injection molding tooling.",
      "Layer orientation determines mechanical anisotropy: parts are always strongest along the X-Y print plane and weakest along the Z-axis layer bonding interface. Critical tensile loads must be aligned parallel to print layers.",
      "Incorporating 45-degree chamfers and self-supporting internal teardrop holes eliminates the need for internal support material, speeding up production cycle times and reducing post-processing labor.",
      "Using brass heat-set threaded inserts (with tapered bosses designed to 0.1mm interference) provides durable, reusable metal threads capable of withstanding hundreds of assembly and disassembly cycles.",
    ],
    keyTakeaways: [
      "Orient critical structural loads along the X-Y plane rather than across Z-axis layer boundaries.",
      "Design self-supporting geometry (angles greater than 45 degrees) to minimize support material.",
      "Standardize on heat-set brass threaded inserts for reliable mechanical fastenings.",
    ],
    author: "MK Electra Mechanical & Design Team",
    relatedServiceSlug: "/services/mechanical",
  },
];
