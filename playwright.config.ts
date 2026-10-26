

import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  workers: 1,
  reporter: 'list',
  
  expect: {
    timeout: 60000,
  },

  use: {
    // baseURL: 'http://localhost:8888/',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless:true,
    //actionTimeout:12_0000,
    //navigationTimeout:60000,
    viewport: {
      height: 720,
      width: 1280
    }
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    }
    
  ]


});