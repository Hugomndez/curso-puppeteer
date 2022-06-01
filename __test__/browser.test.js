const puppeteer = require("puppeteer")

describe("Mi primer test en Puppeteer", () => {
	it("Debe de abrir y cerrar el navegador", async () => {
		const browser = await puppeteer.launch({
			headless: false,
		})

		const page = await browser.newPage()
		await page.goto("https://www.google.com")
		await page.waitForTimeout(5000)
		await browser.close()
	}, 10000)
})
