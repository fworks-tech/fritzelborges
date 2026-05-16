import { expect, test } from "@playwright/test";

test.describe("404 page", () => {
  test("shows not found content for unknown routes", async ({ page }) => {
    const response = await page.goto("/pt/this-route-does-not-exist");

    expect(response?.status()).toBe(404);
    await expect(page.getByTestId("not-found-page")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /página não encontrada/i }),
    ).toBeVisible();
  });

  test("returns home via the primary link", async ({ page }) => {
    await page.goto("/pt/missing-page");

    await page.getByRole("link", { name: /ir para o início/i }).click();

    await expect(page).toHaveURL(/\/pt$/);
    await expect(page.locator('[data-testid="hero-section"]')).toBeVisible();
  });
});
