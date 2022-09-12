const puppeteer = require('puppeteer')

describe('1er test', () => {
    it('debe abrir browser', async () => {
        const browser = await puppeteer.launch({
            headless: false,
            //slowMo: 1000,
            //devtools: false,
            defaultViewport: null
        })
        const page = await browser.newPage()
        await page.goto('https://google.com/' , { waitUntil: 'networkidle0' })
        await page.waitForTimeout(2000)
        await page.waitForSelector('img')
        //recargar pagina
        await page.reload()
        await page.waitForSelector('img')

        //navegar a otro sitio
        await page.goto('https://platzi.com/')
        await page.waitForSelector('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')
        //ir hacia atrás y adelante
        await page.goBack()
        await page.goForward()
        //abrir otra pagina en otra pestaña
        const page2 = await browser.newPage()
        await page2.goto('https://google.com/')
        //await page2.waitForTimeout(2000)

        await browser.close()
    }, 3500000)
})
