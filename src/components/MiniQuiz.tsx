'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { QuizQuestion } from "@/data/syllabus";
import { useChapterProgress } from "@/hooks/useChapterProgress";
import { useSpacedRepetition } from "@/hooks/useSpacedRepetition";

const LETTER = ["A", "B", "C", "D"];

function ScoreBadge({ score, total }: { score: number; total: number }) {
  const pct = Math.round((score / total) * 100);
  const color =
    pct >= 70
      ? "var(--color-neon-green, #34d399)"
      : pct >= 50
        ? "var(--color-neon-amber, #fbbf24)"
        : "var(--color-danger)";
  const bg =
    pct >= 70
      ? "var(--color-success-soft)"
      : pct >= 50
        ? "rgba(251,191,36,0.1)"
        : "var(--color-danger-soft)";
  return (
    <motion.span
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="px-4 py-1.5 text-sm font-bold rounded-full"
      style={{
        background: bg,
        color,
        boxShadow: pct >= 70 ? "var(--glow-success, 0 0 24px rgba(52,211,153,0.3))" : "none",
      }}
    >
      {score}/{total} — {pct}%
    </motion.span>
  );
}

export default function MiniQuiz({ quiz, chapterId }: { quiz: QuizQuestion[]; chapterId?: string }) {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string>>({});
  const [showVi, setShowVi] = useState(false);
  const [shakeIdx, setShakeIdx] = useState<number | null>(null);
  const { saveQuizScore } = useChapterProgress();
  const { recordAnswer } = useSpacedRepetition();

  const isAllAnswered = quiz && Object.keys(quizAnswers).length === quiz.length;

  if (!quiz || quiz.length === 0) return null;

  const getScore = () => {
    let score = 0;
    quiz.forEach((q, i) => {
      if (quizAnswers[i] === q.correctEn) score++;
    });
    return score;
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (isAllAnswered && chapterId) {
      const currentScore = getScore();
      const pct = Math.round((currentScore / quiz.length) * 100);
      saveQuizScore(chapterId, pct);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllAnswered, chapterId, saveQuizScore]);

  const handleAnswer = (qIndex: number, optEn: string, correctEn: string) => {
    if (quizAnswers[qIndex] !== undefined) return;
    setQuizAnswers((prev) => ({ ...prev, [qIndex]: optEn }));
    const isCorrect = optEn === correctEn;
    if (!isCorrect) {
      setShakeIdx(qIndex);
      setTimeout(() => setShakeIdx(null), 500);
    }
    // Feed spaced repetition engine
    const questionId = chapterId ? `${chapterId}:${qIndex}` : `unknown:${qIndex}`;
    recordAnswer(questionId, isCorrect);
  };

  return (
    <div className="mb-10 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <h3 className="text-2xl font-bold font-display">Practice Questions / Mini-Quiz</h3>
          <button
            onClick={() => setShowVi(!showVi)}
            className="text-xs font-medium px-3 py-1.5 rounded-full transition-colors"
            style={{
              background: showVi ? "var(--color-accent-soft)" : "var(--color-surface-sunken)",
              color: showVi ? "var(--color-accent)" : "var(--color-text-muted)",
              border: `1px solid ${showVi ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
          >
            VI: {showVi ? "ON" : "OFF"}
          </button>
        </div>
        <AnimatePresence>
          {isAllAnswered && (
            <ScoreBadge score={getScore()} total={quiz.length} />
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-8">
        {quiz.map((q, qIndex) => {
          const selectedAns = quizAnswers[qIndex];
          const hasAnswered = selectedAns !== undefined;
          const isCorrect = selectedAns === q.correctEn;
          const isShaking = shakeIdx === qIndex;

          return (
            <div
              key={qIndex}
              className="p-6 rounded-2xl border"
              style={{
                background: "var(--color-surface-sunken)",
                borderColor: hasAnswered
                  ? isCorrect
                    ? "var(--color-success)"
                    : "var(--color-danger)"
                  : "var(--color-border)",
                animation: isShaking ? "shake 0.5s ease" : "none",
                transition: "border-color 0.3s ease",
              }}
            >
              <h4 className="text-base font-semibold mb-1 leading-relaxed">
                {qIndex + 1}. {q.questionEn}
              </h4>
              {showVi && q.questionVi && (
                <h5 className="text-sm font-medium mb-4 opacity-70 italic text-[var(--color-text-secondary)]">
                  {q.questionVi}
                </h5>
              )}

              <div className="flex flex-col gap-3 mt-4">
                {q.options.map((opt, oIndex) => {
                  const isSelected = selectedAns === opt.en;
                  const showAsCorrect = hasAnswered && opt.en === q.correctEn;
                  const showAsWrong = hasAnswered && isSelected && !isCorrect;

                  let btnStyle: React.CSSProperties = {
                    background: "var(--color-surface-raised)",
                    borderColor: "var(--color-border)",
                    color: "var(--color-text-primary)",
                  };

                  if (hasAnswered) {
                    if (showAsCorrect) {
                      btnStyle = {
                        background: "var(--color-success-soft)",
                        borderColor: "var(--color-success)",
                        color: "var(--color-text-primary)",
                        boxShadow: "var(--glow-success, 0 0 16px rgba(52,211,153,0.2))",
                      };
                    } else if (showAsWrong) {
                      btnStyle = {
                        background: "var(--color-danger-soft)",
                        borderColor: "var(--color-danger)",
                        color: "var(--color-text-primary)",
                      };
                    } else {
                      btnStyle = {
                        background: "var(--color-surface-sunken)",
                        borderColor: "var(--color-border)",
                        color: "var(--color-text-muted)",
                        opacity: 0.6,
                      };
                    }
                  } else if (isSelected) {
                    btnStyle = {
                      background: "var(--color-accent-soft)",
                      borderColor: "var(--color-accent)",
                      color: "var(--color-text-primary)",
                    };
                  }

                  return (
                    <button
                      key={oIndex}
                      disabled={hasAnswered}
                      onClick={() => handleAnswer(qIndex, opt.en, q.correctEn)}
                      className="flex flex-col p-4 rounded-xl text-left text-sm transition-all duration-200 border-2 disabled:cursor-default relative overflow-hidden"
                      style={btnStyle}
                    >
                      <div className="flex items-center gap-3 w-full">
                        {/* Letter badge */}
                        <span
                          className="flex items-center justify-center shrink-0 rounded-full text-xs font-bold"
                          style={{
                            width: 26, height: 26,
                            background: showAsCorrect
                              ? "var(--color-success)"
                              : showAsWrong
                                ? "var(--color-danger)"
                                : isSelected
                                  ? "var(--color-accent)"
                                  : "var(--color-border)",
                            color: (showAsCorrect || showAsWrong || isSelected) ? "#fff" : "var(--color-text-muted)",
                            transition: "all 0.2s",
                          }}
                        >
                          {LETTER[oIndex]}
                        </span>
                        <span className="flex-1 font-medium">{opt.en}</span>
                        {/* Animated result icons */}
                        <AnimatePresence>
                          {showAsCorrect && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <CheckCircle2 className="shrink-0 ml-3" style={{ color: "var(--color-success)" }} />
                            </motion.span>
                          )}
                          {showAsWrong && (
                            <motion.span
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              <XCircle className="shrink-0 ml-3" style={{ color: "var(--color-danger)" }} />
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                      {showVi && opt.vi && (
                        <span className="text-xs opacity-70 mt-1 italic ml-9">{opt.vi}</span>
                      )}
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 p-4 rounded-xl text-sm prose-sm dark:prose-invert max-w-none"
                  style={{
                    background: isCorrect ? "var(--color-success-soft)" : "var(--color-danger-soft)",
                    color: "var(--color-text-primary)",
                    borderLeft: `3px solid ${isCorrect ? "var(--color-success)" : "var(--color-danger)"}`,
                  }}
                >
                  <span className="font-bold block mb-2 underline decoration-accent decoration-2">
                    Giải thích / Explanation:
                  </span>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => {
                        const text = String(children);
                        const isVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
                        return (
                          <p className={isVietnamese ? "text-xs opacity-70 italic leading-relaxed mb-4" : "mb-1"}>
                            {children}
                          </p>
                        );
                      },
                      li: ({ children }) => {
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

      {Object.keys(quizAnswers).length > 0 && (
        <button
          onClick={() => { setQuizAnswers({}); }}
          className="mt-8 btn btn-secondary w-full sm:w-auto"
          style={{ padding: "14px 32px" }}
        >
          Reset Quiz
        </button>
      )}
    </div>
  );
}
