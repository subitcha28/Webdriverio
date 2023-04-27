import test1 from "../test/test1.js";
import JuiceList from "../test/JuiceList.js";

describe("Function to summ the values", async () => {
  it("Get the summvalue", async () => {
    let result = test1.testMethod(5, 6);
    console.log("*******", await result);
  });

  it("Switch to OWASP Juice shop URL", async () => {
    await browser.url("https://juice-shop.herokuapp.com/#/");
    console.log("TITLE:", await browser.getTitle());
  });

  it("verify apple juice is present or not");
  {
    await JuiceList.clickAppleJuice();
  }
});
