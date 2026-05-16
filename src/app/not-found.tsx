import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "O endereço não existe ou foi movido.",
};

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
        Erro 404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-sm text-zinc-400">
        Verifique o URL ou volte para a página inicial para continuar navegando.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#05070d] transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
      >
        Ir para o início
      </Link>
      <p className="mt-8 text-xs text-zinc-500">{siteConfig.name}</p>
    </main>
  );
}
