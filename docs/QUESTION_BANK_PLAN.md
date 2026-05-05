# ISTQB CTFL v4.0.1 — Question Bank Plan (1000 items)

**Purpose:** Define how to grow from the current mini-quizzes to a **full bank of ~1000 bilingual MCQs**, matching the **existing app structure**, for your review **before** wiring data into `syllabus.ts` or a new store.

**Canonical syllabus:** `src/content/chapters/*.md` + official `ISTQB_CTFL_Syllabus_v4.0.1.txt` / PDF.

---

## 1. Current project behaviour (baseline)

| Location | Role |
|----------|------|
| `src/data/syllabus.ts` | `SyllabusChapter.quiz: QuizQuestion[]` per chapter |
| `src/components/MiniQuiz.tsx` | Renders quiz; scoring compares selected option to **`q.correctEn`** (English string of correct option) |
| `src/app/review/[chapterId]/page.tsx` | Shows `MiniQuiz` when `chapter.quiz.length > 0` |

**Existing question counts (exam-focused chapters only):**

| Chapter | ID | Current `#` questions |
|---------|-----|----------------------|
| 1 | `chapter-1` | 8 |
| 2 | `chapter-2` | 8 |
| 3 | `chapter-3` | 4 |
| 4 | `chapter-4` | 1 |
| 5 | `chapter-5` | 1 |
| 6 | `chapter-6` | 1 |
| **Total** | | **23** |

| Non-examinable | Quiz |
|----------------|------|
| `chapter-0` | `[]` |
| `appendices` | `[]` |

---

## 2. Target schema (must match initial implementation)

Every item MUST conform to this shape (already defined in `syllabus.ts`):

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

**Hard rules for compatibility with `MiniQuiz.tsx`:**

1. **Exactly four options** per question (`options.length === 4`).
2. **`correctEn`** must equal **`options[i].en`** for exactly one `i` (same for `correctVi` / `vi`).
3. Distractions should be plausible (syllabus-aligned wrong statements), not joke answers.
4. **`explanation`**: bilingual bullets like existing items (`* **b) Correct**`, `* **b) Đúng**`, then EN/VI rationale per option). Markdown in explanation is rendered via `react-markdown` + `remark-gfm`.

**Optional metadata (recommended for bank maintenance, not required by app today):**

```ts
// Future extension — requires types + optional UI filter
flRef?: string;       // e.g. "FL-4.2.1"
kLevel?: "K1" | "K2" | "K3";
topic?: string;       // short tag, e.g. "EP", "risk-based testing"
```

Implement these only after you approve the bank format (Phase 2).

---

## 3. Allocation: 1000 questions across chapters

Use **official teaching-time weights** (Chapter 0 & Appendices are out of exam scope — **0 mandatory** items; optional small “context” sets if you want).

**Total instruction minutes (Chapters 1–6):**  
180 + 130 + 80 + 390 + 335 + 20 = **1135 minutes**

**Proportional targets (rounded, sum = 1000):**

| Chapter | Minutes | Share | **Target # questions** |
|---------|---------|-------|------------------------|
| 1 Fundamentals | 180 | 15.86% | **159** |
| 2 Lifecycle | 130 | 11.45% | **114** |
| 3 Static testing | 80 | 7.05% | **070** |
| 4 Analysis & design | 390 | 34.36% | **344** |
| 5 Managing tests | 335 | 29.52% | **295** |
| 6 Test tools | 020 | 1.76% | **018** |
| **Total** | 1135 | 100% | **1000** |

**Optional (non-examinable):**

| Block | Suggested # | Note |
|-------|-------------|------|
| `chapter-0` | 0–20 | Copyright, scope, K-level definitions — not exam |
| `appendices` | 0–20 | BO matrix pointers — not exam |

---

## 4. Coverage model (per chapter)

For each chapter, map items to **Learning Objectives (FL-x.y.z)** listed in `src/content/chapters/chapter-N.md` under “Learning Objectives”.

**Suggested distribution per FL (exam-style):**

- **K1 (recall):** ~20–25% — definitions, lists, “which term…”
- **K2 (understand):** ~55–65% — compare, explain outcomes, “why…”
- **K3 (apply):** ~15–25% — small scenarios (Chapters 4–5 heavier)

**Chapter 6** is short: keep items focused on benefits/risks of automation, tool types, CI/CD alignment, common pitfalls (no deep vendor trivia).

**Chapter 4** is largest: EP, BVA, decision/state tables, use cases, exploratory, collaboration-based — split quotas evenly across techniques named in the syllabus.

---

## 5. Item templates (quality checklist)

For each question:

- [ ] Stem is **unambiguous** (one clearly best answer).
- [ ] Wrong options reflect **typical exam traps** (syllabus wording inversions, boundary confusion, swapped terms).
- [ ] No dependence on **obsolete ISTQB versions** unless marked historical (prefer v4.0.1).
- [ ] EN/VI stems aligned (not machine-gloss that changes meaning).
- [ ] Explanation cites **concept** (principle, section idea), not “because I said so”.

---

## 6. Duplication and drift control

