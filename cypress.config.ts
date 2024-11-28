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
    baseUrl: 'https://fitpeo.com/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    defaultCommandTimeout: 20000,
  },
})