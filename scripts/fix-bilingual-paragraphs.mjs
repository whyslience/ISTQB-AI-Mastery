/**
 * Insert blank lines between back-to-back prose lines where the first is Latin/EN-only
 * and the second contains Vietnamese diacritics — so Markdown emits two <p> blocks with correct EN/VI styling.
 *
 * Skips: headings, blockquotes, tables, list markers, fenced code, horizontal rules, HTML comments.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const VI = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const chaptersDir = path.join(__dirname, "..", "src", "content", "chapters");

function hasVi(s) {
  return VI.test(s);
}

function isListLine(s) {
  return /^\s*([*+-]|\d{1,2}\.)\s/.test(s);
}

function isSkippableLine(s) {
  const t = s.trim();
  if (!t) return true;
  if (t.startsWith("```")) return true;
  if (t.startsWith("#")) return true;
  if (t.startsWith(">")) return true;
  if (t.startsWith("|")) return true;
  if (t === "---") return true;
  if (t.startsWith("<!--")) return true;
  if (isListLine(s)) return true;
  return false;
}

function processContent(raw) {
  const lines = raw.split(/\r?\n/);
  const out = [];
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trim = line.trim();

    if (trim.startsWith("```")) {
      inFence = !inFence;
      out.push(line);
      continue;
    }
    if (inFence) {
      out.push(line);
      continue;
    }

    out.push(line);

    const next = lines[i + 1];
    if (next !== undefined && trim !== "" && next.trim() !== "") {
      if (
        !isSkippableLine(line) &&
        !isSkippableLine(next) &&
        !hasVi(line) &&
        hasVi(next)
      ) {
        out.push("");
      }
    }
  }

  return out.join("\n");
}

function main() {
  const files = fs.readdirSync(chaptersDir).filter((f) => f.endsWith(".md"));
  let total = 0;
  for (const f of files.sort()) {
    const fp = path.join(chaptersDir, f);
    const before = fs.readFileSync(fp, "utf8");
    const after = processContent(before);
    if (after !== before) {
      fs.writeFileSync(fp, after, "utf8");
      console.log("updated:", f);
      total++;
    }
  }
  console.log("files changed:", total);
}

main();
