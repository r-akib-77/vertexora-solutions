import { processSteps } from "@/src/data/process";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="process-heading">
          <SectionHeading
            eyebrow="Process"
            title="A Clear Path from Idea to Launch."
            description="A simple, transparent workflow — you always know what's happening and what's next."
          />
        </div>

        <ol className="relative mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {/* connecting line (desktop) */}
          <div
            className="absolute left-[12%] right-[12%] top-10 hidden h-px bg-gradient-to-r from-transparent via-[#0866F5]/40 to-transparent lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.08}>
              <li className="group relative h-full rounded-2xl border border-[#E2E8F0] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#0866F5]/35 hover:shadow-[0_20px_45px_-24px_rgba(8,102,245,0.5)] sm:p-7">
                <span className="font-display relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#071631] text-sm font-extrabold text-white transition-colors group-hover:bg-[#0866F5]">
                  {step.index}
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-[#071631]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{step.description}</p>
                <span
                  className="mt-4 block h-1 w-10 rounded-full bg-[#E2E8F0] transition-all duration-300 group-hover:w-16 group-hover:bg-[#0866F5]"
                  aria-hidden="true"
                />
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
