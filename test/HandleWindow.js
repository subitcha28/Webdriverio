

class HandleWindow{
   

    get openWindow()
    {
        return $('//button[text()="Open Window"]');
    }
    get openTab()
    {
        return $('//a[text()="Open Tab"]');
    }

    async clickOpenWindow()

    {
    
        (await this.openWindow).click();
        const handle = await browser.getWindowHandles();
        await browser.switchToWindow(handle[0]);
        await browser.pause(3000);
    }


    async clickOpenTab()

    {
        
        (await this.openTab).click();
        await browser.pause(2000);
        await browser.switchWindow("https://rahulshettyacademy.com/AutomationPractice/");    

    }

    async clickAlert()
    {
        (await $('//input[@id="name"]')).setValue("Hello");
        await $('//input[@id="confirmbtn"]').doubleClick();
        await browser.pause(4000);
        // await browser.acceptAlert();
        console.log("////",await browser.isAlertOpen());
        await browser.pause(2000);


    }

    async getTableRows()
    {
        let tableColumn = await $$('//div[@class="tableFixHead"]//tr//td[1]');

        for(var i=0; i<tableColumn.length; i++)
        {
            console.log("Table Data for the first column:",await tableColumn[i].getText());
        }
        
       
       
    }


    

}
export default new HandleWindow();
