import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER_ERROR:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE_ERROR:', err.toString());
  });

  page.on('requestfailed', req => {
    console.log('REQUEST_FAILED:', req.url(), req.failure().errorText);
  });

  try {
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle2', timeout: 15000 });
    console.log('Page loaded!');
  } catch (err) {
    console.error('Navigation error:', err);
  }

  await new Promise(r => setTimeout(r, 5000));
  await browser.close();
})();
