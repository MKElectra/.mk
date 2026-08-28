export const COMPANY_INFO = {
  name: "MK ELECTRA",
  tagline: "Built on Trust. Powered by Quality.",
  positioning:
    "Engineering ideas into intelligent, reliable and production-ready solutions across Software, Embedded & IoT, Mechanical Engineering, and Advanced 3D Printing & Manufacturing.",
  phones: [
    { display: "+91 8220660081", raw: "918220660081", label: "Engineering & Technical Inquiries" },
    { display: "+91 9790630883", raw: "919790630883", label: "Operations & 3D Printing Desk" },
  ],
  email: "contact@mkelectra.com", // Official placeholder
  workingHours: "Monday – Saturday: 9:00 AM – 7:00 PM IST",
  locationNotice: "Tamil Nadu, India (Serving Clients Pan-India & Globally)",
};

export const WHATSAPP_TEMPLATES = {
  general: "Hello MK Electra, I would like to discuss an engineering project.",
  software: "Hello MK Electra, I am interested in software development. I would like to discuss my project.",
  embedded: "Hello MK Electra, I am interested in an embedded/IoT project.",
  mechanical: "Hello MK Electra, I am interested in mechanical engineering/design services.",
  threeDPrinting: "Hello MK Electra, I am interested in 3D printing. I would like to get a quotation.",
  wholesale: "Hello MK Electra, I am interested in wholesale/bulk 3D printing services.",
  retail: "Hello MK Electra, I need a custom 3D printed part/product.",
  automation: "Hello MK Electra, I am interested in an industrial automation project.",
  productDev: "Hello MK Electra, I have a product concept and would like to explore end-to-end product development.",
};

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasMegaMenu: true,
    divisionKey: "services",
  },
  { label: "Solutions", href: "/solutions" },
  {
    label: "3D Printing",
    href: "/3d-printing",
    hasMegaMenu: true,
    divisionKey: "3d-printing",
  },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];
