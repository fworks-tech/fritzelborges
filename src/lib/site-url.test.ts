import { afterEach, describe, expect, it, vi } from "vitest";
import { getSiteOrigin } from "@/lib/site-url";
import { siteConfig } from "@/lib/site";

describe("getSiteOrigin", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns configured URL without trailing slash", () => {
    expect(getSiteOrigin()).toBe(siteConfig.url);
    expect(getSiteOrigin("https://example.com/")).toBe("https://example.com");
  });

  it("prefers NEXT_PUBLIC_SITE_URL when set", () => {
    vi.stubEnv("NEXT_PUBLIC_SITE_URL", "https://staging.example.com/");
    expect(getSiteOrigin()).toBe("https://staging.example.com");
  });
});
