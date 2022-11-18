const data_sheet = require ('../data/data_sheet')
const SignUpPage = require("../pageobjects/sign_up");


   for (const record of data_sheet) {

        it(`Create accounts ${record.firstName} for Luma`, async () => {
            await SignUpPage.open();
            await SignUpPage.createUser(record.firstName, record.lastName, record.email, record.Password, record.confirm);

            // await expect (myAccountPage.alertMessage).toHaveUrl(record.expectedUrl);
            // await expect (SignUpPage.loginError).toHaveTextContaining (record.message);

            if(record.SignUpPage == SignUpPage.loginError) {
                await expect (SignUpPage.loginError).toHaveTextContaining(record.message);

            }
             else {
                await expect(browser).toHaveUrl(record.expectedUrl);
             }
        });
        
    };