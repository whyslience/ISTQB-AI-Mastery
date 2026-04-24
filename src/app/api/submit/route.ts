import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { textModel } from "@/lib/gemini";
import type { UserAnswer } from "@/types";

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
    const { userId, answers } = (await req.json()) as {
      userId: string;
      answers: { qId: string; userAns: string }[];
    };

    if (!answers?.length) {
      return NextResponse.json({ error: "No answers provided" }, { status: 400 });
    }

    const questionIds = answers.map((a) => a.qId);
    const questions = await prisma.question.findMany({
      where: { id: { in: questionIds } },
    });

    let score = 0;
    const detailedAnswers: UserAnswer[] = answers.map((a) => {
      const q = questions.find((item: any) => item.id === a.qId);
      const isCorrect = q?.correct === a.userAns;
      if (isCorrect) score++;
      return {
        qId: a.qId,
        userAns: a.userAns,
        isCorrect,
        correctAns: q?.correct,
      };
    });

    const wrongAnswers = detailedAnswers
      .filter((a) => !a.isCorrect)
      .map((a) => {
        const q = questions.find((item: any) => item.id === a.qId);
        return `- Câu: "${q?.question}"\n  Bạn chọn: "${a.userAns}"\n  Đáp án đúng: "${a.correctAns}"`;
      })
      .join("\n");

    const feedbackPrompt =
      wrongAnswers.length > 0
        ? `Bạn là chuyên gia ISTQB. Hãy phân tích kết quả thi sau và đưa ra nhận xét bằng tiếng Việt:
Điểm: ${score}/${questions.length}

Các câu trả lời sai:
${wrongAnswers}

Yêu cầu: Động viên ngắn gọn, chỉ ra điểm yếu và gợi ý chủ đề cần ôn lại (tối đa 150 từ).`
        : `Chúc mừng! Học viên đạt ${score}/${questions.length} điểm. Hãy viết một lời động viên ngắn gọn bằng tiếng Việt.`;

    let aiFeedback: string;
    try {
      const result = await withRetry(() => textModel.generateContent(feedbackPrompt));
      const response = await result.response;
      aiFeedback = response.text();
    } catch (aiErr) {
      console.warn("[/api/submit] Gemini feedback unavailable, using fallback:", aiErr);
      // Graceful fallback so the attempt is still saved
      aiFeedback =
        score === questions.length
          ? `Xuất sắc! Bạn đạt ${score}/${questions.length} điểm. Hãy tiếp tục ôn luyện để giữ vững phong độ!`
          : `Bạn đạt ${score}/${questions.length} điểm. Hãy xem lại các câu sai và ôn luyện thêm nhé! (Phân tích chi tiết tạm thời không khả dụng – vui lòng thử lại sau.)`;
    }

    const actualUserId = userId || "user-1";

    // Ensure user exists before creating attempt to prevent foreign key errors
    await prisma.user.upsert({
      where: { id: actualUserId },
      update: {},
      create: { id: actualUserId, name: "Test User" }
    });

    const attempt = await prisma.attempt.create({
      data: {
        userId: actualUserId,
        score,
        totalQs: questions.length,
        answers: detailedAnswers as any,
        aiFeedback,
      },
    });

    return NextResponse.json(attempt);
  } catch (error) {
    console.error("[/api/submit]", error);
    return NextResponse.json(
      { error: "Failed to submit with Gemini" },
      { status: 500 }
    );
  }
}
