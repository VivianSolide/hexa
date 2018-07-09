// for the moment, I just set the scraper to Lyon
// in order to launch the scraper:
// $ node lyon.js

const puppeteer = require("puppeteer");

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto("https://www.radissonblu.com/en/hotel-lyon/gallery#/webcam");
	await page.screenshot({ path: "../public/images/lyon.jpg" });
	await browser.close();
})();

// next steps:

// 1. explore the API (http://api.deckchair.com/v1/cameras)
// 2. have fun :)
