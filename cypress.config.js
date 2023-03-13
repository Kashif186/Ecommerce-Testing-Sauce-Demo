const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  url: {
    "url": "https://www.saucedemo.com/"
  }, 

  env: {
    "applitoolsApiKey": "SWNqhp6104CsVaaojjoR5Zhj54pu6zTLv3SsxqxSR1C18110"
  }, 
});


require('@applitools/eyes-cypress')(module);
