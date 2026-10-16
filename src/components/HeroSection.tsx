"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/src/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

function GeometricVisual() {
  const reduce = useReducedMotion();
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] select-none sm:max-w-[480px]" aria-hidden="true">
      {/* glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[70%] w-[70%] rounded-full bg-[#0866F5]/25 blur-[90px]" />
      </div>
      {/* rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[92%] w-[92%] rounded-3xl border border-white/10" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[72%] w-[72%] rounded-3xl border border-white/10 bg-white/[0.02]" />
      </div>
      {/* angular composition */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={reduce ? false : { opacity: 0, scale: 0.92 }}
        animate={reduce ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="w-[74%] rounded-2xl border border-white/15 bg-[#0A1B3D]/90 p-5 shadow-[0_20px_60px_-20px_rgba(8,102,245,0.55)] backdrop-blur-md">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7DB4FF]">
                Businesses we&apos;ve helped
              </p>
              <p className="font-display mt-1 text-2xl font-extrabold text-white">Growing faster</p>
            </div>
            <span className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-bold text-emerald-300">
              ▲ Upward trend
            </span>
          </div>
          <svg
            viewBox="0 0 220 96"
            className="mt-4 w-full"
            role="img"
            aria-label="Illustrative business growth chart trending upward"
          >
            <defs>
              <linearGradient id="heroTrend" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1685FF" stopOpacity="0.45" />
                <stop offset="1" stopColor="#1685FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[18, 42, 66].map((y) => (
              <line key={y} x1="0" y1={y} x2="220" y2={y} stroke="#ffffff" strokeOpacity="0.08" />
            ))}
            <path
              d="M0 78 C 40 74, 60 60, 90 58 S 150 40, 180 26 S 205 16, 220 12 L220 96 L0 96 Z"
              fill="url(#heroTrend)"
            />
            <path
              d="M0 78 C 40 74, 60 60, 90 58 S 150 40, 180 26 S 205 16, 220 12"
              fill="none"
              stroke="#3E9BFF"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="220" cy="12" r="8" fill="#3E9BFF" opacity="0.35" />
            <circle cx="220" cy="12" r="4.5" fill="#ffffff" />
          </svg>
          <div className="mt-1 flex justify-between text-[0.62rem] font-semibold text-slate-400" aria-hidden="true">
            <span>Start</span>
            <span>Growth</span>
            <span>Scale</span>
          </div>
          <p className="mt-2 text-[0.62rem] text-slate-500">Illustrative trend — sample data</p>
        </div>
      </motion.div>
      {/* floating cards */}
      {!reduce && (
        <>
          <motion.div
            className="absolute left-0 top-[18%] rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7DB4FF]">Performance</p>
            <p className="font-display text-lg font-extrabold text-white">100 / 100</p>
          </motion.div>
          <motion.div
            className="absolute bottom-[14%] right-0 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          >
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#7DB4FF]">Stack</p>
            <p className="text-sm font-bold text-white">Next.js · TypeScript</p>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default function HeroSection() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section id="home" className="relative overflow-hidden bg-[#050914] pb-16 pt-28 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-40">
      {/* backdrop */}
      <div className="bg-grid-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#0866F5]/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#1685FF]/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.div {...anim(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <Sparkles className="h-3.5 w-3.5 text-[#7DB4FF]" aria-hidden="true" />
              {siteConfig.availability}
            </span>
          </motion.div>

          <motion.h1
            {...anim(0.08)}
            className="fluid-h1 font-display mt-6 font-extrabold text-white text-balance"
          >
            We Engineer Digital Experiences{" "}
            <span className="bg-gradient-to-r from-[#3E9BFF] via-[#1685FF] to-[#0866F5] bg-clip-text text-transparent">
              That Scale.
            </span>
          </motion.h1>

          <motion.p {...anim(0.16)} className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            From high-performance websites to powerful SaaS platforms, we transform ambitious ideas into scalable
            digital products built for growth.
          </motion.p>

          <motion.div
            {...anim(0.24)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0866F5] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_40px_-12px_rgba(8,102,245,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#0A74FF] active:translate-y-0 sm:w-auto"
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#work"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
            >
              Explore Our Work
            </a>
          </motion.div>

          <motion.dl
            {...anim(0.32)}
            className="mx-auto mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center lg:mx-0 lg:text-left"
          >
            {[
              ["Clean Code", "Maintainable builds"],
              ["Responsive", "Every screen size"],
              ["SEO-Ready", "Built to be found"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-sm font-bold text-white">{k}</dt>
                <dd className="mt-1 text-xs text-slate-400">{v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? {} : { opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <GeometricVisual />
        </motion.div>
      </div>

      <motion.a
        href="#capabilities"
        aria-label="Scroll to capabilities"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-white md:flex"
        animate={reduce ? {} : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </motion.a>
    </section>
  );
}
