import { ArrowUpRight, Check } from "lucide-react";
import { services, type Service } from "@/src/data/services";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group relative flex h-full flex-col rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0866F5]/35 hover:shadow-[0_24px_50px_-24px_rgba(8,102,245,0.45)] sm:p-7">
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[#0866F5] transition-colors duration-300 group-hover:bg-[#0866F5] group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <ArrowUpRight
            className="h-5 w-5 text-[#CBD5E1] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#0866F5]"
            aria-hidden="true"
          />
        </div>
        <h3 className="font-display mt-5 text-lg font-bold text-[#071631]">{service.title}</h3>
        <p className="mt-1 text-sm font-semibold text-[#0866F5]">{service.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{service.description}</p>
        <ul className="mt-4 space-y-2 border-t border-[#E2E8F0] pt-4">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-[0.83rem] text-[#334155]">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#0866F5]" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="services-heading">
          <SectionHeading
            eyebrow="Services"
            title="Digital Solutions Built for Growth."
            description="We combine thoughtful design and engineering to create digital products that solve real business problems."
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
