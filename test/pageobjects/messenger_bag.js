
const Page = require('./page');

class messengerBag extends Page {
    get addToCart () {
        return $('#product-addtocart-button');
    }
    open() {
        return super.open('push-it-messenger-bag.html');
    }
};

module.exports = new messengerBag(); 