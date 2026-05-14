'use client';

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, BookOpen, Brain, ChevronRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

interface SearchResult {
  type: "chapter" | "question";
  id: string;
  title: string;
  subtitle: string;
  href: string;
  chapter: string;
  snippet?: string;
}

/** Pre-build search index from syllabus + question bank */
function buildSearchIndex(): SearchResult[] {
  const results: SearchResult[] = [];

  for (const ch of [...syllabusData, ...ctaiSyllabusData]) {
    // Chapter entry
    results.push({
      type: "chapter",
      id: ch.id,
      title: ch.titleEn,
      subtitle: ch.titleVi,
      href: `/review/${ch.id}`,
      chapter: `Ch${ch.chapterNumber}`,
      snippet: ch.descriptionEn,
    });

    // Question entries
    if (ch.quiz) {
      ch.quiz.forEach((q, i) => {
        results.push({
          type: "question",
          id: `${ch.id}:${i}`,
          title: q.questionEn,
          subtitle: q.questionVi,
          href: `/review/${ch.id}#practice-quiz`,
          chapter: `Ch${ch.chapterNumber}: ${ch.titleEn}`,
          snippet: q.correctEn,
        });
      });
    }
  }

  return results;
}

const searchIndex = buildSearchIndex();

function highlight(text: string, query: string): React.ReactElement {
  if (!query.trim()) return <>{text}</>;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} style={{ background: "var(--color-accent-soft)", color: "var(--color-accent)", borderRadius: 3, padding: "0 2px" }}>
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [filter, setFilter] = useState<"all" | "chapter" | "question">("all");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const runSearch = useCallback((q: string, f: typeof filter) => {
    if (!q.trim()) { setResults([]); return; }
    setIsSearching(true);

    const lower = q.toLowerCase();
    const filtered = searchIndex
      .filter((r) => {
        if (f !== "all" && r.type !== f) return false;
        return (
          r.title.toLowerCase().includes(lower) ||
          r.subtitle.toLowerCase().includes(lower) ||
          r.snippet?.toLowerCase().includes(lower)
        );
      })
      .slice(0, 40);

    setResults(filtered);
    setIsSearching(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => runSearch(query, filter), 150);
    return () => clearTimeout(timer);
  }, [query, filter, runSearch]);

  const chapterCount = results.filter((r) => r.type === "chapter").length;
  const questionCount = results.filter((r) => r.type === "question").length;

  return (
    <div className="px-5 pt-28 pb-20" style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
        <h1 className="text-3xl font-extrabold font-display mb-1">
          Global Search
          <br />
          <span className="text-base opacity-60 font-sans">Tìm kiếm Toàn hệ thống</span>
        </h1>
        <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
          Search through {syllabusData.length + ctaiSyllabusData.length} chapters and {searchIndex.filter(r => r.type === "question").length} questions
        </p>
      </motion.div>

      {/* Search input */}
      <div
        className="relative mb-4"
        style={{
          background: "var(--color-surface-raised)",
          border: "2px solid var(--color-border)",
          borderRadius: 16,
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => {
          (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-accent)";
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            (e.currentTarget as HTMLDivElement).style.borderColor = "var(--color-border)";
          }
        }}
      >
        <div className="flex items-center px-4 py-3 gap-3">
          {isSearching ? (
            <Loader2 className="animate-spin shrink-0" style={{ width: 18, height: 18, color: "var(--color-accent)" }} />
          ) : (
            <Search className="shrink-0" style={{ width: 18, height: 18, color: "var(--color-text-muted)" }} />
          )}
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search chapters, questions, terms… / Tìm kiếm chương, câu hỏi, thuật ngữ…"
            className="flex-1 text-sm bg-transparent outline-none"
            style={{ color: "var(--color-text-primary)" }}
          />
          {query && (
            <button onClick={() => { setQuery(""); setResults([]); inputRef.current?.focus(); }}>
              <X style={{ width: 16, height: 16, color: "var(--color-text-muted)" }} />
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6">
        {(["all", "chapter", "question"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="text-xs font-bold px-3 py-1.5 rounded-full transition-all"
            style={{
              background: filter === f ? "linear-gradient(135deg, var(--color-accent), var(--color-purple))" : "var(--color-surface-raised)",
              color: filter === f ? "#fff" : "var(--color-text-muted)",
              border: filter === f ? "none" : "1px solid var(--color-border)",
            }}
          >
            {f === "all" ? "All" : f === "chapter" ? `📖 Chapters (${chapterCount})` : `❓ Questions (${questionCount})`}
          </button>
        ))}
      </div>

      {/* Empty state */}
      {!query && (
        <div className="text-center py-16">
          <Search style={{ width: 40, height: 40, margin: "0 auto 12px", color: "var(--color-text-muted)", opacity: 0.3 }} />
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Type to search across all ISTQB content
          </p>
          <p className="text-xs opacity-60 mt-1">Nhập để tìm kiếm trong toàn bộ nội dung ISTQB</p>
        </div>
      )}

      {/* No results */}
      {query && results.length === 0 && !isSearching && (
        <div className="text-center py-16">
          <p className="font-bold text-lg mb-1">No results for "{query}"</p>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>Không tìm thấy kết quả. Thử từ khóa khác.</p>
        </div>
      )}

      {/* Results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-2"
          >
            {/* Chapters section */}
            {filter !== "question" && results.filter(r => r.type === "chapter").length > 0 && (
              <div className="mb-2">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 px-1" style={{ color: "var(--color-text-muted)" }}>
                  Chapters · Chương
                </p>
                {results.filter(r => r.type === "chapter").map((r, i) => (
                  <motion.div key={r.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                    <Link
                      href={r.href}
                      className="card flex items-center gap-4 mb-2 group hover:-translate-y-0.5 transition-all duration-200"
                      style={{ padding: "16px 20px" }}
                    >
                      <div className="flex items-center justify-center shrink-0 rounded-xl" style={{ width: 36, height: 36, background: "var(--color-accent-soft)" }}>
                        <BookOpen style={{ width: 16, height: 16, color: "var(--color-accent)" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "var(--color-accent)" }}>{r.chapter}</span>
                        <p className="text-sm font-semibold line-clamp-1 group-hover:text-[var(--color-accent)] transition-colors">
                          {highlight(r.title, query)}
                        </p>
                        <p className="text-xs opacity-60 line-clamp-1">{highlight(r.subtitle, query)}</p>
                      </div>
                      <ChevronRight style={{ width: 16, height: 16, color: "var(--color-text-muted)", flexShrink: 0 }} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Questions section */}
            {filter !== "chapter" && results.filter(r => r.type === "question").length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 px-1" style={{ color: "var(--color-text-muted)" }}>
                  Questions · Câu hỏi
                </p>
                {results.filter(r => r.type === "question").map((r, i) => (
                  <motion.div key={r.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.02 }}>
                    <Link
                      href={r.href}
                      className="card flex items-start gap-4 mb-2 group hover:-translate-y-0.5 transition-all duration-200"
                      style={{ padding: "14px 20px" }}
                    >
                      <div className="flex items-center justify-center shrink-0 rounded-xl mt-0.5" style={{ width: 32, height: 32, background: "var(--color-purple-soft)" }}>
                        <Brain style={{ width: 14, height: 14, color: "var(--color-purple)" }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold" style={{ color: "var(--color-purple)" }}>{r.chapter}</span>
                        <p className="text-sm font-medium line-clamp-2 mt-0.5 group-hover:text-[var(--color-accent)] transition-colors">
                          {highlight(r.title, query)}
                        </p>
                        {r.snippet && (
                          <p className="text-xs mt-1 opacity-60 line-clamp-1">
                            ✓ {highlight(r.snippet, query)}
                          </p>
                        )}
                      </div>
                      <ChevronRight style={{ width: 14, height: 14, color: "var(--color-text-muted)", flexShrink: 0, marginTop: 2 }} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
