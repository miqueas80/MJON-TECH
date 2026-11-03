import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "",
  "proyectos.html",
  "nexus-x.html",
  "educacion-x.html",
  "meteox.html",
  "mjon-ia.html",
  "empresa.html",
  "innovacion.html",
  "contacto.html",
  "privacidad.html",
  "404.html",
];
for (const route of routes)
  test(`Page ${route || "home"}: navigation, resources, accessibility`, async ({
    page,
  }) => {
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("response", (r) => {
      if (
        r.status() >= 400 &&
        new URL(r.url()).origin === new URL(page.url()).origin
      )
        errors.push(`${r.status()} ${r.url()}`);
    });
    await page.goto(route || "./");
    await expect(page.locator("h1")).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth + 1,
      ),
    ).toBeTruthy();
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(result.violations).toEqual([]);
    expect(errors).toEqual([]);
    await page.screenshot({
      path: `test-results/${test.info().project.name}-${route || "home"}.png`,
      fullPage: true,
    });
  });
test("Explorer filters and product link work", async ({ page }) => {
  await page.goto("proyectos.html");
  await page.getByRole("button", { name: "IoT", exact: true }).click();
  await expect(page.locator(".project-row:visible")).toHaveCount(1);
  await page.locator(".project-row:visible a.project-row-link").click();
  await expect(page).toHaveURL(/meteox.html$/);
});
test("Contact creates a real WhatsApp URL", async ({ page }) => {
  await page.goto("contacto.html");
  await page.locator("#contact-topic").selectOption("NEXUS-X");
  await expect(page.locator("#whatsapp-link")).toHaveAttribute(
    "href",
    /https:\/\/wa.me\/543436959552\?text=.*NEXUS-X/,
  );
});
test("Reduced motion uses static fallback with opt-in", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("./");
  await expect(page.locator("#globe")).toBeHidden();
  await expect(page.locator("#globe-enable")).toBeVisible();
  await expect(page.locator(".globe-fallback")).toBeVisible();
});
test("WebGL failure preserves navigation", async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function (type, ...args) {
      return type.includes("webgl") ? null : original.call(this, type, ...args);
    };
  });
  await page.goto("./");
  await expect(page.locator("#globe-status")).toContainText("Vista estática");
  await page.locator(".hero-copy a.primary").click();
  await expect(page).toHaveURL(/#ecosistema$/);
});
test("Mobile menu keyboard dismissal", async ({ page, isMobile }) => {
  test.skip(!isMobile);
  await page.goto("./");
  await page.locator(".menu-toggle").click();
  await expect(page.locator("#main-nav")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("#main-nav")).toBeHidden();
  await expect(page.locator(".menu-toggle")).toBeFocused();
});

test("3D controls and rendering telemetry", async ({ page, isMobile }) => {
  await page.goto("./");
  await expect(page.locator("#globe")).toBeVisible();
  await expect(page.locator(".globe-stage")).toHaveAttribute(
    "data-renderer",
    "webgl2",
  );
  if (isMobile) {
    await expect(page.locator("#motion-toggle")).toHaveAttribute("aria-pressed", "true");
    await page.locator("#motion-toggle").click();
  }
  await expect(page.locator(".globe-stage")).toHaveAttribute("data-fps", /.+/, {
    timeout: 15000,
  });
  console.log(
    "3D sample",
    await page
      .locator(".globe-stage")
      .evaluate((el) => ({
        fps: el.dataset.fps,
        frameMs: el.dataset.frameMs,
        quality: el.dataset.quality,
      })),
  );
  await page.locator("#motion-toggle").click();
  await expect(page.locator("#motion-toggle")).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.locator("#globe").press("ArrowLeft");
  await page.locator("#globe-reset").click();
});
