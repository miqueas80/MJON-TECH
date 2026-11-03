# MJON TECH — El futuro se construye

Sitio empresarial estático, accesible y con una experiencia 3D opcional.

**Sitio:** https://miqueas80.github.io/MJON-TECH/

## Desarrollo

Node.js 24, npm y un navegador moderno.

```sh
npm ci
npm run dev
npm run build
npm test
npm run preview
```

`npm run test:browser` ejecuta Playwright y axe en escritorio y móvil. La CI instala Chromium y ejecuta también Lighthouse móvil/escritorio. Los informes y capturas quedan en el artefacto `browser-report` del workflow. `dist/` es el resultado publicable. La raíz conserva una copia compilada de compatibilidad, mantenida por `scripts/sync-pages.mjs`; no editar HTML ni assets generados.

## Arquitectura

- Vite + TypeScript. Generación estática de 11 páginas con metadatos propios; contenido navegable sin JS.
- Three.js/WebGL2 cargado por importación dinámica solo en el inicio. Globo con geometría real, textura de continentes, atmósfera, órbitas, puntos y luz.
- Sin React: este sitio editorial no necesita un runtime de componentes ni router cliente. Plantillas y datos compartidos evitan duplicación manual.
- CSS adaptable y transiciones nativas entre documentos donde existe soporte. Sin dependencias de animación adicionales.
- Fuentes variables locales Sora y Manrope. Sin CDN, trackers, claves ni backend de contacto.
- WhatsApp abre una conversación; el visitante confirma el envío en la aplicación externa.

## Estructura

- `src/projects.mjs`: contenido y fuentes de los productos.
- `scripts/generate.mjs`: plantillas y páginas completas; editar aquí, no en el HTML generado.
- `src/main.ts`: navegación, filtros, contacto y carga opcional 3D.
- `src/globe.ts`, `src/policy.ts`: escena y política de rendimiento.
- `src/styles.css`: sistema visual y adaptación móvil.
- `public/`: recursos locales y URLs antiguas conservadas.
- `tests/`: verificaciones de contenido, lógica, interacción, recursos y accesibilidad.
- `.github/workflows/pages.yml`: validación de ramas y publicación de main después de verificar.
- `docs/AUDIT.md`, `docs/VALIDATION.md`: alcance, evidencia y resultados.

## Accesibilidad y gráficos

Rotación automática pausada inicialmente en pantallas pequeñas para ahorrar CPU y batería, con activación opcional. Pausa visible, teclado (flechas, +/−, Inicio), alternativa estática sin WebGL, opt-in con movimiento reducido o ahorro de datos. Render detenido fuera de pantalla y con pestaña oculta. Resolución inicial acotada por pantalla/memoria y descenso automático ante cuadros lentos. `data-fps`, `data-frame-ms` y `data-quality` exponen muestras locales en `.globe-stage`; no se envían. No equivalen a una garantía de FPS.

## Publicación

GitHub Actions compila `dist/`, ejecuta verificaciones y publica mediante `actions/deploy-pages`. Base `/MJON-TECH/`. La configuración existente de Pages usa main/root. La acción oficial permite desplegar desde esa misma rama; no requiere ampliar permisos administrativos. Después de las pruebas, CI sincroniza una copia compilada en raíz y despliega el artefacto completo. Así la publicación heredada tampoco sirve TypeScript ni rutas sin compilar. La rama de trabajo verifica sin publicar. Los mapas de fuente se incluyen en el artefacto de producción, no en la copia de compatibilidad.

Conservar el historial para volver al commit anterior si una entrega falla. Ningún cambio se realizó a los repositorios de los productos.
