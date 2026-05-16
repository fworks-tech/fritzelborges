import type { MetadataRoute } from "next";
import { locales } from "@/i18n/settings";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 1,
  }));
}
