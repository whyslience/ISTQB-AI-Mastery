const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, '../ISTQB_CTFL_Syllabus_v4.0.1.md');
const contentDir = path.join(__dirname, '../src/content/chapters');
const syllabusTsFile = path.join(__dirname, '../src/data/syllabus.ts');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

let raw = fs.readFileSync(inputFile, 'utf-8');

// 1. GLOBAL CLEANUP
raw = raw.replace(/\\([#*_`\[\]\(\)\."'-])/g, '$1');
raw = raw.replace(/\\\r?\n/g, '\n');
raw = raw.replace(/\&nbsp;/g, ' ');

// 2. PRECISION TABLE CONVERSION
const tableBlocks = raw.split(/\n\s*[-]{15,}\s*\n/);
let processed = [];

for (let i = 0; i < tableBlocks.length; i++) {
  let block = tableBlocks[i];
  const lines = block.trim().split('\n');
  const tableCandidate = lines.some(l => {
     const cols = l.split(/\s{3,}/).filter(c => c.trim() !== '');
     return cols.length >= 2 && !l.trim().startsWith('- ');
  });

  if (tableCandidate && lines.length > 1) {
    const headerLine = lines[0];
    const headerCols = headerLine.split(/\s{3,}/).filter(Boolean).map(c => c.trim());
    
    if (headerCols.length >= 2) {
      const separator = `| ${Array(headerCols.length).fill('---').join(' | ')} |`;
      const bodyRows = lines.slice(1).map(line => {
         if (/^[- \s]+$/.test(line)) return null;
         const cols = line.split(/\s{3,}/).filter(Boolean).map(c => c.trim());
         if (cols.length === 0) return null;
         if (line.trim().startsWith('- ')) return null;
         while(cols.length < headerCols.length) cols.push('');
         return `| ${cols.slice(0, headerCols.length).join(' | ')} |`;
      }).filter(Boolean);

      if (bodyRows.length > 0) {
        processed.push(`\n\n| ${headerCols.join(' | ')} |\n${separator}\n${bodyRows.join('\n')}\n\n`);
        continue;
      }
    }
  }
  processed.push(block);
}

const cleanedMarkdown = processed.join('\n');

// 3. SPLIT CHAPTERS
const chapterRegex = /\*\*Chapter (\d+): (.*?)\*\*/g;
const chapters = [];
let m;
let lastIdx = 0;

while ((m = chapterRegex.exec(cleanedMarkdown)) !== null) {
  if (chapters.length > 0) {
    chapters[chapters.length - 1].rawContent = cleanedMarkdown.substring(lastIdx, m.index).trim();
  }
  chapters.push({
    num: parseInt(m[1]),
    titleEn: m[2],
    start: m.index
  });
  lastIdx = m.index;
}
if (chapters.length > 0) {
  chapters[chapters.length - 1].rawContent = cleanedMarkdown.substring(lastIdx).trim();
}

let syllabusData = [];

chapters.forEach((ch) => {
  let content = ch.rawContent;
  
  // QUIZ EXTRACTION
  const quizRegex = /\*\*\d+\.?\s+Practice Questions[^\*]*\*\*([\s\S]*?)(?=\*\*\d+\.?\s+Exam Tips|\*\*\d+\.?\s+Chapter Summary|\*\*\d+\.?\s+Quick Review|$)/i;
  const quizMatch = quizRegex.exec(content);
  let quiz = [];
  if (quizMatch) {
    const quizSection = quizMatch[1];
    content = content.replace(quizMatch[0], '');
    const qBlocks = quizSection.split(/\*\*Question \d+.*?\*\*/i).slice(1);
    qBlocks.forEach(block => {
      const correctMatch = /\*\*Correct Answer.*?:\s*([A-D])\*\*/i.exec(block);
      const explanationMatch = /\*\*Explanation.*?\*\*([\s\S]*)/i.exec(block);
      if (correctMatch) {
        const correctLetter = correctMatch[1];
        const fullTextBeforeAnswer = block.split(/\*\*Correct Answer/i)[0].trim();
        const options = [];
        const optRegex = /\b([a-d])\)\s*(.*?)(?=\s*[a-d]\)|$)/gi;
        let optM;
        let qText = fullTextBeforeAnswer;
        let firstOptIdx = -1;
        while ((optM = optRegex.exec(fullTextBeforeAnswer)) !== null) {
          if (firstOptIdx === -1) firstOptIdx = optM.index;
          options.push(optM[2].trim());
        }
        if (options.length >= 4) {
          qText = fullTextBeforeAnswer.substring(0, firstOptIdx).trim();
          const correctIdx = correctLetter.charCodeAt(0) - 65;
          quiz.push({
            question: qText.replace(/\*/g, '').trim(),
            options: options.slice(0, 4),
            correct: options[correctIdx] || options[0],
            explanation: explanationMatch ? explanationMatch[1].trim().replace(/\r?\n/g, ' ') : "No explanation provided."
          });
        }
      }
    });
  }

  // EXAM TIPS EXTRACTION
  const tipsRegex = /\*\*\d+\.?\s+Exam Tips[^\*]*\*\*([\s\S]*?)(?=\*\*\d+\.?\s+Chapter Summary|\*\*\d+\.?\s+Quick Review|$)/i;
  const tipsMatch = tipsRegex.exec(content);
  let tipEn = "Read carefully and focus on keywords.";
  let tipVi = "Đọc kỹ và tập trung vào các từ khóa.";
  if (tipsMatch) {
    content = content.replace(tipsMatch[0], '');
    const tipText = tipsMatch[1].trim();
    const lines = tipText.split('\n').map(l => l.trim()).filter(l => l !== "");
    if (lines.length >= 2) {
      tipEn = lines[0].replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').replace(/[\"\\]/g, '');
      tipVi = lines[1].replace(/^\d+\.\s*/, '').replace(/\*\*/g, '').replace(/[\"\\]/g, '');
    }
  }

  // RENUMBER SECTIONS
  // First, find all current bolded headings like **7. Chapter Summary**
  let sectionCount = 1;
  const sectionHeaderRegex = /^\*\*(\d+)\.\s+(.*?)\*\*\s*$/gm;
  content = content.replace(sectionHeaderRegex, (match, p1, p2) => {
    return `## ${sectionCount++}. ${p2}`;
  });

  // Then handle sub-sections (keep their numbering as is e.g. 2.1, but maybe adjust the parent number?)
  // Actually, let's just make the top level sequential.
  // Pattern for sub-sections: **2.1 Sub** -> ### 2.1 Sub
  content = content.replace(/^\*\*(\d+\.\d+\s+.*?)\*\*\s*$/gm, '### $1');
  content = content.replace(/^\*\*(\d+\.\d+\.\d+\s+.*?)\*\*\s*$/gm, '#### $1');

  const viTitleMatch = /\*\*Chương \d+:\s*(.*?)\*\*/.exec(content);
  const titleVi = viTitleMatch ? viTitleMatch[1].trim() : ch.titleEn;

  syllabusData.push({
    id: `chapter-${ch.num}`,
    chapterNumber: ch.num,
    titleEn: ch.titleEn,
    titleVi: titleVi,
    descriptionEn: `Bilingual study guide for Chapter ${ch.num}`,
    descriptionVi: `Hướng dẫn học tập song ngữ cho Chương ${ch.num}`,
    teacherAdviceEn: tipEn,
    teacherAdviceVi: tipVi,
    hasMindmaps: ch.num === 1,
    quiz: quiz
  });

  fs.writeFileSync(path.join(contentDir, `chapter-${ch.num}.md`), content);
});

// For syllabus.ts, we'll keep the polished ones for the first 3 chapters if possible, 
// but since I'm running the script, I'll just let it regenerate and then I'll re-apply my polish.
// Wait, I'll make the script SMART.
const tsContent = `export interface QuizQuestion {
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export interface SyllabusChapter {
  id: string;
  chapterNumber: number;
  titleEn: string;
  titleVi: string;
  descriptionEn: string;
  descriptionVi: string;
  teacherAdviceEn: string;
  teacherAdviceVi: string;
  hasMindmaps?: boolean;
  quiz: QuizQuestion[];
}

export const syllabusData: SyllabusChapter[] = ${JSON.stringify(syllabusData, null, 2)};
`;

fs.writeFileSync(syllabusTsFile, tsContent);
console.log("Re-numbering and Cleanup complete!");
