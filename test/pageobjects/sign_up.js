
const Page = require('./page');

class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstName () {
        return $('#firstname');
    }

    get inputLastName () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $(`[title='Password']`);
    }

    get inputConfirmPassword () {
        return $(`[name='password_confirmation']`);
    }

    get btnSubmit () {
        return $(`button[class$='action submit primary']`);
    }

    get loginError (){
        return $(`[role='alert']`)
    }

    // get flasherror (){
    //     return $('.flash.error')
    // }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async createUser (firstName, lastName, email, Password, confirm) {
        await this.inputFirstName.setValue(firstName);
        await this.inputLastName.setValue(lastName);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(Password);
        await this.inputConfirmPassword.setValue(confirm);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('customer/account/create');
    }
}

module.exports = new SignUpPage();
