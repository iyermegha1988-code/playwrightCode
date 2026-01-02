const{test,expect} = require('@playwright/test');
const Exceljs = require('exceljs')


test.only('read write excel', async({page})=>{

  await page.goto('https://rahulshettyacademy.com/upload-download-test/index.html');
  await page.locator('#downloadButton').click();
const workbook = new Exceljs.Workbook();
await workbook.xlsx.readFile("/Users/MeghaIyer/Downloads/playwright.xlsx")

//read excel
const worksheet = workbook.getWorksheet('Sheet1');
let output = {row:-1,col:-1};
worksheet.eachRow((row,rownumber)=>{
  row.eachCell((cell,cellNumber)=>{
    if(cell.value==="Spring"){
      output= {row:rownumber,col:cellNumber};  
    }
  });
});
//write excel
const updatedValue = worksheet.getCell(output.row,output.col);
updatedValue.value = "megha";
workbook.xlsx.writeFile("/Users/MeghaIyer/Downloads/playwright.xlsx");
})