- Maintain a **CSV or JSON manifest**: `id`, `chapterId`, `flRef`, `stem_hash`, `revision`.
- **Stem hash** avoids accidental duplicates when merging batches.
- When syllabus text updates, **tag items** by `flRef` to regenerate only affected buckets.

---

## 7. Implementation status (in repo)

- **Generated data:** `src/data/questions/chapter-{1..6}.json` (total **1000** items).
- **Loader:** `src/data/syllabus.ts` imports JSON into each chapter’s `quiz`.
- **Regenerate:** `npm run quiz:generate` (runs `scripts/gen-quiz-bank.mjs`).
- **Validator helper:** `src/lib/quiz-validate.ts` (optional CI checks).
- **Adding questions by hand:** see **`docs/MANUAL_QUESTIONS.md`**.

---

## 8. Implementation options (historical)

| Approach | Pros | Cons |
|----------|------|------|
| **A. Inline in `syllabus.ts`** | Simple imports, types already there | Very large file; slow edits |
| **B. `src/data/questions/chapter-N.json` + merge** | Modular; easier diff/review | Need small loader + type validation (Zod) |
| **C. Database (Prisma)** | Scalable; analytics | More infra; overkill until exam mode ships |

**Recommendation:** **B** — JSON per chapter (or per FL band), validated at build time, merged into `syllabusData` in one module.

---

## 9. Sample items (structure reference only)

Below are **two** illustrative JSON objects (not counted toward 1000). Format matches `QuizQuestion`.

```json
{
  "questionEn": "Which statement best describes confirmation testing?",
  "questionVi": "Phát biểu nào sau đây mô tả đúng nhất về kiểm thử xác nhận (confirmation testing)?",
  "options": [
    { "en": "Re-running tests to detect unintended side-effects after a change", "vi": "Chạy lại kiểm thử để phát hiện tác dụng phụ không mong muốn sau thay đổi" },
    { "en": "Re-testing a defect fix to verify the defect is resolved", "vi": "Kiểm thử lại sau khi sửa khiếm khuyết để xác minh đã khắc phục" },
    { "en": "Testing performed only at acceptance level", "vi": "Kiểm thử chỉ thực hiện ở mức chấp nhận" },
    { "en": "Static analysis performed before dynamic testing", "vi": "Phân tích tĩnh thực hiện trước kiểm thử động" }
  ],
  "correctEn": "Re-testing a defect fix to verify the defect is resolved",
  "correctVi": "Kiểm thử lại sau khi sửa khiếm khuyết để xác minh đã khắc phục",
  "explanation": "* **b) Correct** / **b) Đúng** — Confirmation testing re-runs a failed case after a fix to verify the defect is gone.\n\n* **a)** Describes **regression testing**.\n\n* **c)** Incorrect scope restriction.\n\n* **d)** Mixes static vs dynamic; unrelated to confirmation testing."
}
```

```json
{
  "questionEn": "In risk-based testing, product risk analysis is primarily used to:",
  "questionVi": "Trong kiểm thử dựa trên rủi ro, phân tích rủi ro sản phẩm chủ yếu được dùng để:",
  "options": [
    { "en": "Eliminate the need for entry and exit criteria", "vi": "Loại bỏ nhu cầu về tiêu chí đầu vào và đầu ra" },
    { "en": "Prioritize testing based on likelihood and impact of quality risks", "vi": "Ưu tiên kiểm thử dựa trên khả năng xảy ra và tác động của rủi ro chất lượng" },
    { "en": "Replace configuration management activities", "vi": "Thay thế các hoạt động quản lý cấu hình" },
    { "en": "Guarantee compliance with ISO 31000 certification", "vi": "Đảm bảo tuân thứng chứng nhận ISO 31000" }
  ],
  "correctEn": "Prioritize testing based on likelihood and impact of quality risks",
  "correctVi": "Ưu tiên kiểm thử dựa trên khả năng xảy ra và tác động của rủi ro chất lượng",
  "explanation": "* **b) Correct** / **b) Đúng** — Product risk analysis informs prioritization and scope (residual risk focus).\n\n* **a)** Entry/exit criteria remain.\n\n* **c)** CM is separate.\n\n* **d)** ISO 31000 is referenced for risk concepts; certification wording is a trap."
}
```

---

## 10. Delivery roadmap (suggested)

| Phase | Deliverable |
|-------|-------------|
| **P0** | Approve this plan + allocation + schema |
| **P1** | Author **50 items/chapter** pilot (300 total), validate UX + explanation rendering |
| **P2** | Add optional `flRef` / `kLevel`; JSON split + Zod validation |
| **P3** | Scale to full **1000** using manifest + duplicate checks |
| **P4** | Exam mode: shuffle, timed sets, session scoring (separate feature) |

---

## 11. What we are **not** doing in this document

- Committing 1000 full questions into the repo in one step (too large for one review pass).
- Changing scoring logic until you confirm (still keyed on `correctEn`).

---

**Next step for you:** Confirm (1) chapter allocation, (2) JSON-vs-inline preference, (3) optional metadata fields. After that, implementation can proceed in batches without risking a single unusable 500 KB TypeScript blob.
