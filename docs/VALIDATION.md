# Validación

Los resultados finales se completan al terminar la CI y comprobar la publicación. No interpretar la mera existencia de pruebas como una ejecución satisfactoria.

## Completado localmente

- Compilación TypeScript y build de producción.
- Verificador de vínculos, recursos, encabezados y rutas base.
- Pruebas Node de contenido, política de calidad y URL de WhatsApp.

## Entorno

La vista previa gestionada de Work no está disponible (`preview relay unavailable`). Las pruebas de navegador, capturas y Lighthouse se ejecutan en GitHub Actions sobre el build servido localmente en el runner; la web pública se comprueba desde el navegador una vez publicada.

## Límites de interpretación

Axe y Lighthouse no certifican conformidad WCAG completa. Emulación móvil no reemplaza un dispositivo físico. Un FPS de Chromium en CI no describe el teléfono del visitante. Las funciones y el hardware de los productos enlazados no se validan mediante estas pruebas del sitio corporativo.
