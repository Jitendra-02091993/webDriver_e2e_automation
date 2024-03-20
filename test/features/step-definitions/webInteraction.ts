import { Given, When, Then, And } from "@wdio/cucumber-framework";
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

// //select[@id= 'dropdown']
Then(/^user click on drop down and fetch all options$/, async function () {
    const dropDown = await $$(`select > option`);
    // await dropDown.click();
    const arr = []
    for (let i = 0; i < dropDown.length; i++) {
        let arrayLists = dropDown[i]
        let val = await arrayLists.getText();
        arr.push(val)
        console.log(val)
    }
    console.log(`arrays are ${arr}`);

})

When(/^User clicks on checkbox link text$/, async function () {
    let checkbox = await $(`//a[normalize-space()='Checkboxes']`)
    await checkbox.click()
    console.log("clicked on the checkbox")
})

Then(/^verify user lands on checkbox page$/, async function () {
    let checkboxHeader = await $(`<h3>`)
    const expectedHeader = await checkboxHeader.getText()
    console.log(`expectedHeader is ---> ${expectedHeader}`)
    chai.expect(expectedHeader).to.equal("Checkboxes")
    console.log("Landed on checkboxes webPage")
})

Then(/^User unselect an options if selected$/, async function () {
    let index;
    let i;
    // let check = await $(`input[type = "checkbox"]`)
    console.log("Fetching all the chekbox list element and will check which element is in selected state")
    const checkBoxEle = await $$(`form > input`);
    for (i = 0; i < checkBoxEle.length; i++) {
        if (await checkBoxEle.at(i).isSelected() == true) {
            console.log(`index value is ${i} is selected`)
            checkBoxEle.at(i).click()
            index = i;
        }
    }
})

When(/^User clicks on multiple Windows link text$/, async function () {
    let mulWindows = await $(`//a[normalize-space()='Multiple Windows']`)
    await mulWindows.click()
    let parentWindowHeader = await $(`<h3>`)
    let parentWindowHeaderText = await parentWindowHeader.getText()
    console.log(`------> parentHeader ${parentWindowHeaderText}`)
    chai.expect(parentWindowHeaderText).to.equal("Opening a new window")
    console.log("Navigated to multiple windows homepage")
})

When(/^open another new Window on multiple Windows homepage and assert its title and switch back to main window$/, async function () {
    let currentWinTitle = await browser.getTitle()
    let parentWindowHandle = await browser.getWindowHandle()
    await $(`=Click Here`).click()
    await $(`=Elemental Selenium`).click()
    // chai.expect((await $(`<h3>`)).getText()).to.equal("New Window")
    console.log(`current window title-------> ${currentWinTitle}`)
    let allWindows = await browser.getWindowHandles()
    for (let i = 0; i < allWindows.length; i++) {
        console.log(`windows title of index ${i} is ${allWindows[i]}`)
        await browser.switchToWindow(allWindows[i])
        currentWinTitle = await browser.getTitle()
        if (currentWinTitle === "Home | Elemental Selenium") {
            await browser.switchToWindow(allWindows[i])
            let text = await $(`<h1>`).getText()
            console.log(`-------> ${text}`)
            break;
        }
    }

    await browser.switchToWindow(parentWindowHandle)
    await browser.debug()
})


