import type { QuizQuestion } from "@/data/syllabus";

export function validateQuizQuestion(q: QuizQuestion, index?: number): string[] {
  const errs: string[] = [];
  const pref = index != null ? `Q${index + 1}: ` : "";
  if (!q.questionEn?.trim()) errs.push(`${pref}missing questionEn`);
  if (!q.questionVi?.trim()) errs.push(`${pref}missing questionVi`);
  if (!Array.isArray(q.options) || q.options.length !== 4) {
    errs.push(`${pref}must have exactly 4 options`);
  } else {
    q.options.forEach((o, i) => {
      if (!o.en?.trim()) errs.push(`${pref}option ${i} missing en`);
      if (!o.vi?.trim()) errs.push(`${pref}option ${i} missing vi`);
    });
  }
  if (!q.correctEn?.trim()) errs.push(`${pref}missing correctEn`);
  if (!q.correctVi?.trim()) errs.push(`${pref}missing correctVi`);
  if (q.options?.length === 4) {
    const matchEn = q.options.some((o) => o.en === q.correctEn);
    const matchVi = q.options.some((o) => o.vi === q.correctVi);
    if (!matchEn) errs.push(`${pref}correctEn must match one option.en`);
    if (!matchVi) errs.push(`${pref}correctVi must match one option.vi`);
  }
  if (!q.explanation?.trim()) errs.push(`${pref}missing explanation`);
  return errs;
}

export function validateQuizBank(quiz: QuizQuestion[]): string[] {
  const all: string[] = [];
  quiz.forEach((q, i) => all.push(...validateQuizQuestion(q, i)));
  return all;
}
