const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../src/data/questions');

fs.readdirSync(questionsDir).forEach(file => {
  if (file.endsWith('.json')) {
    const filePath = path.join(questionsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const questions = JSON.parse(content);
    
    const unique = [];
    const seen = new Set();
    
    questions.forEach(q => {
      if (!seen.has(q.questionEn)) {
        seen.add(q.questionEn);
        unique.push(q);
      }
    });
    
    fs.writeFileSync(filePath, JSON.stringify(unique, null, 2));
    console.log(`Deduplicated ${file}: ${questions.length} -> ${unique.length}`);
  }
});
