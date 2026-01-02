// @ts-check
import { defineConfig, devices, firefox } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = {
  testDir: './tests',
  timeout : 40*1000,
  expect :{
    timeout : 40*1000
  },
 reporter: [['html', { open: 'never' }]],
  use: {
  browserName : 'firefox',
  headless: false,
  screenshot:'yes',
  traces:'retain-on-failure'
  }
  
};
module.exports=config;

