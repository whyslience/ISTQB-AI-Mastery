/**
 * Chapter markdown repeats subsection titles under "## Learning Objectives …" (### 1.1 …)
 * and again in the body (## 1.1 …). Those ### duplicates should not appear in the page TOC.
 */

export type TocHeadingMeta = {
  id: string;
  text: string;
  level: number;
  /** False for ### … mirrors inside the Learning Objectives block (before ---). */
  includeInToc: boolean;
};

const LEARNING_OBJECTIVES_H2 = /^##\s+Learning Objectives\b/i;
const RULE_SEPARATOR = /^---\s*$/;

/** 1-based line index in `markdown` where the heading starts. */
export function lineNumberAtIndex(markdown: string, index: number): number {
  return markdown.slice(0, index).split(/\n/).length;
}

/**
 * Lines between "## Learning Objectives …" and the next standalone `---`
 * (1-based inclusive start line of `##`, exclusive end line = line of `---`).
 */
export function findLearningObjectivesSectionRange(
  markdown: string
): { startLine: number; endLine: number } | null {
  const lines = markdown.split(/\n/);
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (LEARNING_OBJECTIVES_H2.test(t)) {
      const startLine = i + 1;
      for (let j = i + 1; j < lines.length; j++) {
        if (RULE_SEPARATOR.test(lines[j])) {
          return { startLine, endLine: j + 1 };
        }
      }
      return null;
    }
  }
  return null;
}

export function shouldSkipHeadingInToc(
  level: number,
  line: number,
  loRange: { startLine: number; endLine: number } | null
): boolean {
  if (!loRange || level < 3) return false;
  return line > loRange.startLine && line < loRange.endLine;
}
