import type { LucideIcon } from "lucide-react";
import {
  Wrench,
  Zap,
  Droplets,
  Snowflake,
  Paintbrush,
  PanelTop,
  Hammer,
  Grid3X3
} from "lucide-react";

export type Service = {
  title: string;
  icon: LucideIcon;
  bullets: string[];
  image: string;
};

export const COMPANY = {
  name: "F K Technical Services Co.",
  tagline: "Professional Technical & Maintenance Services in Dubai"
} as const;

export const CONTACT = {
  addressLines: [
    "Office No. 33, 6th Floor, Al Fahad Plaza",
    "Al Rigga Road, Deira, Dubai – U.A.E"
  ],
  phones: ["+971 54 305 7260", "+971 56 703 8445", "+971 4 283 8500"],
  email: "babul.enterprise77@gmail.com",
  whatsapp: "+971543057260",
  whatsappLink: "https://wa.me/971543057260"
} as const;

export const ABOUT_US = `F K Technical Services Co. is a Dubai-based technical services company delivering reliable, efficient, and high-quality maintenance solutions for residential, commercial, and industrial properties.
We specialize in complete technical support, repair, and maintenance services, ensuring safety, durability, and professional workmanship in every project. Our experienced technicians and skilled workforce follow UAE standards and best practices to deliver consistent results and customer satisfaction.`;

export const MISSION = `To provide dependable and cost-effective technical services through skilled professionals, modern tools, and a commitment to quality, safety, and timely delivery.`;

export const VISION = `To become one of the most trusted technical services companies in the UAE, recognized for quality workmanship, professionalism, and long-term client relationships.`;

export const CORE_VALUES = [
  "Quality & Precision",
  "Professionalism",
  "Reliability",
  "Safety Compliance",
  "Customer Satisfaction"
] as const;

export const SERVICES: Service[] = [
  {
    title: "General Maintenance Services",
    icon: Wrench,
    bullets: [
      "Complete Building Maintenance",
      "Residential & Commercial Maintenance",
      "Preventive & Annual Maintenance Contracts"
    ],
    image: "/fk-services1.jpeg"
  },
  {
    title: "Electrical Works",
    icon: Zap,
    bullets: [
      "Electrical Installation & Repair",
      "Lighting Systems",
      "Switchgear & Panel Works",
      "Troubleshooting & Maintenance"
    ],
    image: "/fk-services2.jpeg"
  },
  {
    title: "Plumbing & Sanitary Works",
    icon: Droplets,
    bullets: [
      "Plumbing Installation & Repairs",
      "Water Supply & Drainage Systems",
      "Sanitary Fixture Installation",
      "Leak Detection & Rectification"
    ],
    image: "/fk-services3.jpeg"
  },
  {
    title: "Air Conditioning Services",
    icon: Snowflake,
    bullets: [
      "AC Installation & Replacement",
      "AC Maintenance & Servicing",
      "Duct Cleaning & Repair",
      "Split & Central AC Systems"
    ],
    image: "/fk-services4.jpeg"
  },
  {
    title: "Painting Works",
    icon: Paintbrush,
    bullets: [
      "Interior & Exterior Painting",
      "Villa & Apartment Painting",
      "Decorative & Protective Coatings"
    ],
    image: "/fk-services5.jpeg"
  },
  {
    title: "Gypsum & False Ceiling Works",
    icon: PanelTop,
    bullets: [
      "Gypsum Partition Works",
      "False Ceiling Installation",
      "Decorative Ceiling Designs"
    ],
    image: "/fk-services6.jpeg"
  },
  {
    title: "Carpentry & Wood Works",
    icon: Hammer,
    bullets: [
      "Doors & Cabinets",
      "Wardrobes & Custom Furniture",
      "Repair & Modification Works"
    ],
    image: "/fk-services7.jpeg"
  },
  {
    title: "Tiling & Flooring Works",
    icon: Grid3X3,
    bullets: [
      "Ceramic, Porcelain & Marble Tiles",
      "Floor & Wall Tiling",
      "Repair & Replacement"
    ],
    image: "/fk-services8.jpeg"
  }
];

export const INDUSTRIES = [
  "Residential Buildings",
  "Commercial Offices",
  "Retail Shops",
  "Warehouses",
  "Villas & Apartments"
] as const;

export const WHY_US = [
  "Experienced & Skilled Technicians",
  "High-Quality Materials & Tools",
  "Competitive Pricing",
  "On-Time Project Completion",
  "Professional & Friendly Service",
  "Compliance with UAE Safety Standards"
] as const;

export const TRUST_HIGHLIGHTS = [
  { title: "Fast Response", description: "Quick scheduling and dependable support." },
  { title: "Professional Team", description: "Skilled technicians and quality workmanship." },
  { title: "Quality Work", description: "Detail-focused execution and durable results." },
  { title: "UAE Standards", description: "Safety-first delivery aligned with best practices." }
] as const;

export const PROJECTS = [
  "Villa Maintenance",
  "Office Electrical Upgrade",
  "Plumbing Repair",
  "AC Servicing",
  "Painting Works",
  "Gypsum Partition"
] as const;
