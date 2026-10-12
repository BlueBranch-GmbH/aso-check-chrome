// Testet popup.html mit simulierten chrome.*-APIs gegen die echte Analyse-API.
// Nutzung: node tools/popup-test.cjs <tab-url> <screenshot-präfix>
const path = require('path');
const puppeteer = require(process.env.PUPPETEER_PATH || 'puppeteer');

(async () => {
  const [tabUrl, prefix] = process.argv.slice(2);
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 360, height: 600, deviceScaleFactor: 2 });
  page.on('console', (msg) => console.log('console:', msg.text()));
  page.on('pageerror', (err) => console.log('pageerror:', err.message));

  await page.evaluateOnNewDocument((url) => {
    const store = {};
    window.chrome = {
      tabs: { query: async () => [{ url }] },
      storage: {
        session: {
          get: async (key) => ({ [key]: store[key] }),
          set: async (obj) => Object.assign(store, obj),
          remove: async (key) => { delete store[key]; },
        },
      },
    };
  }, tabUrl);

  await page.goto('file://' + path.resolve('popup.html'));
  await page.waitForFunction(
    () => !document.getElementById('step-loading').hidden || !document.getElementById('step-input').hidden || !document.getElementById('step-result').hidden,
  );
  await page.screenshot({ path: `${prefix}-1.png`, fullPage: true });

  await page.waitForFunction(() => document.getElementById('step-loading').hidden, { timeout: 90000 });
  const state = await page.evaluate(() => ({
    visible: ['step-input', 'step-result'].find((id) => !document.getElementById(id).hidden),
    error: document.getElementById('analyze-error').textContent,
    score: document.getElementById('score-sum').textContent,
    rows: [...document.querySelectorAll('#score-breakdown li')].map((li) => li.innerText.replace(/\n/g, ' ')),
  }));
  console.log(JSON.stringify(state));
  await page.waitForFunction(() => { const img = document.getElementById('app-logo'); return img.hidden || img.complete; }, { timeout: 15000 }).catch(() => {});
  await new Promise((r) => setTimeout(r, 900));
  await page.screenshot({ path: `${prefix}-2.png`, fullPage: true });
  await browser.close();
})();
