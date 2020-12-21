import { Role } from 'testcafe';
import config from '../take-home/config';
import locators from '../take-home/locators';
import data from '../take-home/data';

export const testBot = Role(config.formLoginURL, async t => {
    await t
        .typeText(locators.LoginPage.usernameField, data.username)
        .typeText(locators.LoginPage.passwordField, data.password)
        .click(locators.LoginPage.loginButton)
        .expect(locators.LoginPage.statusBanner.innerText).eql(data.validLoginText)
});