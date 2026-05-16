import { locales, type Locale } from "@/i18n/settings";

/** Replaces the locale segment in an App Router pathname, or prefixes one. */
export function buildLocalePath(pathname: string, nextLocale: Locale): string {
  const [pathOnly, hash = ""] = pathname.split("#");
  const hashSuffix = hash ? `#${hash}` : "";
  const segments = pathOnly.split("/").filter(Boolean);

  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = nextLocale;
    return `/${segments.join("/")}${hashSuffix}`;
  }

  return `/${nextLocale}${hashSuffix}`;
}
