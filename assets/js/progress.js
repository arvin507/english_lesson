import { getFinalLessonId } from './lessons.js';

const STORAGE_KEY = 'ezp.progress.v1';

function createDefaultProgress() {
  return {
    lastCompletedLessonId: null,
    completedLessonIds: [],
    updatedAt: null
  };
}

function normalizeProgress(value) {
  const progress = createDefaultProgress();

  if (!value || typeof value !== 'object') {
    return progress;
  }

  const completedLessonIds = Array.isArray(value.completedLessonIds)
    ? value.completedLessonIds.map(Number).filter((id) => Number.isInteger(id) && id >= 0)
    : [];

  const uniqueIds = [...new Set(completedLessonIds)].sort((a, b) => a - b);
  const parsedLastCompletedLessonId = Number(value.lastCompletedLessonId);
  const hasStoredLastCompletedLessonId = value.lastCompletedLessonId !== null && value.lastCompletedLessonId !== undefined;
  const lastCompletedLessonId = hasStoredLastCompletedLessonId && Number.isInteger(parsedLastCompletedLessonId)
    ? parsedLastCompletedLessonId
    : uniqueIds.length > 0
      ? uniqueIds[uniqueIds.length - 1]
      : null;

  return {
    lastCompletedLessonId,
    completedLessonIds: uniqueIds,
    updatedAt: typeof value.updatedAt === 'string' ? value.updatedAt : null
  };
}

export function getProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return createDefaultProgress();
    }

    return normalizeProgress(JSON.parse(raw));
  } catch {
    return createDefaultProgress();
  }
}

export function saveProgress(progress) {
  const normalized = normalizeProgress(progress);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
  return normalized;
}

export function completeLesson(lessonId) {
  const id = Number(lessonId);
  const progress = getProgress();
  const completedLessonIds = new Set(progress.completedLessonIds);
  completedLessonIds.add(id);
  const currentLastCompletedLessonId = Number.isInteger(Number(progress.lastCompletedLessonId))
    ? Number(progress.lastCompletedLessonId)
    : null;
  const lastCompletedLessonId = currentLastCompletedLessonId === null
    ? id
    : Math.max(currentLastCompletedLessonId, id);

  return saveProgress({
    lastCompletedLessonId,
    completedLessonIds: [...completedLessonIds].sort((a, b) => a - b),
    updatedAt: new Date().toISOString()
  });
}

export function isSliceComplete(progress = getProgress()) {
  return Number(progress.lastCompletedLessonId) >= getFinalLessonId();
}

export function getNextRoute(progress = getProgress()) {
  const lastCompletedLessonId = progress.lastCompletedLessonId;

  if (lastCompletedLessonId === null) {
    return { type: 'route', href: 'onboarding.html', label: '开始第 0 课' };
  }

  if (lastCompletedLessonId >= getFinalLessonId()) {
    return { type: 'complete', href: 'index.html', label: '第一周课程完成' };
  }

  const nextLessonId = lastCompletedLessonId + 1;

  return {
    type: 'route',
    href: `lesson.html?lesson=${nextLessonId}`,
    label: `继续第 ${nextLessonId} 课`
  };
}

export function getStorageKey() {
  return STORAGE_KEY;
}
