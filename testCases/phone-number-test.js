import config from '../config';
import locators from '../locators';
import data from '../data';

fixture`Phone Input`
    .meta('featureName', 'phone-input')
    .meta('testSuite', 'demo')
    .meta('ticketNumber', 'test5')
    .page(config.phoneInputURL);

    test('Verifying Correct Formatting For TextField', async t => {
        await t
            .typeText(locators.PhoneNumberPage.withoutCountrySelectTextField, data.testPhoneNumber)
            .expect(locators.PhoneNumberPage.withoutCountrySelectTextField.value).eql(data.expectedPhoneNumber)
    })