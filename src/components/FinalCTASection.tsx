import { ArrowRight } from "lucide-react";
import Reveal from "./Reveal";

export default function FinalCTASection() {
  return (
    <section aria-labelledby="cta-heading" className="relative overflow-hidden bg-[#050914] py-16 sm:py-20">
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-1/2 h-[320px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0866F5]/25 blur-[110px]"
        aria-hidden="true"
      />
      {/* angular accents */}
      <div className="absolute -left-10 top-8 hidden opacity-20 lg:block" aria-hidden="true">
        <svg viewBox="0 0 120 120" className="h-36 w-36">
          <path d="M60 6 72 22 60 38 48 22 60 6Z" fill="#1685FF" />
          <path d="M14 114 48 52 62 70 36 114H14Z" fill="#fff" />
          <path d="M106 114 72 52 58 70 84 114h22Z" fill="#1685FF" />
        </svg>
      </div>
      <div className="absolute -right-10 bottom-8 hidden rotate-180 opacity-20 lg:block" aria-hidden="true">
        <svg viewBox="0 0 120 120" className="h-36 w-36">
          <path d="M60 6 72 22 60 38 48 22 60 6Z" fill="#1685FF" />
          <path d="M14 114 48 52 62 70 36 114H14Z" fill="#fff" />
          <path d="M106 114 72 52 58 70 84 114h22Z" fill="#1685FF" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 id="cta-heading" className="fluid-h2 font-display font-extrabold text-white text-balance">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-[#3E9BFF] to-[#0866F5] bg-clip-text text-transparent">
              Exceptional.
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-300">
            Your next digital product starts with a clear plan and the right engineering partner.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#071631] shadow-[0_18px_45px_-14px_rgba(255,255,255,0.4)] transition-all hover:-translate-y-0.5 hover:bg-[#EAF2FF] active:translate-y-0"
          >
            Discuss Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
