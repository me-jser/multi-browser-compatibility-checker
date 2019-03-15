const webdriver = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const path = require('path')

  let options = new firefox.Options().setBinary(path.resolve(__dirname, '../node_modules/.bin/geckodriver')); 

  let driver = new webdriver.Builder()
      .forBrowser('firefox').setFirefoxOptions(options).build();

module.exports = driver
