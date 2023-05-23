import AddProductsTest from "../test/AddProductsTest.js";
import checkoutPage from "../test/checkoutPage.js";
import LoginPage from "../test/LoginPageTest.js";
import chai from "chai";

describe("Login and Add products to cart",async()=>{
 let product1, product2;
    it("verify the credentials and sign in",async()=>{
        await browser.url("https://www.saucedemo.com/");
        await LoginPage.getUsername("standard_user");
        await LoginPage.getPassword("secret_sauce");
        await LoginPage.clickLoginButton();
        await browser.pause(2000);
    })

    it("select list of products and add to cart ",async()=>{
    await AddProductsTest.addproducts("Sauce Labs Backpack");
    product1 = await AddProductsTest.getPrice("Sauce Labs Backpack");
    product1 = Number((product1.replace("$",'')));
    await AddProductsTest.addproducts("Test.allTheThings() T-Shirt (Red)");
    product2 = await AddProductsTest.getPrice("Test.allTheThings() T-Shirt (Red)");
    product2 = Number((product2.replace("$",'')));
    await AddProductsTest.clickCart();
    await browser.pause(2000);
    await AddProductsTest.clickCheckout();
    await browser.pause(2000);
 })

 it("Enter the values in checkout Page ",async()=>{
    await checkoutPage.enterFirstname("test");
    await checkoutPage.enterLastname("name");
    await checkoutPage.enterZipname(99950);
    await browser.pause(2000);
    await checkoutPage.clickContinue();
    await browser.pause(2000);
 })

 it("verify the price in checkout page",async()=>{

    let price = product1+product2;
    
    console.log("price calculation:",price);
    let totalprice = await checkoutPage.totalprice();
    totalprice = Number(totalprice.replace("Item total: $",''));
    chai.expect(totalprice).to.equal(price);
 })


 

    
})