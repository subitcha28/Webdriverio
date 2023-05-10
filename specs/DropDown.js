
import HandleDropDown from "../test/HandleDropDown.js";

describe("Handling Dropdown , RadioButton,", async () => {
   
    it("click on radio button", async () => {
    await browser.url("https://rahulshettyacademy.com/AutomationPractice/");
    await HandleDropDown.clickRadioButton("radio2");
    await browser.pause(2000);
    })


    it("click on TextField and select the value", async () => {
        await HandleDropDown.clickSuggestionClass();
        await browser.pause(2000);
        })

        it("click on DropDown and select the value", async () => {
            await HandleDropDown.clickDropDown("Option1");
            await browser.pause(2000);
            })

    

 
 

});
