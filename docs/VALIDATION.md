# Validación — 3 de noviembre de 2026

## Evidencia antes de integrar

Commit integrado: `27864baaae3cc0734fcff3d351c1fb04e5b805cc`.
Validación y publicación de main: https://github.com/miqueas80/MJON-TECH/actions/runs/41626588169
Validación de la rama antes de integrar: https://github.com/miqueas80/MJON-TECH/actions/runs/41626240370

- Build Vite y TypeScript: aprobado.
- 167 enlaces y recursos locales comprobados automáticamente.
- 7 pruebas Node aprobadas.
- 33 pruebas Playwright aprobadas; 1 omitida intencionalmente (menú móvil en el perfil de escritorio).
- 11 páginas en escritorio y móvil sin overflow horizontal, recursos HTTP fallidos ni excepciones JavaScript en las pruebas.
- axe: cero infracciones detectadas con etiquetas WCAG 2 A/AA, 2.1 A/AA y 2.2 AA.
- Navegación, filtros, contacto, teclado, pausa, opt-in de movimiento, reducción de movimiento y ausencia de WebGL comprobados.
- `npm audit`: cero vulnerabilidades conocidas en el árbol utilizado.
- Capturas de inicio, páginas de producto y contacto revisadas visualmente.

## Lighthouse sobre la portada

Runner Ubuntu de GitHub, Chromium headless; perfiles explícitos móvil y escritorio, sin alterar el sitio para el benchmark. Tabla de la ejecución de main, una medición por perfil; resultados de laboratorio, no datos de usuarios.

| Medición | Móvil | Escritorio |
|---|---:|---:|
| Rendimiento | 70 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 1,359 s | 0,411 s |
| LCP | 1,806 s | 0,552 s |
| TBT | 2106 ms | 30,5 ms |
| CLS | 0,00122 | 0,00225 |

El arranque del motor WebGL sigue siendo el principal costo en la CPU móvil emulada. La rotación automática está pausada inicialmente en pantallas pequeñas; el globo permanece 3D e interactivo. No se afirma rendimiento móvil perfecto. Las dos ejecuciones previas sobre el mismo código de aplicación dieron 74 y 80 en móvil, y 100 en escritorio: se conserva la variación observada, sin seleccionar solamente la cifra más favorable.

Muestras de animación de Playwright, con movimiento activado: 26,9 FPS (escritorio, calidad 1,25) y 59,7 FPS (emulación móvil, calidad 1). Son ventanas de unos tres segundos en renderizado de CI; no describen teléfonos físicos ni garantizan FPS constantes. El controlador redujo resolución en la muestra lenta.

Una medición preliminar etiquetada escritorio utilizó por error el perfil móvil. Se corrigió el runner importando la configuración oficial de escritorio y verificando `actualFormFactor`; esa cifra preliminar no se utiliza en la tabla.

## Publicación

La actualización administrativa del modo de Pages respondió HTTP 403. Se conserva la fuente existente main/root. La documentación oficial de actions/deploy-pages permite despliegues desde la rama fuente configurada. CI sincroniza una copia estática ya validada en raíz y publica el artefacto completo, preservando los archivos fuente.

Referencia: https://github.com/actions/deploy-pages#security-considerations

PR integrado: https://github.com/miqueas80/MJON-TECH/pull/1

GitHub Actions: los jobs `verify` y `deploy` finalizaron correctamente en la ejecución 41626588169. Publicación mediante `actions/deploy-pages@v4` confirmada.

Sitio comprobado: https://miqueas80.github.io/MJON-TECH/

Comprobación HTTP del sitio publicado: 31/31 archivos del manifiesto estático respondieron 200 y coincidieron byte por byte con el build validado. Incluye las 11 páginas, rutas antiguas, JavaScript, CSS, imágenes y fuentes.

Comprobación interactiva pública: inicio, navegación al explorador, filtro IoT (4 proyectos → 1), contacto y selección MeteoX. El enlace de WhatsApp se actualizó al número y tema correctos, sin enviar mensajes.

El navegador de revisión pública tiene WebGL deshabilitado. Three.js registró la imposibilidad de crear el contexto; se mostró la alternativa estática y el sitio siguió navegable. La escena y sus controles se comprobaron por separado en Chromium de CI con WebGL disponible. Los errores adicionales de una extensión del navegador no proceden del sitio.

## Límites

La vista previa gestionada de Work no estuvo disponible. Las pruebas de navegador y Lighthouse se ejecutaron en GitHub Actions sobre el build, con capturas descargadas para revisión.

Axe y Lighthouse no certifican conformidad WCAG completa. Emulación móvil no reemplaza un dispositivo físico. Quedan pendientes pruebas manuales con lectores de pantalla y equipos reales. Las funciones y el hardware de los productos enlazados no se validan mediante las pruebas del sitio corporativo.
