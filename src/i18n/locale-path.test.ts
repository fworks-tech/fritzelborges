import { describe, expect, it } from "vitest";
import { buildLocalePath } from "@/i18n/locale-path";

describe("buildLocalePath", () => {
  it("swaps the locale prefix when present", () => {
    expect(buildLocalePath("/pt", "en")).toBe("/en");
    expect(buildLocalePath("/en#contato", "pt")).toBe("/pt#contato");
  });

  it("adds a locale prefix when missing", () => {
    expect(buildLocalePath("/", "pt")).toBe("/pt");
    expect(buildLocalePath("", "en")).toBe("/en");
  });
});
