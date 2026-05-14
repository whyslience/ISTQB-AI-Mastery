'use client';

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Send, Loader2, RefreshCw } from "lucide-react";
import { getOrCreateSessionId } from "@/lib/session";
import { useRouter } from "next/navigation";
import type { Question } from "@/types";
import { EXAM_TOPIC_GROUPS, EXAM_TOPICS_UI_ORDER } from "@/lib/exam-from-syllabus";

const TOPICS = [...EXAM_TOPICS_UI_ORDER];

/** Vietnamese subtitle under each topic row (CTFL + CT-AI). */
const TOPIC_SUBTITLE_VI: Record<string, string> = {
  "Full Exam": "Bài thi Tổng hợp",
  "Fundamentals of Testing": "Các Khái niệm Cơ bản",
  "Testing Throughout the SDLC": "Kiểm thử trong Vòng đời",
  "Static Testing": "Kiểm thử Tĩnh",
  "Test Analysis and Design": "Phân tích và Thiết kế",
  "Managing the Test Activities": "Quản lý Hoạt động Kiểm thử",
  "Test Tools": "Công cụ Kiểm thử",
  "CT-AI Full Exam": "Bài thi Tổng hợp CT-AI",
  "CT-AI Ch1 — Introduction to Artificial Intelligence": "Chương 1 — Giới thiệu Trí tuệ Nhân tạo",
  "CT-AI Ch2 — Quality Characteristics for AI-Based Systems": "Chương 2 — Đặc tính Chất lượng cho Hệ thống AI",
  "CT-AI Ch3 — Machine Learning": "Chương 3 — Học Máy",
  "CT-AI Ch4 — Testing AI-Based Systems": "Chương 4 — Kiểm thử Hệ thống Dựa trên AI",
  "CT-AI Ch5 — Input Data Testing for MLS": "Chương 5 — Kiểm thử Dữ liệu Đầu vào cho MLS",
  "CT-AI Ch6 — Model Testing for MLS": "Chương 6 — Kiểm thử Mô hình cho MLS",
  "CT-AI Ch7 — MLS Development Testing": "Chương 7 — Kiểm thử Phát triển MLS",
};

function isFullExamTopic(t: string) {
  return t === "Full Exam" || t === "CT-AI Full Exam";
}

const DIFFICULTIES = ["easy", "medium", "hard", "random"] as const;
const DIFF_COLORS: Record<string, { color: string; bg: string }> = {
  easy: { color: "var(--color-success)", bg: "var(--color-success-soft)" },
  medium: { color: "var(--color-warning)", bg: "rgba(245, 158, 11, 0.1)" },
  hard: { color: "var(--color-danger)", bg: "var(--color-danger-soft)" },
  random: { color: "var(--color-accent)", bg: "var(--color-accent-soft)" },
};

