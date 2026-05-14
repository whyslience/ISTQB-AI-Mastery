'use client';

import { useState, useEffect, useCallback } from 'react';

export type ChapterProgress = {
  read: boolean;
  quizScore: number | null;
  readAt: string | null;
};

export type ProgressMap = Record<string, ChapterProgress>;

const STORAGE_KEY = 'istqb_chapter_progress';

export function useChapterProgress() {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setProgress(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load chapter progress', e);
    }
    setIsLoaded(true);
  }, []);

  const markRead = useCallback((chapterId: string) => {
    setProgress((prev) => {
      const current = prev[chapterId] || { read: false, quizScore: null, readAt: null };
      if (current.read) return prev;
      
      const updated = {
        ...prev,
        [chapterId]: {
          ...current,
          read: true,
          readAt: new Date().toISOString(),
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const saveQuizScore = useCallback((chapterId: string, score: number) => {
    setProgress((prev) => {
      const current = prev[chapterId] || { read: false, quizScore: null, readAt: null };
      const updated = {
        ...prev,
        [chapterId]: {
          ...current,
          quizScore: Math.max(current.quizScore || 0, score),
        }
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { progress, isLoaded, markRead, saveQuizScore };
}
