export interface Question {
  id: string;
  topic: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  createdAt: string;
}

export interface UserAnswer {
  qId: string;
  userAns: string;
  isCorrect?: boolean;
  correctAns?: string;
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
