'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles, BookOpen, Brain, BarChart3 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Smart Questions",
    desc: "AI generates targeted questions from the official ISTQB CTFL 4.0 syllabus.",
    color: "var(--color-accent)",
    bg: "var(--color-accent-soft)",
  },
  {
    icon: Brain,
    title: "Vietnamese Feedback",
    desc: "Get detailed explanations in Vietnamese when you answer incorrectly.",
    color: "var(--color-purple)",
    bg: "var(--color-purple-soft)",
  },
  {
    icon: BarChart3,
    title: "Track Progress",
    desc: "Review your past attempts, average scores, and improvement over time.",
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
      <section className="flex flex-col items-center text-center pt-36 pb-20 max-w-2xl">
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
            Powered by Gemini AI
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] mb-6"
        >
          Pass your{" "}
          <span className="gradient-text">ISTQB</span>
          <br />
          with confidence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg leading-relaxed mb-10 max-w-lg"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Practice with AI-generated questions from the official syllabus.
          Instant scoring, detailed explanations in Vietnamese, and real exam simulation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <Link href="/exam" className="btn btn-primary" style={{ padding: "14px 32px", fontSize: 15 }}>
            Start Practice
            <ChevronRight style={{ width: 16, height: 16 }} />
          </Link>
          <Link href="/history" className="btn btn-secondary" style={{ padding: "14px 32px", fontSize: 15 }}>
            View Progress
          </Link>
        </motion.div>
      </section>

      {/* ── Features ──────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl w-full pb-24">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp as any}
            className="card p-7 group cursor-default"
          >
            <div
              className="flex items-center justify-center rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110"
              style={{
                width: 48,
                height: 48,
                background: f.bg,
                color: f.color,
              }}
            >
              <f.icon style={{ width: 22, height: 22 }} />
            </div>
            <h3 className="text-base font-bold mb-2">{f.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              {f.desc}
            </p>
          </motion.div>
        ))}
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer
        className="pb-10 text-xs tracking-widest uppercase"
        style={{ color: "var(--color-text-muted)" }}
      >
        Built for ISTQB aspirants ✦ Free & Open
      </footer>
    </div>
  );
}
