const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriverPath = require('chromedriver').path;

let service = new chrome.ServiceBuilder(chromedriverPath).build();
chrome.setDefaultService(service);

let driver = new webdriver.Builder()
.withCapabilities(webdriver.Capabilities.chrome())
.build();

module.exports = driver