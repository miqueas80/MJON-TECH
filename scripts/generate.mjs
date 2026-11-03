import { writeFileSync, mkdirSync } from "node:fs";
import { projects } from "../src/projects.mjs";
export const base = "/MJON-TECH/";
const site = "https://miqueas80.github.io" + base;
const wa = "https://wa.me/543436959552";
const arrow = '<span aria-hidden="true">↗</span>';
const logo =
  '<svg viewBox="0 0 48 32" aria-hidden="true"><path d="M2 29 11 3 24 17 40 3 46 29H35l2-12-14 12-10-12-3 12Z" fill="currentColor"/></svg><span>MJON <span class="logo-sub">TECH</span></span>';
const e = (s) =>
  String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll('"', "&quot;");
const link = (p) => `${base}${p}.html`;
function header(active) {
  return `<a class="skip-link" href="#contenido">Saltar al contenido</a><header class="site-header"><div class="header-inner"><a class="brand" href="${base}" aria-label="MJON TECH, inicio">${logo}</a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav"><span>Menú</span><span aria-hidden="true">☰</span></button><nav id="main-nav" aria-label="Navegación principal"><a ${active === "home" ? 'aria-current="page"' : ""} href="${base}">Inicio</a><a ${active === "projects" ? 'aria-current="page"' : ""} href="${link("proyectos")}">Ecosistema</a><a ${active === "company" ? 'aria-current="page"' : ""} href="${link("empresa")}">Empresa</a><a ${active === "research" ? 'aria-current="page"' : ""} href="${link("innovacion")}">Innovación</a><a class="nav-contact" ${active === "contact" ? 'aria-current="page"' : ""} href="${link("contacto")}">Hablemos ${arrow}</a></nav></div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div class="wrap footer-top"><a class="brand" href="${base}" aria-label="MJON TECH, inicio">${logo}</a><p>Tecnología con propósito.<br>Desde Argentina, hacia lo que viene.</p><a href="${wa}" target="_blank" rel="noopener noreferrer">WhatsApp Business ${arrow}</a></div><div class="wrap footer-bottom"><span>© 2026 MJON TECH</span><span>Entre Ríos · Argentina</span><a href="${link("privacidad")}">Privacidad y accesibilidad</a><a href="https://github.com/miqueas80/MJON-TECH" target="_blank" rel="noopener noreferrer">Código del sitio ${arrow}</a></div></footer>`;
}
function cta() {
  return `<section class="cta-section wrap"><span class="eyebrow">DE TU IDEA A LA REALIDAD</span><div class="cta-line"><h2>¿Y si lo<br><span>construimos?</span></h2><a class="circle-link" href="${link("contacto")}" aria-label="Hablemos de tu proyecto">↗</a></div><p>Una necesidad concreta puede ser el comienzo de algo extraordinario.</p></section>`;
}
function shell(file, title, desc, body, active = "") {
  const url = file === "index" ? site : site + file + ".html";
  return `<!doctype html><html lang="es-AR"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#050914"><meta name="description" content="${e(desc)}"><meta name="referrer" content="strict-origin-when-cross-origin"><meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:; connect-src 'self' ws:; object-src 'none'; base-uri 'self'; form-action 'none'; upgrade-insecure-requests"><title>${e(title)} — MJON TECH</title><link rel="canonical" href="${url}"><meta property="og:type" content="website"><meta property="og:locale" content="es_AR"><meta property="og:title" content="${e(title)} — MJON TECH"><meta property="og:description" content="${e(desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${site}assets/globe-fallback.webp"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="${base}favicon.svg" type="image/svg+xml"><script type="module" src="/src/main.ts"></script></head><body>${header(active)}<main id="contenido">${body}</main>${footer()}</body></html>`;
}
function art(p) {
  const common = `viewBox="0 0 600 420" fill="none" role="img" aria-label="Ilustración conceptual de ${p.name}"`;
  let inner = "";
  if (p.id === "nexus-x")
    inner = `<ellipse cx="300" cy="333" rx="205" ry="36"/><path d="M254 75h92m-70 0v102l-76 120q-12 24 18 24h165q30 0 18-24l-77-120V75"/><path d="M237 238h125l33 56H204Z" class="art-fill"/><circle cx="300" cy="204" r="8"/><circle cx="319" cy="254" r="11"/><circle cx="274" cy="272" r="5"/><path d="M109 139h47v47m288-47h47v47M109 274v47h47m288 0h47v-47"/><path d="M130 222h340" stroke-dasharray="6 10"/><circle cx="470" cy="94" r="18"/>`;
  else if (p.id === "educacion-x")
    inner = `<path d="m92 133 208-85 208 85-208 85Z" class="art-fill"/><path d="m92 202 208 85 208-85M92 271l208 85 208-85"/><path d="M300 218v138M145 156v84m310-84v84"/><circle cx="300" cy="133" r="28"/><path d="m287 132 10 11 18-21"/>`;
  else if (p.id === "meteox")
    inner = `<path d="M70 330h460M300 325V110m-70 50h140M255 100h90"/><path d="M155 256h58v68h-58zm232-38h58v106h-58z" class="art-fill"/><path d="M82 276c40-110 75 50 118-51s80 65 121-26 83 38 119-50 56-22 78-43"/><circle cx="300" cy="95" r="30"/><path d="M255 70a65 65 0 0 1 90 0m-110-20a94 94 0 0 1 130 0"/><path d="M70 360h460" stroke-dasharray="3 12"/>`;
  else {
    for (let i = 0; i < 5; i++)
      for (let j = 0; j < 4; j++) {
        const x = 125 + i * 85,
          y = 85 + j * 82;
        if (i < 4)
          for (let k = 0; k < 4; k++)
            inner += `<path d="M${x} ${y}L${x + 85} ${85 + k * 82}" opacity=".22"/>`;
        inner += `<circle cx="${x}" cy="${y}" r="${i === 2 ? 12 : 7}" class="art-fill"/>`;
      }
  }
  return `<div class="project-art ${p.color}"><div class="art-grid"></div><svg ${common}>${inner}</svg><span class="art-caption">${p.tag} <span aria-hidden="true">+</span></span></div>`;
}
function projectRows() {
  return projects
    .map(
      (p) =>
        `<article class="project-row ${p.color}" data-category="${p.category}"><a class="project-row-link" href="${link(p.id)}"><div class="project-row-copy"><span class="eyebrow">${p.category}</span><h3>${p.name}</h3><p>${p.short}</p><span class="text-link">Explorar proyecto ${arrow}</span></div>${art(p)}<span class="row-status">${p.status}</span></a></article>`,
    )
    .join("");
}
const home = `<section class="hero"><div class="hero-lights" aria-hidden="true"></div><div class="wrap hero-layout"><div class="hero-copy"><span class="eyebrow"><i class="status-dot"></i> TECNOLOGÍA INDEPENDIENTE · ARGENTINA</span><h1>El futuro<br>se <span class="iridescent">construye.</span></h1><p>Transformamos ideas en tecnología para<br class="desktop-break"> aprender, investigar y conectar el mundo real.</p><div class="actions"><a class="button primary" href="#ecosistema">Explorar el ecosistema ${arrow}</a><a class="text-link" href="${link("empresa")}">Conocé MJON TECH <span aria-hidden="true">→</span></a></div><div class="hero-note"><span class="small-mark" aria-hidden="true">M</span><span>INGENIERÍA PROPIA.<br>HORIZONTES COMPARTIDOS.</span></div></div><div class="globe-stage" aria-label="Experiencia del globo holográfico"><div class="globe-halo" aria-hidden="true"></div><img class="globe-fallback" src="${base}assets/globe-fallback.webp" alt="Globo holográfico, representación conceptual del mundo conectado" width="600" height="600" fetchpriority="high"><canvas id="globe" aria-label="Globo 3D. Arrastrá o usá las flechas para girar. Teclas más y menos para acercar y alejar." tabindex="0" hidden></canvas><a class="orbital-label orbit-science" href="${link("nexus-x")}"><span class="orbital-icon">⌬</span> Ciencia <span>↗</span></a><a class="orbital-label orbit-learn" href="${link("educacion-x")}"><span class="orbital-icon">◇</span> Educación <span>↗</span></a><a class="orbital-label orbit-ai" href="${link("mjon-ia")}"><span class="orbital-icon">✧</span> Inteligencia <span>↗</span></a><div class="globe-base" aria-hidden="true"><span>M</span></div><div class="globe-tools"><button id="motion-toggle" aria-pressed="false" hidden>Pausar movimiento</button><button id="globe-reset" hidden>Restablecer vista</button><button id="globe-enable" hidden>Activar 3D</button></div><p id="globe-status" class="globe-status" aria-live="polite">Preparando experiencia 3D…</p><noscript><p class="globe-status">Vista estática. Todas las páginas están disponibles sin JavaScript.</p></noscript></div></div><div class="wrap hero-bottom"><span>SOFTWARE <b>/</b> EDUCACIÓN <b>/</b> IA <b>/</b> IOT</span><a href="#ecosistema">DESCUBRÍ LO QUE ESTAMOS CREANDO <span aria-hidden="true">↓</span></a></div></section>
<section id="ecosistema" class="section wrap"><div class="section-heading"><div><span class="eyebrow">UN ECOSISTEMA. MUCHAS POSIBILIDADES.</span><h2>Ideas que toman<br><span class="muted-heading">forma.</span></h2></div><p>Del laboratorio al campo. Del aula a la inteligencia artificial. Cada proyecto empieza con una pregunta y avanza con ingeniería.</p></div><div class="projects-grid">${projectRows()}</div></section>
<section class="company-section"><div class="wrap company-layout"><div class="company-statement"><span class="eyebrow">NACIMOS PARA CONSTRUIR</span><h2>La tecnología<br>tiene sentido<br>cuando <em>sirve.</em></h2><a class="text-link" href="${link("empresa")}">Esta es nuestra forma de pensar ${arrow}</a></div><div class="company-body"><p class="lead">MJON TECH es una iniciativa tecnológica emergente de Entre Ríos, Argentina.</p><p>Desarrollamos herramientas para desafíos cercanos, con la ambición de que puedan llegar más lejos. Ciencia, educación, inteligencia artificial y sistemas conectados forman parte de una misma búsqueda.</p><div class="principle"><span>Diseñar con propósito</span><p>Empezar por lo que una persona necesita resolver.</p></div><div class="principle"><span>Construir con criterio</span><p>Elegir tecnología útil, comprensible y mantenible.</p></div><div class="principle"><span>Mostrar evidencia</span><p>Distinguir una función implementada de una idea en investigación.</p></div></div></div></section>
<section class="section wrap research-preview"><div><span class="eyebrow">DENTRO DEL LABORATORIO</span><h2>No dejar de<br><span class="iridescent">preguntarnos.</span></h2><p>IA local, interfaces naturales y conexiones con el mundo físico. Exploramos posibilidades, documentamos límites y seguimos iterando.</p><a class="button secondary" href="${link("innovacion")}">Explorar investigación ${arrow}</a></div><aside class="nexus-intro"><img src="${base}assets/nexus.webp" width="240" height="330" alt="Nexus, nuestro gato robótico de ojos cian" loading="lazy"><div><span class="eyebrow">CONOCÉ A NEXUS</span><h3>Curiosidad.<br>Hecha identidad.</h3><p>Nuestra mascota representa el espíritu de explorar y aprender. Te acompaña a descubrir el ecosistema MJON TECH.</p></div></aside></section>${cta()}`;
const explorer = `<section class="page-intro wrap"><span class="eyebrow">EL ECOSISTEMA MJON TECH</span><h1>Distintos desafíos.<br><span class="iridescent">La misma curiosidad.</span></h1><p>Ciencia, educación, datos e inteligencia. Explorá cada proyecto, sus capacidades implementadas y el trabajo que sigue.</p></section><section class="wrap explorer-section" aria-label="Explorador de proyectos"><div class="filter-bar" role="group" aria-label="Filtrar proyectos">${["Todos", "Ciencia", "Educación", "IoT", "Inteligencia artificial"].map((c, i) => `<button class="filter" data-filter="${c}" aria-pressed="${i === 0}">${c}</button>`).join("")}</div><p id="filter-status" class="sr-only" aria-live="polite">4 proyectos</p><div class="projects-grid">${projectRows()}</div></section>${cta()}`;
function product(p) {
  return `<section class="wrap product-hero ${p.color}"><a class="back-link" href="${link("proyectos")}">← Ecosistema</a><div class="product-hero-grid"><div><span class="eyebrow">${p.name} / ${p.category}</span><h1>${p.headline.replace("\n", "<br>")}</h1><p>${p.description}</p><span class="status-pill"><i class="status-dot"></i>${p.status}</span><div class="actions">${p.demo ? `<a class="button primary" href="${p.demo}" target="_blank" rel="noopener noreferrer">Abrir ${p.name} ${arrow}</a>` : `<a class="button primary" href="${wa}?text=${encodeURIComponent(`Hola MJON TECH. Quiero conocer ${p.name}.`)}" target="_blank" rel="noopener noreferrer">Consultar por el proyecto ${arrow}</a>`}<a class="text-link" href="#capacidades">Cómo funciona ↓</a></div></div>${art(p)}</div></section><section class="product-purpose wrap"><span class="eyebrow">PENSADO PARA</span><p>${p.audience}</p></section><section class="section wrap" id="capacidades"><div class="section-heading"><h2>Qué podés<br>encontrar.</h2><p>Capacidades documentadas en el código del proyecto. Las condiciones y límites forman parte de cada experiencia.</p></div><div class="capabilities">${p.capabilities.map(([title, desc], i) => `<article><span class="capability-icon" aria-hidden="true">${["⌘", "◈", "⌁"][i]}</span><h3>${title}</h3><p>${desc}</p></article>`).join("")}</div></section><section class="architecture-section"><div class="wrap"><span class="eyebrow">BAJO LA SUPERFICIE</span><h2>Una arquitectura<br>con propósito.</h2><div class="architecture-grid">${p.architecture.map(([title, desc]) => `<div><span class="arch-node" aria-hidden="true"></span><h3>${title}</h3><p>${desc}</p></div>`).join("")}</div></div></section><section class="section wrap state-grid"><div><span class="eyebrow">ESTADO Y ALCANCE</span><h2>Lo que hay.<br>Lo que viene.</h2></div><div><div class="state-block"><h3>Alcance actual</h3><p>${p.limits}</p></div><div class="state-block"><h3>Siguiente etapa</h3><p>${p.next}</p></div><details class="source-details"><summary>Ver fuente y fecha de revisión</summary><p>Revisión documental: 3 de noviembre de 2026. ${p.evidence} Esta revisión no reemplaza una validación física del producto.</p><a class="text-link" href="https://github.com/miqueas80/${p.repo}/blob/${p.ref}/${p.source}" target="_blank" rel="noopener noreferrer">Consultar documentación ${arrow}</a></details></div></section><nav class="wrap product-switcher" aria-label="Más proyectos">${projects
    .filter((x) => x.id !== p.id)
    .map((x) => `<a href="${link(x.id)}">${x.name} ${arrow}</a>`)
    .join("")}</nav>${cta()}`;
}
const company = `<section class="page-intro wrap"><span class="eyebrow">MJON TECH / EMPRESA</span><h1>Desde acá.<br><span class="iridescent">Hacia lo que viene.</span></h1><p>Somos una iniciativa tecnológica independiente nacida en Entre Ríos, Argentina. Construimos software para acercar nuevas posibilidades a la educación, la ciencia y la producción.</p></section><section class="company-manifesto wrap"><span class="giant-mark" aria-hidden="true">M</span><div><h2>Las grandes ideas<br>también empiezan cerca.</h2><p>No hace falta esperar a que la tecnología llegue de otro lugar. Podemos estudiarla, construirla y adaptarla a nuestros propios desafíos.</p><p>MJON TECH reúne proyectos con distintos niveles de madurez. Trabajamos con una visión común: herramientas claras, conocimiento accesible y decisiones respaldadas por evidencia.</p></div></section><section class="section wrap"><div class="section-heading"><h2>De la necesidad<br>a la experiencia.</h2><p>Cada propuesta empieza por entender el problema. El alcance, los tiempos y las condiciones se definen en una conversación.</p></div><div class="capabilities"><article><h3>Software y experiencias web</h3><p>Interfaces, aplicaciones y herramientas digitales centradas en las personas.</p></article><article><h3>Educación y ciencia</h3><p>Entornos para organizar recursos, practicar y explorar conocimiento.</p></article><article><h3>Investigación y sistemas</h3><p>Experimentación con IA local, datos e integración de sensores.</p></article></div></section><section class="wrap values"><h2>Nuestra forma de trabajar</h2><ol><li><strong>Entender</strong><p>Escuchar la necesidad y definir un problema concreto.</p></li><li><strong>Construir</strong><p>Desarrollar con una arquitectura proporcional al desafío.</p></li><li><strong>Comprobar</strong><p>Probar, corregir y dejar claros los límites de la solución.</p></li><li><strong>Evolucionar</strong><p>Mejorar a partir del uso y la evidencia.</p></li></ol></section>${cta()}`;
const research = `<section class="page-intro wrap"><span class="eyebrow">MJON TECH / INVESTIGACIÓN</span><h1>Curiosidad como motor.<br><span class="iridescent">Evidencia como guía.</span></h1><p>Exploramos tecnologías que puedan convertirse en herramientas útiles. Una línea de investigación es una pregunta abierta, no una promesa de rendimiento.</p></section><section class="wrap research-lines">${[
  [
    "IA y ejecución local",
    "mjon-ia",
    "Investigar modelos propios, inferencia en navegador y herramientas con fuentes locales. Separar recuperación de información y generación neuronal es parte del trabajo.",
  ],
  [
    "Interfaces para el mundo real",
    "nexus-x",
    "Combinar voz, códigos y visión para encontrar información en un laboratorio. Priorizar evidencia legible y reconocer cuándo una imagen no alcanza.",
  ],
  [
    "Datos que tienen contexto",
    "meteox",
    "Conectar mediciones con históricos e indicadores de actualidad. Entender qué ocurre cuando una lectura llega tarde o la conectividad se interrumpe.",
  ],
  [
    "Aprendizaje con retroalimentación",
    "educacion-x",
    "Explorar práctica adaptativa mediante reglas y registro local de intentos, con criterios visibles y pendientes de validación educativa.",
  ],
]
  .map(
    ([t, id, d]) =>
      `<article><span class="research-symbol" aria-hidden="true">✳</span><div><h2>${t}</h2><p>${d}</p></div><a class="text-link" href="${link(id)}">Ver proyecto ${arrow}</a></article>`,
  )
  .join(
    "",
  )}</section><section class="wrap research-note"><h2>Probar antes de afirmar.</h2><p>El código implementado, una prueba de software y una validación en campo son evidencias distintas. En cada proyecto explicamos su alcance y qué queda por comprobar.</p></section>${cta()}`;
