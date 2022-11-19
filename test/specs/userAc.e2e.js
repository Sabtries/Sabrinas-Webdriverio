//const createAcPage = require('../.page/');

const myAccountPage = require("../pageobjects/my_account.page");
const SignUpPage = require("../pageobjects/sign_up");

describe ('Create an User Account', () => {
    it('Create a valid ac', async () => {
        // await browser.url('https://magento.softwaretestingboard.com/');

        // const createAc = await $('header li:nth-child(3) a:nth-child(1)');
        // await createAc.click
        
         await SignUpPage.open ();
         await SignUpPage.createUser ('Sandre', 'Mich', 'lzwis@gmail.com', 'Qwerty56789', 'Qwerty56789');
         await expect(myAccountPage.alertMessage).toExist();
    });

    it('Get Error for invalid user', async () => {
        await SignUpPage.open ();
        
        await SignUpPage.createUser ('Jim', 'Brown', 's@gmail.com', 'Potter34', 'Potter34');
        await expect (SignUpPage.loginError).toBeExisting();

    });
 
});