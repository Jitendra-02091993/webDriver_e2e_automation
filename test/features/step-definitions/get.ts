import { Given } from "@cucumber/cucumber";
// import * as chai from "chai";


Given(/^Open the sauceDemo homepage with valid url$/, async function () {
    /* Launching browser*/
    await browser.url("https://www.saucedemo.com/")
    await browser.setTimeout({ implicit: 1200, pageLoad: 1200 })
    // await browser.maximizeWindow()
})