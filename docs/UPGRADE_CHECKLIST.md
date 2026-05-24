# 📋 ISTQB AI Mastery — Upgrade Checklist

> Tài liệu theo dõi tiến độ nâng cấp · Cập nhật lần cuối: 2026-05-13

---

## 🎨 Giai đoạn 0 — UI Modernization (Premium Visual Upgrade)

> Mục tiêu: Nâng cấp visual lên chuẩn "wow factor" — dark glassmorphism, gradient neon, micro-animation — mà không phá vỡ layout hiện tại.

### 0A. Design System — Nền tảng màu sắc & hiệu ứng

- [x] **[0A.1] Nâng cấp color palette — từ blue flat → indigo/violet neon**
  - File: `src/app/globals.css`
  - Đổi accent: `#2563eb` → `#6366f1` (Indigo 500) — hiện đại hơn, bắt mắt hơn
  - Đổi purple: `#7c3aed` → `#a855f7` (Purple 500) — đồng bộ với gradient
  - Dark mode surface: `#09090b` → thêm subtle blue tint `#0a0a14` để cảm giác tech hơn
  - Thêm token: `--color-accent-glow`, `--color-neon-green` (cho pass badge), `--color-neon-amber` (warning)

- [x] **[0A.2] Glassmorphism card variant**
  - File: `src/app/globals.css`
  - Thêm class `.glass-card`: `backdrop-blur(16px)` + `background: rgba(255,255,255,0.04)` + `border: 1px solid rgba(255,255,255,0.08)`
  - Dùng cho: Navbar, Hero badges, Feature cards trên Homepage
  - Chỉ active trên dark mode (light mode giữ nguyên `.card`)

- [x] **[0A.3] Gradient mesh background animated**
  - File: `src/app/globals.css`
  - Thêm animated SVG noise texture overlay nhẹ (opacity 0.03) lên toàn body
  - Thêm keyframe `@keyframes mesh-drift` — blob gradient dịch chuyển chậm
  - Áp dụng lên: root layout background thay vì plain `--color-surface`

- [x] **[0A.4] Typography upgrade**
  - File: `src/app/layout.tsx`
  - Import thêm: **Outfit** (cho headings) + giữ **Inter** (cho body)
  - `font-sans` → Inter, thêm `font-display` → Outfit
  - Headings dùng `font-display` để tạo contrast premium

- [x] **[0A.5] Nâng cấp shadow & glow tokens**
  - File: `src/app/globals.css`
  - `--shadow-glow` → mạnh hơn: `0 0 60px rgba(99,102,241,0.25), 0 0 120px rgba(168,85,247,0.1)`
  - Thêm: `--shadow-neon: 0 0 20px rgba(99,102,241,0.5)` — dùng cho CTA buttons
  - Thêm: `--glow-success: 0 0 24px rgba(52,211,153,0.3)` — cho pass badge

### 0B. Navigation — Navbar upgrade

- [x] **[0B.1] Navbar glassmorphism + border gradient**
  - File: `src/components/Navbar.tsx`
  - Background: `rgba(10, 10, 20, 0.6)` + `backdrop-filter: blur(20px)` trên dark
  - Border bottom: gradient `from transparent via --color-accent to transparent`
  - Active link: underline gradient thay vì text color đơn giản
  - Logo/Brand: thêm gradient text "ISTQB" thay vì plain text

- [x] **[0B.2] Nav link hover — animated underline slide**
  - Dùng `::after` pseudo với `width: 0 → 100%` on hover, gradient color
  - Transition: `0.2s ease`

### 0C. Homepage — Hero section redesign

- [x] **[0C.1] Hero badge nâng cấp — animated shimmer**
  - File: `src/app/page.tsx`
  - Badge "ISTQB CTFL v4.0 Masterclass" → thêm shimmer animation chạy qua
  - Thêm icon glow pulsing effect trên `<Sparkles />`

