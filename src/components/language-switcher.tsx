"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buildLocalePath } from "@/i18n/locale-path";
import { locales, type Locale } from "@/i18n/settings";
import type { Dictionary } from "@/i18n/types";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Dictionary["languageSwitcher"];
};

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <nav
      data-testid="language-switcher"
      className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1"
      aria-label={labels.label}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={buildLocalePath(pathname, code)}
            className={`rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
              active
                ? "bg-cyan-500/20 text-cyan-300"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
            aria-current={active ? "true" : undefined}
            lang={code}
            title={code === "en" ? labels.en : labels.pt}
          >
            {code}
          </Link>
        );
      })}
    </nav>
  );
}
