class CommonMethod{
   

    async clickButton(text)

    {
        let element = await $(`//span[text()="${text}"]`);   
        await element.click();
    }
    

}

export default new CommonMethod();