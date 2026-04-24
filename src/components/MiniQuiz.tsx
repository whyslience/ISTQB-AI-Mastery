'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/data/syllabus";

export default function MiniQuiz({ quiz }: { quiz: QuizQuestion[] }) {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  if (!quiz || quiz.length === 0) return null;

  const handleQuizSubmit = () => setShowResults(true);

  const getScore = () => {
    let score = 0;
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correct) score++;
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
          const isCorrect = selectedAns === q.correct;

          return (
            <div key={qIndex} className="p-6 rounded-2xl bg-[var(--color-surface-sunken)] border border-[var(--color-border)]">
              <h4 className="text-base font-semibold mb-4 leading-relaxed">{qIndex + 1}. {q.question}</h4>
              
              <div className="flex flex-col gap-3">
                {q.options.map((opt, oIndex) => {
                  const isSelected = selectedAns === opt;
                  const showAsCorrect = showResults && opt === q.correct;
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
                      onClick={() => setQuizAnswers({ ...quizAnswers, [qIndex]: opt })}
                      className="flex items-center justify-between p-4 rounded-xl text-left text-sm transition-all duration-200 border-2"
                      style={btnStyle}
                    >
                      <span className="flex-1">{opt}</span>
                      {showResults && showAsCorrect && <CheckCircle2 className="shrink-0 ml-3" style={{ color: "var(--color-success)" }} />}
                      {showResults && showAsWrong && <XCircle className="shrink-0 ml-3" style={{ color: "var(--color-danger)" }} />}
                    </button>
                  );
                })}
              </div>

              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 p-4 rounded-xl text-sm"
                  style={{ 
                    background: isCorrect ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                    color: "var(--color-text-primary)"
                  }}
                >
                  <span className="font-bold block mb-1">Giải thích (Explanation):</span>
                  {q.explanation}
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
