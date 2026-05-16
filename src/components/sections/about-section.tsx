import type { Dictionary } from "@/i18n/types";

type AboutSectionProps = {
  about: Dictionary["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
  return (
    <section
      id="sobre"
      className="scroll-mt-20 border-b border-white/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          {about.title}
        </h2>
        <p className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {about.heading}
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {about.paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="text-base leading-relaxed text-zinc-400"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
