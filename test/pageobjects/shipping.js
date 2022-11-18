
const Page = require('./page');

class shippingInfo extends Page {

    get emailAddress() {
        return $(`//input[contains(@data-bind,'textInput: email,')]`)
    }
    get passwords() {
        return $(`//input[@placeholder='Password']`);
    }
    get loginButton() {
        return $(`//button[@class='action login primary']`)
    }
    get company() {
        return $(`//input[@name='company']`)
    }
    get street() {
        return $(`input[name='street[0]']`)
    }
    get city() {
        return $(`//input[@name='city']`)
    }
    get state() {
        return $(`//select[@name='region_id']`)
    }
    get postalCode() {
        return $(`//input[@name='postcode']`)
    }
    get country() {
        return $(`//select[@name='country_id']`)
    }
    get phoneNumber() {
        return $(`///input[@name='telephone']`)
    }
    get method() {
        return $(`//input[@name='ko_unique_3']`)
    }
    get next() {
        return $(`//button[@class='button action continue primary']`)
    }

    async Login (emailAdd, passWord){
     await this.emailAddress.setValue(emailAdd);
     await this.passwords.setValue(passWord);
     await this.loginButton.click();
    }
     
    async createLabel (streetNum, City, State, zip, Country, Phone){
        await this.street.setValue(streetNum);
        await this.city.setValue(City)
        await this.state.setValue(State)
        await this.postalCode.setValue(zip)
        await this.country.setValue(Country)
        await this.phoneNumber.setValue(Phone)
        await this.method.click();
        await this.next.click();

    }

    open() {
        return super.open('checkout/#shipping');
    }
};

module.exports = new shippingInfo(); 