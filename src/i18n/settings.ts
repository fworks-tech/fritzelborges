export const locales = ["en", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeToHtmlLang(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en";
}

export function localeToOpenGraphLocale(locale: Locale): string {
  return locale === "pt" ? "pt_BR" : "en_US";
}
