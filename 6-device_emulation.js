import { chromium, devices } from 'k6/experimental/browser';
import { sleep } from 'k6';

export default async function () {
  const browser = chromium.launch({ headless: false });
  const iphoneX = devices['iPhone X'];
  const context = browser.newContext(iphoneX);
// We can also use the viewport option to set the width and height of the browser window:  
//   const context = browser.newContext({
//     viewport: {
//       width: 375,
//       height: 812,
//     },
//     deviceScaleFactor: 3,
//   });
  const page = context.newPage();

  try {
    await page.goto('https://stotte.no/');
    sleep(10);
  } finally {
    page.close();
    browser.close();
  }
}
