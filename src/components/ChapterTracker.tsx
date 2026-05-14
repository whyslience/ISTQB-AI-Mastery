'use client';

import { useEffect, useRef } from 'react';
import { useChapterProgress } from '@/hooks/useChapterProgress';

export default function ChapterTracker({ chapterId }: { chapterId: string }) {
  const { markRead } = useChapterProgress();
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // We mark as read when user scrolls to the bottom of the page or the practice quiz
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollPos < 300) {
        markRead(chapterId);
        window.removeEventListener('scroll', handleScroll);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapterId, markRead]);

  return null;
}
