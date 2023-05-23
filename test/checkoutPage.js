
class checkoutPage{

get fieldalues(){
    return{
    firstname:$('//input[@name="firstName"]'),
    lastname:$('//input[@name="lastName"]'),
    zip:$('//input[@name="postalCode"]'),
    continue:$('//input[@name="continue"]')
    
}
}
    
    
    async enterFirstname(text) {
        await (await this.fieldalues.firstname).click();
    (await this.fieldalues.firstname).setValue(text);

    }
    async enterLastname(text) {
        await (await this.fieldalues.lastname).click();
        (await this.fieldalues.lastname).setValue(text);

    }
    async enterZipname(text) {
        (await this.fieldalues.zip).click();
        (await this.fieldalues.zip).setValue(text);//99950
   }

   async clickContinue()
   {
    (await this.fieldalues.continue).click();
   }

   async totalprice()
   {
    let ele = await $(`//div[@class="summary_subtotal_label"]`);
    return await ele.getText();
   }
}
export default  new checkoutPage();