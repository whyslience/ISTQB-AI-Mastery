'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ChevronRight, Loader2, BarChart2 } from "lucide-react";
import Link from "next/link";
import { getOrCreateSessionId } from "@/lib/session";
import type { Attempt } from "@/types";
import ScoreChart from "@/components/ScoreChart";
import { syllabusData } from "@/data/syllabus";

export default function HistoryPage() {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);
  const [chapterScores, setChapterScores] = useState<{ chapterId: string; chapterLabel: string; score: number }[]>([]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch(`/api/history?userId=${getOrCreateSessionId()}`);
        const data = await res.json();
        setAttempts(Array.isArray(data) ? data : []);
      } catch {
        console.error("Failed to fetch history");
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();

    // Load chapter quiz scores from localStorage (useChapterProgress data)
    try {
      const stored = localStorage.getItem("istqb_chapter_progress");
      if (stored) {
        const progress = JSON.parse(stored);
        const scores = syllabusData
          .filter((ch) => progress[ch.id]?.quizScore != null)
          .map((ch) => ({
            chapterId: ch.id,
            chapterLabel: `Ch${ch.chapterNumber}: ${ch.titleEn.split(" ").slice(0, 3).join(" ")}…`,
            score: progress[ch.id].quizScore as number,
          }));
        setChapterScores(scores);
      }
    } catch {
      // ignore
    }
  }, []);

  const avgScore =
    attempts.length > 0
      ? Math.round(
          attempts.reduce((sum, a) => sum + (a.score / a.totalQs) * 100, 0) / attempts.length
        )
      : 0;

  return (
    <div className="px-5 pt-28 pb-20" style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl font-extrabold tracking-tight font-display mb-1">
          History
          <br />
          <span className="text-lg opacity-60 font-sans">Lịch sử Làm bài</span>
        </h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Your past exam attempts &amp; quiz progress
        </p>
      </motion.div>

      {/* Stats */}
      {!loading && attempts.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[
            { label: "Total", labelVi: "Tổng", value: attempts.length },
            { label: "Average", labelVi: "TB", value: `${avgScore}%` },
            {
              label: "Best",
              labelVi: "Cao nhất",
              value: `${Math.round(Math.max(...attempts.map((a) => (a.score / a.totalQs) * 100)))}%`,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card text-center"
              style={{ padding: "20px 12px" }}
            >
              <p className="text-xl font-extrabold font-display gradient-text">{stat.value}</p>
              <p className="text-xs mt-1 font-medium" style={{ color: "var(--color-text-muted)" }}>
                {stat.label}
              </p>
              <p className="text-[10px] opacity-50" style={{ color: "var(--color-text-muted)" }}>
                {stat.labelVi}
              </p>
            </motion.div>
          ))}
        </div>
      )}

      {/* Score Chart (from chapter quiz progress) */}
      {chapterScores.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <ScoreChart data={chapterScores} />
        </motion.div>
      )}

      {/* List */}
      {loading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="animate-spin" style={{ width: 28, height: 28, color: "var(--color-accent)" }} />
        </div>
      ) : attempts.length === 0 ? (
        <div className="card text-center" style={{ padding: "56px 32px" }}>
          <BarChart2 style={{ width: 40, height: 40, color: "var(--color-text-muted)", margin: "0 auto 16px" }} />
          <p className="font-bold text-lg mb-2">No attempts yet</p>
          <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
            Take your first mock exam to see your history.
            <br />
            <span className="text-xs opacity-70">Hãy làm bài thi thử đầu tiên để xem lịch sử.</span>
          </p>
          <Link href="/exam" className="btn btn-primary">Start Exam</Link>
        </div>
      ) : (
        <>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--color-text-muted)" }}>
            Exam Attempts / Lịch sử Bài thi
          </h4>
          <div className="flex flex-col gap-3">
            {attempts.map((attempt, idx) => {
              const pct = Math.round((attempt.score / attempt.totalQs) * 100);
              const passed = pct >= 65;
              return (
                <motion.div
                  key={attempt.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="card flex items-center gap-4"
                  style={{ padding: "20px 24px" }}
                >
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center shrink-0 rounded-xl"
                    style={{
                      width: 44, height: 44,
                      background: passed ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                    }}
                  >
                    <Trophy style={{
                      width: 20, height: 20,
                      color: passed ? "var(--color-success)" : "var(--color-danger)",
                    }} />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          background: passed ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                          color: passed ? "var(--color-success)" : "var(--color-danger)",
                        }}
                      >
                        {passed ? "PASSED" : "FAILED"}
                      </span>
                      <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                        {new Date(attempt.createdAt).toLocaleDateString("vi-VN")}
                      </span>
                    </div>
                    <p className="text-sm font-semibold">{attempt.score}/{attempt.totalQs} correct</p>

                    {/* Mini bar */}
                    <div style={{
                      marginTop: 8, height: 4, width: "100%",
                      background: "var(--color-border)", borderRadius: 999, overflow: "hidden",
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.6, delay: idx * 0.04 + 0.3 }}
                        style={{
                          height: "100%", borderRadius: 999,
                          background: passed
                            ? "linear-gradient(90deg, var(--color-success), var(--color-neon-green))"
                            : "linear-gradient(90deg, var(--color-danger), #f87171)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Score */}
                  <span
                    className="text-2xl font-extrabold font-display shrink-0"
                    style={{ color: passed ? "var(--color-success)" : "var(--color-danger)" }}
                  >
                    {pct}%
                  </span>
                </motion.div>
              );
            })}
          </div>
        </>
      )}

      <div className="text-center mt-10">
        <Link href="/exam" className="btn btn-primary">
          New Exam <ChevronRight style={{ width: 14, height: 14 }} />
        </Link>
      </div>
    </div>
  );
}
