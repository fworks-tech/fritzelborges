import { describe, expect, it } from "vitest";
import { getDictionary } from "@/i18n/get-dictionary";

describe("getDictionary", () => {
  it("loads Portuguese navigation labels", async () => {
    const dict = await getDictionary("pt");
    expect(dict.nav[0]).toEqual({ href: "#inicio", label: "Início" });
    expect(dict.languageSwitcher.label).toBe("Idioma");
  });

  it("loads English navigation labels", async () => {
    const dict = await getDictionary("en");
    expect(dict.nav[0]).toEqual({ href: "#inicio", label: "Home" });
    expect(dict.notFound.heading).toMatch(/not found/i);
  });
});
