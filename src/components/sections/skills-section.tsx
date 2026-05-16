const SKILLS = [
  "Laravel & PHP",
  "React & Next.js",
  "TypeScript & JavaScript",
  "REST & integrações",
  "PostgreSQL / MySQL",
  "Git, CI/CD",
  "UI responsiva & acessibilidade",
  "Observabilidade básica",
];

export function SkillsSection() {
  return (
    <section
      id="habilidades"
      className="scroll-mt-20 border-b border-white/10 py-16 sm:py-20 lg:py-24"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="skills-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          Habilidades
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          O que costumo levar para o time
        </p>
        <ul className="mt-10 flex flex-wrap gap-2 sm:gap-3">
          {SKILLS.map((skill) => (
            <li key={skill}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
