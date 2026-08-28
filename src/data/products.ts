export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  category:
    | "Embedded Products"
    | "IoT Products"
    | "Industrial Products"
    | "Smart Devices"
    | "Engineering Products"
    | "3D Printed Products"
    | "Software Products";
  badge: "Demo Product / Coming Soon" | "Engineering Concept" | "Platform Framework";
  isDemo: boolean;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  specifications: { [key: string]: string };
  imagePlaceholder: string;
  whatsappMessage: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "prod-iot-gateway-01",
    slug: "industrial-iot-edge-gateway",
    name: "Industrial IoT Edge Telemetry Gateway",
    category: "IoT Products",
    badge: "Demo Product / Coming Soon",
    isDemo: true,
    shortDescription:
      "A ruggedized DIN-rail multi-protocol gateway bridging legacy RS485/Modbus sensors with cloud MQTT platforms.",
    fullDescription:
      "Engineered for industrial telemetry, this edge gateway interfaces with multi-drop Modbus sensors, digital inputs, and analog instrumentation. Featuring dual Wi-Fi and 4G fallback connectivity with local SQLite buffering for offline-first telemetry resilience.",
    features: [
      "Dual isolated RS485 Modbus RTU ports",
      "Wi-Fi 802.11 b/g/n + 4G LTE-M backup connectivity",
      "Local edge filtering & buffer storage",
      "Secure MQTT / TLS 1.3 cloud transmission",
      "DIN-rail industrial mounting enclosure (3D printed/molded)",
      "Wide input voltage (9V - 36V DC)",
    ],
    applications: [
      "Factory machine status telemetry",
      "Solar power plant monitoring",
      "Cold-chain temperature logging",
      "Water treatment facility telemetry",
    ],
    specifications: {
      "Core Processor": "ESP32-S3 Dual Core 240MHz",
      "Interfaces": "2x RS485 (Isolated), 4x Digital In, 2x 4-20mA Analog In",
      "Wireless": "Wi-Fi 2.4GHz + BLE 5.0 + optional 4G LTE",
      "Power Supply": "9 - 36V DC with surge & reverse polarity protection",
      "Operating Temp": "-20°C to +70°C",
      "Form Factor": "DIN-Rail Standard 4-Module Enclosure",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about the Industrial IoT Edge Gateway product.",
  },
  {
    id: "prod-smart-controller-02",
    slug: "stm32-programmable-motion-controller",
    name: "Programmable Multi-Axis Motion Controller",
    category: "Embedded Products",
    badge: "Demo Product / Coming Soon",
    isDemo: true,
    shortDescription:
      "High-precision 4-axis stepper and servo motor driver controller board with CAN bus and opto-isolated I/O.",
    fullDescription:
      "Designed for custom automation machines, pick-and-place rigs, and custom CNC tools. Powered by an STM32 ARM Cortex-M4 microcontroller running deterministic motion algorithms with smooth acceleration curves and real-time encoder feedback.",
    features: [
      "4-Axis Step/Direction & Enable outputs up to 500kHz",
      "CAN 2.0B interface for multi-board synchronization",
      "8x Opto-isolated digital inputs for limit switches and sensors",
      "4x High-current relay / MOSFET outputs for solenoids",
      "USB Type-C diagnostic and firmware update port",
      "Configurable microstepping and acceleration profiles",
    ],
    applications: [
      "Special purpose machine (SPM) automation",
      "Conveyor sorting and indexing gates",
      "Linear actuator testing rigs",
      "Automated liquid dispensing systems",
    ],
    specifications: {
      "Microcontroller": "STM32F407 168MHz ARM Cortex-M4",
      "Axis Control": "4 Independent Step/Dir Channels (up to 500kHz)",
      "Communication": "CAN 2.0B, USB-C Virtual COM, RS232",
      "I/O Capacity": "8 Isolated Inputs (24V), 4 Solid State Outputs (3A)",
      "Power Requirement": "24V DC ±10%",
      "Mounting": "Panel Mount / DIN-Rail Bracket",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about the Multi-Axis Motion Controller product.",
  },
  {
    id: "prod-industrial-vision-03",
    slug: "ai-smart-vision-defect-sensor",
    name: "AI Edge Vision Defect Inspection Sensor",
    category: "Industrial Products",
    badge: "Demo Product / Coming Soon",
    isDemo: true,
    shortDescription:
      "Self-contained smart camera module running real-time YOLO defect detection and OCR for high-speed manufacturing lines.",
    fullDescription:
      "An integrated machine vision sensor combining high-frame-rate image capture, onboard edge neural accelerator, and industrial 24V trigger outputs. Provides instant pass/fail validation on manufacturing assembly lines without requiring an external industrial PC.",
    features: [
      "High-speed 120 FPS monochrome or color global shutter sensor",
      "Integrated Edge AI accelerator (up to 8 TOPS)",
      "Direct 24V PLC-compatible digital output lines (Pass/Fail/Trigger)",
      "Web-based visual inspection setup and ROI training interface",
      "IP65 rated aluminum and 3D printed rugged housing",
      "Built-in ring LED illuminator with strobe synchronization",
    ],
    applications: [
      "Packaging label and batch code OCR verification",
      "Automotive component surface scratch detection",
      "Bottling line cap and seal presence verification",
      "Electronics PCB component alignment check",
    ],
    specifications: {
      "Image Sensor": "Global Shutter CMOS 2MP (120 FPS)",
      "AI Inference": "8 TOPS NPU onboard",
      "Connectivity": "Gigabit Ethernet (PoE), 24V Industrial I/O",
      "Protocols": "Modbus TCP, MQTT, WebSockets, REST API",
      "Lens Mount": "Standard C/CS-Mount with adjustable focus ring",
      "Enclosure": "IP65 Anodized Aluminum with Polycarbonate Window",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about the AI Edge Vision Sensor product.",
  },
  {
    id: "prod-enclosure-kit-04",
    slug: "modular-custom-electronics-enclosure-kit",
    name: "Modular Industrial Electronics Enclosure Kit",
    category: "3D Printed Products",
    badge: "Demo Product / Coming Soon",
    isDemo: true,
    shortDescription:
      "Precision 3D printed modular enclosures with heat-set brass threaded inserts, silicone gaskets, and cable glands.",
    fullDescription:
      "Tailor-made enclosure solutions engineered in PETG or ASA for rapid deployment of custom electronics, IoT transmitters, and machine control panels. Designed with interlocking channels, cable strain relief glands, and DIN-rail or wall-mount flanges.",
    features: [
      "Printed in industrial ASA or PETG with UV & impact resistance",
      "M3/M4 Brass heat-set threaded inserts for repeat assembly",
      "Neoprene O-ring gasket groove for IP54 splash resistance",
      "Custom cutouts for OLED displays, pushbuttons, and connectors",
      "Available in low-volume batches (1 to 1,000 units)",
      "Optional laser-etched aluminum front faceplates",
    ],
    applications: [
      "Custom IoT sensor installations",
      "Handheld industrial test instruments",
      "Wall-mounted environmental monitors",
      "Prototype hardware presentations",
    ],
    specifications: {
      "Material Options": "PETG / ASA / Flame-Retardant ABS",
      "Hardware Fasteners": "Stainless Steel M3 Hex Screws & Brass Inserts",
      "Environmental Seal": "EPDM / Silicone O-ring Channel (IP54)",
      "Mounting Options": "DIN-Rail Bracket / Integrated Flanges / Magnetic",
      "Customization": "Port cutouts, logo debossing, custom color codes",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about Custom 3D Printed Electronics Enclosures.",
  },
  {
    id: "prod-software-suite-05",
    slug: "telemetry-scada-cloud-platform",
    name: "MK Central: Industrial Telemetry & Fleet SCADA Platform",
    category: "Software Products",
    badge: "Platform Framework",
    isDemo: true,
    shortDescription:
      "Turnkey web-based telemetry dashboard, device management portal, and anomaly alert engine for distributed machines.",
    fullDescription:
      "A modular enterprise SaaS framework designed to connect hundreds of field machines and IoT gateways. Features drag-and-drop dashboard widgets, real-time WebSocket charts, role-based access control, SMS/WhatsApp alert dispatch, and historical CSV export.",
    features: [
      "Real-time bidirectional machine telemetry via WebSockets & MQTT",
      "Interactive SVG machine mimic panels and live status indicators",
      "Automated alert rules engine (Email, SMS, WhatsApp triggers)",
      "Multi-tenant organization management with granular roles",
      "Time-series database optimized for billions of sensor data points",
      "REST API and Webhook integrations for external ERP systems",
    ],
    applications: [
      "Remote fleet machine monitoring",
      "Factory energy and power factor tracking",
      "Commercial HVAC and chiller telemetry",
      "Agricultural irrigation automation control",
    ],
    specifications: {
      "Tech Architecture": "Next.js, TypeScript, Node.js / Python FastAPI",
      "Database Layer": "PostgreSQL + TimescaleDB for time-series data",
      "Broker Support": "EMQX / Mosquitto MQTT with TLS encryption",
      "Deployment": "Dockerized On-Premise or Cloud (AWS/Azure)",
      "SLA Support": "24/7 Monitoring & uptime guarantee architecture",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about the MK Central Telemetry Platform.",
  },
  {
    id: "prod-smart-sensor-06",
    slug: "wireless-vibration-thermal-sensor",
    name: "Wireless Vibration & Bearing Temperature Sensor",
    category: "Smart Devices",
    badge: "Demo Product / Coming Soon",
    isDemo: true,
    shortDescription:
      "Ultra-low power wireless sensor node for predictive condition monitoring on electric motors, pumps, and gearboxes.",
    fullDescription:
      "Monitors 3-axis vibration velocity and surface temperature on critical rotating machinery. Uses Bluetooth Low Energy or Sub-GHz wireless to transmit RMS acceleration, peak velocity, and temperature thresholds to local gateways for predictive failure warning.",
    features: [
      "Tri-axial MEMS accelerometer with 10kHz sampling bandwidth",
      "Infrared contact surface temperature probe (-40°C to +125°C)",
      "Magnetic mounting base for tool-free attachment to motor casings",
      "3+ year battery life with programmable sleep/wake telemetry cycles",
      "Ruggedized IP67 sealed ASA enclosure",
    ],
    applications: [
      "Predictive maintenance on induction motors",
      "Industrial blower and compressor vibration tracking",
      "Conveyor roller bearing health inspection",
      "Pump cavitation and misalignment detection",
    ],
    specifications: {
      "Vibration Bandwidth": "10Hz to 10kHz (Triaxial)",
      "Sampling Rate": "Up to 26.6 kS/s on trigger",
      "Temperature Range": "-40°C to +125°C (±0.5°C accuracy)",
      "Battery": "3.6V High Capacity Lithium Thionyl Chloride (Li-SOCl2)",
      "Mounting": "High-strength Neodymium Magnetic Base or M6 Stud",
      "Ingress Protection": "IP67 Rated Dust and Waterproof",
    },
    imagePlaceholder: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "Hello MK Electra, I am inquiring about the Wireless Vibration & Temperature Sensor.",
  },
];
