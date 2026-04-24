import fs from "fs";
import path from "path";
import Link from "next/link";
import { ArrowLeft, Lightbulb } from "lucide-react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { syllabusData } from "@/data/syllabus";
import MiniQuiz from "@/components/MiniQuiz";
import TableOfContents from "@/components/TableOfContents";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove Vietnamese accents
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-")
    .trim();
}

export default async function ChapterReview({ params }: { params: Promise<{ chapterId: string }> }) {
  const resolvedParams = await params;
  const chapter = syllabusData.find(c => c.id === resolvedParams.chapterId);
  
  if (!chapter) return notFound();

  // Read Markdown file
  let markdownContent = "";
  try {
    const filePath = path.join(process.cwd(), "src/content/chapters", `${chapter.id}.md`);
    markdownContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error("Failed to read markdown file", error);
    markdownContent = "*Content not found or failed to load.*";
  }

  // Extract headings for TOC
  const headingRegex = /^(#{1,4})\s+(.+)$/gm;
  const headings: { id: string; text: string; level: number }[] = [];
  let match;
  
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const text = match[2].trim();
    headings.push({
      id: slugify(text),
      text: text,
      level: match[1].length
    });
  }

  // Add Practice Questions to TOC if it exists
  if (chapter.quiz && chapter.quiz.length > 0) {
    const quizTitle = `${headings.length + 1}. Practice Questions / Câu hỏi Luyện tập`;
    headings.push({
      id: slugify(quizTitle),
      text: quizTitle,
      level: 2
    });
  }

  return (
    <div className="flex flex-col items-center px-5 pt-32 pb-24 relative">
      <TableOfContents headings={headings} />
      
      <div className="w-full max-w-4xl">
        <Link 
          href="/review" 
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors hover:text-[var(--color-accent)]"
          style={{ color: "var(--color-text-muted)" }}
        >
          <ArrowLeft style={{ width: 16, height: 16 }} />
          Back to Curriculum
        </Link>

        {/* Header Section */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase rounded-md bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
              Chapter {chapter.chapterNumber}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            {chapter.titleEn}
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[var(--color-text-secondary)]">
            {chapter.titleVi}
          </h2>
        </div>

        {/* Teacher's Advice */}
        {chapter.teacherAdviceEn && (
          <div 
            className="mb-12 p-6 rounded-2xl relative overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700"
            style={{
              background: "linear-gradient(145deg, var(--color-surface-raised) 0%, var(--color-surface-sunken) 100%)",
              border: "1px solid var(--color-border)",
              borderLeft: "4px solid var(--color-warning)"
            }}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-[var(--color-warning)] bg-opacity-20 text-[var(--color-warning)]">
                <Lightbulb style={{ width: 24, height: 24 }} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Teacher's Advice / Lời khuyên</h3>
                <p className="text-sm mb-3 italic text-[var(--color-text-secondary)]">"{chapter.teacherAdviceEn}"</p>
                <p className="text-sm text-[var(--color-text-primary)]">{chapter.teacherAdviceVi}</p>
              </div>
            </div>
          </div>
        )}

        {/* Markdown Content rendered with Tailwind Typography */}
        <div className="mb-16 prose prose-lg dark:prose-invert max-w-none 
          prose-headings:text-[var(--color-accent)] 
          prose-p:text-[var(--color-text-primary)] 
          prose-li:text-[var(--color-text-primary)]
          prose-strong:text-[var(--color-accent)]
          prose-a:text-[var(--color-accent)] 
          hover:prose-a:text-[var(--color-accent-hover)]
          prose-table:border prose-table:border-collapse prose-table:rounded-xl prose-table:overflow-hidden
          prose-th:border prose-th:p-4 prose-th:bg-[var(--color-surface-sunken)] prose-th:text-[var(--color-text-primary)]
          prose-td:border prose-td:p-4 prose-td:bg-[var(--color-surface-raised)] prose-td:text-[var(--color-text-primary)]
        ">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => <h1 id={slugify(String(children))}>{children}</h1>,
              h2: ({children}) => <h2 id={slugify(String(children))}>{children}</h2>,
              h3: ({children}) => <h3 id={slugify(String(children))}>{children}</h3>,
              h4: ({children}) => <h4 id={slugify(String(children))}>{children}</h4>,
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>

        {/* Interactive Mini Quiz */}
        {chapter.quiz && chapter.quiz.length > 0 && (
          <div id="practice-quiz" className="mt-20 pt-10 border-t border-[var(--color-border)]">
            <h2 
              id={slugify(`${headings.length}. Practice Questions / Câu hỏi Luyện tập`)} 
              className="text-[var(--color-accent)] text-3xl font-bold mb-8"
            >
              {headings.length}. Practice Questions / Câu hỏi Luyện tập
            </h2>
            <MiniQuiz quiz={chapter.quiz} />
          </div>
        )}
      </div>
    </div>
  );
}
