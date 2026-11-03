# Validación — 3 de noviembre de 2026

## Evidencia antes de integrar

Código de aplicación probado: `b7aa955101dd35f45275c4587a27e31be26c0e1c`.
Ejecución: https://github.com/miqueas80/MJON-TECH/actions/runs/41624758683

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

Runner Ubuntu de GitHub, Chromium headless; perfiles explícitos móvil y escritorio, sin alterar el sitio para el benchmark. Una ejecución por perfil; resultados de laboratorio, no datos de usuarios.

| Medición | Móvil | Escritorio |
|---|---:|---:|
| Rendimiento | 74 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 100 | 100 |
| FCP | 1,358 s | 0,412 s |
| LCP | 1,805 s | 0,574 s |
| TBT | 1259 ms | 28,5 ms |
| CLS | 0,00122 | 0,00225 |

El arranque del motor WebGL sigue siendo el principal costo en la CPU móvil emulada. La rotación automática está pausada inicialmente en pantallas pequeñas; el globo permanece 3D e interactivo. No se afirma rendimiento móvil perfecto.

Muestras de animación de Playwright, con movimiento activado: 26,9 FPS (escritorio, calidad 1,25) y 59,7 FPS (emulación móvil, calidad 1). Son ventanas de unos tres segundos en renderizado de CI; no describen teléfonos físicos ni garantizan FPS constantes. El controlador redujo resolución en la muestra lenta.

Una medición preliminar etiquetada escritorio utilizó por error el perfil móvil. Se corrigió el runner importando la configuración oficial de escritorio y verificando `actualFormFactor`; esa cifra preliminar no se utiliza en la tabla.

## Publicación

La actualización administrativa del modo de Pages respondió HTTP 403. Se conserva la fuente existente main/root. La documentación oficial de actions/deploy-pages permite despliegues desde la rama fuente configurada. CI sincroniza una copia estática ya validada en raíz y publica el artefacto completo, preservando los archivos fuente.

Referencia: https://github.com/actions/deploy-pages#security-considerations

El resultado del despliegue y la comprobación pública se agregan después de su ejecución real.

## Límites

La vista previa gestionada de Work no estuvo disponible. Las pruebas de navegador y Lighthouse se ejecutaron en GitHub Actions sobre el build, con capturas descargadas para revisión.

Axe y Lighthouse no certifican conformidad WCAG completa. Emulación móvil no reemplaza un dispositivo físico. Quedan pendientes pruebas manuales con lectores de pantalla y equipos reales. Las funciones y el hardware de los productos enlazados no se validan mediante las pruebas del sitio corporativo.
