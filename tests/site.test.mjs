import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { projects } from "../src/projects.mjs";
test("Every product has unique route, evidence, limits and architecture", () => {
  assert.equal(new Set(projects.map((p) => p.id)).size, 4);
  for (const p of projects) {
    assert.ok(p.limits.length > 80);
    assert.ok(p.source);
    assert.equal(p.architecture.length, 4);
    assert.equal(p.capabilities.length, 3);
  }
});
test("Contact uses the authorized number and no form endpoint", () => {
  const text = readFileSync("contacto.html", "utf8");
  assert.ok(text.includes("https://wa.me/543436959552"));
  assert.ok(!text.includes("<form"));
  assert.ok(text.includes("no envía ni guarda"));
});
test("Source distinguishes experimental and confirmed capabilities", () => {
  const meteo = projects.find((p) => p.id === "meteox");
  assert.match(meteo.limits, /no acciona bombas/);
  const education = projects.find((p) => p.id === "educacion-x");
  assert.match(education.capabilities[2][1], /No es un LLM/);
  assert.match(projects[3].limits, /no demuestra aprendizaje neuronal/);
});
test("Generated routes include accessible headings and language", () => {
  for (const file of [
    "index",
    "proyectos",
    "empresa",
    "innovacion",
    "contacto",
    ...projects.map((p) => p.id),
  ]) {
    const text = readFileSync(file + ".html", "utf8");
    assert.equal((text.match(/<h1>/g) || []).length, 1);
    assert.ok(text.includes('lang="es-AR"'));
    assert.ok(text.includes("Saltar al contenido"));
  }
});
import { initialQuality, adaptiveQuality, whatsapp } from "../src/policy.ts";
test("Low-resource devices receive bounded render resolution", () => {
  assert.equal(initialQuality(390, 8), 1);
  assert.equal(initialQuality(1440, 4), 1);
  assert.equal(initialQuality(1440, 8, true), 1);
  assert.equal(initialQuality(1440, 8), 1.5);
});
test("Slow frames lower resolution without undershooting the minimum", () => {
  assert.equal(adaptiveQuality(1.5, 35), 1.25);
  assert.equal(adaptiveQuality(0.75, 100), 0.75);
  assert.equal(adaptiveQuality(1, 16), 1);
});
test("Contact encodes a query without allowing destination injection", () => {
  const url = new URL(whatsapp("NEXUS & ?next=https://example.org"));
  assert.equal(url.hostname, "wa.me");
  assert.equal(url.pathname, "/543436959552");
  assert.equal([...url.searchParams.keys()].length, 1);
});
