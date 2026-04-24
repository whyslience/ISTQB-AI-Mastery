import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const requestSchema = z.object({
  topic: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard", "all"]).default("all"),
  count: z.number().int().min(1).max(50).default(5),
});

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, difficulty, count } = requestSchema.parse(body);

    let whereClause: any = {};
    if (topic !== "Full Exam") {
      whereClause.topic = topic;
    }
    if (difficulty !== "all") {
      whereClause.difficulty = difficulty;
    }

    const questions = await prisma.question.findMany({
      where: whereClause,
    });

    const shuffledQuestions = shuffle(questions).slice(0, count);

    const finalQuestions = shuffledQuestions.map((q) => {
      return {
        ...q,
        options: shuffle(q.options),
      };
    });

    return NextResponse.json(finalQuestions);
  } catch (error) {
    console.error("[/api/generate]", error);
    return NextResponse.json(
      { error: "Failed to load questions from database" },
      { status: 500 }
    );
  }
}
