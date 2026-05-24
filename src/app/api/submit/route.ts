import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { textModel } from "@/lib/gemini";
import type { UserAnswer } from "@/types";
import { resolveQuizByExamId } from "@/lib/exam-from-syllabus";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

/** Retry an async fn up to `retries` times with a delay between attempts. */
async function withRetry<T>(
  fn: () => Promise<T>,
  retries = 2,
  delayMs = 1000
): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;
      if (i < retries) {
        await new Promise((r) => setTimeout(r, delayMs * (i + 1)));
      }
    }
  }
  throw lastError;
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const { userId, answers } = (await req.json()) as {
      userId: string;
      answers: { qId: string; userAns: string }[];
    };

    if (!answers?.length) {
      return NextResponse.json({ error: "No answers provided" }, { status: 400 });
    }

    let score = 0;
    const detailedAnswers: UserAnswer[] = answers.map((a) => {
      const q = resolveQuizByExamId(a.qId);
      const correctAns = q?.correctEn;
      const isCorrect = Boolean(q && correctAns === a.userAns);
      if (isCorrect) score++;
      return {
        qId: a.qId,
        userAns: a.userAns,
        isCorrect,
        correctAns,
        questionTextEn: q?.questionEn,
        questionTextVi: q?.questionVi,
      };
    });

    const wrongAnswers = answers
      .map((a) => {
        const row = detailedAnswers.find((d) => d.qId === a.qId);
        if (row?.isCorrect) return null;
        const qq = resolveQuizByExamId(a.qId);
        return `- Câu: "${qq?.questionEn ?? a.qId}"\n  Bạn chọn: "${a.userAns}"\n  Đáp án đúng: "${row?.correctAns ?? "—"}"`;
      })
      .filter(Boolean)
      .join("\n");

    const totalQs = answers.length;
    const feedbackPrompt =
      wrongAnswers.length > 0
        ? `Bạn là chuyên gia ISTQB. Hãy phân tích kết quả thi sau và đưa ra nhận xét bằng tiếng Việt:
Điểm: ${score}/${totalQs}

Các câu trả lời sai:
${wrongAnswers}

Yêu cầu: Động viên ngắn gọn, chỉ ra điểm yếu và gợi ý chủ đề cần ôn lại (tối đa 150 từ).`
        : `Chúc mừng! Học viên đạt ${score}/${totalQs} điểm. Hãy viết một lời động viên ngắn gọn bằng tiếng Việt.`;

    // Skip AI feedback entirely when no API key is configured.
    // The results page guards with {attempt.aiFeedback && ...} so the section stays hidden.
    let aiFeedback: string | null = null;
    if (process.env.GEMINI_API_KEY) {
      try {
        const result = await withRetry(() => textModel.generateContent(feedbackPrompt));
        const response = await result.response;
        aiFeedback = response.text();
      } catch (aiErr) {
        console.warn("[/api/submit] Gemini feedback unavailable:", aiErr);
        // Leave aiFeedback as null — UI section will stay hidden.
      }
    }

    const actualUserId = (session?.user as any)?.id || userId || "user-1";
    const payload: {
      id: string;
      userId: string;
      score: number;
      totalQs: number;
      answers: typeof detailedAnswers;
      aiFeedback: string | null;
      createdAt: string;
    } = {
      id: `local-${Date.now()}`,
      userId: actualUserId,
      score,
      totalQs,
      answers: detailedAnswers,
      aiFeedback,
      createdAt: new Date().toISOString(),
    };

    try {
      await prisma.user.upsert({
        where: { id: actualUserId },
        update: {},
        create: { id: actualUserId, name: "Test User" },
      });

      const attempt = await prisma.attempt.create({
        data: {
          userId: actualUserId,
          score,
          totalQs,
          answers: detailedAnswers as object[],
          aiFeedback,
        },
      });

      return NextResponse.json({
        ...payload,
        id: attempt.id,
        createdAt: attempt.createdAt.toISOString(),
      });
    } catch (dbErr) {
      console.warn("[/api/submit] Database unavailable, returning graded result only:", dbErr);
      return NextResponse.json(payload);
    }
  } catch (error) {
    console.error("[/api/submit]", error);
    return NextResponse.json({ error: "Failed to submit exam" }, { status: 500 });
  }
}
