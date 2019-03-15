const {
    until
} = require('selenium-webdriver');
const fs = require('fs')
const path = require('path')
const {
      fireFox
} = require('../browsers');

// (async function takeChromeScreenShots() {
//     try {
//         await chrome.get('https://www.jdcloud.com/cn/');
//         await chrome.wait(until.titleIs('京东云-预见无限可能'), 3000);
//         let screenShots = await chrome.takeScreenshot()
//         fs.writeFile(`${path.resolve(__dirname, '../screenShots/chrome/index.png')}`, screenShots, 'base64', err => {
//             if (err) throw err
//             console.log('截图已保存');
//         })
//     } finally {
//         await chrome.quit();
//     }
// })();

(async function takeChromeScreenShots() {
    try {
        await fireFox.get('https://www.jdcloud.com/cn/');
        await fireFox.wait(until.titleIs('京东云-预见无限可能'), 3000);
        let screenShots = await fireFox.takeScreenshot()
        fs.writeFile(`${path.resolve(__dirname, '../screenShots/firefox/index.png')}`, screenShots, 'base64', err => {
            if (err) throw err
            console.log('截图已保存');
        })
    } finally {
        await fireFox.quit();
    }
})();