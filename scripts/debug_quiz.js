const fs = require('fs');
const path = require('path');
const inputFile = path.join(__dirname, '../ISTQB_CTFL_Syllabus_v4.0.1.md');
const raw = fs.readFileSync(inputFile, 'utf-8');

const quizSectionMatch = /\*\*\d+\.?\s+Practice Questions[^\*]*\*\*([\s\S]*?)(?=\*\*\d+\.?\s+Exam Tips|\*\*\d+\.?\s+Chapter Summary|\*\*\d+\.?\s+Quick Review|$)/i;
const match = quizSectionMatch.exec(raw);

if (match) {
  console.log("Found quiz section!");
  console.log("Length:", match[1].length);
  const qBlocks = match[1].split(/\*\*Question \d+/i).slice(1);
  console.log("Found qBlocks:", qBlocks.length);
  if (qBlocks.length > 0) {
      console.log("First block snippet:", qBlocks[0].substring(0, 200));
  }
} else {
  console.log("Quiz section NOT found.");
}
