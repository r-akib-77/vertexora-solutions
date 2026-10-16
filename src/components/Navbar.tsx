"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open + close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open ]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-[#E2E8F0]/80 bg-white/90 shadow-[0_8px_30px_-18px_rgba(7,22,49,0.35)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        {/* Dark hero sits underneath at top: use light-on-dark treatment before scroll */}
        <nav
          aria-label="Primary"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 sm:h-[72px] lg:px-8"
        >
          <a href="#home" className="shrink-0 rounded-md" aria-label="Vertexora Solutions — home">
            <span className={scrolled || open ? "" : "brightness-0 invert"}>
              <Logo variant="dark" />
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                    scrolled
                      ? "text-[#071631]/80 hover:bg-[#F7F9FC] hover:text-[#0866F5]"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`group inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-bold transition-all hover:-translate-y-px active:translate-y-0 ${
                scrolled
                  ? "bg-[#0866F5] text-white shadow-[0_10px_25px_-10px_rgba(8,102,245,0.7)] hover:bg-[#0657D6]"
                  : "bg-white text-[#071631] hover:bg-[#EAF2FF]"
              }`}
            >
              Start a Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors lg:hidden ${
              scrolled || open ? "text-[#071631] hover:bg-[#F7F9FC]" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: reduce ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduce ? 0 : -8 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className="border-b border-[#E2E8F0] bg-white shadow-xl lg:hidden"
          >
            <ul className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold text-[#071631] transition-colors hover:bg-[#F7F9FC] hover:text-[#0866F5]"
                  >
                    {item.label}
                    <ArrowRight className="h-4 w-4 text-[#64748B]" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#0866F5] px-4 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#0657D6]"
                >
                  Start a Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
