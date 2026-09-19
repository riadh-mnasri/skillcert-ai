"use client";

const STORAGE_KEY = "skillcert-ai:progress:v1";
const EVENT_NAME = "skillcert-ai:progress-changed";

export interface DomainStat {
  attempts: number;
  correct: number;
}

export interface ExamAttempt {
  id: string;
  date: string;
  scorePercent: number;
  passed: boolean;
  correctCount: number;
  totalCount: number;
  domainBreakdown: { domainId: string; correct: number; total: number }[];
}

export interface CertProgress {
  modulesRead: string[];
  quizStats: Record<string, DomainStat>;
  examAttempts: ExamAttempt[];
  flashcardsSeen: string[];
}

export type ProgressStore = Record<string, CertProgress>;

function emptyCertProgress(): CertProgress {
  return { modulesRead: [], quizStats: {}, examAttempts: [], flashcardsSeen: [] };
}

function readStore(): ProgressStore {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ProgressStore) : {};
  } catch {
    return {};
  }
}

function writeStore(store: ProgressStore) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    window.dispatchEvent(new CustomEvent(EVENT_NAME));
  } catch {
    // stockage indisponible (navigation privee, quota) : on ignore silencieusement
  }
}

function updateCertProgress(certSlug: string, updater: (current: CertProgress) => CertProgress) {
  const store = readStore();
  const current = store[certSlug] ?? emptyCertProgress();
  store[certSlug] = updater(current);
  writeStore(store);
}

export function markModuleRead(certSlug: string, moduleSlug: string) {
  updateCertProgress(certSlug, (current) => ({
    ...current,
    modulesRead: current.modulesRead.includes(moduleSlug)
      ? current.modulesRead
      : [...current.modulesRead, moduleSlug],
  }));
}

export function toggleModuleRead(certSlug: string, moduleSlug: string) {
  updateCertProgress(certSlug, (current) => ({
    ...current,
    modulesRead: current.modulesRead.includes(moduleSlug)
      ? current.modulesRead.filter((s) => s !== moduleSlug)
      : [...current.modulesRead, moduleSlug],
  }));
}

export function recordQuizAnswer(certSlug: string, domainId: string, correct: boolean) {
  updateCertProgress(certSlug, (current) => {
    const stat = current.quizStats[domainId] ?? { attempts: 0, correct: 0 };
    return {
      ...current,
      quizStats: {
        ...current.quizStats,
        [domainId]: { attempts: stat.attempts + 1, correct: stat.correct + (correct ? 1 : 0) },
      },
    };
  });
}

export function recordExamAttempt(certSlug: string, attempt: ExamAttempt) {
  updateCertProgress(certSlug, (current) => ({
    ...current,
    examAttempts: [attempt, ...current.examAttempts].slice(0, 20),
  }));
}

export function markFlashcardSeen(certSlug: string, term: string) {
  updateCertProgress(certSlug, (current) => ({
    ...current,
    flashcardsSeen: current.flashcardsSeen.includes(term)
      ? current.flashcardsSeen
      : [...current.flashcardsSeen, term],
  }));
}

export function resetCertProgress(certSlug: string) {
  const store = readStore();
  delete store[certSlug];
  writeStore(store);
}

export function subscribe(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT_NAME, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(EVENT_NAME, callback);
    window.removeEventListener("storage", callback);
  };
}

let cachedRaw: string | null = null;
let cachedStore: ProgressStore = {};
const cachedCertProgress = new Map<string, CertProgress>();

export function getSnapshot(certSlug: string): CertProgress {
  if (typeof window === "undefined") return emptyCertProgress();
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedStore = raw ? (JSON.parse(raw) as ProgressStore) : {};
    } catch {
      cachedStore = {};
    }
    cachedCertProgress.clear();
  }
  if (!cachedCertProgress.has(certSlug)) {
    cachedCertProgress.set(certSlug, cachedStore[certSlug] ?? emptyCertProgress());
  }
  return cachedCertProgress.get(certSlug)!;
}

export function getAllProgress(): ProgressStore {
  return readStore();
}

let cachedAllRaw: string | null = null;
let cachedAllStore: ProgressStore = {};

export function getAllSnapshot(): ProgressStore {
  if (typeof window === "undefined") return {};
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (raw !== cachedAllRaw) {
    cachedAllRaw = raw;
    try {
      cachedAllStore = raw ? (JSON.parse(raw) as ProgressStore) : {};
    } catch {
      cachedAllStore = {};
    }
  }
  return cachedAllStore;
}
