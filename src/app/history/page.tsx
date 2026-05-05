'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, ChevronRight, Loader2, BarChart2 } from "lucide-react";
import Link from "next/link";
import type { Attempt } from "@/types";

export default function HistoryPage() {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const res = await fetch("/api/history?userId=user-1");
        const data = await res.json();
        setAttempts(Array.isArray(data) ? data : []);
      } catch {
        console.error("Failed to fetch history");
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
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
        <h1 className="text-3xl font-extrabold tracking-tight mb-1">History</h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Your past exam attempts
        </p>
      </motion.div>

      {/* Stats */}
      {!loading && attempts.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { label: "Total", value: attempts.length },
            { label: "Average", value: `${avgScore}%` },
            {
              label: "Best",
              value: `${Math.round(Math.max(...attempts.map((a) => (a.score / a.totalQs) * 100)))}%`,
            },
          ].map((stat) => (
            <div key={stat.label} className="card text-center" style={{ padding: "20px 12px" }}>
              <p className="text-xl font-extrabold" style={{ color: "var(--color-accent)" }}>
                {stat.value}
              </p>
              <p className="text-xs mt-1 font-medium" style={{ color: "var(--color-text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
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
          </p>
          <Link href="/exam" className="btn btn-primary">Start Exam</Link>
        </div>
      ) : (
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
                    <div
                      style={{
                        height: "100%", borderRadius: 999, width: `${pct}%`,
                        background: passed ? "var(--color-success)" : "var(--color-danger)",
                      }}
                    />
                  </div>
                </div>

                {/* Score */}
                <span className="text-2xl font-extrabold shrink-0">{pct}%</span>
              </motion.div>
            );
          })}
        </div>
      )}

      <div className="text-center mt-10">
        <Link href="/exam" className="btn btn-primary">
          New Exam <ChevronRight style={{ width: 14, height: 14 }} />
        </Link>
      </div>
    </div>
  );
}