- [x] **[0C.2] Hero headline — gradient animated**
  - File: `src/app/page.tsx`
  - "ISTQB" text: gradient animation chạy shift màu (indigo → violet → blue loop)
  - Thêm keyframe `@keyframes gradient-shift` vào globals.css
  - Subtitle "4.0": neon glow subtle

- [x] **[0C.3] CTA buttons — neon glow effect**
  - File: `src/app/page.tsx` + `globals.css`
  - `.btn-primary`: thêm `box-shadow: var(--shadow-neon)` on hover
  - Thêm subtle gradient `linear-gradient(135deg, #6366f1, #a855f7)` thay vì flat blue
  - Hover: glow tăng mạnh, scale 1.04

- [x] **[0C.4] Feature cards — premium glassmorphism + icon upgrade**
  - File: `src/app/page.tsx`
  - Đổi `.card` sang `.glass-card` (dark) / giữ `.card` (light)
  - Icon container: thêm gradient border `border-image: gradient`
  - Hover: `translateY(-8px)` + shadow glow matching icon color
  - Thêm dòng highlight: tên số liệu (e.g., "500+ questions", "12 chapters")

- [x] **[0C.5] Hero stats bar — số liệu ấn tượng**
  - File: `src/app/page.tsx`
  - Thêm row dưới hero (trước Feature cards): 3 số liệu nổi bật
    - `500+ Questions` / `12 Chapters` / `2 Certification Tracks`
  - Animation: count-up khi scroll vào viewport

### 0D. Syllabus / Review Page

- [x] **[0D.1] Chapter card redesign — bento-style**
  - File: `src/app/review/page.tsx`
  - Chapter number badge: circular gradient background thay vì square soft
  - Hover: left border glow animation + card lift `translateY(-6px)`
  - Thêm: micro-tag "X questions" trên mỗi card

- [x] **[0D.2] Tab selector (CTFL/CT-AI) — pill redesign**
  - File: `src/app/review/page.tsx`
  - Active tab: gradient pill, inactive: ghost
  - Smooth sliding indicator dưới tab (framer-motion layout animation)

### 0E. Exam Page

- [x] **[0E.1] Exam question card — modern reading layout**
  - File: `src/app/exam/page.tsx`
  - Question text: `text-xl font-semibold` với line-height rộng thoáng
  - Options: pill-style buttons với letter badge (A/B/C/D) nổi bật góc trái
  - Selected state: gradient left border + soft glow background
  - Correct/Wrong: animated icon scale-in khi reveal

- [x] **[0E.2] Timer widget — clock ring visual**
  - File: `src/app/exam/page.tsx`
  - Đổi plain text timer → circular SVG progress ring
  - Ring màu: xanh → vàng (20% còn lại) → đỏ pulsing (5 phút còn)

- [x] **[0E.3] Question navigation grid — numbered dots**
  - File: `src/app/exam/page.tsx`
  - Đổi flat index buttons → styled dot/pill grid
  - Answered: filled accent | Current: ring pulse | Unanswered: ghost

### 0F. Results Page

- [x] **[0F.1] Score gauge — animated circular progress ring**
  - File: `src/app/results/page.tsx`
  - Thay text percentage → SVG circular gauge với stroke animation
  - Pass: ring gradient xanh lá neon | Fail: ring gradient đỏ
  - Center: số % lớn + label "Passed!" / "Keep Going!"

- [x] **[0F.2] Question review cards — accordion expand**
  - File: `src/app/results/page.tsx`
  - Mặc định collapsed (chỉ hiện question text + correct/wrong icon)
  - Click để expand: hiện answer details
  - Animation: smooth height transition

- [x] **[0F.3] Share result button**
  - Thêm button: copy kết quả dưới dạng text hoặc ảnh
  - "Tôi đạt X% ISTQB CTFL — luyện tại istqb-mastery.app"

### 0G. MiniQuiz

