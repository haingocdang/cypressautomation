const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/examples/Test1.js',
    screenshotsFolder: 'cypress/failures/screenshots',
  },
});
