
class JuiceList{
   
    async clickJuice(text)    
{
    let element = await $(`//div[text()="${text}"]`);
    await element.isDisplayed();
    await element.click();
    await browser.pause(2000);

}
    

}

export default new JuiceList();