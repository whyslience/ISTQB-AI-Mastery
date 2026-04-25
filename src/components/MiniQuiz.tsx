'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { QuizQuestion } from "@/data/syllabus";

export default function MiniQuiz({ quiz }: { quiz: QuizQuestion[] }) {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const handleQuizSubmit = () => setShowResults(true);

  const getScore = () => {
    let score = 0;
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correctEn) score++;
    });
    return score;
  };

  return (
    <div className="mb-10 w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold">Practice Questions / Mini-Quiz</h3>
        {showResults && (
          <span className="px-3 py-1 text-sm font-bold rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
            Score: {getScore()} / {quiz.length}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-8">
        {quiz.map((q, qIndex) => {
          const selectedAns = quizAnswers[qIndex];
          const isCorrect = selectedAns === q.correctEn;

          return (
            <div key={qIndex} className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
              <h4 className="text-base font-semibold mb-1 leading-relaxed">{qIndex + 1}. {q.questionEn}</h4>
              {showResults && (
                <h5 className="text-sm font-medium mb-4 opacity-70 italic text-[var(--color-text-secondary)]">
                  {q.questionVi}
                </h5>
              )}
              
              <div className="flex flex-col gap-3 mt-4">
                {q.options.map((opt, oIndex) => {
                  const isSelected = selectedAns === opt.en;
                  const showAsCorrect = showResults && opt.en === q.correctEn;
                  const showAsWrong = showResults && isSelected && !isCorrect;

                  let btnStyle = {
                    background: isSelected ? "var(--color-accent-soft)" : "var(--color-surface-raised)",
                    borderColor: isSelected ? "var(--color-accent)" : "var(--color-border)",
                    color: "var(--color-text-primary)"
                  };

                  if (showResults) {
                    if (showAsCorrect) {
                      btnStyle = {
                        background: "var(--color-success-soft)",
                        borderColor: "var(--color-success)",
                        color: "var(--color-text-primary)"
                      };
                    } else if (showAsWrong) {
                      btnStyle = {
                        background: "var(--color-danger-soft)",
                        borderColor: "var(--color-danger)",
                        color: "var(--color-text-primary)"
                      };
                    } else {
                      btnStyle = {
                        background: "var(--color-surface-sunken)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-muted)"
                      };
                    }
                  }

                  return (
                    <button
                      key={oIndex}
                      disabled={showResults}
                      onClick={() => setQuizAnswers({ ...quizAnswers, [qIndex]: opt.en })}
                      className="flex flex-col p-4 rounded-xl text-left text-sm transition-all duration-200 border-2"
                      style={btnStyle}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="flex-1 font-medium">{opt.en}</span>
                        {showResults && showAsCorrect && <CheckCircle2 className="shrink-0 ml-3" style={{ color: "var(--color-success)" }} />}
                        {showResults && showAsWrong && <XCircle className="shrink-0 ml-3" style={{ color: "var(--color-danger)" }} />}
                      </div>
                      {showResults && (
                        <span className="text-xs opacity-70 mt-1 italic">{opt.vi}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 p-4 rounded-xl text-sm prose-sm dark:prose-invert max-w-none"
                  style={{ 
                    background: isCorrect ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                    color: "var(--color-text-primary)"
                  }}
                >
                  <span className="font-bold block mb-2 underline decoration-accent decoration-2">Giải thích / Explanation:</span>
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({children}) => {
                        const text = String(children);
                        const isVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
                        return (
                          <p className={isVietnamese ? "text-xs opacity-70 italic leading-relaxed mb-4" : "mb-1"}>
                            {children}
                          </p>
                        );
                      },
                      li: ({children}) => {
                        const text = String(children);
                        const isVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
                        return (
                          <li className={isVietnamese ? "text-xs opacity-70 italic list-none -mt-1 mb-2" : "mb-1"}>
                            {children}
                          </li>
                        );
                      }
                    }}
                  >
                    {q.explanation}
                  </ReactMarkdown>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {!showResults ? (
        <button
          onClick={handleQuizSubmit}
          disabled={Object.keys(quizAnswers).length < quiz.length}
          className="mt-8 btn btn-primary w-full sm:w-auto"
          style={{ padding: "14px 32px", opacity: Object.keys(quizAnswers).length < quiz.length ? 0.5 : 1 }}
        >
          Submit Quiz
        </button>
      ) : (
        <button
          onClick={() => { setShowResults(false); setQuizAnswers({}); }}
          className="mt-8 btn btn-secondary w-full sm:w-auto"
          style={{ padding: "14px 32px" }}
        >
          Retake Quiz
        </button>
      )}
    </div>
  );
}
