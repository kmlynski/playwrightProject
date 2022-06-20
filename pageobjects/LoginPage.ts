import { Locator, Page } from "playwright";

export class LoginPage {
    page: Page
    usernameInput: Locator
    passwordInput: Locator
    loginButton: Locator

    constructor(page: Page) {
        this.page = page
        this.usernameInput = page.locator("id=user-name")
        this.passwordInput = page.locator("id=password")
        this.loginButton = page.locator("id=login-button")
    }

    async load() {
        await this.page.goto('https://www.saucedemo.com/')
      
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
       
    }
}
export default LoginPage;