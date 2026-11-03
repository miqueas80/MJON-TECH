import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
const server = spawn("npm", ["run", "preview", "--", "--port", "4174"], {
  stdio: "ignore",
});
const url = "http://127.0.0.1:4174/MJON-TECH/";
let chrome;
try {
  for (let i = 0; i < 40; i++) {
    try {
      if ((await fetch(url)).ok) break;
    } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  chrome = await launch({
    chromeFlags: ["--headless", "--no-sandbox", "--disable-dev-shm-usage"],
  });
  mkdirSync("reports", { recursive: true });
  for (const preset of ["mobile", "desktop"]) {
    const flags = {
      port: chrome.port,
      output: "json",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
      ...(preset === "desktop" ? { preset: "desktop" } : {}),
    };
    const result = await lighthouse(url, flags);
    if (!result?.lhr || result.lhr.runtimeError)
      throw Error(JSON.stringify(result?.lhr.runtimeError));
    writeFileSync(
      `reports/lighthouse-${preset}.json`,
      JSON.stringify(result.lhr, null, 2),
    );
    const summary = {
      preset,
      categories: Object.fromEntries(
        Object.entries(result.lhr.categories).map(([k, v]) => [k, v.score]),
      ),
      metrics: Object.fromEntries(
        [
          "first-contentful-paint",
          "largest-contentful-paint",
          "total-blocking-time",
          "cumulative-layout-shift",
          "speed-index",
        ].map((k) => [k, result.lhr.audits[k].numericValue]),
      ),
    };
    console.log("LIGHTHOUSE_RESULT " + JSON.stringify(summary));
    writeFileSync(
      `reports/summary-${preset}.json`,
      JSON.stringify(summary, null, 2),
    );
  }
} finally {
  await chrome?.kill();
  server.kill();
}
