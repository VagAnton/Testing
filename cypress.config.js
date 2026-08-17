const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 900, 
  viewportWidth: 1440,
  defaultCommandTimeout: 10000,
  
  e2e: {
    baseUrl: 'https://qauto.forstudy.space/',
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
