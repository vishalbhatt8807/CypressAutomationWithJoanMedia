const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //For Cypress Dashboard Provide Projct Code.
  projectId: "o7f74u",
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure:true,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'CypressAutomationWithJoanMedia',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly:true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
    chromeWebSecurity:false,
    watchForFileChanges:false,
    video:true,
    baseUrl:'https://www.saucedemo.com',
    supportFile: false
  },
});
