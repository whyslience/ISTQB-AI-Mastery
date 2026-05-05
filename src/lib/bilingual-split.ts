/**
 * Split merged EN+VI prose (same Markdown paragraph) into two strings for separate badges/layout.
 * Content uses either "English / Vietnamese" in list items or back-to-back sentences (… . Tiếng…).
 */

const VI_CHAR =
  /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

export function hasVietnameseChars(text: string): boolean {
  return VI_CHAR.test(text);
}

/**
 * Returns { en, vi } if we can split confidently; otherwise null (single-language or ambiguous).
 */
export function splitEnViPair(text: string): { en: string; vi: string } | null {
  const trimmed = text.trim();
  if (!trimmed || !hasVietnameseChars(trimmed)) return null;

  const slash = trySlashSplit(trimmed);
  if (slash) return slash;

  let firstViWordIndex = -1;
  const wordRe = /\S+/g;
  let m: RegExpExecArray | null;
  while ((m = wordRe.exec(trimmed)) !== null) {
    if (VI_CHAR.test(m[0])) {
      firstViWordIndex = m.index;
      break;
    }
  }

  if (firstViWordIndex <= 0) return null;

  const cut = cutAfterLastSentenceEndBefore(trimmed, firstViWordIndex);
  // Without a sentence boundary, Latin leads like "QA thường..." were mis-split into en:"QA" + vi:"thường…"
  if (cut < 0) return null;

  const en = trimmed.slice(0, cut).trim();
  const vi = trimmed.slice(cut).trim();
  if (!en || !vi) return null;
  if (hasVietnameseChars(en)) return null;

  return { en, vi };
}

function trySlashSplit(trimmed: string): { en: string; vi: string } | null {
  const idx = trimmed.indexOf(" / ");
  if (idx <= 0) return null;

  const left = trimmed.slice(0, idx).trim();
  const right = trimmed.slice(idx + 3).trim();
  const lVi = hasVietnameseChars(left);
  const rVi = hasVietnameseChars(right);
  if (lVi === rVi) return null;
  return lVi ? { en: right, vi: left } : { en: left, vi: right };
}

/** Prefer splitting after ". " / "? " / "! " before the first Vietnamese word (not inside "Dr. "-style mid-word). */
function cutAfterLastSentenceEndBefore(full: string, firstViWordIndex: number): number {
  const head = full.slice(0, firstViWordIndex);
  const re = /[.!?]\s+/g;
  let last = -1;
  let match: RegExpExecArray | null;
  while ((match = re.exec(head)) !== null) {
    last = match.index + match[0].length;
  }
  return last;
}
