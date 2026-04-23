import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { textModel } from "@/lib/gemini";
import type { UserAnswer } from "@/types";

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

    const result = await textModel.generateContent(feedbackPrompt);
    const response = await result.response;
    const aiFeedback = response.text();

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
