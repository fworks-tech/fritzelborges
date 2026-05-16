export function AboutSection() {
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
          Sobre
        </h2>
        <p className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Engenharia de software com visão de produto
        </p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <p className="text-base leading-relaxed text-zinc-400">
            Atuo no ciclo completo de desenvolvimento: arquitetura, implementação,
            testes e operação. Gosto de equilibrar pragmatismo técnico com clareza
            para o time e para o negócio — do desenho de APIs ao refinamento de
            interfaces em React.
          </p>
          <p className="text-base leading-relaxed text-zinc-400">
            Valorizo código legível, contratos de API bem definidos e bases que
            facilitam evolução. Quando faz sentido, uso TypeScript ponta a ponta
            para reduzir regressões e melhorar a experiência de desenvolvimento.
          </p>
        </div>
      </div>
    </section>
  );
}
