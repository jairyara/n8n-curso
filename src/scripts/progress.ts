/**
 * Servicio de almacenamiento y gestión de progreso en LocalStorage.
 * Centraliza la lectura y escritura para facilitar la migración futura a un sistema de Auth/Backend.
 */

export interface CourseProgress {
  [moduleId: string]: boolean;
}

const STORAGE_KEYS = {
  EMAIL: 'n8n_user_email',
  PROGRESS: 'n8n_progress',
} as const;

export const PROGRESS_EVENT = 'n8n:progress-updated';

/**
 * Obtiene el correo electrónico del usuario activo desde localStorage.
 */
export function getUserEmail(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(STORAGE_KEYS.EMAIL);
}

/**
 * Guarda o actualiza el correo electrónico del usuario.
 */
export function setUserEmail(email: string): void {
  if (typeof window === 'undefined') return;
  const trimmed = email.trim();
  if (trimmed) {
    localStorage.setItem(STORAGE_KEYS.EMAIL, trimmed);
    notifyChange();
  }
}

/**
 * Borra el correo de la sesión local.
 */
export function clearUserEmail(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEYS.EMAIL);
  notifyChange();
}

/**
 * Obtiene el objeto de progreso actual del usuario.
 * Maneja compatibilidad con claves anteriores ('m1', 'm2', 'm3') y nuevas ('modulo-1', etc.).
 */
export function getProgress(): CourseProgress {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (!raw) return { 'modulo-1': false, 'modulo-2': false, 'modulo-3': false };
    const parsed = JSON.parse(raw);
    
    // Normalizar si viene con formato anterior { m1, m2, m3 }
    const normalized: CourseProgress = {};
    for (const [key, value] of Object.entries(parsed)) {
      if (key === 'm1') normalized['modulo-1'] = Boolean(value);
      else if (key === 'm2') normalized['modulo-2'] = Boolean(value);
      else if (key === 'm3') normalized['modulo-3'] = Boolean(value);
      else normalized[key] = Boolean(value);
    }
    return normalized;
  } catch {
    return { 'modulo-1': false, 'modulo-2': false, 'modulo-3': false };
  }
}

/**
 * Verifica si un módulo específico está completado.
 */
export function isModuleCompleted(moduleId: string): boolean {
  const progress = getProgress();
  return Boolean(progress[moduleId]);
}

/**
 * Marca un módulo como completado o no completado.
 */
export function setModuleCompleted(moduleId: string, completed = true): void {
  if (typeof window === 'undefined') return;
  const current = getProgress();
  current[moduleId] = completed;
  
  // Guardar también con aliases antiguos para compatibilidad con código legado
  if (moduleId === 'modulo-1') current['m1'] = completed;
  if (moduleId === 'modulo-2') current['m2'] = completed;
  if (moduleId === 'modulo-3') current['m3'] = completed;

  localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(current));
  notifyChange();
}

/**
 * Calcula el conteo y porcentaje general de módulos completados.
 */
export function calculateProgressStats(moduleIds: string[]): {
  completedCount: number;
  total: number;
  percentage: number;
} {
  const current = getProgress();
  let completedCount = 0;
  for (const id of moduleIds) {
    if (current[id]) completedCount++;
  }
  const total = moduleIds.length || 1;
  const percentage = Math.round((completedCount / total) * 100);
  return { completedCount, total, percentage };
}

/**
 * Notifica a todos los componentes que el progreso o el usuario ha cambiado.
 */
function notifyChange(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(PROGRESS_EVENT, {
      detail: {
        email: getUserEmail(),
        progress: getProgress(),
      },
    })
  );
}
