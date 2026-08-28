export interface Material {
  id: string;
  name: string;
  category: "Standard" | "Functional" | "Engineering" | "Flexible";
  badge: string;
  shortDesc: string;
  applications: string[];
  strength: "Low" | "Moderate" | "High" | "Very High" | string;
  heatResistance: string;
  finish: string;
  recommendedUsage: string;
  colors: string[];
  density: string;
  highlights: string[];
}

export const PRINTING_MATERIALS: Material[] = [
  {
    id: "pla",
    name: "PLA (Polylactic Acid)",
    category: "Standard",
    badge: "Most Popular",
    shortDesc: "High-precision, biodegradable polymer ideal for visual prototypes, concept models, and decorative parts.",
    applications: [
      "Visual concept models",
      "Architectural scale models",
      "Form and fitment prototypes",
      "Non-load bearing enclosures",
      "Educational & display components",
    ],
    strength: "Moderate",
    heatResistance: "Up to 55°C",
    finish: "Smooth matte or gloss finish with crisp detail",
    recommendedUsage: "Indoor prototypes, aesthetics, non-stressed components.",
    colors: ["Black", "White", "Grey", "Electric Blue", "Red", "Custom on request"],
    density: "1.24 g/cm³",
    highlights: [
      "Superior dimensional accuracy",
      "Crisp overhangs & sharp corners",
      "Cost-effective rapid turnaround",
      "Wide color range",
    ],
  },
  {
    id: "petg",
    name: "PETG (Polyethylene Terephthalate Glycol)",
    category: "Functional",
    badge: "Industrial Workhorse",
    shortDesc: "Combines the ease of PLA with the functional durability, impact resistance, and water resistance of ABS.",
    applications: [
      "Functional snap-fit components",
      "Electronic enclosures & housings",
      "Water-resistant containers & brackets",
      "Drone and robotics frames",
      "Machine guards & sensor brackets",
    ],
    strength: "High",
    heatResistance: "Up to 75°C",
    finish: "Semi-gloss, clean layer adhesion",
    recommendedUsage: "Functional parts, outdoor exposure, moderate mechanical loads.",
    colors: ["Industrial Black", "Signal White", "Technical Grey", "Translucent Blue", "Clear"],
    density: "1.27 g/cm³",
    highlights: [
      "High impact resistance",
      "Chemical and moisture resistant",
      "Good layer bonding strength",
      "UV stable for light outdoor duty",
    ],
  },
  {
    id: "abs",
    name: "ABS (Acrylonitrile Butadiene Styrene)",
    category: "Functional",
    badge: "Thermal Resistant",
    shortDesc: "Tough, heat-resistant thermoplastic commonly used in automotive components and injection-molded products.",
    applications: [
      "Under-hood automotive brackets",
      "High-temperature electronic housings",
      "Machinery fixtures & tooling",
      "Post-machined prototypes",
      "Durable consumer products",
    ],
    strength: "High",
    heatResistance: "Up to 90°C",
    finish: "Matte, acetone-vapor smoothable",
    recommendedUsage: "High heat environments, post-processed glossy finishes, end-use parts.",
    colors: ["Matte Black", "Opaque White", "Slate Grey"],
    density: "1.04 g/cm³",
    highlights: [
      "High temperature stability",
      "High tensile & impact resistance",
      "Vapor smoothing capable",
      "Rigid structural integrity",
    ],
  },
  {
    id: "asa",
    name: "ASA (Acrylonitrile Styrene Acrylate)",
    category: "Engineering",
    badge: "Outdoor & UV Proof",
    shortDesc: "Automotive-grade polymer engineered specifically for harsh UV sunlight and outdoor weather resistance.",
    applications: [
      "Outdoor sensor enclosures",
      "Automotive exterior components",
      "Solar monitoring brackets",
      "Agricultural equipment fixtures",
      "Marine instrumentation housings",
    ],
    strength: "High",
    heatResistance: "Up to 95°C",
    finish: "Matte textured industrial finish",
    recommendedUsage: "Long-term outdoor deployment, direct sunlight, extreme weather.",
    colors: ["UV Black", "Solar White", "Industrial Grey"],
    density: "1.07 g/cm³",
    highlights: [
      "Exceptional UV & sunlight resistance",
      "Withstands rain and thermal cycling",
      "No yellowing or degradation",
      "High structural rigidity",
    ],
  },
  {
    id: "tpu",
    name: "TPU (Thermoplastic Polyurethane)",
    category: "Flexible",
    badge: "Elastic & Impact Absorbing",
    shortDesc: "Rubber-like flexible polymer offering high elasticity, vibration dampening, and abrasion resistance.",
    applications: [
      "Vibration dampening gaskets & feet",
      "Protective shockproof bumpers",
      "Seals and O-rings",
      "Flexible couplings & drive belts",
      "Custom grips and ergonomic handles",
    ],
    strength: "Very High (Tear Resistant)",
    heatResistance: "Up to 80°C",
    finish: "Rubber-like textured flex",
    recommendedUsage: "Gaskets, shock dampening, impact absorption, flexible linkages.",
    colors: ["Black (95A)", "Semi-Clear (95A)", "Blue (95A)"],
    density: "1.21 g/cm³",
    highlights: [
      "Shore Hardness 95A / 85A",
      "Exceptional tear and abrasion resistance",
      "Dampens mechanical vibrations",
      "Resistant to oils and greases",
    ],
  },
  {
    id: "carbon-fiber",
    name: "Carbon Fiber Reinforced PLA/PETG",
    category: "Engineering",
    badge: "High Rigidity & Lightweight",
    shortDesc: "Thermoplastic reinforced with chopped carbon fibers for extreme stiffness, dimensional stability, and matte aesthetic.",
    applications: [
      "Lightweight robotics arms",
      "High-precision inspection fixtures",
      "Aerodynamic drone chassis",
      "Rigid mounting brackets",
      "High-stress structural brackets",
    ],
    strength: "Very High",
    heatResistance: "Up to 70°C - 85°C",
    finish: "Premium matte charcoal with visible carbon fiber texture",
    recommendedUsage: "High-rigidity components requiring zero flex and premium aesthetic.",
    colors: ["Matte Carbon Black"],
    density: "1.29 g/cm³",
    highlights: [
      "Ultra-high stiffness to weight ratio",
      "Virtually zero thermal warping",
      "Stealth matte technical finish",
      "Superior dimensional stability",
    ],
  },
];
