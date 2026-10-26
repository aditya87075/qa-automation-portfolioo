import { expect, Locator,Page } from "@playwright/test";
import { BasePage } from "../Utils/basePage";
import {env} from "../environment"
export class LoginPage extends BasePage {
    readonly user_name:Locator;
    readonly password:Locator;
    readonly loginBTN:Locator;

constructor(page:Page){
    super(page);
    this.user_name=page.getByPlaceholder('Username');
    this.password=page.getByPlaceholder('Password');
    this.loginBTN=page.getByRole('button',{name:" Log In "});
    
}    
async openUrl(){
    await this.navigateTo(env.baseURL)
}

async enterUserName(){
    await this.clearAndFill(this.user_name,env.username)
}

async enterPassword(){
    await this.clearAndFill(this.password,env.password)
}

async ClickLogin(){
    await this.click(this.loginBTN)
}

}