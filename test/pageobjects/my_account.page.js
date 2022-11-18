const Page = require('./page');

class myAccountPage extends Page {
  
    get alertMessage () {
        return $(`[class*='page message']`);
    }
   
}

module.exports = new myAccountPage();