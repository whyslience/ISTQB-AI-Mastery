/**
 * Generates ISTQB CTFL bilingual MCQ JSON files into src/data/questions/
 * Targets (exam chapters): 159 + 114 + 70 + 344 + 295 + 18 = 1000
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { validate } from "./quiz-gen/core.mjs";
import { generateChapter1 } from "./quiz-gen/bank-ch1.mjs";
import { generateChapter2 } from "./quiz-gen/bank-ch2.mjs";
import { generateChapter3 } from "./quiz-gen/bank-ch3.mjs";
import { generateChapter4 } from "./quiz-gen/bank-ch4.mjs";
import { generateChapter5 } from "./quiz-gen/bank-ch5.mjs";
import { generateChapter6 } from "./quiz-gen/bank-ch6.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "src", "data", "questions");

const PLAN = [
  { file: "chapter-1.json", n: 159, seed: 100_003, gen: generateChapter1 },
  { file: "chapter-2.json", n: 114, seed: 200_009, gen: generateChapter2 },
  { file: "chapter-3.json", n: 70, seed: 300_017, gen: generateChapter3 },
  { file: "chapter-4.json", n: 344, seed: 400_021, gen: generateChapter4 },
  { file: "chapter-5.json", n: 295, seed: 500_029, gen: generateChapter5 },
  { file: "chapter-6.json", n: 18, seed: 600_037, gen: generateChapter6 },
];

function assertBank(quiz, label) {
  const errs = [];
  quiz.forEach((q, i) => errs.push(...validate(q, i)));
  if (errs.length) {
    console.error(label, errs.slice(0, 20));
    throw new Error(`${label}: validation failed (${errs.length} issues)`);
  }
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let total = 0;
for (const row of PLAN) {
  const quiz = row.gen(row.n, row.seed);
  assertBank(quiz, row.file);
  const fp = path.join(OUT_DIR, row.file);
  fs.writeFileSync(fp, JSON.stringify(quiz, null, 2), "utf8");
  console.log("wrote", row.file, quiz.length);
  total += quiz.length;
}

console.log("total questions:", total);
if (total !== 1000) {
  console.warn("Expected 1000, got", total);
}
