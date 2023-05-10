

class CommonMethod{
   

    async clickButton(text)

    {
        let element = await $(`//span[text()="${text}"]`);   
        await element.click();
        console.log("text:",text,"$$$$",await element.getText());
        expect(await element.getText()).toHaveTextContaining(text);
    }
    async clickDismiss(text)

    {
        let element = await $(`//span[text()="${text}"]`);   
        await element.click();
    }
    

}

export default new CommonMethod();