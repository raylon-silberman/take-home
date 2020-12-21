import config from '../config';
import data from '../data';
import locators from '../locators';
import {testBot} from '../roles';

fixture`Form Authentications`
    .meta('featureName', 'auth')
    .meta('testSuite', 'demo')
    .meta('ticketNumber', 'test3')
    .page(config.formLoginURL);

//Given how http://the-internet.herokuapp.com/login is built currently,
//The system under test will auto log you out on page reload causing issues
//with the useRole command from TestCafe. I worked around it for now :)
//Would rather not duplicate code, but given the current AUT design, it was unavoidable.

    test('Verifying Valid Login', async t => {
        await t
        .useRole(testBot)
    }),
    test('Verifying Invalid Login', async t => {
        await t
        .typeText(locators.LoginPage.usernameField, 'username')
        .typeText(locators.LoginPage.passwordField, 'hunter2')
        .click(locators.LoginPage.loginButton)
        .expect(locators.LoginPage.statusBanner.innerText).eql(data.invalidLoginText)
    })
