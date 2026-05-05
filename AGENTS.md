# Agent guide — ISTQB AI Mastery

Context for AI coding agents (Cursor, Claude Code, etc.) working in this repository.

## What this project is

- **ISTQB CTFL v4.0.1** study companion: bilingual (EN/VI) chapter guides, chapter quizzes, timed exam practice, and optional AI feedback after submit.
- **ISTQB CT-AI v2.0 (GA)** track: bilingual summaries under `src/content/chapters-ai/`; canonical export `src/content/ISTQB-_CTAI_Syllabus_v2.0_Release.md` (align terminology with official syllabus; exam uses official LO/BO wording).
- **Canonical CTFL syllabus text:** Markdown under `src/content/chapters/` plus official exports in `src/content/ISTQB_CTFL_Syllabus_v4.0.1.*` (do not invent syllabus wording; align with v4.0.1).

## Stack

- **Next.js** (App Router) — see version note below.
- **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, **react-markdown** + **remark-gfm**.
- **Prisma** + DB: optional for **History** and persisting attempts; **Exam question generation** uses local JSON (`src/data/questions/`) via `src/lib/exam-from-syllabus.ts`, not Prisma.
- **Google Generative AI (`@google/generative-ai`)**: post-submit feedback in `/api/submit` when `GEMINI_API_KEY` is set; grading does not depend on it.

## Layout (where to look)

| Area | Path | Notes |
|------|------|--------|
| App routes | `src/app/` | `/`, `/review`, `/review/[chapterId]`, `/exam`, `/results`, `/history` |
| API | `src/app/api/` | `generate` (local bank), `submit` (grade + optional Gemini + optional DB), `history` |
| UI | `src/components/` | `Navbar`, `MiniQuiz`, `TableOfContents` |
| Syllabus metadata + quiz wiring | `src/data/syllabus.ts` | Imports `chapter-*.json` into each chapter’s `quiz` |
| CT-AI track metadata | `src/data/syllabus-ai.ts` | `ctaiSyllabusData`; `quiz: []` until a question bank exists |
| CTFL vs CT-AI resolution | `src/lib/syllabus-tracks.ts` | `resolveSyllabusChapter`, `contentMarkdownSubdir` for `/review/[chapterId]` |
| Question bank JSON | `src/data/questions/chapter-1.json` … `chapter-6.json` | `QuizQuestion[]`; see `docs/MANUAL_QUESTIONS.md` |
| Chapter prose | `src/content/chapters/*.md` | Bilingual headings; TOC logic in `src/lib/markdown-toc.ts`, `bilingual-split.ts` |
| CT-AI chapter prose | `src/content/chapters-ai/ctai-*.md` | Same markdown/TOC behaviour; ids prefixed `ctai-` |
| Types | `src/types/index.ts` | `Question` (exam transport), `Attempt`, etc. |
| Quiz validation (optional tooling) | `src/lib/quiz-validate.ts` | Shape checks for `QuizQuestion` |

## Quiz contract (do not break)

- **`QuizQuestion`** (`syllabus.ts`): `questionEn` / `questionVi`, four `{ en, vi }` options, `correctEn` / `correctVi` (each must match exactly one option), `explanation`.
- **MiniQuiz** and **Exam** score using **`correctEn`** (English option string).
- **Exam IDs:** `chapter-N:<index>` where `index` is the 0-based index in that chapter’s merged `quiz` array — prefer **appending** new manual items to avoid shifting IDs.

## Scripts

- `npm run quiz:generate` — regenerates `src/data/questions/chapter-*.json` from `scripts/gen-quiz-bank.mjs`. If you add **manual-only** JSON, either merge in `syllabus.ts` (see `docs/MANUAL_QUESTIONS.md`) or adjust the generator so it does not overwrite handcrafted files.

## Docs for humans and agents

- `docs/MANUAL_QUESTIONS.md` — how to add or merge manual MCQs.
- `docs/QUESTION_BANK_PLAN.md` — bank size targets, regen notes, schema reference.

## Editing rules

- Prefer **small, focused diffs**; match existing naming, imports, and bilingual UI patterns (EN primary line, VI subtitle where the app already does that).
- **Do not** remove or contradict ISTQB glossary without syllabus grounding.
- After structural or type changes, run **`npm run build`**. Fix any issues before claiming the change is complete.

---

<!-- BEGIN:nextjs-agent-rules -->
## Next.js version

This repo uses **Next.js 16.x** (App Router, Turbopack in dev). APIs, conventions, and file layout can differ from older training cutoffs. Before relying on framework details, check the in-repo guide under `node_modules/next/dist/docs/` or the official Next.js docs for this major version. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
