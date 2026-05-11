import type { Question } from "@/types";
import type { QuizQuestion } from "@/data/syllabus";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

/** Exam topic label → question pool + optional chapter filter (null = all chapters in pool). */
export const EXAM_TOPIC_CONFIG: Record<string, { pool: "ctfl" | "ctai"; chapterId: string | null }> = {
  "Full Exam": { pool: "ctfl", chapterId: null },
  "Fundamentals of Testing": { pool: "ctfl", chapterId: "chapter-1" },
  "Testing Throughout the SDLC": { pool: "ctfl", chapterId: "chapter-2" },
  "Static Testing": { pool: "ctfl", chapterId: "chapter-3" },
  "Test Analysis and Design": { pool: "ctfl", chapterId: "chapter-4" },
  "Managing the Test Activities": { pool: "ctfl", chapterId: "chapter-5" },
  "Test Tools": { pool: "ctfl", chapterId: "chapter-6" },

  "CT-AI Full Exam": { pool: "ctai", chapterId: null },
  "CT-AI Ch1 — Introduction to Artificial Intelligence": { pool: "ctai", chapterId: "ctai-1" },
  "CT-AI Ch2 — Quality Characteristics for AI-Based Systems": { pool: "ctai", chapterId: "ctai-2" },
  "CT-AI Ch3 — Machine Learning": { pool: "ctai", chapterId: "ctai-3" },
  "CT-AI Ch4 — Testing AI-Based Systems": { pool: "ctai", chapterId: "ctai-4" },
  "CT-AI Ch5 — Input Data Testing for MLS": { pool: "ctai", chapterId: "ctai-5" },
  "CT-AI Ch6 — Model Testing for MLS": { pool: "ctai", chapterId: "ctai-6" },
  "CT-AI Ch7 — MLS Development Testing": { pool: "ctai", chapterId: "ctai-7" },
};

/**
 * Exam topics grouped by ISTQB certification track for `/exam` UI.
 * Flat order is preserved: CTFL block first, then CT-AI block.
 */
export const EXAM_TOPIC_GROUPS: readonly {
  trackId: "ctfl" | "ctai";
  titleEn: string;
  titleVi: string;
  topics: readonly string[];
}[] = [
  {
    trackId: "ctfl",
    titleEn: "ISTQB CTFL v4.0 — Foundation Level",
    titleVi: "ISTQB CTFL v4.0 — Trình độ Foundation",
    topics: [
      "Full Exam",
      "Fundamentals of Testing",
      "Testing Throughout the SDLC",
      "Static Testing",
      "Test Analysis and Design",
      "Managing the Test Activities",
      "Test Tools",
    ],
  },
  {
    trackId: "ctai",
    titleEn: "ISTQB Certified Tester AI Testing v2.0",
    titleVi: "ISTQB Certified Tester AI Testing v2.0 (CT-AI)",
    topics: [
      "CT-AI Full Exam",
      "CT-AI Ch1 — Introduction to Artificial Intelligence",
      "CT-AI Ch2 — Quality Characteristics for AI-Based Systems",
      "CT-AI Ch3 — Machine Learning",
      "CT-AI Ch4 — Testing AI-Based Systems",
      "CT-AI Ch5 — Input Data Testing for MLS",
      "CT-AI Ch6 — Model Testing for MLS",
      "CT-AI Ch7 — MLS Development Testing",
    ],
  },
];

/** Topics shown on `/exam` in display order (derived from `EXAM_TOPIC_GROUPS`). */
export const EXAM_TOPICS_UI_ORDER: readonly string[] = EXAM_TOPIC_GROUPS.flatMap((g) => [...g.topics]);

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pseudoDifficulty(q: QuizQuestion): Question["difficulty"] {
  let h = 0;
  const s = q.questionEn;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  const b = Math.abs(h) % 3;
  return b === 0 ? "easy" : b === 1 ? "medium" : "hard";
}

function quizToQuestion(
  chapterId: string,
  topicTitle: string,
  index: number,
  qq: QuizQuestion
): Question {
  const options = shuffle([...qq.options]);
  return {
    id: `${chapterId}:${index}`,
    topic: topicTitle,
    difficulty: pseudoDifficulty(qq),
    question: qq.questionEn,
    questionVi: qq.questionVi,
    options,
    correct: qq.correctEn,
    explanation: qq.explanation,
    createdAt: new Date().toISOString(),
  };
}

type PoolItem = { chapterId: string; topicTitle: string; index: number; qq: QuizQuestion };

function syllabusForPool(pool: "ctfl" | "ctai") {
  return pool === "ctfl" ? syllabusData : ctaiSyllabusData;
}

function buildPool(topicLabel: string): PoolItem[] {
  const cfg = EXAM_TOPIC_CONFIG[topicLabel];
  if (!cfg) return [];

  const chapterFilter = cfg.chapterId;
  const pool: PoolItem[] = [];

  for (const ch of syllabusForPool(cfg.pool)) {
    if (!ch.quiz?.length) continue;
    if (chapterFilter !== null && ch.id !== chapterFilter) continue;
    ch.quiz.forEach((qq, index) => {
      pool.push({
        chapterId: ch.id,
        topicTitle: ch.titleEn,
        index,
        qq,
      });
    });
  }
  return pool;
}

export function pickExamQuestions(
  topicLabel: string,
  difficulty: "easy" | "medium" | "hard" | "all" | "random",
  count: number
): Question[] {
  let pool = buildPool(topicLabel);
  if (!pool.length) return [];

  if (difficulty !== "all" && difficulty !== "random") {
    const filtered = pool.filter((p) => pseudoDifficulty(p.qq) === difficulty);
    if (filtered.length >= count) {
      pool = filtered;
    } else {
      const remaining = pool.filter((p) => pseudoDifficulty(p.qq) !== difficulty);
      const shuffledRemaining = shuffle(remaining);
      const needed = count - filtered.length;
      pool = [...filtered, ...shuffledRemaining.slice(0, needed)];
    }
  }

  const picked = shuffle(pool).slice(0, Math.min(count, pool.length));
  return picked.map((p) => quizToQuestion(p.chapterId, p.topicTitle, p.index, p.qq));
}

export function resolveQuizByExamId(qId: string): QuizQuestion | null {
  const colon = qId.lastIndexOf(":");
  if (colon <= 0) return null;
  const chapterId = qId.slice(0, colon);
  const idx = parseInt(qId.slice(colon + 1), 10);
  if (!Number.isFinite(idx) || idx < 0) return null;

  const ch =
    syllabusData.find((c) => c.id === chapterId) ??
    ctaiSyllabusData.find((c) => c.id === chapterId);
  return ch?.quiz?.[idx] ?? null;
}
