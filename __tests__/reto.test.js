const puppeteer = require('puppeteer')

describe('llenar un formulario',() => {

    it('test llenado de formulario', async() => {
        const browser = await puppeteer.launch({
            headless: false, 
            defaultViewport: null       
        })

        const page = await browser.newPage()
        await page.goto("https://devexpress.github.io/testcafe/example/")


    //llenado de formulario
    await page.type('#developer-name','Saúl',{delay:100})
    await page.click('#remote-testing')
    await page.click('#traffic-markup-analysis')
    await page.click('#tried-test-cafe')
    await page.click('#slider > span')
    await page.type('#comments', 'hola esto es un comentario')
    await page.click('#windows')
    await page.select('#preferred-interface','JavaScript API')
    await page.click('#submit-button')
    await page.waitForTimeout(2000)


},350000)


})