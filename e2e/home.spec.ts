import { expect, test } from "@playwright/test";

test.describe("Home page", () => {
  test("loads the Portuguese home route", async ({ page }) => {
    await page.goto("/pt");

    await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
    await expect(page.locator("#conteudo-principal")).toBeVisible();
    await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  });

  test("desktop navigation exposes anchor links", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/pt");

    const nav = page.getByRole("navigation", { name: "Principal" });
    await expect(nav.getByRole("link", { name: "Sobre" })).toHaveAttribute(
      "href",
      "#sobre",
    );
    await expect(nav.getByRole("link", { name: "Formação" })).toHaveAttribute(
      "href",
      "#formacao",
    );
    await expect(nav.getByRole("link", { name: "Contato" })).toHaveAttribute(
      "href",
      "#contato",
    );
  });

  test("scrolls to the contact section via in-page link", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/pt");

    await page
      .getByRole("navigation", { name: "Principal" })
      .getByRole("link", { name: "Contato" })
      .click();

    await expect(page.locator("#contato")).toBeInViewport();
  });

  test("switches from Portuguese to English", async ({ page }) => {
    await page.goto("/pt");
    await page.getByTestId("language-switcher").getByRole("link", { name: "en" }).click();

    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("navigation", { name: "Main" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Contact" })).toBeVisible();
  });

  test("mobile menu toggles and links to a section", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/pt");

    const toggle = page.getByTestId("mobile-menu-toggle");
    const mobileMenu = page.locator("#mobile-menu");

    await expect(mobileMenu).toBeHidden();
    await toggle.click();
    await expect(mobileMenu).toBeVisible();

    await mobileMenu.getByRole("link", { name: "Formação" }).click();
    await expect(page.locator("#formacao")).toBeInViewport();
  });

  test("redirects / to a locale prefix", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL(/\/(pt|en)(\/)?$/);
  });
});
