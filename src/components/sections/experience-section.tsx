import type { Dictionary } from "@/i18n/types";

type ExperienceSectionProps = {
  experience: Dictionary["experience"];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-b border-white/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="experience-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          {experience.title}
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {experience.heading}
        </p>
        <p className="mt-4 max-w-2xl text-sm text-zinc-500">{experience.note}</p>
        <ol className="mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-8">
          {experience.items.map((job) => (
            <li key={job.title + job.period} className="relative">
              <span
                className="absolute -left-[29px] top-2 size-3 rounded-full border-2 border-cyan-400 bg-[#070a12] sm:-left-[33px]"
                aria-hidden
              />
              <p className="text-sm font-medium text-cyan-300/90">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{job.title}</h3>
              <p className="text-sm text-zinc-500">{job.org}</p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-400">
                {job.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
