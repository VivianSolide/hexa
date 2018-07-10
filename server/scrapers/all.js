const puppeteer = require("puppeteer");

class Scraper {
	constructor(id, link) {
		this.id = id;
		this.link = link;
	}

	scrap() {
		(async () => {
			const browser = await puppeteer.launch();
			const page = await browser.newPage();
			await page.goto(this.link);
			await page.screenshot({ path: `../public/images/${this.id}.jpg` });
			await browser.close();
		})();
	}
}

module.exports = Scraper;

// (async () => {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();
// 	await page.goto("https://www.radissonblu.com/en/hotel-lyon/gallery#/webcam");
// 	await page.screenshot({ path: "../public/images/lyon.jpg" });
// 	await browser.close();
// })();
