import { defineConfig } from "vite";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";
export default defineConfig({
  base: "/MJON-TECH/",
  build: {
    target: "es2022",
    rollupOptions: {
      input: Object.fromEntries(
        readdirSync(".")
          .filter((x) => x.endsWith(".html"))
          .map((x) => [x.replace(".html", ""), resolve(x)]),
      ),
    },
  },
});
