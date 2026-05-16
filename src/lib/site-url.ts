import { siteConfig } from "@/lib/site";

/** Canonical origin without trailing slash (for sitemap, metadata, tests). */
export function getSiteOrigin(fallback = siteConfig.url): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? fallback;
  return raw.replace(/\/$/, "");
}
