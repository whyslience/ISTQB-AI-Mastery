'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, ChevronRight, List, X } from 'lucide-react';

export type ChapterNavItem = {
  id: string;
  chapterNumber: number;
  titleEn: string;
  titleVi: string;
};

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
  chapters?: ChapterNavItem[];
  currentChapterId?: string;
}

function ChapterNavList({
  chapters,
  currentChapterId,
  compact = false,
  onNavigate,
}: {
  chapters: ChapterNavItem[];
  currentChapterId?: string;
  compact?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <nav className="flex flex-col gap-0.5">
      {chapters.map((ch) => {
        const active = ch.id === currentChapterId;
        return (
          <Link
            key={ch.id}
            href={`/review/${ch.id}`}
            onClick={onNavigate}
            className={`text-left rounded-lg py-2 px-3 text-sm transition-all duration-200 border ${
              active
                ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-semibold'
                : 'border-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <span className="font-mono text-[11px] opacity-70 tabular-nums">
              {ch.chapterNumber}.
            </span>{' '}
            <span className={compact ? 'line-clamp-2' : ''}>{ch.titleEn}</span>
          </Link>
        );
      })}
    </nav>
  );
}

function PageHeadingsNav({
  headings,
  activeId,
  onPick,
}: {
  headings: Heading[];
  activeId: string;
  onPick: (id: string) => void;
}) {
  return (
    <nav className="flex flex-col gap-1 border-l border-[var(--color-border)]">
      {headings.map((heading) => (
        <button
          key={heading.id}
          type="button"
          onClick={() => onPick(heading.id)}
          className={`text-left text-sm py-1.5 px-3 border-l-2 transition-all duration-200 -ml-[1.5px] ${
            activeId === heading.id
              ? 'border-[var(--color-accent)] text-[var(--color-accent)] font-semibold bg-[var(--color-accent-soft)] rounded-r-md'
              : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border)]'
          }`}
          style={{ paddingLeft: `${Math.min(heading.level, 4) * 10 + 8}px` }}
        >
          <span className="line-clamp-4 break-words">{heading.text}</span>
        </button>
      ))}
    </nav>
  );
}

const DESKTOP_SIDEBAR_CLASS =
  'hidden lg:block fixed top-32 z-30 w-52 xl:w-56 max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)]/95 backdrop-blur-sm p-3 shadow-[var(--shadow-card)]';

export default function TableOfContents({
  headings,
  chapters,
  currentChapterId,
}: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  const chapterList = chapters ?? [];

  return (
    <>
      {/* Desktop: chapters — left */}
      {chapterList.length > 0 && (
        <div className={`${DESKTOP_SIDEBAR_CLASS} left-3 xl:left-6`}>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--color-text-muted)] flex items-center gap-2 px-1">
            <BookOpen size={14} className="shrink-0 text-[var(--color-accent)]" />
            Chapters / Chương
          </h4>
          <ChapterNavList
            chapters={chapterList}
            currentChapterId={currentChapterId}
          />
        </div>
      )}

      {/* Desktop: this page — right */}
      <div className={`${DESKTOP_SIDEBAR_CLASS} right-3 xl:right-6`}>
        <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--color-text-muted)] flex items-center gap-2 px-1">
          <List size={14} className="shrink-0 text-[var(--color-accent)]" />
          On this page / Mục lục trang
        </h4>
        <PageHeadingsNav
          headings={headings}
          activeId={activeId}
          onPick={scrollToSection}
        />
      </div>

      {/* Mobile / small tablet: FAB + sheet — with iOS safe-area insets */}
      <div
        className="lg:hidden fixed z-50"
        style={{
          bottom: "calc(1.5rem + env(safe-area-inset-bottom, 0px))",
          right: "max(1rem, env(safe-area-inset-right, 1rem))",
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-90"
          style={{
            background: 'var(--color-accent)',
            color: 'white',
            boxShadow: '0 10px 25px -5px var(--color-accent)',
          }}
          aria-expanded={isOpen}
          aria-label="Open on-page table of contents"
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 w-[min(22rem,calc(100vw-2rem))] max-h-[70vh] overflow-y-auto rounded-2xl p-4 shadow-2xl"
              style={{
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3 text-[var(--color-text-muted)] flex items-center gap-2">
                <List size={14} />
                On this page / Mục lục trang
              </h4>
              <div className="flex flex-col gap-1">
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    type="button"
                    onClick={() => scrollToSection(heading.id)}
                    className="flex items-start gap-2 text-left text-sm py-2 px-3 rounded-lg hover:bg-[var(--color-surface-sunken)] transition-colors"
                  >
                    <ChevronRight
                      size={14}
                      className={`shrink-0 mt-0.5 ${activeId === heading.id ? 'text-[var(--color-accent)]' : 'text-transparent'}`}
                    />
                    <span
                      className={
                        activeId === heading.id
                          ? 'text-[var(--color-accent)] font-semibold'
                          : 'text-[var(--color-text-primary)]'
                      }
                    >
                      {heading.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
