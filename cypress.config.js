const { defineConfig } = require("cypress");
 
module.exports = defineConfig({
   reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
   reportDir: 'cypress/reports',
   overwrite: false,
   charts: true,
   reportPageTitle: 'Test Report',
   embeddedScreenshots: true,
   inlineAssets: true,
   html:true,
   json:false
 },
 video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
 
