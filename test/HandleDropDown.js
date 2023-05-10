import chai from "chai";
class HandleDropDown{
   

   
    async clickRadioButton(text)

    {
        let radiobutton = await $(`//input[@value="${text}"]`);
        await radiobutton.click();
    }

    async clickSuggestionClass(text)
    {
        let inputText = await $('//input[@type="text"]');
        await inputText.click();
        await inputText.setValue("India");
        await $('//li[@class="ui-menu-item"][2]').click();
        await browser.pause(3000);
    }

    async clickDropDown(value)
    {
        let option = await $(`//select//option[text()="${value}"]`);
        await option.click();
        chai.expect(await option.getText()).to.equal(value);
    }

    async clickCheckBox(value)
    {
        let checkbox = await $(`//input[@value="${value}"]`);
        await checkbox.click();
        chai.expect(await checkbox.isDisplayed()).to.equal(true);

    }
    

}

export default new HandleDropDown();