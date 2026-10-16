import Image from "next/image";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { projects, type Project } from "@/src/data/projects";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-28px_rgba(7,22,49,0.4)]">
        <div className="relative aspect-[16/10] overflow-hidden bg-[#071631]">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold text-[#071631]">
              {project.category}
            </span>
            {project.isDemo && (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#0866F5] px-3 py-1 text-[0.68rem] font-bold text-white">
                <FlaskConical className="h-3 w-3" aria-hidden="true" />
                Demo concept
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="font-display text-lg font-bold text-[#071631]">{project.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">{project.description}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technology stack">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-md border border-[#E2E8F0] bg-[#F7F9FC] px-2.5 py-1 text-[0.7rem] font-semibold text-[#334155]"
              >
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-2 border-t border-[#E2E8F0] pt-4">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#071631] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#0866F5]"
              >
                Live demo <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : null}
            {project.caseStudyUrl ? (
              <a
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-[#071631] transition-colors hover:border-[#0866F5] hover:text-[#0866F5]"
              >
                Case study <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ) : (
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#E2E8F0] px-4 py-2 text-xs font-bold text-[#071631] transition-colors hover:border-[#0866F5] hover:text-[#0866F5]"
              >
                Start similar project <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-20 border-y border-[#E2E8F0] bg-[#F7F9FC] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div id="work-heading">
          <SectionHeading
            eyebrow="Our Work"
            title="Selected Work. Thoughtfully Engineered."
            description="Representative demo concepts showing the kind of clean, scalable builds we deliver. Real client work will replace these placeholders as engagements complete."
          />
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
