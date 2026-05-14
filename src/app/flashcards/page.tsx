'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCcw, ChevronLeft, ChevronRight, Layers, BookOpen, CheckCheck } from "lucide-react";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

interface Flashcard {
  front: string;      // Term / EN question
  frontSub: string;   // Vietnamese subtitle
  back: string;       // Definition / answer
  backSub?: string;   // EN explanation snippet
  chapter: string;
}

/** Extract term-definition pairs from Q+A format */
function buildFlashcards(): Flashcard[] {
  const cards: Flashcard[] = [];
  const allChapters = [...syllabusData, ...ctaiSyllabusData];

  for (const ch of allChapters) {
    if (!ch.quiz?.length) continue;
    for (const q of ch.quiz) {
      cards.push({
        front: q.questionEn,
        frontSub: q.questionVi,
        back: q.correctEn,
        backSub: q.explanation.slice(0, 180) + (q.explanation.length > 180 ? "…" : ""),
        chapter: `Ch${ch.chapterNumber}: ${ch.titleEn}`,
      });
    }
  }

  // Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

export default function FlashcardsPage() {
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [showVi, setShowVi] = useState(false);
  const [chapterFilter, setChapterFilter] = useState<string>("all");
  const [filtered, setFiltered] = useState<Flashcard[]>([]);

  useEffect(() => {
    const built = buildFlashcards();
    setCards(built);
    setFiltered(built);
  }, []);

  useEffect(() => {
    if (chapterFilter === "all") {
      setFiltered(cards);
    } else {
      setFiltered(cards.filter((c) => c.chapter === chapterFilter));
    }
    setIdx(0);
    setFlipped(false);
    setKnown(new Set());
  }, [chapterFilter, cards]);

  const uniqueChapters = [...new Set(cards.map((c) => c.chapter))];
  const card = filtered[idx];
  const progress = filtered.length > 0 ? Math.round((idx / filtered.length) * 100) : 0;
  const knownCount = known.size;

  const handleNext = () => {
    setFlipped(false);
    setTimeout(() => setIdx((i) => Math.min(i + 1, filtered.length - 1)), 180);
  };

  const handlePrev = () => {
    setFlipped(false);
    setTimeout(() => setIdx((i) => Math.max(i - 1, 0)), 180);
  };

  const markKnown = () => {
    setKnown((prev) => new Set([...prev, idx]));
    handleNext();
  };

  const restart = () => {
    setIdx(0);
    setFlipped(false);
    setKnown(new Set());
  };

  return (
    <div className="px-5 pt-28 pb-20" style={{ maxWidth: 640, margin: "0 auto" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center rounded-xl" style={{ width: 40, height: 40, background: "var(--color-purple-soft)" }}>
            <Layers style={{ width: 20, height: 20, color: "var(--color-purple)" }} />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold font-display">Flashcards</h1>
            <p className="text-xs opacity-60">{filtered.length} cards · click to flip</p>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button
            onClick={() => setShowVi(!showVi)}
            className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
            style={{
              background: showVi ? "var(--color-accent-soft)" : "var(--color-surface-raised)",
              color: showVi ? "var(--color-accent)" : "var(--color-text-muted)",
              border: `1px solid ${showVi ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            VI: {showVi ? "ON" : "OFF"}
          </button>
          <select
            value={chapterFilter}
            onChange={(e) => setChapterFilter(e.target.value)}
            className="text-xs font-medium px-3 py-1.5 rounded-full"
            style={{
              background: "var(--color-surface-raised)",
              color: "var(--color-text-muted)",
              border: "1px solid var(--color-border)",
              outline: "none",
              cursor: "pointer",
            }}
          >
            <option value="all">All Chapters</option>
            {uniqueChapters.map((ch) => (
              <option key={ch} value={ch}>{ch.split(":")[0]}</option>
            ))}
          </select>
          <button onClick={restart} className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
            style={{ background: "var(--color-surface-raised)", color: "var(--color-text-muted)", border: "1px solid var(--color-border)" }}>
            <RotateCcw style={{ width: 11, height: 11, display: "inline", marginRight: 4 }} />Reset
          </button>
        </div>
      </motion.div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[
          { label: "Total", value: filtered.length },
          { label: "Known", value: knownCount, color: "var(--color-success)" },
          { label: "Remaining", value: filtered.length - knownCount, color: "var(--color-accent)" },
        ].map((s) => (
          <div key={s.label} className="glass-card text-center" style={{ padding: "14px 8px" }}>
            <p className="text-xl font-extrabold font-display" style={{ color: s.color || "var(--color-text-primary)" }}>{s.value}</p>
            <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--color-text-muted)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="mb-6" style={{ height: 4, background: "var(--color-border)", borderRadius: 999, overflow: "hidden" }}>
        <motion.div
          style={{ height: "100%", background: "linear-gradient(90deg, var(--color-accent), var(--color-purple))", borderRadius: 999 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Flashcard */}
      {card && (
        <div style={{ perspective: "1200px" }} className="mb-6">
          <motion.div
            onClick={() => setFlipped((f) => !f)}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
              cursor: "pointer",
              position: "relative",
              minHeight: 280,
            }}
          >
            {/* Front */}
            <div
              className="card absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                padding: "36px 28px",
                background: "var(--color-surface-raised)",
              }}
            >
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full" style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)" }}>
                  <BookOpen style={{ width: 10, height: 10, display: "inline", marginRight: 4 }} />
                  {card.chapter.split(":")[0]}
                </span>
              </div>
              <h2 className="text-lg font-semibold leading-relaxed mb-2">{card.front}</h2>
              {showVi && card.frontSub && (
                <p className="text-sm italic opacity-60">{card.frontSub}</p>
              )}
              <p className="text-xs mt-5 opacity-40">Tap to flip · Nhấn để lật</p>
            </div>

            {/* Back */}
            <div
              className="card absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
                padding: "36px 28px",
                background: "var(--color-accent-soft)",
                borderColor: "var(--color-accent)",
              }}
            >
              <h2 className="text-2xl font-bold font-display mb-4" style={{ color: "var(--color-accent)" }}>
                {card.back}
              </h2>
              {card.backSub && (
                <p className="text-xs leading-relaxed opacity-80" style={{ color: "var(--color-text-secondary)" }}>
                  {card.backSub}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3">
        <button
          disabled={idx === 0}
          onClick={handlePrev}
          className="btn btn-secondary"
          style={{ opacity: idx === 0 ? 0.3 : 1 }}
        >
          <ChevronLeft style={{ width: 16, height: 16 }} />
        </button>

        {flipped && (
          <motion.button
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            onClick={markKnown}
            className="btn btn-primary flex items-center gap-1.5"
          >
            <CheckCheck style={{ width: 14, height: 14 }} />
            Got it! / Biết rồi
          </motion.button>
        )}

        <span className="text-xs font-bold" style={{ color: "var(--color-text-muted)" }}>
          {idx + 1} / {filtered.length}
        </span>

        <button
          disabled={idx >= filtered.length - 1}
          onClick={handleNext}
          className="btn btn-secondary"
          style={{ opacity: idx >= filtered.length - 1 ? 0.3 : 1 }}
        >
          <ChevronRight style={{ width: 16, height: 16 }} />
        </button>
      </div>

      {/* Done state */}
      <AnimatePresence>
        {idx >= filtered.length - 1 && flipped && knownCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card text-center mt-8"
            style={{ padding: "28px 24px" }}
          >
            <p className="text-lg font-bold font-display mb-2">
              🎉 {knownCount}/{filtered.length} cards known!
            </p>
            <p className="text-xs mb-4" style={{ color: "var(--color-text-muted)" }}>
              {knownCount === filtered.length ? "Hoàn hảo! Perfect score!" : `Còn ${filtered.length - knownCount} thẻ cần ôn.`}
            </p>
            <button onClick={restart} className="btn btn-primary">
              <RotateCcw style={{ width: 14, height: 14 }} /> Restart
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
