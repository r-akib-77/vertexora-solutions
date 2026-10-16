export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  /** Path under /public, e.g. "/images/projects/nimbus.png" */
  image: string;
  imageAlt: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  /** Set true for representative demo concepts (not real clients). */
  isDemo?: boolean;
};

// ── Edit freely: add / remove / reorder projects here. ──────────────────────
// Demo entries are clearly labelled in the UI as "Demo concept".
export const projects: Project[] = [
  {
    slug: "pulseboard-saas-dashboard",
    name: "Pulseboard",
    category: "SaaS Dashboard",
    description:
      "Demo concept: a subscription-analytics dashboard with responsive charts, billing views, and a reusable component system.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/pulseboard.svg",
    imageAlt: "Pulseboard SaaS dashboard preview",
    isDemo: true,
  },
  {
    slug: "northwind-corporate-site",
    name: "Northwind Corporate",
    category: "Corporate Website",
    description:
      "Demo concept: a fast, SEO-structured corporate site with modular sections and Core Web Vitals–focused build.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/northwind.svg",
    imageAlt: "Northwind corporate website preview",
    isDemo: true,
  },
  {
    slug: "cartly-storefront",
    name: "Cartly Storefront",
    category: "E-commerce Frontend",
    description:
      "Demo concept: a conversion-focused storefront with filtering, product views, and an accessible checkout flow.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/cartly.svg",
    imageAlt: "Cartly storefront preview",
    isDemo: true,
  },
  {
    slug: "flowdesk-automation",
    name: "Flowdesk",
    category: "Automation & Integrations",
    description:
      "Demo concept: an operations console connecting forms, CRM, and notifications into one auditable workflow view.",
    stack: ["Next.js", "Node.js", "Automation tools"],
    image: "/images/projects/flowdesk.svg",
    imageAlt: "Flowdesk automation console preview",
    isDemo: true,
  },
];
