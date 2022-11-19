const signInUser = require("../pageobjects/loginUser");


describe('Verify Order History', () => {
    it('Order History', async () =>{
        await signInUser.open();
        
        await signInUser.signIn('wor@jammin.com', '9to5Hard')
        // await browser.pause(2000);

        const historyTab = await $(`//a[normalize-space()='My Orders']`)
        await historyTab.click();

        await expect(browser).toHaveUrl(
            'https://magento.softwaretestingboard.com/sales/order/history/');
    
    })

})