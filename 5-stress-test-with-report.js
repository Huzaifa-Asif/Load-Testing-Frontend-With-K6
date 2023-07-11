import { chromium } from 'k6/experimental/browser';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/2.4.0/dist/bundle.js";

export let options = {
    vus: 5,
    iterations: 10
}

export default async function () {
    const browser = chromium.launch({ headless: false });
    const context = browser.newContext();
    const page = context.newPage();

    await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    await page.screenshot({ path: `screenshot/5-stress-test_website_${new Date()}.png` });

    page.locator('#input-email').type('lambdatest.Cypress@disposable.com');
    page.locator('#input-password').type('Cypress123!!');
    const submitButton = page.locator('input[value="Login"]');
    await Promise.all([page.waitForNavigation(), submitButton.click()]);

    // screenshot when user is logged in
    await page.screenshot({ path: `screenshot/5-stress-test_website_${new Date()}.png` });

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

// handle summary method is called in the end when all iterations are done
export function handleSummary(data) {
    const reportName = `report/stress_test_report_${new Date().toString()}.html`;
    return {
        [reportName]: htmlReport(data, { debug: true })
    };
}