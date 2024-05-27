exports.loginPage=class loginPage{

    constructor(page){
        this.page=page;
        this.loginLink="'link', { name: 'Sign In' }";
        this.phoneNumberInput='772000111';
        this.passwordInput='#password';
        this.submitButton="'button', { name: 'Submit' }";
    }

    async gotoLoginPage(){
        await this.page.goto('https://kikuuboonline.com/');
    }

    async login(phoneNumber,password){
        await this.page.getByRole(this.loginLink).click();
        await this.page.getByPlaceholder(this.phoneNumberInput).click();
        await this.page.getByPlaceholder(this.phoneNumberInput).fill(phoneNumber);
        await this.page.locator(this.passwordInput).click();
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.getByRole(this.submitButton).click();
    }
}