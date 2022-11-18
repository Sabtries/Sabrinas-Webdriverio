const Page = require('./page');

class OrderConfirmation extends Page {
    get orderNumber () {
        return $(`//a[@class='order-number']//strong`);
    }
    open() {
        return super.open('checkout/#payment');
    }
};

module.exports = new OrderConfirmation(); 