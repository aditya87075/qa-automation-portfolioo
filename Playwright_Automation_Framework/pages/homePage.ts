import { expect, Locator,Page } from "@playwright/test";
import { BasePage } from "../Utils/basePage";

export class HomePage extends BasePage {
    readonly suiteCrmDashboard:Locator;
    readonly accounts:Locator;
    readonly createAccount:Locator;
    readonly viewAccounts:Locator;

    readonly documentsModule:Locator;
    readonly createDocument:Locator;

    constructor(page:Page){
        super(page);
        this.suiteCrmDashboard=page.locator("//ul[@class='nav nav-tabs nav-dashboard']//a[@class='hidden-xs']");
        this.accounts=page.locator("//span[@class='ng-star-inserted' and text()='Accounts']");
        this.createAccount=page.locator("//span[text()='Create Account']");
        this.viewAccounts=page.locator("//span[text()='View Accounts']");

        this.documentsModule=page.locator("//span[text()='Documents']");
        this.createDocument=page.locator("//span[text()='Create Document']");

    }

    async hoverOnAccounts(){
        await this.hover(this.accounts);
    }

    async clickOnCreateAccount(){
        await this.click(this.createAccount);
    }

    async clickViewAccounts(){
        await this.click(this.viewAccounts)
    }

    async hoverOnDocumentModule(){
        await this.hover(this.documentsModule);
    }
    async clickOnCreateDocument(){
        await this.click(this.createDocument);
    }

    
}