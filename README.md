## Take Home Assignment - Automation Engineer

# Features of the Framework
- *Dynamic Selectors*: locators.js will have all the Selectors for test cases added. If an ID changes, it is easy for the engineer to update.
- *HTML Reporting*: HTML reports will be generated after all test runs.
- *Package.json support*: One run command.
- *Fixture Meta Tag Running*: Coordinated running commands based off Fixture meta tags. Able to run off of `featureName`, `testSuite` or `ticketNumber`.

# Running the Framework Demo
- `npm run test`

# Next Steps:
- Changing page objects to env variables for Docker support and for changeable envs for testing.
- Adding accessibility testing with axe-core package to check WCAG standards.