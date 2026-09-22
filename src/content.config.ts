import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Colección principal de Módulos del Curso.
 * Soporta dos modalidades:
 * 1. Módulo único: El contenido completo reside en el archivo Markdown/MDX del módulo (hasLessons: false o no especificado).
 * 2. Módulo multiclase: El módulo agrupa varias lecciones independientes (hasLessons: true).
 */
const modules = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/modules' }),
  schema: z.object({
    id: z.string(),
    moduleNumber: z.number(),
    title: z.string(),
    shortTitle: z.string(),
    description: z.string(),
    duration: z.string().optional(),
    badgeText: z.string().default('Pendiente'),
    interactiveType: z.enum(['sequence-game', 'quiz-simulator', 'none']).default('none'),
    hasLessons: z.boolean().default(false),
    lessons: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string().optional(),
        order: z.number(),
      })
    ).optional(),
  }),
});

/**
 * Colección para lecciones/clases individuales cuando un módulo requiera múltiples páginas.
 */
const lessons = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/lessons' }),
  schema: z.object({
    id: z.string(),
    moduleId: z.string(),
    order: z.number(),
    title: z.string(),
    description: z.string().optional(),
    duration: z.string().optional(),
  }),
});

export const collections = {
  modules,
  lessons,
};
