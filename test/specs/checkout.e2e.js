// const { default: $ } = require("webdriverio/build/commands/browser/$");


const messengerBag = require("../pageobjects/messenger_bag");

describe ('Add an item  to cart and verify item was added', () => {
    it('Purchase an item', async () => {
        await messengerBag.open ();
        
        await messengerBag.addToCart.click();

        const shoppingCart = await $(`//a[@class='action showcart']`)
        await shoppingCart.click ();
        
        const proceed = await $(`//button[@id='top-cart-btn-checkout']`)
        await proceed.waitForDisplayed ();
        await proceed.click ();

        // await browser.debug();
    
    })
})