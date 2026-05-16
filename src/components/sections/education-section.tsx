import Link from "next/link";
import type { Dictionary } from "@/i18n/types";

type EducationSectionProps = {
  education: Dictionary["education"];
};

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section
      id="formacao"
      className="scroll-mt-20 border-b border-white/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="education-heading"
      data-testid="education-section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="education-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          {education.title}
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {education.heading}
        </p>
        <ol className="mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-8">
          {education.items.map((item) => (
            <li key={item.degree + item.period} className="relative">
              <span
                className="absolute -left-[29px] top-2 size-3 rounded-full border-2 border-cyan-400 bg-[#070a12] sm:-left-[33px]"
                aria-hidden
              />
              <p className="text-sm font-medium text-cyan-300/90">{item.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.degree}</h3>
              {item.href ? (
                <Link
                  href={item.href}
                  className="text-sm text-zinc-500 hover:text-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {item.institution} →
                </Link>
              ) : (
                <p className="text-sm text-zinc-500">{item.institution}</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
