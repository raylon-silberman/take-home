import config from '../config';
import locators from '../locators';

fixture`Dynamic Controls`
    .meta('featureName', 'dynamicControls')
    .meta('testSuite', 'demo')
    .meta('ticketNumber', 'test2')
    .page(config.dynamicControlsURL);

test('Removing Checkbox and Verfiying Removal', async t => {
    await t
        .click(locators.DynamicControlsPage.removeButton)
        await t
        .expect(locators.DynamicControlsPage.checkBox.visible).notOk()
}),

test('Enabling InputField and Verfiying Text Can Be Entered', async t => {
    await t
        .click(locators.DynamicControlsPage.enableDisableButton)
        .expect(locators.DynamicControlsPage.dynamicStatusMessage.innerText).eql(`It's enabled!`)
        .typeText(locators.DynamicControlsPage.inputTextField, "You Must Construct Additional Pylons")
})
