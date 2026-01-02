const{test,expect,request} = require('@playwright/test')
const loginData = {
  userEmail: "meghaiyer@gmail.com",
  userPassword: "Meghaiyer9"
}

test('web api call',async ({page})=>{
  const webapi =  await request.newContext();
  const loginResponse = await webapi.post("https://rahulshettyacademy.com/api/ecom/auth/login", {data: loginData});

  const response1 = await loginResponse.json();
  const tokenValue = response1.token
  console.log(tokenValue);

 await page.addInitScript(token =>{
  window.localStorage.setItem('token',token)},tokenValue);

   await page.goto('https://rahulshettyacademy.com/client/#/dashboard/dash');

})