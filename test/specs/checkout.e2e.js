

const paymentPage = require ("../pageobjects/place_order")
const messengerBag = require("../pageobjects/messenger_bag");
const shippingInfo = require("../pageobjects/shipping");

describe ('Purchase item  added to cart and complete checkout', () => {
    it('Purchase an item', async () => {
        await messengerBag.open ();
        
        await messengerBag.addToCart.click();

        const amountInCart = await $(`//html/body/div[2]/header/div[2]/div[1]/a/span[2]`)
        await amountInCart.waitForDisplayed();

        const shoppingCart = await $(`//a[@class='action showcart']`)
        await shoppingCart.click ();
        
        const proceed = await $(`//button[@id='top-cart-btn-checkout']`)
        // await proceed.waitForDisplayed ();
        await proceed.click ();
    
    })

    it('Proceed to Entering Shipping information and Place Order', async () =>{
        
        await shippingInfo.Login('wor@jamz.com', '9to5Hard');
       
        const FirstName = await $(`input[name='firstname']`);
        const LastName = await $(`input[name='lastname']`)
        await browser.waitUntil(async () => await FirstName.getValue() ==  'Steve' && await LastName.getValue() == 'Works')
         
        await shippingInfo.createLabel('1005 Harry Rd','Hampton', 'Hawaii', '12347', 'United States', '987654321');
        
        await paymentPage.placeOrder.waitForDisplayed ();
        await paymentPage.placeOrder.click ();

        
        await expect (browser).toHaveUrl('https://magento.softwaretestingboard.com/checkout/onepage/success/');
    })

})