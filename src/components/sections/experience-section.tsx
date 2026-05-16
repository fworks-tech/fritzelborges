const EXPERIENCE = [
  {
    title: "Engenheiro de software sênior",
    org: "Empresa / consultoria — exemplo",
    period: "20XX — presente",
    summary:
      "Liderança técnica em squads ágeis, definição de padrões de API e revisão de arquitetura. Entrega de features críticas com Laravel e front-end em React.",
  },
  {
    title: "Engenheiro de software",
    org: "Produto digital — exemplo",
    period: "20XX — 20XX",
    summary:
      "Desenvolvimento full stack, integrações com terceiros, melhoria de performance e redução de débito técnico em bases legadas.",
  },
  {
    title: "Desenvolvedor",
    org: "Agência / startup — exemplo",
    period: "20XX — 20XX",
    summary:
      "Construção de MVPs, landing pages e painéis administrativos; foco em time-to-market e qualidade perceptível pelo usuário.",
  },
];

export function ExperienceSection() {
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
          Experiência
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Trajetória resumida
        </p>
        <p className="mt-4 max-w-2xl text-sm text-zinc-500">
          Substitua pelos cargos reais — estes blocos são placeholders para estrutura
          e tom (issue #12).
        </p>
        <ol className="mt-12 space-y-8 border-l border-white/10 pl-6 sm:pl-8">
          {EXPERIENCE.map((job) => (
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
