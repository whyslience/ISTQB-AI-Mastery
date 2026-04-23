import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { model } from "@/lib/gemini";
import { z } from "zod";
import type { Question } from "@/types";

const requestSchema = z.object({
  topic: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard"]),
  count: z.number().int().min(1).max(20).default(5),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, difficulty, count } = requestSchema.parse(body);

    const cached = await prisma.question.findMany({
      where: { topic, difficulty },
      take: count,
    });

    if (cached.length >= count) {
      return NextResponse.json(cached);
    }

    const needed = count - cached.length;

    const prompt = `You are an ISTQB CTFL 4.0 exam expert.
Generate ${needed} multiple-choice questions on the topic: "${topic}" at difficulty level: "${difficulty}".

Return a JSON object with a single key "questions" containing an array of objects.
Each object must have:
- "question": string
- "options": array of exactly 4 strings
- "correct": string (must match one of the options exactly)
- "explanation": string (detailed explanation in Vietnamese, referencing ISTQB standards)

JSON schema:
{
  "questions": [
    {
      "question": "string",
      "options": ["string", "string", "string", "string"],
      "correct": "string",
      "explanation": "string"
    }
  ]
}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    const parsed = JSON.parse(text) as { questions: Omit<Question, "id" | "topic" | "difficulty" | "createdAt">[] };
    const newQuestions = parsed.questions || [];

    const saved = await Promise.all(
      newQuestions.map((q) =>
        prisma.question.upsert({
          where: { question: q.question },
          update: {},
          create: {
            topic,
            difficulty,
            question: q.question,
            options: q.options,
            correct: q.correct,
            explanation: q.explanation,
          },
        })
      )
    );

    return NextResponse.json([...cached, ...saved]);
  } catch (error) {
    console.error("[/api/generate]", error);
    return NextResponse.json(
      { error: "Failed to generate questions with Gemini" },
      { status: 500 }
    );
  }
}
