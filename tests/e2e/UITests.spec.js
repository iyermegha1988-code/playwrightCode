const{test,expect} = require('@playwright/test')


test('first test case',async ({browser, page}) => {

   const browserValue = await browser.newContext();
   const checkpage = await browserValue.newPage();

   await checkpage.goto("https://rahulshettyacademy.com/client/#/auth/login");
   await checkpage.locator("a[class='text-reset']").click();
   await checkpage.getByPlaceholder("first Name").fill("Megha");
   await checkpage.getByPlaceholder("Last Name").fill("Iyer");
   await checkpage.locator("#userEmail").fill("iyermegha@gmail.com");
   await checkpage.locator("#userMobile").fill("5616451211");
   await checkpage.locator("select[formcontrolname='occupation']").selectOption("Engineer");
   await checkpage.getByLabel("Female").click();
   await checkpage.locator("#userPassword").fill("megha");
   await checkpage.locator("#confirmPassword").fill("megha");
   await checkpage.locator("input[type='checkbox']").click();
   await checkpage.locator("#login").click();
   await expect(checkpage.locator('#toast-container')).toBeVisible();
})

test('second test case',async ({browser}) => {

   const browserCon = await browser.newContext();
   const page = await browserCon.newPage();
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
   await page.locator("input[value='radio2']").click();
   await page.locator("#autocomplete").pressSequentially("ind",{delay : 100})
   await page.locator("ul li[class='ui-menu-item']").first().waitFor();
   await page.locator("ul li[class='ui-menu-item']").nth(1).click();
   await page.on("dialog",async (dialog) =>{
     
     // console.log(dialog.message());
      await dialog.dismiss();
   })
   await page.locator("#confirmbtn").click();
   await page.locator("#hide-textbox").click();
   const a = await page.getByPlaceholder("Hide/Show Example").getAttribute("style");
   console.log(a);
   await page.locator("#show-textbox").click();
   const b = await page.getByPlaceholder("Hide/Show Example").getAttribute("style");
   console.log(b);
   expect (b.includes("display: block;"));

   await page.locator("#mousehover").hover();
   await page.locator("div[class='mouse-hover-content'] a").first().waitFor();
   console.log(await page.locator("div[class='mouse-hover-content'] a").allTextContents());
   expect(page.locator("div[class='mouse-hover-content'] a").nth(1)).toContainText('Reload');

   const framepage = page.frameLocator("#courses-iframe");

   await framepage.locator(".register-btn").click();

   const [newpages] = await Promise.all([
   browserCon.waitForEvent('page'),
   page.locator("#opentab").click()
   ]);

  await expect(newpages.locator("div[class='button float-left'] a[class='main-btn']")).toContainText("Access");


})