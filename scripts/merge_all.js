const fs = require('fs');
const path = require('path');

const questionsDir = path.join(__dirname, '../src/data/questions');

const mappings = {
  'chapter-1.json': [
    'deepseek_json_chapter1.json',
    'deepseek_json_chapter1_1.json',
    'deepseek_json_chapter1_2.json'
  ],
  'chapter-2.json': [
    'deepseek_json_chapter2.json',
    'deepseek_json_chapter2_1.json',
    'deepseek_json_chapter2_2.json',
    'deepseek_json_chapter2_3.json'
  ],
  'chapter-3.json': [
    'deepseek_json_chapter3.json',
    'deepseek_json_chapter3_1.json',
    'deepseek_json_chapter3_2.json'
  ],
  'chapter-4.json': [
    'deepseek_json_chapter4_1.json'
  ],
  'chapter-5.json': [
    'deepseek_json_chapter5_1.json'
  ],
  'chapter-6.json': [
    'deepseek_json_chapter6_1.json'
  ]
};

function normalizeQuestion(q) {
  // Format A: Already mostly correct
  if (q.questionEn && q.options && Array.isArray(q.options)) {
    return {
      questionEn: q.questionEn,
      questionVi: q.questionVi || "",
      options: q.options,
      correctEn: q.correctEn,
      correctVi: q.correctVi || "",
      explanation: q.explanation || ""
    };
  }
  
  // Format B: snake_case from chapter 3
  if (q.question_en && q.options_en) {
    let correctIdx = 0;
    if (q.correct_answer === "A") correctIdx = 0;
    if (q.correct_answer === "B") correctIdx = 1;
    if (q.correct_answer === "C") correctIdx = 2;
    if (q.correct_answer === "D") correctIdx = 3;
    
    return {
      questionEn: q.question_en,
      questionVi: q.question_vi || "",
      options: q.options_en.map((enOpt, i) => ({
        en: enOpt,
        vi: q.options_vi[i] || ""
      })),
      correctEn: q.options_en[correctIdx],
      correctVi: q.options_vi ? q.options_vi[correctIdx] : "",
      explanation: typeof q.explanation_en === "string" 
        ? `${q.explanation_en}\n\n${q.explanation_vi || ""}`
        : q.explanation_en
    };
  }

  // Format C: camelCase but flat arrays from chapter 4
  if (q.questionEn && q.optionsEn) {
    return {
      questionEn: q.questionEn,
      questionVi: q.questionVi || "",
      options: q.optionsEn.map((enOpt, i) => ({
        en: enOpt,
        vi: q.optionsVi[i] || ""
      })),
      correctEn: q.optionsEn[q.correctIndex],
      correctVi: q.optionsVi ? q.optionsVi[q.correctIndex] : "",
      explanation: q.explanationEn + (q.explanationVi ? `\n\n${q.explanationVi}` : "")
    };
  }

  return null;
}

for (const [target, sources] of Object.entries(mappings)) {
  const targetFile = path.join(questionsDir, target);
  let allQuestions = [];
  const seen = new Set();

  sources.forEach(file => {
    const filePath = path.join(questionsDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      try {
        let parsed = JSON.parse(content);
        if (parsed.questions && Array.isArray(parsed.questions)) {
          parsed = parsed.questions;
        }
        
        parsed.forEach(rawQ => {
          const q = normalizeQuestion(rawQ);
          if (q) {
            if (!seen.has(q.questionEn)) {
              seen.add(q.questionEn);
              allQuestions.push(q);
            }
          }
        });
        console.log(`Read and normalized from ${file}`);
      } catch (e) {
        console.error(`Error parsing ${file}: ${e.message}`);
      }
    } else {
      console.warn(`File not found: ${file}`);
    }
  });

  if (allQuestions.length > 0) {
    fs.writeFileSync(targetFile, JSON.stringify(allQuestions, null, 2));
    console.log(`Merged and deduplicated into ${target}. Total questions: ${allQuestions.length}\n`);
  }
}
