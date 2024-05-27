import{test,expect} from '@playwright/test';
import { loginPage } from '../pages/loginPage';
import { homePage } from '../pages/homePage';
import { cartPage } from '../pages/cartPage';

test('KikuuboOnline',async({page})=>{

    //Login
    const login=new loginPage(page);
    await login.gotoLoginPage();
    await login.login('786263898','CHes1@kikonl');
    await page.waitForTimeout(3000);

    //Home
    const home=new homePage(page);
    await home.addProductToCart("Bavaria Beer 8.6 Black 7.9% 500ml");
    await home.gotoCart();
    await page.waitForTimeout(3000);
    //Cart
    const cart=new cartPage(page);
    await cart.checkProductInCart("Bavaria Beer 8.6 Black 7.9% 500ml");
    await page.waitForTimeout(3000);
})