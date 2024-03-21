import { Then } from "@cucumber/cucumber";
import * as chai from "chai";


Then(/^enter valid username (.*) and password (.*)$/, async function (username, password) {
    await $(`#user-name`).setValue(username)
    await $(`#password`).setValue(password)
})


Then(/^click on Login button$/, async function () {
    await $(`#login-button`).click()
    await browser.pause(3000)
    let error = await $(`<h3>`)
    let isDisplayede = await error.isDisplayed()
    // console.log(`element is ${isDisplayede}`)
    // console.log(`error is --> ${await error.getText()}`)

    if (isDisplayede === true) {
        console.log(`error is --> ${await error.getText()}`)
    } else {
        console.log(`this user is logged in successfully`)
        // let header = await $(`//div[normalize-space()="Swag Labs"]`).getText()
        // console.log(`header of homepage is ${header}`)
        // chai.expect(header).to.equal("Swag Labs")
    }
})


Then(/^check user Navigated to homepage$/, async function () {
    let header = await $(`//div[normalize-space()="Swag Labs"]`).getText()
    console.log(`header of homepage is ${header}`)
    chai.expect(header).to.equal("Swag Labs")
})

Then(/^fetch the list of all items$/, async function () {
    let inventoryItmList = await $$(`.inventory_item_name`)
    console.log(`list of all items ${inventoryItmList.length}`)
    for (let i = 0; i < inventoryItmList.length; i++) {
        let itemName = await inventoryItmList.at(i).getText()
        console.log(` ${i} item name is ${itemName}`)
    }
})

Then(/^check price of all items is greater than (.*)$/, async function (price) {
    let actualCheck = parseFloat(price)
    let inventoryPriceList = await $$(`.inventory_item_price`)
    console.log(`length of price of all items ${inventoryPriceList.length}`)
    const priceList = []
    for (let i = 0; i < inventoryPriceList.length; i++) {
        let price = inventoryPriceList[i]
        let val = (await price.getText()).replace(/^\D+/g, '')
        console.log(`values --------> ${parseFloat(val)}`)
        if (parseFloat(val) > actualCheck) {
            console.log(`price of ${i} items is greater than ${actualCheck}`)
        } else {
            console.log(`price of ${i} items is lesser than ${actualCheck}`)
        }
        priceList.push(parseFloat(val))
    }
})