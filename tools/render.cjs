// Rendert eine HTML-Datei per Headless-Chrome als PNG.
// Nutzung: node tools/render.cjs <html> <out.png> <breite> <höhe> [transparent]
const path = require('path');
const puppeteer = require(process.env.PUPPETEER_PATH || 'puppeteer');

(async () => {
  const [html, out, w, h, transparent] = process.argv.slice(2);
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  await page.setViewport({ width: +w, height: +h, deviceScaleFactor: 1 });
  await page.goto('file://' + path.resolve(html), { waitUntil: 'networkidle0' });
  await page.screenshot({ path: out, omitBackground: transparent === 'transparent' });
  await browser.close();
})();
