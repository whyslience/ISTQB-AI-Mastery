import type { SyllabusChapter } from "@/data/syllabus";
import { syllabusData } from "@/data/syllabus";
import { ctaiSyllabusData } from "@/data/syllabus-ai";

export type SyllabusTrackId = "ctfl" | "ctai";

export function getChapterTrackId(chapterId: string): SyllabusTrackId {
  return chapterId.startsWith("ctai-") ? "ctai" : "ctfl";
}

export function resolveSyllabusChapter(chapterId: string): {
  chapter: SyllabusChapter;
  chapters: SyllabusChapter[];
} | null {
  const ctfl = syllabusData.find((c) => c.id === chapterId);
  if (ctfl) return { chapter: ctfl, chapters: syllabusData };
  const ctai = ctaiSyllabusData.find((c) => c.id === chapterId);
  if (ctai) return { chapter: ctai, chapters: ctaiSyllabusData };
  return null;
}

export function contentMarkdownSubdir(chapterId: string): "chapters" | "chapters-ai" {
  return chapterId.startsWith("ctai-") ? "chapters-ai" : "chapters";
}
