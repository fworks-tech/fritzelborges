import { describe, expect, it } from "vitest";
import {
  defaultLocale,
  isLocale,
  localeToHtmlLang,
  localeToOpenGraphLocale,
  locales,
} from "@/i18n/settings";

describe("i18n settings", () => {
  it("supports en and pt with en as default", () => {
    expect(locales).toEqual(["en", "pt"]);
    expect(defaultLocale).toBe("en");
  });

  it("validates locale strings", () => {
    expect(isLocale("pt")).toBe(true);
    expect(isLocale("en")).toBe(true);
    expect(isLocale("fr")).toBe(false);
  });

  it("maps locales to html and Open Graph codes", () => {
    expect(localeToHtmlLang("pt")).toBe("pt-BR");
    expect(localeToHtmlLang("en")).toBe("en");
    expect(localeToOpenGraphLocale("pt")).toBe("pt_BR");
    expect(localeToOpenGraphLocale("en")).toBe("en_US");
  });
});
