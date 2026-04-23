'use client';

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Send, Loader2, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";
import type { Question } from "@/types";

const TOPICS = [
  "Fundamentals of Testing",
  "Testing Throughout the SDLC",
  "Static Testing",
  "Test Analysis and Design",
  "Managing the Test Activities",
  "Test Tools",
];

const DIFFICULTIES = ["easy", "medium", "hard"] as const;
const DIFF_COLORS: Record<string, { color: string; bg: string }> = {
  easy: { color: "var(--color-success)", bg: "var(--color-success-soft)" },
  medium: { color: "var(--color-warning)", bg: "rgba(245, 158, 11, 0.1)" },
  hard: { color: "var(--color-danger)", bg: "var(--color-danger-soft)" },
};

export default function ExamPage() {
  const router = useRouter();

  const [topic, setTopic] = useState(TOPICS[0]);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const [started, setStarted] = useState(false);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, difficulty, count: 5 }),
      });
      if (!res.ok) throw new Error("Failed to load questions");
      const data = await res.json();
      setQuestions(data);
      setCurrentIdx(0);
      setAnswers({});
    } catch {
      setError("Could not load questions. Check your API key and database.");
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
        body: JSON.stringify({ userId: "user-1", answers: formatted }),
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
          style={{ width: "100%", maxWidth: 480 }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight mb-1">New Exam</h1>
          <p className="text-sm mb-10" style={{ color: "var(--color-text-muted)" }}>
            Choose your topic and difficulty to begin.
          </p>

          {/* Topic picker */}
          <label
            className="block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            Topic
          </label>
          <div className="flex flex-col gap-2 mb-8">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setTopic(t)}
                className="text-left px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-200"
                style={{
                  background: topic === t ? "var(--color-accent-soft)" : "var(--color-surface-raised)",
                  color: topic === t ? "var(--color-accent)" : "var(--color-text-primary)",
                  border: `2px solid ${topic === t ? "var(--color-accent)" : "var(--color-border)"}`,
                  cursor: "pointer",
                }}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Difficulty picker */}
          <label
            className="block text-xs font-bold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            Difficulty
          </label>
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
                  {d}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => { setStarted(true); loadQuestions(); }}
            className="btn btn-primary"
            style={{ width: "100%", padding: "16px 0", fontSize: 15, borderRadius: "var(--radius-xl)" }}
          >
            Start Exam <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
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
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>AI is generating your exam…</p>
      </div>
    );
  }

  // ── Error ───────────────────────────────────────────────────
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 px-5 text-center" style={{ minHeight: "100vh" }}>
        <p className="text-sm" style={{ color: "var(--color-text-secondary)", maxWidth: 360 }}>{error}</p>
        <div className="flex gap-3">
          <button onClick={() => { setStarted(false); setError(null); }} className="btn btn-secondary">Back</button>
          <button onClick={loadQuestions} className="btn btn-primary">
            <RefreshCw style={{ width: 14, height: 14 }} /> Retry
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
      {/* Progress bar */}
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
              style={{ height: "100%", background: "var(--color-accent)", borderRadius: 999 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
        <button
          onClick={() => setStarted(false)}
          className="text-xs font-medium transition-colors"
          style={{ color: "var(--color-text-muted)", cursor: "pointer", background: "none", border: "none" }}
        >
          Exit
        </button>
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
                background: DIFF_COLORS[difficulty]?.bg,
                color: DIFF_COLORS[difficulty]?.color,
                letterSpacing: 1,
              }}
            >
              {difficulty}
            </span>
            <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {topic}
            </span>
          </div>

          <h2 className="text-lg font-semibold leading-relaxed mb-8">{currentQ.question}</h2>

          <div className="flex flex-col gap-3">
            {currentQ.options.map((option, i) => {
              const selected = answers[currentQ.id] === option;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(option)}
                  className="flex items-center gap-4 text-left px-5 py-4 rounded-2xl transition-all duration-200"
                  style={{
                    background: selected ? "var(--color-accent-soft)" : "var(--color-surface-sunken)",
                    border: `2px solid ${selected ? "var(--color-accent)" : "var(--color-border)"}`,
                    cursor: "pointer",
                  }}
                >
                  <span
                    className="flex items-center justify-center shrink-0 rounded-full text-xs font-bold"
                    style={{
                      width: 28, height: 28,
                      background: selected ? "var(--color-accent)" : "var(--color-border)",
                      color: selected ? "#fff" : "var(--color-text-muted)",
                      transition: "all 0.2s",
                    }}
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm leading-snug">{option}</span>
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
          <ArrowLeft style={{ width: 14, height: 14 }} /> Prev
        </button>

        {/* Dots */}
        <div className="flex gap-1.5">
          {questions.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setCurrentIdx(i)}
              style={{
                width: i === currentIdx ? 20 : 8,
                height: 8,
                borderRadius: 999,
                background: i === currentIdx
                  ? "var(--color-accent)"
                  : answers[q.id]
                  ? "var(--color-success)"
                  : "var(--color-border)",
                transition: "all 0.3s",
                cursor: "pointer",
                border: "none",
                padding: 0,
              }}
            />
          ))}
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
              <><Send style={{ width: 14, height: 14 }} /> Submit</>
            )}
          </button>
        ) : (
          <button
            disabled={!answers[currentQ.id]}
            onClick={() => setCurrentIdx((p) => p + 1)}
            className="btn btn-primary"
            style={{ opacity: !answers[currentQ.id] ? 0.4 : 1 }}
          >
            Next <ArrowRight style={{ width: 14, height: 14 }} />
          </button>
        )}
      </div>

      {answeredCount < questions.length && currentIdx === questions.length - 1 && (
        <p className="text-center text-xs mt-4" style={{ color: "var(--color-text-muted)" }}>
          Answer all {questions.length} questions to submit ({questions.length - answeredCount} remaining)
        </p>
      )}
    </div>
  );
}
