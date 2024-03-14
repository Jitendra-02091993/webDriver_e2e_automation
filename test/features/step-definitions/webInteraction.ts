import { Given, When, Then } from "@wdio/cucumber-framework";
import * as chai from "chai";

// Given(/^User open a herokuapp webPage (.*)$/, async function (url) {
//     console.log("before opening the browser");
//     await browser.url(url);
//     await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
//     await browser.maximizeWindow();
// })

Given(/^User open a herokuapp webPage$/, async function () {
    console.log("before opening the browser");
    await browser.url(" https://the-internet.herokuapp.com/");
    await browser.setTimeout({ implicit: 15000, pageLoad: 10000 })
    await browser.maximizeWindow();
})

When(/^User click on inputs link text$/, async function () {
    let ele = await $(`//a[normalize-space()='Inputs']`)
    ele.click();
    await browser.pause(1000);
})

Then(/^enter some random number in an input box (.*)$/, async function (number) {
    let num = `${number}`.toString()
    let input = await $(`//h3[normalize-space()='Inputs']`)
    var expectedInputText = await input.getText();
    console.log("expectedInputText--------->" + expectedInputText);
    chai.expect(expectedInputText).to.equal("Inputs");
    console.log('We are on Input box screen');
    let inputTab = await $(`input[type = number]`)
    await inputTab.scrollIntoView()
    await browser.pause(3000)
    // await inputTab.click()
    // await browser.setTimeout({ implicit: (12000), pageLoad: (12000) })
    // inputTab.setValue(number)
    // await browser.pause(1000)
    // await browser.debug()
    for (let i = 0; i < num.length; i++) {
        await inputTab.click()
        await browser.keys(num.charAt(i));
        await browser.pause(2000);
        console.log("number at" + num.charAt(i))
    }
})

When(/^User clicks on dropDown link text$/, async function () {
    let dropDown = await $(`//a[@href='/dropdown']`)
    await dropDown.click()
    await browser.pause(2000)
    console.log("clicked on drop down link text")
})

Then(/^verify user lands on dropDown List page$/, async function () {
    let dropDownHeader = await $(`//h3[normalize-space()='Dropdown List']`);
    let expectedDropdownText = await dropDownHeader.getText();
    chai.expect(expectedDropdownText).to.equal("Dropdown List")
    console.log("User lands on dropdown list page")
})

