import type { Question } from "@/types";
import type { QuizQuestion } from "@/data/syllabus";
import { syllabusData } from "@/data/syllabus";

/** Client-facing topic labels → syllabus chapter id */
export const EXAM_TOPIC_TO_CHAPTER_ID: Record<string, string | null> = {
  "Full Exam": null,
  "Fundamentals of Testing": "chapter-1",
  "Testing Throughout the SDLC": "chapter-2",
  "Static Testing": "chapter-3",
  "Test Analysis and Design": "chapter-4",
  "Managing the Test Activities": "chapter-5",
  "Test Tools": "chapter-6",
};

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
  const enTexts = qq.options.map((o) => o.en);
  const options = shuffle(enTexts);
  return {
    id: `${chapterId}:${index}`,
    topic: topicTitle,
    difficulty: pseudoDifficulty(qq),
    question: qq.questionEn,
    options,
    correct: qq.correctEn,
    explanation: qq.explanation,
    createdAt: new Date().toISOString(),
  };
}

type PoolItem = { chapterId: string; topicTitle: string; index: number; qq: QuizQuestion };

function buildPool(topicLabel: string): PoolItem[] {
  const chapterFilter = EXAM_TOPIC_TO_CHAPTER_ID[topicLabel];
  const pool: PoolItem[] = [];
  for (const ch of syllabusData) {
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
  difficulty: "easy" | "medium" | "hard" | "all",
  count: number
): Question[] {
  let pool = buildPool(topicLabel);
  if (!pool.length) return [];

  if (difficulty !== "all") {
    const filtered = pool.filter((p) => pseudoDifficulty(p.qq) === difficulty);
    if (filtered.length >= count) pool = filtered;
  }

  const picked = shuffle(pool).slice(0, Math.min(count, pool.length));
  return picked.map((p) => quizToQuestion(p.chapterId, p.topicTitle, p.index, p.qq));
}

export function resolveQuizByExamId(qId: string): QuizQuestion | null {
  const m = /^chapter-(\d+):(\d+)$/.exec(qId);
  if (!m) return null;
  const chapterId = `chapter-${m[1]}`;
  const idx = parseInt(m[2], 10);
  const ch = syllabusData.find((c) => c.id === chapterId);
  const qq = ch?.quiz?.[idx];
  return qq ?? null;
}
