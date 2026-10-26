import {Locator, Page, test} from "@playwright/test"
import { BasePage } from "../../Utils/basePage"

export class CreateDocument extends BasePage {
    readonly docFileUpload:Locator;
    readonly documentTypeDD:Locator;

    constructor(page:Page){
        super(page)
        this.docFileUpload=page.locator("scrm-file-upload-area input[type='file']");
        this.documentTypeDD=page.locator("//scrm-dropdownenum-edit//select[@class='custom-select custom-select-sm ng-pristine ng-valid ng-touched']")
    }

    async uploadDocument(file:string){
        await this.uploadFile(this.docFileUpload,file)
    }

    async selectDD(){
        await this.click(this.documentTypeDD)
        await this.selectByValue(this.documentTypeDD,'Mail Merge')
    }


}