- [x] **[0G.1] Option buttons — letter badge + hover glow**
  - File: `src/components/MiniQuiz.tsx`
  - Thêm `A/B/C/D` badge tròn góc trái mỗi option
  - Hover: border accent glow
  - Correct animation: checkmark scale-in với green glow
  - Wrong animation: shake animation + red flash

- [x] **[0G.2] Score badge — animated counter**
  - Score "X/Y" hiện lên với count-up animation sau khi hoàn thành
  - Màu badge: gradient xanh nếu ≥ 70%, vàng nếu 50-69%, đỏ nếu < 50%

---

## ✅ Đã Hoàn Thành

- [x] **Ẩn AI Feedback khi không có `GEMINI_API_KEY`** — `api/submit/route.ts`
  - Skip hoàn toàn Gemini call (không timeout/retry)
  - `aiFeedback = null` → UI tự ẩn qua guard `{attempt.aiFeedback && ...}`
  - Bật lại chỉ cần set `GEMINI_API_KEY` trong `.env`

---

## 🏃 Giai đoạn 1 — Quick Wins (Ưu tiên cao nhất)

> Mỗi item ≤ 1 ngày · Không thay đổi kiến trúc

- [x] **[1.1] Hiển thị câu hỏi thực trên Results page**
  - File: `src/app/results/page.tsx`
  - Hiện tại: chỉ hiện "Question 1", "Question 2"
  - Fix: lưu thêm `questionText` vào `UserAnswer` type và `detailedAnswers` trong submit route
  - Files: `src/types/index.ts`, `src/app/api/submit/route.ts`, `src/app/results/page.tsx`

- [x] **[1.2] Timer cảnh báo + tự dừng khi hết giờ**
  - File: `src/app/exam/page.tsx`
  - Thêm: pulse đỏ khi `timeLeft < 300` (5 phút)
  - Thêm: confirm dialog khi `timeLeft === 0`, auto-submit nếu user không phản hồi
  - Hiện tại: timer chỉ đếm xuống, không có hành động khi về 0

- [x] **[1.3] Phím tắt bàn phím trong bài thi**
  - File: `src/app/exam/page.tsx`
  - `A/B/C/D` → chọn đáp án
  - `←/→` hoặc `J/K` → prev/next câu
  - `Enter` → xác nhận và next
  - Dùng `useEffect` với `window.addEventListener('keydown', ...)`

- [x] **[1.4] Sửa Navbar FOUC (layout shift khi load)**
  - File: `src/components/Navbar.tsx`
  - Hiện tại: `if (!mounted) return null` → gây layout shift
  - Fix: render skeleton/placeholder với cùng dimensions thay vì null
  - Dùng `suppressHydrationWarning` trên phần tử thay đổi (icon sun/moon)

- [x] **[1.5] Dynamic metadata per-chapter (SEO)**
  - File: `src/app/review/[chapterId]/page.tsx`
  - Thêm `export async function generateMetadata({ params })` 
  - Title: `"Chương N: {titleEn} | ISTQB Mastery"`
  - Description: `chapter.descriptionVi` (first 160 chars)

- [x] **[1.6] Sửa nhãn "Coming Q3 2024" lỗi thời**
  - File: `src/app/review/page.tsx` line 233
  - Đổi thành: `"In Development"` hoặc `"Coming Soon"`

- [x] **[1.7] Confetti khi đạt ≥ 65% điểm**
  - File: `src/app/results/page.tsx`
  - Dùng thuần CSS/JS (canvas confetti) hoặc `canvas-confetti` package
  - Chỉ trigger 1 lần khi `passed === true` và page mount

---

## 🚀 Giai đoạn 2 — Core Features

> ~1–2 tuần · Cải thiện vòng lặp học tập

- [x] **[2.1] Thanh tiến trình đọc (Reading Progress Bar)**
  - Tạo mới: `src/components/ReadingProgress.tsx`
  - Sticky bar ở top (dưới navbar), fill dựa trên scroll position
  - Logic: `scrollY / (documentHeight - viewportHeight) * 100`
  - Import vào `src/app/review/[chapterId]/page.tsx`

