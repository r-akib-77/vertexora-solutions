import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Layers,
  PenTool,
  AppWindow,
  Workflow,
  Gauge,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Modern, responsive business websites",
    description:
      "Fast, accessible marketing sites and corporate websites engineered for conversion and search visibility.",
    bullets: [
      "Landing pages and corporate websites",
      "SEO-friendly architecture",
      "Performance optimization",
    ],
    icon: Globe,
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    tagline: "Scalable product interfaces",
    description:
      "Subscription-product frontends, dashboards, and app experiences built with maintainable, component-driven code.",
    bullets: [
      "Scalable SaaS interfaces",
      "Subscription-product frontends",
      "Dashboard & app interfaces",
    ],
    icon: Layers,
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Interfaces with intent",
    description:
      "Clear user journeys, responsive layouts, and design systems your team can actually build on.",
    bullets: [
      "User journeys & information architecture",
      "Responsive interface design",
      "Design systems & reusable components",
    ],
    icon: PenTool,
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "Interactive, complex interfaces",
    description:
      "Custom frontend solutions for interactive products — from internal tools to customer-facing applications.",
    bullets: [
      "Interactive web applications",
      "Custom frontend solutions",
      "Complex interface development",
    ],
    icon: AppWindow,
  },
  {
    slug: "automation-integrations",
    title: "Automation & Integrations",
    tagline: "Connect tools, remove busywork",
    description:
      "Workflow automation and third-party integrations that make operations faster and less error-prone.",
    bullets: [
      "Workflow automation",
      "Third-party service integrations",
      "Operational efficiency solutions",
    ],
    icon: Workflow,
  },
  {
    slug: "website-optimization",
    title: "Website Optimization",
    tagline: "Faster, more usable sites",
    description:
      "Audits and targeted fixes for Core Web Vitals, accessibility, and frontend performance bottlenecks.",
    bullets: [
      "Core Web Vitals improvements",
      "Accessibility & usability enhancements",
      "Frontend performance audits",
    ],
    icon: Gauge,
  },
];
