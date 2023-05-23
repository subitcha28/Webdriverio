class LoginPageTest
{
    get username()
    {
        return $('//input[@id="user-name"]');
    }
    get password()
    {
        return $('//input[@id="password"]');
    }

    get LoginButton()
    {
        return $('//input[@id="login-button"]');
    }

    async getUsername(text)
    {
    await this.username.click();
    await this.username.setValue(text);
    }

    async getPassword(text)
    {
    await this.password.click();
    await this.password.setValue(text);
    }

    async clickLoginButton()
    {
        await this.LoginButton.click();
    }

}

export default new LoginPageTest();