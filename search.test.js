const { chromium } = require('playwright');

(async () => {
  // Launch browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to the photo/album listing page
  await page.goto('https://example.com/photo-album');

  // Enter a search term into the search box
  await page.fill('input[name="search"]', 'vacation');

  // Validate that the correct results appear
  const results = await page.$$eval('.photo-item', items => items.map(item => item.textContent));
  if (results.includes('Vacation Photo 1')) {
    console.log('Test Passed: Correct results appear.');
  } else {
    console.log('Test Failed: Correct results do not appear.');
  }

  // Close browser
  await browser.close();
})();
