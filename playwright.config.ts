import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]],
  timeout: 60000,
  use: {
    channel: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'playwrightProject',
      testDir: './tests',
      use: {
        headless: false
      },
    },
  ],
};

export default config;