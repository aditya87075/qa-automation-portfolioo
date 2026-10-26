// import{expect} from "@playwright/test"
// import { LoginPage } from "../pages/loginPage"
// import commonData from "../testData/commonData.json";
// import { HomePage } from "../pages/homePage";
// import { CreateAccount } from "../pages/accounts/createAccount";
// import testData from "../testData/testData.json"
// import { AccountDetails } from "../pages/accounts/accountDetailsPage";
// import { CreateDocument } from "../pages/documents/createDocument";
// import { test } from "../fixtures/baseFixtures";


// test('ST_001 - Login Suite CRM and Create Account and Validate Details ', async({page,loginPage,homePage,createAccount,accountDetails})=>{
//     await loginPage.openUrl();
//     await expect(loginPage.user_name).toBeVisible();
//     await expect(loginPage.user_name).toBeEnabled();
//     await expect(loginPage.user_name).toBeEmpty();
//     await loginPage.enterUserName(commonData.loginData.userName);
//     await expect(loginPage.user_name).toHaveValue(commonData.loginData.userName)

//     await expect(loginPage.password).toBeVisible();
//     await expect(loginPage.password).toBeEnabled();
//     await expect(loginPage.password).toBeEmpty();
//     await loginPage.enterPassword(commonData.loginData.password);
//     await expect(loginPage.password).toHaveValue(commonData.loginData.password)

//     await expect(loginPage.loginBTN).toBeVisible();
//     await expect(loginPage.loginBTN).toBeEnabled();
//     await expect(loginPage.loginBTN).toHaveText(' Log In ');

//     await loginPage.waitForPageLoad()
//     await loginPage.ClickLogin();
//     await loginPage.waitForPageLoad();

//     await expect(page).toHaveURL("https://suite8demo.suiteondemand.com/#/home");
//     await expect(page).toHaveTitle("SuiteCRM");

//     await homePage.hoverOnAccounts();
//     await homePage.clickOnCreateAccount();

//     await createAccount.enterAccountName(testData.ST_001.ACname);
//     await createAccount.enterWebsite(testData.ST_001.websiteName);
//     await createAccount.enterEmail(testData.ST_001.emailAdress);
//     await createAccount.enterBilling_Street(testData.ST_001.billingStreet);
//     await createAccount.clickOnSaveBtn();

//     await expect(accountDetails.accountDetailName).toContainText(testData.ST_001.ACname);
//     await expect(accountDetails.accountEmailDetail).toContainText(testData.ST_001.emailAdress);
//     await expect(accountDetails.accountWebsiteDetail).toContainText(testData.ST_001.websiteName);
//     await expect(accountDetails.accountBillingDteails).toContainText(testData.ST_001.billingStreet);

// });


// test('ST_002 - Create Document ', async({page})=>{
//     let lp:LoginPage=new LoginPage(page);
//     await lp.openUrl();
//     await expect(lp.user_name).toBeVisible();
//     await expect(lp.user_name).toBeEnabled();
//     await expect(lp.user_name).toBeEmpty();
//     await lp.enterUserName(commonData.loginData.userName);
//     await expect(lp.user_name).toHaveValue(commonData.loginData.userName)

//     await expect(lp.password).toBeVisible();
//     await expect(lp.password).toBeEnabled();
//     await expect(lp.password).toBeEmpty();
//     await lp.enterPassword(commonData.loginData.password);
//     await expect(lp.password).toHaveValue(commonData.loginData.password)

//     await expect(lp.loginBTN).toBeVisible();
//     await expect(lp.loginBTN).toBeEnabled();
//     await expect(lp.loginBTN).toHaveText(' Log In ');

//     await lp.waitForPageLoad()
//     await lp.ClickLogin();
//     await lp.waitForPageLoad()

//     await expect(page).toHaveTitle("SuiteCRM");

//     let hp:HomePage=new HomePage(page);
//     await hp.hoverOnDocumentModule();
//     await hp.clickOnCreateDocument();

//     let createdoc:CreateDocument=new CreateDocument(page);
//     await createdoc.uploadDocument("D:\\Automation_Framework\\testData\\beautiful-rose-water.jpg");

//     await page.waitForTimeout(5000);
//     const documentType = page.locator("//scrm-dropdownenum-edit//select").nth(1);
//     await documentType.selectOption({ label: "NDA" });
    
// })