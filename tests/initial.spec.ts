import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // Go to http://localhost:3001/
  await page.goto("http://localhost:3001/");

  // Click button:has-text("Component Library Button")
  await page.locator('button:has-text("Component Library Button")').click();

  await page.screenshot({ path: "snapshot.png" });

  const successElementCount = await page
    .locator('button:has-text("Component Library Button")')
    .count();

  expect(successElementCount).toBe(1);
});
