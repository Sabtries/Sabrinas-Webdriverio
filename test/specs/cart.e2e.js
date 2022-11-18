// const { default: $ } = require("webdriverio/build/commands/browser/$");
const messengerBag = require("../pageobjects/messenger_bag");



describe ('Add an item  to cart and verify item was added', () => {
    
    it.only('Add item to cart', async () => {
        await browser.url ('https://magento.softwaretestingboard.com');

        const productBag = await $(`#maincontent > div.columns > div > div.widget.block.block-static-block > div.block.widget.block-products-list.grid > div > div > ol > li:nth-child(6)`);
        await productBag.click();
        
        await browser.waitUntil(async () => await browser.getUrl()=='https://magento.softwaretestingboard.com/push-it-messenger-bag.html')
        
        
        await messengerBag.addToCart.waitForDisplayed ();
        await messengerBag.addToCart.click();

        const successMessage = await $(`//div[@data-bind='html: $parent.prepareMessageForHtml(message.text)']`)
        
        await expect(successMessage).toHaveTextContaining(
            'You added Push It Messenger Bag to your shopping cart.'
        );
    }) 

        // await addToCart.click 
        // const amountInCart = await $(`[class='counter-number']`)
        // await amountInCart.waitForExist();
        // await expect(messenger_bag.amountInCart).toBeExisting();
    
})
