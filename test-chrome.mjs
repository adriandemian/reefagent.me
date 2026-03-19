import puppeteer from 'puppeteer-core';

async function main() {
  try {
    console.log('Trying to launch...');
    const browser = await puppeteer.launch({
      executablePath: '/tmp/chrome-bin',
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
    });
    console.log('Browser launched!');
    const page = await browser.newPage();
    console.log('Page created');
    await page.setContent('<h1>Test</h1>');
    console.log('Content set');
    await page.pdf({ path: '/tmp/test-output.pdf', format: 'A4' });
    console.log('PDF created');
    await browser.close();
    console.log('Success!');
  } catch (err) {
    console.log('ERROR_TYPE: ' + err.constructor.name);
    console.log('ERROR_MSG: ' + err.message);
  }
}

main();
