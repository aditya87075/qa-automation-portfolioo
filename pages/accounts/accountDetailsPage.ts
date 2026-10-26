import {Locator, Page, test} from "@playwright/test";
import { BasePage } from "../../Utils/basePage";

export class AccountDetails extends BasePage {
    readonly accountDetailName:Locator;
    readonly accountWebsiteDetail:Locator;
    readonly accountEmailDetail:Locator;
    readonly accountBillingDteails:Locator;


    constructor(page:Page){
        super(page)
        this.accountDetailName=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-detail dynamic-field-name-name dynamic-field-type-name ng-star-inserted']");
        this.accountWebsiteDetail=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-detail dynamic-field-name-website dynamic-field-type-link ng-star-inserted']");
        this.accountEmailDetail=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-detail dynamic-field-name-email_address dynamic-field-type-email']//div[@class='d-flex w-100 flex-grow-1']");
        this.accountBillingDteails=page.locator("//scrm-dynamic-field[@class='dynamic-field dynamic-field-mode-detail dynamic-field-name-billing_address dynamic-field-type-grouped-field ng-star-inserted']")

    }
}