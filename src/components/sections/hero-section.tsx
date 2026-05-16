import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-white/10"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(34,211,238,0.18),transparent),radial-gradient(ellipse_60%_50%_at_100%_40%,rgba(99,102,241,0.12),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        <p className="text-sm font-medium uppercase tracking-wider text-cyan-300/90">
          Portfolio profissional
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {siteConfig.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          {siteConfig.role} — {siteConfig.tagline}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="#contato"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#05070d] shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Falar sobre um projeto
          </Link>
          <Link
            href="#projetos"
            className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
          >
            Ver trabalhos
          </Link>
        </div>
        <dl className="mt-14 grid gap-6 sm:grid-cols-3">
          {[
            { k: "Foco", v: "APIs, front-end e entrega contínua" },
            { k: "Stack", v: "Laravel · React · TypeScript" },
            { k: "Local", v: "Brasil · trabalho remoto" },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                {item.k}
              </dt>
              <dd className="mt-2 text-sm text-zinc-200">{item.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
