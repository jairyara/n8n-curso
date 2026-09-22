# 🗺️ Hoja de Ruta del Proyecto (Roadmap)

Este documento detalla el estado actual, las prioridades inmediatas y la evolución planificada para la plataforma **OVA n8n**.

---

## 📌 Estado de las Fases

```text
[Fase 1: Modernización y Arquitectura Base] ───> COMPLETADA (v1.0.0)
[Fase 2: Sistema de Autenticación y Nube]   ───> EN PLANIFICACIÓN (Prioridad Próxima)
[Fase 3: Módulos Multiclase y Streaming]   ───> PLANIFICADA
[Fase 4: Certificación y Sandboxing]        ───> FUTURA
```

---

## ✅ Fase 1: Modernización y Arquitectura Base (Completada)

- [x] Migración del código HTML estático a **Astro Latest**.
- [x] Implementación de **Astro Content Collections API** con validación Zod.
- [x] Soporte para contenido en formato **MDX** con componentes embebidos.
- [x] Integración de **Tailwind CSS** con plugin `@tailwindcss/typography` (estilo prose en modo oscuro).
- [x] Desarrollo de componentes interactivos con **Vanilla JavaScript** (cero React/Vue/Svelte):
  - [x] Evaluador de secuencias lógicas (`SequenceGame.astro`).
  - [x] Cuestionario técnico (`TechnicalQuiz.astro`).
  - [x] Simulador de flujo Drag & Drop (`NodeSimulator.astro`).
- [x] Preguntas y retos adaptados a la operativa real de n8n en el Módulo II.
- [x] Persistencia de progreso en `localStorage` con notificación reactiva de eventos.
- [x] Diseño responsive con drawer lateral móvil accesible.
- [x] Eliminación de bloqueos obligatorios de login inicial.

---

## 🚧 Fase 2: Autenticación y Sincronización en la Nube (Próximo Sprint)

> **Objetivo:** Resolver el sistema de usuarios y autenticación, sustituyendo la persistencia aislada de `localStorage` por una base de datos en tiempo real manteniendo soporte offline.

- [ ] **Selección de Proveedor de Autenticación:**
  - Evaluar Firebase Auth vs Supabase Auth vs OAuth institucional ETITC.
- [ ] **Sincronización de Progreso en Base de Datos:**
  - Actualizar `src/scripts/progress.ts` con una capa de API que sincronice con la nube cuando haya sesión iniciada y use `localStorage` como caché local / offline.
- [ ] **Perfil de Estudiante:**
  - Vista de perfil (`/perfil`) con datos del estudiante, fecha de inicio y métricas de avance por módulo.
- [ ] **Protección Opcional de Rutas:**
  - Middleware de Astro para restringir módulos avanzados si el curso exige secuencia estricta.

---

## 📦 Fase 3: Soporte Multiclase y Contenido Multimedia

> **Objetivo:** Expandir la plataforma para albergar cursos de mayor extensión con múltiples lecciones por módulo.

- [ ] **Habilitar Rutas Dinámicas `/modulos/[module]/[lesson]`:**
  - Consumir la colección `lessons` definida en `src/content.config.ts`.
- [ ] **Integración de Streaming de Video:**
  - Reemplazar los componentes `VideoPlaceholder.astro` por reproductores adaptativos (YouTube Embed API, Vimeo o Cloudflare Stream) con marcado de video completado al 80% de visualización.
- [ ] **Navegación Intramódulo:**
  - Menú lateral acordeón que liste las lecciones hijas de cada módulo activo.

---

## 🎓 Fase 4: Certificación y Sandbox n8n en Vivo

- [ ] **Generación de Certificado de Finalización:**
  - Emisión de certificado descargable en PDF con código QR de validación al alcanzar el 100% de los módulos aprobados.
- [ ] **Verificación en Vivo contra Instancia de n8n:**
  - Permitir al estudiante enviar un Webhook de prueba a una instancia de n8n dedicada para que el sistema valide automáticamente que su flujo real en la nube produce la respuesta esperada.
- [ ] **Exportador de Workflows JSON:**
  - Botón para descargar las plantillas de flujos (`.json`) directamente a la máquina del estudiante para importarlas en su lienzo de n8n Cloud o Self-Hosted.
