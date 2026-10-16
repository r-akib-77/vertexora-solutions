import { MessageSquareQuote } from "lucide-react";
import { testimonials, testimonialsPlaceholder } from "@/src/data/testimonials";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

// Set to false to preview the populated layout during development.
const hideUntilReady = true;

export default function TestimonialsSection() {
  if (testimonials.length === 0 && hideUntilReady) {
    return null;
  }

  if (testimonials.length === 0) {
    return (
      <section aria-labelledby="testimonials-heading" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading eyebrow="Testimonials" title={testimonialsPlaceholder.heading} />
          <Reveal delay={0.1}>
            <div className="mx-auto mt-8 rounded-3xl border border-dashed border-[#CBD5E1] bg-[#F7F9FC] p-8 sm:p-10">
              <MessageSquareQuote className="mx-auto h-10 w-10 text-[#0866F5]" aria-hidden="true" />
              <p className="mt-4 text-[0.95rem] leading-relaxed text-[#64748B]">{testimonialsPlaceholder.body}</p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="testimonials-heading">
          <SectionHeading eyebrow="Testimonials" title="What Partners Say." />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={`${t.name}-${t.quote.slice(0, 12)}`} className="rounded-2xl border border-[#E2E8F0] bg-[#F7F9FC] p-6">
              <blockquote className="text-sm leading-relaxed text-[#334155]">“{t.quote}”</blockquote>
              <figcaption className="mt-4 border-t border-[#E2E8F0] pt-4">
                <p className="text-sm font-bold text-[#071631]">{t.name}</p>
                <p className="text-xs text-[#64748B]">
                  {t.role}
                  {t.company ? ` · ${t.company}` : ""}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
