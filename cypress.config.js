module.exports = {
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/reports ",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
