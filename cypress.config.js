const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "2cgd96",
    // ...rest of the Cypress project config
  
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    baseUrl:'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
