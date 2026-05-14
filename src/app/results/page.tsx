'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, CheckCircle2, XCircle, Sparkles, ArrowRight, Home, ChevronDown, Share2 } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";

function ScoreGauge({ pct, passed }: { pct: number; passed: boolean }) {
  const size = 160;
  const stroke = 10;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);
  const gradId = "scoreGrad";

  return (
    <div className="relative flex items-center justify-center mx-auto mb-6" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={passed ? "#34d399" : "#f87171"} />
            <stop offset="100%" stopColor={passed ? "#059669" : "#dc2626"} />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={`url(#${gradId})`}
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: `${dash} ${circ}` }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.4 }}
        />
      </svg>
      <div className="flex flex-col items-center z-10 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          className="text-4xl font-extrabold font-display"
          style={{ color: passed ? "var(--color-neon-green)" : "var(--color-danger)" }}
        >
          {pct}%
        </motion.span>
        <span
          className="text-[10px] font-bold uppercase tracking-widest mt-0.5"
          style={{ color: passed ? "var(--color-success)" : "var(--color-danger)" }}
        >
          {passed ? "Passed!" : "Keep Going!"}
        </span>
      </div>
    </div>
  );
}

function QuestionCard({ ans, idx }: { ans: any; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 + idx * 0.04 }}
      className="card overflow-hidden"
    >
      {/* Header row — always visible */}
      <button
        className="flex gap-4 items-center w-full text-left"
        style={{ padding: "18px 24px" }}
        onClick={() => setOpen((o) => !o)}
      >
        <div
          className="flex items-center justify-center shrink-0 rounded-xl"
          style={{
            width: 36, height: 36,
            background: ans.isCorrect ? "var(--color-success-soft)" : "var(--color-danger-soft)",
          }}
        >
          {ans.isCorrect
            ? <CheckCircle2 style={{ width: 18, height: 18, color: "var(--color-success)" }} />
            : <XCircle style={{ width: 18, height: 18, color: "var(--color-danger)" }} />
          }
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-xs font-bold" style={{ color: "var(--color-accent)" }}>Q{idx + 1}</span>
          <p className="text-sm font-semibold line-clamp-1 mt-0.5">
            {ans.questionTextEn || `Question ${idx + 1}`}
          </p>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown style={{ width: 16, height: 16, color: "var(--color-text-muted)" }} />
        </motion.div>
      </button>

      {/* Accordion body */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div style={{ padding: "0 24px 20px", borderTop: "1px solid var(--color-border)" }}>
              {ans.questionTextVi && (
                <p className="text-xs italic opacity-60 mt-3 mb-3">{ans.questionTextVi}</p>
              )}
              <p className="text-xs mb-1">
                <span style={{ color: "var(--color-text-muted)" }}>Your answer: </span>
                <span className="font-semibold" style={{
                  color: ans.isCorrect ? "var(--color-success)" : "var(--color-danger)",
                }}>{ans.userAns}</span>
              </p>
              {!ans.isCorrect && (
                <p className="text-xs">
                  <span style={{ color: "var(--color-text-muted)" }}>Correct: </span>
                  <span className="font-semibold" style={{ color: "var(--color-success)" }}>{ans.correctAns}</span>
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ResultsPage() {
  const [attempt, setAttempt] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("last_attempt");
    if (data) setAttempt(JSON.parse(data));
  }, []);

  if (!attempt) return null;

  const pct = Math.round((attempt.score / attempt.totalQs) * 100);
  const passed = pct >= 65;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (passed) {
      const duration = 3 * 1000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
      const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;
      const interval: any = setInterval(function () {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) return clearInterval(interval);
        const particleCount = 50 * (timeLeft / duration);
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
      }, 250);
    }
  }, [passed]);

  const handleShare = () => {
    const text = `Tôi đạt ${pct}% bài thi ISTQB ${passed ? "— PASSED! 🎉" : "— đang cố gắng thêm 💪"}\nLuyện tập tại: ISTQB Mastery Platform`;
    if (navigator.share) {
      navigator.share({ title: "ISTQB Mastery Results", text }).catch(() => {});
    } else {
      navigator.clipboard.writeText(text).then(() => alert("Result copied to clipboard!"));
    }
  };

  return (
    <div className="px-5 pt-28 pb-20" style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Score card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card text-center mb-8"
        style={{ padding: "48px 32px", position: "relative", overflow: "hidden" }}
      >
        {/* Top progress bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "var(--color-border)",
        }}>
          <motion.div
            style={{
              height: "100%",
              background: passed
                ? "linear-gradient(90deg, #34d399, #059669)"
                : "linear-gradient(90deg, #f87171, #dc2626)",
              borderRadius: "0 999px 999px 0",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* SVG Gauge */}
        <ScoreGauge pct={pct} passed={passed} />

        <h1 className="text-2xl font-extrabold font-display mb-1">
          Exam Results
          <br />
          <span className="text-lg opacity-60">Kết quả Bài thi</span>
        </h1>
        <p className="text-xs font-bold uppercase mb-6" style={{
          letterSpacing: 2, color: "var(--color-text-muted)",
        }}>
          {attempt.score} / {attempt.totalQs} correct · {attempt.score} / {attempt.totalQs} câu đúng
        </p>

        <div className="flex flex-col items-center gap-1 mt-2">
          <span
            className="inline-block text-xs font-bold px-3 py-1 rounded-full"
            style={{
              background: passed ? "var(--color-success-soft)" : "var(--color-danger-soft)",
              color: passed ? "var(--color-success)" : "var(--color-danger)",
              boxShadow: passed ? "var(--glow-success)" : "none",
            }}
          >
            {passed ? "✓ PASSED" : "✗ NEEDS IMPROVEMENT"}
          </span>
          <span className="text-[10px] font-bold opacity-60">
            {passed ? "ĐẠT" : "CẦN CẢI THIỆN"}
          </span>
        </div>

        {/* Share button */}
        <button
          onClick={handleShare}
          className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200"
          style={{
            background: "var(--color-accent-soft)",
            color: "var(--color-accent)",
            border: "1px solid var(--color-accent-medium)",
          }}
        >
          <Share2 style={{ width: 12, height: 12 }} />
          Share Result / Chia sẻ
        </button>
      </motion.div>

      {/* AI Feedback */}
      {attempt.aiFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="card mb-8"
          style={{ padding: "28px 28px" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: 28, height: 28, background: "var(--color-purple-soft)" }}
            >
              <Sparkles style={{ width: 14, height: 14, color: "var(--color-purple)" }} />
            </div>
            <span className="text-xs font-bold uppercase" style={{ letterSpacing: 1.5, color: "var(--color-purple)" }}>
              AI Feedback / Nhận xét AI
            </span>
          </div>
          <p className="text-sm leading-[1.8]" style={{ color: "var(--color-text-secondary)" }}>
            {attempt.aiFeedback}
          </p>
        </motion.div>
      )}

      {/* Question Analysis — Accordion */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-base font-bold font-display">
          Question Analysis
          <br />
          <span className="text-xs opacity-60 font-sans">Phân tích Câu hỏi</span>
        </h3>
        <span className="text-xs font-medium px-2 py-1 rounded-full" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
          {attempt.answers.filter((a: any) => a.isCorrect).length}/{attempt.answers.length} correct
        </span>
      </div>
      <div className="flex flex-col gap-3 mb-12">
        {attempt.answers.map((ans: any, idx: number) => (
          <QuestionCard key={idx} ans={ans} idx={idx} />
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn btn-secondary">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1"><Home style={{ width: 14, height: 14 }} /> Home</span>
            <span className="text-[10px] opacity-70">Trang chủ</span>
          </div>
        </Link>
        <Link href="/exam" className="btn btn-primary">
          <div className="flex flex-col items-center">
            <span className="flex items-center gap-1">Try Again <ArrowRight style={{ width: 14, height: 14 }} /></span>
            <span className="text-[10px] opacity-70">Thử lại</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
