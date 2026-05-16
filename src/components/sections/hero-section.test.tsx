import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { HeroSection } from "@/components/sections/hero-section";
import { siteConfig } from "@/lib/site";
import { heroFixture } from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

describe("HeroSection", () => {
  it("renders the hero heading and primary CTAs", () => {
    renderWithProviders(<HeroSection hero={heroFixture} />);

    expect(
      screen.getByRole("heading", { level: 1, name: siteConfig.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: heroFixture.ctaPrimary }),
    ).toHaveAttribute("href", "#contato");
    expect(
      screen.getByRole("link", { name: heroFixture.ctaSecondary }),
    ).toHaveAttribute("href", "#projetos");
  });

  it("anchors the section at #inicio", () => {
    renderWithProviders(<HeroSection hero={heroFixture} />);
    expect(screen.getByTestId("hero-section")).toHaveAttribute("id", "inicio");
  });
});
