import { Selector } from "testcafe";

export default {
    AddRemovePage: {
        addButton: Selector('.example > button:nth-child(1)'),
        deleteButton: Selector('.added-manually'),
        elementsSection: Selector('#elements')
    },
    DynamicControlsPage: {
        checkBox: Selector('#checkbox > input:nth-child(1)'),
        addButton: Selector('#checkbox-example > button:nth-child(1)'),
        removeButton: Selector('#checkbox-example > button:nth-child(2)'),
        inputTextField: Selector('#input-example'),
        enableDisableButton: Selector('#input-example > button:nth-child(2)'),
        dynamicStatusMessage: Selector('#message')
    },
    LoginPage: {
        usernameField: Selector('#username'),
        passwordField: Selector('#password'),
        loginButton: Selector('.radius'),
        statusBanner: Selector('#flash'),
        logoutButton: Selector('.button')
    },
    NotificationsPage: {
        clickHereLink: Selector('.example > p:nth-child(2) > a:nth-child(5)'),
        notificationsBanner: Selector('#flash')
    },
    PhoneNumberPage: {
        withoutCountrySelectTextField: Selector('section.main-section:nth-child(3) > section:nth-child(2) > form:nth-child(4) > input:nth-child(1)')
        //.value for the attribute to check against.
    }
}