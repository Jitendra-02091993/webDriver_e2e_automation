import { When } from "@cucumber/cucumber";

When(/^enter valid username and password$/, async function () {
    await $(`#user-name`).setValue("standard_user")
    await $(`#password`).setValue("secret_sauce")
})