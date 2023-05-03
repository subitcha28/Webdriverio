import test1 from "../test/test1.js";
import JuiceList from "../test/JuiceList.js";
import CommonMethods from "../test/CommonMethods.js";

describe("Function to summ the values", async () => {
  it("Get the summvalue", async () => {
    let result = test1.testMethod(5, 6);
    console.log("*******", await result);
  });

  it("Switch to OWASP Juice shop URL", async () => {
    await browser.url("https://juice-shop.herokuapp.com/#/");
    console.log("TITLE:", await browser.getTitle());
  });

  it("Click on the dismiss button in the popup", async()=>{
    await CommonMethods.clickButton("Dismiss");
  })

  it("verify juice list names", async()=>{
    await JuiceList.clickJuice(" Apple Juice (1000ml) ");
    await CommonMethods.clickButton(" Close");
    await JuiceList.clickJuice(" Apple Pomace ");
    await CommonMethods.clickButton(" Close");
    await JuiceList.clickJuice(" Banana Juice (1000ml) ");
    await CommonMethods.clickButton(" Close");
     await JuiceList.clickJuice(" Carrot Juice (1000ml) ");
     await CommonMethods.clickButton(" Close");
  })

 

});
