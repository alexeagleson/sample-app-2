// playwright.config.ts
import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  //   forbidOnly: !!process.env.CI,
  //   retries: process.env.CI ? 2 : 0,
  //   use: {
  //     trace: 'on-first-retry',
  //   },
  //   projects: [
  //     {
  //       name: 'chromium',
  //       use: { ...devices['Desktop Chrome'] },
  //     },
  //     {
  //       name: 'firefox',
  //       use: { ...devices['Desktop Firefox'] },
  //     },
  //     {
  //       name: 'webkit',
  //       use: { ...devices['Desktop Safari'] },
  //     },
  //   ],
  testMatch: /.*(spec)\.ts/,
  retries: 1,
  use: {
    // trace: 'on-first-retry',
    // trace: 'retain-on-failure',
    trace: "on",
  },
};
export default config;
