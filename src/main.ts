import "./styles.css";
import { whatsapp } from "./policy";
const menu = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.querySelector<HTMLElement>("#main-nav");
function closeMenu(returnFocus = false) {
  nav?.classList.remove("is-open");
  menu?.setAttribute("aria-expanded", "false");
  if (returnFocus) menu?.focus();
}
menu?.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("is-open", open);
});
nav?.addEventListener("click", (e) => {
  if ((e.target as HTMLElement).closest("a")) closeMenu();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menu?.getAttribute("aria-expanded") === "true")
    closeMenu(true);
});
document.addEventListener("click", (e) => {
  if (!(e.target as HTMLElement).closest(".site-header")) closeMenu();
});
matchMedia("(min-width:761px)").addEventListener("change", () => closeMenu());
const filterButtons =
  document.querySelectorAll<HTMLButtonElement>("[data-filter]");
filterButtons.forEach((button) =>
  button.addEventListener("click", () => {
    filterButtons.forEach((b) =>
      b.setAttribute("aria-pressed", String(b === button)),
    );
    let count = 0;
    document.querySelectorAll<HTMLElement>("[data-category]").forEach((row) => {
      row.hidden =
        button.dataset.filter !== "Todos" &&
        row.dataset.category !== button.dataset.filter;
      if (!row.hidden) count++;
    });
    const status = document.querySelector("#filter-status");
    if (status)
      status.textContent = `${count} ${count === 1 ? "proyecto" : "proyectos"}`;
  }),
);
const topic = document.querySelector<HTMLSelectElement>("#contact-topic");
const contactLink = document.querySelector<HTMLAnchorElement>("#whatsapp-link");
function updateContact() {
  if (contactLink && topic) contactLink.href = whatsapp(topic.value);
}
topic?.addEventListener("change", updateContact);
updateContact();
document.querySelector("#copy-number")?.addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    await navigator.clipboard.writeText("+54 9 343 695-9552");
    if (status) status.textContent = "Número copiado.";
  } catch {
    if (status)
      status.textContent = "Podés copiarlo manualmente: +54 9 343 695-9552.";
  }
});
const canvas = document.querySelector<HTMLCanvasElement>("#globe");
if (canvas) {
  const status = document.querySelector<HTMLElement>("#globe-status")!;
  const enable = document.querySelector<HTMLButtonElement>("#globe-enable")!;
  const connection = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  let started = false;
  async function activate() {
    if (started) return;
    started = true;
    enable.hidden = true;
    status.textContent = "Preparando experiencia 3D…";
    try {
      const { mountGlobe } = await import("./globe");
      await mountGlobe(canvas!);
    } catch {
      canvas!.hidden = true;
      canvas!.closest(".globe-stage")?.classList.remove("is-ready");
      status.textContent = "Vista estática · El contenido sigue disponible";
      document.querySelector<HTMLButtonElement>("#motion-toggle")!.hidden =
        true;
      document.querySelector<HTMLButtonElement>("#globe-reset")!.hidden = true;
    }
  }
  if (
    connection?.saveData ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    status.textContent = "Vista estática · Activá el 3D si querés explorar";
    enable.hidden = false;
    enable.addEventListener("click", activate);
  } else {
    // Load the optional renderer after the initial content has painted.
    requestAnimationFrame(() => requestAnimationFrame(() => void activate()));
  }
}
