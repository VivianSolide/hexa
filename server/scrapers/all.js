const puppeteer = require("puppeteer");

class Scraper {
	scrap(id, link) {
		(async () => {
			const browser = await puppeteer.launch({ headless: false });
			const page = await browser.newPage();
			await page.goto(link);
			await page.waitForSelector("camera");
			await page.click("camera");
			console.log("toto");
			// await page.screenshot({ path: `../public/images/${id}.jpg` });
			await browser.close();
		})();
	}
}

module.exports = Scraper;
