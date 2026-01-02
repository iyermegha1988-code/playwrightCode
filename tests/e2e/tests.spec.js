const{test,expect} = require('@playwright/test')

test('orders successful submission',async ({browser, page}) =>{

   const contextValue = await browser.newContext();
   const page1 = await contextValue.newPage();
   await page1.goto("https://rahulshettyacademy.com/loginpagePractise/#");
   await page1.locator('#username').fill("rahulshettyacademy");
   await page1.locator('#password').fill("learning");
  // await page1.on('dialog',async (dialog) =>{
      
  // })
   await page1.locator('.radiotextsty', { hasText: 'User' }).click();
   await page1.locator("#okayBtn").click();
   await page1.locator('#signInBtn').click();
   await page1.locator("div[class='card-body'] a").first().waitFor();
   const phoneContent = await page1.locator("div[class='card-body'] a").allTextContents();
   for(let i=0;i< phoneContent.length ;i++   ){
     if(phoneContent[i].trim()==='Nokia Edge'){
         await page1.locator("div[class='card h-100'] div[class='card-footer'] button").nth(i).click();
         break;
     }
   }
  await page1.locator('a.nav-link.btn.btn-primary').click();
  await expect(page1.locator("h4 a")).toContainText("Nokia");
   await page1.locator("button[class='btn btn-success']").click();
   await page1.locator('#country').pressSequentially("ind",{delay:100})
   await page1.locator('a:text("India")').click();

await page1.locator("input[value='Purchase']").click();
await expect(page1.locator("div[class='alert alert-success alert-dismissible']")).toBeVisible();


})