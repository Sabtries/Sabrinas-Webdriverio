const Page = require('./page');

class paymentPage extends Page {
    get placeOrder () {
        return $(`//button[@title="Place Order"]`);
    }
    open() {
        return super.open('checkout/#payment');
    }
};

module.exports = new paymentPage(); 
