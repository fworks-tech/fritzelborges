import { describe, expect, it } from "vitest";
import { siteConfig } from "@/lib/site";

describe("siteConfig", () => {
  it("exposes a canonical site URL", () => {
    expect(siteConfig.url).toMatch(/^https:\/\//);
  });

  it("includes contact and social links", () => {
    expect(siteConfig.social.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.social.github).toMatch(/^https:\/\//);
    expect(siteConfig.repoUrl).toMatch(/^https:\/\/github\.com\//);
  });
});
