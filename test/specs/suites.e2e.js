//const createAcPage = require('../.page/');

//const data_sheet = require("../page_objects/data_sheet");
//const { alertMessage } = require("../page_objects/my_account.page");


// const messenger_bag = require("../page_objects/messenger_bag");
// const myAccountPage = require("../page_objects/my_account.page");
// const = require("../page_objects/sign_up");
// const SignUpPage = require("../page_objects/sign_up");

describe ('Create an User Account', () => {
    it.skip('Create a valid ac', async () => {
        // await browser.url('https://magento.softwaretestingboard.com/');

        // const createAc = await $('header li:nth-child(3) a:nth-child(1)');
        // await createAc.click
        
         await SignUpPage.open ();
         await SignUpPage.createUser ('Sandre', 'Mich', 'low@gmail.com', 'Qwerty56789', 'Qwerty56789');
         await expect(myAccountPage.alertMessage).toExist();
    });

    it.skip('Get Error for invalid user', async () => {
        await SignUpPage.open ();
        
        await SignUpPage.createUser ('Jim', 'Brown', 's@gmail.com', 'Potter34', 'Potter34');
        await expect (SignUpPage.loginError).toBeExisting();

    });
    
    // for (const record of data_sheet) {

    //     console.log(data_sheet);

    //     // it(`Create accounts ${record.firstName} for Luma`, async () => {
    //     //     await SignUpPage.open ();
    //     //     await SignUpPage.createUser(record.firstName, record.lastName, record.email, record.Password, record.confirm);

    //     //     await expect (myAccountPage.alertMessage).toHaveUrl(record.expectedUrl);
    //     //     await expect (SignUpPage.loginError).toHaveTextContaining (record.message);

    //         // if(record.SignUpPage === loginError) {
    //         //     await expect (SignUpPage.loginError).toHaveTextContaining(record.message);

    //         // }
    //         //  else {
    //         //     await expect(browser).toHaveUrl(record.expectedUrl);
    //         //  }
    //     // });
        
    // };

    

 
});