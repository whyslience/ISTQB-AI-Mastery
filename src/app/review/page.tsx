'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, ChevronRight, GraduationCap } from "lucide-react";
import { syllabusData } from "@/data/syllabus";

export default function ReviewPage() {
  return (
    <div className="flex flex-col items-center px-5 pt-36 pb-20">
      <div className="w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
          style={{
            background: "var(--color-accent-soft)",
            color: "var(--color-accent)",
            border: "1px solid var(--color-accent-medium)",
          }}
        >
          <GraduationCap style={{ width: 14, height: 14 }} />
          ISTQB CTFL v4.0 Masterclass
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold tracking-tight mb-4"
        >
          Course <span className="gradient-text">Curriculum</span> / Lộ trình <span className="gradient-text">Học tập</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-base mb-10"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Master the official ISTQB CTFL 4.0 syllabus with our bilingual study guides. 
          Each chapter includes teacher advice and a mini-quiz to test your knowledge.
          <br />
          <span className="text-sm opacity-80 mt-2 block italic">
            Chinh phục giáo trình ISTQB CTFL 4.0 với hướng dẫn học tập song ngữ. 
            Mỗi chương bao gồm lời khuyên từ giảng viên và bài trắc nghiệm ngắn để kiểm tra kiến thức.
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 gap-4"
        >
          {syllabusData.map((chapter) => (
            <Link 
              key={chapter.id}
              href={`/review/${chapter.id}`} 
              className="card group p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-200 hover:scale-[1.02]"
              style={{ borderLeft: "4px solid var(--color-accent)" }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="flex items-center justify-center rounded-xl shrink-0 mt-1"
                  style={{ width: 48, height: 48, background: "var(--color-surface-raised)", color: "var(--color-text-primary)" }}
                >
                  <span className="font-bold text-lg">{chapter.chapterNumber}</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {chapter.titleEn}
                  </h2>
                  <h3 className="text-sm font-medium mb-2" style={{ color: "var(--color-text-primary)" }}>
                    {chapter.titleVi}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: "var(--color-text-muted)" }}>
                    {chapter.descriptionVi}
                  </p>
                </div>
              </div>
              <ChevronRight className="hidden sm:block shrink-0" style={{ width: 20, height: 20, color: "var(--color-text-muted)" }} />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
