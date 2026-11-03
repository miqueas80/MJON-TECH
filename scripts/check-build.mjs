import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { resolve } from "node:path";
const root = resolve("dist"),
  base = "/MJON-TECH/";
let checked = 0;
for (const file of readdirSync(root).filter((f) => f.endsWith(".html"))) {
  const html = readFileSync(`${root}/${file}`, "utf8");
  if (!html.includes("<h1>") || !html.includes('rel="canonical"'))
    throw Error(`Missing content/meta: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (url.startsWith("#")) {
      if (!html.includes(`id="${url.slice(1)}"`))
        throw Error(`Missing anchor ${url} in ${file}`);
      continue;
    }
    if (!url.startsWith(base)) continue;
    const path =
      url.split("#")[0].split("?")[0].slice(base.length) || "index.html";
    if (!existsSync(`${root}/${path}`))
      throw Error(`Missing asset/link: ${file} → ${url}`);
    checked++;
  }
}
const assets = readdirSync(`${root}/assets`);
const initial = assets
  .filter((f) => /main.*\.js$/.test(f))
  .reduce((n, f) => n + statSync(`${root}/assets/${f}`).size, 0);
if (initial > 40000) throw Error("Initial JS budget exceeded");
console.log(
  `Build verified: ${checked} local links/resources; initial JS ${initial} bytes.`,
);