- [x] **[2.2] Chapter completion tracking**
  - Tạo mới: `src/hooks/useChapterProgress.ts`
  - Lưu vào localStorage: `{ [chapterId]: { read: boolean, quizScore: number | null, readAt: string } }`
  - Mark `read: true` khi user scroll xuống cuối chapter
  - Hiển thị: progress ring/dot trên mỗi chapter card ở `src/app/review/page.tsx`

- [x] **[2.3] MiniQuiz: submit từng câu (immediate feedback)**
  - File: `src/components/MiniQuiz.tsx`
  - Bỏ nút "Submit Quiz" batch
  - Thay bằng: show explanation ngay khi chọn đáp án
  - Giữ lại nút "Retake" và score summary ở cuối
  - Vẫn giữ VI toggle

- [x] **[2.4] Session ID thay thế `user-1` hardcoded**
  - Tạo mới: `src/lib/session.ts`
  - Generate `nanoid()` lần đầu, lưu vào `localStorage('istqb_session_id')`
  - Export hook `useSessionId()`
  - Update: `src/app/exam/page.tsx` line 110, `src/app/history/page.tsx` fetch URL

- [x] **[2.5] Skeleton loading per route**
  - Tạo: `src/app/exam/loading.tsx`
  - Tạo: `src/app/history/loading.tsx`
  - Tạo: `src/app/review/[chapterId]/loading.tsx`
  - Dùng animated placeholder cards (pulse CSS)

- [x] **[2.6] Exam topic selector wizard**
  - File: `src/app/exam/page.tsx`
  - Đổi từ: tất cả 15 buttons cùng lúc
  - Thành: stepper `Track → Chapter → Difficulty → Start` (3 bước rõ ràng)
  - Giảm cognitive load khi chọn đề thi

---

## 📊 Giai đoạn 3 — Dashboard & Gamification

> ~1–2 tuần · Tạo động lực học tập

- [x] **[3.1] Biểu đồ điểm theo chương trên History**
  - File: `src/app/history/page.tsx`
  - Tạo: `src/components/ScoreChart.tsx`
  - Bar chart thuần CSS/SVG (không cần chart lib) — score % per chapter
  - Highlight chương nào < 50%

- [x] **[3.2] Badge "Cần ôn lại" trên weak topics**
  - File: `src/app/history/page.tsx`
  - Tính: topic nào có avg score < 50% qua các lần thi
  - Show badge màu cam với tên chương

- [x] **[3.3] Progress indicator trên Syllabus cards**
  - File: `src/app/review/page.tsx`
  - Dùng data từ `useChapterProgress` (Phase 2.2)
  - Hiển thị: ✓ đã đọc / điểm quiz cuối / chưa học

- [x] **[3.4] Thời gian đọc ước tính per chapter**
  - Tạo: `src/lib/reading-time.ts`
  - Logic: đếm words trong markdown, chia 200 wpm
  - Hiển thị: "~12 phút đọc" trên chapter cards ở review page

- [x] **[3.5] Chỉ số "Sẵn sàng thi" trên Homepage**
  - File: `src/app/page.tsx`
  - Aggregate: avg quiz score + chapters read / total chapters
  - Hiển thị: progress ring với % readiness

- [x] **[3.6] Difficulty thực sự trong question bank**
  - Thêm field `"difficulty": "easy"|"medium"|"hard"` vào `QuizQuestion` interface
  - Update: `src/data/syllabus.ts` type, `src/lib/exam-from-syllabus.ts`
  - Script: gán difficulty thực (có thể dùng rule-based: câu < 10 từ = easy, v.v.)
  - Bỏ `pseudoDifficulty()` hash-based

---

## 🚀 Giai đoạn 4 — Architecture & Performance

> ~2–3 tuần · Production-grade improvements

