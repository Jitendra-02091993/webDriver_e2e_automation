import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Given(/^User open a Google page$/, async function () {
    console.log("before opening the browser");
    await browser.maximizeWindow();
    await browser.url("https://www.google.com");
    await browser.pause(1000);
    console.log("validated");
})

When(/^User search with (.*)$/, async function (searchItem) {
    console.log(`--> searchItem: ${searchItem}`);
    let ele = await $(`[name = q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})

Then(/^click on the first search result$/, async function () {
    let ele = await $(`(//h3)[1]`)
    ele.click()

})

Then(/^URL should match (.*)$/, async function (browserActualURL) {
    console.log(`browserActualURL----> ${browserActualURL}`)
    let browserExpectedURL = await browser.getUrl();
    console.log(`browserExpectedURL----> ${browserExpectedURL}`)
    //Assertion
    // await expect(browserExpectedURL).toEqual(browserActualURL)
    chai.expect(browserActualURL).to.equal(browserExpectedURL)
})