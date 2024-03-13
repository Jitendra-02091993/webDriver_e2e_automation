import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

Given(/^User open a herokuapp webPage (.*)$/, async function (url) {
    console.log("before opening the browser");
    await browser.url(url);
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow();
})

When(/^User click on inputs link text$/, async function () {
    let ele = await $(`//a[normalize-space()='Inputs']`)
    ele.click();
    await browser.pause(1000);
})

Then(/^enter some random number in an input box (.*)$/, async function (number) {
    let input = await $(`//h3[normalize-space()='Inputs']`)
    var expectedInputText = await input.getText();
    console.log("expectedInputText--------->" + expectedInputText);
    chai.expect(expectedInputText).to.equal("Inputs");
    console.log('We are on Input box screen');
    let inputTab = await $(`input[type = number]`)
    inputTab.setValue(number)
    await browser.pause(1000)
    // await browser.debug()
})

