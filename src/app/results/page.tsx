'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2, XCircle, Sparkles, ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  const [attempt, setAttempt] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem("last_attempt");
    if (data) setAttempt(JSON.parse(data));
  }, []);

  if (!attempt) return null;

  const pct = Math.round((attempt.score / attempt.totalQs) * 100);
  const passed = pct >= 65;

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
              background: passed ? "var(--color-success)" : "var(--color-danger)",
              borderRadius: "0 999px 999px 0",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Trophy */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="flex items-center justify-center mx-auto mb-5"
          style={{
            width: 72, height: 72, borderRadius: "var(--radius-2xl)",
            background: passed ? "var(--color-success-soft)" : "var(--color-danger-soft)",
          }}
        >
          <Trophy style={{
            width: 32, height: 32,
            color: passed ? "var(--color-success)" : "var(--color-danger)",
          }} />
        </motion.div>

        <h1 className="text-2xl font-extrabold mb-1">Exam Results</h1>
        <p className="text-xs font-bold uppercase mb-6" style={{
          letterSpacing: 2, color: "var(--color-text-muted)",
        }}>
          {attempt.score} / {attempt.totalQs} correct
        </p>

        {/* Big score */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-6xl font-extrabold mb-2"
          style={{ color: passed ? "var(--color-success)" : "var(--color-danger)" }}
        >
          {pct}%
        </motion.div>

        <span
          className="inline-block text-xs font-bold px-3 py-1 rounded-full mt-2"
          style={{
            background: passed ? "var(--color-success-soft)" : "var(--color-danger-soft)",
            color: passed ? "var(--color-success)" : "var(--color-danger)",
          }}
        >
          {passed ? "PASSED" : "NEEDS IMPROVEMENT"}
        </span>
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
              AI Feedback
            </span>
          </div>
          <p className="text-sm leading-[1.8]" style={{ color: "var(--color-text-secondary)" }}>
            {attempt.aiFeedback}
          </p>
        </motion.div>
      )}

      {/* Detailed Review */}
      <h3 className="text-base font-bold mb-4 px-1">Detailed Review</h3>
      <div className="flex flex-col gap-3 mb-12">
        {attempt.answers.map((ans: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + idx * 0.05 }}
            className="card flex gap-4 items-start"
            style={{ padding: "20px 24px" }}
          >
            <div
              className="flex items-center justify-center shrink-0 rounded-xl mt-0.5"
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
              <p className="font-semibold text-sm mb-2">Question {idx + 1}</p>
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
        ))}
      </div>

      {/* Actions */}
      <div className="flex justify-center gap-3">
        <Link href="/" className="btn btn-secondary">
          <Home style={{ width: 14, height: 14 }} /> Home
        </Link>
        <Link href="/exam" className="btn btn-primary">
          Try Again <ArrowRight style={{ width: 14, height: 14 }} />
        </Link>
      </div>
    </div>
  );
}
