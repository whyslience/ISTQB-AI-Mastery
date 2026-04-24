import { PrismaClient } from "@prisma/client";
import { generateQuestions } from "./seedData";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 ISTQB Hardcoded Seeder starting…\n");

  const questions = generateQuestions();
  console.log(`Generated ${questions.length} questions algorithmically.`);

  let savedCount = 0;
  for (const q of questions) {
    try {
      await prisma.question.upsert({
        where: { question: q.question },
        update: {},
        create: {
          topic: q.topic,
          difficulty: q.difficulty,
          question: q.question,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation,
        },
      });
      savedCount++;
    } catch (err) {
      // Ignore duplicates
    }
  }

  const total = await prisma.question.count();
  console.log(`\n✅ Done! Inserted ${savedCount} new questions.`);
  console.log(`📊 Total questions in database: ${total}`);
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
