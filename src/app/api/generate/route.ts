import { NextResponse } from "next/server";
import { z } from "zod";
import { pickExamQuestions, EXAM_TOPIC_CONFIG } from "@/lib/exam-from-syllabus";

const requestSchema = z.object({
  topic: z.string().min(1),
  difficulty: z.enum(["easy", "medium", "hard", "all"]).default("all"),
  count: z.number().int().min(1).max(60).default(5),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { topic, difficulty, count } = requestSchema.parse(body);

    if (!(topic in EXAM_TOPIC_CONFIG)) {
      return NextResponse.json({ error: "Unknown topic" }, { status: 400 });
    }

    const questions = pickExamQuestions(topic, difficulty, count);
    if (!questions.length) {
      return NextResponse.json({ error: "No questions available for this topic" }, { status: 404 });
    }

    return NextResponse.json(questions);
  } catch (error) {
    console.error("[/api/generate]", error);
    return NextResponse.json({ error: "Failed to build exam" }, { status: 500 });
  }
}
