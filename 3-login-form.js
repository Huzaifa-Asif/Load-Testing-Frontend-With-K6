import { chromium } from 'k6/experimental/browser';
import { check } from 'k6';

export default async function () {
    const browser = chromium.launch({ headless: false });
    const context = browser.newContext();
    const page = context.newPage();

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.screenshot({ path: 'screenshot/browserTestScreenshot.png' });

    page.locator('#input-email').type('lambdatest.Cypress@disposable.com');
    page.locator('#input-password').type('Cypress123!!');
    const submitButton = page.locator('input[value="Login"]');
    await Promise.all([page.waitForNavigation(), submitButton.click()]);

    check(page, {
        'Verify user is logged In': () =>
            page.locator('.breadcrumb-item.active').textContent() == 'Account',
    });
    check(page, {
        'Verify the text': () =>
            page.locator('.breadcrumb-item.active').textContent() == 'Test',
    });

    await page.close()
    await browser.close();
}