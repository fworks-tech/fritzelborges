import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-[#05070d]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">{siteConfig.name}</p>
          <p className="mt-1 max-w-md text-sm text-zinc-400">
            Site pessoal — Laravel, React e TypeScript no dia a dia.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href={siteConfig.social.github}
            className="text-zinc-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </Link>
          <Link
            href={siteConfig.social.linkedin}
            className="text-zinc-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/fworks-tech/fritzelborges"
            className="text-zinc-400 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
            rel="noopener noreferrer"
            target="_blank"
          >
            Repositório
          </Link>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-zinc-500">
        © {year} {siteConfig.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