export default function ExamPage() {
  const router = useRouter();

  const [topic, setTopic] = useState(TOPICS[0]);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | "random">("medium");
  const [started, setStarted] = useState(false);
  const [configStep, setConfigStep] = useState<1 | 2 | 3>(1);
  const [selectedTrack, setSelectedTrack] = useState<"ctfl" | "ctai">("ctfl");

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [timeLeft, setTimeLeft] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showVi, setShowVi] = useState(false);

  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;
    const id = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(id);
  }, [timerActive, timeLeft]);

  useEffect(() => {
    if (timerActive && timeLeft === 0 && !submitting) {
      setTimerActive(false);
      alert("Time is up! Your exam will be submitted automatically. / Hết giờ! Bài thi của bạn sẽ được nộp tự động.");
      handleSubmit();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, timerActive, submitting]);

  useEffect(() => {
    if (!started || questions.length === 0 || submitting) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      const key = e.key.toLowerCase();
      const currentQ = questions[currentIdx];

      if (['a', 'b', 'c', 'd'].includes(key)) {
        const optionIdx = key.charCodeAt(0) - 97;
        if (currentQ.options[optionIdx]) {
          setAnswers((prev) => ({ ...prev, [currentQ.id]: currentQ.options[optionIdx].en }));
        }
      } else if (key === 'arrowleft' || key === 'j') {
        if (currentIdx > 0) setCurrentIdx(p => p - 1);
      } else if (key === 'arrowright' || key === 'k') {
        if (currentIdx < questions.length - 1 && answers[currentQ.id]) {
          setCurrentIdx(p => p + 1);
        }
      } else if (key === 'enter' || key === ' ') {
        e.preventDefault();
        if (currentIdx < questions.length - 1 && answers[currentQ.id]) {
          setCurrentIdx(p => p + 1);
        } else if (currentIdx === questions.length - 1 && Object.keys(answers).length === questions.length) {
          handleSubmit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, questions, currentIdx, answers, submitting]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // SVG circular timer
  const TimerRing = ({ secs, total }: { secs: number; total: number }) => {
    const size = 52;
    const stroke = 3.5;
    const r = (size - stroke) / 2;
    const circ = 2 * Math.PI * r;
    const pct = total > 0 ? secs / total : 0;
    const dash = circ * pct;
    const ringColor = secs < 300 ? "var(--color-danger)" : secs < total * 0.2 ? "var(--color-warning)" : "var(--color-accent)";
    return (
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
          <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
          <circle
            cx={size/2} cy={size/2} r={r} fill="none"
            stroke={ringColor}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${circ}`}
            strokeLinecap="round"
            style={{ transition: "stroke-dasharray 0.5s ease, stroke 0.5s ease" }}
          />
        </svg>
        <div className="flex flex-col items-center z-10" style={{ lineHeight: 1.1 }}>
          <span className="text-[10px] font-mono font-bold" style={{ color: ringColor, letterSpacing: 0.5 }}>
            {formatTime(secs)}
          </span>
        </div>
      </div>
    );
  };

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const isFullExam = isFullExamTopic(topic);
      const reqCount = isFullExam ? 40 : 5;
      const reqDiff = isFullExam ? "all" : difficulty;
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty: reqDiff, count: reqCount }),
      });
      if (!res.ok) throw new Error("Failed to load questions");
      const data = await res.json();
      setQuestions(data);
      setCurrentIdx(0);
      setAnswers({});
      setTimeLeft(isFullExam ? 60 * 60 : 10 * 60);
      setTimerActive(true);
    } catch {
      setError("Could not load questions. Tap Retry or go Back. / Không tải được—chọn Thử lại hoặc Quay lại.");
    } finally {
      setLoading(false);
    }
  }, [topic, difficulty]);

  const handleSelect = (ans: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentIdx].id]: ans }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const formatted = Object.entries(answers).map(([qId, userAns]) => ({ qId, userAns }));
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: getOrCreateSessionId(), answers: formatted }),
      });
      if (!res.ok) throw new Error("Submit failed");
      const data = await res.json();
      localStorage.setItem("last_attempt", JSON.stringify(data));
      router.push("/results");
    } catch {
      setError("Failed to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Config Screen ──────────────────────────────────────────
  if (!started) {
    return (
      <div className="flex items-center justify-center px-5 pt-28 pb-16" style={{ minHeight: "100vh" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ width: "100%", maxWidth: 1040 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">
            New Exam
            <br />
            <span className="text-xl opacity-60">Bài thi Mới</span>
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--color-text-muted)" }}>
            Choose your topic and difficulty to begin.
            <br />
            Chọn chủ đề và độ khó để bắt đầu.
          </p>

          {/* Step 1: Track */}
          {configStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--color-text-muted)" }}>
                Step 1: Select Track
              </label>
              <div className="flex flex-col gap-4 mb-8">
                {EXAM_TOPIC_GROUPS.map((group) => {
                  const isCtfl = group.trackId === "ctfl";
                  return (
                    <button
                      key={group.trackId}
                      onClick={() => {
                        setSelectedTrack(group.trackId);
                        setConfigStep(2);
                      }}
                      className="text-left px-5 py-4 rounded-2xl transition-all duration-200"
                      style={{
                        background: "var(--color-surface-raised)",
                        border: `2px solid var(--color-border)`,
                        borderLeft: `6px solid ${isCtfl ? "var(--color-accent)" : "var(--color-purple)"}`,
                      }}
                    >
                      <h3 className="text-lg font-bold">{group.titleEn}</h3>
                      <p className="text-xs opacity-70 mt-1">{group.titleVi}</p>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Step 2: Topic */}
          {configStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                <button onClick={() => setConfigStep(1)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
                  <ArrowLeft style={{ width: 16, height: 16 }} />
                </button>
                <label className="block text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                  Step 2: Select Topic / Chủ đề
                </label>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {EXAM_TOPIC_GROUPS.find(g => g.trackId === selectedTrack)?.topics.map((t) => {
                  const isCtfl = selectedTrack === "ctfl";
                  const accentColor = isCtfl ? "var(--color-accent)" : "var(--color-purple)";
                  const bgSoft = isCtfl ? "var(--color-accent-soft)" : "var(--color-purple-soft)";
                  return (
                    <button
                      key={t}
                      onClick={() => {
                        setTopic(t);
                        if (isFullExamTopic(t)) {
                          setConfigStep(3); // skip difficulty for full exam
                        } else {
                          setConfigStep(3);
                        }
                      }}
                      className="text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
                      style={{
                        background: topic === t ? bgSoft : "var(--color-surface-raised)",
                        color: topic === t ? accentColor : "var(--color-text-primary)",
                        border: `2px solid ${topic === t ? accentColor : "var(--color-border)"}`,
                      }}
                    >
                      <span className="leading-snug block mb-1">{t}</span>
                      <span className="text-[10px] opacity-60 italic line-clamp-2">{TOPIC_SUBTITLE_VI[t] ?? ""}</span>
                    </button>
                  );
                })}
              </div>
              {isFullExamTopic(topic) && (
                <button
                  onClick={() => { setStarted(true); loadQuestions(); }}
                  className="btn btn-primary"
                  style={{ width: "100%", padding: "16px 0", fontSize: 15, borderRadius: "var(--radius-xl)" }}
                >
                  <div className="flex flex-col items-center">
                    <span className="flex items-center gap-2">Start Exam <ArrowRight style={{ width: 16, height: 16 }} /></span>
                    <span className="text-xs opacity-70">Bắt đầu Bài thi</span>
                  </div>
                </button>
              )}
            </motion.div>
          )}

          {/* Difficulty picker */}
          {configStep === 3 && !isFullExamTopic(topic) && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="flex items-center gap-3 mb-3">
                <button onClick={() => setConfigStep(2)} className="text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]">
                  <ArrowLeft style={{ width: 16, height: 16 }} />
                </button>
                <label className="block text-xs font-bold uppercase tracking-widest" style={{ color: "var(--color-text-muted)" }}>
                  Step 3: Difficulty / Độ khó
                </label>
              </div>
              <div className="flex gap-3 mb-10">
                {DIFFICULTIES.map((d) => {
                  const dc = DIFF_COLORS[d];
                  return (
                    <button
                      key={d}
                      onClick={() => setDifficulty(d)}
                      className="flex-1 py-3 rounded-2xl text-sm font-bold capitalize transition-all duration-200"
                      style={{
                        background: difficulty === d ? dc.bg : "var(--color-surface-raised)",
                        color: difficulty === d ? dc.color : "var(--color-text-muted)",
                        border: `2px solid ${difficulty === d ? dc.color : "var(--color-border)"}`,
                        cursor: "pointer",
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <span>{d}</span>
                        <span className="text-[10px] opacity-60">
                          {d === "easy" ? "Dễ" : d === "medium" ? "Vừa" : d === "hard" ? "Khó" : "Trộn"}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => { setStarted(true); loadQuestions(); }}
                className="btn btn-primary"
                style={{ width: "100%", padding: "16px 0", fontSize: 15, borderRadius: "var(--radius-xl)" }}
              >
                <div className="flex flex-col items-center">
                  <span className="flex items-center gap-2">Start Exam <ArrowRight style={{ width: 16, height: 16 }} /></span>
                  <span className="text-xs opacity-70">Bắt đầu Bài thi</span>
                </div>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  }

  // ── Loading ─────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center gap-4" style={{ minHeight: "100vh" }}>
        <div style={{ animation: "float 2s ease-in-out infinite" }}>
          <Loader2 className="animate-spin" style={{ width: 32, height: 32, color: "var(--color-accent)" }} />
        </div>
        <p className="text-sm text-center" style={{ color: "var(--color-text-muted)" }}>
          Loading questions…
          <br />
          <span className="text-xs opacity-60">Đang tải câu hỏi…</span>
        </p>
      </div>
    );
  }

  // ── Error ───────────────────────────────────────────────────
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 px-5 text-center" style={{ minHeight: "100vh" }}>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)", maxWidth: 360 }}>{error}</p>
        <div className="flex gap-3">
          <button onClick={() => { setStarted(false); setError(null); }} className="btn btn-secondary">
            <div className="flex flex-col items-center">
              <span>Back</span>
              <span className="text-[10px] opacity-60">Quay lại</span>
            </div>
          </button>
          <button onClick={loadQuestions} className="btn btn-primary">
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1"><RefreshCw style={{ width: 14, height: 14 }} /> Retry</span>
              <span className="text-[10px] opacity-60">Thử lại</span>
            </div>
          </button>
        </div>
      </div>
    );
  }

  if (!questions.length) return null;

  const currentQ = questions[currentIdx];
  const answeredCount = Object.keys(answers).length;
  const progress = ((currentIdx + 1) / questions.length) * 100;

  // ── Exam UI ─────────────────────────────────────────────────
  return (
    <div className="flex flex-col px-5 pt-24 pb-12" style={{ minHeight: "100vh", maxWidth: 680, margin: "0 auto" }}>
      {/* Progress bar & toolbar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold" style={{ color: "var(--color-text-muted)", letterSpacing: 2 }}>
            {currentIdx + 1}/{questions.length}
          </span>
          <div style={{
            width: 100, height: 4,
            background: "var(--color-border)", borderRadius: 999, overflow: "hidden"
          }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(90deg, var(--color-accent), var(--color-purple))", borderRadius: 999 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowVi(!showVi)}
            className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: showVi ? "var(--color-accent-soft)" : "var(--color-surface-sunken)",
              color: showVi ? "var(--color-accent)" : "var(--color-text-muted)",
              border: `1px solid ${showVi ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            VI: {showVi ? "ON" : "OFF"}
          </button>
          <div className={timeLeft > 0 && timeLeft < 300 ? 'animate-pulse' : ''}>
            <TimerRing secs={timeLeft} total={isFullExamTopic(topic) ? 3600 : 600} />
          </div>
          <button
            onClick={() => { setStarted(false); setTimerActive(false); }}
            className="text-xs font-medium transition-colors"
            style={{ color: "var(--color-text-muted)", cursor: "pointer", background: "none", border: "none" }}
          >
            Exit / Thoát
          </button>
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
          className="card flex-1 mb-8"
          style={{ padding: "36px 32px" }}
        >
          <div className="flex items-center gap-2 mb-6">
            <span
              className="text-xs font-bold uppercase px-2.5 py-1 rounded-full"
              style={{
                background: DIFF_COLORS[currentQ.difficulty]?.bg || "var(--color-surface-raised)",
                color: DIFF_COLORS[currentQ.difficulty]?.color || "var(--color-text-muted)",
                letterSpacing: 1,
              }}
            >
              {currentQ.difficulty || difficulty}
            </span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {currentQ.topic || topic}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold leading-relaxed mb-1" style={{ lineHeight: 1.6 }}>{currentQ.question}</h2>
            {showVi && currentQ.questionVi && (
              <h3 className="text-sm italic opacity-80" style={{ color: "var(--color-text-secondary)" }}>
                {currentQ.questionVi}
              </h3>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, i) => {
              const selected = answers[currentQ.id] === option.en;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(option.en)}
                  className="flex items-center gap-4 text-left px-4 sm:px-5 py-3 sm:py-4 rounded-2xl transition-all duration-200 relative overflow-hidden"
                  style={{
                    background: selected ? "var(--color-accent-soft)" : "var(--color-surface-sunken)",
                    border: `2px solid ${selected ? "var(--color-accent)" : "var(--color-border)"}`,
                    boxShadow: selected ? "inset 0 0 0 1px var(--color-accent-medium), 0 0 12px var(--color-accent-glow)" : "none",
                    cursor: "pointer",
                    minHeight: "3.5rem",
                  }}
                >
                  {/* Left gradient accent bar when selected */}
                  {selected && (
                    <span
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                      style={{ background: "linear-gradient(180deg, var(--color-accent), var(--color-purple))" }}
                    />
                  )}
                  <span
                    className="flex items-center justify-center shrink-0 rounded-full text-xs font-bold"
                    style={{
                      width: 28, height: 28,
                      background: selected
                        ? "linear-gradient(135deg, var(--color-accent), var(--color-purple))"
                        : "var(--color-border)",
                      color: selected ? "#fff" : "var(--color-text-muted)",
                      transition: "all 0.2s",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm leading-snug">{option.en}</span>
                    {showVi && option.vi && <span className="text-xs italic opacity-70">{option.vi}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <button
          disabled={currentIdx === 0}
          onClick={() => setCurrentIdx((p) => p - 1)}
          className="btn btn-secondary"
          style={{ opacity: currentIdx === 0 ? 0.35 : 1 }}
        >
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1"><ArrowLeft style={{ width: 14, height: 14 }} /> Prev</span>
            <span className="text-[10px] opacity-60">Trước</span>
          </div>
        </button>

        {/* Navigation Dots Grid — grid-cols-8 + horizontal scroll on mobile */}
        <div className="flex-1 mx-2 sm:mx-4 overflow-x-auto">
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1 sm:gap-1.5 py-1">
          {questions.map((q, i) => {
            const isAnswered = !!answers[q.id];
            const isCurrent = i === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(i)}
                className="flex items-center justify-center rounded-full text-[10px] font-bold transition-all duration-200"
                style={{
                  width: 28, height: 28,
                  background: isCurrent
                    ? "linear-gradient(135deg, var(--color-accent), var(--color-purple))"
                    : isAnswered
                      ? "var(--color-success)"
                      : "var(--color-surface-raised)",
                  color: (isCurrent || isAnswered) ? "#fff" : "var(--color-text-muted)",
                  border: isCurrent
                    ? "2px solid transparent"
                    : isAnswered
                      ? "2px solid var(--color-success)"
                      : "2px solid var(--color-border)",
                  boxShadow: isCurrent ? "0 0 0 3px var(--color-accent-soft)" : "none",
                  cursor: "pointer",
                  animation: isCurrent ? "pulse-ring 2s ease infinite" : "none",
                }}
              >
                {i + 1}
              </button>
            );
          })}
          </div>
        </div>

        {currentIdx === questions.length - 1 ? (
          <button
            disabled={submitting || answeredCount < questions.length}
            onClick={handleSubmit}
            className="btn btn-primary"
            style={{ opacity: answeredCount < questions.length ? 0.4 : 1 }}
          >
            {submitting ? (
              <Loader2 className="animate-spin" style={{ width: 14, height: 14 }} />
            ) : (
              <div className="flex flex-col items-center">
                <span className="flex items-center gap-1"><Send style={{ width: 14, height: 14 }} /> Submit</span>
                <span className="text-[10px] opacity-60">Nộp bài</span>
              </div>
            )}
          </button>
        ) : (
          <button
            disabled={!answers[currentQ.id]}
            onClick={() => setCurrentIdx((p) => p + 1)}
            className="btn btn-primary"
            style={{ opacity: !answers[currentQ.id] ? 0.4 : 1 }}
          >
            <div className="flex flex-col items-center">
              <span className="flex items-center gap-1">Next <ArrowRight style={{ width: 14, height: 14 }} /></span>
              <span className="text-[10px] opacity-60">Tiếp theo</span>
            </div>
          </button>
        )}
      </div>

      {answeredCount < questions.length && currentIdx === questions.length - 1 && (
        <p className="text-center text-xs mt-4" style={{ color: "var(--color-text-muted)" }}>
          Answer all {questions.length} questions to submit ({questions.length - answeredCount} remaining)
          <br />
          Trả lời tất cả {questions.length} câu để nộp bài (còn {questions.length - answeredCount} câu)
        </p>
      )}
    </div>
  );
}
