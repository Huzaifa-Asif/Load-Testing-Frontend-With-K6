import { chromium } from 'k6/experimental/browser';
import { sleep } from 'k6'

export default async function () {
  const browser = chromium.launch({ headless: false });
  const page = browser.newPage();

  try {
    await page.goto('https://testorg.stotte.no');
    // get element by id
    // page.locator('#kt_sign_in_nif_submit').click(); 
    // get element by url
    page.locator('a[href="/auth/forgot-password"]').click();

    await page.waitForNavigation()
    
    sleep(4);

    page.screenshot({ path: `screenshot/redirect_test_${new Date()}.png` });
    
  } finally {
    page.close();
    browser.close();
  }
}