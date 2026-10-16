import { technologies } from "@/src/data/technologies";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function TechnologySection() {
  return (
    <section aria-labelledby="stack-heading" className="border-y border-[#E2E8F0] bg-[#F7F9FC] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="stack-heading">
          <SectionHeading
            eyebrow="Technology"
            title="A Practical, Modern Stack."
            description="Technologies we work with or plan to offer. We pick the right tool per project — not every technology on every project."
          />
        </div>
        <Reveal delay={0.1}>
          <ul className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3" aria-label="Technologies">
            {technologies.map((t) => (
              <li
                key={t.name}
                className="rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-bold text-[#071631] shadow-[0_2px_10px_-6px_rgba(7,22,49,0.25)] transition-all hover:-translate-y-0.5 hover:border-[#0866F5]/40 hover:text-[#0866F5]"
              >
                {t.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
