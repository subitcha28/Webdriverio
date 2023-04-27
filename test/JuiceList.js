
class JuiceList{
   
async clickAppleJuice()    
{
let element = await web.$('//div[text()=" Apple Juice (1000ml) "]');
await element.isDisplayed();
await element.click();
await browser.pause(2000);

}
    

}

export default new JuiceList();