import { test, Page } from "playwright/test";
import { reusableMethods } from "../global/reusableMethods";

test.describe.serial(`TC01`, () => {
    let page: Page
    let rm: reusableMethods

    test.beforeAll(async({ browser }) => {
        
    })
});