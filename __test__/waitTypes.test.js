const puppeteer = require("puppeteer")

describe("Wait Types", () => {
	it("Mostrar todos los tipos de espera", async () => {
		const browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
			// slowMo: 500,
		})

		const page = await browser.newPage()
		await page.goto("https://platzi.com", { waitUntil: "networkidle0" })

		// Espera explicita
		// await page.waitForTimeout(5000)

		// Espera por un CSS selector

		await page.waitForSelector(
			"#home-public > div > div > header > nav > div.Logo > div > a > div > figure.LogoHeader-name"
		)

		// Espera por un xpath

		// await page.waitForXPath('')

		await page.goto("https://demoqa.com/modal-dialogs", { waitUntil: "networkidle0" })
		const button = await page.waitForSelector("#showSmallModal", { visible: true })
		await button.click()

		// Espera por funcion

		await page.waitForFunction(
			() => document.querySelector("#example-modal-sizes-title-sm").innerText === "Small Modal"
		)

		// Ejemplo para observar el viewport
		// const observarResize = page.waitForFunction("window.innerWidth < 100")
		// await page.setViewport({ width: 50, height: 50 })

		// await observarResize
		await page.click("#closeSmallModal")

		await page.waitForFunction(() => !document.querySelector("#example-modal-sizes-title-sm"))

		await browser.close()
	}, 350000)
})
