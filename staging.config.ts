import { defineConfig } from 'cypress'

export default defineConfig({
  waitForAnimations: false,
  animationDistanceThreshold: 50,
  video: false,
  viewportHeight: 900,
  viewportWidth: 1600,
  numTestsKeptInMemory: 100,
  requestTimeout: 45000,
  responseTimeout: 45000,
  pageLoadTimeout: 60000,
  projectId: 'tydede',

  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://fitpeo.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 20000,
  },
  "retries": {
    // Configure retry attempts for `cypress run`
    // Default is 0
    "runMode": 0,
    // Configure retry attempts for `cypress open`
    // Default is 0
    "openMode": 0
  }
})
