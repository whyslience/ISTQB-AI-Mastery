'use client';

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronRight, GraduationCap, Cpu, Sparkles, Lock, BookOpenCheck, CheckCircle2, BookOpen, Clock } from "lucide-react";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";
import { useState } from "react";
import { useChapterProgress } from "@/hooks/useChapterProgress";

const courses = [
  { id: 'ctfl', label: 'Foundation (4.0)', icon: BookOpenCheck, active: true },
  { id: 'ai', label: 'CT-AI (v2.0)', icon: Cpu, active: true },
  { id: 'advanced', label: 'Advanced Level', icon: GraduationCap, active: false },
];

export default function SyllabusPage() {
  const [activeTab, setActiveTab] = useState('ctfl');
  const { progress } = useChapterProgress();

  return (
    <div className="flex flex-col items-center px-5 pt-36 pb-32">
      <div className="w-full max-w-4xl">
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
            style={{
              background: "var(--color-accent-soft)",
              color: "var(--color-accent)",
              border: "1px solid var(--color-accent-medium)",
            }}
          >
            <Sparkles style={{ width: 14, height: 14 }} />
            Premium ISTQB Learning Hub
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4"
          >
            Study <span className="gradient-text">Curriculum</span> / Lộ trình <span className="gradient-text">Học tập</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Select your certification track and master the syllabus with our bilingual guides and AI-powered practice.
            <br />
            Chọn lộ trình chứng chỉ của bạn và nắm vững giáo trình với các hướng dẫn song ngữ và trắc nghiệm AI.
          </motion.p>
        </div>

        {/* --- Course Tabs --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 relative">
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => setActiveTab(course.id)}
              disabled={!course.active}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 relative overflow-hidden"
              style={{
                background: activeTab === course.id
                  ? "linear-gradient(135deg, var(--color-accent), var(--color-purple))"
                  : "var(--color-surface-raised)",
                color: activeTab === course.id ? "#fff" : "var(--color-text-secondary)",
                boxShadow: activeTab === course.id ? "var(--shadow-neon)" : "none",
                border: activeTab === course.id ? "2px solid transparent" : "2px solid var(--color-border)",
                opacity: !course.active ? 0.5 : 1,
              }}
            >
              <course.icon style={{ width: 16, height: 16 }} />
              {course.label}
              {!course.active && (
                <span className="ml-1 text-[10px] bg-white/20 px-1.5 py-0.5 rounded-full uppercase tracking-wider">Soon</span>
              )}
            </button>
          ))}
        </div>

        {/* --- Content Area --- */}
        <AnimatePresence mode="wait">
          {activeTab === 'ctfl' ? (
            <motion.div
              key="ctfl"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="mb-4 px-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-accent)]">
                  ISTQB CTFL v4.0 (Active)
                </h3>
              </div>
              {syllabusData.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={`/review/${chapter.id}`}
                    className="card group p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    style={{ borderLeft: "4px solid var(--color-accent)" }}
                  >
                    <div className="flex items-start gap-5">
                      {/* Circular gradient chapter badge */}
                      <div
                        className="flex items-center justify-center rounded-full shrink-0 mt-1 transition-transform group-hover:scale-110"
                        style={{
                          width: 52, height: 52,
                          background: "linear-gradient(135deg, var(--color-accent), var(--color-purple))",
                          color: "#fff",
                          boxShadow: "0 4px 12px var(--color-accent-glow)",
                        }}
                      >
                        <span className="font-black text-xl font-display">{chapter.chapterNumber}</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold font-display mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                          {chapter.titleEn}
                        </h2>
                        <h3 className="text-sm font-semibold opacity-70 mb-2" style={{ color: "var(--color-text-primary)" }}>
                          {chapter.titleVi}
                        </h3>
                        <p className="text-sm line-clamp-1 sm:line-clamp-2 leading-relaxed mb-3" style={{ color: "var(--color-text-muted)" }}>
                          {chapter.descriptionVi}
                        </p>
                        {/* Micro-tags */}
                        <div className="flex flex-wrap gap-2">
                          {chapter.quiz.length > 0 && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                              <BookOpen style={{ width: 9, height: 9 }} />{chapter.quiz.length} questions
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden md:flex flex-col items-end mr-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]">Module {(i + 1).toString().padStart(2, "0")}</span>
                        {progress[chapter.id]?.read ? (
                          <div className="flex items-center gap-1 mt-1 text-[var(--color-success)]">
                            <CheckCircle2 style={{ width: 14, height: 14 }} />
                            <span className="text-xs font-bold">{progress[chapter.id]?.quizScore != null ? `${progress[chapter.id]?.quizScore}%` : 'Read'}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-medium opacity-40 mt-1">Not read</span>
                        )}
                      </div>
                      <ChevronRight className="shrink-0 transition-transform group-hover:translate-x-1" style={{ width: 24, height: 24, color: "var(--color-accent)" }} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : activeTab === "ai" ? (
            <motion.div
              key="ai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 gap-4"
            >
              <div className="mb-4 px-2">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-purple)]">
                  ISTQB Certified Tester AI Testing v2.0 (GA)
                </h3>
                <p className="text-xs mt-2" style={{ color: "var(--color-text-muted)" }}>
                  Bilingual summaries; canonical wording: <code className="text-[11px]">src/content/ISTQB-_CTAI_Syllabus_v2.0_Release.md</code>
                </p>
              </div>
              {ctaiSyllabusData.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link
                    href={`/review/${chapter.id}`}
                    className="card group p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                    style={{ borderLeft: "4px solid var(--color-purple)" }}
                  >
                    <div className="flex items-start gap-5">
                      <div
                        className="flex items-center justify-center rounded-full shrink-0 mt-1 transition-transform group-hover:scale-110"
                        style={{
                          width: 52, height: 52,
                          background: "linear-gradient(135deg, var(--color-purple), #c084fc)",
                          color: "#fff",
                          boxShadow: "0 4px 12px rgba(168,85,247,0.25)",
                        }}
                      >
                        <span className="font-black text-xl font-display">{chapter.chapterNumber}</span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold font-display mb-1 group-hover:text-[var(--color-purple)] transition-colors">
                          {chapter.titleEn}
                        </h2>
                        <h3 className="text-sm font-semibold opacity-70 mb-2" style={{ color: "var(--color-text-primary)" }}>
                          {chapter.titleVi}
                        </h3>
                        <p className="text-sm line-clamp-1 sm:line-clamp-2 leading-relaxed mb-3" style={{ color: "var(--color-text-muted)" }}>
                          {chapter.descriptionVi}
                        </p>
                        {/* CT-AI module tag */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full" style={{ background: "var(--color-purple-soft)", color: "var(--color-purple)" }}>
                          <Cpu style={{ width: 9, height: 9 }} />CT-AI v2.0
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="hidden md:flex flex-col items-end mr-4">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-purple)]">
                          CT-AI {(i + 1).toString().padStart(2, "0")}
                        </span>
                        {progress[chapter.id]?.read ? (
                          <div className="flex items-center gap-1 mt-1 text-[var(--color-success)]">
                            <CheckCircle2 style={{ width: 14, height: 14 }} />
                            <span className="text-xs font-bold">{progress[chapter.id]?.quizScore != null ? `${progress[chapter.id]?.quizScore}%` : 'Read'}</span>
                          </div>
                        ) : (
                          <span className="text-xs font-medium opacity-40 mt-1">Not read</span>
                        )}
                      </div>
                      <ChevronRight
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                        style={{ width: 24, height: 24, color: "var(--color-purple)" }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center justify-center py-20 px-10 card border-dashed border-2 bg-transparent"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div 
                className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6"
                style={{ background: "var(--color-surface-raised)" }}
              >
                <Lock className="opacity-30" style={{ width: 32, height: 32 }} />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Upcoming Knowledge Base
                <br />
                <span className="text-lg opacity-60">Kho Kiến thức Sắp ra mắt</span>
              </h2>
              <p className="text-center max-w-sm mb-8" style={{ color: "var(--color-text-secondary)" }}>
                We are currently processing the Advanced Level syllabus into our bilingual AI-powered format.
                <br /><br />
                Chúng tôi đang xử lý giáo trình Advanced Level sang định dạng song ngữ hỗ trợ bởi AI.
              </p>
              <div className="flex gap-3">
                <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-purple-500/10 text-purple-500 uppercase tracking-widest border border-purple-500/20">
                  In Development
                </span>
                <span className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-blue-500/10 text-blue-500 uppercase tracking-widest border border-blue-500/20">
                  AI Integrated
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
