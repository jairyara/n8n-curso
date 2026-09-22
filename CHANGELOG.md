# 📝 Registro de Cambios (Changelog)

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-09-21

### ✨ Añadido
- **Migración a Astro Latest (v7.x):** Estructuración completa del proyecto bajo el framework Astro con compilación estática ultrarrápida.
- **Content Collections API & Content Layer:**
  - Esquema estricto en `src/content.config.ts` utilizando validadores Zod.
  - Colección `modules` con soporte MDX para incrustar componentes visuales e interactivos directamente en el contenido.
  - Colección `lessons` preparada para soportar módulos subdivididos en múltiples clases.
- **Tailwind CSS & Modo Lectura Prose:**
  - Integración de `@tailwindcss/typography` con personalización para modo oscuro, garantizando legibilidad y contraste ergonómico.
  - Paleta de colores institucional basada en el estilo n8n (`#ff6d5a`, slate dark `#0f172a`, card `#1e293b`).
- **Componentes Interactivos en Vanilla JavaScript (Cero frameworks UI):**
  - `SequenceGame.astro`: Juego interactivo reutilizable de ordenamiento lógico por pasos, con validación reactiva y desbloqueo progresivo.
  - `TechnicalQuiz.astro`: Cuestionario de evaluación teórica de opción múltiple con retroalimentación inmediata.
  - `NodeSimulator.astro`: Simulador de lienzo drag & drop de nodos n8n con soporte para ratón y eventos táctiles/clic.
- **Gestión Desacoplada de Progreso:**
  - Módulo TypeScript `src/scripts/progress.ts` para sincronizar `localStorage` sin depender de frameworks.
  - Sistema de eventos `CustomEvent('n8n:progress-updated')` para reactividad en tiempo real entre la barra lateral, badges y barra de avance.
- **Navegación Móvil y Drawer:**
  - Barra lateral colapsable para dispositivos móviles con disparador flotante de fácil acceso.
  - Modal nativo accesible (`<dialog>`) para captura y modificación voluntaria de correo del estudiante.
- **Retos Técnicos Mejorados para el Módulo II:**
  - Reemplazo de los retos genéricos por ejercicios secuenciales de la operativa real de n8n (consultas HTTP GET/POST, separación de arreglos con Split Out, bucles iterativos y webhooks).
- **Documentación del Proyecto:**
  - `README.md`: Guía de instalación, arquitectura y estructura.
  - `CHANGELOG.md`: Historial de versiones y evolución del codebase.
  - `ROADMAP.md`: Plan técnico de trabajo futuro y pendientes de autenticación.

### 🔄 Cambiado
- Eliminación del modal bloqueante que impedía la libre exploración del contenido sin ingresar un correo.
- Migración de los archivos HTML estáticos monolíticos (`index.html`, `modulo1.html`, `modulo2.html`, `modulo3.html`) hacia módulos MDX componibles.
- Adopción de `pnpm` como gestor de paquetes oficial del proyecto.
