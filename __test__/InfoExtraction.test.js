const puppeteer = require("puppeteer")

describe("Information Extraction", () => {
	let browser
	let page

	beforeAll(async () => {
		browser = await puppeteer.launch({
			headless: false,
			defaultViewport: null,
			// slowMo: 500,
		})

		page = await browser.newPage()
		await page.goto("https://platzi.com", { waitUntil: "networkidle0" })
	}, 350000)

	afterAll(async () => {
		await browser.close()
	})

	it("Extraer el titulo de la pagina y la url", async () => {
		const titulo = await page.title()
		const url = await page.url()

		console.log("Titulo: ", titulo)
		console.log("Url: ", url)
	}, 350000)

	it("Extraer la información de un elemento", async () => {
		await page.waitForSelector("#home-public > div > div > header > nav > div.Actionsv2 > a")

		const buttonName = await page.$eval(
			"#home-public > div > div > header > nav > div.Actionsv2 > a",
			(button) => button.textContent
		)

		console.log("buttonName: ", buttonName)

		const [button] = await page.$x('//*[@id="home-public"]/div/div/header/nav/div[4]/div/a')
		const property = await button.getProperty("textContent")
		const text = await property.jsonValue()

		console.log("text: ", text)

		// Segunda forma de hacerlo

		const text2 = await page.evaluate((name) => name.textContent, button)

		console.log("text2: ", text2)

		const button3 = await page.waitForXPath(
			'//*[@id="home-public"]/div/div/header/nav/div[4]/div/a'
		)
		const text3 = await page.evaluate((name) => name.textContent, button3)

		console.log("text3: ", text3)
	}, 350000)

	it("Contar los elementos de una pagina", async () => {
		const imagesLength = await page.$$eval("img", (images) => images.length)

		console.log(imagesLength)
	}, 35000)
})
