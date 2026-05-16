import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { LanguageSwitcher } from "@/components/language-switcher";
import { languageSwitcherFixture } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

vi.mock("next/navigation", () => ({
  usePathname: () => "/pt",
}));

describe("LanguageSwitcher", () => {
  it("links to the alternate locale while marking the active one", () => {
    renderWithProviders(
      <LanguageSwitcher locale="pt" labels={languageSwitcherFixture} />,
    );

    const nav = screen.getByRole("navigation", {
      name: languageSwitcherFixture.label,
    });
    expect(nav).toBeInTheDocument();

    const enLink = screen.getByRole("link", { name: "en" });
    const ptLink = screen.getByRole("link", { name: "pt" });

    expect(enLink).toHaveAttribute("href", "/en");
    expect(ptLink).toHaveAttribute("href", "/pt");
    expect(ptLink).toHaveAttribute("aria-current", "true");
    expect(enLink).not.toHaveAttribute("aria-current");
  });
});
