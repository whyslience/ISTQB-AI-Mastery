'use client';

import { useCallback } from 'react';
import {
  loadSRState,
  saveSRState,
  sm2Step,
  getDueCards,
  getWeakestCards,
  gradeFromBool,
  type SRState,
} from '@/lib/spaced-repetition';

/**
 * Hook to integrate spaced repetition into quiz/exam flows.
 * All state is read/written directly to localStorage (no React state —
 * avoids unnecessary re-renders on every answer).
 */
export function useSpacedRepetition() {
  /** Record a question result and update the SR schedule. */
  const recordAnswer = useCallback((questionId: string, isCorrect: boolean) => {
    const state = loadSRState();
    const existing = state[questionId] ?? null;
    const grade = gradeFromBool(isCorrect);
    const updated = sm2Step(existing, grade, questionId);
    saveSRState({ ...state, [questionId]: updated });
  }, []);

  /** Get IDs of cards due for review today. */
  const getDue = useCallback((): string[] => {
    return getDueCards(loadSRState());
  }, []);

  /** Get IDs of the weakest cards (most wrong answers). */
  const getWeak = useCallback((limit = 20): string[] => {
    return getWeakestCards(loadSRState(), limit);
  }, []);

  /** Get raw SR state for display. */
  const getState = useCallback((): SRState => {
    return loadSRState();
  }, []);

  /** How many cards are due today. */
  const dueCount = useCallback((): number => {
    return getDueCards(loadSRState()).length;
  }, []);

  return { recordAnswer, getDue, getWeak, getState, dueCount };
}
