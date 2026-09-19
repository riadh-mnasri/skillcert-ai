import type { Certification, QuizQuestion } from "@/content/types";

export const MOCK_EXAM_SIZE = 30;

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Compose un examen blanc en respectant au mieux la ponderation officielle
 * de chaque domaine, a partir de la banque de questions de la certification.
 */
export function buildMockExam(cert: Certification, size = MOCK_EXAM_SIZE): QuizQuestion[] {
  const byDomain = new Map<string, QuizQuestion[]>();
  for (const q of cert.quizBank) {
    const list = byDomain.get(q.domainId) ?? [];
    list.push(q);
    byDomain.set(q.domainId, list);
  }

  const targetSize = Math.min(size, cert.quizBank.length);
  const selected: QuizQuestion[] = [];

  for (const domain of cert.domains) {
    const pool = shuffle(byDomain.get(domain.id) ?? []);
    const target = Math.max(1, Math.round((domain.weightPercent / 100) * targetSize));
    selected.push(...pool.slice(0, target));
  }

  // Ajuste si l'arrondi des poids a produit trop ou pas assez de questions
  const usedIds = new Set(selected.map((q) => q.id));
  const remainderPool = shuffle(cert.quizBank.filter((q) => !usedIds.has(q.id)));

  while (selected.length < targetSize && remainderPool.length > 0) {
    selected.push(remainderPool.shift()!);
  }

  return shuffle(selected.slice(0, targetSize));
}

export interface DomainScore {
  domainId: string;
  domainTitle: string;
  correct: number;
  total: number;
}

export function scoreExam(
  cert: Certification,
  questions: QuizQuestion[],
  answers: Record<string, number | undefined>,
): { correctCount: number; totalCount: number; scorePercent: number; domainBreakdown: DomainScore[] } {
  let correctCount = 0;
  const byDomain = new Map<string, DomainScore>();

  for (const domain of cert.domains) {
    byDomain.set(domain.id, { domainId: domain.id, domainTitle: domain.title, correct: 0, total: 0 });
  }

  for (const q of questions) {
    const entry = byDomain.get(q.domainId);
    if (!entry) continue;
    entry.total += 1;
    if (answers[q.id] === q.correctIndex) {
      entry.correct += 1;
      correctCount += 1;
    }
  }

  const totalCount = questions.length;
  return {
    correctCount,
    totalCount,
    scorePercent: totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0,
    domainBreakdown: Array.from(byDomain.values()).filter((d) => d.total > 0),
  };
}
