const puppeteer = require("puppeteer")

describe("Element  Interactions", () => {
	it("Debe de abrir y cerrar el navegador", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
		})

		const page = await browser.newPage()
		await page.goto("https://demo.guru99.com/test/simple_context_menu.html")

		page.on("dialog", async (dialog) => {
			await dialog.accept()
		})
		// Click derecho
		// await page.click("body > span", { button: "right", delay: 500 })
		// await page.waitForTimeout(3000)

		// Doble click

		await page.click("body > button", { clickCount: 2, delay: 500 })

		await page.goto("https://devexpress.github.io/testcafe/example/")

		await page.type("#developer-name", "Hugo", { delay: 100 })

		await page.click("#remote-testing")
		await page.click("#tried-test-cafe")
		await page.type("#comments", "Esto es un comentario")
		await page.click("#submit-button")
		await page.waitForTimeout(3000)

		await browser.close()
	}, 50000)
})
