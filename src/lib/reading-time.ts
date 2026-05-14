/**
 * Estimate reading time from markdown/plain text.
 * Average reading speed: 200 words per minute.
 */
export function estimateReadingTime(text: string, wpm = 200): number {
  // Strip markdown syntax for a rough word count
  const stripped = text
    .replace(/```[\s\S]*?```/g, "") // code blocks
    .replace(/`[^`]+`/g, "")        // inline code
    .replace(/!\[.*?\]\(.*?\)/g, "") // images
    .replace(/\[.*?\]\(.*?\)/g, "$1") // links → text
    .replace(/#{1,6}\s/g, "")        // headings
    .replace(/[*_~>|]/g, "")         // formatting
    .replace(/\n+/g, " ");

  const words = stripped.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wpm));
}

/** Returns a human-readable label like "~8 phút đọc" */
export function readingTimeLabel(text: string): string {
  const minutes = estimateReadingTime(text);
  return `~${minutes} phút đọc`;
}
