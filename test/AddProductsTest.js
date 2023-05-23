class AddProductsTest
{

    get CartButton()

    {
        return $('//a[@class="shopping_cart_link"]');
    }

    get checkoutButton()
    {
        return $('//button[@name="checkout"]');
    }

    async addproducts(product)
    {
        let ele = await $(`//div[text()="${product}"]//following::div//button`);
        await ele.click();
    }

    async getPrice(product)
    {
        let price = await $(`//div[text()="${product}"]//parent::a//following::div[3]`);
        return await price.getText();
    }

    async clickCart()
    {
        (await this.CartButton).click();
    }
    async clickCheckout()
    {
        (await this.checkoutButton).click();
    }
}
export default new AddProductsTest();