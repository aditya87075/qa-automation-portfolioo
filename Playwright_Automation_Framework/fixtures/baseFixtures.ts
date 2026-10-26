import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/loginPage"
import { HomePage } from "../pages/homePage"
import { CreateAccount } from "../pages/accounts/createAccount"
import { AccountDetails } from "../pages/accounts/accountDetailsPage"


type PageFixtures={
    loginPage:LoginPage;
    homePage:HomePage;
    createAccount:CreateAccount;
    accountDetails:AccountDetails;
    
}

export const test=base.extend<PageFixtures>({
    loginPage:async({page},use)=>{
        let lp:LoginPage=new LoginPage(page);
        await use(lp)
    },

    homePage:async({page},use)=>{
        let hp:HomePage=new HomePage(page);
        await use(hp)
    },
    createAccount:async({page},use)=>{
        let ca:CreateAccount=new CreateAccount(page);
        await use(ca)
    },
    accountDetails:async({page},use)=>{
        let ad:AccountDetails=new AccountDetails(page);
        await use(ad)
    }

})

