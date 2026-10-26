import {Locator, Page, test} from "@playwright/test";
import { BasePage } from "../../Utils/basePage";

export class CreateAccount extends BasePage{
    readonly accountName:Locator;
    readonly website:Locator;
    readonly email:Locator;
    readonly billing_Street:Locator;
    readonly saveBTN:Locator;
    constructor(page:Page){
        super(page);
        this.accountName=page.locator("//scrm-field[contains(@class,'field field-mode-create field-name-name field-type-name')]");
        this.website=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-website dynamic-field-type-link ng-star-inserted']");
        this.email=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-email_address dynamic-field-type-email']//div[@class='d-flex w-100 flex-grow-1']");
        this.billing_Street=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-edit dynamic-field-name-billing_address_street dynamic-field-type-text']");
        this.saveBTN=page.locator("//scrm-label[@class='ng-star-inserted' and contains(text(),' Save ')]")
    }
    

    async enterAccountName(ACname:string){
        await this.pressSequentially(this.accountName,ACname);
    }
    async enterWebsite(websiteName:string){
        await this.pressSequentially(this.website,websiteName);
    }
    async enterEmail(emailAdress:string){
        await this.pressSequentially(this.email,emailAdress);
    }
    async enterBilling_Street(billingStreet:string){
        await this.pressSequentially(this.billing_Street,billingStreet);
    }
    async clickOnSaveBtn(){
        await this.click(this.saveBTN);
    }
    
}
