import { test, expect, Page, Browser } from '@playwright/test';
import { env_variables } from "../utils/flat_file_data";
const test_data = require("../utils/test_data.json")
test.describe('Home_Page', () => {
    const fs = require('fs');
    test.beforeEach(async ({ page }) => {
        //console.log("Launching the Base Url" + env_variables.url)
        await page.goto(env_variables.url);

    });

    test('Product_Search', async ({ page }) => {
        await page.fill('[name="clientCode"]',test_data.clientCode); // entering client code  
        await expect((await page.locator('[name="clientCode"]').inputValue())).toBeTruthy(); //asserting the filed is not null
        await page.fill('[name="username"]', test_data.userName);
        await expect((await page.locator('[name="username"]').inputValue())).toBeTruthy();
        await page.fill('[name="password"]',test_data.password);
        await expect((await page.locator('[name="password"]').inputValue())).toBeTruthy();
        await page.click('[data-testid="login-clockin-button"]');
        await page.click('[data-testid="pos-name"]');
        await page.click('[placeholder="Products"]');
        await page.fill('[placeholder="Products"]', 'fanta');
        await expect((await page.locator('[placeholder="Products"]').inputValue())).toBeTruthy();
        await page.click('[data-testid="search-result-name"]');
        await page.click('[data-testid="product-name-cell"]');
        await page.fill('[data-testid="notes"]','test user search')
        await page.locator('[data-testid="product-order-form"] >> text=Save').click();
        await page.locator('[data-testid="header-user-menu"] >> text=Test User').click();
        await expect(page).toHaveURL('https://epos.erply.com/latest/#');
        await page.locator('a[role="button"]:has-text("Sign out")').click();
    });
    test.afterEach(async ({ page }) => {
      // Usually logout steps will be added here 
    });
    test.afterAll(async ({ page }) => {
    //Usually steps for closing the browser and any active connections like Database 
    });

});