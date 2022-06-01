const puppeteer = require("puppeteer")

describe("Mi primer test en Puppeteer", () => {
	it("Debe de abrir y cerrar el navegador", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		})

		const page = await browser.newPage()
		await page.goto("https://github.com")
		// await page.waitForTimeout(5000)
		await page.waitForSelector("img")

		// Recargar la pagina
		await page.reload()
		await page.waitForSelector("img")

		// Navegar a otro sitio
		await page.goto("https://platzi.com")
		await page.waitForSelector(
			"#home-public > div > div > header > nav > div.Logo > div > a > div > figure.LogoHeader-name"
		)

		// Navegar hacia atras

		await page.goBack()
		await page.goForward()
		// await page.waitForSelector("img")

		// Abrir otra pagina
		const page2 = await browser.newPage()
		await page2.goto("https://google.com")

		await browser.close()
	}, 50000)
})
