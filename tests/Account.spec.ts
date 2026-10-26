import{expect} from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage";
import { CreateAccount } from "../pages/accounts/createAccount";
import testData from "../testData/testData.json"
import { AccountDetails } from "../pages/accounts/accountDetailsPage";
import { CreateDocument } from "../pages/documents/createDocument";
import { test } from "../fixtures/baseFixtures";

import { env } from "../environment";


test('ST_001 - Login Suite CRM and Create Account and Validate Details ', async({page,loginPage,homePage,createAccount,accountDetails})=>{
    await loginPage.openUrl();
    
    await loginPage.enterUserName();
    await expect(loginPage.user_name).toHaveValue(env.username)

    await expect(loginPage.password).toBeVisible();
    await expect(loginPage.password).toBeEnabled();
    await expect(loginPage.password).toBeEmpty();
    await loginPage.enterPassword();
    await expect(loginPage.password).toHaveValue(env.password)

    await expect(loginPage.loginBTN).toBeVisible();
    await expect(loginPage.loginBTN).toBeEnabled();
    await expect(loginPage.loginBTN).toHaveText(' Log In ');

    await loginPage.waitForPageLoad()
    await loginPage.ClickLogin();
    await loginPage.waitForPageLoad()

    await expect(page).toHaveTitle("SuiteCRM");

    await homePage.hoverOnAccounts();
    await homePage.clickOnCreateAccount();

    await createAccount.enterAccountName(testData.ST_001.ACname);
    await createAccount.enterWebsite(testData.ST_001.websiteName);
    await createAccount.enterEmail(testData.ST_001.emailAdress);
    await createAccount.enterBilling_Street(testData.ST_001.billingStreet);
    await createAccount.clickOnSaveBtn();

    await expect(accountDetails.accountDetailName).toContainText(testData.ST_001.ACname);
    await expect(accountDetails.accountEmailDetail).toContainText(testData.ST_001.emailAdress);
    await expect(accountDetails.accountWebsiteDetail).toContainText(testData.ST_001.websiteName);
    await expect(accountDetails.accountBillingDteails).toContainText(testData.ST_001.billingStreet);

});

