import Link from "next/link";
import type { Metadata } from "next";
import { getDictionary } from "@/i18n/get-dictionary";
import { defaultLocale } from "@/i18n/settings";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Not found",
};

export default async function NotFound() {
  const dict = await getDictionary(defaultLocale);
  const { notFound: copy } = dict;

  return (
    <html lang="pt-BR">
      <body
        data-testid="not-found-page"
        className="flex min-h-screen flex-col items-center justify-center bg-[#070a12] px-4 py-24 text-center font-sans text-zinc-200"
      >
        <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
          {copy.code}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {copy.heading}
        </h1>
        <p className="mt-4 max-w-md text-sm text-zinc-400">{copy.body}</p>
        <Link
          href={`/${defaultLocale}`}
          className="mt-10 inline-flex items-center justify-center rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-[#05070d] transition hover:bg-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
        >
          {copy.homeCta}
        </Link>
        <p className="mt-8 text-xs text-zinc-500">{siteConfig.name}</p>
      </body>
    </html>
  );
}
