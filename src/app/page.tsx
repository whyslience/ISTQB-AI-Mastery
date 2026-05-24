'use client';

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles, Brain, List, Languages, Zap, BookOpen, Target, TrendingUp } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

const features = [
  {
    icon: Languages,
    title: "Bilingual Guides",
    titleVi: "Hướng dẫn Song ngữ",
    desc: "Complete ISTQB CTFL 4.0 & CT-AI syllabi in English & Vietnamese side-by-side.",
    descVi: "Toàn bộ giáo trình ISTQB song ngữ Anh-Việt trực quan, dễ ôn tập.",
    color: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
    stat: "12 Chapters",
  },
  {
    icon: Brain,
    title: "Smart Quizzes",
    titleVi: "Trắc nghiệm Thông minh",
    desc: "Instant per-question feedback with bilingual explanations — no batch submit needed.",
    descVi: "Phản hồi tức thì sau mỗi câu hỏi, giải thích song ngữ chi tiết.",
    color: "var(--color-purple)",
    bg: "var(--color-purple-soft)",
    stat: "500+ Questions",
  },
  {
    icon: List,
    title: "Smart Navigation",
    titleVi: "Mục lục Thông minh",
    desc: "Jump between sections via dynamic TOC — scroll-spy tracks your reading progress.",
    descVi: "Tra cứu nhanh qua mục lục tự động — theo dõi tiến độ đọc theo thời gian thực.",
    color: "var(--color-success)",
    bg: "var(--color-success-soft)",
    stat: "2 Cert Tracks",
  },
];

const stats = [
  { icon: BookOpen, value: 500, suffix: "+", label: "Practice Questions", labelVi: "Câu hỏi" },
  { icon: Target,   value: 12,  suffix: "",  label: "Chapters",           labelVi: "Chương" },
  { icon: Zap,      value: 2,   suffix: "",  label: "Cert Tracks",        labelVi: "Chứng chỉ" },
];

function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = to / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function ReadinessRing({ pct }: { pct: number }) {
  const size = 64;
  const stroke = 5;
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = circ * (pct / 100);

  return (
    <div className="relative flex items-center justify-center shrink-0 animate-in fade-in zoom-in duration-500" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)", position: "absolute" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ strokeDasharray: `0 ${circ}` }}
          animate={{ strokeDasharray: `${dash} ${circ}` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <span className="text-sm font-extrabold font-display" style={{ color: "var(--color-accent)" }}>{pct}%</span>
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  const { progress, isLoaded } = useChapterProgress();
  const [readiness, setReadiness] = useState(0);

  useEffect(() => {
    if (!isLoaded) return;
    
    const activeChapters = [
      ...syllabusData.filter(ch => ch.quiz && ch.quiz.length > 0),
      ...ctaiSyllabusData.filter(ch => ch.quiz && ch.quiz.length > 0)
    ];
    const totalActive = activeChapters.length;
    if (totalActive === 0) return;

    let readCount = 0;
    let totalScore = 0;
    let quizCount = 0;

    activeChapters.forEach(ch => {
      const prog = progress[ch.id];
      if (prog) {
        if (prog.read) readCount++;
        if (prog.quizScore != null) {
          totalScore += prog.quizScore;
          quizCount++;
        }
      }
    });

    const readPercentage = (readCount / totalActive) * 100;
    const avgQuizScore = quizCount > 0 ? (totalScore / quizCount) : 0;
    
    const readinessScore = Math.round(readPercentage * 0.4 + avgQuizScore * 0.6);
    setReadiness(readinessScore);
  }, [progress, isLoaded]);

  return (
    <div className="flex flex-col items-center px-5">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative flex flex-col items-center text-center pt-36 pb-16 max-w-4xl w-full">
        {/* Animated mesh background */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25], rotate: [0, 90, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-[700px] h-[700px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 65%)",
              filter: "blur(80px)",
              top: "-120px",
              left: "-15%",
            }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.45, 0.2], rotate: [0, -90, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)",
              filter: "blur(80px)",
              bottom: "-80px",
              right: "-12%",
            }}
          />
        </div>

        {/* Badge with shimmer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="shimmer inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-medium)",
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles style={{ width: 12, height: 12 }} />
            </motion.span>
            ISTQB CTFL v4.0 · CT-AI v2.0 Masterclass
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 font-display"
        >
          Master{" "}
          <span className="gradient-text-animated">ISTQB</span>
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
          Chinh phục chứng chỉ ISTQB với nền tảng học tập song ngữ Anh-Việt.
          Hướng dẫn chi tiết, câu hỏi trắc nghiệm tương tác và phản hồi tức thì.
        </motion.p>

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

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-4 max-w-2xl w-full mb-16"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className="glass-card flex flex-col items-center text-center py-5 px-3"
          >
            <div
              className="flex items-center justify-center rounded-xl mb-2"
              style={{ width: 36, height: 36, background: "var(--color-accent-soft)", color: "var(--color-accent)" }}
            >
              <s.icon style={{ width: 18, height: 18 }} />
            </div>
            <span className="text-2xl font-extrabold font-display" style={{ color: "var(--color-accent)" }}>
              <CountUp to={s.value} suffix={s.suffix} />
            </span>
            <span className="text-xs font-semibold mt-0.5" style={{ color: "var(--color-text-primary)" }}>{s.label}</span>
            <span className="text-[10px] opacity-50">{s.labelVi}</span>
          </div>
        ))}
      </motion.section>

      {/* ── Exam Readiness ────────────────────────────────── */}
      {readiness > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card flex items-center gap-6 max-w-2xl w-full mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
          style={{ padding: "20px 28px" }}
        >
          <ReadinessRing pct={readiness} />
          <div>
            <div className="flex items-center gap-2 mb-0.5">
              <TrendingUp style={{ width: 14, height: 14, color: "var(--color-accent)" }} />
              <span className="text-sm font-bold font-display">Exam Readiness / Sẵn sàng Thi</span>
            </div>
            <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
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
            className="glass-card p-8 group relative overflow-hidden cursor-pointer"
          >
            {/* Glow blob on hover */}
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${f.color.replace('var(--color-accent)', 'rgba(99,102,241,0.15)').replace('var(--color-purple)', 'rgba(168,85,247,0.15)').replace('var(--color-success)', 'rgba(5,150,105,0.12)')}, transparent)`, filter: "blur(24px)" }}
            />
            <div
              className="flex items-center justify-center rounded-2xl mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
              style={{ width: 56, height: 56, background: f.bg, color: f.color }}
            >
              <f.icon style={{ width: 28, height: 28 }} />
            </div>
            <span
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full mb-3"
              style={{ background: f.bg, color: f.color }}
            >
              {f.stat}
            </span>
            <h3 className="text-lg font-bold mb-1 font-display">{f.title}</h3>
            <h4 className="text-xs font-semibold uppercase tracking-wider mb-3 opacity-50">{f.titleVi}</h4>
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
        <span>ISTQB CTFL v4.0 · CT-AI v2.0 Mastery Platform ✦ Bilingual</span>
        <span>Made with ❤️ for the Testing Community</span>
      </footer>
    </div>
  );
}
