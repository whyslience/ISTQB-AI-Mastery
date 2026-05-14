export interface Question {
  id: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  questionVi: string;
  options: { en: string; vi: string }[];
  correct: string;
  explanation: string;
  createdAt: string;
}

export interface UserAnswer {
  qId: string;
  userAns: string;
  isCorrect?: boolean;
  correctAns?: string;
  questionTextEn?: string;
  questionTextVi?: string;
}

export interface Attempt {
  id: string;
  userId: string;
  score: number;
  totalQs: number;
  answers: UserAnswer[];
  aiFeedback: string | null;
  createdAt: string;
}
