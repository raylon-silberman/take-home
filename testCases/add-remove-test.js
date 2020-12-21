import config from '../config';
import locators from '../locators';

fixture`Add Remove Elements`
    .meta('featureName', 'addRemove')
    .meta('testSuite', 'demo')
    .meta('ticketNumber', 'test1')
    .page(config.addRemoveURL);

test('Adding and Verifying Delete Button Is Now Visible', async t => {
    await t
        .click(locators.AddRemovePage.addButton)
        .expect(locators.AddRemovePage.deleteButton.visible).ok()
}),

    test('Adding Twice And Verifying Two Elements Are Visible', async t => {
        await t
            .click(locators.AddRemovePage.addButton)
            .click(locators.AddRemovePage.addButton)
            .expect(locators.AddRemovePage.elementsSection.childElementCount).eql(2)
    }),
    test('Adding Twice Removing Once Verifying One Element', async t => {
        await t
            .click(locators.AddRemovePage.addButton)
            .click(locators.AddRemovePage.addButton)
            .click(locators.AddRemovePage.deleteButton)
            .expect(locators.AddRemovePage.elementsSection.childElementCount).eql(1)
    })