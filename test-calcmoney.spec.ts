import { test, expect } from '@playwright/test';

test('Verify CalcMoney.io Production Deploy', async ({ page }) => {
    // 1. Navigate to the live Hostinger environment
    await page.goto('https://www.calcmoney.io');

    // 2. Wait for the GSAP animations and network to settle
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);

    // 3. Take a full-page screenshot of the Hero Section to verify 3D assets & CSS
    await page.screenshot({ path: 'calcmoney-prod-verification.png', fullPage: true });

    // 4. Verify core navigation bounds to ensure routing works
    const calculatorsLink = page.locator('a[href="/calculators"]').first();
    await expect(calculatorsLink).toBeVisible();

    // 5. Click through to the Calculator Hub
    await calculatorsLink.click();
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'calcmoney-prod-calculators.png', fullPage: true });
});
