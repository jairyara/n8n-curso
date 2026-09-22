# ⚡ OVA n8n - Plataforma de Aprendizaje Interactiva

Plataforma educativa y Objeto Virtual de Aprendizaje (OVA) para el curso de **Automatización de Procesos con n8n**, desarrollado para el semillero de investigación **Virtual Aprende — ETITC 2026**.

Diseñada con **Astro (Latest)**, **Tailwind CSS** (modo lectura *prose*), **Astro Content Collections API** y **TypeScript**, prescindiendo de frameworks pesados de frontend (cero React, Vue o Svelte) en favor de componentes nativos de Astro y scripts ligeros en Vanilla JavaScript.

---

## 🎯 Características Principales

- **Arquitectura Basada en Contenido:** Todo el material formativo reside en archivos MDX gestionados por la Content Collections API de Astro (`src/content.config.ts`), con validación de esquemas vía Zod.
- **Soporte Híbrido de Módulos:**
  - **Módulo Único:** El contenido completo y sus evaluaciones se alojan en un solo documento MDX (`hasLessons: false`).
  - **Módulo Multiclase:** Preparado para admitir submódulos o lecciones independientes (`hasLessons: true`) en `src/content/lessons/`.
- **Cero Dependencias de Frameworks UI:** Todos los componentes interactivos (evaluaciones de secuencias lógicas, cuestionarios y simulador de lienzo n8n) son componentes nativos de Astro con JavaScript estándar.
- **Seguimiento de Progreso Desacoplado:** Progreso de los estudiantes almacenado en `localStorage` mediante un servicio centralizado (`src/scripts/progress.ts`), listo para migrar a un backend con autenticación (Firebase / Supabase / OAuth).
- **Diseño Responsive y Accesible:** Barra lateral colapsable tipo *drawer* en dispositivos móviles, tipografía optimizada para lectura nocturna y diseño en modo oscuro.
- **Preguntas Técnicas Adaptadas:** Evaluaciones con retos basados en la operativa real de n8n (consultas HTTP, bifurcaciones Switch, uniones Merge y bucles iterativos).

---

## 🚀 Requisitos Previos

- **Node.js:** Versión `>= 20.0.0` (recomendado `>= 22.x` o `26.x`).
- **Gestor de Paquetes:** `pnpm` (`pnpm >= 9.x` o `10.x`).

---

## 🛠️ Instalación y Puesta en Marcha

Clonar el repositorio e instalar las dependencias:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo local
pnpm dev

# Compilar proyecto para producción (SSG)
pnpm build

# Previsualizar el build de producción
pnpm preview
```

El servidor local se iniciará por defecto en `http://localhost:4321`.

---

## 📂 Estructura del Proyecto

```text
n8n-curso/
├── src/
│   ├── content.config.ts          # Definición de colecciones y esquemas Zod (Astro Content Layer)
│   ├── content/
│   │   ├── modules/               # Módulos del curso en formato MDX
│   │   │   ├── modulo-1.mdx       # Fundamentos de LMS, OVA y n8n
│   │   │   ├── modulo-2.mdx       # Automatización, JSON, APIs y Nodos Avanzados
│   │   │   └── modulo-3.mdx       # Inteligencia Artificial, Resiliencia y Taller Práctico
│   │   └── lessons/               # Directorio para lecciones individuales (arquitectura multiclase)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Sidebar.astro             # Barra lateral responsive y navegación
│   │   │   ├── ProgressBar.astro         # Barra reactiva de progreso
│   │   │   ├── UserBox.astro             # Identificación de usuario (estudiante invitado)
│   │   │   ├── VideoPlaceholder.astro    # Espacios reservados para videos de clase
│   │   │   └── EmailModal.astro          # Modal accesible (<dialog>) para captura de correo
│   │   └── interactive/
│   │       ├── SequenceGame.astro        # Juego interactivo de ordenamiento lógico
│   │       ├── TechnicalQuiz.astro       # Cuestionario de validación teórica
│   │       └── NodeSimulator.astro       # Simulador Drag & Drop del workspace de n8n
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Plantilla base HTML, drawer móvil y metadatos
│   │   └── ModuleLayout.astro     # Plantilla con lectura 'prose', navegación prev/next y breadcrumbs
│   ├── pages/
│   │   ├── index.astro            # Tablero principal con ruta de formación
│   │   └── modulos/
│   │       └── [slug].astro       # Generación estática de páginas de módulo
│   ├── scripts/
│   │   └── progress.ts            # Utilidad TypeScript para el estado en LocalStorage
│   └── styles/
│       └── global.css             # Estilos globales y directivas de Tailwind CSS
├── public/
│   └── favicon.svg                # Favicon institucional
├── tailwind.config.mjs            # Configuración de Tailwind y plugin @tailwindcss/typography
├── astro.config.mjs               # Configuración de Astro con integraciones Tailwind y MDX
├── tsconfig.json                  # Configuración estricta de TypeScript
├── CHANGELOG.md                   # Registro histórico de versiones y cambios
├── ROADMAP.md                     # Hoja de ruta técnica y tareas pendientes
└── package.json                   # Dependencias y scripts de ejecución
```

---

## 🧠 Gestión del Progreso en LocalStorage

El archivo [src/scripts/progress.ts](file:///Users/jyarar/projects/u/virtus/n8n-curso/src/scripts/progress.ts) administra el estado mediante dos llaves:
- `n8n_user_email`: Identificación del estudiante (opcional durante la exploración libre).
- `n8n_progress`: Objeto con el estado de completado por módulo (`{ 'modulo-1': true, ... }`).
- **Evento Reactivo:** Emite `n8n:progress-updated` en `window` para que la barra de progreso, badges del menú y estados de usuario se actualicen inmediatamente sin recargar la página.

---

## 👥 Créditos y Semillero

- **Proyecto:** Objeto Virtual de Aprendizaje (OVA) para Automatización con n8n.
- **Investigación:** Virtual Aprende.
- **Institución:** Escuela Tecnológica Instituto Técnico Central (ETITC) — 2026.
