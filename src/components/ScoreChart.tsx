'use client';

import { motion } from "framer-motion";

interface ChapterScore {
  chapterId: string;
  chapterLabel: string;
  score: number; // 0-100
}

export default function ScoreChart({ data }: { data: ChapterScore[] }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="card mb-8" style={{ padding: "24px 28px" }}>
      <h3 className="text-sm font-bold uppercase tracking-widest mb-6" style={{ color: "var(--color-text-muted)" }}>
        Score by Chapter / Điểm theo Chương
      </h3>
      <div className="flex flex-col gap-3">
        {data.map((item, i) => {
          const isWeak = item.score < 50;
          const barColor = item.score >= 65
            ? "linear-gradient(90deg, var(--color-success), var(--color-neon-green))"
            : item.score >= 50
              ? "linear-gradient(90deg, var(--color-warning), var(--color-neon-amber))"
              : "linear-gradient(90deg, var(--color-danger), #f87171)";

          return (
            <div key={item.chapterId}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {item.chapterLabel}
                </span>
                <div className="flex items-center gap-2">
                  {isWeak && (
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(245,158,11,0.1)", color: "var(--color-neon-amber)" }}
                    >
                      Cần ôn lại
                    </span>
                  )}
                  <span
                    className="text-xs font-bold"
                    style={{ color: item.score >= 65 ? "var(--color-success)" : item.score >= 50 ? "var(--color-warning)" : "var(--color-danger)" }}
                  >
                    {item.score}%
                  </span>
                </div>
              </div>
              <div
                style={{
                  height: 6, width: "100%",
                  background: "var(--color-border)", borderRadius: 999, overflow: "hidden",
                }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 0.8, delay: i * 0.06, ease: "easeOut" }}
                  style={{
                    height: "100%",
                    background: barColor,
                    borderRadius: 999,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
