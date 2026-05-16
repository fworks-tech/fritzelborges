import Link from "next/link";
import type { Dictionary } from "@/i18n/types";

type ProjectsSectionProps = {
  projects: Dictionary["projects"];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="projetos"
      className="scroll-mt-20 border-b border-white/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="projects-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          {projects.title}
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {projects.heading}
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.items.map((project) => (
            <li key={project.name}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/35 hover:bg-white/[0.05]">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <p className="mt-4 text-xs font-medium text-zinc-500">{project.stack}</p>
                {project.href ? (
                  <Link
                    href={project.href}
                    className="mt-6 inline-flex text-sm font-semibold text-cyan-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {project.cta} →
                  </Link>
                ) : (
                  <span className="mt-6 inline-flex text-sm font-medium text-zinc-500">
                    {project.cta}
                  </span>
                )}
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
