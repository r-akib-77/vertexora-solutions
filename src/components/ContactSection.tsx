"use client";

import { useMemo, useState } from "react";
import { Mail, MapPin, Send, Info, Copy, Check } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Errors = Partial<Record<"name" | "email" | "service" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [prepared, setPrepared] = useState(false);
  const [copied, setCopied] = useState(false);

  const mailto = useMemo(() => {
    const subject = `Project inquiry — ${service || "General"} — ${name || "New inquiry"}`;
    const lines = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Service: ${service || "—"}`,
      "",
      "Project details:",
      message,
    ].filter((l) => l !== null);
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }, [name, email, company, service, message]);

  function validate(): Errors {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (!EMAIL_RE.test(email.trim())) e.email = "Please enter a valid email address.";
    if (!service) e.service = "Please choose a service.";
    if (message.trim().length < 20) e.message = "Please describe your project (at least 20 characters).";
    return e;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = document.querySelector("[data-invalid='true']") as HTMLElement | null;
      first?.focus();
      return;
    }
    setPrepared(true);
    window.location.href = mailto;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(decodeURIComponent(mailto.split("body=")[1] ?? message));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  const inputCls = (bad?: string) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-[0.95rem] text-[#071631] placeholder:text-[#94A3B8] transition-colors focus:border-[#0866F5] focus:outline-none ${
      bad ? "border-red-400" : "border-[#E2E8F0] hover:border-[#CBD5E1]"
    }`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="contact-heading">
          <SectionHeading
            eyebrow="Contact"
            title="Have an Idea? Let's Build It."
            description="Tell us what you're planning. We'll help you turn the right idea into a practical digital solution."
          />
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Info panel */}
          <Reveal>
            <aside className="flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#050914] p-7 sm:p-8">
              <div>
                <h3 className="font-display text-xl font-extrabold text-white">Start the conversation.</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  This form is frontend-only: it prepares an email draft in your own mail app. Nothing is stored or
                  sent automatically.
                </p>
                <ul className="mt-6 space-y-4">
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 transition-colors hover:border-[#1685FF]/50"
                    >
                      <Mail className="h-5 w-5 shrink-0 text-[#3E9BFF]" aria-hidden="true" />
                      <span>
                        <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Email us</span>
                        <span className="block break-all text-sm font-bold text-white">{siteConfig.email}</span>
                      </span>
                    </a>
                  </li>
                  <li className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3">
                    <MapPin className="h-5 w-5 shrink-0 text-[#3E9BFF]" aria-hidden="true" />
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">Based</span>
                      <span className="block text-sm font-bold text-white">{siteConfig.location}</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 rounded-2xl border border-[#1685FF]/25 bg-[#0866F5]/10 p-4">
                <p className="flex gap-2 text-xs leading-relaxed text-slate-300">
                  <Info className="h-4 w-4 shrink-0 text-[#3E9BFF]" aria-hidden="true" />
                  Prefer your own inbox? Email us directly with your goals, timeline, and budget range — we reply to
                  every serious inquiry.
                </p>
              </div>
            </aside>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-[#E2E8F0] bg-[#F7F9FC] p-6 sm:p-8"
              aria-describedby="contact-note"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-name" className="mb-1.5 block text-sm font-bold text-[#071631]">
                    Name <span className="text-[#0866F5]">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jane Cooper"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    data-invalid={!!errors.name}
                    aria-describedby={errors.name ? "cf-name-err" : undefined}
                    className={inputCls(errors.name)}
                  />
                  {errors.name && (
                    <p id="cf-name-err" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="cf-email" className="mb-1.5 block text-sm font-bold text-[#071631]">
                    Email <span className="text-[#0866F5]">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="jane@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!errors.email}
                    data-invalid={!!errors.email}
                    aria-describedby={errors.email ? "cf-email-err" : undefined}
                    className={inputCls(errors.email)}
                  />
                  {errors.email && (
                    <p id="cf-email-err" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-company" className="mb-1.5 block text-sm font-bold text-[#071631]">
                    Company <span className="font-medium text-[#94A3B8]">(optional)</span>
                  </label>
                  <input
                    id="cf-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    placeholder="Company Inc."
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className={inputCls()}
                  />
                </div>
                <div>
                  <label htmlFor="cf-service" className="mb-1.5 block text-sm font-bold text-[#071631]">
                    Service <span className="text-[#0866F5]">*</span>
                  </label>
                  <select
                    id="cf-service"
                    name="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    aria-invalid={!!errors.service}
                    data-invalid={!!errors.service}
                    aria-describedby={errors.service ? "cf-service-err" : undefined}
                    className={`${inputCls(errors.service)} ${service ? "" : "text-[#94A3B8]"}`}
                  >
                    <option value="" disabled>
                      Select a service…
                    </option>
                    {siteConfig.contactSubjects.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="cf-service-err" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="cf-message" className="mb-1.5 block text-sm font-bold text-[#071631]">
                  Project description <span className="text-[#0866F5]">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  rows={5}
                  placeholder="What are you building? Goals, timeline, must-have features…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={!!errors.message}
                  data-invalid={!!errors.message}
                  aria-describedby={errors.message ? "cf-message-err" : undefined}
                  className={`${inputCls(errors.message)} min-h-[130px] resize-y`}
                />
                {errors.message ? (
                  <p id="cf-message-err" role="alert" className="mt-1.5 text-xs font-semibold text-red-600">
                    {errors.message}
                  </p>
                ) : (
                  <p className="mt-1.5 text-xs text-[#94A3B8]">{message.trim().length}/20+ characters recommended</p>
                )}
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0866F5] px-7 py-3.5 text-sm font-bold text-white shadow-[0_16px_35px_-14px_rgba(8,102,245,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#0657D6] active:translate-y-0 sm:w-auto"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                Prepare Inquiry
              </button>

              <div id="contact-note" className="mt-4 rounded-xl border border-[#E2E8F0] bg-white p-4">
                <p className="text-xs leading-relaxed text-[#64748B]">
                  No backend here: clicking <strong className="text-[#071631]">Prepare Inquiry</strong> opens your
                  email app with a pre-filled message to <strong className="text-[#071631]">{siteConfig.email}</strong>.
                  You review and press send — nothing is delivered until you do.
                </p>
                {prepared && (
                  <div role="status" className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                    <p className="text-xs font-semibold text-emerald-800">
                      Draft prepared. If your mail app didn&apos;t open, use the buttons below.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <a
                        href={mailto}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#071631] px-3.5 py-2 text-xs font-bold text-white hover:bg-[#0866F5]"
                      >
                        <Mail className="h-3.5 w-3.5" aria-hidden="true" /> Open email draft
                      </a>
                      <button
                        type="button"
                        onClick={copyDraft}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] bg-white px-3.5 py-2 text-xs font-bold text-[#071631] hover:border-[#0866F5] hover:text-[#0866F5]"
                      >
                        {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
                        {copied ? "Copied!" : "Copy message"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
