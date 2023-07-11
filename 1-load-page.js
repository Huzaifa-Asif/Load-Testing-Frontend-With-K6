import { chromium } from 'k6/experimental/browser';
import { sleep } from 'k6'

export default async function () {
  const browser = chromium.launch();

  const page = browser.newPage();
  const response = page.goto('https://testorg.stotte.no');
  await page.waitForLoadState('networkidle');
  sleep(4);
  console.log('Status code:', response.status());
  browser.close();
}