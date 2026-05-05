/**
 * Remove duplicate syllabus numbering after " / " in chapter headings:
 * "### 1.1.2 EN / 1.1.2 VI" -> "### 1.1.2 EN / VI"
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "src", "content", "chapters");

for (const file of fs.readdirSync(dir)) {
  if (!file.endsWith(".md")) continue;
  const fp = path.join(dir, file);
  let s = fs.readFileSync(fp, "utf8");
  const orig = s;
  s = s.replace(/(\s\/ )(\d+(?:\.\d+)+)\.\s+/g, "$1");
  s = s.replace(/(\s\/ )(\d+(?:\.\d+)+)\s+/g, "$1");
  // Single segment like "## 0. Introduction / 0. Giới thiệu"
  s = s.replace(/(\s\/ )(\d+)\.\s+/g, "$1");
  if (s !== orig) {
    fs.writeFileSync(fp, s);
    console.log("updated", file);
  }
}
