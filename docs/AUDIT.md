# Auditoría y decisiones — 2026-11-03

## Base recuperada

Repositorio inspeccionado en `0c963b564b13315ffea82e16cc8c3f2d319b5dd6`. 17 archivos en raíz, sin framework, build, CI ni tests. Las páginas enlazaban `assets/*` y `proyectos/*`, pero los archivos estaban en raíz: referencias rotas. `globe.js` proyectaba coordenadas con Canvas 2D; no era WebGL. Había reglas CSS repetidas. El contacto preparaba WhatsApp sin backend.

Se recuperaron MJON-TECH-WEB-COMPLETA.zip y la referencia visual «MJON TECH: Futuro en tus manos.png». El ZIP sí contenía las carpetas esperadas. Se reutilizan la mascota y la imagen de globo; se reconstruyen estructura, navegación, páginas, estilos, interacción y escena. No se reproducen cifras, instituciones, reloj ni datos meteorológicos de la imagen conceptual.

## Dirección artística

Azul noche #050914, panel #0b1221, hielo #edf4ff, cian #6ce7ff, violeta #be9bff, acero #a4b2c8. Sora para títulos, Manrope para lectura. Firma visual: globo holográfico de continentes reales, órbitas y plataforma luminosa. La densidad visual se concentra en la bienvenida; el resto usa espacio, diagramas y jerarquía editorial. Ningún activo de Apple, NVIDIA o Stripe se copia.

## Fuentes de productos

- NEXUS-X: `miqueas80/Laboratorio2.0`, árbol `9163fe996354b5d69a5522573dcd9e45a314e627`, README, inventario y módulos/pruebas de visión y voz. Se explica que la visión no determina composición química y que hay validaciones físicas pendientes.
- Educación X: `miqueas80/Educaci-n-X`, rama `feat/educacion-x-core-v0.3.0`, commit `374eed780ce585bea34034e69838f9c05477a7d1`. El main solo contiene README inicial; el MVP está en esa rama. Tutor por reglas, no LLM. No se anuncia una demo pública verificada.
- MeteoX: commit `1f75e1e5e945da6dde218d995bcc9608cf0d8d74`, README v1.4, código de agua y normalización. Hardware y credenciales reales pendientes; no se afirma control de bombas.
- MJON IA: commit `c6056b7805d3af5d8dc1afc82cf3d9dbf76316b9`, README, entrega funcional, grounding y Neural Core. Se distingue recuperación local de aprendizaje neuronal.
- OMEGA LAB 3D y MJON ANR no se incluyen: no se localizaron repositorios entre los repositorios accesibles de la cuenta. No se infiere inexistencia.

## Decisiones de ingeniería

Vite genera documentos independientes con rutas reales para Pages. TypeScript protege el código interactivo. React/R3F no aportan aquí suficiente valor frente al costo de un runtime extra. WebGL2 resulta suficiente para esta escena; WebGPU se evaluó pero no se usa: evitar dos motores y migración a TSL mientras el renderer sigue señalado como experimental en la documentación oficial.

Referencias consultadas:
- https://vite.dev/guide/static-deploy.html
- https://threejs.org/manual/pages/responsive.html
- https://threejs.org/manual/pages/webgpurenderer

Sin postprocesado de pantalla completa, sombras dinámicas ni modelos 3D externos. La textura geográfica se construye una vez con Natural Earth; la malla, cámara, luces y órbitas son 3D reales. Calidad adaptativa reduce resolución al superar 28 ms medios por cuadro, con suelo 0.75 y máximo 1.5 DPR. No se interpreta la memoria aproximada del navegador como memoria libre.

## Seguridad

CSP de origen propio, sin eval, sin formularios de envío ni secretos. Enlaces externos con noopener/noreferrer. Dependencies fijadas en lockfile y auditadas. Se usa style-src unsafe-inline para compatibilidad de utilidades; scripts solo del origen. `frame-ancestors` no se simula con meta porque requiere un header HTTP y Pages no ofrece headers personalizados. No hay datos de sesión sensibles en el sitio.
