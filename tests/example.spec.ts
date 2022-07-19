import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    // Go to https://www.wikipedia.org/
    await page.goto('https://www.wikipedia.org/');

    // Click strong:has-text("Deutsch")
    await page.locator('strong:has-text("Deutsch")').click();
    await expect(page).toHaveURL('https://de.wikipedia.org/wiki/Wikipedia:Hauptseite');

    // Click #n-mainpage-description >> text=Hauptseite
    await expect(page.locator('#n-mainpage-description')).toHaveText(/Hauptseite/);
});