import { test, expect } from '@playwright/test';

test('Verify navigation and text visibility', async ({ page }) => {
  // Step 1: Navigate to the EPAM website
  await page.goto('https://www.epam.com/');

  // Step 2: Navigate to "Services" page
  await page.locator('text=Services').click();
  await expect(page).toHaveURL('https://www.epam.com/services');

  // Step 3: Click on "Explore Our Client Work"
  await page.locator('text=Explore Our Client Work').click();
  await expect(page).toHaveURL('https://www.epam.com/services/client-work');

  // Step 4: Verify "Client Work" text is visible on the page
  await expect(page.locator('text=Client Work')).toBeVisible();
});