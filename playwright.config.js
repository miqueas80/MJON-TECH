import { defineConfig, devices } from "@playwright/test";
export default defineConfig({
  testDir: "./tests/browser",
  workers: 2,
  use: { baseURL: process.env.TEST_URL || "http://127.0.0.1:4173/MJON-TECH/" },
  webServer: process.env.TEST_URL
    ? undefined
    : {
        command: "npm run preview -- --port 4173",
        url: "http://127.0.0.1:4173/MJON-TECH/",
        reuseExistingServer: !process.env.CI,
      },
  projects: [
    { name: "desktop", use: { ...devices["Desktop Chrome"] } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  reporter: [["list"], ["html", { open: "never" }]],
});
