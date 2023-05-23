import LoginPage from "../test/LoginPageTest.js";

describe("Login Page", async()=>{

it("verify the credentials and sign in",async()=>{
    await browser.url("https://www.saucedemo.com/");
    await LoginPage.getUsername("standard_user");
    await LoginPage.getPassword("secret_sauce");
    await LoginPage.clickLoginButton();
    await browser.pause(3000);
})

})