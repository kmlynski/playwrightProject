import { chromium } from 'playwright';
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/LoginPage';

test("Log in test", async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage()
    const loginPage = new LoginPage(page)
    await loginPage.load();
    await loginPage.login('standard_user', 'secret_sauce')

})

