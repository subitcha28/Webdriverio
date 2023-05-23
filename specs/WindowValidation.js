import HandleWindow from "/Users/subitcha/Documents/TestFrameworkWebdriverio/test/HandleWindow.js";

describe("Handling Tab,window and alert", async () => {
    it("handling window in js", async () => {
        await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
        await HandleWindow.clickOpenWindow();
        await HandleWindow.clickOpenTab();
        await HandleWindow.clickAlert();
        await HandleWindow.getTableRows();

    })


});
