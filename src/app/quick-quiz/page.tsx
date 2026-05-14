'use client';

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, RotateCcw, CheckCircle2, XCircle, ChevronRight, Loader2, Brain } from "lucide-react";
import Link from "next/link";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";

interface QuickQuestion {
  id: string;
  question: string;
  questionVi: string;
  options: { en: string; vi: string }[];
  correct: string;
  explanation: string;
  topic: string;
}

export default function QuickQuizPage() {
  const [questions, setQuestions] = useState<QuickQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showVi, setShowVi] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState<"all" | "weak">("all");

  const { recordAnswer, getWeak, dueCount } = useSpacedRepetition();

  const loadQuestions = useCallback(async (m: "all" | "weak") => {
    setLoading(true);
    setQuestions([]);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setDone(false);

    try {
      let url = "/api/generate?topic=Full+Exam&difficulty=random&count=10";
      if (m === "weak") {
        const weakIds = getWeak(10);
        if (weakIds.length > 0) {
          // Fetch via generate then filter — simpler than a custom endpoint
          url = "/api/generate?topic=Full+Exam&difficulty=random&count=30";
        }
      }
      const res = await fetch(url);
      const data = await res.json();
      let pool: QuickQuestion[] = Array.isArray(data) ? data : data.questions ?? [];
      if (m === "weak") {
        const weakIds = getWeak(30);
        const weakSet = new Set(weakIds);
        const filtered = pool.filter((q) => weakSet.has(q.id));
        pool = filtered.length >= 5 ? filtered.slice(0, 10) : pool.slice(0, 10);
      } else {
        pool = pool.slice(0, 10);
      }
      setQuestions(pool);
    } catch {
      setQuestions([]);
    } finally {
      setLoading(false);
    }
  }, [getWeak]);

  useEffect(() => { loadQuestions("all"); }, [loadQuestions]);

  const handleSelect = (optEn: string) => {
    if (selected !== null) return;
    setSelected(optEn);
    const isCorrect = optEn === questions[current].correct;
    if (isCorrect) setScore((s) => s + 1);
    recordAnswer(questions[current].id, isCorrect);
  };

  const handleNext = () => {
    if (current >= questions.length - 1) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
    }
  };

  const LETTERS = ["A", "B", "C", "D"];
  const q = questions[current];

  return (
    <div className="px-5 pt-28 pb-20" style={{ maxWidth: 620, margin: "0 auto" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: "var(--color-accent-soft)" }}>
            <Zap style={{ width: 20, height: 20, color: "var(--color-accent)" }} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold font-display">Quick Quiz</h1>
            <p className="text-xs opacity-60">10 câu · không timer · xem đáp án ngay</p>
          </div>
        </div>

        {/* Mode + due badge */}
        <div className="flex items-center gap-2 mt-4 flex-wrap">
          {(["all", "weak"] as const).map((m) => (
            <button
              key={m}
              onClick={() => { setMode(m); loadQuestions(m); }}
              className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
              style={{
                background: mode === m ? "linear-gradient(135deg, var(--color-accent), var(--color-purple))" : "var(--color-surface-raised)",
                color: mode === m ? "#fff" : "var(--color-text-muted)",
                border: mode === m ? "none" : "1px solid var(--color-border)",
              }}
            >
              {m === "all" ? "🎲 Random" : "🔥 Weak Topics"}
            </button>
          ))}
          <button
            onClick={() => setShowVi(!showVi)}
            className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
            style={{
              background: showVi ? "var(--color-accent-soft)" : "var(--color-surface-raised)",
              color: showVi ? "var(--color-accent)" : "var(--color-text-muted)",
              border: `1px solid ${showVi ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            VI: {showVi ? "ON" : "OFF"}
          </button>
          {dueCount() > 0 && (
            <span className="text-[10px] font-bold px-2 py-1 rounded-full" style={{ background: "rgba(245,158,11,0.1)", color: "var(--color-neon-amber)" }}>
              {dueCount()} due for review
            </span>
          )}
        </div>
      </motion.div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin" style={{ width: 28, height: 28, color: "var(--color-accent)" }} />
        </div>
      )}

      {/* Done screen */}
      {done && !loading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          className="card text-center"
          style={{ padding: "48px 32px" }}
        >
          <Brain style={{ width: 48, height: 48, margin: "0 auto 16px", color: "var(--color-accent)" }} />
          <h2 className="text-3xl font-extrabold font-display mb-2 gradient-text-animated">{score}/{questions.length}</h2>
          <p className="text-sm mb-2" style={{ color: "var(--color-text-muted)" }}>
            {Math.round((score / questions.length) * 100)}% correct · {Math.round((score / questions.length) * 100)}% đúng
          </p>
          <p className="text-xs mb-8 italic" style={{ color: "var(--color-text-muted)" }}>
            {score === questions.length ? "🎉 Perfect! Xuất sắc!" : score >= questions.length * 0.7 ? "👏 Tốt lắm! Keep going." : "💪 Cần ôn thêm. Keep practicing."}
          </p>
          <div className="flex justify-center gap-3">
            <button onClick={() => loadQuestions(mode)} className="btn btn-primary">
              <span className="flex items-center gap-1"><RotateCcw style={{ width: 14, height: 14 }} /> Try Again</span>
            </button>
            <Link href="/exam" className="btn btn-secondary">Full Exam</Link>
          </div>
        </motion.div>
      )}

      {/* Quiz */}
      {!done && !loading && q && (
        <>
          {/* Progress */}
          <div className="flex items-center gap-3 mb-6">
            {questions.map((_, i) => (
              <div
                key={i}
                className="h-1.5 flex-1 rounded-full"
                style={{
                  background: i < current
                    ? "var(--color-success)"
                    : i === current
                      ? "var(--color-accent)"
                      : "var(--color-border)",
                  transition: "background 0.3s",
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.22 }}
              className="card"
              style={{ padding: "32px 28px" }}
            >
              {/* Topic + counter */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
                  {q.topic}
                </span>
                <span className="text-xs font-bold" style={{ color: "var(--color-text-muted)" }}>
                  {current + 1} / {questions.length}
                </span>
              </div>

              {/* Question */}
              <h2 className="text-lg font-semibold leading-relaxed mb-1" style={{ lineHeight: 1.65 }}>
                {q.question}
              </h2>
              {showVi && q.questionVi && (
                <p className="text-sm italic opacity-70 mb-5">{q.questionVi}</p>
              )}

              {/* Options */}
              <div className="flex flex-col gap-2.5 mt-5">
                {q.options.map((opt, i) => {
                  const isSelected = selected === opt.en;
                  const isCorrect = opt.en === q.correct;
                  const showCorrect = selected !== null && isCorrect;
                  const showWrong = selected !== null && isSelected && !isCorrect;

                  return (
                    <button
                      key={i}
                      disabled={selected !== null}
                      onClick={() => handleSelect(opt.en)}
                      className="flex items-center gap-3 text-left px-4 py-3 rounded-xl border-2 transition-all duration-200 disabled:cursor-default"
                      style={{
                        background: showCorrect ? "var(--color-success-soft)" : showWrong ? "var(--color-danger-soft)" : isSelected ? "var(--color-accent-soft)" : "var(--color-surface-sunken)",
                        borderColor: showCorrect ? "var(--color-success)" : showWrong ? "var(--color-danger)" : isSelected ? "var(--color-accent)" : "var(--color-border)",
                        minHeight: "3.5rem",
                      }}
                    >
                      <span
                        className="flex items-center justify-center shrink-0 rounded-full text-xs font-bold"
                        style={{
                          width: 26, height: 26,
                          background: showCorrect ? "var(--color-success)" : showWrong ? "var(--color-danger)" : isSelected ? "var(--color-accent)" : "var(--color-border)",
                          color: (showCorrect || showWrong || isSelected) ? "#fff" : "var(--color-text-muted)",
                        }}
                      >
                        {LETTERS[i]}
                      </span>
                      <div className="flex-1 text-sm font-medium">
                        {opt.en}
                        {showVi && opt.vi && <span className="block text-xs opacity-60 italic mt-0.5">{opt.vi}</span>}
                      </div>
                      <AnimatePresence>
                        {showCorrect && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>
                          <CheckCircle2 style={{ width: 18, height: 18, color: "var(--color-success)", flexShrink: 0 }} />
                        </motion.div>}
                        {showWrong && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 400 }}>
                          <XCircle style={{ width: 18, height: 18, color: "var(--color-danger)", flexShrink: 0 }} />
                        </motion.div>}
                      </AnimatePresence>
                    </button>
                  );
                })}
              </div>

              {/* Explanation + Next */}
              <AnimatePresence>
                {selected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className="mt-5 p-4 rounded-xl text-xs leading-relaxed"
                      style={{
                        background: selected === q.correct ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                        borderLeft: `3px solid ${selected === q.correct ? "var(--color-success)" : "var(--color-danger)"}`,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      <strong className="block mb-1">Giải thích / Explanation:</strong>
                      {q.explanation}
                    </div>
                    <button
                      onClick={handleNext}
                      className="btn btn-primary mt-4 w-full flex items-center justify-center gap-2"
                    >
                      {current >= questions.length - 1 ? "See Results" : "Next"}
                      <ChevronRight style={{ width: 14, height: 14 }} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}
