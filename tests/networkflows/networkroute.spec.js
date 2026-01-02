const{test,expect,request} = require('@playwright/test')


test('network route', async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("meghaiyer@gmail.com");
    await page.locator("#userPassword").fill("Meghaiyer9");
    await page.locator("[value='Login']").click();
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
      route => route.continue({url:'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6'})
    )
  
    await expect(page.locator("div:has-text('No Orders')").last()).toContainText("You have No Orders to show at");
  })