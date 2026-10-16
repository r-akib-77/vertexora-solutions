import { Gauge, Boxes, Compass, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const points = [
  {
    icon: Gauge,
    title: "Performance First",
    desc: "Fast, efficient, lightweight experiences — optimized before launch, not after.",
  },
  {
    icon: Boxes,
    title: "Built to Scale",
    desc: "Maintainable architecture and reusable components your product can grow on.",
  },
  {
    icon: Compass,
    title: "Design with Purpose",
    desc: "Interfaces focused on clarity and usability — every element earns its place.",
  },
  {
    icon: BadgeCheck,
    title: "Reliable Delivery",
    desc: "Structured development and quality assurance, with clear communication throughout.",
  },
];

export default function WhyVertexoraSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 bg-[#050914] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            align="left"
            dark
            eyebrow="Why Vertexora"
            title="Engineering Meets Intentional Design."
            description="We're a focused team that treats every build like a product: clear structure, honest trade-offs, and code you'll still like in two years."
          />
          <div className="mt-8 space-y-4">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-colors hover:border-[#1685FF]/40 hover:bg-white/[0.06] sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0866F5] text-white">
                    <p.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="font-display block text-[0.95rem] font-bold text-white">{p.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-300">{p.desc}</span>
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Geometric brand illustration (pure CSS/SVG — no image requests) */}
        <Reveal delay={0.1} className="relative">
          <div
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A1B3D] via-[#071631] to-[#050914] p-8 sm:p-10"
            aria-hidden="true"
          >
            <div className="bg-grid-dark absolute inset-0" />
            <div className="relative">
              <svg viewBox="0 0 200 170" className="mx-auto w-2/3 drop-shadow-[0_16px_50px_rgba(8,102,245,0.5)]">
                <path d="M100 4 117 22 100 40 83 22 100 4Z" fill="#1685FF" />
                <path d="M12 158 72 58 92 82 48 158H12Z" fill="#FFFFFF" />
                <path d="M188 158 128 58 108 82 152 158h36Z" fill="#1685FF" />
                <path d="M100 88 70 158h60L100 88Z" fill="#0866F5" />
              </svg>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ["Semantic HTML", "Accessible by default"],
                  ["Static-first", "Minimal JavaScript"],
                  ["Type-safe", "TypeScript throughout"],
                  ["Responsive", "320px → 4K ready"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
                    <p className="text-sm font-bold text-white">{k}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