const contact = `<section class="wrap contact-page"><div><span class="eyebrow">MJON TECH / CONTACTO</span><h1>Tu próxima idea<br><span class="iridescent">empieza acá.</span></h1><p class="lead">Contanos qué querés construir, mejorar o explorar.</p><p>Podés consultar por un proyecto del ecosistema, una experiencia digital o una propuesta de colaboración.</p><div class="contact-place"><span class="status-dot"></span> Entre Ríos, Argentina</div><a class="contact-number" href="${wa}" target="_blank" rel="noopener noreferrer">+54 9 343 695-9552 ${arrow}</a></div><div class="contact-panel"><span class="eyebrow">CONVERSACIÓN DIRECTA</span><h2>Hablemos por<br>WhatsApp Business.</h2><p>Elegí un tema para preparar el inicio de la conversación.</p><label for="contact-topic">Me interesa</label><select id="contact-topic"><option value="conversar sobre una idea">Una idea o proyecto nuevo</option>${projects.map((p) => `<option value="${p.name}">${p.name}</option>`).join("")}<option value="una propuesta de colaboración">Colaborar con MJON TECH</option></select><a id="whatsapp-link" class="button primary" href="${wa}" target="_blank" rel="noopener noreferrer">Abrir WhatsApp ${arrow}</a><p class="contact-help">Se abre WhatsApp. Vos revisás el mensaje y decidís si enviarlo. Este sitio no envía ni guarda tu consulta.</p><button id="copy-number" class="text-link">Copiar número</button><p id="copy-status" class="small" role="status"></p></div></section>`;
const privacy = `<section class="page-intro wrap legal"><span class="eyebrow">TRANSPARENCIA</span><h1>Privacidad<br>y accesibilidad.</h1><h2>Un sitio de presentación</h2><p>MJON TECH no incluye cuentas, analítica publicitaria ni formularios de envío. Las preferencias visuales se mantienen solamente durante la visita. Las tipografías, imágenes y bibliotecas se sirven desde este sitio.</p><h2>Contacto y enlaces externos</h2><p>Al abrir WhatsApp salís de este sitio. El texto del tema elegido se incorpora al enlace, pero el envío requiere tu acción en WhatsApp. GitHub, WhatsApp y las páginas de cada proyecto aplican sus propias condiciones. GitHub Pages puede procesar información técnica necesaria para servir las páginas.</p><h2>Accesibilidad y movimiento</h2><p>Podés navegar con teclado, saltar al contenido y detener el globo. La preferencia de movimiento reducido se respeta; con ahorro de datos o sin WebGL se utiliza una imagen estática. Todo el contenido y los enlaces siguen disponibles sin la escena 3D.</p><h2>Reportar un problema</h2><p>Si encontrás una barrera de acceso, contanos qué página y dispositivo estabas usando para que podamos revisarla.</p><a class="button primary" href="${wa}" target="_blank" rel="noopener noreferrer">Contactar a MJON TECH ${arrow}</a></section>`;
const pages = [
  [
    "index",
    "El futuro se construye",
    "Tecnología independiente desde Argentina. Software, educación, inteligencia artificial e IoT con propósito.",
    home,
    "home",
  ],
  [
    "proyectos",
    "Ecosistema",
    "Explorá NEXUS-X, Educación X, MeteoX y MJON IA: propósito, arquitectura y estado de cada proyecto.",
    explorer,
    "projects",
  ],
  [
    "empresa",
    "Empresa",
    "Conocé la visión y la forma de trabajar de MJON TECH, una iniciativa tecnológica de Entre Ríos, Argentina.",
    company,
    "company",
  ],
  [
    "innovacion",
    "Innovación",
    "Líneas de investigación de MJON TECH: IA local, interfaces naturales, sensores y aprendizaje.",
    research,
    "research",
  ],
  [
    "contacto",
    "Hablemos de tu idea",
    "Contacto empresarial de MJON TECH por WhatsApp Business.",
    contact,
    "contact",
  ],
  [
    "privacidad",
    "Privacidad y accesibilidad",
    "Cómo funciona el sitio, enlaces externos y alternativas accesibles.",
    privacy,
    "",
  ],
  ...projects.map((p) => [p.id, p.name, p.description, product(p), "projects"]),
  [
    "404",
    "Página no encontrada",
    "La página solicitada no está disponible.",
    `<section class="page-intro wrap"><span class="eyebrow">ERROR 404</span><h1>Tomemos<br>otra dirección.</h1><p>No encontramos esa página. Podés volver al inicio o explorar los proyectos.</p><div class="actions"><a class="button primary" href="${base}">Volver al inicio →</a><a class="text-link" href="${link("proyectos")}">Ver ecosistema</a></div></section>`,
    "",
  ],
];
for (const [file, title, desc, body, active] of pages)
  writeFileSync(`${file}.html`, shell(file, title, desc, body, active));
mkdirSync("public", { recursive: true });
writeFileSync(
  "public/robots.txt",
  `User-agent: *\nAllow: /\nSitemap: ${site}sitemap.xml\n`,
);
writeFileSync(
  "public/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages
    .filter((p) => p[0] !== "404")
    .map(
      (p) =>
        `<url><loc>${p[0] === "index" ? site : site + p[0] + ".html"}</loc></url>`,
    )
    .join("")}</urlset>`,
);
writeFileSync("public/.nojekyll", "");
// Keep previously shared nested product URLs functional with real documents.
mkdirSync("public/proyectos", { recursive: true });
for (const p of projects)
  writeFileSync(
    `public/proyectos/${p.id}.html`,
    `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${link(p.id)}"><link rel="canonical" href="${site + p.id}.html"><title>${p.name} — MJON TECH</title></head><body><a href="${link(p.id)}">Continuar a ${p.name}</a></body></html>`,
  );
console.log(`Generated ${pages.length} pages and 4 legacy routes.`);
