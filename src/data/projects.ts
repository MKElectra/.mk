export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category:
    | "Software"
    | "Embedded"
    | "Mechanical"
    | "Automation"
    | "AI/ML"
    | "3D Printing"
    | "IoT"
    | "Product Development";
  industry: string;
  shortSummary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  results: string;
  imagePlaceholder: string;
  divisionId: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-01-scada",
    slug: "industrial-machine-telemetry-scada",
    title: "Multi-Machine Telemetry & SCADA Dashboard",
    category: "Software",
    industry: "Manufacturing & Industrial Equipment",
    shortSummary:
      "Enterprise web-based supervisory monitoring system aggregating operational machine telemetry across multiple production floors.",
    challenge:
      "Manufacturing facilities struggled with fragmented machine data, lack of centralized oversight, and delayed notification of equipment breakdown during shifts.",
    solution:
      "Engineered an integrated software platform with real-time WebSocket telemetry, dynamic mimic displays, configurable parameter thresholds, and automated alert dispatching.",
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "MQTT", "Docker"],
    deliverables: [
      "Responsive web-based SCADA interface",
      "Time-series historical charting module",
      "Role-based operator/supervisor access control",
      "Automated shift report generator",
    ],
    results:
      "Provided unified floor visibility, eliminated manual log sheets, and enabled instant operator notification upon parameter threshold violations.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    divisionId: "software",
  },
  {
    id: "proj-02-energy-daq",
    slug: "smart-energy-monitoring-substation-node",
    title: "Multi-Channel Energy Telemetry & Power Factor Node",
    category: "Embedded",
    industry: "Energy & Utilities",
    shortSummary:
      "Microcontroller-based energy data acquisition unit interfacing with multi-drop energy meters via RS485 Modbus.",
    challenge:
      "Industrial facilities required granular electrical sub-metering to identify peak demand penalties and track phase imbalances across distribution feeders.",
    solution:
      "Developed a custom ESP32-based DIN-rail telemetry unit polling RS485 Modbus energy meters, calculating active/reactive power metrics, and publishing compressed JSON packets over Wi-Fi/MQTT.",
    technologies: ["ESP32", "FreeRTOS", "Embedded C++", "RS485 Modbus RTU", "MQTT", "Hardware Watchdog"],
    deliverables: [
      "Deterministic polling firmware with CRC validation",
      "Local Flash non-volatile ring buffer storage",
      "Over-the-Air (OTA) firmware upgrade mechanism",
      "DIN-rail compliant mechanical enclosure",
    ],
    results:
      "Enabled uninterrupted energy logging with zero packet loss during network dropouts through edge buffering.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    divisionId: "embedded-iot",
  },
  {
    id: "proj-03-packaging-cad",
    slug: "custom-rotary-indexing-table-design",
    title: "Automated Rotary Indexing Station & Tooling",
    category: "Mechanical",
    industry: "Automotive & Assembly",
    shortSummary:
      "Precision 3D CAD modeling and mechanical engineering for an 8-station pneumatic rotary assembly table.",
    challenge:
      "The client required a custom mechanical assembly table capable of precise repeatable angular positioning with integrated part clamping and ejection chutes.",
    solution:
      "Designed a complete mechanical architecture including heavy-duty welded base frame, precision Geneva-drive indexing plate, custom pneumatic part grippers, and 2D fabrication blueprints.",
    technologies: ["3D CAD Modeling", "Parametric Assembly", "GD&T", "DFM Analysis", "Structural Simulation"],
    deliverables: [
      "Complete 3D parametric CAD master assembly",
      "Detailed 2D engineering fabrication drawings with tolerances",
      "Comprehensive Bill of Materials (BOM) with commercial off-the-shelf specs",
      "Assembly instructions and maintenance documentation",
    ],
    results:
      "Delivered production-ready CAD drawings that allowed seamless local CNC machining and fabrication with zero assembly interference.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    divisionId: "mechanical",
  },
  {
    id: "proj-04-wholesale-3d",
    slug: "batch-3d-printing-industrial-sensor-brackets",
    title: "Batch Production of UV-Resistant Solar Sensor Brackets",
    category: "3D Printing",
    industry: "Renewable Energy & Solar",
    shortSummary:
      "Wholesale additive manufacturing of 500+ UV-resistant, weather-sealed sensor mounting brackets in technical ASA.",
    challenge:
      "A solar installation provider needed 500 custom-geometry pyranometer brackets within 2 weeks, making traditional injection molding tooling cost-prohibitive and time-delayed.",
    solution:
      "Utilized MK Electra's 3D printing batch capability to produce parts in industrial ASA filament with optimized infill orientation for mechanical load bearing and UV longevity.",
    technologies: ["FDM Batch Farm", "Industrial ASA", "Heat-Set Threaded Inserts", "Dimensional QC Gauging"],
    deliverables: [
      "500 production-grade weather-resistant ASA brackets",
      "Installed M4 brass threaded inserts for solar frame mounting",
      "Batch quality control inspection report with dimensional sampling",
    ],
    results:
      "Supplied all 500 units on schedule without expensive mold tooling capital expenditure, achieving high weather resistance.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
    divisionId: "3d-printing",
  },
  {
    id: "proj-05-vision-ai",
    slug: "conveyor-bottling-defect-inspection-ai",
    title: "High-Speed Automated Optical Inspection System",
    category: "AI/ML",
    industry: "Food, Beverage & Packaging",
    shortSummary:
      "Edge-based computer vision system performing automated cap alignment, fill-level check, and label inspection on high-speed conveyor lines.",
    challenge:
      "Manual visual inspection of bottled products resulted in operator fatigue, missed packaging defects, and unrecorded rejection statistics.",
    solution:
      "Developed a multi-camera computer vision system running real-time neural inference on an edge computing unit, interfaced directly with pneumatic ejection actuators via PLC.",
    technologies: ["Python", "OpenCV", "PyTorch / ONNX", "Edge AI Accelerator", "Industrial GigE Cameras", "24V PLC I/O"],
    deliverables: [
      "Trained custom object detection and classification models",
      "Real-time visual monitoring dashboard with defect heatmaps",
      "Pneumatic reject gate hardware trigger interface",
    ],
    results:
      "Automated 100% of inline bottle inspection at high conveyor speeds with detailed logging of reject categories.",
    imagePlaceholder: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
    divisionId: "ai-ml",
  },
  {
    id: "proj-06-conveyor-plc",
    slug: "automated-conveyor-sorting-system",
    title: "Conveyor Diverter & Barcode Sorting Automation",
    category: "Automation",
    industry: "Logistics & Warehousing",
    shortSummary:
      "PLC-controlled automated package routing system with pneumatic divert arms, photoelectric sensor arrays, and barcode scanner integration.",
    challenge:
      "A regional distribution warehouse needed automated sorting of varied parcel sizes into 4 dispatch lanes based on 1D/2D barcode labels.",
    solution:
      "Implemented a comprehensive automation system featuring PLC ladder logic, variable frequency drive (VFD) speed control, sensor array tracking, and HMI diagnostics.",
    technologies: ["Industrial PLC", "HMI Touchscreen", "VFD Motor Controllers", "Photoelectric Sensors", "Modbus TCP"],
    deliverables: [
      "Structured PLC control logic with safety interlocks",
      "Intuitive HMI touchscreen operator station",
      "Control panel electrical schematics and wiring documentation",
    ],
    results:
      "Streamlined parcel sorting throughput with automated jam detection and intuitive maintenance diagnostics.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    divisionId: "industrial-automation",
  },
  {
    id: "proj-07-smart-dispenser",
    slug: "commercial-smart-liquid-dispensing-device",
    title: "Connected Commercial Liquid Dispensing Appliance",
    category: "Product Development",
    industry: "Commercial Appliances & Healthcare",
    shortSummary:
      "Turnkey engineering from concept to functional production prototype: custom PCB, STM32 firmware, mechanical enclosure, 3D printing, and mobile app.",
    challenge:
      "The client envisioned an automated, touchless chemical dispensing unit with volume calibration, consumable level tracking, and Bluetooth smartphone configuration.",
    solution:
      "Executed complete end-to-end product development: circuit design, peristaltic pump control firmware, ergonomic CAD enclosure, functional 3D printed prototype housings, and companion mobile setup app.",
    technologies: [
      "STM32 Firmware",
      "Custom PCB Design",
      "3D CAD Enclosure",
      "Functional PETG 3D Printing",
      "React Native Mobile App",
      "BLE Protocol",
    ],
    deliverables: [
      "Working turnkey prototype units",
      "Complete Gerber files and PCB schematics",
      "Production-ready CAD files for future injection tooling",
      "Cross-platform iOS/Android Bluetooth app",
    ],
    results:
      "Delivered a fully integrated, market-ready physical prototype demonstrating all functional, electrical, and aesthetic requirements under one roof.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    divisionId: "product-development",
  },
  {
    id: "proj-08-agritech-iot",
    slug: "remote-agricultural-irrigation-controller",
    title: "Cellular-Connected Agricultural Irrigation Controller",
    category: "IoT",
    industry: "Agriculture & Irrigation",
    shortSummary:
      "Solar-powered IoT field station monitoring soil moisture depth profiles and actuating 12V latching solenoid valves via GSM/4G.",
    challenge:
      "Farming operations in remote areas with unstable grid power needed reliable remote pump scheduling and soil-moisture-based automated watering.",
    solution:
      "Engineered an ultra-low-power telemetry unit with integrated solar MPPT charge controller, SDI-12 soil moisture sensor interface, and GSM/MQTT connectivity to cloud servers.",
    technologies: ["ARM Cortex Microcontroller", "4G LTE-M / GSM", "SDI-12 Soil Sensors", "Solar MPPT Charger", "Cloud Telemetry"],
    deliverables: [
      "Weatherproof IP66 solar-powered field station",
      "Low-power sleep/wake firmware architecture",
      "Web & mobile dashboard for automated watering schedule management",
    ],
    results:
      "Maintained autonomous solar operation in remote fields, transmitting hourly soil moisture analytics and enabling remote valve operation.",
    imagePlaceholder: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    divisionId: "embedded-iot",
  },
];
