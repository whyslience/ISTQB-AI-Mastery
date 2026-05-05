# Guide: Adding manual quiz questions

How to add or edit **bilingual MCQs** used by **Review → MiniQuiz**, **Exam**, and `syllabus.ts`.

---

## Where data lives

| Location | Role |
|----------|------|
| `src/data/questions/chapter-1.json` … `chapter-6.json` | Quiz arrays per chapter (examinable chapters only). |
| `src/data/syllabus.ts` | Imports those JSON files into each chapter’s `quiz` field. |

`chapter-0` and `appendices` intentionally use `quiz: []`.

---

## Question shape (`QuizQuestion`)

Must match `src/data/syllabus.ts`:

```ts
export interface QuizQuestion {
  questionEn: string;
  questionVi: string;
  options: { en: string; vi: string }[];
  correctEn: string;
  correctVi: string;
  explanation: string;
}
```

### Rules

1. **`options`** — exactly **four** entries; each needs non-empty `en` and `vi`.
2. **`correctEn`** — must equal **`options[i].en`** for exactly one `i` (same string, character-for-character).
3. **`correctVi`** — must equal **`options[i].vi`** for that same correct option.
4. **`explanation`** — non-empty. Markdown is fine (e.g. bullet lines with `* **Đúng / Correct:** …`).

### Scoring in the app

- **MiniQuiz** and **Exam** compare the learner’s choice to **`correctEn`** (English option text after options are shuffled on the exam).

---

## Recommended workflow

### Option A — Edit the chapter JSON directly

1. Open the right file, e.g. `src/data/questions/chapter-1.json`.
2. Append a new object to the **end** of the top-level array (see template below).
3. Save and run `npm run build` to catch JSON/type issues early.

**Why append at the end:** Exam question IDs are derived as `chapter-N:<index>` where `<index>` is the **0-based position** in that chapter’s array (`src/lib/exam-from-syllabus.ts`). Inserting in the middle shifts indexes for every later question and can confuse analysis if you rely on stable IDs.

### Option B — Separate manual file (survives regenerating the bank)

If you run `npm run quiz:generate` and it **overwrites** `chapter-*.json`, keep handcrafted items in a dedicated file and merge in TypeScript.

1. Add e.g. `src/data/questions/chapter-1.manual.json` with an array of `QuizQuestion` objects.
2. In `syllabus.ts`, import it and merge:

```ts
import quizChapter1 from "./questions/chapter-1.json";
import quizChapter1Manual from "./questions/chapter-1.manual.json";

// … inside the chapter-1 entry:
quiz: [
  ...(quizChapter1 as QuizQuestion[]),
  ...(quizChapter1Manual as QuizQuestion[]),
],
```

Adjust `scripts/gen-quiz-bank.mjs` so it **only** writes generated output (e.g. `chapter-1.generated.json`) if you want zero risk of overwriting manual files.

---

## JSON template

Copy and adjust (comma placement matters inside the array):

```json
{
  "questionEn": "Which statement best matches ISTQB’s view of exhaustive testing?",
  "questionVi": "Phát biểu nào phù hợp nhất quan điểm ISTQB về kiểm thử toàn diện?",
  "options": [
    {
      "en": "Exhaustive testing is feasible for most projects.",
      "vi": "Kiểm thử toàn diện khả thi đối với hầu hết dự án."
    },
    {
      "en": "Testing can show the presence of defects, not their absence.",
      "vi": "Kiểm thử có thể cho thấy sự hiện diện của khiếm khuyết, không phải sự vắng mặt của chúng."
    },
    {
      "en": "Debugging is the same activity as testing.",
      "vi": "Gỡ lỗi là cùng một hoạt động với kiểm thử."
    },
    {
      "en": "Tests should depend solely on execution order with no planning.",
      "vi": "Kiểm thử chỉ phụ thuộc thứ tự thực thi mà không cần lập kế hoạch."
    }
  ],
  "correctEn": "Testing can show the presence of defects, not their absence.",
  "correctVi": "Kiểm thử có thể cho thấy sự hiện diện của khiếm khuyết, không phải sự vắng mặt của chúng.",
  "explanation": "* **Correct / Đúng:** Aligns with the seven principles (testing shows presence of defects, not their absence).\n* **Incorrect / Sai:** Other options contradict foundational ISTQB CTFL messaging."
}
```

---

## Validation helper

`src/lib/quiz-validate.ts` exposes:

- `validateQuizQuestion(q, index?)` — returns an array of error strings.
- `validateQuizBank(quiz)` — validates an entire chapter bank.

You can call these from a small script or the Node REPL after importing your JSON to confirm shape before committing.

---

## Related docs

- Bank layout and counts: `docs/QUESTION_BANK_PLAN.md`
- Regenerate procedural bank: `npm run quiz:generate` (see plan doc for script path).

---

## Quick checklist

- [ ] Correct chapter file (`chapter-1` … `chapter-6`).
- [ ] Exactly four options; EN/VI aligned per row.
- [ ] `correctEn` / `correctVi` match one option pair exactly.
- [ ] Prefer **append** unless you accept ID shifts.
- [ ] `npm run build` passes after edits.
