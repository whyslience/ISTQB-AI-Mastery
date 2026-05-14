'use client';

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles, Brain, List, Languages, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const features = [
  {
    icon: Languages,
    title: "Bilingual Guides",
    titleVi: "Hướng dẫn Song ngữ",
    desc: "Complete ISTQB CTFL 4.0 syllabus in English & Vietnamese side-by-side.",
    descVi: "Toàn bộ giáo trình ISTQB 4.0 trình bày song ngữ Anh-Việt trực quan.",
    color: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    gradient: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  {
    icon: Brain,
    title: "AI-Powered Quizzes",
    titleVi: "Trắc nghiệm AI",
    desc: "Interactive mini-quizzes at the end of every chapter with detailed feedback.",
    descVi: "Bài tập trắc nghiệm cuối mỗi chương với giải thích chi tiết từ chuyên gia.",
    color: "var(--color-purple)",
    bg: "var(--color-purple-soft)",
    gradient: "linear-gradient(135deg, #a855f7, #c084fc)",
  },
  {
    icon: List,
    title: "Smart Navigation",
    titleVi: "Mục lục Thông minh",
    desc: "Quickly jump between sections with our dynamic Table of Contents.",
    descVi: "Dễ dàng tra cứu kiến thức với hệ thống mục lục thông minh.",
    color: "var(--color-success)",
    bg: "var(--color-success-soft)",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Questions", labelVi: "Câu hỏi" },
  { value: 12, suffix: "", label: "Chapters", labelVi: "Chương" },
  { value: 2, suffix: "", label: "Cert. Tracks", labelVi: "Chứng chỉ" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ReadinessRing({ pct }: { pct: number }) {
  const size = 72;
  const stroke = 5;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);
  const color = pct >= 70 ? "var(--color-neon-green)" : pct >= 40 ? "var(--color-warning)" : "var(--color-accent)";
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke={color} strokeWidth={stroke} strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: `${dash} ${circ}` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        />
      </svg>
      <div className="flex flex-col items-center z-10">
        <span className="text-sm font-extrabold font-display" style={{ color }}>{pct}%</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [readiness, setReadiness] = useState(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("istqb_chapter_progress");
      if (!stored) return;
      const progress = JSON.parse(stored);
      const chapters = ["chapter-1","chapter-2","chapter-3","chapter-4","chapter-5","chapter-6"];
      const readCount = chapters.filter((id) => progress[id]?.read).length;
      const scores = chapters.map((id) => progress[id]?.quizScore ?? 0);
      const avgScore = scores.reduce((a, b) => a + b, 0) / chapters.length;
      const readPct = (readCount / chapters.length) * 100;
      setReadiness(Math.round(readPct * 0.5 + avgScore * 0.5));
    } catch { /* ignore */ }
  }, []);

  return (
    <div className="flex flex-col items-center px-5">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center text-center pt-36 pb-20 max-w-4xl w-full">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none flex justify-center items-center">
          <motion.div
            className="mesh-blob absolute rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              width: "60vw",
              height: "60vw",
              maxWidth: 700,
              background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)",
              filter: "blur(60px)",
              top: "-80px",
              left: "-10%",
            }}
          />
          <motion.div
            className="mesh-blob absolute rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 5 }}
            style={{
              width: "50vw",
              height: "50vw",
              maxWidth: 600,
              background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)",
              filter: "blur(60px)",
              bottom: "-80px",
              right: "-10%",
            }}
          />
        </div>

        {/* Shimmer Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold relative overflow-hidden"
            style={{
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-medium)",
            }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 2.5s linear infinite",
              }}
            />
            <Sparkles
              style={{
                width: 12,
                height: 12,
                animation: "pulse-ring 2s ease infinite",
              }}
            />
            ISTQB CTFL v4.0 Masterclass
          </span>
        </motion.div>

        {/* Animated Gradient Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display"
        >
          Master{" "}
          <span className="gradient-text-animated">ISTQB</span>{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #6366f1, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 0 12px rgba(99,102,241,0.3))",
            }}
          >
            4.0
          </span>
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

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/review" className="btn btn-primary" style={{ padding: "16px 40px", fontSize: 16 }}>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-bold flex items-center gap-2">
                  Start Learning <ChevronRight style={{ width: 14, height: 14 }} />
                </span>
                <span className="text-[10px] opacity-80">Bắt đầu Học</span>
              </div>
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/exam" className="btn btn-secondary" style={{ padding: "16px 40px", fontSize: 16 }}>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm font-bold">Practice Exam</span>
                <span className="text-[10px] opacity-80">Luyện Đề</span>
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 gap-4 max-w-2xl w-full mb-16"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-card text-center"
            style={{ padding: "24px 16px" }}
          >
            <div
              className="text-3xl font-extrabold font-display mb-1 gradient-text-animated"
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-xs font-semibold" style={{ color: "var(--color-text-muted)" }}>
              {stat.label}
            </p>
            <p className="text-[10px] opacity-60" style={{ color: "var(--color-text-muted)" }}>
              {stat.labelVi}
            </p>
          </div>
        ))}
      </motion.section>

      {/* ── Exam Readiness ────────────────────────────────── */}
      {readiness > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card flex items-center gap-6 max-w-2xl w-full mb-10"
          style={{ padding: "20px 28px" }}
        >
          <ReadinessRing pct={readiness} />
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <TrendingUp style={{ width: 14, height: 14, color: "var(--color-accent)" }} />
              <span className="text-sm font-bold font-display">Exam Readiness / Sẵn sàng Thi</span>
            </div>
            <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
              {readiness >= 70
                ? "You're on track! Keep practicing to stay sharp. · Bạn đang trên đà tốt!"
                : readiness >= 40
                  ? "Good progress — keep reading and quizzing. · Đang tiến triển tốt!"
                  : "Start reading chapters and taking quizzes to improve. · Hãy bắt đầu đọc và làm quiz!"}
            </p>
          </div>
        </motion.div>
      )}

      {/* ── Features ──────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full pb-32">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.02, translateY: -8 }}
            viewport={{ once: true }}
            variants={fadeUp as any}
            className="glass-card p-8 group relative overflow-hidden"
            style={{ cursor: "pointer" }}
          >
            {/* Subtle gradient glow on hover */}
            <div
              className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${f.color}18 0%, transparent 70%)`,
              }}
            />
            {/* Icon */}
            <div
              className="flex items-center justify-center rounded-2xl mb-6 transition-all duration-300 group-hover:scale-110 relative"
              style={{
                width: 56,
                height: 56,
                background: f.bg,
                color: f.color,
                boxShadow: `0 0 0 0 ${f.color}`,
              }}
            >
              {/* Gradient border ring on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: f.gradient,
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  padding: "1.5px",
                  borderRadius: "inherit",
                }}
              />
              <f.icon style={{ width: 28, height: 28 }} />
            </div>
            <h3 className="text-lg font-bold font-display mb-1">{f.title}</h3>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-60">{f.titleVi}</h4>
            <p className="text-sm leading-relaxed mb-2" style={{ color: "var(--color-text-primary)" }}>
              {f.desc}
            </p>
            <p className="text-xs italic leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {f.descVi}
            </p>
            {/* Quick stat tag */}
            {i === 0 && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                <BookOpen style={{ width: 10, height: 10 }} /> 12 chapters
              </div>
            )}
            {i === 1 && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "var(--color-purple-soft)", color: "var(--color-purple)" }}>
                <Brain style={{ width: 10, height: 10 }} /> 500+ questions
              </div>
            )}
            {i === 2 && (
              <div className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold" style={{ background: "var(--color-success-soft)", color: "var(--color-success)" }}>
                <GraduationCap style={{ width: 10, height: 10 }} /> 2 cert. tracks
              </div>
            )}
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