- [ ] **[4.1] Lazy load question bank per chapter**
  - File: `src/lib/exam-from-syllabus.ts`
  - Đổi `import` tĩnh → `dynamic import()` theo chapterId
  - Giảm initial bundle size (~800KB JSON hiện load all-at-once)

- [ ] **[4.2] LazyMotion thay full Framer Motion**
  - Tất cả components dùng `motion`
  - Đổi sang `<LazyMotion features={domAnimation}>` + `m.*` components
  - Tiết kiệm ~12KB gzipped

- [x] **[4.3] `generateStaticParams` + ISR cho chapter pages**
  - File: `src/app/review/[chapterId]/page.tsx`
  - Add: `export async function generateStaticParams()`
  - Add: `export const revalidate = 3600`
  - Chapter pages render thành static HTML, không parse markdown mỗi request

- [x] **[4.4] Error Boundaries bao quanh Quiz và Exam**
  - Tạo: `src/components/ErrorBoundary.tsx` (React class component)
  - Wrap: `MiniQuiz`, exam question card
  - Tránh toàn trang crash khi 1 component lỗi

- [ ] **[4.5] Streaming AI feedback** *(sau khi bật lại GEMINI_API_KEY)*
  - File: `src/app/api/submit/route.ts`
  - Đổi sang `streamGenerateContent` + `ReadableStream` response
  - Client: đọc stream và update UI từng token

- [ ] **[4.6] PWA support**
  - Thêm: `public/manifest.json`
  - Thêm: service worker qua `next-pwa` package
  - Cho phép: offline reading của chapter content đã cached

- [x] **[4.7] Spaced repetition engine**
  - Tạo: `src/lib/spaced-repetition.ts`
  - Lưu: wrong answers với timestamp vào localStorage
  - Logic: câu sai gần đây xuất hiện nhiều hơn trong lần thi tiếp theo

---

## 🔮 Giai đoạn 5 — Backlog Dài hạn

- [ ] **Flashcard mode** — lật thẻ thuật ngữ/định nghĩa từ markdown chapters
- [ ] **Global search** (`/search`) — full-text qua syllabus + question bank
- [ ] **Quick quiz mode** — 10 câu ngẫu nhiên, xem đáp án ngay, không timer
- [ ] **Chia sẻ kết quả** — generate OG image card có thể share
- [ ] **User auth** — NextAuth.js (Google/GitHub), sync history đa thiết bị
- [ ] **Leaderboard ẩn danh** — bảng điểm tuần để tạo động lực
- [ ] **Advanced Level track** — khi có nội dung syllabus
- [ ] **Swipe gesture exam** — prev/next bằng touch swipe trên mobile

---

## 📱 Mobile UX — Issues cần fix

- [ ] TOC FAB bottom-right quá sát edge trên iOS — đổi sang `bottom-6 right-4` + `env(safe-area-inset-*)`
- [ ] Question nav grid trong exam overflow trên màn nhỏ — dùng `grid-cols-8` + horizontal scroll
- [ ] Bilingual chapter cards quá cao trên mobile — truncate VI description 1 line, expand on tap
- [ ] Option buttons trong exam quá cao trên `sm` — giảm `min-height` xuống `3.5rem`

---

## 🔑 Ghi chú Kỹ thuật

| Biến môi trường | Tác dụng |
|----------------|---------|
| `GEMINI_API_KEY` | Bật AI feedback sau khi submit exam. Không set = section ẩn hoàn toàn |
| `DATABASE_URL` | Prisma DB cho history persistent. Không set = history chỉ trong localStorage |

| File quan trọng | Vai trò |
|----------------|---------|
| `src/lib/exam-from-syllabus.ts` | Toàn bộ logic chọn câu hỏi — không sửa nếu không cần |
| `src/data/syllabus.ts` | `QuizQuestion[]` contract — thay đổi type cần update tất cả JSON |
| `src/app/globals.css` | Design tokens — thêm token mới ở đây, không hardcode color |
| `src/components/MiniQuiz.tsx` | Dùng `correctEn` để grade, không phải `correctVi` |
