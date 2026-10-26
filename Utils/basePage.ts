import {test, expect,Page,Locator} from "@playwright/test"


export class BasePage {

    constructor(private page: Page) {}

    // =========================
    // Navigation
    // =========================

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('domcontentloaded')
    }

    async clearAndFill(locator: Locator, text: string): Promise<void> {
    await locator.clear();
    await locator.fill(text);
    }
    
    async goBack(): Promise<void> {
        await this.page.goBack();
    }


    async goForward(): Promise<void> {
        await this.page.goForward();
    }

    async refreshPage(): Promise<void> {
        await this.page.reload();
    }


    /**
     * Upload a single file
     */
    async uploadFile(locator: Locator, filePath: string): Promise<void> {
        await locator.setInputFiles(filePath);
    }
    async uploadMultipleFiles(locator: Locator,filePaths: string[]): Promise<void> {
        await locator.setInputFiles(filePaths);
    }

    // =========================
    // Text / Input
    // =========================

    async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async clear(locator: Locator): Promise<void> {
        await locator.clear();
    }

    async pressSequentially(locator: Locator, text: string): Promise<void> {
        await locator.click()
        await locator.pressSequentially(text);
    }

    // async pressSequentially(
    //     locator: Locator,
    //     text: string,
    //     delay: number = 50
    // ): Promise<void> {
    //     await locator.pressSequentially(text, { delay });
    // }

    async press(
        locator: Locator,
        key: string
    ): Promise<void> {
        await locator.press(key);
    }

    // =========================
    // Click Actions
    // =========================

    async click(locator: Locator): Promise<void> {
        await locator.click();
    }

    async doubleClick(locator: Locator): Promise<void> {
        await locator.dblclick();
    }

    async rightClick(locator: Locator): Promise<void> {
        await locator.click({ button: "right" });
    }

    async clickNth(
        locator: Locator,
        index: number
    ): Promise<void> {
        await locator.nth(index).click();
    }

    // =========================
    // Dropdown
    // =========================

    async selectByValue(
        locator: Locator,
        value: string
    ): Promise<void> {
        await locator.selectOption(value);
    }

    async selectByLabel(
        locator: Locator,
        label: string
    ): Promise<void> {
        await locator.selectOption({ label });
    }

    // =========================
    // Checkbox / Radio
    // =========================

    async check(locator: Locator): Promise<void> {
        await locator.check();
    }

    async uncheck(locator: Locator): Promise<void> {
        await locator.uncheck();
    }

    async isChecked(locator: Locator): Promise<boolean> {
        return await locator.isChecked();
    }

    // =========================
    // Mouse Actions
    // =========================

    async hover(locator: Locator): Promise<void> {
        await locator.hover();
    }

    async dragAndDrop(
        source: Locator,
        target: Locator
    ): Promise<void> {
        await source.dragTo(target);
    }

    // =========================
    // Waits
    // =========================

    async waitForVisible(locator: Locator): Promise<void> {
        await locator.waitFor({
            state: "visible"
        });
    }

    async waitForHidden(locator: Locator): Promise<void> {
        await locator.waitFor({
            state: "hidden"
        });
    }

    async waitForAttached(locator: Locator): Promise<void> {
        await locator.waitFor({
            state: "attached"
        });
    }

    // =========================
    // Get Data
    // =========================

    async getText(locator: Locator): Promise<string> {
        return await locator.innerText();
    }

    async getTextContent(locator: Locator): Promise<string | null> {
        return await locator.textContent();
    }

    async getAttribute(
        locator: Locator,
        attribute: string
    ): Promise<string | null> {
        return await locator.getAttribute(attribute);
    }

    async getInputValue(locator: Locator): Promise<string> {
        return await locator.inputValue();
    }

    // =========================
    // Element Status
    // =========================

    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    async isDisabled(locator: Locator): Promise<boolean> {
        return await locator.isDisabled();
    }

    async isEditable(locator: Locator): Promise<boolean> {
        return await locator.isEditable();
    }

    // =========================
    // Count
    // =========================

    async getCount(locator: Locator): Promise<number> {
        return await locator.count();
    }

    // =========================
    // Assertions
    // =========================

    async verifyText(
        locator: Locator,
        expectedText: string
    ): Promise<void> {
        await expect(locator).toHaveText(expectedText);
    }

    async verifyContainsText(
        locator: Locator,
        expectedText: string
    ): Promise<void> {
        await expect(locator).toContainText(expectedText);
    }

    async verifyVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async verifyHidden(locator: Locator): Promise<void> {
        await expect(locator).toBeHidden();
    }

    async verifyEnabled(locator: Locator): Promise<void> {
        await expect(locator).toBeEnabled();
    }

    async verifyDisabled(locator: Locator): Promise<void> {
        await expect(locator).toBeDisabled();
    }

    async verifyValue(
        locator: Locator,
        expectedValue: string
    ): Promise<void> {
        await expect(locator).toHaveValue(expectedValue);
    }

    // =========================
    // Screenshot
    // =========================

    async screenshot(name: string): Promise<void> {
        await this.page.screenshot({
            path: `screenshots/${name}.png`,
            fullPage: true
        });
    }

    // =========================
    // Browser
    // =========================

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async getCurrentUrl(): Promise<string> {
        return this.page.url();
    }

    async acceptAlert(): Promise<void> {
        this.page.once("dialog", async dialog => {
            await dialog.accept();
        });
    }

    async dismissAlert(): Promise<void> {
        this.page.once("dialog", async dialog => {
            await dialog.dismiss();
        });
    }
}