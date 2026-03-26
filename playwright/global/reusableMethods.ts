import { Locator, expect, Page, PlaywrightTestConfig } from '@playwright/test';

export class reusableMethods {

    readonly page: Page
    constructor(page: Page) {
        this.page = page
    }

    async clickElement(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
        await locator.waitFor({state:"visible"});
        await locator.click({force: true});
        console.log(`✅  Clicked the ${locator.toString()}`);
    }
}