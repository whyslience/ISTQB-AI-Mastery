'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles, BookOpen, Brain, List, Languages } from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Bilingual Guides",
    titleVi: "Hướng dẫn Song ngữ",
    desc: "Complete ISTQB CTFL 4.0 syllabus in English & Vietnamese side-by-side.",
    descVi: "Toàn bộ giáo trình ISTQB 4.0 trình bày song ngữ Anh-Việt trực quan.",
    color: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
  },
  {
    icon: Brain,
    title: "AI-Powered Quizzes",
    titleVi: "Trắc nghiệm AI",
    desc: "Interactive mini-quizzes at the end of every chapter with detailed feedback.",
    descVi: "Bài tập trắc nghiệm cuối mỗi chương với giải thích chi tiết từ chuyên gia.",
    color: "var(--color-purple)",
    bg: "var(--color-purple-soft)",
  },
  {
    icon: List,
    title: "Smart Navigation",
    titleVi: "Mục lục Thông minh",
    desc: "Quickly jump between sections with our dynamic Table of Contents.",
    descVi: "Dễ dàng tra cứu kiến thức với hệ thống mục lục thông minh.",
    color: "var(--color-success)",
    bg: "var(--color-success-soft)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <div className="flex flex-col items-center px-5">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="flex flex-col items-center text-center pt-36 pb-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-medium)",
            }}
          >
            <Sparkles style={{ width: 12, height: 12 }} />
            ISTQB CTFL v4.0 Masterclass
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
        >
          Master <span className="gradient-text">ISTQB</span> 4.0
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl opacity-90">Bilingual Study Platform</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-relaxed mb-10 max-w-2xl"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Master the ISTQB certification with the most modern bilingual English-Vietnamese study platform.
          Detailed study guides, in-depth terminology explanations, and interactive practice quizzes.
          <br /><br />
          Chinh phục chứng chỉ ISTQB với nền tảng học tập song ngữ Anh-Việt hiện đại nhất.
          Hệ thống hướng dẫn ôn tập chi tiết, giải thích thuật ngữ chuyên sâu và bộ câu hỏi trắc nghiệm tương tác.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/review" className="btn btn-primary" style={{ padding: "16px 40px", fontSize: 16 }}>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold flex items-center gap-2">
                Start Learning <ChevronRight style={{ width: 14, height: 14 }} />
              </span>
              <span className="text-[10px] opacity-80">Bắt đầu Học</span>
            </div>
          </Link>
          <Link href="/exam" className="btn btn-secondary" style={{ padding: "16px 40px", fontSize: 16 }}>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-bold">Practice Exam</span>
              <span className="text-[10px] opacity-80">Luyện Đề</span>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full pb-32">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp as any}
            className="card p-8 group cursor-default relative overflow-hidden"
          >
            <div
              className="flex items-center justify-center rounded-2xl mb-6 transition-transform duration-300 group-hover:scale-110"
              style={{
                width: 56,
                height: 56,
                background: f.bg,
                color: f.color,
              }}
            >
              <f.icon style={{ width: 28, height: 28 }} />
            </div>
            <h3 className="text-lg font-bold mb-1">{f.title}</h3>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-60">{f.titleVi}</h4>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-text-primary)" }}>
              {f.desc}
            </p>
            <p className="text-xs italic leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {f.descVi}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer
        className="pb-10 text-xs tracking-widest uppercase flex flex-col items-center gap-2"
        style={{ color: "var(--color-text-muted)" }}
      >
        <span>ISTQB CTFL v4.0 Mastery Platform ✦ Bilingual Edition</span>
        <span>Made with ❤️ for the Testing Community</span>
      </footer>
    </div>
  );
}
