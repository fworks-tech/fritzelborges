import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-20 py-16 sm:py-20 lg:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="contact-heading"
          className="text-sm font-semibold uppercase tracking-wider text-cyan-400"
        >
          Contato
        </h2>
        <p className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Vamos conversar
        </p>
        <p className="mt-4 max-w-2xl text-base text-zinc-400">
          Aberto a oportunidades, consultorias pontuais e projetos com time
          alinhado a boas práticas. Envie uma mensagem com contexto e prazos.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href={siteConfig.social.email}
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#05070d] shadow-lg shadow-cyan-500/15 transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
          >
            Enviar e-mail
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            className="inline-flex items-center justify-center rounded-lg border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:border-cyan-400/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </section>
  );
}
