export type NavItem = { label: string; href: string };

export const siteConfig = {
  name: "Vertexora Solutions",
  shortName: "Vertexora",
  tagline: "Engineering Scalable Web & SaaS Solutions",
  description:
    "Vertexora Solutions designs and engineers high-performance websites, SaaS platforms, and web applications — clean, scalable digital products built for growth.",
  url: "https://vertexora.solutions",
  // ── Update these placeholder details with the real business info ──
  email: "hello@vertexora.solutions",
  phone: "",
  location: "Remote-first · Working worldwide",
  availability: "Available for select projects",
  // Leave socials empty until real URLs exist — footer hides missing entries.
  socials: {
    github: "",
    linkedin: "",
    x: "",
    dribbble: "",
  } as Record<string, string>,
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],
  contactSubjects: [
    "Website Development",
    "SaaS Development",
    "UI/UX Design",
    "Web Application",
    "Automation & Integrations",
    "Website Optimization",
    "Something else",
  ],
};

export type SiteConfig = typeof siteConfig;
