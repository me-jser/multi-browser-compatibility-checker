const webdriver = require('selenium-webdriver');
const ie = require('selenium-webdriver/ie');

let driver = new webdriver.Builder()
    .forBrowser('ie')
    .build();
module.exports = driver