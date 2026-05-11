const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../src/data/questions');
const targetFile = path.join(questionsDir, 'chapter-1.json');

const sourceFiles = [
  'deepseek_json_chapter1.json',
  'deepseek_json_chapter1_1.json',
  'deepseek_json_chapter1_2.json'
];

let allQuestions = [];
const seen = new Set();

sourceFiles.forEach(file => {
  const filePath = path.join(questionsDir, file);
  if (fs.existsSync(filePath)) {
    const questions = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    questions.forEach(q => {
      if (!seen.has(q.questionEn)) {
        seen.add(q.questionEn);
        allQuestions.push(q);
      }
    });
  }
});

fs.writeFileSync(targetFile, JSON.stringify(allQuestions, null, 2));
console.log(`Merged and deduplicated into chapter-1.json. Total questions: ${allQuestions.length}`);
