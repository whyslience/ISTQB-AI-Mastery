'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, ChevronRight } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: Heading[] }) {
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
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar (Fixed on right) */}
      <div className="hidden xl:block fixed left-10 top-40 w-64 max-h-[calc(100vh-200px)] overflow-y-auto">
        <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-[var(--color-text-muted)] flex items-center gap-2">
          <List size={14} /> Contents / Mục lục
        </h4>
        <nav className="flex flex-col gap-1 border-l border-[var(--color-border)]">
          {headings.map((heading) => (
            <button
              key={heading.id}
              onClick={() => scrollToSection(heading.id)}
              className={`text-left text-sm py-1.5 px-4 border-l-2 transition-all duration-200 -ml-[1.5px] ${
                activeId === heading.id
                  ? 'border-[var(--color-accent)] text-[var(--color-accent)] font-semibold bg-[var(--color-accent-soft)] rounded-r-md'
                  : 'border-transparent text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-hover)]'
              }`}
              style={{
                paddingLeft: `${heading.level * 12}px`
              }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile Floating Menu */}
      <div className="xl:hidden fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full shadow-2xl flex items-center justify-center transition-all active:scale-90"
          style={{ 
            background: 'var(--color-accent)', 
            color: 'white',
            boxShadow: '0 10px 25px -5px var(--color-accent)'
          }}
        >
          {isOpen ? <X size={24} /> : <List size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-16 right-0 w-72 max-h-[60vh] overflow-y-auto rounded-2xl p-4 shadow-2xl"
              style={{ 
                background: 'var(--color-surface-raised)',
                border: '1px solid var(--color-border)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-[var(--color-text-muted)]">
                Jump to section
              </h4>
              <div className="flex flex-col gap-2">
                {headings.map((heading) => (
                  <button
                    key={heading.id}
                    onClick={() => scrollToSection(heading.id)}
                    className="flex items-center gap-2 text-left text-sm py-2 px-3 rounded-lg hover:bg-[var(--color-surface-sunken)] transition-colors"
                  >
                    <ChevronRight size={14} className={activeId === heading.id ? 'text-[var(--color-accent)]' : 'text-transparent'} />
                    <span className={activeId === heading.id ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--color-text-primary)]'}>
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
