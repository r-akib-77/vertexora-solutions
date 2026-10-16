import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { siteConfig } from "@/src/config/site";
import { services } from "@/src/data/services";
import Logo from "./Logo";

const socialIcons: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  x: Twitter,
  dribbble: Twitter,
};

export default function Footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(siteConfig.socials).filter(([, url]) => url && url.length > 4);

  return (
    <footer className="bg-[#050914] pb-8 pt-14 text-slate-300" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          <div>
            <a href="#home" aria-label="Vertexora Solutions — back to top">
              <Logo variant="light" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              {siteConfig.tagline}. High-performance websites, SaaS platforms, and web applications built for growth.
            </p>
            {socials.length > 0 && (
              <ul className="mt-5 flex gap-2" aria-label="Social links">
                {socials.map(([key, url]) => {
                  const Icon = socialIcons[key] ?? Github;
                  return (
                    <li key={key}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${siteConfig.name} on ${key}`}
                        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-slate-300 transition-colors hover:border-[#1685FF]/60 hover:text-white"
                      >
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm font-medium transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <a href="#services" className="text-sm font-medium transition-colors hover:text-white">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 break-all font-medium transition-colors hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#3E9BFF]" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#3E9BFF]" aria-hidden="true" />
                {siteConfig.location}
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0866F5] px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#0A74FF]"
            >
              Start a Project
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#1685FF]" aria-hidden="true" />
            Engineered for performance · No cookies · No tracking
          </p>
        </div>
      </div>
    </footer>
  );
}
