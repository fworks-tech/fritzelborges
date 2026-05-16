import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SiteHeader } from "@/components/site-header";
import {
  headerFixture,
  languageSwitcherFixture,
  localePt,
  navFixture,
} from "@/test/fixtures";
import { renderWithProviders } from "@/test/render";

vi.mock("@/components/language-switcher", () => ({
  LanguageSwitcher: () => <div data-testid="language-switcher-stub" />,
}));

describe("SiteHeader", () => {
  it("renders desktop navigation links to each anchor", () => {
    renderWithProviders(
      <SiteHeader
        locale={localePt}
        nav={navFixture}
        header={headerFixture}
        languageSwitcher={languageSwitcherFixture}
      />,
    );

    const nav = screen.getByRole("navigation", { name: headerFixture.navAria });
    for (const item of navFixture) {
      const matches = screen.getAllByRole("link", { name: item.label });
      expect(matches.some((link) => link.getAttribute("href") === item.href)).toBe(
        true,
      );
    }
    expect(nav).toBeInTheDocument();
  });

  it("toggles the mobile menu when the menu button is pressed", async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <SiteHeader
        locale={localePt}
        nav={navFixture}
        header={headerFixture}
        languageSwitcher={languageSwitcherFixture}
      />,
    );

    const toggle = screen.getByTestId("mobile-menu-toggle");
    const mobileNav = screen.getByRole("navigation", {
      name: headerFixture.mobileNavAria,
    });

    expect(mobileNav.parentElement).toHaveClass("hidden");

    await user.click(toggle);
    expect(mobileNav.parentElement).not.toHaveClass("hidden");
    expect(toggle).toHaveAttribute("aria-expanded", "true");

    await user.click(toggle);
    expect(mobileNav.parentElement).toHaveClass("hidden");
  });
});
