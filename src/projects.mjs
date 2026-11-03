export const projects = [
  {
    id: "nexus-x",
    name: "NEXUS-X",
    category: "Ciencia",
    tag: "EL LABORATORIO, CONECTADO",
    status: "Desarrollo activo",
    color: "cyan",
    headline: "Más ciencia.\nMenos barreras.",
    description:
      "El laboratorio en una sola plataforma. Inventario, documentos y herramientas inteligentes con una base que prioriza el trabajo local.",
    short: "Gestión de laboratorio, visión y herramientas locales.",
    repo: "Laboratorio2.0",
    ref: "main",
    source: "README.md",
    demo: "https://miqueas80.github.io/Laboratorio2.0/",
    capabilities: [
      [
        "Inventario y documentos",
        "Consulta de materiales, búsqueda y lectores de documentos desde el navegador.",
      ],
      [
        "NEXUS Lens",
        "Lectura de QR y etiquetas; la visión propone categorías cuando encuentra evidencia suficiente.",
      ],
      [
        "Interacción por voz",
        "Comandos y herramientas de voz con recursos locales y alternativas según el navegador.",
      ],
    ],
    architecture: [
      ["Navegador", "Interfaz, inventario y agente local"],
      ["Almacenamiento local", "IndexedDB y recursos preparados"],
      ["Percepción", "QR, OCR y modelos de visión"],
      ["PWA", "Service Worker y caché offline"],
    ],
    limits:
      "El uso offline requiere preparar los recursos. Cámara y voz dependen del dispositivo y sus permisos. Lens no identifica la composición química de un recipiente a partir de una imagen.",
    next: "Validación física de cámara, micrófono y uso offline en distintos equipos.",
    audience: "Laboratorios educativos, docentes y estudiantes.",
    evidence:
      "README y módulos de visión, voz, inventario y pruebas del repositorio.",
  },
  {
    id: "educacion-x",
    name: "Educación X",
    category: "Educación",
    tag: "APRENDER A TU RITMO",
    status: "MVP en desarrollo",
    color: "violet",
    headline: "Entender cambia\ntodo.",
    description:
      "Una segunda escuela digital en construcción. Un entorno para practicar Matemática, comprender los errores y avanzar con evidencia del propio aprendizaje.",
    short: "Matemática, práctica adaptativa y acompañamiento local.",
    repo: "Educaci-n-X",
    ref: "feat/educacion-x-core-v0.3.0",
    source: "README.md",
    capabilities: [
      [
        "Dos recorridos",
        "Apoyo escolar por temas y Academia con una progresión sugerida.",
      ],
      [
        "Práctica con devolución",
        "Ejercicios originales con corrección determinista, lecciones y diagnóstico orientativo.",
      ],
      [
        "Profesor X",
        "Tutor guiado por reglas que ofrece pasos, ejemplos y revisión de errores. No es un LLM.",
      ],
    ],
    architecture: [
      ["Contenidos", "Lecciones y ejercicios originales"],
      ["Motor pedagógico", "Reglas de selección y corrección"],
      ["Progreso local", "Intentos guardados en IndexedDB"],
      ["PWA", "Caché, exportación e importación"],
    ],
    limits:
      "El MVP está en la rama de desarrollo v0.3.0. Es un piloto de Matemática; no representa un currículo completo, una escuela autorizada ni certificaciones oficiales.",
    next: "Revisión docente y validación del almacenamiento y funcionamiento offline en dispositivos reales.",
    audience:
      "Estudiantes de secundaria argentina y personas que buscan apoyo en Matemática.",
    evidence:
      "Rama feat/educacion-x-core-v0.3.0: documentación, motor pedagógico y banco curricular.",
  },
  {
    id: "meteox",
    name: "MeteoX",
    category: "IoT",
    tag: "EL CAMPO, EN PERSPECTIVA",
    status: "Validación de hardware pendiente",
    color: "mint",
    headline: "Escuchar al entorno.\nDecidir mejor.",
    description:
      "Meteorología y monitoreo de agua en una plataforma rural. Lecturas, históricos y alertas visibles para entender lo que sucede en el campo.",
    short: "Meteorología, sensores y monitoreo de depósitos de agua.",
    repo: "MeteoX",
    ref: "main",
    source: "README.md",
    capabilities: [
      [
        "Meteorología",
        "Panel de temperatura, humedad, viento, lluvia y otras variables; simulación identificada.",
      ],
      [
        "Agua",
        "Seguimiento de depósitos, estimación de litros, calibración e históricos exportables.",
      ],
      [
        "Datos con contexto",
        "Identificación de lecturas antiguas, gráficos y almacenamiento de lecturas descargadas.",
      ],
    ],
    architecture: [
      ["Sensores", "Ecowitt / ESP32 según el módulo"],
      ["Conectividad", "Wi-Fi, router 4G y HTTPS"],
      ["Backend", "Cloudflare Worker y base D1"],
      ["Panel PWA", "Históricos y caché local"],
    ],
    limits:
      "La simulación funciona sin hardware. La integración real requiere equipos, credenciales y despliegue del backend. El módulo de agua monitorea niveles: no acciona bombas ni válvulas.",
    next: "Integración física y pruebas de campo. Validar lecturas y continuidad de conectividad.",
    audience:
      "Productores y equipos que necesitan observar variables ambientales y depósitos.",
    evidence:
      "README v1.4, módulos de normalización y agua, esquema D1 y pruebas con datos simulados.",
  },
  {
    id: "mjon-ia",
    name: "MJON IA",
    category: "Inteligencia artificial",
    tag: "INVESTIGAR DESDE EL NÚCLEO",
    status: "Investigación experimental",
    color: "blue",
    headline: "Inteligencia propia.\nPreguntas abiertas.",
    description:
      "Investigación en modelos neuronales propios y herramientas locales. Un proyecto que separa lo que puede comprobar de lo que todavía está aprendiendo.",
    short: "Modelos propios, conocimiento local y experimentación.",
    repo: "MJON-IA",
    ref: "main",
    source: "docs/RELEASE_FUNCTIONAL.md",
    demo: "https://miqueas80.github.io/MJON-IA/",
    capabilities: [
      [
        "Asistente local",
        "Consultas a un conjunto delimitado de fichas, cálculos y memoria breve de la sesión.",
      ],
      [
        "Generación experimental",
        "Modelos neuronales MJON Original accesibles por separado del modo verificable.",
      ],
      [
        "Neural Core",
        "Código de entrenamiento con RoPE, RMSNorm, SwiGLU, atención agrupada y caché KV.",
      ],
    ],
    architecture: [
      ["Conocimiento", "Fichas locales y cálculo restringido"],
      ["Runtime web", "Respuestas y generación en navegador"],
      ["Entrenamiento", "Python / PyTorch y corpus propios"],
      ["Evaluación", "Pruebas y comparación de checkpoints"],
    ],
    limits:
      "La recuperación de fichas no demuestra aprendizaje neuronal. La red propia sigue siendo experimental y no se presenta como un modelo de inteligencia general. El código de Neural Core no equivale a pesos de producción validados.",
    next: "Ampliar el entrenamiento, evaluar respuestas libres y validar la conversión del núcleo al runtime web.",
    audience:
      "Personas interesadas en IA local, desarrollo e investigación reproducible.",
    evidence:
      "Entrega funcional, código de grounding, Neural Core y documentación de entrenamiento.",
  },
];
