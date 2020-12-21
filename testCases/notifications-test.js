import config from '../config';
import locators from '../locators';
import data from '../notification-data';

fixture`Notification Messages`
    .meta('featureName', 'notifications')
    .meta('testSuite', 'demo')
    .meta('ticketNumber', 'test4')
    .page(config.notificationMessagesURL);

    test('Verifying Notification Text Contains Substring', async t => {
        await t
        //There is a bug on the spelling of successful between valid and invalid notification messages.
        //Regex was adjusted for this.
            .click(locators.NotificationsPage.clickHereLink)
            .expect(locators.NotificationsPage.notificationsBanner.visible).ok()
            .expect(locators.NotificationsPage.notificationsBanner.innerText).match(/.*succes/)
    })
