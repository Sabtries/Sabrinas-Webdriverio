const Page = require('./page');

class signInUser extends Page {
    get eMail() {
        return $(`//input[@id='email']`);
    }
    get PassWord() {
        return $(`//input[@title='Password']`);
    }
    get signInButton() {
        return $(`//button[@class='action login primary']`);
    }

    async signIn (emailac, pssword) {
        this.eMail.setValue(emailac);
        this.PassWord.waitFor();
        this.PassWord.setValue(pssword);
        await browser.pause(2000);
        this.signInButton.click();
    }
    
    open() {
        return super.open('customer/account/login');
    }
};

module.exports = new signInUser(); 