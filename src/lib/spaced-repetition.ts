/**
 * Spaced Repetition Engine (SM-2 inspired, localStorage-backed)
 *
 * Storage key: "istqb_sr_state"
 * Per-question record: { interval, repetitions, easeFactor, dueDate, wrongCount }
 *
 * Grade scale (0-4):
 *   0 = blackout (completely wrong)
 *   1 = incorrect, remembered after seeing answer
 *   2 = correct with difficulty
 *   3 = correct with some hesitation
 *   4 = perfect recall
 */

const SR_KEY = "istqb_sr_state";

export interface SRCard {
  questionId: string;        // "{chapterId}:{index}" or unique key
  interval: number;          // days until next review
  repetitions: number;       // number of successful reviews
  easeFactor: number;        // EF — starts at 2.5
  dueDate: string;           // ISO date string
  wrongCount: number;        // cumulative wrong answers
  lastSeen: string;          // ISO date string
}

export type SRState = Record<string, SRCard>;

export function loadSRState(): SRState {
  try {
    const raw = localStorage.getItem(SR_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveSRState(state: SRState): void {
  try {
    localStorage.setItem(SR_KEY, JSON.stringify(state));
  } catch { /* quota exceeded — silently ignore */ }
}

/**
 * SM-2 algorithm step.
 * @param card existing card or null (first time)
 * @param grade 0-4
 * @returns updated SRCard
 */
export function sm2Step(card: SRCard | null, grade: 0 | 1 | 2 | 3 | 4, questionId: string): SRCard {
  const now = new Date();
  const prev: SRCard = card ?? {
    questionId,
    interval: 1,
    repetitions: 0,
    easeFactor: 2.5,
    dueDate: now.toISOString(),
    wrongCount: 0,
    lastSeen: now.toISOString(),
  };

  let { interval, repetitions, easeFactor, wrongCount } = prev;

  if (grade < 3) {
    // Failed — restart
    repetitions = 0;
    interval = 1;
    wrongCount += 1;
  } else {
    // Passed
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * easeFactor);
    }
    repetitions += 1;
  }

  // Update ease factor (bounded 1.3 - 3.0)
  easeFactor = Math.min(3.0, Math.max(1.3,
    easeFactor + 0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)
  ));

  const dueDate = new Date(now);
  dueDate.setDate(dueDate.getDate() + interval);

  return {
    questionId,
    interval,
    repetitions,
    easeFactor,
    dueDate: dueDate.toISOString(),
    wrongCount,
    lastSeen: now.toISOString(),
  };
}

/** Returns question IDs that are due today or earlier. */
export function getDueCards(state: SRState): string[] {
  const now = new Date();
  return Object.values(state)
    .filter((c) => new Date(c.dueDate) <= now)
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime())
    .map((c) => c.questionId);
}

/** Returns question IDs sorted by wrongCount descending (weakest first). */
export function getWeakestCards(state: SRState, limit = 20): string[] {
  return Object.values(state)
    .filter((c) => c.wrongCount > 0)
    .sort((a, b) => b.wrongCount - a.wrongCount)
    .slice(0, limit)
    .map((c) => c.questionId);
}

/** Quick grade from isCorrect boolean: correct = 3, wrong = 1 */
export function gradeFromBool(isCorrect: boolean): 0 | 1 | 2 | 3 | 4 {
  return isCorrect ? 3 : 1;
}
