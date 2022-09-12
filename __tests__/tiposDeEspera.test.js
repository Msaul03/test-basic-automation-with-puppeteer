const puppeteer = require('puppeteer')

describe('Tipos de espera',() => {

    it('Mostrar todos los diferentes tipos de espera', async() => {
        const browser = await puppeteer.launch({
            headless: false, 
            defaultViewport: null,
            //slowMo : 50      
        })

        const page = await browser.newPage()
        await page.goto('https://platzi.com' )

                // Espera explicita
        
        //await page.waitForTimeout(1000) 

                // Esperar por un css selector 

        //await page.waitForSelector('#home-public > div > div.BaseLayout > header > nav > div.Logo > div > a > div > figure:nth-child(1) > img')

                // Espera por un xpath

        //await page.waitForXPath('//*[@id="home-public-old"]/header/nav/div[1]/div/a/div/figure[2]/img')
       
        await page.goto('https://demoqa.com/modal-dialogs')

        await page.waitForSelector('#showSmallModal',{visible: true})
        
        const button = await page.waitForXPath('*[@id="showSmallModal"]' ,{visible: true})
        await button.click()

                //Espera por función

        await page.waitForFunction(() => document.querySelector('#example-modal-sizes-title-sm').innerText === 'Small Modal')
        
        // Ejemplo para observar el viewport

        //const observarResize = page.waitForFunction('window.innerWidth  < 100')
        //await page.setViewport({ width: 50 , height: 50 })
        //await observarResize

        await page.click('#closeSmallModal')
        await page.waitForFunction(() =>!document.querySelector('#example-modal-sizes-title-sm'))

        await browser.close()
},350000)


})